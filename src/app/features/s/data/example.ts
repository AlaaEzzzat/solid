export const Sexample: Array<CodeTab> = [
  {
    name: 'UserListComponent.html',
    code: `
  <h1>User List</h1>
  <ul>
    <li *ngFor="let user of users">{{ user.name }}</li>
  </ul>
`,
  },
  {
    name: 'UserListComponent.ts',
    code: `import { Component, OnInit } from '@angular/core';
  import { UserService } from './user.service';
  import { User } from './user';
  
  @Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
  })
  export class UserListComponent implements OnInit {
    users: User[];
  
    constructor(private userService: UserService) {}
  
    ngOnInit() {
      this.userService.getUsers().subscribe((users) => (this.users = users));
    }
  }`,
  },
  {
    name: 'service.ts',
    code: `import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { User } from './user';
  
  @Injectable({
    providedIn: 'root',
  })
  export class UserService {
    private apiUrl = 'https://api.example.com/users';
  
    constructor(private http: HttpClient) {}
  
    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.apiUrl);
    }
  }`,
  },
];

export interface CodeTab {
  name: string;
  code: string;
}
