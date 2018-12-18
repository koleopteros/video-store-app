import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { SessionStorageService} from 'angular-web-storage';
import { GetService } from '../../get.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminData:any[];
  submitted = false;
  redirect = 0;
  message:any;

  constructor(private router:Router,private session:SessionStorageService,private getService: GetService,private _route: ActivatedRoute) { }

  ngOnInit() {
      this.getService.getAdmin().subscribe(data => {
          this.adminData = data;
        });
      this._route.queryParams.subscribe(params => {
          this.message = params['authentication'];
        });
  }

  onSubmit(username,password){

    for (let i = 0; i < this.adminData.length; i++) {
      if( username.value === this.adminData[i].email && password.value === this.adminData[i].password  ){
        this.session.set('logged',true,0);
        this.router.navigate(['/admin'],{queryParams: {'authentication': 'Successful'}});
      }
      else{
        this.submitted=true;
      }
    }
  }



}
