import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  passwordType: string = 'password';
  passwordIcon: string = 'eye';
  passwordShow: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public togglePassword(){
    if(this.passwordShow){
      this.passwordShow = false;
      this.passwordType = 'password'
      this.passwordIcon = 'eye';
    }else{
      this.passwordShow = true;
      this.passwordType = "text";
      this.passwordIcon = 'eye-off';
    }
  }
  
  newPassword(){
    
  }

  goRegister(){
    this.router.navigateByUrl('/register')
  }

}
