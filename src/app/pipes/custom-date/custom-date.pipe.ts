import { Pipe, PipeTransform } from "@angular/core";
import * as Moment from "moment";

@Pipe({
	name: "customDate"
})
export class CustomDatePipe implements PipeTransform {
	transform(value: string, ...args: unknown[]): unknown {
		return Moment(value).format("DD-MM-YYYY HH:mm:ss");
	}
}
