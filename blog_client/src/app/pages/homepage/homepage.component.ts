import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetexpressService } from 'src/app/services/getexpress.service';
import { Express } from 'src/app/models/express.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  // express!: Observable<Express[]>;
  constructor(private getExSv: GetexpressService) { }

  ngOnInit(): void {
    // this.express = this.getExSv.getAllExpress();
    // console.log(this.express);
    
    // this.express.subscribe((data: any) => {
    //   console.log(data);
    // })
  }

}
