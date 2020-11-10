import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ExInfiniteScrollService } from './ex-infinite-scroll.service';

@Component({
  selector: 'ex-infinite-scroll',
  templateUrl: './ex-infinite-scroll.component.html',
  styles: [],
})
export class ExInfiniteScrollComponent implements OnInit {

  testData: any[] = [];

  /** a reference for listining scroll */
  @ViewChild('anchorBottom') anchorBottom: ElementRef<HTMLElement>;


  private observer: IntersectionObserver;

  constructor(private exInfiniteScrollService: ExInfiniteScrollService) { }

  ngOnInit(): void {
    this.testData = this.exInfiniteScrollService.getData().content;
    console.log('testData:', this.testData);
  }

}
