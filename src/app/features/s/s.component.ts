import { Component } from '@angular/core';
import { Sexample } from './data/example';
import { SharedModule } from 'src/app/@shared/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-s',
  templateUrl: './s.component.html',
  styleUrls: ['./s.component.scss'],
})
export class SComponent {
  get example() {
    return Sexample;
  }
}
