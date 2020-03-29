import { Component, OnInit, Input } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: "app-alert-modal",
	templateUrl: "./alert-modal.component.html",
	styleUrls: ["./alert-modal.component.scss"]
})
export class AlertModalComponent implements OnInit {
	@Input() body = "";
	@Input() title = "";
	constructor(public activeModal: NgbActiveModal) {}

	ngOnInit(): void {}
}
