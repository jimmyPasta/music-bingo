import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminService } from './admin.service';
import { AdminComponent } from './admin.component';
import { CategoriesModule } from '../categories/categories.module';
import { ClipsModule } from '../clips/clips.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    NgbAccordionModule,
    AdminRoutingModule,
    CategoriesModule,
    ClipsModule
  ],
  providers: [AdminService]
})
export class AdminModule { }
