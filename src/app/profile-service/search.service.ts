import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  userName: string;
  repoName: string;
  apikey: string = 'f3bed2706dfe69705334dc104eb08f4c6c8d2c82'

  constructor(private http: HttpClient) {
    console.log('service is now ready');

   }

   
}
