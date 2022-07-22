import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'people',
    loadChildren: () => import('./people/people.module').then((m) => m.PeopleModule),
  },
  {path: '**', redirectTo: '/main'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false,
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
