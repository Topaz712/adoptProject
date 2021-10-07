import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/shared/models/animal.model';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  cats: Animal[] = [
    new Animal("Mimi",2,"tuxedo","medium haired",""),
    new Animal("Mojo",3,"shy","medium haired",""),
    new Animal("Barthalomew",1,"sassy","hairless",""),
    new Animal("Vlad",5,"playful","long haired","")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
