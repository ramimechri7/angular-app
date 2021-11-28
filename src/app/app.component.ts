import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyApp';
  c=0;
  name="";
  ngOnInit(){
    this.name = localStorage.getItem("nom");
  };
  clicked(t){
    this.c++

    this.name= t.value;
    console.log(this.name);
  
    localStorage.setItem("nom",this.name)
  
  }
}
