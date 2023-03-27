import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos1',
  templateUrl: './photos1.component.html',
  styleUrls: ['./photos1.component.css']
})
export class Photos1Component implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() {}

  // Receive changes of inbound properties (in this case: photos)
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['photos']) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: Photo[]) {
    const newRows = [];

    for (let index = 0; index < photos.length; index+=3) {
      newRows.push(photos.slice(index, index + 3));
    }

    return newRows;
  }
}
