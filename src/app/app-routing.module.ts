import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {ResumePageComponent} from "./resume-page/resume-page.component";
import {ProjectsPageComponent} from "./projects-page/projects-page.component";
import {AboutPageComponent} from "./about-page/about-page.component";
import {MobileMenuComponent} from "./mobile-menu/mobile-menu.component";


const routes: Routes = [
  {path: "", component: HomePageComponent,
    data: {animation: 'home'} },
  {path: "resume", component: ResumePageComponent,
  data: {animation: 'resume'}},
  {path: "projects", component: ProjectsPageComponent,
  data: {animation: 'projects'} },
  {path: "about", component: AboutPageComponent,
  data: {animation: 'about'} },
  {path: "mobileMenu", component: MobileMenuComponent,
  data: {animation: 'mobileMenu'} },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule { }
