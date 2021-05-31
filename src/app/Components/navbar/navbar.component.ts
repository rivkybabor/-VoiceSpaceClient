import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
permission:number
  ngOnInit(): void {
     this.permission=JSON.parse(localStorage.getItem('currentUser')).myData.IdPermission;

  }

}
