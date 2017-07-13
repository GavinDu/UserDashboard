import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserDetailComponent } from './user-detail.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule],
    declarations: [UserDetailComponent],
    exports: [UserDetailComponent]
})

export class UserDetailModule { }
