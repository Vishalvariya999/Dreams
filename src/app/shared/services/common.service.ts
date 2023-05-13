import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public header = new BehaviorSubject<boolean>(false);
  public showHeader = this.header.asObservable();
  public slidebar = new BehaviorSubject<boolean>(false);
  public showSlidebar = this.slidebar.asObservable();

  constructor() {}

  public setHeader(showHeader: any) {
    this.header.next(showHeader);
  }

  public setSlidebar(slidebar: any) {
    this.slidebar.next(slidebar);
  }
}
