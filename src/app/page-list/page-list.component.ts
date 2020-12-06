import {Component, Input, OnInit} from '@angular/core';
import {Wiki} from '../app.component';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  @Input() pages: Wiki[] = [];

  constructor() { }

  ngOnInit() {
  }

}
