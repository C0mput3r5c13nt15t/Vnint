import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/auth/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/other/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'impressum',
    loadChildren: () => import('./pages/other/impressum/impressum.module').then(m => m.ImpressumPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/other/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/other/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'reset-password/:ResetToken',
    loadChildren: () => import('./pages/auth/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'notifications',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'account',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'create-project',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/actions/project/create-project/create-project.module').then( m => m.CreateProjectPageModule)
  },
  {
    path: 'give-feedback',
    loadChildren: () => import('./pages/actions/give-feedback/give-feedback.module').then( m => m.GiveFeedbackPageModule)
  },
  {
    path: 'verify-email',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/actions/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'manage-friends',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/actions/manage-friends/manage-friends.module').then( m => m.ManageFriendsPageModule)
  },
  {
    path: 'view-schedule',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/actions/view-schedule/view-schedule.module').then( m => m.ViewSchedulePageModule)
  },
  {
    path: 'data-use',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/other/data-use/data-use.module').then( m => m.DataUsePageModule)
  },
  {
    path: 'manage-user-roles',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/actions/admin/manage-user-roles/manage-user-roles.module').then(m => m.AdministratePageModule)
  },
  {
    path: 'manage-application-settings',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/actions/admin/manage-application-settings/manage-application-settings.module').then( m => m.ManageApplicationSettingsPageModule)
  },
  {
    path: 'view-feedback',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/actions/admin/view-feedback/view-feedback.module').then( m => m.ViewFeedbackPageModule)
  },
  {
    path: 'project/:projectId',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/actions/project/view-project/view-project.module').then( m => m.ViewProjectPageModule)
  },
  {
    path: 'view-projects',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/actions/project/view-projects/view-projects.module').then( m => m.ViewProjectsPageModule)
  },
  {
    path: 'feedback/:feedbackId',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/actions/admin/view-single-feedback/view-single-feedback.module').then( m => m.ViewSingleFeedbackPageModule)
  },
  {
    path: 'manage-project',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/actions/project/manage-project/manage-project.module').then( m => m.ManageProjectPageModule)
  },
  {
    path: 'edit-project',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/actions/project/edit-project/edit-project.module').then( m => m.EditProjectPageModule)
  },
  {
    path: 'manage-events',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/actions/admin/manage-schedule/manage-schedule.module').then( m => m.ManageSchedulePageModule)
  },
  {
    path: 'manage-friendships',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/actions/admin/manage-friendships/manage-friendships.module').then( m => m.ManageFriendshipsPageModule)
  },
  {
    path: 'manage-preferences',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/actions/manage-preferences/manage-preferences.module').then( m => m.ManagePreferencesPageModule)
  },
  {
    path: 'manage-users',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/actions/admin/manage-users/manage-users.module').then( m => m.ManageUsersPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'manage-application-settings',
    loadChildren: () => import('./pages/actions/admin/manage-application-settings/manage-application-settings.module').then( m => m.ManageApplicationSettingsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
