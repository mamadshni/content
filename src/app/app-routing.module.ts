import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./main/main.component";
import {Page} from "./model/routes.model";

const routes: Routes = [
  {
    path: `${Page.Main.valueOf()}`,
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: `${Page.News.valueOf()}`,
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  },
  {
    path: `${Page.People.valueOf()}`,
    loadChildren: () => import('./people/people.module').then((m) => m.PeopleModule),
  },
  {
    path: '**',
    redirectTo: `${Page.Main.valueOf()}`
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
