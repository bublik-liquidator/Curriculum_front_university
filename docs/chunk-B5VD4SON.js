import{Jb as r,K as p,N as a,jb as c}from"./chunk-KKIUVDZZ.js";var h=(()=>{let e=class e{constructor(t){this.http=t}getSpecialties(){return this.http.get(`${r.serverUrl}/specialty/get-specialties`)}getSpecialtiesById(t){return this.http.get(`${r.serverUrl}/specialty/get-specialties/${t}`)}getSpecialyById(t){return this.http.get(`${r.serverUrl}/specialty/get-specialty/${t}`)}updateSpecialtyById(t,s){return this.http.put(`${r.serverUrl}/specialty/update-specialties/${t}`,s)}deleteSpecialtiesById(t){return this.http.delete(`${r.serverUrl}/specialty/delete-specialties/${t}`)}createSpecialties(t){return this.http.post(`${r.serverUrl}/specialty/create-specialties`,t)}};e.\u0275fac=function(s){return new(s||e)(a(c))},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{h as a};