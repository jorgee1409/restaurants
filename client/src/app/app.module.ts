import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './components/login/login.component';
import { CajeroComponent } from './components/cajero/cajero.component';
import { AuthGuard } from './guards/auth.guard';
import { ChefComponent } from './components/chef/chef.component';
import { AdminComponent } from './components/admin/admin.component';
import { OrderService } from './services/order.service';

const appRoutes: Routes = [
    {
      path: "",
      component: LoginComponent
    },
    {
      path: "cajero",
      // canActivate: [AuthGuard],
      component: CajeroComponent
    },
    {
      path: "chef",
      component: ChefComponent
    },
    {
      path: "admin",
      component: AdminComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    CajeroComponent,
    LoginComponent,
    ChefComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    HttpModule
  ],
  providers: [UserService,AuthGuard,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
