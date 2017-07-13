import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ServiceModule } from './service/service.module';
import { UiControlService } from './service/ui-control.service';
import { PipeModule } from './pipe/pipe.module';
import { AuthGuardModule } from './guard/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    LoginModule,
    DashboardModule,
    ServiceModule,
    AuthGuardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
