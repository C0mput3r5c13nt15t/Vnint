import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private headers = new HttpHeaders({
    accept: 'application/json',
    contentType: 'application/json',
  });
  private options = { this:this.headers, withCredentials: false };

  constructor(private http: HttpClient,
              private translate: TranslateService) { }

  public getQuote(): Observable<object> {
    return this.http.get('https://quotes.rest/qod?language=en', this.options);
  }

}
