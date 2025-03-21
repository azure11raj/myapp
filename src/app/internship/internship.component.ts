import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './internship.component.html'
  //styleUrl: './internship.component.css'
})
export class InternshipComponent {

}
