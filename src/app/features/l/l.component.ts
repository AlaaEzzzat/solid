import { Component } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { Lexamples } from './data';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-l',
  templateUrl: './l.component.html',
  styleUrls: ['./l.component.scss'],
})
export class LComponent {
  Linterface: string = `interface Notification {
    SendNotification(): void;
  }`;
  get example() {
    return Lexamples;
  }
}
