import { Component, OnInit } from '@angular/core';
import { CommonService } from './shared/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dreams';

  public showSlidebar: any;
  public showHeader: any;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    // this.showHeader = this.commonService.setHeader(true);
    // this.showSlidebar = this.commonService.setSlidebar(true);
  }
}
