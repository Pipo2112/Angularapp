import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User} from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class usersService {

  constructor(private http: HttpClient) {

  }  
  getusers(){
    return this.http.get<any>(`/api/users`);
  }
  getUser(id:number){
    return this.http.get(`/users/${id}`);
  }
  deleteUser(id:string){
    return this.http.delete(`/users/${id}`);
  } 

  saveUser(user:User):Observable<any>{
   const httpoptions = {
     headers:new HttpHeaders({'content-type':'application/json'})
   }
    let json = JSON.stringify(user); 
      return this.http.post(`/users`,json,httpoptions);
  } 

  updateUser(id:any, updateUser:User):Observable<User>{
    const httpoptions = {
      headers:new HttpHeaders({'content-type':'application/json'})
    }
     let json = JSON.stringify(updateUser); 
    return this.http.put(`//${id}`,json,httpoptions);
  }


}
