import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';

@Component({
  standalone: true,
  imports: [RouterModule, BannerComponent],
  selector: 'dlg-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dlg';
}
