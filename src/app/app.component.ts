import { Component, ViewChild, OnInit } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { Page2Component } from './page2/page2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular Practice';

  @ViewChild('footer', {static: true})
  footerComponent: FooterComponent;

  @ViewChild('page2', {static: true})
  page2Component: Page2Component;

  startTime: string;

  currentPage = 1;

  updateLastAccess() {
    this.footerComponent.lastAccessed = new Date().toDateString();
  }

  ngOnInit(): void {
    this.startTime = new Date().toDateString();
  }

  incrementHitCounter(page: number) {
    this.currentPage = page;
    if (page === 2) {
      this.page2Component.incrementHitCounter();
    }
  }
}
