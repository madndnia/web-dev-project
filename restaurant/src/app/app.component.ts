import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  template: `
<header class="header">
  <div class="logo-container">
    <span class="logo-text">ILoveEat</span>
  </div>
  <nav>
    <a routerLink="/home">Home</a>
    <a routerLink="/places" (click)="checkLogIn()">Restaurants</a>
    <a routerLink="/auth" *ngIf="!isLoggedIn()">Auth</a>
    <a *ngIf="isLoggedIn()" (click)="logout()">Logout</a>
  </nav>
</header>
    <main>
      <router-outlet></router-outlet> 
    </main>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router) {}

  isLoggedIn() {
    return this.auth.isAuthenticated();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']); 
  }
  checkLogIn(){
    if(!this.isLoggedIn()){
      alert('You have to login to site!')
    }
  }
}
