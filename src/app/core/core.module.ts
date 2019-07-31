import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { CaptureImageComponent } from './capture-image/capture-image.component';
import { CoreRoutingModule } from './core-routing.module';
import { CorosalComponent } from './corosal/corosal.component';

@NgModule({
  declarations: [
    CaptureImageComponent,
    CorosalComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
