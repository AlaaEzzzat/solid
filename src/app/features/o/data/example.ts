export const Oexample = {
  ts: `import { Component } from "@angular/core";

  @Component({
     selector: "app-openclose",
    template: '
    <header>Header</header>
      <h2>Open/Close</h2>
    <footer>Footer</footer>

    <header>Header</header>
      <input label="Comment" placeholder="please add your comment.......">
      </input>
    <footer>Footer</footer>

    <header>Header</header>
      <button>Send</button>
    <footer>Footer</footer>
    ',
    styleUrls: ['./openclose.component.scss'],
  })
export class OpenCloseComponent {}`,
  ts2: `import { Component } from "@angular/core";

    @Component({
      selector: "app-openclose",
      template: '
      <header>Header</header>
        <ng-content></ng-content>
      <footer>Footer</footer>
      ',
      styleUrls: ['./openclose.component.scss'],
    })
export class OpenCloseComponent {}


 ....................................


import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
     template: '
    <main class="content">
    <app-openclose>
        <h2>Open/Close</h2>
    </app-openclose>
    <app-openclose>
       <input label="Comment" placeholder="please add your comment.......">
       </input>
    </app-openclose>
    <app-openclose>
       <button>Send</button>
    </app-openclose>
    <app-openclose>
       More Content
    </app-openclose>
    </main>
  ',
  styleUrls: ['./app.component.scss']
  ],
})
export class AppComponent {}`,
};
