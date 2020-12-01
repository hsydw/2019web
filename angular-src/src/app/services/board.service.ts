import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Write } from '../models/Board';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
@Injectable({
  providedIn: 'root'
})
export class BoardService {
  write : Write;

  constructor(private http: HttpClient) {}
    
      writeUser(write): Observable<any> {
        const writeUrl = 'http://localhost:3000/users/write';
        return this.http.post(writeUrl, write, httpOptions);
      }
    
}
