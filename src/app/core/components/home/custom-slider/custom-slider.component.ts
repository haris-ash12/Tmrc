import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { trigger, state, style, transition, animate, useAnimation } from '@angular/animations';

type PaneType = 'one' | 'two' | 'three';

@Component({
  selector: 'custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      state('one', style({ transform: 'translateX(0)' })),
      state('two', style({ transform: 'translateX(-33.35%)' })),
      state('three', style({ transform: 'translateX(-66.65%)' })),
      transition('three => *', [
        animate('0s ease-out', style({ transform: 'translateX(-99.95%)' }))
      ]),
      transition('* => *', animate('1s ease'))
    ])
  ]
})
export class CustomSliderComponent {
  @Input() activePane: PaneType = 'one';
}
// Changed the animate function value from 0.7s to 0s ease-out,
// So that immediately after 3rd slide comes first.
