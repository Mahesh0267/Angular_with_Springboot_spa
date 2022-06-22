import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user_details: any;
  users: any;

  constructor(
    private usersService: UsersService,
    public dialogRef: MatDialogRef<UserDetailsComponent>
  ) {}

  ngOnInit(): void {
    // this.user_details = this.data['user_list'].filter(user => user._id === this.data.user_id);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getUser(id: string): void {
    this.usersService.get(id).subscribe({
      next: (data) => {
        this.users = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
