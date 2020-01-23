import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor() { }

  pageName = 'Page One';

  ngOnInit() {
    setTimeout( () => { this.pageName = 'First Page' } , 5000);
  }

  onButtonClick() {
    alert('Hello - the date is ' + new Date());
  }
}
