import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoList';
  newTodo='';

  editField: string;
  todooLists: Array<any> = ['tâche 1', 'tâche 2', 'tâche 3', 'tâche 4'];

  

  updateList(id: number, event: any) {
    const editField = event.target.textContent;
    this.todooLists[id]= editField;
    console.log("ok"+ this.todooLists[id]);
  }

  remove(id: any) {
    
    this.todooLists.splice(id, 1);
  }

  add() {
    if(this.newTodo.length!==0){
      const tache = this.newTodo;
      this.todooLists.push(tache);
      this.newTodo='';
      //console.log("ok"+ this.todooLists[5]['name']);
     
    }
  }
}
