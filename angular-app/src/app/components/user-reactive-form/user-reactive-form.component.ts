import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-user-reactive-form',
  standalone: true,  
  imports: [ReactiveFormsModule, NgIf, NgFor, NgClass], 
  templateUrl: './user-reactive-form.component.html',
  styleUrl: './user-reactive-form.component.css'
})
export class UserReactiveFormComponent {
  users: any[] = [];
  userForm: FormGroup;
  isSidePanelOpen = false;
  http = inject(HttpClient);
  private fb = inject(FormBuilder);

  constructor() {
    this.userForm = this.fb.group({
      userId: [0],
      userName: ['', [Validators.required, Validators.minLength(5)]],
      password: [''],
      emailId: ['', [Validators.required, Validators.email]],
      fullName: [''],
      role: ['', Validators.required],
      createdDate: [new Date()],
      refreshToken: [''],
      refreshTokenExpiryTime: [new Date()]
    });

    this.getUsers();
  }

  getUsers() {
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetAllUsers").subscribe((res: any) => {
      this.users = res.data;
    });
  }

  openForm(user: any = null) {
    if (user) {
      this.userForm.patchValue(user);
    } else {
      this.userForm.reset({
        userId: 0,
        userName: '',
        password: '',
        emailId: '',
        fullName: '',
        role: '',
        createdDate: new Date(),
        refreshToken: '',
        refreshTokenExpiryTime: new Date()
      });
    }
    this.isSidePanelOpen = true;
  }

  closeForm() {
    this.isSidePanelOpen = false;
  }

  saveUser() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const userData = this.userForm.value;

    if (userData.userId === 0) {
      this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewUser", userData).subscribe(() => {
        this.getUsers();
        this.closeForm();
      });
    } else {
      this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateUser", userData).subscribe(() => {
        this.getUsers();
        this.closeForm();
      });
    }
  }

  deleteUser(userId: number) {
    if (confirm("Are you sure want to delete?")) {
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeleteUserByUserId?userId=" + userId).subscribe(() => {
        this.getUsers();
      });
    }
  }
}
