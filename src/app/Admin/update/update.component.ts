import { Component, OnInit } from '@angular/core';
import { Video } from '../../videos';
import { GetService } from '../../get.service';
import { ActivatedRoute, Router} from '@angular/router';
import { SessionStorageService} from 'angular-web-storage';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  imageSrc:any;
  videos =new Video();
  id: any;
  videosData = {title:"",runTime: "", genre: "", ratings: "" , director: "",status:"", image:"" };
  path ="../../../assets/" ;
  img: File;
  img2: any;

  constructor(private getService: GetService,private router:Router,private _route: ActivatedRoute,private session:SessionStorageService) { }

  onSubmit(title, runTime, genre, ratings, director, status) {

    if( this.img == null) {
      this.img2 = "default.jpg";
      this.videosData = {title:title.value,runTime: runTime.value,genre:genre.value,ratings:ratings.value,director:director.value,status:status.value,image:this.img2}
      this.getService.updateVideo(this.videosData,this.id).subscribe(data => {
        data =this.videosData;
        window.alert("Video Updated!");

        this.router.navigate(['admin']);
       });

      }else{
      const form = new FormData();
      form.append('image',this.img ,this.img.name);
      this.img2 = this.img.name;
       this.videosData = {title:title.value,runTime: runTime.value,genre:genre.value,ratings:ratings.value,director:director.value,status:status.value,image:this.img2}
       this.getService.updateVideo(this.videosData,this.id).subscribe(data => {
         data =this.videosData;
         window.alert("Video Updated!");

         this.router.navigate(['admin']);
        });
      this.getService.addImage(form).subscribe(data => {
        return false;
      });
    }
  }

  ngOnInit() {

    if(this.session.get('logged')){
      this._route.queryParams.subscribe(params => {this.id = params.id;
      });

      if(this.id != null){
        this.getService.getOne(this.id).subscribe(video => {
          this.videosData = video;
          this.imageSrc = video.image.originalname;
        });
      }else{
        this.router.navigate(['admin']);
      }
    }else{
      this.router.navigate(['/login'],{queryParams: {'authentication': 'Faliure'}});
    }
  }

  onFileSelected(event){
    this.img = <File>event.target.files[0];
    if(this.img == null) {this.img2 = "default.jpg";}
    else{this.img2 = this.img.name}
    const form = new FormData();
    form.append('image',this.img ,this.img.name);
    console.log(this.img);
  }
}
