import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Album } from "src/app/models/album";

@Component({
	selector: "app-edit-modal",
	templateUrl: "./edit-modal.component.html",
	styleUrls: ["./edit-modal.component.scss"]
})
export class EditModalComponent implements OnInit {
	@Input() album: Album;
	constructor(public activeModal: NgbActiveModal) {}

	model: Album = {
		id: "",
		title: "",
		artist: ""
	};

	ngOnInit(): void {
		this.model.id = this.album.id;
		this.model.title = this.album.title;
		this.model.artist = this.album.artist;
	}

	save() {
		this.activeModal.close(this.model);
	}
}
