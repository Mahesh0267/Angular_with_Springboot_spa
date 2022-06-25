import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../_services/user.service';

interface DialogData {
  email: string;
}
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css'],
})
export class AddUsersComponent implements OnInit {
  form: FormGroup;
  isEditable = false;
  submitted = false;
  users: any;
  userId!: number;
  constructor(
    private usersService: UserService,
    public dialogRef: MatDialogRef<AddUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    this.initFrom();
    this.getUsersList();
  }

  getUsersList(): void {
    this.usersService.getAll().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private initFrom() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      // role: new FormControl('', Validators.required),
    });

    if (this.isEditable) {
      this.form.patchValue(this.data);
    }
  }

  // onSubmit() {
  //   if (this.form.valid) {
  //     this.usersService.create(this.form.value).subscribe({
  //       next: (res) => {
  //         this.form.reset();
  //         this.dialogRef.close('save');
  //       },
  //       error: (e) => console.error(e),
  //     });
  //   }
  // }
}
