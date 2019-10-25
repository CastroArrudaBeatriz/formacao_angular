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


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    ErrorsModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    PhotoService,
    PlatformDetectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
