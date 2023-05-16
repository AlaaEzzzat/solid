import { CodeTab } from '../../s/data';

export const Dexample: Array<CodeTab> = [
  {
    name: 'Without Dependancy Inversion',
    code: `
    @Injectable()
    export class HttpDataProvider {
      constructor(private http: HttpClient) {
      }
    
      getUsersFromApi(): Observable<User[]> {
        return this.http.get<User[]>('/api/users');
      }
    
      getUserByIdFromApi(userId: string): Observable<User> {
        return this.http.get<User>('/api/users/'+this.userId);
      }
    }
    --------------------------------------------------------
    @Injectable()
    export class JsonDataProvider {
      constructor(private http: HttpClient) {
      }
    
      getUsersFromJson(): Observable<User[]> {
        return localStorage.getItem('users');
      }
    
      getUserByIdFromJson(userId: string): Observable<User> {
        const users =localStorage.getItem('users');
        return  this.users.find(user=>user.id === userId);
      }
    }
    
    ---------------------------------------------------
    @Injectable()
    export class DataService {
      constructor(private dataProvider: HttpDataProvider ) {}
    
      getUsers(): Observable<User[]> {
        return this.dataProvider.getUsersFromApi();
      }
    
      getUserById(userId: string): Observable<User> {
        return this.dataProvider.getUserByIdFromApi(userId);
      }
    }`,
  },
  {
    name: `With Dependancy Inversion`,
    code: `export interface DataProvider {
  getUsers(): Observable<User[]>;
  getUserById(userId: string): Observable<User>;
}

@Injectable()
export class HttpDataProvider implements DataProvider {
  constructor(private http: HttpClient) {
    super();
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<User>('/api/users/'+this.userId);
  }
}
--------------------------------------------------------
@Injectable()
export class JsonDataProvider implements DataProvider {
  constructor(private http: HttpClient) {
    super();
  }

  getUsers(): Observable<User[]> {
    return localStorage.getItem('users');
  }

  getUserById(userId: string): Observable<User> {
    const users =localStorage.getItem('users');
    return  this.users.find(user=>user.id === userId);
  }
}

---------------------------------------------------
@Injectable()
export class DataService {
  constructor(private dataProvider: HttpDataProvider ) {}

  getUsers(): Observable<User[]> {
    return this.dataProvider.getUsers();
  }

  getUserById(userId: string): Observable<User> {
    return this.dataProvider.getUserById(userId);
  }
}
`,
  },
];
