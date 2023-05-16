import { Component } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { Oexample } from './data';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-o',
  templateUrl: './o.component.html',
  styleUrls: ['./o.component.scss'],
})
export class OComponent {
  get example() {
    return Oexample;
  }
}
