import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user_details: any;
  users: any;
  form: FormGroup;
  roles: any;
  names:string;
  dropdownList;
  dropdownSettings;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    public dialogRef: MatDialogRef<UserDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    
    console.log(this.data);
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      role: new FormControl('',Validators.required)
    });
    this.userService.getBYId(this.data).subscribe({
      next: (data) => {
        this.user_details = data;
        for (let i = 0; i < data.length; i++) {
          this.roles = this.users[i].roles;
          console.log(this.roles);
        }
        console.log(this.user_details);
        this.form.patchValue(this.user_details);
      },
      error: (e) => console.error(e),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
      this.userService.update(this.data, this.form.value).subscribe({
        next: (res) => {
          this.dialogRef.close('update');
        },
        error: (e) => console.error(e),
      });
  }
}
