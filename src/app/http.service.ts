import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

	constructor(private http: HttpClient) { }
	//https://www.cbr-xml-daily.ru/daily_json.js

	getData() {
		return this.http.get(
			//'https://openexchangerates.org/api/latest.json?app_id=0818a04f92e3421f964ac3fedadb5ecc&base=RUB'
			//'https://openexchangerates.org/api/latest.json?app_id=0818a04f92e3421f964ac3fedadb5ecc'
			'https://api.apilayer.com/currency_data/live?apikey=CMAg5tb8zZPMtHmKASlSeTuATqEazOEx&source=RUB'
		)
	}
}