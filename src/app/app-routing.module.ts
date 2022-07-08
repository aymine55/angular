import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { GuardadminGuard } from './views/guards/guardadmin.guard';
import { GuardcandidatGuard } from './views/guards/guardcandidat.guard';
import { NoguardcandidatGuard } from './views/guards/noguardcandidat.guard';

const routes: Routes = [
   {path:'' , component:FrontLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'home',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'contact',loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)},
    {path:'job',loadChildren:()=>import('./views/front/jobs/jobs.module').then(m=>m.JobsModule)},
    {path:'details/:id',loadChildren:()=>import('./views/front/details/details.module').then(m=>m.DetailsModule)},
    {path:'apply',loadChildren:()=>import('./views/front/formulaire/formulaire.module').then(m=>m.FormulaireModule),canActivateChild:[GuardcandidatGuard]},
    {path:'Candidat-Profil',loadChildren:()=>import('./views/front/description/description.module').then(m=>m.DescriptionModule),canActivateChild:[GuardcandidatGuard]},



    {path:'news',loadChildren:()=>import('./views/front/navbar/navbar.module').then(m=>m.NavbarModule)},

    {path:'login',loadChildren:()=>import('./views/front/login/login.module').then(m=>m.LoginModule),canActivateChild:[NoguardcandidatGuard]},
    {path:'register',loadChildren:()=>import('./views/front/register/register.module').then(m=>m.RegisterModule),canActivateChild:[NoguardcandidatGuard]}
  ]},
  {path:'admin' , component:AdminLayoutComponent,canActivate:[GuardadminGuard],children:[
        {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
        {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
        {path:'add-category',loadChildren:()=>import('./views/admin/add-category/add-category.module').then(m=>m.AddCategoryModule)},
        {path:'candidates',loadChildren:()=>import('./views/admin/candidats/candidats.module').then(m=>m.CandidatsModule)},
        {path:'add-news',loadChildren:()=>import('./views/admin/add-news/add-news.module').then(m=>m.AddNewsModule)},
        {path:'add-offer',loadChildren:()=>import('./views/admin/addoffer/addoffer.module').then(m=>m.AddofferModule)},
        {path:'categoriesz',loadChildren:()=>import('./views/admin/categories/categories.module').then(m=>m.CategoriesModule)},
        {path:'news',loadChildren:()=>import('./views/admin/news/news.module').then(m=>m.NewsModule)},
        {path:'offers',loadChildren:()=>import('./views/admin/offers/offers.module').then(m=>m.OffersModule)},
        {path:'requests',loadChildren:()=>import('./views/admin/requests/requests.module').then(m=>m.RequestsModule)},



  ]},
  {path:'admin/login' , component:AuthAdminLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
