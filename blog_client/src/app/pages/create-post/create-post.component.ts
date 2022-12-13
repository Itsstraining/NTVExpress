import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createExpressState } from 'src/ngrx/states/express.state';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(
    private store: Store<{ createExpressReducer: createExpressState}>,
    
  ) {
    this.createExpress$ = this.store.select((state) => state.createExpressReducer);
   }

  createExpress$: Observable<createExpressState>;
  ngOnInit(): void {
  }

}
