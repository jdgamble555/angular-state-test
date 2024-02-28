import { APP_INITIALIZER, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
  /*providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: () => DataService
    }
  ]*/
})
export class AppComponent {
  data = inject(DataService);
  title = 'angular-test';
}
