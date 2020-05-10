import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-fancy-dice',
    templateUrl: './fancy-dice.component.html',
    styleUrls: ['./fancy-dice.component.scss'],
})
export class FancyDiceComponent implements OnInit {
    style: string;

    private _rotationDegreeFactor = 90;
    private _multiplier = 80;

    constructor() {}

    ngOnInit(): void {
        setTimeout(() => this.getRandom(), 50);
    }

    getRandom() {
        const xRand = Math.floor(Math.random() * this._multiplier) * this._rotationDegreeFactor;
        const yRand = Math.floor(Math.random() * this._multiplier) * this._rotationDegreeFactor;
        this.style = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';
    }
}
