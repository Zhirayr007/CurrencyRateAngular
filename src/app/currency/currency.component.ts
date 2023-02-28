import { Input, Component } from '@angular/core';

@Component({
	selector: 'app-currency',
	templateUrl: './currency.component.html',
	styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent {
	@Input() Name: string = '';
	@Input() Number: number = 0;
	@Input() diff: number = 0;
	@Input() show: boolean = true;

	triangFunc(n: number): object {
		if (n > 0) return { fill: 'green' };
		if (n < 0) return { fill: 'red', transform: 'rotate(180deg)' };
		else return { display: 'none' };
	}
}
