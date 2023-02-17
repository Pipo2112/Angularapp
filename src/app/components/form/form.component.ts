import { Component, HostBinding, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import {usersService} from '../../services/users.service';
import {ActivatedRoute,Router} from '@angular/router';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @HostBinding('class') classes ='row';
  user:User ={
    nombre:"",
    email:"",
    edad: 0,
    telefono:0,
    estado:"",
    created_at: new Date(),

  }
  
  edit: boolean=false;
  constructor(private usersService: usersService, private router:Router, private activedRoute: ActivatedRoute) {
    
  } 

  ngOnInit(): void {
    const params= this.activedRoute.snapshot.params;
    if (params.id){
      this.usersService.getUser(params.id)
      .subscribe(
        res=>{
          console.log(res);
          this.user = res;
          this.edit=true;

        },
        err => console.log(err)
      )
    }
  }
  NewUser(){


    delete this.user.created_at;
    
    delete this.user.id_user;
    console.log(this.user);

    this.usersService.saveUser(this.user).subscribe(datos =>{
      console.log(datos);
    });
    
  }

  updateUser(){
    delete this.user.created_at;

    this.usersService.updateUser(this.user.id_user, this.user)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/users']);
  
      },
      err => console.log(err)
    )

  }
}
