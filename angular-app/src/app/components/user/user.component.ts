import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users:any[] = [];

  constructor(){
    this.getUsers()
  }

  http = inject(HttpClient);

  getUsers(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetAllUsers").subscribe((res:any) => {
      this.users = res.data;
    })
  }




  selectedUser: any = null;
  isSidePanelOpen = false;

  openForm(user: any = null) {
    this.selectedUser = user ? { ...user } : { userId: 0, userName: '', password: '', emailId: '', fullName: '', role: '' };
    this.isSidePanelOpen = true;
  }

  closeForm() {
    this.isSidePanelOpen = false;
  }

  saveUser() {
    if (this.selectedUser.userId === 0) {
      this.selectedUser.userId = this.users.length + 1;
      this.users.push(this.selectedUser);
    } else {
      const index = this.users.findIndex(u => u.userId === this.selectedUser.userId);
      this.users[index] = this.selectedUser;
    }
    this.closeForm();
  }

  deleteUser(userId: number) {
    this.users = this.users.filter(user => user.userId !== userId);
  }
}
