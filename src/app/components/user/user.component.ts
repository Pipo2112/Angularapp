import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import {usersService} from '../../services/users.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any =[];
  user:User ={
    nombre:"",
    email:"",
    edad: 0,
    telefono:0,
    estado:"",
    created_at: new Date(),
    password: "",

  }
  constructor(private usersService: usersService, private router:Router, private activedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    const params= this.activedRoute.snapshot.params;
    if (params.id){
      this.usersService.getUser(params.id)
      .subscribe(
        res=>{
          console.log(res,"users");
          this.user = res;
        

        },
        err => console.log(err)
      )
    }
    
      }
      getUser(id:number){
        this.usersService.getUser(id).subscribe(
          res=> {
            this.users =res;
          },
          err=>console.error(err)
        
        );
      }
  
}
