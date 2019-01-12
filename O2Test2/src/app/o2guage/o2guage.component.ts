import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o2guage',
  templateUrl: './o2guage.component.html',
  styleUrls: ['./o2guage.component.css']
})
export class O2guageComponent implements OnInit {
   level : string = "The 02 Level is: Empty";

  constructor() { }

  ngOnInit() {
  }

}
