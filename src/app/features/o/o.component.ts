import { Component } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { Oexample } from './data';
import { CodeTab } from '../s/data';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-o',
  templateUrl: './o.component.html',
  styleUrls: ['./o.component.scss'],
})
export class OComponent {
  data: Array<CodeTab> = [
    { name: 'Without Open/Close', code: this.example.ts },
    { name: 'With Open/Close', code: this.example.ts2 },
  ];
  get example() {
    return Oexample;
  }
}
