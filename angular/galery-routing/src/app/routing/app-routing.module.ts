import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ImagesComponent } from '../images/images.component';
import { SettingsComponent } from '../settings/settings.component';




const arr: Routes = [

{path: '', redirectTo: '/images', pathMatch: 'full'},
{path: 'images', component: ImagesComponent},
{path: 'images/:index', component: ImagesComponent},
{path: 'images/:index/delete', component: ImagesComponent},
 {path: 'settings', component: SettingsComponent},
 {path: 'about', component: AboutComponent},
 {path: '**', redirectTo: '/images', pathMatch: 'full'},
// {path:'products', component: ProductListComponent },

// {path:'addproduct/:id', component: ProductAddComponent }

];



export const routing = RouterModule.forRoot(arr);