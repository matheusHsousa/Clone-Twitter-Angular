import { Component } from '@angular/core';
import { DialogLoginComponent } from './login/dialog-login/dialog-login.component';
import {MatDialog} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'clone-twitter';

}
