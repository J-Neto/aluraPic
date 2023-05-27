import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Directive({
    selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

    // It's necessary to use the PlatformDetector's service to know if the application is on a web or mobile page;
    // If our application is rendered by the server-side, it will have some problems. Like:

    // ** The DOM works only in browser's side. We won't be able to use the App in other platforms like in a web worker,... 
    // ** ...in Server-side(rendering), or in a Desktop or in the mobile app, etc WHERE IS NO BROWSER.

    // Angular keeps the Component & the view in Sync using Templates, data binding & change detection, etc. 
    // All of them are bypassed when we update the DOM Directly.

    constructor(
        private element: ElementRef<any>, 
        private renderer: Renderer2,
        private platformDetector: PlatformDetectorService,
    ) {}

    ngOnInit(): void {
        this.platformDetector.isPlatformBrowser() && this.renderer.selectRootElement(this.element.nativeElement).click();
    }
}