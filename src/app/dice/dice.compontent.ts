import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dice',
    templateUrl: 'dice.component.html',
    styleUrls: ['./dice.component.scss'],
})
export class DiceComponent {
    @Input() diceNumber: number;

    constructor() {}
}
