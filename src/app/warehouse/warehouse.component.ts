import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

 photosArr:Array<any> = [];

  constructor(private config:ConfigService){}

  ngOnInit(): void {
    this.config.getPhotos().subscribe(
      (data) => {
        console.log(data);
        this.photosArr = data;
      }
    )
  }
}
