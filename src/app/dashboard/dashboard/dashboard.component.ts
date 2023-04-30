import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, users } from 'users';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  user: User | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // First get the product id from the current route.
    // const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = String(routeParams.get('username'));

    // // Find the product that correspond with the id provided in route.
    // this.user = users.find(user => user.username === productIdFromRoute);
  }
}
