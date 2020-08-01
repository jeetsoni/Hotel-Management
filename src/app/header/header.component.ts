import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  private usersub: Subscription;
  isAuthenticated = false;
  @Output() featuredSelected = new EventEmitter<string>();
  constructor(private datastrg: DataStorageService, private authService: AuthService) { }

  ngOnInit() {
    this.usersub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
      
    });
  }
  onSelect(feature: string)
  {
    this.featuredSelected.emit(feature);
  }
  onSaveData()
  {
    this.datastrg.storeRecipe(); 
  }
  onFetchData()
  {
    this.datastrg.fetchData();
  }
  ngOnDestroy()
  {
    this.usersub.unsubscribe();
  }
}
