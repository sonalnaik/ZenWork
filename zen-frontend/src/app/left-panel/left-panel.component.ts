import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  constructor(private routes : Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem("sessionKey");
    this.routes.navigate(['login']);
  }
}