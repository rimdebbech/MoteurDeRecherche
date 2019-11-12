import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RechercheComponent } from './recherche/recherche.component';
import { ResultatComponent } from './resultat/resultat.component';

const routes: Routes = [
  {path: '',   redirectTo: '/recherche', pathMatch: 'full' },
  {path: 'recherche', component: RechercheComponent},
  {path: 'resultat/:clef', component: ResultatComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
