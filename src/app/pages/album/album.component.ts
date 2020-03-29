import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Album } from "src/app/models/album";
import { AlbumService } from "src/app/services/album/album.service";

@Component({
	selector: "app-album",
	templateUrl: "./album.component.html",
	styleUrls: ["./album.component.scss"]
})
export class AlbumComponent implements OnInit {
	album: Album;
	constructor(private route: ActivatedRoute, private router: Router, public albumService: AlbumService) {}

	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get("id");
		if (!id) {
			this.router.navigate(["/"]);
		}
		this.load(id);
	}

	load(id: string) {
		this.albumService.view(id).subscribe((data: any) => {
			if (data.status === "success") {
				this.album = data.data;
			}
		});
	}

	goBack() {
		this.router.navigate(["/"]);
	}
}
