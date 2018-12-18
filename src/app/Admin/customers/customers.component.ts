import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { GetService } from '../../get.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: any = [];

  constructor(private getService: GetService,private session:SessionStorageService,private router:Router) {}

  ngOnInit() {
    if(this.session.get('logged')){
      this.getService.getAllCustomers().subscribe(gets => {this.customers = gets;});
    }else{
      this.router.navigate(['/login'],{queryParams: {'authentication': 'Faliure'}});
    }
  }
}
