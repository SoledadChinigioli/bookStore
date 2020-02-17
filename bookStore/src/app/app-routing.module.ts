import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { OffersComponent } from 'src/app/component/offers/offers.component';
import { DetailsBookComponent } from './component/details-book/details-book.component';
import { ListBooksComponent } from './component/admin/list-books/list-books.component';
import { LoginComponent } from 'src/app/component/users/login/login.component';
import { RegisterComponent } from 'src/app/component/users/register/register.component';
import { ProfileComponent } from 'src/app/component/users/profile/profile.component';
import { Page404Component } from './component/page404/page404.component';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offers', component: OffersComponent, canActivate: [AuthGuard] }, //Guard permite que solo los usuarios modifiquen esta sección
  { path: 'book/:id', component: DetailsBookComponent },
  { path: 'admin/list-books', component: ListBooksComponent, canActivate: [AuthGuard] },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }