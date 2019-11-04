import { Component, OnInit } from '@angular/core';
import { DeviceInfoService } from '../shared-service/device-info.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})

export class DeviceDetailsComponent implements OnInit {
  MobileDetails:any=[];
  MobileId;
  infoDev: any=[];

  constructor(private route:ActivatedRoute, private list:DeviceInfoService) { }

  ngOnInit() { 
    this.route.paramMap.subscribe(params => {
      this.MobileId = params.get('Id');
      this.MobileDetails=this.list.Mobiles;
      this.getDeviceInfo();
  })
}

  getDeviceInfo(){
    this.MobileDetails.filter((device)=>{
      if(device.Id==this.MobileId){
        this.infoDev.push(device)
      }
    })
  }
}
