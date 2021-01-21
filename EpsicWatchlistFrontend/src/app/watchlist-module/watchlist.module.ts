import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WatchlistRoutingModule } from './watchlist-routing.module';
import { MovieItemComponent } from './component/movie-item/movie-item.component';
import { SearchComponent } from './component/search/search.component';
import { WatchlistComponent } from './component/watchlist/watchlist.component';
import { HomeComponent } from './component/home/home.component';
import { MyListComponent } from './component/my-list/my-list.component';

@NgModule({
  declarations: [MovieItemComponent, SearchComponent, WatchlistComponent, HomeComponent, MyListComponent],
  exports: [
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    WatchlistRoutingModule
  ]
})
export class WatchlistModule { }
