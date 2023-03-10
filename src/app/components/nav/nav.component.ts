import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
  ) {}

  ngOnInit(): void {}
  logout(): void {
    this.authenticationService.logout();
  }

}

