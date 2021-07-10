import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  public educations: any[] = [
    {
      "title": "Master of Physics - Gravity",
      "start_year": 2013,
      "end_year": 2015,
      "university":{
        "title": "Sharif University of Technology",
        "city": {
          "title": "Tehran",
          "country": {
            "title": "Iran"
          }
        }
      },
      "description": "I did something awesome ..."
    },
    {
      "title": "Bachelor of Physics",
      "start_year": 2007,
      "end_year": 2013,
      "university":{
        "title": "Amirkabir University of Technology",
        "city": {
          "title": "Tehran",
          "country": {
            "title": "Iran"
          }
        }
      },
      "description": "I did something awesome ..."
    }
  ];

  public experiences: any[] = [
    {
      "title": "Junior Python Developer and Data Scientist",
      "start_year": 2021,
      "end_year": 2022,
      "company": {
        "title": "Middle East Bank",
        "city": {
          "title": "Tehran",
          "country": {
            "title": "Iran"
          }
        }
      }
    }
  ]

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }
}
