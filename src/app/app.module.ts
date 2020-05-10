import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { EntryComponent } from './entry.component';
import { NgModule } from '@angular/core';
import { ShakerModule } from './shaker/shaker.module';

@NgModule({
    declarations: [
        AppComponent, 
        EntryComponent
    ],
    imports: [
        BrowserModule, 
        AppRoutingModule, 
        ShakerModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
