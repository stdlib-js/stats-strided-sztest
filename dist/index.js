"use strict";var j=function(t,v){return function(){return v||t((v={exports:{}}).exports,v),v.exports}};var F=j(function(X,C){"use strict";var b=require("@stdlib/stats-base-ztest-alternative-resolve-str"),x=require("@stdlib/math-base-assert-is-nanf"),p=require("@stdlib/stats-base-dists-normal-quantile").factory,w=require("@stdlib/stats-base-dists-normal-cdf").factory,D=require("@stdlib/stats-strided-smean").ndarray,K=require("@stdlib/math-base-special-sqrt"),Q=require("@stdlib/math-base-special-abs"),W=require("@stdlib/array-float32"),k=require("@stdlib/constants-float32-pinf"),B=require("@stdlib/constants-float32-ninf"),c=require("@stdlib/number-float64-base-to-float32"),V=w(0,1),z=p(0,1),i=new W(2);function G(t,v,e,a,n,d,N,y,r){var f,q,A,s,u,l;return u=b(v),t<=0||x(e)||x(a)||x(n)||n<=0||e<0||e>1?(i[0]=NaN,i[1]=NaN,r.rejected=!1,r.alternative=u,r.alpha=NaN,r.pValue=NaN,r.statistic=NaN,r.ci=i,r.nullValue=NaN,r.sd=NaN,r):(e=c(e),a=c(a),n=c(n),q=n/K(t),A=D(t,d,N,y),s=(A-a)/q,u==="less"?(f=V(s),l=z(1-e),i[0]=B,i[1]=a+(s+l)*q):u==="greater"?(f=1-V(s),l=z(1-e),i[0]=a+(s-l)*q,i[1]=k):(f=2*V(-Q(s)),l=z(1-e/2),i[0]=a+(s-l)*q,i[1]=a+(s+l)*q),r.rejected=f<=e,r.alternative=u,r.alpha=e,r.pValue=c(f),r.statistic=c(s),r.ci=i,r.nullValue=a,r.sd=c(q),r)}C.exports=G});var I=j(function(g,E){"use strict";var H=require("@stdlib/strided-base-stride2offset"),J=F();function L(t,v,e,a,n,d,N,y){return J(t,v,e,a,n,d,N,H(t,N),y)}E.exports=L});var S=j(function(m,P){"use strict";var M=require("@stdlib/utils-define-nonenumerable-read-only-property"),O=I(),T=F();M(O,"ndarray",T);P.exports=O});var U=require("path").join,Y=require("@stdlib/utils-try-require"),Z=require("@stdlib/assert-is-error"),$=S(),R,_=Y(U(__dirname,"./native.js"));Z(_)?R=$:R=_;module.exports=R;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
