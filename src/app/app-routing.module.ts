import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';

const routes:Routes=[
  {path:'',component:DevicesComponent},
  {path:'device-details/:Id',component:DeviceDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  
export const routingComponents = [DevicesComponent,DeviceDetailsComponent]  