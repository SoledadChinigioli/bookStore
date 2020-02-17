import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private storage: AngularFireStorage ) { }
  
  @ViewChild('imageUser', null) inputImageUser: ElementRef; //viewChild me exije dos argumentos
 
  public email: string = '';
  public password: string = '';
  
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  ngOnInit() {
  }

  onUpload(e){
   //console.log('subir', e.target.files[0]);
   const id = Math.random().toString(36).substring(2);   // Esto permite darle a la imagen un nombre único
   const file = e.target.files[0];
   const filePath = `uploads/profile_${id}`;
   const ref = this.storage.ref(filePath);
   const task = this.storage.upload(filePath, file);
   this.uploadPercent = task.percentageChanges();
   task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }

 
  onAddUser(){
    this.authService.registerUser(this.email, this.password)
    .then((res) => {
      this.authService.isAuth().subscribe(user => {
        if(user){
        
          user.updateProfile({
            displayName: "",
            photoURL: this.inputImageUser.nativeElement.value,
          }).then(() =>{
              this.router.navigate(['admin/list-book']);
            }).catch((error) => console.log('error', error));
            
        }
      })
      
    }).catch(err => console.log('err', err.mesagge));
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
  
   onLoginRedirect(): void{
    this.router.navigate(['admin/list-books']);
  }
 
  consoleLog(){
   return  err => console.log('err', err.message);
  }
}
