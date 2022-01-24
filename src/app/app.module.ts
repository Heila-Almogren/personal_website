import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

import {ThemeSwitchComponent} from './theme-switch/theme-switch.component';
import {MainBarComponent} from './main-bar/main-bar.component';
import {MainDescriptionComponent} from './main-description/main-description.component';
import {MadeWithLoveComponent} from './made-with-love/made-with-love.component';
import {ResumePageComponent} from './resume-page/resume-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AppRoutingModule} from './app-routing.module';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutPageComponent } from './about-page/about-page.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { MobileMainBarComponent } from './mobile-main-bar/mobile-main-bar.component';
import { NameComponent } from './name/name.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    ThemeSwitchComponent,
    MainBarComponent,
    MainDescriptionComponent,
    MadeWithLoveComponent,
    ResumePageComponent,
    HomePageComponent,
    ProjectsPageComponent,
    AboutPageComponent,
    UnderConstructionComponent,
    MobileMainBarComponent,
    NameComponent,
    MobileMenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {
}
