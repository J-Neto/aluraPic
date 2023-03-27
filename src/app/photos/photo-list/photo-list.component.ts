import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent {
  
  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) {}
  
  ngOnInit(): void {

    const userName = this.activatedRoute.snapshot.params['userName'];
    this.photoService
      .listFromUser(userName)
      .subscribe(photos => {this.photos = photos});
  }
}
