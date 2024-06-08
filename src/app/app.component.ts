import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-pwa-pec5';
  muestra_rolling_Albums_loading: Boolean = false;
  muestra_rolling_Albums_loaded: Boolean = true;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
}
