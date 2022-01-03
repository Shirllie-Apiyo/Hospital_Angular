import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
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
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  // define your array
  days: string[] = ['Mon','Tue','Wed','Thur','Fri'];

  imgCollection: Array<object> =[
    {
      image:'/assets/lab.jpg',
      'thumbImage': '/assets/lab.jpg',
      alt :'Laboratory',
      title: 'Laboratory'
    },
    {
      image:'/assets/consult.jpg',
      'thumbImage': '/assets/consult.jpg',
      alt :'Consult',
      title: 'consult'
    },
    {
      image:'/assets/care.jpg',
      'thumbImage': '/assets/care.jpg',
      alt :'Care',
      title: 'Care'
    },
    {
      video:'https://youtu.be/HGOBQPFzWKo',
      alt :'Laboratory',
      title: 'Laboratory'
    }
  ]

  constructor(private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  ngOnInit(): void {
  }

}
