import { Component, OnInit } from '@angular/core';
import { DATA } from '../../../data';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  public basicInfo: any = DATA.personal_info;
  public basic_info_1: any[] = [
  ]
  public basic_info_2: any[] = [
  ]

  private monthNames: string[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  public getMonthName(month:number): string {
    return this.monthNames[month];
  }

  private getBirthDate(): string{
    const birth_date = this.basicInfo.birth_date;
    const birthDate = new Date(birth_date);
    const year = birthDate.getFullYear();
    const month = birthDate.toDateString().slice(4,7);
    const day = String(Number(birthDate.toDateString().slice(8, 10)));
    return month + " " + day + ", " + year;
    // return birthDate.toDateString().slice(4,);
  }

  private getAge(): number{
    const birthDate = new Date(this.basicInfo.birth_date);
    const now = new Date();
    const age = now.getFullYear() - birthDate.getFullYear();
    return age;
  }

  private fillData(): null{
    this.basic_info_1.push({"key": "Birthday", "value": this.getBirthDate()});
    this.basic_info_1.push({"key": "Website", "value": this.basicInfo.website});
    this.basic_info_1.push({"key": "Phone", "value": this.basicInfo.phone});
    this.basic_info_1.push({"key": "City", "value": this.basicInfo.city.title +", " + this.basicInfo.city.country.title});
    this.basic_info_2.push({"key": "Age", "value": this.getAge()});
    this.basic_info_2.push({"key": "Degree", "value": this.basicInfo.highest_degree});
    this.basic_info_2.push({"key": "Email", "value": this.basicInfo.primary_email});
    this.basic_info_2.push({"key": "Open to job", "value": this.basicInfo.open_to_job});
    return null;
  }

  constructor() { }

  ngOnInit(): void {
    this.fillData();
  }

}
