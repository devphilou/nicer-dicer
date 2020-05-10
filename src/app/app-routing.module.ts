import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EntryComponent } from './entry.component';
import { NgModule } from '@angular/core';
import { ShakerComponent } from './shaker/shaker.component';

const routes: Routes = [
    {
        path: 'entry',
        component: EntryComponent,
    },
    {
        path: 'shaker',
        component: ShakerComponent,
    },
    {
        path: '**',
        redirectTo: 'entry',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
