import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KitsuService } from '../services/kitsu.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {

  id: number = 0;
  anime: any = {};
  genres: string[] = [];
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
      console.log(this.anime);
    })
  }

}
