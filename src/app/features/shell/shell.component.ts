import { Component } from '@angular/core';
import { TabViewItem } from '@cic-garage/cic-core-library';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  _tabs: TabViewItem[] = [
    {
      header: 'S',
      leftIcon: 'pi-download',
      component: () =>
        import('../s/s.component').then((component) => component.SComponent),
    },
    {
      header: 'O',
      leftIcon: 'pi-download',
      component: () =>
        import('../o/o.component').then((component) => component.OComponent),
    },
    {
      header: 'L',
      leftIcon: 'pi-download',
      component: () =>
        import('../l/l.component').then((component) => component.LComponent),
    },
    {
      header: 'I',
      leftIcon: 'pi-download',
      component: () =>
        import('../i/i.component').then((component) => component.IComponent),
    },
    {
      header: 'D',
      leftIcon: 'pi-download',
      component: () =>
        import('../d/d.component').then((component) => component.DComponent),
    },
  ];
}
