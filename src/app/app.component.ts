import {Component, effect, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'material-theming';
  darkMode = signal(false)

  setDarkMode = effect(() => {
    document.documentElement.classList.toggle('dark', this.darkMode());
  })
}
