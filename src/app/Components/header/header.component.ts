import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../shared/service/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['main']);
  }
}
