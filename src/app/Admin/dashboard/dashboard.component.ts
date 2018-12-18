import { Component, OnInit } from '@angular/core';
import { GetService } from '../../get.service';
import { ActivatedRoute,Router} from '@angular/router';
import { SessionStorageService} from 'angular-web-storage';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {

  videos: any = [];
  path ="../../../assets/" ;
  message:any;

  constructor(private getService: GetService,private router:Router,private _route: ActivatedRoute,private session:SessionStorageService) { }

  ngOnInit() {
    if(this.session.get('logged')){
    this._route.queryParams.subscribe(params => {this.message =params['authentication'];if(this.message == "Successful")window.location.reload();this.router.navigate(['/admin'])});

    this.getService.getAllVideos().subscribe(videosList => {
      this.videos = videosList;
        });
    }else{
      this.router.navigate(['/login'],{queryParams: {'authentication': 'Faliure'}});
    }
  }

  update(id){
    this.router.navigate(['/update'],{queryParams: {'id': id}});
   }

  delete(id){
    this.getService.delete(id).subscribe(video =>
      {
        this.videos.splice(id,1);
        this.router.navigate(['/admin']);
      });
  }
}
