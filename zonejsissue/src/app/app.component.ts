import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user: string;

  constructor(private uS: UserService){}

  ngOnInit() {
    // ensure AP object in ap service has loaded
    setTimeout(this.init, 1000);
  }

  init = ()=> {
    this.uS.getCurrentUser().subscribe(res => this.user = res.name);
  }
}
