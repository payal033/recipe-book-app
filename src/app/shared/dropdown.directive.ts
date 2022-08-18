import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('attr.data-bs-toggle') value: String = 'dropdown';

  @HostListener('click') toggleOpen() {
    this.value = 'dropdown'
  }
  constructor() { }

}
