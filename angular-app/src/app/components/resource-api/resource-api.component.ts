import { DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, resource, inject} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-resource-api',
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, JsonPipe],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css'
})
export class ResourceApiComponent {
  users = resource({
    loader: () => {
      return fetch("https://jsonplaceholder.typicode.com/users")
             .then(res => {
               return res.json() as Promise<any[]>
             })
             .catch(e => {
              console.log(e);
             });
    }
  });

  http = inject(HttpClient)
  users2 = rxResource<any[], unknown>({
    loader: () => {
      return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users");
    }
  });
  
  curdate = new Date();

  obj = {
    name: "chintan",
    age: 21,
    city: "bhavnagar"
  }
}
