import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AddUsersComponent } from '../add-users/add-users.component';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  users: any;
  username = '';
  userId!: number;
  email: string = '';

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

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUsersComponent, {
      width: '650px',
    });
    dialogRef.afterClosed().subscribe((data: string) => {});
  }

  deleteUser(id: number): void {
    this.usersService.delete(id).subscribe(() => {
      console.log('deleted');
      this.getUsersList();
    });
  }
  editDialog(id: number): void {
    this.userId = id;
    const dialogRef = this.dialog.open(UserDetailsComponent, {
      width: '650px',
      data: id,
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log('Dialog closed');
    });
  }
}
