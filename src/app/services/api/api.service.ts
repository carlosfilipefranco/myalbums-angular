import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable({
	providedIn: "root"
})
export class ApiService {
	API_URL: string = "http://0.0.0.0:8080/api";

	constructor(private http: HttpClient) {}

	get(endpoint: string, params?: any) {
		let httpOptions = {
			headers: new HttpHeaders({
				"content-type": "application/json"
			}),
			params: new HttpParams()
		};
		if (params) {
			for (let p in params) {
				httpOptions.params = httpOptions.params.set(p, params[p]);
			}
		}
		let url = this.API_URL + endpoint;
		return this.http.get(url, httpOptions);
	}

	post(endpoint: string, data: any) {
		let httpOptions = {
			headers: new HttpHeaders({
				"content-type": "application/json"
			})
		};
		let url = this.API_URL + endpoint;
		return this.http.post(url, data, httpOptions);
	}
}
