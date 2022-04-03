import { Component, HostListener, OnInit } from '@angular/core';
import { KitsuService } from '../services/kitsu.service';


@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})

export class AnimesComponent implements OnInit {

  animes: any[] = [];
  yOffset = 2000;
  initialSize = 18;
  pageOffset = 0;
  incrementalSize = 4;
  constructor(private kitsu: KitsuService) { }

  ngOnInit(): void {
    this.kitsu.getAnimes(this.initialSize,this.pageOffset).subscribe(res => {
      this.animes = res.data;
      this.pageOffset = this.initialSize;
    });
  }

  // @HostListener('window:scroll', ['$event']) 
  // getScrollHeight(event:any) {
  //   if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
  //     this.yOffset = window.pageYOffset;
  //     this.pageOffset += this.incrementalSize;
  //     this.kitsu.getAnimes(this.incrementalSize, this.pageOffset).subscribe(res => {
  //       console.log(res.data);
  //       this.animes.push(...res.data);
  //     })
  //   }
  // }

}
