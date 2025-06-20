"use strict";var y=function(v,a){return function(){return a||v((a={exports:{}}).exports,a),a.exports}};var z=y(function($,A){"use strict";var j=require("@stdlib/math-base-assert-is-nanf"),b=require("@stdlib/stats-base-dists-normal-quantile").factory,p=require("@stdlib/stats-base-dists-normal-cdf").factory,w=require("@stdlib/stats-strided-smean").ndarray,D=require("@stdlib/math-base-special-sqrt"),K=require("@stdlib/math-base-special-abs"),Q=require("@stdlib/array-float32"),S=require("@stdlib/constants-float32-pinf"),W=require("@stdlib/constants-float32-ninf"),f=require("@stdlib/number-float64-base-to-float32"),x=p(0,1),V=b(0,1),s=new Q(2);function k(v,a,e,i,n,d,u,l,r){var N,q,R,t,c;return v<=0||j(e)||j(i)||j(n)||n<=0||e<0||e>1?(s[0]=NaN,s[1]=NaN,r.rejected=!1,r.alternative=a,r.alpha=NaN,r.pValue=NaN,r.statistic=NaN,r.ci=s,r.nullValue=NaN,r.sd=NaN,r):(e=f(e),i=f(i),n=f(n),q=n/D(v),R=w(v,d,u,l),t=(R-i)/q,a==="less"?(N=x(t),c=V(1-e),s[0]=W,s[1]=i+(t+c)*q):a==="greater"?(N=1-x(t),c=V(1-e),s[0]=i+(t-c)*q,s[1]=S):(N=2*x(-K(t)),c=V(1-e/2),s[0]=i+(t-c)*q,s[1]=i+(t+c)*q),r.rejected=N<=e,r.alternative=a,r.alpha=e,r.pValue=f(N),r.statistic=f(t),r.ci=s,r.nullValue=i,r.sd=f(q),r)}A.exports=k});var E=y(function(X,C){"use strict";var B=require("@stdlib/strided-base-stride2offset"),G=z();function H(v,a,e,i,n,d,u,l){return G(v,a,e,i,n,d,u,B(v,u),l)}C.exports=H});var P=y(function(o,O){"use strict";var J=require("@stdlib/utils-define-nonenumerable-read-only-property"),I=E(),L=z();J(I,"ndarray",L);O.exports=I});var M=require("path").join,T=require("@stdlib/utils-try-require"),U=require("@stdlib/assert-is-error"),Y=P(),F,_=T(M(__dirname,"./native.js"));U(_)?F=Y:F=_;module.exports=F;
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
