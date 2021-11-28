import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private employeeService: EmployeService) { }


  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(resp=>{
      this.dataSource=resp;
    })
  }
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'age','action'];
  dataSource:any;
  showedit=false;
  employeeToEdit:any
  idemployeeToEdit:number;
  editEmployee(employee){
    this.idemployeeToEdit=employee.id;
    this.employeeToEdit=employee;
    this.showedit=true
  }
  editMyEmployee(){
  this.employeeService.editEmployee(this.idemployeeToEdit,this.employeeToEdit).subscribe(resp=>{
    console.log("user edited.");
    this.showedit=false;
    this.employeeService.getEmployees().subscribe(resp=>{
      this.dataSource=resp;
    })

  })
  
  }
  deleteEmployee(id){
    this.employeeService.deleteEmployees(id).subscribe(resp=>{
      console.log("user deleted.");
      this.employeeService.getEmployees().subscribe(resp=>{
        this.dataSource=resp;
      })
    })
  }

   
   

 

}

