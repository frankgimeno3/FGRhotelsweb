import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

    constructor(
        private userService: UserService,
        private router: Router
      ) { }
    
      ngOnInit(): void {
      }
    
      onClick() {
        this.userService.logout()
          .then(() => {
            this.router.navigate(['/register']);
          })
          .catch((error:any) => console.log(error));
      }
     
 }