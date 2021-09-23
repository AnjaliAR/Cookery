import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from "../auth/auth-service";
import { storageService } from '../shared/storage-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
 private userSub : Subscription;
 isAuthenticated = false;
  constructor(private authService:AuthService,private Store : storageService) { 
 
   }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    }
    );
  }
  ngOnDestroy() {
    this.authService.user.unsubscribe();
  }
  
  SaveData(){
    this.Store.storeRecipes();
  }
  FetchData(){
    this.Store.FetchRecipes();
  }

}
