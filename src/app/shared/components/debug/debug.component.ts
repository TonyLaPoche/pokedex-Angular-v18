import {Component, effect, input} from '@angular/core';
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'pkm-debug',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
    <em>
      {{ value() | json }}
    </em>
  `,
  styles: ``
})
export class DebugComponent {
  value = input.required<any>()
  constructor() {
    effect(() => {
      console.log("EFFECT")
      console.log(this.value())
    });
  }
}
