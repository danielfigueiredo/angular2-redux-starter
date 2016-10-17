import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'rio-form',
  template: `
    <form [connect]="name">
      <ng-content></ng-content>
    </form>
  `
})
export class RioForm {
  @Input() name: string;
};
