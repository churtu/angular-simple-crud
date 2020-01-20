import { Component } from '@angular/core';
import {Employee} from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedEmployee:Employee = new Employee();
  employees : Employee[] = [
    {
      id: 1, name: "Christian", country: "Chile"
    },
    {
      id: 2, name: "Cami", country: "Chile"
    },
    {
      id: 3, name: "Juan", country: "Brazil"
    }
  ];

  addOrEdit():void{
    if(this.selectedEmployee.id == 0){
      this.selectedEmployee.id = this.employees.length+1;
      this.employees.push(this.selectedEmployee);
    }else{
      this.selectedEmployee = new Employee();
    }
    
  }

  openForEdit(employee:Employee){
    this.selectedEmployee = employee;
  }

  delete(){
    if(confirm('Are you sure?')){
      this.employees = this.employees.filter(
        employee => employee != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }
}
