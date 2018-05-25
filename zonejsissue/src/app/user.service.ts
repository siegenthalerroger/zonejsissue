import { Injectable } from '@angular/core';
import { ApService } from './ap.service';
import { Observable } from 'rxjs';
import { User } from './user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private ap: ApService) {

    }

    public getCurrentUser = (): Observable<User> => {
      return this.ap.get<User>('/rest/api/2/myself').pipe(
          map(user => {
              user.workingHours = 8;  // TODO temporary until backend supplies personalised working hours
              return user;
          })
      );
    }
}