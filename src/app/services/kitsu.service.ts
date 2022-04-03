import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KitsuService {

  private baseUrl: string = 'https://kitsu.io/api/edge/'
  constructor(private http: HttpClient) { }

  getAnimes(pageLimit?: number, offset?: number): Observable<any> {
    const endpoint = 'anime';
    let queryParams: HttpParams = new HttpParams();
    if(pageLimit) queryParams = queryParams.append('page[limit]', pageLimit);
    if(offset) queryParams = queryParams.append('page[offset]', offset);
    return this.http.get(this.baseUrl+endpoint, {params: queryParams});
  }

  getAnimeById(id: number): Observable<any> {
    const endpoint = `anime/${id}`;
    return this.http.get(this.baseUrl+endpoint);
  }
}
