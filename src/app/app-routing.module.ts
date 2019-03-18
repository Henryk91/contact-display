import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NameButton } from './components/NameButton/nameButton.component'
import { ContactDetail } from './components/ContactDetail/contactDetail.component'
import { DataService } from './Services/data.service';

@NgModule({
  declarations: [ 
    NameButton, ContactDetail
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
    { path: 'home', component: NameButton },
    { path: 'contact/:id', component: ContactDetail , data : {some_data : 'some value'}},
    { path: '**', redirectTo: 'home' },
  ])],
  exports: [RouterModule],
  providers: [ DataService ],
})
export class AppRoutingModule { }
