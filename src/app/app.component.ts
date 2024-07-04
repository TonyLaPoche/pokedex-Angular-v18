import { Component } from '@angular/core';
import {LayoutComponent} from "./core/layout/layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  template: `
    <pkm-layout></pkm-layout>
  `,
  styles: [],
})
export class AppComponent {
}
