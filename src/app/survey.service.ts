import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getViewData } from '@angular/core/src/render3/instructions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) {} 

  getdata():Observable<any>{
    return  this.http.get("http://vschemtutorials.com/getstats.php");
 }

   

}
