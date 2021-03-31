import { Component, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.interface";
import { UserService } from "./user.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  userInfo;
  constructor(private userServic: UserService) {}

  ngOnInit() {
    //get user details
    this.userServic.getUsers().subscribe(responseData => {
      this.userInfo = this.sortBy(responseData);
    });
  }
  //used sort method which can be enhaced to sort any details
  sortBy(data) {
    return data.sort((a, b) => (a.address.city > b.address.city ? 1 : -1));
  }

  search(searchInput) {
    this.userInfo = this.userInfo.filter(user => {
      return (
        user.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
        user.email.toLowerCase().includes(searchInput.value.toLowerCase()) ||
        user.address.city
          .toLowerCase()
          .includes(searchInput.value.toLowerCase()) ||
        user.company.name
          .toLowerCase()
          .includes(searchInput.value.toLowerCase())
      );
    });
  }
}
