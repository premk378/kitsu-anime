import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from '../models/anime-model';
import { AnimeResource } from '../models/anime-resource-wrapper-model';
import { AnimeWrapper } from '../models/anime-wrapper-model';
import { GenreWrapper } from '../models/genre-model';

@Injectable({
  providedIn: 'root'
})
export class KitsuService {

  private baseUrl: string = 'https://kitsu.io/api/edge/';
  //private genreUrl: string = 'https://kitsu.io/api/genre/';

  constructor(private http: HttpClient) { }

  getAnimes(pageLimit?: number, offset?: number): Observable<AnimeResource> {
    const endpoint = 'anime';
    let queryParams: HttpParams = new HttpParams();
    if(pageLimit) queryParams = queryParams.append('page[limit]', pageLimit);
    if(offset) queryParams = queryParams.append('page[offset]', offset);
    return this.http.get<AnimeResource>(this.baseUrl+endpoint, {params: queryParams});
  }

  getAnimeById(id: number): Observable<AnimeWrapper> {
    const endpoint = `anime/${id}`;
    return this.http.get<AnimeWrapper>(this.baseUrl+endpoint);
  }

  getGenres(id: number): Observable<GenreWrapper> {
    const endpoint = `genres/${id}`;
    return this.http.get<GenreWrapper>(this.baseUrl+endpoint);
  }

  callApi(url: string): Observable<any> {
    return this.http.get(url);
  }

}
