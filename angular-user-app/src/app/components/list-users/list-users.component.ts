import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AddUsersComponent } from '../add-users/add-users.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  users: any;
  username = '';
  userId: string = '';

  constructor(private usersService: UsersService, public dialog: MatDialog) {}

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
  searchUser(): void {
    this.usersService.get(this.username).subscribe(
      (data) => {
        this.users = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  addUserPopUp(id: string): void {
    this.userId = id;
    const dialogRef = this.dialog.open(AddUsersComponent, {
      width: '650px',
      data: { userId: this.userId, user_list: this.users },
    });
    dialogRef.afterClosed().subscribe((data) => {
      console.log('dialog closed');
      this.users = data;
    });
  }
}
