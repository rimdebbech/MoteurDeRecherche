import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'adz-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  constructor(private router: Router ) {}

  clef: string;
  formGroup = new FormGroup({
    clef : new FormControl('')
  });

  ngOnInit() {
  }

  getBooks() {
    this.router.navigate(['resultat', this.formGroup.value.clef]);

  }


}
