import {Component, OnInit, Inject, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import { Book } from '../model/book.model';

import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ExampleDialogComponent } from '../example-dialog/example-dialog.component';
import {MatPaginatorModule} from '@angular/material/paginator';

export interface DialogData {
  title: string;
  // image: string;
  // category: string;
  // author: string[];
  // description: string;

}

@Component({
  selector: 'adz-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})

export class ResultatComponent implements OnInit {

  private url = 'https://www.googleapis.com/books/v1/volumes?q=';
  clef;
  dataBooks: any ;

  selectedValue: string;

  constructor(private http: HttpClient,
              private route: Router,
              private activatedRoute: ActivatedRoute,
              public dialog: MatDialog ) { }

  ngOnInit() {
    this.clef = this.activatedRoute.snapshot.params.clef;
    this.http.get(this.url + this.clef).subscribe(data => {
      this.dataBooks = data;
      console.log(this.dataBooks.items[0].volumeInfo.authors);
    });
  }

  apiFunction() {
    this.clef = this.activatedRoute.snapshot.params.clef;
    this.http.get(this.url + this.clef).subscribe(data => {
      this.dataBooks = data;
      console.log(this.dataBooks.items[0].volumeInfo.authors);
    });
  }
  /*
  getNext(event: PageEvent) {
    offset = event.pageSize * event.pageIndex
    // call your api function here with the offset
  }*/

  popUpDetails(book): void {
    const dialogRef = this.dialog.open(ExampleDialogComponent, {
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
