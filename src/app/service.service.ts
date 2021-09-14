import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private readonly httpClient: HttpClient) { }
  fetchData(): Observable<any> {
    return this.httpClient
      .get('https://www.worldtimeapi.org/api/timezone/Indian/Cocos')
  }
}
