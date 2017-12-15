import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TickTockService } from 'poc-shared/dist';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public title = 'Ampath POC';
  public momentTime: string;
  constructor(private ticktockService: TickTockService) {
  }

  public ngOnInit() {
    this.ticktockService.momentTime().subscribe((momentTime) => {
      this.momentTime = momentTime;
    })
  }
}
