import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';

import { AuthGuard } from './auth/auth-guard'
import { TrainingService } from './training/training.service';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'training', loadChildren: () => import('./training/training.module').then(m => m.TrainingModule), canLoad: [AuthGuard] }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class AppRoutingModule {

}