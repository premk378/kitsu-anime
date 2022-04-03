import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime } from '../models/anime-model';
import { Genre } from '../models/genre-model';
import { KitsuService } from '../services/kitsu.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {

  id: number = 0;
  anime: Anime = new Anime();
  genres: Genre[] = [];
  constructor(private route: ActivatedRoute,
    private kitsu: KitsuService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.getAnimeById();
    })
  }

  getAnimeById() {
    this.kitsu.getAnimeById(this.id).subscribe(res => {
      this.anime = res.data;
      if(this.anime?.relationships?.categories?.links?.self) {
        this.kitsu.callApi(this.anime.relationships.genres.links.self).subscribe(res => {
          let respArray:any[] = res.data;
          if(respArray && respArray.length > 0) {
            respArray.forEach(gen => {
              this.kitsu.getGenres(gen.id).subscribe(genre => this.genres.push(genre.data));
            });
          }
        })
      }
    })
  }

}
