import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { BSComponentModule } from './bs-component/bsComponent.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/index';
import { ApplicationComponentModule } from './application-component/application.module';
import { UserDetailModule } from './user-detail-component/user-detail.module';
import { UserComponentModule  } from './user-component/user.module';
@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      HomeModule,
      BSComponentModule,
      ApplicationComponentModule,
      UserDetailModule,
      UserComponentModule
    ],
    declarations: [DashboardComponent, SidebarComponent],
    exports: [DashboardComponent, SidebarComponent]
})

export class DashboardModule { }
