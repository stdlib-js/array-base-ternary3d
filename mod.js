// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function f(f,o,r){var a,t,e,i,n,u,c,d,l,p,s,v,x,b,g,h,j,k;if(a=o[2],t=o[1],e=o[0],!(a<=0||t<=0||e<=0))for(g=f[0],h=f[1],j=f[2],k=f[3],u=0;u<e;u++)for(s=g[u],v=h[u],x=j[u],b=k[u],n=0;n<t;n++)for(c=s[n],d=v[n],l=x[n],p=b[n],i=0;i<a;i++)p[i]=r(c[i],d[i],l[i])}export{f as default};
//# sourceMappingURL=mod.js.map
