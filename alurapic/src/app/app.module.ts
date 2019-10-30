import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';
import { PhotoService } from './photos/photo/photo.service';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';
import { AuthService } from './core/auth/auth.service';
import { PlatformDetectorService } from './core/platform-detector/platform-detector.service';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    ErrorsModule,
    HomeModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    AuthService,
    PhotoService,
    PlatformDetectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
