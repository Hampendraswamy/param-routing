import { Component, OnInit } from '@angular/core';
import { DeviceInfoService } from '../shared-service/device-info.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  swamy:any=[];
  
  constructor(private device:DeviceInfoService) { }

  ngOnInit() {
    this.swamy=this.device.Mobiles;
    console.log(this.swamy);
}
  // Mobiles:any=[
  //   {Name:"Nokia",Id:143,DeviceDescription:"Nokia Brand Is Very Very Beautifull"},
  //   {Name:"moto",Id:144,DeviceDescription:"Moto Brand Is Very Very Good"},
  //   {Name:"Vivo",Id:145,DeviceDescription:"Vivo Brand Is Very Nice"},
  //   {Name:"Redmi",Id:146,DeviceDescription:"Redmi Brand Is Very Very Excellent"},
  //   {Name:"Samsung",Id:147,DeviceDescription:"Samsung Brand Is Very Good"},
  // ]
}


