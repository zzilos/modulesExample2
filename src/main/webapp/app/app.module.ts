import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ModulesExample2SharedModule } from 'app/shared/shared.module';
import { ModulesExample2CoreModule } from 'app/core/core.module';
import { ModulesExample2AppRoutingModule } from './app-routing.module';
import { ModulesExample2HomeModule } from './home/home.module';
import { ModulesExample2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ModulesExample2SharedModule,
    ModulesExample2CoreModule,
    ModulesExample2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ModulesExample2EntityModule,
    ModulesExample2AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class ModulesExample2AppModule {}
