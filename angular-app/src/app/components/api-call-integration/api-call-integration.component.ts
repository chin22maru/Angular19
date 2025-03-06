import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-api-call-integration',
  imports: [],
  templateUrl: './api-call-integration.component.html',
  styleUrl: './api-call-integration.component.css'
})
export class ApiCallIntegrationComponent {

  http  = inject(HttpClient);
  jsonUsers:any[] = [];
  compUsers:any[] = [];

  getAllUsers(){
    // debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe( (res:any) => {
      // debugger;
      this.jsonUsers = res;
    });
  }

  getComplaintUsers(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetAllUsers").subscribe( (res:any) => {
      this.compUsers = res.data;
    });
  }
}
