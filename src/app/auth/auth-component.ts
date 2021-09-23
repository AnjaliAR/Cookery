import { Component } from "@angular/core";
import { FormGroup, FormsModule,FormBuilder, Validators } from "@angular/forms";
import { logging } from "protractor";
import { AuthService } from "./auth-service";
import { Router } from '@angular/router';

import { User } from "./user.model"


@Component( {
    selector : 'auth',
    templateUrl: './auth-component.html'
})



export class AuthComponent {
    constructor (private fb: FormBuilder, private authService:AuthService, private route : Router ){}
    Login: FormGroup;
    islogin = true;
    error=null;
    onSwitchMode(){
    this.islogin = !this.islogin ;
    }
    SubmitForm(){
        const email = this.Login.value.Email;
        const password = this.Login.value.password;
        
        if(this.islogin){    
            if(!this.Login.valid){return;}
        this.authService.loginMethod(email,password).subscribe(resData => {
            console.log(resData);
            
        },err=>{
            console.log(err)
            this.error="an error occured"
        })
        this.route.navigate(['/recipes']);

            }
        else
        {
        if(!this.Login.valid){return;}
        this.authService.signup(email,password).subscribe(resData => {
            console.log(resData);
            this.route.navigate(['/recipes']);
        
        },err=>{
            console.log(err)
            this.error="an error occured"
        })
        this.route.navigate(['/recipes']);
    }
        
        this.Login.reset();
    }
   
    ngOnInit() {
        this.Login=this.fb.group({
            Email:[''],
            password:['']
        })
    }

}