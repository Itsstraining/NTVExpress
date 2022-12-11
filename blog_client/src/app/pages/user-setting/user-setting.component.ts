import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.scss']
})
export class UserSettingComponent implements OnInit {

  constructor(
    private AuthService: AuthService,
    private userService: UserService,
  ) { }

  public user!: User;
  public posts: Array<Post> = [];

  ngOnInit(): void {
    this.AuthService.user$.subscribe(async res => {
      if (res.email){
        // this.user = res
        let tem: any = await this.userService.getProfile(res.email).toPromise();
        setTimeout(() => {
          this.posts = tem.posts;
        }, 500);
      }
    } )
  }

}
