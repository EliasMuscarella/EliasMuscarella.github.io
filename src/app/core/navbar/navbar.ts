import { Component } from '@angular/core';
import { navOptions, navSocials } from './navData';
import { RouterLink } from '@angular/router';


@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  navData = navOptions;
  navSocials = navSocials;
}
