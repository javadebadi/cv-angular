import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  public interests:any[] = [
    {
      "title": "Programming",
      "icon": "ri-window-fill",
      "color": "#ffbb2c"
    },
    {
      "title": "Data science",
      "icon": "ri-bar-chart-box-line",
      "color": "#e361ff"
    },
    {
      "title": "Database",
      "icon": "ri-database-2-line",
      "color": "#47aeff"
    },
    {
      "title": "Finance",
      "icon": "ri-bank-line",
      "color": "#5578ff"
    },
    {
      "title": "Quant",
      "icon": "ri-stock-line",
      "color": "#e80368"
    },
    {
      "title": "Linux",
      "icon": "ri-terminal-box-line",
      "color": "#ffa76e"
    },
    {
      "title": "Collaboration",
      "icon": "ri-git-pull-request-line",
      "color": "#11dbcf"
    },
    {
      "title": "Reading",
      "icon": "ri-book-line",
      "color": "#4233ff"
    },
    {
      "title": "Writing",
      "icon": "ri-article-line",
      "color": "#b2904f"
    },
    {
      "title": "Mathematics",
      "icon": "ri-functions",
      "color": "#b20969"
    },
    {
      "title": "Driving",
      "icon": "ri-car-line",
      "color": "#ff5828"
    },
    {
      "title": "Walking",
      "icon": "ri-walk-line",
      "color": "#29cc61"
    },


  ]
  public colors: any[] = [
    {
      "color": "#ffbb2c;"
    }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
