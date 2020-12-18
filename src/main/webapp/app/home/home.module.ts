import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulesExample2SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [ModulesExample2SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class ModulesExample2HomeModule {}
