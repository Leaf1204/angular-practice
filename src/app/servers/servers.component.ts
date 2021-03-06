import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serversCreationStatus = 'No server was created'; 
  serverName = 'test server';
  serverCreated = false; 
  servers = ['Testserver', 'Testserver2'];

  constructor() { 
    setTimeout( () => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }
 onCreateServer() {
   this.serverCreated = true;
   this.servers.push(this.serverName);
   this.serversCreationStatus = 'Server was created! Name is ' + this.serverName;
 }
 onDateServerName(event: any){
  this.serverName = (<HTMLInputElement>event.target).value;
 }
}
