import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
EditUserComponent
UserComponent
AdduserComponent
ListUserComponentComponent

import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MainInvoiceComponentComponent } from './main-invoice-component/main-invoice-component.component';
import { InvoiceComponentComponent } from './invoice-component/invoice-component.component';
InvoiceComponentComponent
MainInvoiceComponentComponent
const routes: Routes = [{path:"home",component:ListUserComponentComponent},
{path:"user",component:UserComponent,children:[{path:"adduser",component:AdduserComponent},
{path:"editUser/:param",component:EditUserComponent}]},
{path: 'main-invoice',component:MainInvoiceComponentComponent },
{ path: 'invoice/:id/:active',component:InvoiceComponentComponent }];


@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
