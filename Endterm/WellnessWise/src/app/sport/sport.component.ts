import {Component, OnInit} from '@angular/core';
import {SportVideo} from "../models";
import {ActivatedRoute} from "@angular/router";
import {SportVideoService} from "../sportvideo.service";

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit{
  sportVideos :SportVideo[] = [];

  constructor(private  route :ActivatedRoute,private sportVideoService: SportVideoService) {
  }
  ngOnInit() {
    this.sportVideoService.getSportVideos().subscribe((sportVideos) => {
      this.sportVideos = sportVideos;
    });
  }
}
