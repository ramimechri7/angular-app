import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeService {



  constructor( public http:HttpClient  ) { }


getEmployees(){
  return this.http.get("http://localhost:3000/employees");
}
addEmployees(employee){
  return this.http.post("http://localhost:3000/employees",employee);
}
deleteEmployees(id){
  return this.http.delete("http://localhost:3000/employees/"+id);
}
editEmployee(id,employee){
  return this.http.patch("http://localhost:3000/employees/"+id,employee)
}



}
