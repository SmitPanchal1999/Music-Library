import { Component, OnInit } from '@angular/core';
import { RegistrationService } from  'src/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private username:string;
  private password:string;
  private email:string;

  constructor(private registerServ: RegistrationService) { }

  ngOnInit() {
  }
  register(data) {
    this.registerServ.userRegister(this.username, this.password, this.email);
  
}

}
