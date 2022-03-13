import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyToDoComponent } from './my-to-do/my-to-do.component';

const routes: Routes = [
  { path: '', component: MyToDoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
