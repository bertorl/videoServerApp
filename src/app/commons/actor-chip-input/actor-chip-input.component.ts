import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActorModel } from 'src/app/model/actor-model';
import { FormControl } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {map, startWith} from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-actor-chip-input',
  templateUrl: './actor-chip-input.component.html',
  styleUrls: ['./actor-chip-input.component.scss']
})
export class ActorChipInputComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  actorCtrl = new FormControl();
  filteredActors: Observable<Array<ActorModel>>;
  selectedActors: Array<ActorModel> = [];

  @Input()
  actorsList: Array<ActorModel>;

  @ViewChild('actorInput')
  actorInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto')
  matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredActors = this.actorCtrl.valueChanges.pipe(startWith(null),
      map((actor: ActorModel | null) => actor ? this._filter(actor) : this.actorsList.slice()));
  }

  ngOnInit(): void {
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedActors.push(event.option.value);

    const index = this.actorsList.indexOf(event.option.value);
    if (index >= 0) {
      this.actorsList.splice(index, 1);
    }

    this.actorInput.nativeElement.value = '';
    this.actorCtrl.setValue(null);
  }


  remove(actor: ActorModel): void {
    this.actorsList.push(actor);
    const index = this.selectedActors.indexOf(actor);
    if (index >= 0) {
      this.selectedActors.splice(index, 1);
    }
  }

  private _filter(value: any): Array<ActorModel> {
    let actorSelected = value;
    if (value.constructor === String) {
      actorSelected = new ActorModel();
      actorSelected.name = value;
    }
    const filterValue = actorSelected.name.toLowerCase();
    return this.actorsList.filter(actor => actor.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
