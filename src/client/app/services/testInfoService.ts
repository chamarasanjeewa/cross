import { Http,Response,Headers,RequestOptions,RequestMethod,Request  } from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class TestInfoService{
    
    constructor(private http:Http){
        
    }

    getTestRecordsFromJson(): Observable<any>{
              return this.http.get("./app/testRecords.json")
                         .map((res:any) => res.json());
                        
    }
    
}