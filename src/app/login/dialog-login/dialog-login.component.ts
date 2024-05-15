import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.scss'],
})
export class DialogLoginComponent {
  valorDoImput = '';

  login() {
    console.log(this.valorDoImput);
  }
}
