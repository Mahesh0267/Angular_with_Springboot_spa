import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  users: any;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsersList();
  }
  getUsersList(): void {
    this.usersService.getAll().subscribe(
      (data) => {
        this.users = data;
        console.log(data);
        console.log(typeof data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
