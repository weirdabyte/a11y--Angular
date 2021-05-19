import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { TextImageComponent } from './text-image/text-image.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: '', component: TextImageComponent},
  { path: 'text-image', component: TextImageComponent},
  { path: 'video', component: VideoComponent},
  { path: 'input', component: InputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routiongComponents = [TextImageComponent, VideoComponent, InputComponent]
