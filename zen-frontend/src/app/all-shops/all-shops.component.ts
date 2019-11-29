import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-all-shops',
  templateUrl: './all-shops.component.html',
  styleUrls: ['./all-shops.component.css']
})
export class AllShopsComponent implements OnInit {
  cols: any[];
  shops:any;
  display: boolean = false;
  row:any;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getShopList();
    this.cols = [

      { field: 'name', header: 'Shop Name', width: '25%' },
      { field: 'email', header: 'Email',width: '15%' },
      { field: 'created', header: 'Created Date',width: '25%' },
     
  ];
  }
  getShopList(){
    this.authService.allShops().subscribe(
      (data:any)=>{
        console.log(data);
        if(data.success==true){
          this.shops=data.data;
        }
      }
    ),(err)=>{
        console.log("Error While fetching");
    }
  }

  showDetail(rowData){
    console.log(rowData);
    this.display = true;
    this.row=rowData;
    console.log(this.row);
    
  }

}
