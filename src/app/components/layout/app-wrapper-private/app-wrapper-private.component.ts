import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-wrapper-private',
  templateUrl: './app-wrapper-private.component.html',
  styleUrls: ['./app-wrapper-private.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppWrapperPrivateComponent {

  constructor() { }

  logout() {
  }

}
