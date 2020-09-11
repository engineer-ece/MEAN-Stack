import { Component, OnInit } from '@angular/core';
import { Node1 } from '../node1'
import { NODE1 } from '../node1List';

@Component({
  selector: 'app-node1',
  templateUrl: './node1.component.html',
  styleUrls: ['./node1.component.css']
})
export class Node1Component implements OnInit {

  node1 = NODE1;
  selectedNode1 : Node1;
 
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(node: Node1): void{
   this.selectedNode1 = node;
  }
}
