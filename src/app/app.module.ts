import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { NgProgressModule } from "ngx-progressbar";
import { NgProgressHttpModule } from "ngx-progressbar/http";

import { ApiService } from "src/app/services/api/api.service";
import { AlbumService } from "src/app/services/album/album.service";
import { AlbumsComponent } from "./pages/albums/albums.component";
import { AddModalComponent } from "./components/add-modal/add-modal.component";
import { EditModalComponent } from "./components/edit-modal/edit-modal.component";
import { AlertModalComponent } from "./components/alert-modal/alert-modal.component";
import { AlbumComponent } from "./pages/album/album.component";
import { HeaderComponent } from "./components/header/header.component";
import { AlertComponent } from "./components/alert/alert.component";
import { CustomDatePipe } from "./pipes/custom-date/custom-date.pipe";

@NgModule({
	declarations: [AppComponent, AlbumsComponent, AddModalComponent, EditModalComponent, AlertModalComponent, AlbumComponent, HeaderComponent, AlertComponent, CustomDatePipe],
	imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, NgbModule, NgProgressModule, NgProgressHttpModule],
	providers: [ApiService, AlbumService, AddModalComponent, EditModalComponent, AlertModalComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}
