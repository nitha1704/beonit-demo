import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarouselService } from './carousel.service';
import * as ɵngcc0 from '@angular/core';
export declare class LazyLoadService implements OnDestroy {
    private carouselService;
    /**
     * Subscrioption to merge Observable  from CarouselService
     */
    lazyLoadSubscription: Subscription;
    constructor(carouselService: CarouselService);
    ngOnDestroy(): void;
    /**
     * Defines Observables which service must observe
     */
    spyDataStreams(): void;
    private _defineLazyLoadSlides;
    /**
       * Loads all resources of an item at the specified position.
       * @param position - The absolute position of the item.
       */
    private _load;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LazyLoadService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<LazyLoadService>;
}

//# sourceMappingURL=lazyload.service.d.ts.map