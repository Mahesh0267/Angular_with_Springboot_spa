import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';
import { AlertService } from '../alerts';
import { ListUsersComponent } from '../list-users/list-users.component';

interface DialogData {
  email: string;
}
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css'],
})
export class AddUsersComponent implements OnInit {
  form!: FormGroup;
  isEditable = false;
  submitted = false;
  users: any;
  constructor(
    private usersService: UsersService,
    private alertService: AlertService,
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
        console.log(data);
        console.log(typeof data);
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
      role: new FormControl('', Validators.required),
    });

    if (this.isEditable) {
      this.form.patchValue(this.data);
    }
  }

  onSubmit() {
    console.log(this.form.value);

    this.usersService.create(this.form.value).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.dialogRef.close(res);
        this.getUsersList();
      },
      error: (e) => console.error(e),
    });
  }
}
