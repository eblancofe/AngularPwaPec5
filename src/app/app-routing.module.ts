import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumComponent } from './components/album/album.component';

const routes: Routes = [
  { path: '', component: AlbumsComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: '**', component: AlbumsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
