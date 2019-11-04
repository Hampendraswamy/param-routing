import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'param-routing';
  
  
  val="swamy"
  a=10;
  b=20;
  display=(this.a==this.b);
  color;

  fruits:any=["Banana","Sapota","Mango","Grapes","Apple"]
  
}
