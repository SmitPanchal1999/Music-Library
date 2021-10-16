import { Component, OnInit } from '@angular/core';
import { RegistrationService } from  'src/registration.service';

@Component({
  selector: 'app-delsong',
  templateUrl: './delsong.component.html',
  styleUrls: ['./delsong.component.css']
})
export class DelsongComponent implements OnInit {
  Destdata;
  constructor(private registerServ: RegistrationService) { }

  ngOnInit() {
  }
  delsong(data){
    alert("are you sure you want to delete this song?");
    this.registerServ.deletesong((this.Destdata[data].songname).toString())
  
  }

}
