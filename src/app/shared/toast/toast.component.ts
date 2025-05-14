import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';


export type ToastType = 'success' | 'error' | 'warning';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.sass'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' })),
      ]),
    ]),
  ]
})
export class ToastComponent implements OnChanges {
  @Input() message: string = '';
  @Input() showToast: boolean = false;
  @Input() type: ToastType = 'error';
  @Input() delayMs = 5000;
  @Output() toastClosed = new EventEmitter<void>();

  private timeoutRef: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['showToast']?.currentValue === true) {
      clearTimeout(this.timeoutRef);
      this.timeoutRef = setTimeout(() => this.closeToast(), this.delayMs);
    }
  }

  closeToast() {
    this.showToast = false;
    this.toastClosed.emit();
  }

  get toastClass() {
    switch (this.type) {
      case 'success': return 'text-bg-success';
      case 'error': return 'text-bg-danger';
      case 'warning': return 'text-bg-warning';
      default: return 'text-bg-danger';
    }
  }
}
