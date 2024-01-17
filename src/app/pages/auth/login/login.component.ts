import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { IconComponent } from '@components/icon/icon.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IconComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styles: [
  ]
})
export default class LoginComponent {

}
