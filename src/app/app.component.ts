import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  taskArray:any=[]
  inputTask: any;
  visible?:boolean
  completeArray:any=[]
i: any;


  addTask(formContent: any): void {
    this.taskArray.push(formContent.value.task)
    // console.log(formContent);
    formContent.reset()
  // console.log(this.taskArray);
    // console.log(formContent.value ='value');
  }

  onComplete(i:number) {
     this.visible=!this.visible
     let complete =this.taskArray.splice(i,1)
     this.completeArray?.push(complete)
      console.log(this.completeArray);
  }

  onDelete(i: any) {
    this.completeArray.splice(i,1)
  }
}
