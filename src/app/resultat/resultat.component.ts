import {Component, OnInit, Inject, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';

import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'adz-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})

export class ResultatComponent implements OnInit {

  private url = 'https://www.googleapis.com/books/v1/volumes?q=';
  clef;
  dataBooks: any ;

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25];

  pageEvent: PageEvent;

  constructor(private http: HttpClient,
              private route: Router,
              private activatedRoute: ActivatedRoute,
              public dialog: MatDialog ) { }

  ngOnInit() {
    this.clef = this.activatedRoute.snapshot.params.clef;
    this.http.get(this.url + this.clef + '&maxResults=' + this.pageSize).subscribe(data => {
      this.dataBooks = data;
      this.length = this.dataBooks.totalItems;
    });
  }

  apiFunction(ps, pi) {
    this.clef = this.activatedRoute.snapshot.params.clef;
    this.http.get(this.url + this.clef + '&maxResults=' + ps + '&startIndex=' + ps * pi).subscribe(data => {
      this.dataBooks = data;
    });
  }

  getNext(event: PageEvent) {
    this.apiFunction(event.pageSize , event.pageIndex);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  popUpDetails(book): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      maxHeight: '80%',
      maxWidth: '80%',
      data: {
        title: book.volumeInfo.title ,
        image: book.volumeInfo.imageLinks.thumbnail,
        category: book.volumeInfo.category,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        previewLink : book.volumeInfo.previewLink
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
