import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'pkm-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
      <section id="header-container">
          <nav class="nav-container">
              <a class="nav-link-item" routerLink="home">
                  <img src="/assets/images/pokeball.png" alt="pokeball to catch em all" about="Home-Page"/>
              </a>
          </nav>
      </section>
  `,
  styles: `
    #header-container {
      position: relative;
      height: 96px;
      padding: 8px 16px;
    }
    .nav-container {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
      .nav-link-item img {
        max-width: 50px;
        height: auto;
      }
  `
})
export class HeaderComponent {

}
