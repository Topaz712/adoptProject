import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/shared/models/animal.model';



@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: Animal[] = [
    new Animal("Batman",3,"tuxedo","medium haired",""),
    new Animal("Kirby",3 + " months","tuxedo","medium haired",""),
    new Animal("Cheeto",6,"tuxedo","medium haired",""),
    new Animal("Balto",2,"tuxedo","medium haired","")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
