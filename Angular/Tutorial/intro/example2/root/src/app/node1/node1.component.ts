import { Component, OnInit } from '@angular/core';
import { Node1 } from '../node1';
@Component({
  selector: 'app-node1',
  templateUrl: './node1.component.html',
  styleUrls: ['./node1.component.sass']
})
export class Node1Component implements OnInit {
  
  node1: Node1 = {
     id : 1,
     name : 'node1 by Gobal Krishnan V'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
