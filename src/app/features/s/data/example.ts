export const Sexample: Array<CodeTab> = [
  {
    name: 'Without Single Resposability',
    code: `
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  constructor() {}

  login(mobile: string, password: string): Observable<User> {
    //implement your own login
  }

  register(user: any): Observable<any> {
    //implement your own login
  }

  logout(): Observable<any> {
    //implement your own login
  }

  getReceipt(id: string): Observable<any> {
  //implement your own login
  }
  payAmount(paymentDetails: any): Observable<any> {
    //implement your own login
  }
    
  printReciept(element: ElementRef) {
    //implement your own login
  }
}
    
`,
  },
  {
    name: 'With Single Responsability',
    code: `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(mobile: string, password: string): Observable<User> {
    //implement your own login
  }

  register(user: any): Observable<any> {
    //implement your own login
  }

  logout(): Observable<any> {
    //implement your own login
  }
    
} 
    /////////////////////////////////////////////////
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {

  constructor() {}

  getReceipt(id: string): Observable<any> {
  //implement your own login
  }
  payAmount(paymentDetails: any): Observable<any> {
    //implement your own login
  }
    
  printReciept(element: ElementRef) {
    //implement your own login
  }
    
}
    `,
  },
];

export interface CodeTab {
  name: string;
  code: string;
}
