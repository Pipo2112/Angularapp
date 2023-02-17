import { ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, HostBinding, OnInit } from '@angular/core';
import { identity } from 'rxjs';
import {usersService} from '../../services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @HostBinding ('class') classes='row'
    users: any =[];
    constructor(private usersService: usersService) { }
 
  
    ngOnInit(): void {
   this.getusers();
   
       
    }
    getusers(){
      this.usersService.getusers().subscribe(
        res=> {
          this.users =res.docs;
          console.log(res.docs )
        },
        err=>console.error(err)
      
      );
    }
    deleteUser(id:string){
      this.usersService.deleteUser(id).subscribe(
        res=> {
  
          this.getusers();
          
        },
        err=>console.error(err)
      
      );
      

    }

  }


