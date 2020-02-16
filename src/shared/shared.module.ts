import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from 'src/shared/components/containers/navigation/navigation.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [],
  exports: [NavigationComponent]
})
export class SharedModule {}
