import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { GetService } from '../../get.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  id: any;
  videosData: any;
  customers: any = [];
  status = {status:"unavaliable"};
  path ="../../../assets/" ;

  constructor(private getService: GetService,private router:Router,private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {this.id =params.id;});
    if(this.id !=null){
      this.getService.getOne(this.id).subscribe(videosList => {
        this.videosData = [videosList];
      });
    }else{
      this.router.navigate(['admin']);
    }
    this.getService.getAllCustomers().subscribe(list => {
      this.customers = list;
    });
  }

  update(id){
    this.videosData.status = "unavailable";
    this.getService.updateFieldVideo(this.status,this.id).subscribe(data => {
      data = this.videosData;
    });
    this.router.navigate(['']);
  }
}
