import {Injectable} from '@angular/core';
import {AP} from "./ap";
import {Observable, from} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class ApService {

  private AP: AP;

  constructor() {
    // tslint:disable-next-line:no-any
    document.addEventListener('DOMContentLoaded', () => this.AP = <AP>(<any>window).AP);
  }

  /**
   * Makes a request to the atlassian host product authenticated as the logged in user.
   * see: Atlassian REST documentation: https://developer.atlassian.com/cloud/jira/platform/rest/
   * @param {string} url of the API endpoint
   * @returns {Observable<T>}
   */
  public get<T>(url: string): Observable<T> {
    let requestPromise = this.AP.request(url);
    return from(requestPromise).pipe(
        map(response => JSON.parse(response.body) as T)
    );
  }

}
