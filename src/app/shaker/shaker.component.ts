import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-shaker',
    templateUrl: './shaker.component.html',
    styleUrls: ['./shaker.component.scss'],
})
export class ShakerComponent implements OnInit, OnDestroy {
    @ViewChild('shakeButton') shakeButton: ElementRef;
    @ViewChild('resetButton') resetButton: ElementRef;

    dice = 1;
    dices = [];
    shakeDices = false;

    private _numberOfDices = 5;

    constructor() {}

    ngOnInit(): void {}

    ngOnDestroy(): void {}

    shake(): void {
        this.shakeDices = true;
        setTimeout(() => {
            this.shakeDices = false;
            this._generateDices();
        }, 1000);
    }

    reset(): void {
        this.dices = [];
    }

    private _generateDices(): void {
        this.dices = [];
        for (let i = 0; i < this._numberOfDices; i++) {
            this.dices.push(this._getRandomDice());
        }
    }

    private _getRandomDice(): number {
        return Math.floor(Math.random() * 6) + 1;
    }
}
