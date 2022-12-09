import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetexpressService } from 'src/app/services/getexpress.service';
import { ExpressState } from 'src/ngrx/states/express.state';
import { Express } from '../../models/express.model';
import * as ExpressActions from '../../../ngrx/actions/express.action';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  expressList$ = this.store.select((store) => store.express.express)
  constructor(
    private store: Store<{express:ExpressState}>
  ) { }

  posts!: Express[];
  ngOnInit(): void {
    this.store.dispatch(ExpressActions.getExpress());
    this.expressList$.subscribe((data) => {
      console.log(data);
      this.posts = data;
    })
  }

}
