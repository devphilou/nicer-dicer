import { CommonModule } from '@angular/common';
import { CupComponent } from './cup/cup.component';
import { DiceComponent } from './dice/dice.compontent';
import { FancyDiceComponent } from './fancy-dice/fancy-dice.component';
import { NgModule } from '@angular/core';
import { ShakerComponent } from './shaker.component';

@NgModule({
    imports: [CommonModule],
    exports: [ShakerComponent],
    declarations: [ShakerComponent, DiceComponent, CupComponent, FancyDiceComponent],
    providers: [],
})
export class ShakerModule {}
