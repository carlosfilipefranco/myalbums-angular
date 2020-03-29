import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";
import { Album } from "src/app/models/album";

@Injectable({
	providedIn: "root"
})
export class AlbumService {
	constructor(private api: ApiService) {}

	index() {
		return this.api.get("album/index", null);
	}

	view(id: string) {
		return this.api.get("album/view", { id });
	}

	delete(id: string) {
		return this.api.post("album/delete", { id });
	}

	add(data: Album) {
		return this.api.post("album/add", data);
	}

	edit(data: Album) {
		return this.api.post("album/edit", data);
	}
}
