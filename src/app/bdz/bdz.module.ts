import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListDBZComponent } from './components/list-dbz/list-dbz.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [MainPageComponent, ListDBZComponent, CreateCharacterComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class BdzModule { }
