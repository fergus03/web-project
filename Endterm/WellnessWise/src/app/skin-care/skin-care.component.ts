import { Component,OnInit } from '@angular/core';
import {SkinType} from "../models";
import {SkinTypeService} from "../skin-type.service";


@Component({
  selector: 'app-skin-care',
  templateUrl: './skin-care.component.html',
  styleUrls: ['./skin-care.component.css']
})
export class SkinCareComponent  implements  OnInit{
  skinTypes: SkinType[] = [];

  constructor(private skinTypeService: SkinTypeService) {
  }
  ngOnInit(){
    this.skinTypeService.getSkinTypes().subscribe((skinTypes)=>{
      this.skinTypes= skinTypes
    });
  }

}
