import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-list-navbar',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './user-list-navbar.component.html',
  styleUrl: './user-list-navbar.component.css'
})
export class UserListNavbarComponent {

}
