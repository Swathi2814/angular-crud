import 'zone.js/dist/zone';
import { Component, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from './app/environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: ``,
})
export class App {
  name = 'Angular';
}


if (environment.production) {
  enableProdMode();
} // Call this function to enable production mode

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
