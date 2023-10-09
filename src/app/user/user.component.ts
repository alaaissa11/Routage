import { Component } from '@angular/core';
import { Router } from '@angular/router';
Router

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private r:Router){}
  gotoadd(){
    this.r.navigate(["user/adduser"]);
  }
  gotoedit(x:number){
    this.r.navigate(["user/editUser",x]);
  }
}
