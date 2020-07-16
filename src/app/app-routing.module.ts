import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'modal1',
    loadChildren: () => import('./modals/modal1/modal1.module').then( m => m.Modal1PageModule)
  },
  {
    path: 'modal2',
    loadChildren: () => import('./modals/modal2/modal2.module').then( m => m.Modal2PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
