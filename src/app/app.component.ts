import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageLoad } from './lib/page-load';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  data = inject(PageLoad).data?.text
  title = 'angular-test';
}

