import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/shared/models/animal.model';

@Component({
  selector: 'app-exotic',
  templateUrl: './exotic.component.html',
  styleUrls: ['./exotic.component.css']
})
export class ExoticComponent implements OnInit {
  exotic: Animal[]= [
    new Animal("Batman",3,"tuxedo","medium haired",""),
    new Animal("Batman",3,"tuxedo","medium haired",""),
    new Animal("Batman",3,"tuxedo","medium haired",""),
    new Animal("Batman",3,"tuxedo","medium haired","")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
