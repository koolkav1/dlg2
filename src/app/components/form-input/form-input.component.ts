import { Component, ElementRef, Input, ViewChild, booleanAttribute } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormInputType } from './form-input.types';
import { noop } from 'rxjs';

@Component({
  selector: 'dlg-form-input',
  standalone: true,
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: FormInputComponent,
        multi: true,
    },
],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
  host: {
    '[class.form-input]': 'true',
  }
})
export class FormInputComponent  implements ControlValueAccessor {
  @ViewChild('inputElement', { static: true })
    public elementRef!: ElementRef<HTMLInputElement>;

  @Input({required: true}) id!: string;
  @Input() formType: FormInputType = 'text';
  @Input({ transform: booleanAttribute }) disabled?: boolean;

  value?: string = '';
  onChange: (value: string) => void = noop;
  onTouched: () => void = noop;
  writeValue(value: string) {
    this.value = value;
}

registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
}

registerOnTouched(fn: () => void) {
    this.onTouched = fn;
}

setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
}

handleInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
}

handleBlur() {
    this.onTouched();
}

focus() {
    this.elementRef.nativeElement.focus();
}
}
