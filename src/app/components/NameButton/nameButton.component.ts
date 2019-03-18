import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service'

@Component({
  selector: 'NameButton',
  templateUrl: './nameButton.component.html',
  styleUrls: ['./nameButton.component.css']
})

export class NameButton implements OnInit {

  get data(): [object] {
    return this.dataService.serviceData;
  }

  constructor(public dataService: DataService) { }
  userData;
  name;
  ngOnInit() {
    this.userData = this.data;
    this.name = this.userData.map((user) => {
      return { "name": user.name.first + " " + user.name.last, "id": user._id }
    })
  }
}