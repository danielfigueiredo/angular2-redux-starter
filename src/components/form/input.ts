import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'rio-input',
  template: `
    <input
      ngControl 
      ngModel
      [id]="qaid"
      [type]="inputType"
      class="block col-12 mb1 input"
      [attr.placeholder]="placeholder"
      [name]="name"
    />
  `
})
export class RioInput {
  @Input() inputType = 'text';
  @Input() placeholder = '';
  @Input() name;
  @Input() qaid: string;
};
