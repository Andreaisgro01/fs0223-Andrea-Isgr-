
import { Itodo } from "../../Interfaces/itodo";
export class Todos implements Itodo {
  id?: number;
  title: string;
  completed: boolean;

  constructor(title: string, completed: boolean,  id?: number){
    this.title = title;
    this.completed = completed;
    this.id = id;
  }
}
