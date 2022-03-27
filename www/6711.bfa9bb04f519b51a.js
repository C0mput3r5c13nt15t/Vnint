"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6711],{6711:(S,c,r)=>{r.r(c),r.d(c,{VerifyEmailPageModule:()=>b});var f=r(6019),m=r(9133),u=r(4522),o=r(6990),l=r(6431),d=r(6952),i=r(3245),g=r(6898),Z=r(2677),p=r(5729),A=r(6733),v=r(1516);function E(e,n){1&e&&(i.TgZ(0,"ion-label"),i.TgZ(1,"b"),i._uU(2),i.ALo(3,"translate"),i.qZA(),i.qZA()),2&e&&(i.xp6(2),i.Oqu(i.lcZ(3,1,"ACTIONS.VERIFY_EMAIL.notVerified")))}function h(e,n){1&e&&(i.TgZ(0,"ion-label"),i.TgZ(1,"b"),i._uU(2),i.ALo(3,"translate"),i.qZA(),i.qZA()),2&e&&(i.xp6(2),i.Oqu(i.lcZ(3,1,"ACTIONS.VERIFY_EMAIL.verified")))}const T=[{path:"",component:(()=>{class e{constructor(t,a,s,P){this.auth=t,this.alertService=a,this.translateService=s,this.errorService=P,this.verifiedEmail=!1,this.sentNotification=!1}ngOnInit(){}ionViewWillEnter(){this.auth.emailVerifiedAt().subscribe({error:t=>{this.errorService.errorOccurred.emit(t)},next:t=>{t.email_verified_at&&(this.verifiedEmail=!0)}})}reloadVerification(){this.auth.emailVerifiedAt().subscribe({error:t=>{this.errorService.errorOccurred.emit(t)},next:t=>{t.email_verified_at&&(this.verifiedEmail=!0)}})}resendEmailVerification(){this.sentNotification=!0,this.auth.resendVerificationEmail().subscribe({error:t=>{this.errorService.errorOccurred.emit(t)},next:()=>{},complete:()=>{this.alertService.alert("primary",this.translateService.instant("ACTIONS.VERIFY_EMAIL.sent_title"),this.translateService.instant("ACTIONS.VERIFY_EMAIL.sent"),"send"),this.auth.emailVerifiedAt().subscribe({error:()=>{},next:t=>{null!=t.email_verified_at&&(this.verifiedEmail=!0)}})}})}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(g.e),i.Y36(Z.c),i.Y36(l.sK),i.Y36(p.T))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-verify-email"]],decls:30,vars:12,consts:[[3,"title"],["color","light"],[1,"inside-card-grid"],[4,"ngIf"],["size","2"],["shape","round","color","primary","expand","block",3,"click"],["slot","icon-only","name","refresh"],["fill","outline","color","primary","expand","block",3,"disabled","click"]],template:function(t,a){1&t&&(i.TgZ(0,"ion-content"),i._UZ(1,"app-toolbar"),i.TgZ(2,"ion-grid"),i.TgZ(3,"ion-row"),i.TgZ(4,"ion-col"),i._UZ(5,"app-card-title-bar",0),i.ALo(6,"translate"),i.TgZ(7,"ion-card",1),i.TgZ(8,"ion-card-content"),i.TgZ(9,"ion-grid",2),i.TgZ(10,"ion-row"),i.TgZ(11,"ion-col"),i.TgZ(12,"ion-label"),i._uU(13),i.ALo(14,"translate"),i.qZA(),i._UZ(15,"br"),i._UZ(16,"br"),i.YNc(17,E,4,3,"ion-label",3),i.YNc(18,h,4,3,"ion-label",3),i._UZ(19,"br"),i._UZ(20,"br"),i.TgZ(21,"ion-grid",2),i.TgZ(22,"ion-row"),i.TgZ(23,"ion-col",4),i.TgZ(24,"ion-button",5),i.NdJ("click",function(){return a.reloadVerification()}),i._UZ(25,"ion-icon",6),i.qZA(),i.qZA(),i.TgZ(26,"ion-col"),i.TgZ(27,"ion-button",7),i.NdJ("click",function(){return a.resendEmailVerification()}),i._uU(28),i.ALo(29,"translate"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(5),i.s9C("title",i.lcZ(6,6,"ACTIONS.VERIFY_EMAIL.title")),i.xp6(8),i.hij(" ",i.lcZ(14,8,"ACTIONS.VERIFY_EMAIL.explanation")," "),i.xp6(4),i.Q6J("ngIf",0==a.verifiedEmail),i.xp6(1),i.Q6J("ngIf",a.verifiedEmail),i.xp6(9),i.Q6J("disabled",a.sentNotification||a.verifiedEmail),i.xp6(1),i.Oqu(i.lcZ(29,10,"ACTIONS.VERIFY_EMAIL.resendButton")))},directives:[o.W2,A.n,o.jY,o.Nd,o.wI,v.$,o.PM,o.FN,o.Q$,f.O5,o.YG,o.gu],pipes:[l.X$],styles:["#buttons-grid[_ngcontent-%COMP%]{margin-top:0}"]}),e})()}];let V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[d.Bz.forChild(T)],d.Bz]}),e})();var y=r(6453),I=r(6060);let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[f.ez,m.u5,o.Pc,V,y.K,l.aw.forChild({loader:{provide:l.Zw,useFactory:I.p,deps:[u.eN]}})]]}),e})()}}]);