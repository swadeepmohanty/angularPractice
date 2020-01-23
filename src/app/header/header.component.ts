import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  pageRequested = 1;

  @Output()
  pageChangeEvent = new EventEmitter<number>();

  ngOnInit() {
  }

  onPageChange(page: number) {
    this.pageRequested = page;
    console.log(this.pageRequested);
    this.pageChangeEvent.emit(page);
  }
}
