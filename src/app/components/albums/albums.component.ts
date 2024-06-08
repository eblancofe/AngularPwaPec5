import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album.interface';
import { AlbumsService } from 'src/app/services/albums.service';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title'];
  albums: Album[] = [];
  dataSource: any;
  isLoading = true;

  constructor(private albumService: AlbumsService) {}

  ngOnInit(): void {
    this.albumService.getAllImages().subscribe((album) => {
      this.albums = album;
      console.log(this.albums);
      //volcamos el album de fotos en la tabla
      const dataSource1 = new MatTableDataSource(this.albums);
      this.dataSource = dataSource1;
    });
    of(this.dataSource)
      .pipe(delay(1000))
      .subscribe(
        () => {
          this.isLoading = false;
        },
        (error) => (this.isLoading = false)
      );
  }
}
