import { Component, OnInit } from '@angular/core';
import { GetService } from '../../get.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-videoslist',
  templateUrl: './videoslist.component.html',
  styleUrls: ['./videoslist.component.css'],

})
export class VideoslistComponent implements OnInit {


  private videos: any = [];
  path ="../../../assets/" ;

  constructor(private getService: GetService,private router:Router,private _route: ActivatedRoute) { }

  ngOnInit() {
      this.getService.getAllVideos().subscribe(videosList => {
      this.videos = videosList;
    });
  }
  reserve(id) {
    this.router.navigate(['/reserve'],{ queryParams: {'id': id}});
 }
}


