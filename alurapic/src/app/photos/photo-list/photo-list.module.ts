import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription

    ],
    imports: [
        CommonModule,
        PhotoModule,
        SharedModule
    ],
    exports: [
        LoadButtonComponent,
        PhotoListComponent,
        PhotosComponent,

    ]
})
export class PhotoListModule {

}
