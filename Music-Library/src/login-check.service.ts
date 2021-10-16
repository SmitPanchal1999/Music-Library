import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

var data={
  username:'',
  password:''
};

@Injectable({
  providedIn: 'root'
})
export class LoginCheckService {
  
  constructor(private http:HttpClient,private router:Router) { }
  checklogin(uname,pass){
    //alert(data.username);
    data.username = uname;
    data.password = pass;
    console.log("in login check service...");
  this.http.post('http://localhost:3000/login',data).subscribe(res=>{var name=JSON.stringify(res);
  console.log(name)
  var st=JSON.parse(name)
  console.log(st.status)
  
      if(st.status=="fail")
      {
        alert("please enter correct username or password!!!")
      }

      else
      {
          console.log("in login sservice",st.uname)
          localStorage.setItem('username',st.uname)
          if(st.uname=="trupti")
          {
            this.router.navigate(['/admin'])
          }
          else{
          this.router.navigate(['/'])
          }
      }


});
}
}
