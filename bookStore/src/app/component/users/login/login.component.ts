import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }
  public email: string ='';
  public password: string =''
  ngOnInit() {
  }

  onLogin(): void{
   
    this.authService.loginEmailUser(this.email, this.password)
    .then((res) =>{
      this.onLoginRedirect();
    }).catch( this.consoleLog());
  }

  onLoginGoogle(): void {
    this.authService.onLoginGoogle() //Este nombre no es como el de dominicode
    .then ((res)=>{
      console.log('resUser', res);
      this.onLoginRedirect();
    }).catch(this.consoleLog());
  }

    
  onLoginFacebook(): void{
    this.authService.onLoginFacebook()
    .then((res) => {
      this.onLoginRedirect();
    }).catch(this.consoleLog());
   
  }
  
  onLogout(){
    this.authService.logOutUser();
  }

  onLoginRedirect(): void{
    this.router.navigate(['admin/list-books']);
  }
 
  consoleLog(){
   return  err => console.log('err', err.message);
  }
}