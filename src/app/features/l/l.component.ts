import { Component } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { Lexample } from './data';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-l',
  templateUrl: './l.component.html',
  styleUrls: ['./l.component.scss'],
})
export class LComponent {
  get example() {
    return Lexample;
  }
}
