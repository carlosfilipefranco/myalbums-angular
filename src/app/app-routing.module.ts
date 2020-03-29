import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlbumsComponent } from "./pages/albums/albums.component";
import { AlbumComponent } from "./pages/album/album.component";

const routes: Routes = [
	{ path: "", redirectTo: "/albums", pathMatch: "full" },
	{ path: "albums", component: AlbumsComponent },
	{ path: "album/:id", component: AlbumComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
