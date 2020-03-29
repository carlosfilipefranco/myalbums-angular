import { Component, OnInit } from "@angular/core";
import { AlbumService } from "src/app/services/album/album.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Album } from "src/app/models/album";
import { AlertModalComponent } from "src/app/components/alert-modal/alert-modal.component";
import { EditModalComponent } from "src/app/components/edit-modal/edit-modal.component";
import { AddModalComponent } from "src/app/components/add-modal/add-modal.component";
import { Router } from "@angular/router";

@Component({
	selector: "app-categories",
	templateUrl: "./categories.component.html",
	styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
	alert: {
		show: boolean;
		message: string;
		type: string;
	};
	categories: Album[];
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
				this.categories = data.data;
			},
			() => {
				this.showAlert("Ocorreu um erro a carregar os álbuns", "danger");
			}
		);
	}

	delete(album: Album) {
		const modal = this.modalService.open(AlertModalComponent);
		modal.componentInstance.title = "Apagar álbum";
		modal.componentInstance.body = `Tens a certeza que desejas apagar a álbum ${album.artist}?`;
		modal.result.then(
			() => {
				this.albumService.delete(album.id).subscribe((data: any) => {
					let type = "danger";
					if (data.status === "success") {
						type = "success";
						this.load();
					}
					this.showAlert(data.message, type);
				});
			},
			() => {}
		);
	}

	edit(album: Album) {
		const modal = this.modalService.open(EditModalComponent);
		modal.componentInstance.album = album;
		modal.result.then(
			result => {
				console.log(result);
				this.albumService.edit(result).subscribe((data: any) => {
					let type = "danger";
					if (data.status === "success") {
						type = "success";
						this.load();
					}
					this.showAlert(data.message, type);
				});
			},
			() => {}
		);
	}

	add() {
		const modal = this.modalService.open(AddModalComponent);
		modal.result.then(
			result => {
				console.log(result);
				this.albumService.add(result).subscribe((data: any) => {
					let type = "danger";
					if (data.status === "success") {
						type = "success";
						this.load();
					}
					this.showAlert(data.message, type);
				});
			},
			() => {}
		);
	}

	view(album: Album) {
		this.router.navigate(["/album", album.id]);
	}

	showAlert(message: string, type: string) {
		this.alert.show = true;
		this.alert.message = message;
		this.alert.type = type;
	}
}
