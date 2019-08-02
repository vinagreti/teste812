import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-app-wrapper-private',
  templateUrl: './app-wrapper-private.component.html',
  styleUrls: ['./app-wrapper-private.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppWrapperPrivateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
