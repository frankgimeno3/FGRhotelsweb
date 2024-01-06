import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
    selector: 'app-navbarLogged',
    templateUrl: './navbarLogged.component.html',
    styleUrls: ['./navbarLogged.component.css']
})
export class navbarLogged implements OnInit{


    constructor(
        private userService: UserService,
        private router: Router
      ) { }
    
      ngOnInit(): void {
      }
    
      navigateToLogout() {
        this.userService.logout()
          .then(() => {
            this.router.navigate(['/main']);
          })
          .catch((error:any) => console.log(error));
      }
}