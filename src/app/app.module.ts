import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { BdzModule } from './bdz/bdz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesModule, CounterModule, BdzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
