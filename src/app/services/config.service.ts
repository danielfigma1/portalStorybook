import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getPhotos():Observable<any> {
    const photosUrl = "https://jsonplaceholder.typicode.com/albums/1/photos";
    return this.http.get<any>(photosUrl);
  }

  getTableData():Observable<any> {
    const tableDataUrl = "https://jsonplaceholder.typicode.com/posts/1/comments";
    return this.http.get<any>(tableDataUrl);
  }

  getPopulation():Observable<any> {
    const tableDataUrl = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
    return this.http.get<any>(tableDataUrl);
  }
}
