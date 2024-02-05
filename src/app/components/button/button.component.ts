import { Component, Input } from '@angular/core';
import { ButtonType } from './button.interface';

@Component({
  selector: 'dlg-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonType: ButtonType = 'button';
  @Input() isDisabled: boolean = false;
}
