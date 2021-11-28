import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeService } from '../employe.service';
@Component({
  selector: 'app-homen',
  templateUrl: './homen.component.html',
  styleUrls: ['./homen.component.css']
})
export class HomenComponent implements OnInit {

      constructor(private employeeService: EmployeService) { }

    ngOnInit(): void {
    }
  
    onFormSubmit(userForm : NgForm){
      console.log(userForm.value)
      this.employeeService.addEmployees(userForm.value).subscribe(Resp =>{
        this.employeeService.getEmployees();
        console.log("user added.");
      })
    

   }
    ResetUserForm(userForm : NgForm){
      userForm.resetForm();
    }

    

}

