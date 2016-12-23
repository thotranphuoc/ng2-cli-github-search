import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class GithubService {

    // private clientId: string = '<Client Id>';
    // private clientSecret: string = '<Client Secret Key>';
    private url:string;
    private clientId: string = '60b9f23dedffbdfc476c';
    private clientSecret: string = 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a';

    constructor(private _http: Http) {
    }

    getUser(userName: string) {
        if (userName) {
            this.url = 'https://api.github.com/users/' + userName + '?client_id=' + this.clientId + '&client_secret=' + this.clientSecret
            return this._http.get(this.url)
                .map(res => res.json())  // convert json() sang object array
                .catch(this.handleError);
        }
    }

    getRepos(userName: string) {
        if (userName) {
            this.url = 'https://api.github.com/users/' + userName +'/repos'+ '?client_id=' + this.clientId + '&client_secret=' + this.clientSecret
            return this._http.get(this.url)
                .map(res => res.json())  // convert json() sang object array
                .catch(this.handleError);
        }
    }

    private handleError(error: any) {
        if (error.status === 401) {
            return Observable.throw(error.status);
        } else {
            return Observable.throw(error.status || 'Server error');
        }
    }
}