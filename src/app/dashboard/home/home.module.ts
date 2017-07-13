import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselModule, ModalModule, ModalDirective } from 'ng2-bootstrap';
import { PipeModule } from '../../pipe/pipe.module';
@NgModule({
    imports: [
      CommonModule,
      CarouselModule.forRoot(),
      ModalModule.forRoot(),
      PipeModule
      ],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})

export class HomeModule {}
