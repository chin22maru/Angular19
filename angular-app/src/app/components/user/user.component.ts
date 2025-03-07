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




  selectedUser: any = {
      "userId": '',
      "userName": "",
      "emailId": "",
      "fullName": "",
      "role": "",
      "createdDate": new Date(),
      "password": "",
      "projectName": "",
      "refreshToken": "",
      "refreshTokenExpiryTime": new Date()
  };

  isSidePanelOpen = false;

  openForm(user: any = null) {
    if(user){
      this.selectedUser = {...user};
    }
    else{
      this.selectedUser.userId = 0; 
    }
    this.isSidePanelOpen = true;
  }

  closeForm() {
    this.isSidePanelOpen = false;
  }

  saveUser() {
    if (this.selectedUser.userId === 0) {
      this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewUser",this.selectedUser).subscribe((res:any) => {
        this.getUsers();
      })
    } else {
      this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateUser",this.selectedUser).subscribe((res:any) => {
        this.getUsers();
      })
    }
    this.closeForm();
  }

  deleteUser(userId: number) {
    this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeleteUserByUserId?userId="+userId).subscribe((res:any) => {
      this.getUsers();
    })
  }
}
