import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {

  }

  loginWithGoogle() {
    let res = this.loginService.loginWithGoogle();
    return res;
  }

  logoutGoogle() {
    let res = this.loginService.logoutGoogle();
    return res;
  }

}
