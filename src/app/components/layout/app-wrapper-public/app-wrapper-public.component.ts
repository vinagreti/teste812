import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-app-wrapper-public',
  templateUrl: './app-wrapper-public.component.html',
  styleUrls: ['./app-wrapper-public.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppWrapperPublicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
