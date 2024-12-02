import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';  // Import UserService
import { User } from '../models/user.model';  // Import the User interface
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserListNavbarComponent } from '../user-list-navbar/user-list-navbar.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    UserDetailsComponent,
    UserListNavbarComponent
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];  // Declare users array with type User[]
  selectedUser: User | null = null;  // To store the selected user for the modal


  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;  // Assign the fetched data to the users array
      console.log('Fetched users:', this.users);  // Check if data is correct

    },
      (error) => {
        console.error('Error fetching users:', error); // Handle any errors
      });
  }

  // Method to set the selected user for the modal
  openUserDetails(user: User): void {
    this.selectedUser = user;
  }
}
