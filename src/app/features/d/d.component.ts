import { Component } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { Dexample } from './data/example';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.scss'],
})
export class DComponent {
  get example() {
    return Dexample;
  }
}
