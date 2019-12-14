import {ListInterface} from '../list/list.model';

export interface BoardInterface {
  id: string;
  name: string;
  lists: ListInterface[];

}
export class BoardModel implements BoardInterface {
  id: string;
  name: string;
  lists: ListInterface[];
  constructor() {
  }

}