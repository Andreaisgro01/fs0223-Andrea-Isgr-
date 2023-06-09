import { TodosService } from './../../Services/todos.service';
import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/Modules/todos/todos.module';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo: Todos = new Todos("",false);
  todosArr:Todos[] = [] ;
  loading:boolean = true;
  innerText:string ="";

  constructor(private todosService:TodosService){}
  ngOnInit(): void {
    this.getTodos();
  }
  delete(id?:number){
    this.todosService.delTodo(id)
    .then((res) => {
      this.getTodos();
    })
  }
  getTodos(){
    this.todosService.getTodos().then(response => {
    this.todosArr = response;
    this.loading = false;
})
}
  newElement(){
      if(this.innerText==""){
      this.innerText = "inserire todo"
      }else if(this.innerText=="inserire to-do"){
      this.innerText = "inserire todo"
      }
      else{this.todosService.addTodo(this.todo).then(res => this.getTodos());
      this.innerText = "";
    }
  }
  complete(id?:number){
      this.todosService.toggleFalseCompleted(id).then(res => this.getTodos())
  }
}
