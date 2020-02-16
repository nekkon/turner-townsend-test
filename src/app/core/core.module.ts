import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '@core/components/navigation/navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [],
  exports: [NavigationComponent]
})
export class CoreModule {}
