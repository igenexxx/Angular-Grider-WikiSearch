import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Wiki} from './app.component';
import {pluck} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  search(term: string): Observable<Wiki[]> {
    return this.http.get<{ query: { search: Wiki[] }}>(`https://en.wikipedia.org/w/api.php`, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      }
    }).pipe(
      pluck('query', 'search'),
    );
  }
}
