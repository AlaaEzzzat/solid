import { CodeTab } from '../../s/data';

export const Lexamples = [
  {
    name: 'Without Liskov Substitution',
    code: `import { Injectable } from '@angular/core';
    
    @Injectable({
      providedIn: 'root',
    })
    export class EmailService{
      sendEmail(){
        console.log('Send to email');
      }
    }

    -------------------------------------------------------------------

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PushService{
  sendPush(){
    console.log('Push Notification');
  }
}
    `,
  },
  {
    name: 'With Liskov Substitution',
    code: `import { Injectable } from '@angular/core';
    import { Notification } from './notification';
  
    @Injectable({
      providedIn: 'root',
    })
    export class Email implements Notification {
  
      SendNotification() {
        console.log('Send to email');
      }
  
     submit(){
      sendNootification(); // send to email  
    }
  }
  
  -----------------------------------------------------------
  
  import { Injectable } from '@angular/core';
  import { Notification } from './notification';
  
  @Injectable({
    providedIn: 'root',
  })
  export class Push implements Notification {
  
    SendNotification() {
      console.log('Push Notification');
    }
    submit(){
      sendNootification(); // Push Notification 
    }
  }
    `,
  },
];
