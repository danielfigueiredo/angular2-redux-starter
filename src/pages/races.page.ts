import { Component } from '@angular/core';

@Component({
  template: `
    <form connect="form1">
      <input
        ngControl
        ngModel
        type="text"
        class="block col-12 mb1 input"
        name="firstName" />
    </form>
  `
})
export class RacesPage {}
