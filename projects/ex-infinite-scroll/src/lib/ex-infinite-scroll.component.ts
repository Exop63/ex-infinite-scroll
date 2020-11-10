import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ExInfiniteScrollService } from './ex-infinite-scroll.service';

@Component({
  selector: 'ex-infinite-scroll',
  templateUrl: './ex-infinite-scroll.component.html',
  styles: [],
})
export class ExInfiniteScrollComponent implements OnInit, AfterViewInit {

  testData: any[] = [];


  private observer: IntersectionObserver;

  get element(): any { return this.host.nativeElement; }

  /** a reference for listining scroll */
  @ViewChild('anchorBottom') anchorBottom: ElementRef<HTMLElement>;
  /** a event for scrolling */
  @Output() scrollToEnd: EventEmitter<any> = new EventEmitter();

  constructor(private host: ElementRef) { }
  ngAfterViewInit(): void {
    /** Liisten to scroll */
    this.initializeInfinit();
  }

  ngOnInit(): void {

  }

  /** Setup listining */
  initializeInfinit() {
    this.observer = new IntersectionObserver((event) => {
      console.log('intersect:', event);
      this.scroll();
    }, {
      root: this.isHostScrollable() ? this.host.nativeElement : null,
    });

    console.log('anchor:', this.anchorBottom);
    this.observer.observe(this.anchorBottom.nativeElement);
  }
  scroll() {

    console.log('testData:', this.testData);
    this.scrollToEnd.emit();
  }

  /** Check View is scrolled */
  private isHostScrollable() {
    const style = window.getComputedStyle(this.element);

    return style.getPropertyValue('overflow') === 'auto' ||
      style.getPropertyValue('overflow-y') === 'scroll';
  }
  /** disconnect for performance */
  ngOnDestroy() {
    this.observer.disconnect();
  }
}
