import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(
    private router: Router,
    private userService: UserService){
  }

  onsubmit(f: NgForm){
    // console.log(f.value);

    if(f.valid==false){
      let alert = document.getElementById("alert-valid");
      alert.style.display= "block";
      setTimeout(function(){
        alert.style.display= "none"
      }, 3000);
      return;
    }

    // if(!f.value.email.endsWith("@tektontest.com")){
    //   let alert = document.getElementById("alert-email");
    //   alert.style.display= "block";
    //   setTimeout(function(){
    //     alert.style.display= "none"
    //   }, 3000);
    //   return;
    // }

    if(f.value.email == "cajero" && f.value.password == "cajero"){
      this.userService.user.setEmail(f.value.email);
      this.userService.user.setPassword(f.value.password);

      this.userService.setUserLoggedIn();

      this.router.navigate(['/cajero']);
    }
    if(f.value.email == "chef" && f.value.password == "chef"){
      this.userService.user.setEmail(f.value.email);
      this.userService.user.setPassword(f.value.password);

      this.userService.setUserLoggedIn();

      this.router.navigate(['/chef']);
    }
    if(f.value.email == "admin" && f.value.password == "admin"){
      this.userService.user.setEmail(f.value.email);
      this.userService.user.setPassword(f.value.password);

      this.userService.setUserLoggedIn();

      this.router.navigate(['/admin']);
    }
  }
}
