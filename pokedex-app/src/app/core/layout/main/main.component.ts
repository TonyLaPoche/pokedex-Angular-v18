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
  styles: ``
})
export class MainComponent {

}
