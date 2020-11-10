import { Component, OnInit } from '@angular/core';

interface components {
  icon :string 
  name :string 
  redirectTo:string 
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components : components[] = [
    {
      icon:'american-football',
      name:'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon:'logo-apple-appstore',
      name:'Alert',
      redirectTo: '/alert'
    },
    {
      icon:'logo-google-playstore',
      name:'Contact',
      redirectTo: '/alert'
    },
  ]
 
  constructor() { }

  ngOnInit() {
  }

}
