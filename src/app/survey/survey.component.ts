import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';

class Model {
  name: string;
  desc: string;
}
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor(private service:SurveyService) { }

  ngOnInit() {
     this.getsubs();
  }
  
  myapp1 = new Model();
  myApp = 
  [
    {name: 'Cities', description: '30%'},
    {name: 'Health', description: '80%'},
    {name: 'Manufacturing', description: '45%'},
    {name: 'Retail', description: '60%'},
    {name: 'Logistics', description: '69%'},
    {name: 'Luxury', description: '97%'},
    {name: 'Entertainement', description: '33%'},
    {name: 'Travel', description: '29%'},
    {name: 'Education', description: '69%'},
   { name: 'Business', description: '57%'}

  ]

  getsubs(){

    this.service.getdata().subscribe(res =>{
      this.myapp1 = res;
      console.log(this.myapp1);
    });
  }

}
