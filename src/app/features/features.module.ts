import { NgModule } from '@angular/core';
import { FeaturesRoutingModule } from './features-routing.module';
import { SharedModule } from '../@shared/shared.module';
import { CICTabviewModule } from '@cic-garage/cic-core-library';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [SharedModule, FeaturesRoutingModule],
  declarations: [ShellComponent],
})
export class FeaturesModule {}
