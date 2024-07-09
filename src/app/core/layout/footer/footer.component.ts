import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'pkm-footer',
  standalone: true,
  imports: [
    DatePipe
  ],
  template: `
    <footer>
      <div class="footer-container">
        <ul class="list">
          <li class="item"><a href="https://github.com/TonyLaPoche">Github</a></li>
          <li class="item"><a href="https://www.linkedin.com/in/antoine-terrade-web/">LinkedIn</a></li>
          <li class="item"><a href="mailto:contact@antoineterrade.com">Contact</a></li>
        </ul>
        <p class="copyright">&copy;Copyright 2023 - {{ today | date : 'yyyy'  }} Antoine Terrade </p>
      </div>
    </footer>
  `,
  styles: `
    .footer-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .5rem;
      padding: 1rem;
      height: inherit;
      border-top: darkgrey 1px solid;
      font-size: 1.3rem;
    }

    .list {
      list-style-type: none;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 3rem;
    }

    .copyright {
      font-size: 1rem;
      font-style: italic;
      flex-grow: 1;
    }
  `
})
export class FooterComponent {
  today = new Date();
}
