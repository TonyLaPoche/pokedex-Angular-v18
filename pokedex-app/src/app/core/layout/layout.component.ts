import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {MainComponent} from "./main/main.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'pkm-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  template: `
    <pkm-header></pkm-header>
    <pkm-main></pkm-main>
    <pkm-footer></pkm-footer>
  `,
  styles: ``
})
export class LayoutComponent {

}
