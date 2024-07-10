import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'pkm-main',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
    <router-outlet />
  `,
  styles: `
    :host {
      flex-grow: 1;
    }
  `
})
export class MainComponent {

}
