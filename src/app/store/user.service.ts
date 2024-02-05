import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { User } from "./user.state";
import { Observable, retry } from "rxjs";


@Injectable()
export class UserService {
    path = 'http://localhost:3000/user';
    http = inject(HttpClient);

    addUser(user: User): Observable<any> {
        return this.http.post<User>(this.path, user).pipe(retry(3));
    }
}