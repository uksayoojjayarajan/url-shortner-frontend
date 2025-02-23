import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UrlShortnerService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  shortenUrl(longUrl: string): Observable<{ shortUrl: string }> {
    return this.http.post<{ shortUrl: string }>(`${this.apiUrl}`, { longUrl });
  }
}
