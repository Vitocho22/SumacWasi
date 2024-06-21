import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Producto } from '../../models/product';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.css'
})
export class ImageModalComponent {

  @Input() producto: Producto | null = null;
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();

  zoomLevel: number = 1;

  closeModal() {
    this.visible = false;
    this.close.emit();
    this.resetZoom();
  }

  zoomIn() {
    this.zoomLevel += 0.1;
  }

  zoomOut() {
    if (this.zoomLevel > 0.1) {
      this.zoomLevel -= 0.1;
    }
  }

  resetZoom() {
    this.zoomLevel = 1;
  }

  @HostListener('mousewheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    if (event.deltaY > 0) {
      this.zoomOut();
    } else {
      this.zoomIn();
    }
    event.preventDefault();
  }
}
