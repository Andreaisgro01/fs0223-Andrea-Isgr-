import { TodosService } from 'src/app/Services/todos.service';
import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/Modules/todos/todos.module';


@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {
    todosArr: Todos[] = [];
    todo: Todos = new Todos("",false);
    loading:boolean = true;
    constructor(private todosService:TodosService){ }
    ngOnInit(): void {
    this.getTodos();
    }
    getTodos() {
      this.todosService.getTodos().then(res =>{
        this.todosArr = res.filter(todo => todo.completed == true)
        this.loading = false;
      })

  }
  delete(id?:number){
    this.todosService.delTodo(id).then(res =>{
    this.getTodos()
    })
  }
  complete(id?:number){
    this.todosService.toggleFalseCompleted(id).then(res => this.getTodos())
  }
 

}
