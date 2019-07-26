import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-app-wrapper-default',
  templateUrl: './app-wrapper-default.component.html',
  styleUrls: ['./app-wrapper-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppWrapperDefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
