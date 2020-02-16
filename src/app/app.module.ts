import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from 'src/shared/components/containers/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
