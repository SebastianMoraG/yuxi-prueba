import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListService {
    
    private readonly _url = "https://jsonplaceholder.typicode.com/posts/";
    
    constructor(private _http: HttpClient) { }

    getList(){
        return this._http.get(this._url);
    }

}