import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';
import { AlertService } from '../alerts';

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
  constructor(
    private usersService: UsersService,
    private alertService: AlertService,
    public dialogRef: MatDialogRef<AddUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    this.initFrom();
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
    if (this.form.valid === true) {
      this.form.value.role = 'serviceProvider';
      if (this.isEditable) {
        // this.usersService.editUser(this.id, this.form.value).subscribe(res => {
        //   if (res['status'] === 'success') {
        //     this.dialogRef.close(res['msg']);
        //   } else {
        //     this.alertService.error(res['msg']);
        //   }
        // });
      } else {
        this.usersService.create(this.form.value).subscribe((res) => {
          if (res['status'] === 'success') {
            this.dialogRef.close(res['msg']);
          } else {
            this.alertService.error(res['msg']);
          }
        });
      }
    } else {
      this.alertService.error('Please select all mandatory(*) values!');
    }
  }
}
