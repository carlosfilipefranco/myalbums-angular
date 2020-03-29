import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-alert",
	templateUrl: "./alert.component.html",
	styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit {
	@Input() message = null;
	@Input() type = null;
	@Input() show = false;
	constructor() {}

	ngOnInit(): void {}
}
