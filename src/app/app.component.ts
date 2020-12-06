import { Component } from '@angular/core';
import {WikipediaService} from './wikipedia.service';
import {pluck, tap} from 'rxjs/operators';

export interface Wiki {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: Wiki[] = [];
  constructor(public wikipedia: WikipediaService) {}

  onTerm($event: string) {
    this.wikipedia.search($event).pipe(
      tap(value => console.log(value)),
    ).subscribe(results => this.pages = results);
  }
}
