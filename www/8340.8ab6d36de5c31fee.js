"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8340],{8340:(U,m,o)=>{o.r(m),o.d(m,{ResetPasswordPageModule:()=>I});var u=o(6019),i=o(9133),g=o(4522),a=o(6990),c=o(6431),p=o(6952),e=o(3245),h=o(6898),P=o(5729),f=o(2677),Z=o(6733),v=o(1516),w=o(1750),T=o(3829);function R(s,n){if(1&s&&(e.TgZ(0,"ion-button",14),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&s){const r=e.oxw();e.Q6J("disabled",r.resetPasswordForm.invalid||r.isProcessed),e.xp6(1),e.Oqu(e.lcZ(2,2,"RESET_PASSWORD.INPUT.resetButton"))}}function A(s,n){if(1&s&&(e.TgZ(0,"ion-button",14),e._UZ(1,"ion-spinner",15),e.qZA()),2&s){const r=e.oxw();e.Q6J("disabled",r.resetPasswordForm.invalid||r.isProcessed)}}const x=[{path:"",component:(()=>{class s{constructor(r,t,d,l,F,E,N){this.formBuilder=r,this.activatedRoute=t,this.auth=d,this.router=l,this.errorService=F,this.translate=E,this.alert=N,this.isProcessed=!1}ngOnInit(){this.resetPasswordForm=this.formBuilder.group({email:["",i.kI.required],password:["",i.kI.required],password_confirmation:["",i.kI.required],token:["",i.kI.required],fax:[""]})}ionViewWillEnter(){this.isProcessed=!1,this.auth.authenticated().subscribe({error:r=>{this.errorService.errorOccurred.emit(r)},next:r=>{1==r.authenticated&&(this.auth.setLoggedIn=!0,this.router.navigate(["/dashboard"]))}}),this.activatedRoute.paramMap.subscribe(r=>{r.has("ResetToken")?this.resetPasswordForm.patchValue({token:this.activatedRoute.snapshot.paramMap.get("ResetToken")}):this.router.navigate(["/login"])})}get errorControl(){return this.resetPasswordForm.controls}keyPressEventHandler(r){"Enter"==r&&!this.isProcessed&&this.resetPassword()}resetPassword(){if(!this.isProcessed&&!this.resetPasswordForm.value.fax&&this.resetPasswordForm.valid){if(this.isProcessed=!0,!this.resetPasswordForm.valid)return!1;this.auth.resetPassword(this.resetPasswordForm.value).subscribe({error:r=>{if("The given data was invalid."==r.error.message)for(const t in r.error.errors){let d=[];for(const l in r.error.errors[t])d.push({[r.error.errors[t][l]]:!0});this.resetPasswordForm.controls[t].setErrors(d)}else this.errorService.errorOccurred.emit(r);this.isProcessed=!1},next:r=>{let t=r;this.alert.alert("success",this.translate.instant("RESET_PASSWORD.title"),t.message,"checkmark")},complete:()=>{this.resetPasswordForm.reset(),this.auth.setLoggedIn=!1,this.auth.setSessionExpired=!1,this.isProcessed=!1,this.router.navigate(["/login"])}})}}}return s.\u0275fac=function(r){return new(r||s)(e.Y36(i.qu),e.Y36(p.gz),e.Y36(h.e),e.Y36(p.F0),e.Y36(P.T),e.Y36(c.sK),e.Y36(f.c))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-reset-password"]],decls:30,vars:18,consts:[[1,"reset-password-grid"],[3,"title"],["color","light"],[1,"inside-card-grid"],["novalidate","",3,"formGroup","ngSubmit"],["type","email","name","email","formControlName","email",3,"placeholder"],[3,"errors"],["color","light","lines","full"],["formControlName","password","type","password",3,"placeholder"],["formControlName","password_confirmation","type","password",3,"placeholder","keypress"],["formControlName","fax",1,"invisible"],[1,"ion-padding"],["type","submit","class","ion-no-margin","expand","block","color","primary",3,"disabled",4,"ngIf"],[1,"fixed-footer"],["type","submit","expand","block","color","primary",1,"ion-no-margin",3,"disabled"],["name","crescent"]],template:function(r,t){1&r&&(e.TgZ(0,"ion-content"),e._UZ(1,"app-toolbar"),e.TgZ(2,"ion-grid",0),e.TgZ(3,"ion-row"),e.TgZ(4,"ion-col"),e._UZ(5,"app-card-title-bar",1),e.ALo(6,"translate"),e.TgZ(7,"ion-card",2),e.TgZ(8,"ion-card-content"),e.TgZ(9,"ion-grid",3),e.TgZ(10,"ion-row"),e.TgZ(11,"ion-col"),e.TgZ(12,"form",4),e.NdJ("ngSubmit",function(){return t.resetPassword()}),e.TgZ(13,"ion-item",2),e._UZ(14,"ion-input",5),e.ALo(15,"translate"),e.qZA(),e._UZ(16,"app-form-error",6),e.TgZ(17,"ion-item",7),e._UZ(18,"ion-input",8),e.ALo(19,"translate"),e.qZA(),e._UZ(20,"app-form-error",6),e.TgZ(21,"ion-item",7),e.TgZ(22,"ion-input",9),e.NdJ("keypress",function(l){return t.keyPressEventHandler(l.key)}),e.ALo(23,"translate"),e.qZA(),e.qZA(),e._UZ(24,"app-form-error",6),e._UZ(25,"ion-checkbox",10),e.TgZ(26,"div",11),e.YNc(27,R,3,4,"ion-button",12),e.YNc(28,A,2,1,"ion-button",12),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(29,"app-footer",13),e.qZA()),2&r&&(e.xp6(5),e.s9C("title",e.lcZ(6,10,"RESET_PASSWORD.title")),e.xp6(7),e.Q6J("formGroup",t.resetPasswordForm),e.xp6(2),e.s9C("placeholder",e.lcZ(15,12,"LOGIN.INPUT.email")),e.xp6(2),e.Q6J("errors",t.errorControl.email.errors),e.xp6(2),e.s9C("placeholder",e.lcZ(19,14,"REGISTER.INPUT.password")),e.xp6(2),e.Q6J("errors",t.errorControl.password.errors),e.xp6(2),e.s9C("placeholder",e.lcZ(23,16,"REGISTER.INPUT.passwordConfirmation")),e.xp6(2),e.Q6J("errors",t.errorControl.password_confirmation.errors),e.xp6(3),e.Q6J("ngIf",!t.isProcessed),e.xp6(1),e.Q6J("ngIf",t.isProcessed))},directives:[a.W2,Z.n,a.jY,a.Nd,a.wI,v.$,a.PM,a.FN,i._Y,i.JL,i.sg,a.Ie,a.pK,a.j9,i.JJ,i.u,w.A,a.nz,a.w,u.O5,T.c,a.YG,a.PQ],pipes:[c.X$],styles:[".reset-password-grid[_ngcontent-%COMP%]{max-width:500px}ion-item[_ngcontent-%COMP%]{padding-left:16px;padding-right:16px}"]}),s})()}];let y=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[p.Bz.forChild(x)],p.Bz]}),s})();var S=o(6453),C=o(6060);let I=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[u.ez,i.u5,a.Pc,y,S.K,i.UX,c.aw.forChild({loader:{provide:c.Zw,useFactory:C.p,deps:[g.eN]}})]]}),s})()}}]);