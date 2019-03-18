import { Component } from '@angular/core';
import { UserData } from 'users.js'
import { DataService } from './Services/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-display';
  constructor(public dataService: DataService) { } 
  ngOnInit() {
    this.dataService.serviceData = UserData()
  }
}
