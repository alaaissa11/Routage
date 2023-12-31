import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
ActivatedRoute

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  id!:number;
  constructor(private actR:ActivatedRoute){}
  ngOnInit(){//this.id=Number(this.actR.snapshot.paramMap.get('param'));
    this.actR.paramMap.subscribe(data => this.id=Number(data.get('param')));}
}
