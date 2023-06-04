import { Injectable } from '@angular/core';
import { Todos } from '../Modules/todos/todos.module'
import { Itodo } from '../Interfaces/itodo';


@Injectable({
  providedIn: 'root'
})
export class TodosService {
  apiUrl: string = 'http://localhost:3000/todos';
  todosArr:Todos[] = []

  constructor() { }

  getTodos():Promise<Todos[]> {
    return fetch(this.apiUrl).then((response) => response.json())
}

  addTodo(todo:Itodo):Promise<Itodo>{
    return fetch(this.apiUrl,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    }).then(response=>response.json())
  }
  delTodo(id:number = 0){
    return fetch(this.apiUrl+'/'+id,{
      method:'DELETE'
    }).then(response => response.json());
  }
  toggleFalseCompleted(id:number = 0) {
    return fetch(this.apiUrl+'/'+id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ completed: true })
    }).then((res) => res.json());
  }
}
