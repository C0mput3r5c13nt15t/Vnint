"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7165],{7165:(F,p,t)=>{t.r(p),t.d(p,{RegisterPageModule:()=>E});var m=t(6019),n=t(9133),u=t(4522),i=t(6990),c=t(6431),g=t(6952),r=t(3245),f=t(6898),h=t(5729),Z=t(6733),v=t(1516),P=t(1750),T=t(3829);function A(o,a){if(1&o&&(r.TgZ(0,"ion-button",17),r._uU(1),r.ALo(2,"translate"),r.qZA()),2&o){const e=r.oxw();r.Q6J("disabled",e.registerForm.invalid||e.isProcessed),r.xp6(1),r.Oqu(r.lcZ(2,2,"REGISTER.INPUT.registerButton"))}}function R(o,a){if(1&o&&(r.TgZ(0,"ion-button",17),r._UZ(1,"ion-spinner",18),r.qZA()),2&o){const e=r.oxw();r.Q6J("disabled",e.registerForm.invalid||e.isProcessed)}}const x=function(){return["/login"]},y=[{path:"",component:(()=>{class o{constructor(e,s,l,d){this.formBuilder=e,this.auth=s,this.router=l,this.errorService=d,this.isProcessed=!1}ngOnInit(){this.registerForm=this.formBuilder.group({name:["",n.kI.required],email:["",n.kI.required],password:["",n.kI.required],password_confirmation:["",n.kI.required],fax:[]})}ionViewWillEnter(){this.isProcessed=!1,this.auth.authenticated().subscribe({error:e=>{this.errorService.errorOccurred.emit(e)},next:e=>{1==e.authenticated&&(this.auth.setLoggedIn=!0,this.router.navigate(["/dashboard"]))}})}get errorControl(){return this.registerForm.controls}keyPressEventHandler(e){"Enter"==e&&!this.isProcessed&&this.register()}register(){if(!this.isProcessed&&!this.registerForm.value.fax&&this.registerForm.valid){if(this.isProcessed=!0,!this.registerForm.valid)return!1;this.auth.register(this.registerForm.value).subscribe({error:e=>{if("The given data was invalid."==e.error.message)for(const s in e.error.errors){let l=[];for(const d in e.error.errors[s])l.push({[e.error.errors[s][d]]:!0});this.registerForm.controls[s].setErrors(l)}else this.errorService.errorOccurred.emit(e);this.isProcessed=!1},next:()=>{},complete:()=>{this.registerForm.reset(),this.auth.setLoggedIn=!0,this.router.navigate(["/dashboard"]),this.isProcessed=!1}})}}}return o.\u0275fac=function(e){return new(e||o)(r.Y36(n.qu),r.Y36(f.e),r.Y36(g.F0),r.Y36(h.T))},o.\u0275cmp=r.Xpm({type:o,selectors:[["app-register"]],decls:38,vars:27,consts:[[1,"register-grid"],[3,"title"],["color","light"],[1,"inside-card-grid"],["novalidate","",3,"formGroup","ngSubmit"],["color","light","lines","full"],["formControlName","name","type","text",3,"placeholder"],[3,"errors"],["formControlName","email","type","email",3,"placeholder"],["formControlName","password","type","password",3,"placeholder"],["formControlName","password_confirmation","type","password",3,"placeholder","keypress"],["formControlName","fax",1,"invisible"],[1,"ion-padding"],["type","submit","class","ion-no-margin","expand","block","color","primary",3,"disabled",4,"ngIf"],["id","alreadyHaveAccount"],[1,"animated-link",3,"routerLink"],[1,"fixed-footer"],["type","submit","expand","block","color","primary",1,"ion-no-margin",3,"disabled"],["name","crescent"]],template:function(e,s){1&e&&(r.TgZ(0,"ion-content"),r._UZ(1,"app-toolbar"),r.TgZ(2,"ion-grid",0),r.TgZ(3,"ion-row"),r.TgZ(4,"ion-col"),r._UZ(5,"app-card-title-bar",1),r.ALo(6,"translate"),r.TgZ(7,"ion-card",2),r.TgZ(8,"ion-card-content"),r.TgZ(9,"ion-grid",3),r.TgZ(10,"ion-row"),r.TgZ(11,"ion-col"),r.TgZ(12,"form",4),r.NdJ("ngSubmit",function(){return s.register()}),r.TgZ(13,"ion-item",5),r._UZ(14,"ion-input",6),r.ALo(15,"translate"),r.qZA(),r._UZ(16,"app-form-error",7),r.TgZ(17,"ion-item",5),r._UZ(18,"ion-input",8),r.ALo(19,"translate"),r.qZA(),r._UZ(20,"app-form-error",7),r.TgZ(21,"ion-item",5),r._UZ(22,"ion-input",9),r.ALo(23,"translate"),r.qZA(),r._UZ(24,"app-form-error",7),r.TgZ(25,"ion-item",5),r.TgZ(26,"ion-input",10),r.NdJ("keypress",function(d){return s.keyPressEventHandler(d.key)}),r.ALo(27,"translate"),r.qZA(),r.qZA(),r._UZ(28,"app-form-error",7),r._UZ(29,"ion-checkbox",11),r.TgZ(30,"div",12),r.YNc(31,A,3,4,"ion-button",13),r.YNc(32,R,2,1,"ion-button",13),r.qZA(),r.TgZ(33,"div",14),r.TgZ(34,"a",15),r._uU(35),r.ALo(36,"translate"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r._UZ(37,"app-footer",16),r.qZA()),2&e&&(r.xp6(5),r.s9C("title",r.lcZ(6,14,"REGISTER.title")),r.xp6(7),r.Q6J("formGroup",s.registerForm),r.xp6(2),r.s9C("placeholder",r.lcZ(15,16,"REGISTER.INPUT.name")),r.xp6(2),r.Q6J("errors",s.errorControl.name.errors),r.xp6(2),r.s9C("placeholder",r.lcZ(19,18,"REGISTER.INPUT.email")),r.xp6(2),r.Q6J("errors",s.errorControl.email.errors),r.xp6(2),r.s9C("placeholder",r.lcZ(23,20,"REGISTER.INPUT.password")),r.xp6(2),r.Q6J("errors",s.errorControl.password.errors),r.xp6(2),r.s9C("placeholder",r.lcZ(27,22,"REGISTER.INPUT.passwordConfirmation")),r.xp6(2),r.Q6J("errors",s.errorControl.password_confirmation.errors),r.xp6(3),r.Q6J("ngIf",!s.isProcessed),r.xp6(1),r.Q6J("ngIf",s.isProcessed),r.xp6(2),r.Q6J("routerLink",r.DdM(26,x)),r.xp6(1),r.Oqu(r.lcZ(36,24,"REGISTER.alreadyAccount")))},directives:[i.W2,Z.n,i.jY,i.Nd,i.wI,v.$,i.PM,i.FN,n._Y,n.JL,n.sg,i.Ie,i.pK,i.j9,n.JJ,n.u,P.A,i.nz,i.w,m.O5,g.yS,i.YI,T.c,i.YG,i.PQ],pipes:[c.X$],styles:[".register-grid[_ngcontent-%COMP%]{max-width:500px}ion-item[_ngcontent-%COMP%]{padding-left:16px;padding-right:16px}#alreadyHaveAccount[_ngcontent-%COMP%]{text-align:center}"]}),o})()}];let I=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[[g.Bz.forChild(y)],g.Bz]}),o})();var C=t(6453),U=t(6060);let E=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[[m.ez,n.u5,i.Pc,I,C.K,n.UX,c.aw.forChild({loader:{provide:c.Zw,useFactory:U.p,deps:[u.eN]}})]]}),o})()}}]);