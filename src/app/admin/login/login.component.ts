import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentDay = "Monday";
  newAddedItems = ["paper", "pen", "juices"];
  constructor() { }

  addItem(newIteam: string) {
    this.newAddedItems.push(newIteam);
  }
  ngOnInit(): void {
  }

}
