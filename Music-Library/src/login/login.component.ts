import { Component, OnInit } from '@angular/core';
import { LoginCheckService } from 'src/login-check.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username:string;
  private password:string;
  constructor(private loginServ:LoginCheckService) { }
  

  ngOnInit() {
  }
  login()

{
  
  localStorage.setItem("username",this.username)
 this.loginServ.checklogin(this.username,this.password);
}

}
