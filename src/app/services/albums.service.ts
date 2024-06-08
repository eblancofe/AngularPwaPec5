import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/album.interface';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private http: HttpClient) {}

  getAllImages(): Observable<Album[]> {
    //return this.http.get<Image[]>('https://picsum.photos/v2/list');
    return this.http.get<Album[]>(
      'https://jsonplaceholder.typicode.com/photos?albumId=1'
    );
  }

  getImageById(id: string): Observable<Album> {
    //return this.http.get<Image>('https://picsum.photos/id/' + id + '/info');
    console.log('metemos el id = ' + id);
    return this.http.get<Album>(
      'https://jsonplaceholder.typicode.com/photos/' + id
    );
  }
}
