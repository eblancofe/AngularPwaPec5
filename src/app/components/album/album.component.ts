import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';
import { Album } from 'src/app/models/album.interface';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  album!: Album;
  panelOpenState: boolean = false;

  constructor(
    private albumsService: AlbumsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier => ' + identifier);

    if (identifier) {
      this.albumsService.getImageById(identifier).subscribe((album1) => {
        if (!album1) {
          return this.router.navigateByUrl('/');
        }
        this.album = album1;
        console.log('Image => ', this.album);
        return this.album;
      });
    }
  }

  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
  }
}
