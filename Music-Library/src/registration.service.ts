import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var data={
  username:'',
  password:'',
  email:''
};
var data1={
  songname:'',
  album:'',
  artist:'',
  location:''
};


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }
  userRegister(uname,pass,email) {
    data.username = uname;
    data.password = pass;
    data.email = email;
    console.log("working");

   this.http.post('http://localhost:3000/register',data).subscribe((res)=>{console.log(res);});
  }

  addSongs(songname,album,artist,location) {
    
    data1.songname = songname;
    data1.album = album;
    data1.artist = artist;
    data1.location = location;
    
    console.log("working");

   this.http.post('http://localhost:3000/addSongs',data1).subscribe((res)=>{console.log(res);});
  }

  deletesong(data){
    console.log("in delete dest");
    console.log(data)
    this.http.delete('http://localhost:3000/delsong'+"/"+data).subscribe((res)=>{console.log(res);});

  }
}
