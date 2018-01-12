import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HomeModule } from '../home/home.module';
import { HistoryModule } from '../history/history.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HomeModule,
    HistoryModule
  ],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule { }
