import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserInfo } from "./user-info.interface";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

// get user info from api
  getUsers(): Observable<UserInfo> {
    //used http client method
    return this.http.get<UserInfo>("https://jsonplaceholder.typicode.com/users");
  }
}
