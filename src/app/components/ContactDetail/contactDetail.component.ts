import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from '../../Services/data.service'

@Component({
  selector: 'ContactDetail',
  templateUrl: './contactDetail.component.html',
  styleUrls: ['./contactDetail.component.css']
})
export class ContactDetail {
  
  get data():[object] { 
    return this.dataService.serviceData; 
  }   
  constructor(private route: ActivatedRoute , public dataService: DataService) { }
  id = ''
  userData;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    this.userData = this.data;
    this.data ? this.userData = this.userData.filter((val) => (val._id === this.id))[0] : null   
  }
  title = 'contact-display';
}
