import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Video } from '../../videos';
import { SessionStorageService } from 'angular-web-storage';
import { GetService } from '../../get.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  videos = new Video();
  videosData: any;
  img: File;
  img2: any;
  path= "../../../assets/";

  constructor(private getService: GetService,private router:Router,private session:SessionStorageService,private http: HttpClient) { }

  onSubmit(title, runTime, genre, ratings, director, status) {

    if( this.img == null) {
      this.img2 = "default.jpg";
      //assigned values to be updated
      this.videosData = {title:title.value,runTime: runTime.value,genre:genre.value,ratings:ratings.value,director:director.value,status:status.value,image:this.img2}
       // update video
       this.getService.addVideo(this.videosData).subscribe(data => {
        data =this.videosData;
      window.alert("Video Added!");
         this.router.navigate(['/admin']);
        });
      }else{
        const form = new FormData();
        form.append('image',this.img ,this.img.name);
        this.img2 = this.img.name
        //assigned values to be updated
        this.videosData = {title:title.value,runTime: runTime.value,genre:genre.value,ratings:ratings.value,director:director.value,status:status.value,image:this.img2}
        // update video
        this.getService.addVideo(this.videosData).subscribe(data => {
        data =this.videosData;
        window.alert("Video Updated!");

        this.router.navigate(['/admin']);
      });
        this.getService.addImage(form).subscribe(data => {
          return false;
        });
    }
  }

  onFileSelected(event){
    this.img = <File>event.target.files[0];
    if (this.img == null) {this.img2 = "default.jpg";}
    else { this.img2 = this.img.name; }
    const form = new FormData();
    form.append('image',this.img ,this.img.name);
    console.log(this.img2);
  }

  ngOnInit() {
     //session handle
    if (this.img == null) {this.img2="default.jpg";}
    else {this.img2 = this.img.name;}
    if(!this.session.get('logged'))
      this.router.navigate(['/login'],{queryParams: {'authentication': 'Faliure'}});
  }
}
