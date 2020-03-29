import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

import { ApiService } from "src/app/services/api/api.service";
import { AlbumService } from "src/app/services/album/album.service";
import { CategoriesComponent } from "./pages/albums/categories.component";
import { AddModalComponent } from "./components/add-modal/add-modal.component";
import { EditModalComponent } from "./components/edit-modal/edit-modal.component";
import { AlertModalComponent } from "./components/alert-modal/alert-modal.component";
import { AlbumComponent } from "./pages/album/album.component";

@NgModule({
	declarations: [AppComponent, CategoriesComponent, AddModalComponent, EditModalComponent, AlertModalComponent, AlbumComponent],
	imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, NgbModule],
	providers: [ApiService, AlbumService, AddModalComponent, EditModalComponent, AlertModalComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}
