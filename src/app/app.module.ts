import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { KSLLiveFeed } from './ksl-live-feed-component/ksl-live-feed-component.component';
import { KSLFeedService }   from './ksl-feed-service.service';
import { KslCategoryDropdownComponentComponent } from './ksl-category-dropdown-component/ksl-category-dropdown-component.component';
import { HeaderNavigationComponent } from './header-navigation-component/header-navigation-component.component';
import { DashboardComponent} from './dashboard-component/dashboard-component.component';
import { BarleyFishComponent } from './barley-fish-component/barley-fish-component.component';
import { CommentsReportComponent } from './comments-report-component/comments-report-component.component'


@NgModule({
  declarations: [
    AppComponent,
    KSLLiveFeed,
    KslCategoryDropdownComponentComponent,
    HeaderNavigationComponent,
    DashboardComponent,
    BarleyFishComponent,
    CommentsReportComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: AppComponent},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'barleyFish', component: BarleyFishComponent},
      { path: 'commentsReport', component: CommentsReportComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [KSLFeedService],
  bootstrap: [HeaderNavigationComponent]
})
export class AppModule { }
