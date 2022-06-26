import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
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
  dropdownList;
  dropdownSettings;
  constructor(
    private usersService: UserService,
    public dialogRef: MatDialogRef<AddUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    this.initFrom();
    this.getUsersList();
    this.dropdownList = this.getData();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
    };
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
      role: new FormControl('', Validators.required),
      // role: new FormControl('', Validators.required),
    });

    if (this.isEditable) {
      this.form.patchValue(this.data);
    }
  }

  onItemSelect($event) {
    console.log('$event is ', $event);
  }

  getData(): Array<any> {
    return [
      { id: 1, name: 'User' },
      { id: 2, name: 'Admin' },
    ];
  }

  getObjectListFromData(ids) {
    return this.getData().filter((item) => ids.includes(item.id));
  }

  setDefaultSelection() {
    let item = this.getData()[0];
    this.form.patchValue({
      role: [
        {
          id: item['id'],
          name: item['name'],
        },
      ],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.usersService.create(this.form.value).subscribe({
        next: (res) => {
          this.form.reset();
          this.dialogRef.close('save');
        },
        error: (e) => console.error(e),
      });
    }
  }
}
