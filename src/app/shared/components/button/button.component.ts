import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styles: [
  ]
})
export class ButtonComponent {
  @Input() typeBtn: 'button' | 'submit' = 'button';
  @Input() color = 'primary';

  get colors() {
    return {
      'bg-green text-white hover:bg-green-dark': this.color === 'primary',
      'bg-white hover:bg-secondary-light': this.color === 'white',
    }
  }

}
