import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {

  @Input() day = "Friday";
  @Output() newItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value:string){
    this.newItem.emit(value);
  }

}
