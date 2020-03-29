import { Component, OnInit } from "@angular/core";
import { AlbumService } from "src/app/services/album/album.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Album } from "src/app/models/album";
import { AlertModalComponent } from "src/app/components/alert-modal/alert-modal.component";
import { EditModalComponent } from "src/app/components/edit-modal/edit-modal.component";
import { AddModalComponent } from "src/app/components/add-modal/add-modal.component";
import { Router } from "@angular/router";

@Component({
	selector: "app-albums",
	templateUrl: "./albums.component.html",
	styleUrls: ["./albums.component.scss"]
})
export class AlbumsComponent implements OnInit {
	alert: {
		show: boolean;
		message: string;
		type: string;
	};
	albums: Album[];
	selected: string = null;
	orderAsc: boolean = true;
	constructor(public albumService: AlbumService, private modalService: NgbModal, private router: Router) {}

	ngOnInit(): void {
		this.alert = {
			show: false,
			message: null,
			type: null
		};

		this.load();
	}

	load() {
		this.albumService.index().subscribe(
			(data: any) => {
				this.albums = data.data;
			},
			() => {
				this.showAlert("Erro de rede. Tente novamente.", "danger");
			}
		);
	}

	delete(album: Album) {
		const modal = this.modalService.open(AlertModalComponent);
		modal.componentInstance.title = "Apagar álbum";
		modal.componentInstance.body = `Tens a certeza que desejas apagar o álbum ${album.artist}?`;
		modal.result.then(
			() => {
				this.albumService.delete(album.id).subscribe((data: any) => {
					let type = "danger";
					if (data.status === "success") {
						type = "success";
						let index = this.findIndexById(album.id);
						this.albums.splice(index, 1);
					}
					this.showAlert(data.message, type);
				});
			},
			() => {
				this.showAlert("Erro de rede. Tente novamente.", "danger");
			}
		);
	}

	edit(album: Album) {
		const modal = this.modalService.open(EditModalComponent);
		modal.componentInstance.album = album;
		modal.result.then(
			result => {
				this.albumService.edit(result).subscribe((data: any) => {
					let type = "danger";
					if (data.status === "success") {
						type = "success";
						let index = this.findIndexById(result.id);
						this.albums[index].artist = result.artist;
						this.albums[index].title = result.title;
					}
					this.showAlert(data.message, type);
				});
			},
			() => {
				this.showAlert("Erro de rede. Tente novamente.", "danger");
			}
		);
	}

	findIndexById(id: string): number {
		return this.albums.findIndex((album: Album) => album.id === id);
	}

	add() {
		const modal = this.modalService.open(AddModalComponent);
		modal.result.then(
			result => {
				this.albumService.add(result).subscribe((data: any) => {
					let type = "danger";
					if (data.status === "success") {
						type = "success";
						this.load();
					}
					this.showAlert(data.message, type);
				});
			},
			() => {
				this.showAlert("Erro de rede. Tente novamente.", "danger");
			}
		);
	}

	view(album: Album) {
		this.router.navigate(["/album", album.id]);
	}

	showAlert(message: string, type: string) {
		this.alert = {
			show: true,
			message,
			type
		};
	}

	order(type: string) {
		if (type === this.selected) {
			this.orderAsc = !this.orderAsc;
		}
		this.selected = type;
		this.albums.sort((a, b) => {
			if (a[type] < b[type]) {
				return this.orderAsc ? -1 : 1;
			}
			if (a[type] > b[type]) {
				return this.orderAsc ? 1 : -1;
			}
			return 0;
		});
	}
}
