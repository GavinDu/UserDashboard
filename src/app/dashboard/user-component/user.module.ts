import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { PaginationModule } from 'ng2-bootstrap';
import { Ng2TableModule} from '../../util/ng2-table/ng-table-module';


@NgModule({
    imports: [
      FormsModule,
      CommonModule,
      PaginationModule.forRoot(),
      Ng2TableModule
    ],
    declarations: [UserComponent],
    exports: [UserComponent]
})

export class UserComponentModule { }
