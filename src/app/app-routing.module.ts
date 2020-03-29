import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoriesComponent } from "./pages/albums/categories.component";
import { AlbumComponent } from "./pages/album/album.component";

const routes: Routes = [
	{ path: "", redirectTo: "/categories", pathMatch: "full" },
	{ path: "categories", component: CategoriesComponent },
	{ path: "album/:id", component: AlbumComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
