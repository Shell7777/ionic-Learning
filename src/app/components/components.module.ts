import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { LabelComponent } from './label/label.component';


@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    LabelComponent
  ],
  exports:[
    MenuComponent,
    HeaderComponent,
    LabelComponent,
  ],
  imports: [
    CommonModule,  
    IonicModule 
  ]
})
export class ComponentsModule { }
