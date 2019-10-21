import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';


import { Photo } from 'src/app/model/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];

  filter = '';

  debounce: Subject<string> = new Subject<string>();

  hasMore = true;
  currentPage = 1 ;
  userName = '';

  constructor( private activedRoute: ActivatedRoute,
               private photoService: PhotoService) {}


  ngOnInit(): void {

    this.userName = this.activedRoute.snapshot.params.userName;

    this.getPhotos();

    this.debounce.pipe(
      debounceTime(300)
    ).subscribe(filter => this.filter = filter);

  }

  getPhotos() {
    this.photos = this.activedRoute.snapshot.data.photos;
  }

  load() {

    this.photoService.listFromUserPagination(this.userName , ++this.currentPage)
    .subscribe({
      next: photos => {
        this.photos = this.photos.concat(photos);
        if (!photos.length) {
          this.hasMore = false;
        }
      },
      error: err => console.error(err)
    });

  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
