import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ng2-bootstrap';
import { ApplicationComponent } from './application.component';
import { SelectModule } from 'ng2-select';

@NgModule({
    imports: [
      FormsModule,
      BsDropdownModule.forRoot(),
      SelectModule
    ],
    declarations: [ApplicationComponent],
    exports: [ApplicationComponent]
})

export class ApplicationComponentModule { }
