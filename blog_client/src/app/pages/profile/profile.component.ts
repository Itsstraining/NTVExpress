import { Component, OnInit, TemplateRef } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Post } from 'src/app/models/post.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

    public user!: User
    public posts: Array<Post> = [];

  ngOnInit(): void {
  }

}
