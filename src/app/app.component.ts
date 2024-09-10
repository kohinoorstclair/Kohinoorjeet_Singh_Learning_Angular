import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kohinoorjeet-Singh-Learning-Angular';
  about = 'hi i AM  computer developer and a fellow tech enthusiast';
  variable1 = 'hey how is it going';
}
