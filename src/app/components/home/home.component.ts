import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

  data = inject(ActivatedRoute).snapshot.data['data'].text;

}
