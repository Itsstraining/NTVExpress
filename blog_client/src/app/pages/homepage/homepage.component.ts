import { Component, OnInit } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ExpressState } from 'src/ngrx/states/express.state';
import { Express } from '../../models/express.model';
import * as ExpressActions from '../../../ngrx/actions/express.action';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: '2022',
    children: [
      {
        name: 'December',
        children: [
          { name: 'Why do we use it?' },
          { name: 'Why do we use it?' },
        ],
      },
      {
        name: 'November',
        children: [
          { name: 'Why do we use it?' },
          { name: 'Why do we use it?' },
        ],
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  expressList$ = this.store.select((store) => store.express.express);
  constructor(private store: Store<{express:ExpressState}>) {
    this.dataSource.data = TREE_DATA;
    
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


  posts!: Express[];
  ngOnInit(): void {
    this.store.dispatch(ExpressActions.getExpress());
    this.expressList$.subscribe((data) => {
      console.log(data);
      this.posts = data;
    })
  }
}
