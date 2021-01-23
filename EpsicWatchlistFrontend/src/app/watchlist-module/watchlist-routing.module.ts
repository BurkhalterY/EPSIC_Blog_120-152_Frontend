import { AuthGuard } from './guard/auth.guard';
import { WatchlistComponent } from './component/watchlist/watchlist.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { MyListComponent } from './component/my-list/my-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'watchlist',
    canActivate: [AuthGuard],
    component: WatchlistComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'search', component: SearchComponent },
      { path: 'my-list', component: MyListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WatchlistRoutingModule { }
