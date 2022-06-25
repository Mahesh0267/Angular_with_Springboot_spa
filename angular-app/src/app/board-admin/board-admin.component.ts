import { Component, OnInit } from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserService } from '../_services/user.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css'],
})
export class BoardAdminComponent implements OnInit {
  users: any;
  username = '';
  userId!: number;
  email: string = '';

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList(): void {
    this.userService.getAll().subscribe(
      (data) => {
        this.users = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  searchUser(): void {
    this.userService.get(this.username).subscribe(
      (data) => {
        this.users = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  editDialog(id: number): void {
    this.userId = id;
    const dialogRef = this.dialog
      .open(UserDetailsComponent, {
        width: '650px',
        data: id,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'update') {
          this.getUsersList();
        }
        console.log('Dialog closed');
      });
  }
}
