import { Component, OnInit } from '@angular/core';
import { RegistrationService } from  'src/registration.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private songname:string;
  private album:string;
  private artist:string;
  private location:string;

  constructor(private registerServ: RegistrationService) { }

  ngOnInit() {
  }
  addsong(data) {
    this.registerServ.addSongs(this.songname, this.album, this.artist, this.location);
  
}
}
