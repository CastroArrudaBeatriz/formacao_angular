import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from 'src/app/model/photo';

@Pipe({
    name: 'filterByDescription'
})
export class FilterByDescription implements PipeTransform {

    transform(photos: Photo[], description: string) {
        description = description.trim().toLowerCase();

        if (description) {

            return photos.filter( photo => photo.description.toLocaleLowerCase().includes(description) );

        } else {
            return photos;
        }
    }

}
