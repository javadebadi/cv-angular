import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills: any[] = [
    {
      "title": "Python",
      "score": 100,
      "max_value": 100,
      "min_value": 0
    },
    {
      "title": "Javascript",
      "score": 40,
      "max_value": 100,
      "min_value": 0
    },
    {
      "title": "Django",
      "score": 80,
      "max_value": 100,
      "min_value": 0
    },
    {
      "title": "SQL",
      "score": 100,
      "max_value": 100,
      "min_value": 0
    },
    {
      "title": "C++",
      "score": 70,
      "max_value": 100,
      "min_value": 0
    },
    {
      "title": "HTML",
      "score": 80,
      "max_value": 100,
      "min_value": 0
    },
    {
      "title": "Git & Github",
      "score": 80,
      "max_value": 100,
      "min_value": 0
    },
    {
      "title": "Machine Learning",
      "score": 80,
      "max_value": 100,
      "min_value": 0
    },
    {
      "title": "Linear Algebra",
      "score": 100,
      "max_value": 100,
      "min_value": 0
    },
    {
      "title": "Statistics",
      "score": 80,
      "max_value": 100,
      "min_value": 0
    },
    {
      "title": "Data Science",
      "score": 80,
      "max_value": 100,
      "min_value": 0
    },
    {
      "title": "Research",
      "score": 100,
      "max_value": 100,
      "min_value": 0
    },
  ]

  public skills1: any[] = [];
  public skills2: any[] = [];

  constructor() { }

  ngOnInit(): void {
    const length = this.skills.length;
    let firstIndex:number = 0;
    if (length > 0){
      if (length % 2 == 0) {
        firstIndex = length/2;
      }
      else{
        firstIndex = Math.floor(length/2) + 1;
      }
    }
    this.skills1 = this.skills.slice(0, firstIndex);
    if (firstIndex != length){
      this.skills2 = this.skills.slice(firstIndex, length);
    }
  }
}
