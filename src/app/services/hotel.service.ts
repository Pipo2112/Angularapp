import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Hotel} from '../models/Hotel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {
 API_URL ='http://127.0.0.1:3000/api'
  constructor(private http: HttpClient) {

  }  
  getHoteles(){
    return this.http.get(`${this.API_URL}/hoteles`);
  }
  getHotel(id:number){
    return this.http.get(`${this.API_URL}/hoteles/${id}`);
  }
  getCalificacion(id:number){
    return this.http.get(`${this.API_URL}/hoteles/calificacion/${id}`);
  }
  getFoto(id:number){
    return this.http.get(`${this.API_URL}/hoteles/fotos/${id}`);
  }
  deleteHotel(id:string){
    return this.http.delete(`${this.API_URL}/hoteles/${id}`);
  } 

  saveHotel(hotel:Hotel):Observable<any>{
   const httpoptions = {
     headers:new HttpHeaders({'content-type':'application/json'})
   }
    let json = JSON.stringify(hotel); 
      return this.http.post(`${this.API_URL}/hoteles`,json,httpoptions);
  } 

  updateHotel(id:any, updateHotel:Hotel):Observable<Hotel>{
    const httpoptions = {
      headers:new HttpHeaders({'content-type':'application/json'})
    }
     let json = JSON.stringify(updateHotel); 
    return this.http.put(`${this.API_URL}/hoteles/${id}`,json,httpoptions);
  }
  filtroHotel(tipo:string, filtro:string){
    return this.http.get(`${this.API_URL}/hoteles/?tipo=${tipo}?filtro=${filtro}`);
  }


}