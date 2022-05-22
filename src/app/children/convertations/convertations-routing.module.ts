import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterComponent } from './pages/converter/converter.component';

const routes: Routes = [
  { 
    path: '',
    component : ConverterComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvertationsRoutingModule { }
