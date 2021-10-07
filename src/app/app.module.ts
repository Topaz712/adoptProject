import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './about/contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimalsComponent } from './animals/animals.component';
import { ProfileComponent } from './profile/profile.component';
import { CatsComponent } from './animals/cats/cats.component';
import { DogsComponent } from './animals/dogs/dogs.component';
import { ExoticComponent } from './animals/exotic/exotic.component';
import { AnimalListComponent } from './shared/animal-list/animal-list.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavbarComponent,
    AnimalsComponent,
    ProfileComponent,
    CatsComponent,
    DogsComponent,
    ExoticComponent,
    AnimalListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
