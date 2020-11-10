import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { ExInfiniteScrollComponent } from './ex-infinite-scroll.component';
import { ExInfiniteScrollConfig } from './ex-infinite-scroll.model';



@NgModule({
  declarations: [ExInfiniteScrollComponent],
  imports: [
  ],
  exports: [ExInfiniteScrollComponent]
})
export class ExInfiniteScrollModule {

  constructor(@Optional() @SkipSelf() parentModule?: ExInfiniteScrollModule) {
    if (parentModule) {
      throw new Error(
        'ExInfiniteScrollModule is already loaded. Import it in the AppModule only');
    }
  }


  static forRoot(config: ExInfiniteScrollConfig): ModuleWithProviders < ExInfiniteScrollModule > {
  return {
    ngModule: ExInfiniteScrollModule,
    providers: [{ provide: ExInfiniteScrollModule, useValue: config }]
  }
}
}
