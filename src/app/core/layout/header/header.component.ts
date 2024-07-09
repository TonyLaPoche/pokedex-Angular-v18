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
        <img src="/assets/images/pokeball.png" about="Home-Page" class="title-img" />
        <ul class="nav-list">
          <li class="nav-item">
            <a routerLink="home" class="link">
              HomePage
            </a>
          </li>
        </ul>
      </nav>
    </section>
  `,
  styles: `
    #header-container {
      position: relative;
      width: 100vw;
      height: 96px;
      padding: 8px 16px;
    }
    .nav-container {
      height: 100%;
      width: 100%;
      display: flex;
      gap: 1rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      & img {
        width: auto;
        height: 60%;
      }
    }
    
    .nav-list {
      display: flex;
      gap: 2rem;
    }
    
  `
})
export class HeaderComponent {

}
