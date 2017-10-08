

import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../Shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {RecipeService} from '../services/recipe.service';
import {DataStorageService} from '../Shared/data-storage.service';
import {AuthService} from '../auth/auth.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../Shared/auth.interceptor';
import {LoggingInterceptor} from '../Shared/logging.interceptor';
import {StoreModule} from '@ngrx/store';
import { reducers } from '../store/app.reducers';

@NgModule({
  declarations : [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers)
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [ RecipeService,
    DataStorageService, AuthService,  // interceptors work from top to bottom
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}],
})
export class CoreModule {}
