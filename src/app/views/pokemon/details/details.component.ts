import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pkm-details',
  standalone: true,
  imports: [],
  template: `
    <p>
      details works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent {

}
