import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoModule } from '../photo/photo.module';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { Photos1Component } from './photos1/photos1.component';

@NgModule({ 
    declarations: [
        PhotoListComponent,
        Photos1Component,
        LoadButtonComponent,
        FilterByDescription,        
    ],
    imports: [
        CommonModule,
        PhotoModule
    ]
})
export class PhotoListModule {}