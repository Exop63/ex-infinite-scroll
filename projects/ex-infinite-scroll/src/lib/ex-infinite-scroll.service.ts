import { Injectable } from '@angular/core';
let page: number = 0;
@Injectable({
  providedIn: 'root'
})
export class ExInfiniteScrollService {
  /** Test data */
  data: any[] = Array(100).fill({ name: 'Test data', id: 0 });

  constructor() {
    this.data.forEach((m, i, arr) => {
      arr[i] = { ...m, id: i };
      // arr[i].id = i;
    });
  }

  getData() {
    const start: number = page * 20;
    const end: number = start + 20;
    page++;
    return {
      next: page,
      content: this.data.splice(start, end),
    };
  }


}
