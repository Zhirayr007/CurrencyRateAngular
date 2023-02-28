import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [HttpService]
})

export class AppComponent implements OnInit {
	constructor(private httpService: HttpService) {
	}
	date: Date = new Date();
	//Массив валют с объектами Name - имя валюты, Number- курс, 
	//diff - разница между пред и нынешним, show - отобразить/не отобразить
	massValut = [
		{ Name: 'USD', Number: 0, diff: 0, show: true },
		{ Name: 'EUR', Number: 0, diff: 0, show: true },
		{ Name: 'GBR', Number: 0, diff: 0, show: true },
		{ Name: 'CNY', Number: 0, diff: 0, show: false },
		{ Name: 'JPY', Number: 0, diff: 0, show: false },
		{ Name: 'TRY', Number: 0, diff: 0, show: false },
	];
	//Функции для обработки на нажатие checkbox
	checkBOX1() { this.massValut[3].show = !this.massValut[3].show; }
	checkBOX2() { this.massValut[4].show = !this.massValut[4].show; }
	checkBOX3() { this.massValut[5].show = !this.massValut[5].show; }
	//Классы для анимации кнопки и списка доп валют
	buttonClasses = {
		content__button: true,
		activButton: false
	}
	addCurrencyClasses = {
		addCurrency: true,
		activaddCurr: true
	}
	//============================================================================
	//Функция для обработки на нажатие кнопки плюс
	buttonClick() {
		this.buttonClasses.activButton = !this.buttonClasses.activButton;
		this.addCurrencyClasses.activaddCurr = !this.addCurrencyClasses.activaddCurr;
	}
	ngOnInit() {
		setInterval(() => this.requestFunct(), 5000)
	}
	response: any;
	currencyMass = ["RUBUSD", "RUBEUR", "RUBGBP", "RUBCNY", "RUBJPY", "RUBTRY"]
	currencyPrevious = [0, 0, 0, 0, 0, 0];
	first: boolean = false
	//Функция для запроса на сервер
	requestFunct() {

		this.httpService.getData().subscribe((response) => {
			this.response = response;
			let put = this.response.quotes
			for (let i = 0; i < 6; i++) {
				for (let key in put) {
					if (key == this.currencyMass[i]) {
						this.massValut[i].Number = 1 / put[key];
						if (this.first) {
							this.massValut[i].diff = this.currencyPrevious[i] - this.massValut[i].Number;
						}
						this.currencyPrevious[i] = 1 / put[key]

					}
				}
			}
			this.first = true;
		})
		this.date = new Date()
	}
}
