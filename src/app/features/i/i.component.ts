import { Component } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { Iexample } from './data';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-i',
  templateUrl: './i.component.html',
  styleUrls: ['./i.component.scss'],
})
export class IComponent {
  get example() {
    return Iexample;
  }
}
