import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dlg-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  host: {
    '[class.banner]': 'true'
  }
})
export class BannerComponent {}
