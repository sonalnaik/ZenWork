import { Injectable } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError,concatMap,flatMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 constructor( private http: HttpClient) { }

  isLoggedIn() {
   return this.http.get("/api/session-check");
    
  }

  login(Logindata){
    return this.http.post("/api/login",Logindata);
  }

  addSubUser(subUserData){
    return this.http.post("/sub-user/addSubUser",subUserData);
  }

  addShop(shopData){
    return this.http.post("/shop/addShop",shopData);
  }
  registerUser(userData){
    return this.http.post("/api/register",userData);
  }

  getSubUser(){
    return this.http.get("/sub-user/getSubUser");
  }

  allShops(){
    return this.http.get("/shop/allShops");
  }
}
