import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

  stateHeart:boolean =true
  click(){
    this.stateHeart =  !this.stateHeart 
  } 
  constructor() { }

  ngOnInit() {
  }

}
