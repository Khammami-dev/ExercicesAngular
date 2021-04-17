import { Component, OnInit } from '@angular/core';
import {CvService} from "../services/cv.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Cv} from "../model/cv";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css']
})
export class DetailsCvComponent implements OnInit {
  cv: Cv;
  constructor(
    private  cvService: CvService,
    private  activatedRoute: ActivatedRoute,
    private  router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.cv =   this.cvService.getCvById(params.id);
        console.log(this.cv);
      }
    );
  }
  deleteCv(){
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
         this.cvService.deletCv(params.id);

      }
    );
    this.router.navigate(['cv']);
  }

}
