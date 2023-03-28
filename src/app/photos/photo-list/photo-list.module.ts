import { NgModule } from '@angular/core';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { Photos1Component } from './photos1/photos1.component';

@NgModule({ 
    declarations: [
        PhotoListComponent,
        Photos1Component,
        LoadButtonComponent
    ]
})
export class PhotoListModule {}