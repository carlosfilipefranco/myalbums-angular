import { Component, OnInit } from "@angular/core";
import { Album } from "src/app/models/album";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: "app-add-modal",
	templateUrl: "./add-modal.component.html",
	styleUrls: ["./add-modal.component.scss"]
})
export class AddModalComponent implements OnInit {
	constructor(public activeModal: NgbActiveModal) {}

	model: Album = {
		id: "0",
		title: "",
		artist: ""
	};

	ngOnInit(): void {}

	save() {
		this.activeModal.close(this.model);
	}
}
