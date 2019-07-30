import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  today = Date.now();

  constructor(
    private dateAdapter: DateAdapter<Date>
  ) {}

  useLanguage(language: string): void {
    this.dateAdapter.setLocale(language);
  }

}
