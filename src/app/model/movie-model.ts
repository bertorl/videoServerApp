import { ActorModel } from './actor-model';

export class MovieModel {
  id: number;
  title: string;
  actors: Array<ActorModel>;
  posterID: string;
  filmExternalURL: string;
}
