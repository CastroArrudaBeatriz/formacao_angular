import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/model/photo';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {


  photos: Photo[] = [];

  constructor( private photoService: PhotoService,
               private activedRoute: ActivatedRoute) {}


  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos() {

    const userName = this.activedRoute.snapshot.params.userName;
    this.photoService.listFromUser(userName)
    .subscribe({
      next: photos => this.photos = photos,
      error: err => console.error(err)
    });

  }

}
