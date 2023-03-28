import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent {
  
  photos: Photo[] = [];
  filter: string = '';

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }
}
