import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { CodeBlockComponent } from './components/code-block/code-block.component';
import {
  CICButtonModule,
  CICTabviewModule,
} from '@cic-garage/cic-core-library';

import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { AccordionModule } from 'primeng/accordion';
import { SafehtmlPipe } from './pipes/safehtml/safehtml.pipe';
@NgModule({
  declarations: [CodeBlockComponent, SafehtmlPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedRoutingModule,
    CICButtonModule,
    CICTabviewModule,
    TooltipModule,
    TabViewModule,
    AccordionModule,
  ],
  exports: [CodeBlockComponent, CICTabviewModule],
})
export class SharedModule {}
