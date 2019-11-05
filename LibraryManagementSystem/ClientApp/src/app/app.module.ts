import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookService } from './services/book.service';
import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentService } from './services/student.service';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { BookIssueService } from './services/book-issue.service';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    BookCreateComponent,
    BookListComponent,
    BookEditComponent,
    StudentCreateComponent,
    BookIssueComponent,
    BookSearchComponent,
    BookDeleteComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'book-create', component: BookCreateComponent },
      { path: 'book-search', component: BookSearchComponent },
      { path: 'book-list', component: BookListComponent },
      { path: 'book-edit/:id', component: BookEditComponent },
      { path: 'book-delete/:id', component: BookDeleteComponent },
      { path: 'student-create', component: StudentCreateComponent },
      { path: 'book-issue', component: BookIssueComponent },
    ])
  ],
  providers: [
    BookService, StudentService, BookIssueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
