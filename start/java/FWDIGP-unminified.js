var _fwd_fwdScope;window.FWDAnimation||(((_fwd_fwdScope="undefined"!=typeof fwd_module&&fwd_module.exports&&"undefined"!=typeof fwd_global?fwd_global:this||window)._fwd_fwdQueue||(_fwd_fwdScope._fwd_fwdQueue=[])).push(function(){"use strict";function y(t,e,i,r){i===r&&(i=r-(r-e)/1e6),t===e&&(e=t+(i-t)/1e6),this.a=t,this.b=e,this.c=i,this.d=r,this.da=r-t,this.ca=i-t,this.ba=e-t}function w(t,e,i,r){var s={a:t},n={},a={},o={c:r},l=(t+e)/2,h=(e+i)/2,f=(i+r)/2,u=(l+h)/2,p=(h+f)/2,_=(p-u)/8;return s.b=l+(t-l)/4,n.b=u+_,s.c=n.a=(s.b+n.b)/2,n.c=a.a=(u+p)/2,a.b=p-_,o.b=f+(r-f)/4,a.c=o.a=(a.b+o.b)/2,[s,n,a,o]}function _(t,e,i,r,s,n){var a,o,l,h,f,u,p,_,c={},d=[],m=n||t[0];for(o in s="string"==typeof s?","+s+",":",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",null==e&&(e=1),t[0])d.push(o);if(1<t.length){for(_=t[t.length-1],p=!0,a=d.length;-1<--a;)if(o=d[a],.05<Math.abs(m[o]-_[o])){p=!1;break}p&&(t=t.concat(),n&&t.unshift(n),t.push(t[1]),n=t[t.length-3])}for(T.length=P.length=O.length=0,a=d.length;-1<--a;)o=d[a],g[o]=-1!==s.indexOf(","+o+","),c[o]=function(t,e,i,r){var s,n,a,o,l,h,f=[];if(r)for(n=(t=[r].concat(t)).length;-1<--n;)"string"==typeof(h=t[n][e])&&"="===h.charAt(1)&&(t[n][e]=r[e]+Number(h.charAt(0)+h.substr(2)));if((s=t.length-2)<0)return f[0]=new y(t[0][e],0,0,t[s<-1?0:1][e]),f;for(n=0;n<s;n++)a=t[n][e],o=t[n+1][e],f[n]=new y(a,0,0,o),i&&(l=t[n+2][e],T[n]=(T[n]||0)+(o-a)*(o-a),P[n]=(P[n]||0)+(l-o)*(l-o));return f[n]=new y(t[n][e],0,0,t[n+1][e]),f}(t,o,g[o],n);for(a=T.length;-1<--a;)T[a]=Math.sqrt(T[a]),P[a]=Math.sqrt(P[a]);if(!r){for(a=d.length;-1<--a;)if(g[o])for(u=(l=c[d[a]]).length-1,h=0;h<u;h++)f=l[h+1].da/P[h]+l[h].da/T[h]||0,O[h]=(O[h]||0)+f*f;for(a=O.length;-1<--a;)O[a]=Math.sqrt(O[a])}for(a=d.length,h=i?4:1;-1<--a;)(function(t,e,i,r,s){for(var n,a,o,l,h,f,u,p,_,c,d,m,g=t.length-1,y=0,v=t[0].a,x=0;x<g;x++)n=(l=t[y]).a,a=l.d,o=t[y+1].d,u=s?(c=T[x],m=((d=P[x])+c)*e*.25/(!r&&O[x]||.5),a-((h=a-(a-n)*(r?.5*e:0!==c?m/c:0))+(((f=a+(o-a)*(r?.5*e:0!==d?m/d:0))-h)*(3*c/(c+d)+.5)/4||0))):a-((h=a-(a-n)*e*.5)+(f=a+(o-a)*e*.5))/2,h+=u,f+=u,l.c=p=h,l.b=0!==x?v:v=l.a+.6*(l.c-l.a),l.da=a-n,l.ca=p-n,l.ba=v-n,i?(_=w(n,v,p,a),t.splice(y,1,_[0],_[1],_[2],_[3]),y+=4):y++,v=f;(l=t[y]).b=v,l.c=v+.4*(l.d-v),l.da=l.d-l.a,l.ca=l.c-l.a,l.ba=v-l.a,i&&(_=w(l.a,v,l.c,l.d),t.splice(y,1,_[0],_[1],_[2],_[3]))})(l=c[o=d[a]],e,i,r,g[o]),p&&(l.splice(0,h),l.splice(l.length-h,h));return c}var b,T,P,O,g,i,m,t;_fwd_fwdScope.FWDFWD_fwdDefine("FWDAnimation",["core.FWDAnimation","core.FWDSimpleTimeline","FWDTweenLite"],function(m,f,g){function y(t){for(var e=[],i=t.length,r=0;r!==i;e.push(t[r++]));return e}function v(t,e,i){var r,s,n=t.cycle;for(r in n)s=n[r],t[r]="function"==typeof s?s(i,e[i]):s[i%s.length];delete t.cycle}var m=function(t,e,i){g.call(this,t,e,i),this._cycle=0,this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=m.prototype.render},x=1e-10,w=g._internals,T=w.isSelector,b=w.isArray,t=m.prototype=g.to({},.1,{}),P=[];m.version="1.19.0",t.constructor=m,t.kill()._gc=!1,m.killTweensOf=m.killDelayedCallsTo=g.killTweensOf,m.getTweensOf=g.getTweensOf,m.lagSmoothing=g.lagSmoothing,m.ticker=g.ticker,m.render=g.render,t.invalidate=function(){return this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),g.prototype.invalidate.call(this)},t.updateTo=function(t,e){var i,r=this.ratio,s=this.vars.immediateRender||t.immediateRender;for(i in e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay)),t)this.vars[i]=t[i];if(this._initted||s)if(e)this._initted=!1,s&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&g._onPluginEvent("_onDisable",this),.998<this._time/this._duration){var n=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(n,!0,!1)}else if(this._initted=!1,this._init(),0<this._time||s)for(var a,o=1/(1-r),l=this._firstPT;l;)a=l.s+l.c,l.c*=o,l.s=a-l.c,l=l._next;return this},t.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var r,s,n,a,o,l,h,f,u,p=this._dirty?this.totalDuration():this._totalDuration,_=this._time,c=this._totalTime,d=this._cycle,m=this._duration,g=this._rawPrevTime;if(p-1e-7<=t?(this._totalTime=p,this._cycle=this._repeat,this._yoyo&&0!=(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=m,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(r=!0,s="onComplete",i=i||this._timeline.autoRemoveChildren),0===m&&(!this._initted&&this.vars.lazy&&!i||(this._startTime===this._timeline._duration&&(t=0),(g<0||t<=0&&-1e-7<=t||g===x&&"isPause"!==this.data)&&g!==t&&(i=!0,x<g&&(s="onReverseComplete")),this._rawPrevTime=f=!e||t||g===t?t:x))):t<1e-7?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==c||0===m&&0<g)&&(s="onReverseComplete",r=this._reversed),t<0&&(this._active=!1,0===m&&(!this._initted&&this.vars.lazy&&!i||(0<=g&&(i=!0),this._rawPrevTime=f=!e||t||g===t?t:x))),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(a=m+this._repeatDelay,this._cycle=this._totalTime/a>>0,0!==this._cycle&&this._cycle===this._totalTime/a&&c<=t&&this._cycle--,this._time=this._totalTime-this._cycle*a,this._yoyo&&0!=(1&this._cycle)&&(this._time=m-this._time),this._time>m?this._time=m:this._time<0&&(this._time=0)),this._easeType?(o=this._time/m,(1===(l=this._easeType)||3===l&&.5<=o)&&(o=1-o),3===l&&(o*=2),1===(h=this._easePower)?o*=o:2===h?o*=o*o:3===h?o*=o*o*o:4===h&&(o*=o*o*o*o),1===l?this.ratio=1-o:2===l?this.ratio=o:this._time/m<.5?this.ratio=o/2:this.ratio=1-o/2):this.ratio=this._ease.getRatio(this._time/m)),_!==this._time||i||d!==this._cycle){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=_,this._totalTime=c,this._rawPrevTime=g,this._cycle=d,w.lazyTweens.push(this),void(this._lazy=[t,e]);this._time&&!r?this.ratio=this._ease.getRatio(this._time/m):r&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||!this._paused&&this._time!==_&&0<=t&&(this._active=!0),0===c&&(2===this._initted&&0<t&&this._init(),this._startAt&&(0<=t?this._startAt.render(t,e,i):s=s||"_dummyGS"),this.vars.onStart&&(0===this._totalTime&&0!==m||e||this._callback("onStart"))),n=this._firstPT;n;){n.f?n.t[n.p](n.c*this.ratio+n.s):(u=n.c*this.ratio+n.s,"x"==n.p?n.t.setX(u):"y"==n.p?n.t.setY(u):"z"==n.p?n.t.setZ(u):"angleX"==n.p?n.t.setAngleX(u):"angleY"==n.p?n.t.setAngleY(u):"angleZ"==n.p?n.t.setAngleZ(u):"w"==n.p?n.t.setWidth(u):"h"==n.p?n.t.setHeight(u):"alpha"==n.p?n.t.setAlpha(u):"scale"==n.p?n.t.setScale2(u):n.t[n.p]=u),n=n._next}this._onUpdate&&(t<0&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||this._totalTime===c&&!s||this._callback("onUpdate")),this._cycle!==d&&(e||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),s&&(this._gc&&!i||(t<0&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),r&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[s]&&this._callback(s),0===m&&this._rawPrevTime===x&&f!==x&&(this._rawPrevTime=0)))}else c!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate"))},m.to=function(t,e,i){return new m(t,e,i)},m.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new m(t,e,i)},m.fromTo=function(t,e,i,r){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,new m(t,e,r)},m.staggerTo=m.allTo=function(t,e,i,r,s,n,a){r=r||0;function o(){i.onComplete&&i.onComplete.apply(i.onCompleteScope||this,arguments),s.apply(a||i.callbackScope||this,n||P)}var l,h,f,u,p=0,_=[],c=i.cycle,d=i.startAt&&i.startAt.cycle;for(b(t)||("string"==typeof t&&(t=g.selector(t)||t),T(t)&&(t=y(t))),t=t||[],r<0&&((t=y(t)).reverse(),r*=-1),l=t.length-1,f=0;f<=l;f++){for(u in h={},i)h[u]=i[u];if(c&&(v(h,t,f),null!=h.duration&&(e=h.duration,delete h.duration)),d){for(u in d=h.startAt={},i.startAt)d[u]=i.startAt[u];v(h.startAt,t,f)}h.delay=p+(h.delay||0),f===l&&s&&(h.onComplete=o),_[f]=new m(t[f],e,h),p+=r}return _},m.staggerFrom=m.allFrom=function(t,e,i,r,s,n,a){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,m.staggerTo(t,e,i,r,s,n,a)},m.staggerFromTo=m.allFromTo=function(t,e,i,r,s,n,a,o){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,m.staggerTo(t,e,r,s,n,a,o)},m.delayedCall=function(t,e,i,r,s){return new m(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:r,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,useFrames:s,overwrite:0})},m.set=function(t,e){return new m(t,0,e)},m.isTweening=function(t){return 0<g.getTweensOf(t,!0).length};var n=function(t,e){for(var i=[],r=0,s=t._first;s;)s instanceof g?i[r++]=s:(e&&(i[r++]=s),r=(i=i.concat(n(s,e))).length),s=s._next;return i},u=m.getAllTweens=function(t){return n(m._rootTimeline,t).concat(n(m._rootFramesTimeline,t))};m.killAll=function(t,e,i,r){null==e&&(e=!0),null==i&&(i=!0);for(var s,n,a=u(0!=r),o=a.length,l=e&&i&&r,h=0;h<o;h++)n=a[h],(l||n instanceof f||(s=n.target===n.vars.onComplete)&&i||e&&!s)&&(t?n.totalTime(n._reversed?0:n.totalDuration()):n._enabled(!1,!1))},m.killChildTweensOf=function(t,e){if(null!=t){var i,r,s,n,a,o=w.tweenLookup;if("string"==typeof t&&(t=g.selector(t)||t),T(t)&&(t=y(t)),b(t))for(n=t.length;-1<--n;)m.killChildTweensOf(t[n],e);else{for(s in i=[],o)for(r=o[s].target.parentNode;r;)r===t&&(i=i.concat(o[s].tweens)),r=r.parentNode;for(a=i.length,n=0;n<a;n++)e&&i[n].totalTime(i[n].totalDuration()),i[n]._enabled(!1,!1)}}};function r(t,e,i,r){e=!1!==e,i=!1!==i;for(var s,n,a=u(r=!1!==r),o=e&&i&&r,l=a.length;-1<--l;)n=a[l],(o||n instanceof f||(s=n.target===n.vars.onComplete)&&i||e&&!s)&&n.paused(t)}return m.pauseAll=function(t,e,i){r(!0,t,e,i)},m.resumeAll=function(t,e,i){r(!1,t,e,i)},m.globalTimeScale=function(t){var e=m._rootTimeline,i=g.ticker.time;return arguments.length?(t=t||x,e._startTime=i-(i-e._startTime)*e._timeScale/t,e=m._rootFramesTimeline,i=g.ticker.frame,e._startTime=i-(i-e._startTime)*e._timeScale/t,e._timeScale=m._rootTimeline._timeScale=t):e._timeScale},t.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!=(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},t.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},t.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!=(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},t.duration=function(t){return arguments.length?m.prototype.duration.call(this,t):this._duration},t.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},t.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},t.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},t.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},m},!0),b=180/Math.PI,T=[],P=[],O=[],g={},i=_fwd_fwdScope.FWDFWD_fwdDefine.globals,m=_fwd_fwdScope.FWDFWD_fwdDefine.plugin({propName:"bezier",priority:-1,version:"1.3.7",API:2,fwd_global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._mod={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var r,s,n,a,o,l,h=e.values||[],f={},u=h[0],p=e.autoRotate||i.vars.orientToBezier;for(r in this._autoRotate=p?p instanceof Array?p:[["x","y","rotation",!0!==p&&Number(p)||0]]:null,u)this._props.push(r);for(n=this._props.length;-1<--n;)r=this._props[n],this._overwriteProps.push(r),s=this._func[r]="function"==typeof t[r],f[r]=s?t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)]():parseFloat(t[r]),o||f[r]!==h[0][r]&&(o=f);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?_(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):function(t,e,i){var r,s,n,a,o,l,h,f,u,p,_,c={},d="cubic"===(e=e||"soft")?3:2,m="soft"===e,g=[];if(m&&i&&(t=[i].concat(t)),null==t||t.length<1+d)throw"invalid Bezier data";for(u in t[0])g.push(u);for(l=g.length;-1<--l;){for(c[u=g[l]]=o=[],p=0,f=t.length,h=0;h<f;h++)r=null==i?t[h][u]:"string"==typeof(_=t[h][u])&&"="===_.charAt(1)?i[u]+Number(_.charAt(0)+_.substr(2)):Number(_),m&&1<h&&h<f-1&&(o[p++]=(r+o[p-2])/2),o[p++]=r;for(f=p-d+1,h=p=0;h<f;h+=d)r=o[h],s=o[h+1],n=o[h+2],a=2==d?0:o[h+3],o[p++]=_=3==d?new y(r,s,n,a):new y(r,(2*s+r)/3,(2*s+n)/3,n);o.length=p}return c}(h,e.type,f),this._segCount=this._beziers[r].length,this._timeRes&&(l=function(t,e){var i,r,s,n,a=[],o=[],l=0,h=0,f=(e=e>>0||6)-1,u=[],p=[];for(i in t)!function(t,e,i){for(var r,s,n,a,o,l,h,f,u,p,_,c=1/i,d=t.length;-1<--d;)for(n=(p=t[d]).a,a=p.d-n,o=p.c-n,l=p.b-n,r=s=0,f=1;f<=i;f++)r=s-(s=((h=c*f)*h*a+3*(u=1-h)*(h*o+u*l))*h),e[_=d*i+f-1]=(e[_]||0)+r*r}(t[i],a,e);for(s=a.length,r=0;r<s;r++)l+=Math.sqrt(a[r]),p[n=r%e]=l,n===f&&(h+=l,u[n=r/e>>0]=p,o[n]=h,l=0,p=[]);return{length:h,lengths:o,segments:u}}(this._beziers,this._timeRes),this._length=l.length,this._lengths=l.lengths,this._segments=l.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length),p=this._autoRotate)for(this._initialRotations=[],p[0]instanceof Array||(this._autoRotate=p=[p]),n=p.length;-1<--n;){for(a=0;a<3;a++)r=p[n][a],this._func[r]="function"==typeof t[r]&&t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)];r=p[n][2],this._initialRotations[n]=(this._func[r]?this._func[r].call(this._target):this._target[r])||0,this._overwriteProps.push(r)}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(t){var e,i,r,s,n,a,o,l,h,f=this._segCount,u=this._func,p=this._target,_=t!==this._startRatio;if(this._timeRes){if(l=this._lengths,h=this._curSeg,t*=this._length,T=this._li,t>this._l2&&T<f-1){for(o=f-1;T<o&&(this._l2=l[++T])<=t;);this._l1=l[T-1],this._li=T,this._curSeg=h=this._segments[T],this._s2=h[this._s1=this._si=0]}else if(t<this._l1&&0<T){for(;0<T&&(this._l1=l[--T])>=t;);0===T&&t<this._l1?this._l1=0:T++,this._l2=l[T],this._li=T,this._curSeg=h=this._segments[T],this._s1=h[(this._si=h.length-1)-1]||0,this._s2=h[this._si]}if(e=T,t-=this._l1,T=this._si,t>this._s2&&T<h.length-1){for(o=h.length-1;T<o&&(this._s2=h[++T])<=t;);this._s1=h[T-1],this._si=T}else if(t<this._s1&&0<T){for(;0<T&&(this._s1=h[--T])>=t;);0===T&&t<this._s1?this._s1=0:T++,this._s2=h[T],this._si=T}n=(T+(t-this._s1)/(this._s2-this._s1))*this._prec||0}else n=(t-(e=t<0?0:1<=t?f-1:f*t>>0)*(1/f))*f;for(i=1-n,T=this._props.length;-1<--T;)r=this._props[T],a=(n*n*(s=this._beziers[r][e]).da+3*i*(n*s.ca+i*s.ba))*n+s.a,this._mod[r]&&(a=this._mod[r](a,p)),u[r]?p[r](a):"x"==r?p.setX(a):"y"==r?p.setY(a):"z"==r?p.setZ(a):"angleX"==r?p.setAngleX(a):"angleY"==r?p.setAngleY(a):"angleZ"==r?p.setAngleZ(a):"w"==r?p.setWidth(a):"h"==r?p.setHeight(a):"alpha"==r?p.setAlpha(a):"scale"==r?p.setScale2(a):p[r]=a;if(this._autoRotate)for(var c,d,m,g,y,v,x,w=this._autoRotate,T=w.length;-1<--T;)r=w[T][2],v=w[T][3]||0,x=!0===w[T][4]?1:b,s=this._beziers[w[T][0]],c=this._beziers[w[T][1]],s&&c&&(s=s[e],c=c[e],d=s.a+(s.b-s.a)*n,d+=((g=s.b+(s.c-s.b)*n)-d)*n,g+=(s.c+(s.d-s.c)*n-g)*n,m=c.a+(c.b-c.a)*n,m+=((y=c.b+(c.c-c.b)*n)-m)*n,y+=(c.c+(c.d-c.c)*n-y)*n,a=_?Math.atan2(y-m,g-d)*x+v:this._initialRotations[T],this._mod[r]&&(a=this._mod[r](a,p)),u[r]?p[r](a):p[r]=a)}}),t=m.prototype,m.bezierThrough=_,m.cubicToQuadratic=w,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new y(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t,_,c,d,e=i.CSSPlugin;e&&(t=e._internals,_=t._parseToProxy,c=t._setPluginRatio,d=t.CSSPropTween,t._registerComplexSpecialProp("bezier",{parser:function(t,e,i,r,s,n){e instanceof Array&&(e={values:e}),n=new m;var a,o,l,h=e.values,f=h.length-1,u=[],p={};if(f<0)return s;for(a=0;a<=f;a++)l=_(t,h[a],r,s,n,f!==a),u[a]=l.end;for(o in e)p[o]=e[o];return p.values=u,(s=new d(t,"bezier",0,0,l.pt,2)).data=l,s.plugin=n,s.setRatio=c,0===p.autoRotate&&(p.autoRotate=!0),!p.autoRotate||p.autoRotate instanceof Array||(a=!0===p.autoRotate?0:Number(p.autoRotate),p.autoRotate=null!=l.end.left?[["left","top","rotation",a,!1]]:null!=l.end.x&&[["x","y","rotation",a,!1]]),p.autoRotate&&(r._transform||r._enableTransforms(!1),l.autoRotate=r._target._fwdTransform,l.proxy.rotation=l.autoRotate.rotation||0,r._overwriteProps.push("rotation")),n._onInitTween(l.proxy,p,r._tween),s}}))},t._mod=function(t){for(var e,i=this._overwriteProps,r=i.length;-1<--r;)(e=t[i[r]])&&"function"==typeof e&&(this._mod[i[r]]=e)},t._kill=function(t){var e,i,r=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=r.length;-1<--i;)r[i]===e&&r.splice(i,1);if(r=this._autoRotate)for(i=r.length;-1<--i;)t[r[i][2]]&&r.splice(i,1);return this._super._kill.call(this,t)},_fwd_fwdScope.FWDFWD_fwdDefine("plugins.CSSPlugin",["plugins.TweenPlugin","FWDTweenLite"],function(n,B){var c,P,O,d,W=function(){n.call(this,"css"),this._overwriteProps.length=0,this.setRatio=W.prototype.setRatio},h=_fwd_fwdScope.FWDFWD_fwdDefine.globals,m={},t=W.prototype=new n("css");(t.constructor=W).version="1.19.0",W.API=2,W.defaultTransformPerspective=0,W.defaultSkewType="compensated",W.defaultSmoothOrigin=!0,t="px",W.suffixMap={top:t,right:t,bottom:t,left:t,width:t,height:t,fontSize:t,padding:t,margin:t,perspective:t,lineHeight:""};function a(t,e){return e.toUpperCase()}function e(t){return K.createElementNS?K.createElementNS("http://www.w3.org/1999/xhtml",t):K.createElement(t)}function o(t){return N.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1}function g(t){window.console&&console.log(t)}function k(t,e){var i,r,s=(e=e||J).style;if(void 0!==s[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],r=5;-1<--r&&void 0===s[i[r]+t];);return 0<=r?(st="-"+(nt=3===r?"ms":i[r]).toLowerCase()+"-",nt+t):null}function y(t,e){var i,r,s,n={};if(e=e||at(t,null))if(i=e.length)for(;-1<--i;)-1!==(s=e[i]).indexOf("-transform")&&It!==s||(n[s.replace(p,a)]=e.getPropertyValue(s));else for(i in e)-1!==i.indexOf("Transform")&&Xt!==i||(n[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===n[i]&&(n[i.replace(p,a)]=e[i]);return rt||(n.opacity=o(t)),r=Zt(t,e,!1),n.rotation=r.rotation,n.skewX=r.skewX,n.scaleX=r.scaleX,n.scaleY=r.scaleY,n.x=r.x,n.y=r.y,Yt&&(n.z=r.z,n.rotationX=r.rotationX,n.rotationY=r.rotationY,n.scaleZ=r.scaleZ),n.filters&&delete n.filters,n}function v(t,e,i,r,s){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||s&&s[a])&&-1===a.indexOf("Origin")&&("number"!=typeof n&&"string"!=typeof n||(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(f,"")?n:0:ht(t,a),void 0!==h[a]&&(o=new vt(h,a,h[a],o))));if(r)for(a in r)"className"!==a&&(l[a]=r[a]);return{difs:l,firstMPT:o}}function R(t,e){return"function"==typeof t&&(t=t(D,F)),"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)||0}function S(t,e){return"function"==typeof t&&(t=t(D,F)),null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)||0}function A(t,e,i,r){var s,n,a,o,l;return"function"==typeof t&&(t=t(D,F)),(o=null==t?e:"number"==typeof t?t:(s=360,n=t.split("_"),a=((l="="===t.charAt(1))?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:G)-(l?0:e),n.length&&(r&&(r[i]=e+a),-1!==t.indexOf("short")&&(a%=s)!==a%180&&(a=a<0?a+s:a-s),-1!==t.indexOf("_cw")&&a<0?a=(a+3599999999640)%s-(a/s|0)*s:-1!==t.indexOf("ccw")&&0<a&&(a=(a-3599999999640)%s-(a/s|0)*s)),e+a))<1e-6&&-1e-6<o&&(o=0),o}function _(t,e,i){return 255*(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(i-e)*t*6:t<.5?i:3*t<2?e+(i-e)*(2/3-t)*6:e)+.5|0}function r(t,e){for(var i,r,s=t.match(dt)||[],n=0,a=s.length?"":t,o=0;o<s.length;o++)i=s[o],n+=(r=t.substr(n,t.indexOf(i,n)-n)).length+i.length,3===(i=ct(i,e)).length&&i.push(1),a+=r+(e?"hsla("+i[0]+","+i[1]+"%,"+i[2]+"%,"+i[3]:"rgba("+i.join(","))+")";return a+t.substr(n)}var M,x,w,Y,T,C,F,D,i,s,z=/(?:\-|\.|\b)(\d|\.|e\-)+/g,X=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,b=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,f=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,I=/(?:\d|\-|\+|=|#|\.)*/g,N=/opacity *= *([^)]*)/i,E=/opacity:([^;]*)/i,l=/alpha\(opacity *=.+?\)/i,L=/^(rgb|hsl)/,u=/([A-Z])/g,p=/-([a-z])/gi,j=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,V=/(?:Left|Right|Width)/i,q=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,Z=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,U=/,(?=[^\)]*(?:\(|$))/gi,$=/[\s,\(]/i,Q=Math.PI/180,G=180/Math.PI,H={},K=document,J=e("div"),tt=e("img"),et=W._internals={_specialProps:m},it=navigator.userAgent,rt=(i=it.indexOf("Android"),s=e("a"),w=-1!==it.indexOf("Safari")&&-1===it.indexOf("Chrome")&&(-1===i||3<Number(it.substr(i+8,1))),T=w&&Number(it.substr(it.indexOf("Version/")+8,1))<6,Y=-1!==it.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(it)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(it))&&(C=parseFloat(RegExp.$1)),!!s&&(s.style.cssText="top:1px;opacity:.55;",/^0.55/.test(s.style.opacity))),st="",nt="",at=K.defaultView?K.defaultView.getComputedStyle:function(){},ot=W.getStyle=function(t,e,i,r,s){var n;return rt||"opacity"!==e?(!r&&t.style[e]?n=t.style[e]:(i=i||at(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(u,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==s||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:s):o(t)},lt=et.convertToPixels=function(t,e,i,r,s){if("px"===r||!r)return i;if("auto"===r||!i)return 0;var n,a,o,l=V.test(e),h=t,f=J.style,u=i<0,p=1===i;if(u&&(i=-i),p&&(i*=100),"%"===r&&-1!==e.indexOf("border"))n=i/100*(l?t.clientWidth:t.clientHeight);else{if(f.cssText="border:0 solid red;position:"+ot(t,"position")+";line-height:0;","%"!==r&&h.appendChild&&"v"!==r.charAt(0)&&"rem"!==r)f[l?"borderLeftWidth":"borderTopWidth"]=i+r;else{if(a=(h=t.parentNode||K.body)._fwdCache,o=B.ticker.frame,a&&l&&a.time===o)return a.width*i/100;f[l?"width":"height"]=i+r}h.appendChild(J),n=parseFloat(J[l?"offsetWidth":"offsetHeight"]),h.removeChild(J),l&&"%"===r&&!1!==W.cacheWidths&&((a=h._fwdCache=h._fwdCache||{}).time=o,a.width=n/i*100),0!==n||s||(n=lt(t,e,i,r,!0))}return p&&(n/=100),u?-n:n},ht=et.calculateOffset=function(t,e,i){if("absolute"!==ot(t,"position",i))return 0;var r="left"===e?"Left":"Top",s=ot(t,"margin"+r,i);return t["offset"+r]-(lt(t,e,parseFloat(s),s.replace(I,""))||0)},ft={width:["Left","Right"],height:["Top","Bottom"]},ut=["marginLeft","marginRight","marginTop","marginBottom"],pt=function(t,e){if("contain"===t||"auto"===t||"auto auto"===t)return t+" ";null!=t&&""!==t||(t="0 0");var i,r=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":r[0],n=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":r[1];if(3<r.length&&!e){for(r=t.split(", ").join(",").split(","),t=[],i=0;i<r.length;i++)t.push(pt(r[i]));return t.join(",")}return null==n?n="center"===s?"50%":"0":"center"===n&&(n="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),t=s+" "+n+(2<r.length?" "+r[2]:""),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==n.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===n.charAt(1),e.ox=parseFloat(s.replace(f,"")),e.oy=parseFloat(n.replace(f,"")),e.v=t),e||t},_t={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ct=W.parseColor=function(t,e){var i,r,s,n,a,o,l,h,f,u,p;if(t)if("number"==typeof t)i=[t>>16,t>>8&255,255&t];else{if(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),_t[t])i=_t[t];else if("#"===t.charAt(0))4===t.length&&(t="#"+(r=t.charAt(1))+r+(s=t.charAt(2))+s+(n=t.charAt(3))+n),i=[(t=parseInt(t.substr(1),16))>>16,t>>8&255,255&t];else if("hsl"===t.substr(0,3))if(i=p=t.match(z),e){if(-1!==t.indexOf("="))return t.match(X)}else a=Number(i[0])%360/360,o=Number(i[1])/100,r=2*(l=Number(i[2])/100)-(s=l<=.5?l*(o+1):l+o-l*o),3<i.length&&(i[3]=Number(t[3])),i[0]=_(a+1/3,r,s),i[1]=_(a,r,s),i[2]=_(a-1/3,r,s);else i=t.match(z)||_t.transparent;i[0]=Number(i[0]),i[1]=Number(i[1]),i[2]=Number(i[2]),3<i.length&&(i[3]=Number(i[3]))}else i=_t.black;return e&&!p&&(r=i[0]/255,s=i[1]/255,n=i[2]/255,l=((h=Math.max(r,s,n))+(f=Math.min(r,s,n)))/2,h===f?a=o=0:(u=h-f,o=.5<l?u/(2-h-f):u/(h+f),a=h===r?(s-n)/u+(s<n?6:0):h===s?(n-r)/u+2:(r-s)/u+4,a*=60),i[0]=a+.5|0,i[1]=100*o+.5|0,i[2]=100*l+.5|0),i},dt="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(t in _t)dt+="|"+t+"\\b";dt=new RegExp(dt+")","gi"),W.colorStringFilter=function(t){var e,i=t[0]+t[1];dt.test(i)&&(e=-1!==i.indexOf("hsl(")||-1!==i.indexOf("hsla("),t[0]=r(t[0],e),t[1]=r(t[1],e)),dt.lastIndex=0},B.defaultStringFilter||(B.defaultStringFilter=W.colorStringFilter);function mt(t,e,n,a){if(null==t)return function(t){return t};var o,l=e?(t.match(dt)||[""])[0]:"",h=t.split(l).join("").match(b)||[],f=t.substr(0,t.indexOf(h[0])),u=")"===t.charAt(t.length-1)?")":"",p=-1!==t.indexOf(" ")?" ":",",_=h.length,c=0<_?h[0].replace(z,""):"";return _?o=e?function(t){var e,i,r,s;if("number"==typeof t)t+=c;else if(a&&U.test(t)){for(s=t.replace(U,"|").split("|"),r=0;r<s.length;r++)s[r]=o(s[r]);return s.join(",")}if(e=(t.match(dt)||[l])[0],r=(i=t.split(e).join("").match(b)||[]).length,_>r--)for(;++r<_;)i[r]=n?i[(r-1)/2|0]:h[r];return f+i.join(p)+p+e+u+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,i,r;if("number"==typeof t)t+=c;else if(a&&U.test(t)){for(i=t.replace(U,"|").split("|"),r=0;r<i.length;r++)i[r]=o(i[r]);return i.join(",")}if(r=(e=t.match(b)||[]).length,_>r--)for(;++r<_;)e[r]=n?e[(r-1)/2|0]:h[r];return f+e.join(p)+u}:function(t){return t}}function gt(h){return h=h.split(","),function(t,e,i,r,s,n,a){var o,l=(e+"").split(" ");for(a={},o=0;o<4;o++)a[h[o]]=l[o]=l[o]||l[(o-1)/2>>0];return r.parse(t,a,s,n)}}et._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,r,s,n,a=this.data,o=a.proxy,l=a.firstMPT;l;)e=o[l.v],l.r?e=Math.round(e):e<1e-6&&-1e-6<e&&(e=0),l.t[l.p]=e,l=l._next;if(a.autoRotate&&(a.autoRotate.rotation=a.mod?a.mod(o.rotation,this.t):o.rotation),1===t||0===t)for(l=a.firstMPT,n=1===t?"e":"b";l;){if((i=l.t).type){if(1===i.type){for(s=i.xs0+i.s+i.xs1,r=1;r<i.l;r++)s+=i["xn"+r]+i["xs"+(r+1)];i[n]=s}}else i[n]=i.s+i.xs0;l=l._next}};function yt(t,e,i,r,s,n){var a=new xt(t,e,i,r-i,s,-1,n);return a.b=i,a.e=a.xs0=r,a}var vt=function(t,e,i,r,s){this.t=t,this.p=e,this.v=i,this.r=s,r&&((r._prev=this)._next=r)},xt=(et._parseToProxy=function(t,e,i,r,s,n){var a,o,l,h,f,u=r,p={},_={},c=i._transform,d=H;for(i._transform=null,H=e,r=f=i.parse(t,e,r,s),H=d,n&&(i._transform=c,u&&(u._prev=null,u._prev&&(u._prev._next=null)));r&&r!==u;){if(r.type<=1&&(_[o=r.p]=r.s+r.c,p[o]=r.s,n||(h=new vt(r,"s",o,h,r.r),r.c=0),1===r.type))for(a=r.l;0<--a;)l="xn"+a,_[o=r.p+"_"+l]=r.data[l],p[o]=r[l],n||(h=new vt(r,l,o,h,r.rxp[l]));r=r._next}return{proxy:p,end:_,firstMPT:h,pt:f}},et.CSSPropTween=function(t,e,i,r,s,n,a,o,l,h,f){this.t=t,this.p=e,this.s=i,this.c=r,this.n=a||e,t instanceof xt||d.push(this.n),this.r=o,this.type=n||0,l&&(this.pr=l,c=!0),this.b=void 0===h?i:h,this.e=void 0===f?i+r:f,s&&((this._next=s)._prev=this)}),wt=W.parseComplex=function(t,e,i,r,s,n,a,o,l,h){i=i||n||"","function"==typeof r&&(r=r(D,F)),a=new xt(t,e,0,0,a,h?2:1,null,!1,o,i,r),r+="",s&&dt.test(r+i)&&(r=[i,r],W.colorStringFilter(r),i=r[0],r=r[1]);var f,u,p,_,c,d,m,g,y,v,x,w,T,b=i.split(", ").join(",").split(" "),P=r.split(", ").join(",").split(" "),O=b.length,k=!1!==M;for(-1===r.indexOf(",")&&-1===i.indexOf(",")||(b=b.join(" ").replace(U,", ").split(" "),P=P.join(" ").replace(U,", ").split(" "),O=b.length),O!==P.length&&(O=(b=(n||"").split(" ")).length),a.plugin=l,a.setRatio=h,f=dt.lastIndex=0;f<O;f++)if(_=b[f],c=P[f],(g=parseFloat(_))||0===g)a.appendXtra("",g,R(c,g),c.replace(X,""),k&&-1!==c.indexOf("px"),!0);else if(s&&dt.test(_))w=")"+((w=c.indexOf(")")+1)?c.substr(w):""),T=-1!==c.indexOf("hsl")&&rt,_=ct(_,T),c=ct(c,T),(y=6<_.length+c.length)&&!rt&&0===c[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(P[f]).join("transparent")):(rt||(y=!1),T?a.appendXtra(y?"hsla(":"hsl(",_[0],R(c[0],_[0]),",",!1,!0).appendXtra("",_[1],R(c[1],_[1]),"%,",!1).appendXtra("",_[2],R(c[2],_[2]),y?"%,":"%"+w,!1):a.appendXtra(y?"rgba(":"rgb(",_[0],c[0]-_[0],",",!0,!0).appendXtra("",_[1],c[1]-_[1],",",!0).appendXtra("",_[2],c[2]-_[2],y?",":w,!0),y&&(_=_.length<4?1:_[3],a.appendXtra("",_,(c.length<4?1:c[3])-_,w,!1))),dt.lastIndex=0;else if(d=_.match(z)){if(!(m=c.match(X))||m.length!==d.length)return a;for(u=p=0;u<d.length;u++)x=d[u],v=_.indexOf(x,p),a.appendXtra(_.substr(p,v-p),Number(x),R(m[u],x),"",k&&"px"===_.substr(v+x.length,2),0===u),p=v+x.length;a["xs"+a.l]+=_.substr(p)}else a["xs"+a.l]+=a.l||a["xs"+a.l]?" "+c:c;if(-1!==r.indexOf("=")&&a.data){for(w=a.xs0+a.data.s,f=1;f<a.l;f++)w+=a["xs"+f]+a.data["xn"+f];a.e=w+a["xs"+f]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},Tt=9;for((t=xt.prototype).l=t.pr=0;0<--Tt;)t["xn"+Tt]=0,t["xs"+Tt]="";t.xs0="",t._next=t._prev=t.xfirst=t.data=t.plugin=t.setRatio=t.rxp=null,t.appendXtra=function(t,e,i,r,s,n){var a=this,o=a.l;return a["xs"+o]+=n&&(o||a["xs"+o])?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=r||"",0<o?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=s,a["xn"+o]=e,a.plugin||(a.xfirst=new xt(a,"xn"+o,e,i,a.xfirst||a,0,a.n,s,a.pr),a.xfirst.xs0=0)):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=s),a):(a["xs"+o]+=e+(r||""),a)};function bt(t,e){e=e||{},this.p=e.prefix&&k(t)||t,(m[t]=m[this.p]=this).format=e.formatter||mt(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0}var Pt=et._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var r,s=t.split(","),n=e.defaultValue;for(i=i||[n],r=0;r<s.length;r++)e.prefix=0===r&&e.prefix,e.defaultValue=i[r]||n,new bt(s[r],e)},Ot=et._registerPluginProp=function(t){var l;m[t]||(l=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin",Pt(t,{parser:function(t,e,i,r,s,n,a){var o=h.com.fwd.plugins[l];return o?(o._cssRegister(),m[i].parse(t,e,i,r,s,n,a)):(g("Error: "+l+" js file not loaded."),s)}}))};(t=bt.prototype).parseComplex=function(t,e,i,r,s,n){var a,o,l,h,f,u,p=this.keyword;if(this.multi&&(U.test(i)||U.test(e)?(o=e.replace(U,"|").split("|"),l=i.replace(U,"|").split("|")):p&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;a<h;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,p&&(f=e.indexOf(p))!==(u=i.indexOf(p))&&(-1===u?o[a]=o[a].split(p).join(""):-1===f&&(o[a]+=" "+p));e=o.join(", "),i=l.join(", ")}return wt(t,this.p,e,i,this.clrs,this.dflt,r,this.pr,s,n)},t.parse=function(t,e,i,r,s,n,a){return this.parseComplex(t.style,this.format(ot(t,this.p,O,!1,this.dflt)),this.format(e),s,n)},W.registerSpecialProp=function(t,l,h){Pt(t,{parser:function(t,e,i,r,s,n,a){var o=new xt(t,i,0,0,s,2,i,!1,h);return o.plugin=n,o.setRatio=l(t,e,r._tween,i),o},priority:h})},W.useSVGTransformAttr=w||Y;function kt(t,e,i){var r,s=K.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(r in i)s.setAttributeNS(null,r.replace(n,"$1-$2").toLowerCase(),i[r]);return e.appendChild(s),s}function Rt(t,e,i,r,s,n){var a,o,l,h,f,u,p,_,c,d,m,g,y,v,x=t._fwdTransform,w=qt(t,!0);x&&(y=x.xOrigin,v=x.yOrigin),(!r||(a=r.split(" ")).length<2)&&(p=t.getBBox(),a=[(-1!==(e=pt(e).split(" "))[0].indexOf("%")?parseFloat(e[0])/100*p.width:parseFloat(e[0]))+p.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*p.height:parseFloat(e[1]))+p.y]),i.xOrigin=h=parseFloat(a[0]),i.yOrigin=f=parseFloat(a[1]),r&&w!==Vt&&(u=w[0],p=w[1],_=w[2],c=w[3],d=w[4],o=h*(c/(g=u*c-p*_))+f*(-_/g)+(_*(m=w[5])-c*d)/g,l=h*(-p/g)+f*(u/g)-(u*m-p*d)/g,h=i.xOrigin=a[0]=o,f=i.yOrigin=a[1]=l),x&&(n&&(i.xOffset=x.xOffset,i.yOffset=x.yOffset,x=i),s||!1!==s&&!1!==W.defaultSmoothOrigin?(o=h-y,l=f-v,x.xOffset+=o*w[0]+l*w[2]-o,x.yOffset+=o*w[1]+l*w[3]-l):x.xOffset=x.yOffset=0),n||t.setAttribute("data-svg-origin",a.join(" "))}function St(t){var e,i,r=this.data,s=-r.rotation*Q,n=s+r.skewX*Q,a=1e5,o=(Math.cos(s)*r.scaleX*a|0)/a,l=(Math.sin(s)*r.scaleX*a|0)/a,h=(Math.sin(n)*-r.scaleY*a|0)/a,f=(Math.cos(n)*r.scaleY*a|0)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=l,l=-h,h=-i,e=p.filter,u.filter="";var _=this.t.offsetWidth,c=this.t.offsetHeight,d="absolute"!==p.position,m="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+f,g=r.x+_*r.xPercent/100,y=r.y+c*r.yPercent/100;if(null!=r.ox&&(g+=(b=(r.oxp?_*r.ox*.01:r.ox)-_/2)-(b*o+(P=(r.oyp?c*r.oy*.01:r.oy)-c/2)*l),y+=P-(b*h+P*f)),m+=d?", Dx="+((b=_/2)-(b*o+(P=c/2)*l)+g)+", Dy="+(P-(b*h+P*f)+y)+")":", sizingMethod='auto expand')",-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?u.filter=e.replace(Z,m):u.filter=m+" "+e,0!==t&&1!==t||1==o&&0===l&&0===h&&1==f&&(d&&-1===m.indexOf("Dx=0, Dy=0")||N.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf(e.indexOf("Alpha"))&&u.removeAttribute("filter")),!d){var v,x,w,T=C<8?1:-1,b=r.ieOffsetX||0,P=r.ieOffsetY||0;for(r.ieOffsetX=Math.round((_-((o<0?-o:o)*_+(l<0?-l:l)*c))/2+g),r.ieOffsetY=Math.round((c-((f<0?-f:f)*c+(h<0?-h:h)*_))/2+y),Tt=0;Tt<4;Tt++)w=(i=-1!==(v=p[x=ut[Tt]]).indexOf("px")?parseFloat(v):lt(this.t,x,parseFloat(v),v.replace(I,""))||0)!==r[x]?Tt<2?-r.ieOffsetX:-r.ieOffsetY:Tt<2?b-r.ieOffsetX:P-r.ieOffsetY,u[x]=(r[x]=Math.round(i-w*(0===Tt||2===Tt?1:T)))+"px"}}}var At,Mt,Ct,Ft,Dt,zt="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Xt=k("transform"),It=st+"transform",Nt=k("transformOrigin"),Yt=null!==k("perspective"),Et=et.Transform=function(){this.perspective=parseFloat(W.defaultTransformPerspective)||0,this.force3D=!(!1===W.defaultForce3D||!Yt)&&(W.defaultForce3D||"auto")},Bt=window.SVGElement,Wt=K.documentElement,Lt=(Dt=C||/Android/i.test(it)&&!window.chrome,K.createElementNS&&!Dt&&(Mt=kt("svg",Wt),Ft=(Ct=kt("rect",Mt,{width:100,height:50,x:100})).getBoundingClientRect().width,Ct.style[Nt]="50% 50%",Ct.style[Xt]="scaleX(0.5)",Dt=Ft===Ct.getBoundingClientRect().width&&!(Y&&Yt),Wt.removeChild(Mt)),Dt),jt=function(t){return!!(Bt&&t.getBBox&&t.getCTM&&function(t){try{return t.getBBox()}catch(t){}}(t)&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},Vt=[1,0,0,1,0,0],qt=function(t,e){var i,r,s,n,a,o,l=t._fwdTransform||new Et,h=t.style;if(Xt?r=ot(t,It,null,!0):t.currentStyle&&(r=(r=t.currentStyle.filter.match(q))&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),l.x||0,l.y||0].join(","):""),(i=!r||"none"===r||"matrix(1, 0, 0, 1, 0, 0)"===r)&&Xt&&((o="none"===at(t).display)||!t.parentNode)&&(o&&(n=h.display,h.display="block"),t.parentNode||(a=1,Wt.appendChild(t)),i=!(r=ot(t,It,null,!0))||"none"===r||"matrix(1, 0, 0, 1, 0, 0)"===r,n?h.display=n:o&&Gt(h,"display"),a&&Wt.removeChild(t)),(l.svg||t.getBBox&&jt(t))&&(i&&-1!==(h[Xt]+"").indexOf("matrix")&&(r=h[Xt],i=0),s=t.getAttribute("transform"),i&&s&&(-1!==s.indexOf("matrix")?(r=s,i=0):-1!==s.indexOf("translate")&&(r="matrix(1,0,0,1,"+s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",i=0))),i)return Vt;for(s=(r||"").match(z)||[],Tt=s.length;-1<--Tt;)n=Number(s[Tt]),s[Tt]=(a=n-(n|=0))?(1e5*a+(a<0?-.5:.5)|0)/1e5+n:n;return e&&6<s.length?[s[0],s[1],s[4],s[5],s[12],s[13]]:s},Zt=et.getTransform=function(t,e,i,r){if(t._fwdTransform&&i&&!r)return t._fwdTransform;var s,n,a,o,l,h,f,u,p,_,c,d,m,g,y,v,x,w,T,b,P,O,k,R,S,A,M,C,F,D,z,X,I=i&&t._fwdTransform||new Et,N=I.scaleX<0,Y=Yt&&(parseFloat(ot(t,Nt,e,!1,"0 0 0").split(" ")[2])||I.zOrigin)||0,E=parseFloat(W.defaultTransformPerspective)||0;if(I.svg=!(!t.getBBox||!jt(t)),I.svg&&(Rt(t,ot(t,Nt,e,!1,"50% 50%")+"",I,t.getAttribute("data-svg-origin")),At=W.useSVGTransformAttr||Lt),(s=qt(t))!==Vt)for(n in 16===s.length?(f=s[0],u=s[1],p=s[2],_=s[3],c=s[4],d=s[5],m=s[6],g=s[7],y=s[8],v=s[9],x=s[10],w=s[12],T=s[13],b=s[14],P=s[11],O=Math.atan2(m,x),I.zOrigin&&(w=y*(b=-I.zOrigin)-s[12],T=v*b-s[13],b=x*b+I.zOrigin-s[14]),I.rotationX=O*G,O&&(k=c*(A=Math.cos(-O))+y*(M=Math.sin(-O)),R=d*A+v*M,S=m*A+x*M,y=c*-M+y*A,v=d*-M+v*A,x=m*-M+x*A,P=g*-M+P*A,c=k,d=R,m=S),O=Math.atan2(-p,x),I.rotationY=O*G,O&&(R=u*(A=Math.cos(-O))-v*(M=Math.sin(-O)),S=p*A-x*M,v=u*M+v*A,x=p*M+x*A,P=_*M+P*A,f=k=f*A-y*M,u=R,p=S),O=Math.atan2(u,f),I.rotation=O*G,O&&(f=f*(A=Math.cos(-O))+c*(M=Math.sin(-O)),R=u*A+d*M,d=u*-M+d*A,m=p*-M+m*A,u=R),I.rotationX&&359.9<Math.abs(I.rotationX)+Math.abs(I.rotation)&&(I.rotationX=I.rotation=0,I.rotationY=180-I.rotationY),I.scaleX=(1e5*Math.sqrt(f*f+u*u)+.5|0)/1e5,I.scaleY=(1e5*Math.sqrt(d*d+v*v)+.5|0)/1e5,I.scaleZ=(1e5*Math.sqrt(m*m+x*x)+.5|0)/1e5,I.rotationX||I.rotationY?I.skewX=0:(I.skewX=c||d?Math.atan2(c,d)*G+I.rotation:I.skewX||0,90<Math.abs(I.skewX)&&Math.abs(I.skewX)<270&&(N?(I.scaleX*=-1,I.skewX+=I.rotation<=0?180:-180,I.rotation+=I.rotation<=0?180:-180):(I.scaleY*=-1,I.skewX+=I.skewX<=0?180:-180))),I.perspective=P?1/(P<0?-P:P):0,I.x=w,I.y=T,I.z=b,I.svg&&(I.x-=I.xOrigin-(I.xOrigin*f-I.yOrigin*c),I.y-=I.yOrigin-(I.yOrigin*u-I.xOrigin*d))):Yt&&!r&&s.length&&I.x===s[4]&&I.y===s[5]&&(I.rotationX||I.rotationY)||(F=(C=6<=s.length)?s[0]:1,D=s[1]||0,z=s[2]||0,X=C?s[3]:1,I.x=s[4]||0,I.y=s[5]||0,a=Math.sqrt(F*F+D*D),o=Math.sqrt(X*X+z*z),l=F||D?Math.atan2(D,F)*G:I.rotation||0,h=z||X?Math.atan2(z,X)*G+l:I.skewX||0,90<Math.abs(h)&&Math.abs(h)<270&&(N?(a*=-1,h+=l<=0?180:-180,l+=l<=0?180:-180):(o*=-1,h+=h<=0?180:-180)),I.scaleX=a,I.scaleY=o,I.rotation=l,I.skewX=h,Yt&&(I.rotationX=I.rotationY=I.z=0,I.perspective=E,I.scaleZ=1),I.svg&&(I.x-=I.xOrigin-(I.xOrigin*F+I.yOrigin*z),I.y-=I.yOrigin-(I.xOrigin*D+I.yOrigin*X))),I.zOrigin=Y,I)I[n]<2e-5&&-2e-5<I[n]&&(I[n]=0);return i&&(t._fwdTransform=I).svg&&(At&&t.style[Xt]?B.delayedCall(.001,function(){Gt(t.style,Xt)}):!At&&t.getAttribute("transform")&&B.delayedCall(.001,function(){t.removeAttribute("transform")})),I},Ut=et.set3DTransformRatio=et.setTransformRatio=function(t){var e,i,r,s,n,a,o,l,h,f,u,p,_,c,d,m,g,y,v,x,w,T,b,P=this.data,O=this.t.style,k=P.rotation,R=P.rotationX,S=P.rotationY,A=P.scaleX,M=P.scaleY,C=P.scaleZ,F=P.x,D=P.y,z=P.z,X=P.svg,I=P.perspective,N=P.force3D;if(!((1!==t&&0!==t||"auto"!==N||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&N||z||I||S||R||1!==C)||At&&X||!Yt)k||P.skewX||X?(k*=Q,T=P.skewX*Q,b=1e5,e=Math.cos(k)*A,s=Math.sin(k)*A,i=Math.sin(k-T)*-M,n=Math.cos(k-T)*M,T&&"simple"===P.skewType&&(g=Math.tan(T-P.skewY*Q),i*=g=Math.sqrt(1+g*g),n*=g,P.skewY&&(g=Math.tan(P.skewY*Q),e*=g=Math.sqrt(1+g*g),s*=g)),X&&(F+=P.xOrigin-(P.xOrigin*e+P.yOrigin*i)+P.xOffset,D+=P.yOrigin-(P.xOrigin*s+P.yOrigin*n)+P.yOffset,At&&(P.xPercent||P.yPercent)&&(c=this.t.getBBox(),F+=.01*P.xPercent*c.width,D+=.01*P.yPercent*c.height),F<(c=1e-6)&&-c<F&&(F=0),D<c&&-c<D&&(D=0)),v=(e*b|0)/b+","+(s*b|0)/b+","+(i*b|0)/b+","+(n*b|0)/b+","+F+","+D+")",X&&At?this.t.setAttribute("transform","matrix("+v):O[Xt]=(P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) matrix(":"matrix(")+v):O[Xt]=(P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) matrix(":"matrix(")+A+",0,0,"+M+","+F+","+D+")";else{if(Y&&(A<(c=1e-4)&&-c<A&&(A=C=2e-5),M<c&&-c<M&&(M=C=2e-5),!I||P.z||P.rotationX||P.rotationY||(I=0)),k||P.skewX)k*=Q,d=e=Math.cos(k),m=s=Math.sin(k),P.skewX&&(k-=P.skewX*Q,d=Math.cos(k),m=Math.sin(k),"simple"===P.skewType&&(g=Math.tan((P.skewX-P.skewY)*Q),d*=g=Math.sqrt(1+g*g),m*=g,P.skewY&&(g=Math.tan(P.skewY*Q),e*=g=Math.sqrt(1+g*g),s*=g))),i=-m,n=d;else{if(!(S||R||1!==C||I||X))return void(O[Xt]=(P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) translate3d(":"translate3d(")+F+"px,"+D+"px,"+z+"px)"+(1!==A||1!==M?" scale("+A+","+M+")":""));e=n=1,i=s=0}h=1,r=a=o=l=f=u=0,p=I?-1/I:0,_=P.zOrigin,c=1e-6,x=",",w="0",(k=S*Q)&&(d=Math.cos(k),f=p*(o=-(m=Math.sin(k))),r=e*m,a=s*m,p*=h=d,e*=d,s*=d),(k=R*Q)&&(g=i*(d=Math.cos(k))+r*(m=Math.sin(k)),y=n*d+a*m,l=h*m,u=p*m,r=i*-m+r*d,a=n*-m+a*d,h*=d,p*=d,i=g,n=y),1!==C&&(r*=C,a*=C,h*=C,p*=C),1!==M&&(i*=M,n*=M,l*=M,u*=M),1!==A&&(e*=A,s*=A,o*=A,f*=A),(_||X)&&(_&&(F+=r*-_,D+=a*-_,z+=h*-_+_),X&&(F+=P.xOrigin-(P.xOrigin*e+P.yOrigin*i)+P.xOffset,D+=P.yOrigin-(P.xOrigin*s+P.yOrigin*n)+P.yOffset),F<c&&-c<F&&(F=w),D<c&&-c<D&&(D=w),z<c&&-c<z&&(z=0)),v=P.xPercent||P.yPercent?"translate("+P.xPercent+"%,"+P.yPercent+"%) matrix3d(":"matrix3d(",v+=(e<c&&-c<e?w:e)+x+(s<c&&-c<s?w:s)+x+(o<c&&-c<o?w:o),v+=x+(f<c&&-c<f?w:f)+x+(i<c&&-c<i?w:i)+x+(n<c&&-c<n?w:n),R||S||1!==C?(v+=x+(l<c&&-c<l?w:l)+x+(u<c&&-c<u?w:u)+x+(r<c&&-c<r?w:r),v+=x+(a<c&&-c<a?w:a)+x+(h<c&&-c<h?w:h)+x+(p<c&&-c<p?w:p)+x):v+=",0,0,0,0,1,0,",v+=F+x+D+x+z+x+(I?1+-z/I:1)+")",O[Xt]=v}};(t=Et.prototype).x=t.y=t.z=t.skewX=t.skewY=t.rotation=t.rotationX=t.rotationY=t.zOrigin=t.xPercent=t.yPercent=t.xOffset=t.yOffset=0,t.scaleX=t.scaleY=t.scaleZ=1,Pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,i,r,s,n,a){if(r._lastParsedTransform===a)return s;var o;"function"==typeof(r._lastParsedTransform=a)[i]&&(o=a[i],a[i]=e);var l,h,f,u,p,_,c,d,m,g=t._fwdTransform,y=t.style,v=zt.length,x=a,w={},T="transformOrigin",b=Zt(t,O,!0,x.parseTransform),P=x.transform&&("function"==typeof x.transform?x.transform(D,F):x.transform);if(r._transform=b,P&&"string"==typeof P&&Xt)(h=J.style)[Xt]=P,h.display="block",h.position="absolute",K.body.appendChild(J),l=Zt(J,null,!1),b.svg&&(_=b.xOrigin,c=b.yOrigin,l.x-=b.xOffset,l.y-=b.yOffset,(x.transformOrigin||x.svgOrigin)&&(P={},Rt(t,pt(x.transformOrigin),P,x.svgOrigin,x.smoothOrigin,!0),_=P.xOrigin,c=P.yOrigin,l.x-=P.xOffset-b.xOffset,l.y-=P.yOffset-b.yOffset),(_||c)&&(d=qt(J,!0),l.x-=_-(_*d[0]+c*d[2]),l.y-=c-(_*d[1]+c*d[3]))),K.body.removeChild(J),l.perspective||(l.perspective=b.perspective),null!=x.xPercent&&(l.xPercent=S(x.xPercent,b.xPercent)),null!=x.yPercent&&(l.yPercent=S(x.yPercent,b.yPercent));else if("object"==typeof x){if(l={scaleX:S(null!=x.scaleX?x.scaleX:x.scale,b.scaleX),scaleY:S(null!=x.scaleY?x.scaleY:x.scale,b.scaleY),scaleZ:S(x.scaleZ,b.scaleZ),x:S(x.x,b.x),y:S(x.y,b.y),z:S(x.z,b.z),xPercent:S(x.xPercent,b.xPercent),yPercent:S(x.yPercent,b.yPercent),perspective:S(x.transformPerspective,b.perspective)},null!=(p=x.directionalRotation))if("object"==typeof p)for(h in p)x[h]=p[h];else x.rotation=p;"string"==typeof x.x&&-1!==x.x.indexOf("%")&&(l.x=0,l.xPercent=S(x.x,b.xPercent)),"string"==typeof x.y&&-1!==x.y.indexOf("%")&&(l.y=0,l.yPercent=S(x.y,b.yPercent)),l.rotation=A("rotation"in x?x.rotation:"shortRotation"in x?x.shortRotation+"_short":"rotationZ"in x?x.rotationZ:b.rotation-b.skewY,b.rotation-b.skewY,"rotation",w),Yt&&(l.rotationX=A("rotationX"in x?x.rotationX:"shortRotationX"in x?x.shortRotationX+"_short":b.rotationX||0,b.rotationX,"rotationX",w),l.rotationY=A("rotationY"in x?x.rotationY:"shortRotationY"in x?x.shortRotationY+"_short":b.rotationY||0,b.rotationY,"rotationY",w)),l.skewX=A(x.skewX,b.skewX-b.skewY),(l.skewY=A(x.skewY,b.skewY))&&(l.skewX+=l.skewY,l.rotation+=l.skewY)}for(Yt&&null!=x.force3D&&(b.force3D=x.force3D,u=!0),b.skewType=x.skewType||b.skewType||W.defaultSkewType,(f=b.force3D||b.z||b.rotationX||b.rotationY||l.z||l.rotationX||l.rotationY||l.perspective)||null==x.scale||(l.scaleZ=1);-1<--v;)(1e-6<(P=l[m=zt[v]]-b[m])||P<-1e-6||null!=x[m]||null!=H[m])&&(u=!0,s=new xt(b,m,b[m],P,s),m in w&&(s.e=w[m]),s.xs0=0,s.plugin=n,r._overwriteProps.push(s.n));return P=x.transformOrigin,b.svg&&(P||x.svgOrigin)&&(_=b.xOffset,c=b.yOffset,Rt(t,pt(P),l,x.svgOrigin,x.smoothOrigin),s=yt(b,"xOrigin",(g?b:l).xOrigin,l.xOrigin,s,T),s=yt(b,"yOrigin",(g?b:l).yOrigin,l.yOrigin,s,T),_===b.xOffset&&c===b.yOffset||(s=yt(b,"xOffset",g?_:b.xOffset,b.xOffset,s,T),s=yt(b,"yOffset",g?c:b.yOffset,b.yOffset,s,T)),P=At?null:"0px 0px"),(P||Yt&&f&&b.zOrigin)&&(Xt?(u=!0,m=Nt,P=(P||ot(t,m,O,!1,"50% 50%"))+"",(s=new xt(y,m,0,0,s,-1,T)).b=y[m],s.plugin=n,Yt?(h=b.zOrigin,P=P.split(" "),b.zOrigin=(2<P.length&&(0===h||"0px"!==P[2])?parseFloat(P[2]):h)||0,s.xs0=s.e=P[0]+" "+(P[1]||"50%")+" 0px",(s=new xt(b,"zOrigin",0,0,s,-1,s.n)).b=h,s.xs0=s.e=b.zOrigin):s.xs0=s.e=P):pt(P+"",b)),u&&(r._transformType=b.svg&&At||!f&&3!==this._transformType?2:3),o&&(a[i]=o),s},prefix:!0}),Pt("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),Pt("borderRadius",{defaultValue:"0px",parser:function(t,e,i,r,s,n){e=this.format(e);for(var a,o,l,h,f,u,p,_,c,d,m,g,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],v=t.style,x=parseFloat(t.offsetWidth),w=parseFloat(t.offsetHeight),T=e.split(" "),b=0;b<y.length;b++)this.p.indexOf("border")&&(y[b]=k(y[b])),-1!==(l=o=ot(t,y[b],O,!1,"0px")).indexOf(" ")&&(l=(o=l.split(" "))[0],o=o[1]),h=a=T[b],f=parseFloat(l),_=l.substr((f+"").length),""===(p=(c="="===h.charAt(1))?(u=parseInt(h.charAt(0)+"1",10),h=h.substr(2),u*=parseFloat(h),h.substr((u+"").length-(u<0?1:0))||""):(u=parseFloat(h),h.substr((u+"").length)))&&(p=P[i]||_),p!==_&&(d=lt(t,"borderLeft",f,_),m=lt(t,"borderTop",f,_),o="%"===p?(l=d/x*100+"%",m/w*100+"%"):"em"===p?(l=d/(g=lt(t,"borderLeft",1,"em"))+"em",m/g+"em"):(l=d+"px",m+"px"),c&&(h=parseFloat(l)+u+p,a=parseFloat(o)+u+p)),s=wt(v,y[b],l+" "+o,h+" "+a,!1,"0px",s);return s},prefix:!0,formatter:mt("0px 0px 0px 0px",!1,!0)}),Pt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(t,e,i,r,s,n){return wt(t.style,i,this.format(ot(t,i,O,!1,"0px 0px")),this.format(e),!1,"0px",s)},prefix:!0,formatter:mt("0px 0px",!1,!0)}),Pt("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,r,s,n){var a,o,l,h,f,u,p="background-position",_=O||at(t,null),c=this.format((_?C?_.getPropertyValue(p+"-x")+" "+_.getPropertyValue(p+"-y"):_.getPropertyValue(p):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),d=this.format(e);if(-1!==c.indexOf("%")!=(-1!==d.indexOf("%"))&&d.split(",").length<2&&(u=ot(t,"backgroundImage").replace(j,""))&&"none"!==u){for(a=c.split(" "),o=d.split(" "),tt.setAttribute("src",u),l=2;-1<--l;)(h=-1!==(c=a[l]).indexOf("%"))!=(-1!==o[l].indexOf("%"))&&(f=0===l?t.offsetWidth-tt.width:t.offsetHeight-tt.height,a[l]=h?parseFloat(c)/100*f+"px":parseFloat(c)/f*100+"%");c=a.join(" ")}return this.parseComplex(t.style,c,d,s,n)},formatter:pt}),Pt("backgroundSize",{defaultValue:"0 0",formatter:function(t){return pt(-1===(t+="").indexOf(" ")?t+" "+t:t)}}),Pt("perspective",{defaultValue:"0px",prefix:!0}),Pt("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),Pt("transformStyle",{prefix:!0}),Pt("backfaceVisibility",{prefix:!0}),Pt("userSelect",{prefix:!0}),Pt("margin",{parser:gt("marginTop,marginRight,marginBottom,marginLeft")}),Pt("padding",{parser:gt("paddingTop,paddingRight,paddingBottom,paddingLeft")}),Pt("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,r,s,n){var a,o,l;return e=C<9?(o=t.currentStyle,l=C<8?" ":",",a="rect("+o.clipTop+l+o.clipRight+l+o.clipBottom+l+o.clipLeft+")",this.format(e).split(",").join(l)):(a=this.format(ot(t,this.p,O,!1,this.dflt)),this.format(e)),this.parseComplex(t.style,a,e,s,n)}}),Pt("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),Pt("autoRound,strictUnits",{parser:function(t,e,i,r,s){return s}}),Pt("border",{defaultValue:"0px solid #000",parser:function(t,e,i,r,s,n){var a=ot(t,"borderTopWidth",O,!1,"0px"),o=this.format(e).split(" "),l=o[0].replace(I,"");return"px"!==l&&(a=parseFloat(a)/lt(t,"borderTopWidth",1,l)+l),this.parseComplex(t.style,this.format(a+" "+ot(t,"borderTopStyle",O,!1,"solid")+" "+ot(t,"borderTopColor",O,!1,"#000")),o.join(" "),s,n)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(dt)||["#000"])[0]}}),Pt("borderWidth",{parser:gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),Pt("float,cssFloat,styleFloat",{parser:function(t,e,i,r,s,n){var a=t.style,o="cssFloat"in a?"cssFloat":"styleFloat";return new xt(a,o,0,0,s,-1,i,!1,0,a[o],e)}});function $t(t){var e,i=this.t,r=i.filter||ot(this.data,"filter")||"",s=this.s+this.c*t|0;100==s&&(e=-1===r.indexOf("atrix(")&&-1===r.indexOf("radient(")&&-1===r.indexOf("oader(")?(i.removeAttribute("filter"),!ot(this.data,"filter")):(i.filter=r.replace(l,""),!0)),e||(this.xn1&&(i.filter=r=r||"alpha(opacity="+s+")"),-1===r.indexOf("pacity")?0==s&&this.xn1||(i.filter=r+" alpha(opacity="+s+")"):i.filter=r.replace(N,"opacity="+s))}Pt("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,r,s,n){var a=parseFloat(ot(t,"opacity",O,!1,"1")),o=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+a),l&&1===a&&"hidden"===ot(t,"visibility",O)&&0!==e&&(a=0),rt?s=new xt(o,"opacity",a,e-a,s):((s=new xt(o,"opacity",100*a,100*(e-a),s)).xn1=l?1:0,o.zoom=1,s.type=2,s.b="alpha(opacity="+s.s+")",s.e="alpha(opacity="+(s.s+s.c)+")",s.data=t,s.plugin=n,s.setRatio=$t),l&&((s=new xt(o,"visibility",0,0,s,-1,null,!1,0,0!==a?"inherit":"hidden",0===e?"hidden":"inherit")).xs0="inherit",r._overwriteProps.push(s.n),r._overwriteProps.push(i)),s}});function Qt(t){if(this.t._fwdClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Gt(i,e.p),e=e._next;1===t&&this.t._fwdClassPT===this&&(this.t._fwdClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)}var Gt=function(t,e){e&&(t.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),t.removeProperty(e.replace(u,"-$1").toLowerCase())):t.removeAttribute(e))};Pt("className",{parser:function(t,e,i,r,s,n,a){var o,l,h,f,u,p=t.getAttribute("class")||"",_=t.style.cssText;if((s=r._classNamePT=new xt(t,i,0,0,s,2)).setRatio=Qt,s.pr=-11,c=!0,s.b=p,l=y(t,O),h=t._fwdClassPT){for(f={},u=h.data;u;)f[u.p]=1,u=u._next;h.setRatio(1)}return(t._fwdClassPT=s).e="="!==e.charAt(1)?e:p.replace(new RegExp("(?:\\s|^)"+e.substr(2)+"(?![\\w-])"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",s.e),o=v(t,l,y(t),a,f),t.setAttribute("class",p),s.data=o.firstMPT,t.style.cssText=_,s=s.xfirst=r.parse(t,o.difs,s,n)}});function Ht(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,r,s,n,a=this.t.style,o=m.transform.parse;if("all"===this.e)s=!(a.cssText="");else for(r=(e=this.e.split(" ").join("").split(",")).length;-1<--r;)i=e[r],m[i]&&(m[i].parse===o?s=!0:i="transformOrigin"===i?Nt:m[i].p),Gt(a,i);s&&(Gt(a,Xt),(n=this.t._fwdTransform)&&(n.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._fwdTransform))}}for(Pt("clearProps",{parser:function(t,e,i,r,s){return(s=new xt(t,i,0,0,s,2)).setRatio=Ht,s.e=e,s.pr=-10,s.data=r._tween,c=!0,s}}),t="bezier,throwProps,physicsProps,physics2D".split(","),Tt=t.length;Tt--;)Ot(t[Tt]);(t=W.prototype)._firstPT=t._lastParsedTransform=t._transform=null,t._onInitTween=function(t,e,i,r){if(!t.nodeType)return!1;this._target=F=t,this._tween=i,this._vars=e,D=r,M=e.autoRound,c=!1,P=e.suffixMap||W.suffixMap,O=at(t,""),d=this._overwriteProps;var s,n,a,o,l,h,f,u,p,_=t.style;if(x&&""===_.zIndex&&("auto"!==(s=ot(t,"zIndex",O))&&""!==s||this._addLazySet(_,"zIndex",0)),"string"==typeof e&&(o=_.cssText,s=y(t,O),_.cssText=o+";"+e,s=v(t,s,y(t)).difs,!rt&&E.test(e)&&(s.opacity=parseFloat(RegExp.$1)),e=s,_.cssText=o),e.className?this._firstPT=n=m.className.parse(t,e.className,"className",this,null,null,e):this._firstPT=n=this.parse(t,e,null),this._transformType){for(p=3===this._transformType,Xt?w&&(x=!0,""===_.zIndex&&("auto"!==(f=ot(t,"zIndex",O))&&""!==f||this._addLazySet(_,"zIndex",0)),T&&this._addLazySet(_,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(p?"visible":"hidden"))):_.zoom=1,a=n;a&&a._next;)a=a._next;u=new xt(t,"transform",0,0,null,2),this._linkCSSP(u,null,a),u.setRatio=Xt?Ut:St,u.data=this._transform||Zt(t,O,!0),u.tween=i,u.pr=-1,d.pop()}if(c){for(;n;){for(h=n._next,a=o;a&&a.pr>n.pr;)a=a._next;(n._prev=a?a._prev:l)?n._prev._next=n:o=n,(n._next=a)?a._prev=n:l=n,n=h}this._firstPT=o}return!0},t.parse=function(t,e,i,r){var s,n,a,o,l,h,f,u,p,_,c=t.style;for(s in e)"function"==typeof(h=e[s])&&(h=h(D,F)),(n=m[s])?i=n.parse(t,h,s,this,i,r,e):(l=ot(t,s,O)+"",p="string"==typeof h,"color"===s||"fill"===s||"stroke"===s||-1!==s.indexOf("Color")||p&&L.test(h)?(p||(h=(3<(h=ct(h)).length?"rgba(":"rgb(")+h.join(",")+")"),i=wt(c,s,l,h,!0,"transparent",i,0,r)):p&&$.test(h)?i=wt(c,s,l,h,!0,null,i,0,r):(f=(a=parseFloat(l))||0===a?l.substr((a+"").length):"",""!==l&&"auto"!==l||(f="width"===s||"height"===s?(a=function(t,e,i){if("svg"===(t.nodeName+"").toLowerCase())return(i||at(t))[e]||0;if(t.getBBox&&jt(t))return t.getBBox()[e]||0;var r=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),s=ft[e],n=s.length;for(i=i||at(t,null);-1<--n;)r-=parseFloat(ot(t,"padding"+s[n],i,!0))||0,r-=parseFloat(ot(t,"border"+s[n]+"Width",i,!0))||0;return r}(t,s,O),"px"):"left"===s||"top"===s?(a=ht(t,s,O),"px"):(a="opacity"!==s?0:1,"")),""===(u=(_=p&&"="===h.charAt(1))?(o=parseInt(h.charAt(0)+"1",10),h=h.substr(2),o*=parseFloat(h),h.replace(I,"")):(o=parseFloat(h),p?h.replace(I,""):""))&&(u=s in P?P[s]:f),h=o||0===o?(_?o+a:o)+u:e[s],f!==u&&""!==u&&(o||0===o)&&a&&(a=lt(t,s,a,f),"%"===u?(a/=lt(t,s,100,"%")/100,!0!==e.strictUnits&&(l=a+"%")):"em"===u||"rem"===u||"vw"===u||"vh"===u?a/=lt(t,s,1,u):"px"!==u&&(o=lt(t,s,o,u),u="px"),_&&(!o&&0!==o||(h=o+a+u))),_&&(o+=a),!a&&0!==a||!o&&0!==o?void 0!==c[s]&&(h||h+""!="NaN"&&null!=h)?(i=new xt(c,s,o||a||0,0,i,-1,s,!1,0,l,h)).xs0="none"!==h||"display"!==s&&-1===s.indexOf("Style")?h:l:g("invalid "+s+" tween value: "+e[s]):(i=new xt(c,s,a,o-a,i,0,s,!1!==M&&("px"===u||"zIndex"===s),0,l,h)).xs0=u)),r&&i&&!i.plugin&&(i.plugin=r);return i},t.setRatio=function(t){var e,i,r,s=this._firstPT;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||-1e-6===this._tween._rawPrevTime)for(;s;){if(e=s.c*t+s.s,s.r?e=Math.round(e):e<1e-6&&-1e-6<e&&(e=0),s.type)if(1===s.type)if(2===(r=s.l))s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2;else if(3===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3;else if(4===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4;else if(5===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4+s.xn4+s.xs5;else{for(i=s.xs0+e+s.xs1,r=1;r<s.l;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}else-1===s.type?s.t[s.p]=s.xs0:s.setRatio&&s.setRatio(t);else s.t[s.p]=e+s.xs0;s=s._next}else for(;s;)2!==s.type?s.t[s.p]=s.b:s.setRatio(t),s=s._next;else for(;s;){if(2!==s.type)if(s.r&&-1!==s.type)if(e=Math.round(s.s+s.c),s.type){if(1===s.type){for(r=s.l,i=s.xs0+e+s.xs1,r=1;r<s.l;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}}else s.t[s.p]=e+s.xs0;else s.t[s.p]=s.e;else s.setRatio(t);s=s._next}},t._enableTransforms=function(t){this._transform=this._transform||Zt(this._target,O,!0),this._transformType=this._transform.svg&&At||!t&&3!==this._transformType?2:3};function Kt(t){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)}t._addLazySet=function(t,e,i){var r=this._firstPT=new xt(t,e,0,0,this._firstPT,2);r.e=i,r.setRatio=Kt,r.data=this},t._linkCSSP=function(t,e,i,r){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,r=!0),i?i._next=t:r||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},t._mod=function(t){for(var e=this._firstPT;e;)"function"==typeof t[e.p]&&t[e.p]===Math.round&&(e.r=1),e=e._next},t._kill=function(t){var e,i,r,s=t;if(t.autoAlpha||t.alpha){for(i in s={},t)s[i]=t[i];s.opacity=1,s.autoAlpha&&(s.visibility=1)}for(t.className&&(e=this._classNamePT)&&((r=e.xfirst)&&r._prev?this._linkCSSP(r._prev,e._next,r._prev._prev):r===this._firstPT&&(this._firstPT=e._next),e._next&&this._linkCSSP(e._next,e._next._next,r._prev),this._classNamePT=null),e=this._firstPT;e;)e.plugin&&e.plugin!==i&&e.plugin._kill&&(e.plugin._kill(t),i=e.plugin),e=e._next;return n.prototype._kill.call(this,s)};var Jt=function(t,e,i){var r,s,n,a;if(t.slice)for(s=t.length;-1<--s;)Jt(t[s],e,i);else for(s=(r=t.childNodes).length;-1<--s;)a=(n=r[s]).type,n.style&&(e.push(y(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Jt(n,e,i)};return W.cascadeTo=function(t,e,i){var r,s,n,a,o=B.to(t,e,i),l=[o],h=[],f=[],u=[],p=B._internals.reservedProps;for(t=o._targets||o.target,Jt(t,h,u),o.render(e,!0,!0),Jt(t,f),o.render(0,!0,!0),o._enabled(!0),r=u.length;-1<--r;)if((s=v(u[r],h[r],f[r])).firstMPT){for(n in s=s.difs,i)p[n]&&(s[n]=i[n]);for(n in a={},s)a[n]=h[r][n];l.push(B.fromTo(u[r],e,a,s))}return l},n.activate([W]),W},!0),_fwd_fwdScope.FWDFWD_fwdDefine("easing.Back",["easing.Ease"],function(m){function t(t,e){var i=f("easing."+t,function(){},!0),r=i.prototype=new m;return r.constructor=i,r.getRatio=e,i}function e(t,e,i,r,s){var n=f("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new r},!0);return u(n,t),n}function g(t,e,i){this.t=t,this.v=e,i&&(((this.next=i).prev=this).c=i.v-e,this.gap=i.t-t)}function i(t,e){var i=f("easing."+t,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=i.prototype=new m;return r.constructor=i,r.getRatio=e,r.config=function(t){return new i(t)},i}var r,s,n,a=_fwd_fwdScope.FWDGlobals||_fwd_fwdScope,o=a.com.fwd,l=2*Math.PI,h=Math.PI/2,f=o._class,u=m.register||function(){},p=e("Back",i("BackOut",function(t){return--t*t*((this._p1+1)*t+this._p1)+1}),i("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),i("BackInOut",function(t){return(t*=2)<1?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),_=f("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:1<t&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=!0===i},!0),c=_.prototype=new m;return c.constructor=_,c.getRatio=function(t){var e=t+(.5-t)*this._p;return t<this._p1?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},_.ease=new _(.7,.7),c.config=_.config=function(t,e,i){return new _(t,e,i)},(c=(r=f("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0)).prototype=new m).constructor=r,c.getRatio=function(t){return t<0?t=0:1<=t&&(t=.999999999),(this._p2*t>>0)*this._p1},c.config=r.config=function(t){return new r(t)},(c=(s=f("easing.RoughEase",function(t){for(var e,i,r,s,n,a,o=(t=t||{}).taper||"none",l=[],h=0,f=0|(t.points||20),u=f,p=!1!==t.randomize,_=!0===t.clamp,c=t.template instanceof m?t.template:null,d="number"==typeof t.strength?.4*t.strength:.4;-1<--u;)e=p?Math.random():1/f*u,i=c?c.getRatio(e):e,r="none"===o?d:"out"===o?(s=1-e)*s*d:"in"===o?e*e*d:e<.5?(s=2*e)*s*.5*d:(s=2*(1-e))*s*.5*d,p?i+=Math.random()*r-.5*r:u%2?i+=.5*r:i-=.5*r,_&&(1<i?i=1:i<0&&(i=0)),l[h++]={x:e,y:i};for(l.sort(function(t,e){return t.x-e.x}),a=new g(1,1,null),u=f;-1<--u;)n=l[u],a=new g(n.x,n.y,a);this._prev=new g(0,0,0!==a.t?a:a.next)},!0)).prototype=new m).constructor=s,c.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&t<=e.t;)e=e.prev;return(this._prev=e).v+(t-e.t)/e.gap*e.c},c.config=function(t){return new s(t)},s.ease=new s,e("Bounce",t("BounceOut",function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),t("BounceIn",function(t){return(t=1-t)<1/2.75?1-7.5625*t*t:t<2/2.75?1-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),t("BounceInOut",function(t){var e=t<.5;return(t=e?1-2*t:2*t-1)<1/2.75?t*=7.5625*t:t=t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),e("Circ",t("CircOut",function(t){return Math.sqrt(1- --t*t)}),t("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),t("CircInOut",function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),e("Elastic",(n=function(t,e,i){var r=f("easing."+t,function(t,e){this._p1=1<=t?t:1,this._p2=(e||i)/(t<1?t:1),this._p3=this._p2/l*(Math.asin(1/this._p1)||0),this._p2=l/this._p2},!0),s=r.prototype=new m;return s.constructor=r,s.getRatio=e,s.config=function(t,e){return new r(t,e)},r})("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1},.3),n("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*--t)*Math.sin((t-this._p3)*this._p2))},.3),n("ElasticInOut",function(t){return(t*=2)<1?this._p1*Math.pow(2,10*--t)*Math.sin((t-this._p3)*this._p2)*-.5:this._p1*Math.pow(2,-10*--t)*Math.sin((t-this._p3)*this._p2)*.5+1},.45)),e("Expo",t("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),t("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),t("ExpoInOut",function(t){return(t*=2)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),e("Sine",t("SineOut",function(t){return Math.sin(t*h)}),t("SineIn",function(t){return 1-Math.cos(t*h)}),t("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),f("easing.EaseLookup",{find:function(t){return m.map[t]}},!0),u(a.SlowMo,"SlowMo","ease,"),u(s,"RoughEase","ease,"),u(r,"SteppedEase","ease,"),p},!0)}),_fwd_fwdScope.FWDFWD_fwdDefine&&_fwd_fwdScope._fwd_fwdQueue.pop()(),function(_,c){"use strict";var d={},m=_.FWDGlobals=_.FWDGlobals||_;if(!m.FWDTweenLite){var g,e,i,y=function(t){for(var e=t.split("."),i=m,r=0;r<e.length;r++)i[e[r]]=i=i[e[r]]||{};return i},u=y("com.fwd"),v=1e-10,l=function(t){for(var e=[],i=t.length,r=0;r!==i;e.push(t[r++]));return e},r=function(){},x=(e=Object.prototype.toString,i=e.call([]),function(t){return null!=t&&(t instanceof Array||"object"==typeof t&&!!t.push&&e.call(t)===i)}),w={},T=function(l,h,f,u){this.sc=w[l]?w[l].sc:[],(w[l]=this).gsClass=null,this.func=f;var p=[];this.check=function(t){for(var e,i,r,s,n,a=h.length,o=a;-1<--a;)(e=w[h[a]]||new T(h[a],[])).gsClass?(p[a]=e.gsClass,o--):t&&e.sc.push(this);if(0===o&&f){if(r=(i=("com.fwd."+l).split(".")).pop(),s=y(i.join("."))[r]=this.gsClass=f.apply(f,p),u)if(m[r]=d[r]=s,!(n="undefined"!=typeof fwd_module&&fwd_module.exports)&&"function"==typeof define&&define.amd)define((_.FWDAMDPath?_.FWDAMDPath+"/":"")+l.split(".").pop(),[],function(){return s});else if(n)if(l===c)for(a in fwd_module.exports=d[c]=s,d)s[a]=d[a];else d[c]&&(d[c][r]=s);for(a=0;a<this.sc.length;a++)this.sc[a].check()}},this.check(!0)},s=_.FWDFWD_fwdDefine=function(t,e,i,r){return new T(t,e,i,r)},p=u._class=function(t,e,i){return e=e||function(){},s(t,[],function(){return e},i),e};s.globals=m;var t,n=[0,0,1,1],b=p("easing.Ease",function(t,e,i,r){this._func=t,this._type=i||0,this._power=r||0,this._params=e?n.concat(e):n},!0),P=b.map={},a=b.register=function(t,e,i,r){for(var s,n,a,o,l=e.split(","),h=l.length,f=(i||"easeIn,easeOut,easeInOut").split(",");-1<--h;)for(n=l[h],s=r?p("easing."+n,null,!0):u.easing[n]||{},a=f.length;-1<--a;)o=f[a],P[n+"."+o]=P[o+n]=s[o]=t.getRatio?t:t[o]||new t};for((t=b.prototype)._calcEnd=!1,t.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,r=1===e?1-t:2===e?t:t<.5?2*t:2*(1-t);return 1===i?r*=r:2===i?r*=r*r:3===i?r*=r*r*r:4===i&&(r*=r*r*r*r),1===e?1-r:2===e?r:t<.5?r/2:1-r/2},h=(o=["Linear","Quad","Cubic","Quart","Quint,Strong"]).length;-1<--h;)t=o[h]+",Power"+h,a(new b(null,null,1,h),t,"easeOut",!0),a(new b(null,null,2,h),t,"easeIn"+(0===h?",easeNone":"")),a(new b(null,null,3,h),t,"easeInOut");P.linear=u.easing.Linear.easeIn,P.swing=u.easing.Quad.easeInOut;var O=p("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});(t=O.prototype).addEventListener=function(t,e,i,r,s){s=s||0;var n,a,o=this._listeners[t],l=0;for(this!==M||g||M.wake(),null==o&&(this._listeners[t]=o=[]),a=o.length;-1<--a;)(n=o[a]).c===e&&n.s===i?o.splice(a,1):0===l&&n.pr<s&&(l=a+1);o.splice(l,0,{c:e,s:i,up:r,pr:s})},t.removeEventListener=function(t,e){var i,r=this._listeners[t];if(r)for(i=r.length;-1<--i;)if(r[i].c===e)return void r.splice(i,1)},t.dispatchEvent=function(t){var e,i,r,s=this._listeners[t];if(s)for(1<(e=s.length)&&(s=s.slice(0)),i=this._eventTarget;-1<--e;)(r=s[e])&&(r.up?r.c.call(r.s||i,{type:t,target:i}):r.c.call(r.s||i))};for(var o,k=_.requestAnimationFrame,R=_.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},A=S(),h=(o=["ms","moz","webkit","o"]).length;-1<--h&&!k;)k=_[o[h]+"RequestAnimationFrame"],R=_[o[h]+"CancelAnimationFrame"]||_[o[h]+"CancelRequestAnimationFrame"];p("Ticker",function(t,e){var s,n,a,o,l,h=this,f=S(),i=!(!1===e||!k)&&"auto",u=500,p=33,_=function(t){var e,i,r=S()-A;u<r&&(f+=r-p),A+=r,h.time=(A-f)/1e3,e=h.time-l,(!s||0<e||!0===t)&&(h.frame++,l+=e+(o<=e?.004:o-e),i=!0),!0!==t&&(a=n(_)),i&&h.dispatchEvent("tick")};O.call(h),h.time=h.frame=0,h.tick=function(){_(!0)},h.lagSmoothing=function(t,e){u=t||1e10,p=Math.min(e,u,0)},h.sleep=function(){null!=a&&((i&&R?R:clearTimeout)(a),n=r,a=null,h===M&&(g=!1))},h.wake=function(t){null!==a?h.sleep():t?f+=-A+(A=S()):10<h.frame&&(A=S()-u+5),n=0===s?r:i&&k?k:function(t){return setTimeout(t,1e3*(l-h.time)+1|0)},h===M&&(g=!0),_(2)},h.fps=function(t){if(!arguments.length)return s;o=1/((s=t)||60),l=this.time+o,h.wake()},h.useRAF=function(t){if(!arguments.length)return i;h.sleep(),i=t,h.fps(s)},h.fps(t),setTimeout(function(){"auto"===i&&h.frame<5&&"hidden"!==document.visibilityState&&h.useRAF(!1)},1500)}),(t=u.Ticker.prototype=new u.events.EventDispatcher).constructor=u.Ticker;var f=p("core.FWDAnimation",function(t,e){var i;this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=!0===e.immediateRender,this.data=e.data,this._reversed=!0===e.reversed,$&&(g||M.wake(),(i=this.vars.useFrames?U:$).add(this,i._time),this.vars.paused&&this.paused(!0))}),M=f.ticker=new u.Ticker;(t=f.prototype)._dirty=t._gc=t._initted=t._paused=!1,t._totalTime=t._time=0,t._rawPrevTime=-1,t._next=t._last=t._onUpdate=t._timeline=t.timeline=null,t._paused=!1;var C=function(){g&&2e3<S()-A&&M.wake(),setTimeout(C,2e3)};C(),t.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},t.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},t.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},t.seek=function(t,e){return this.totalTime(Number(t),!1!==e)},t.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,!1!==e,!0)},t.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},t.render=function(t,e,i){},t.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,!this._gc&&this.timeline||this._enabled(!0),this},t.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&t<i+this.totalDuration()/this._timeScale},t._enabled=function(t,e){return g||M.wake(),this._gc=!t,this._active=this.isActive(),!0!==e&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},t._kill=function(t,e){return this._enabled(!1,!1)},t.kill=function(t,e){return this._kill(t,e),this},t._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},t._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();-1<--e;)"{self}"===t[e]&&(i[e]=this);return i},t._callback=function(t){var e=this.vars,i=e[t],r=e[t+"Params"],s=e[t+"Scope"]||e.callbackScope||this;switch(r?r.length:0){case 0:i.call(s);break;case 1:i.call(s,r[0]);break;case 2:i.call(s,r[0],r[1]);break;default:i.apply(s,r)}},t.eventCallback=function(t,e,i,r){if("on"===(t||"").substr(0,2)){var s=this.vars;if(1===arguments.length)return s[t];null==e?delete s[t]:(s[t]=e,s[t+"Params"]=x(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,s[t+"Scope"]=r),"onUpdate"===t&&(this._onUpdate=e)}return this},t.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},t.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&0<this._time&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},t.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},t.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},t.totalTime=function(t,e,i){if(g||M.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(t<0&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var r=this._totalDuration,s=this._timeline;if(r<t&&!i&&(t=r),this._startTime=(this._paused?this._pauseTime:s._time)-(this._reversed?r-t:t)/this._timeScale,s._dirty||this._uncache(!1),s._timeline)for(;s._timeline;)s._timeline._time!==(s._startTime+s._totalTime)/s._timeScale&&s.totalTime(s._totalTime,!0),s=s._timeline}this._gc&&this._enabled(!0,!1),this._totalTime===t&&0!==this._duration||(X.length&&G(),this.render(t,e,!1),X.length&&G())}return this},t.progress=t.totalProgress=function(t,e){var i=this.duration();return arguments.length?this.totalTime(i*t,e):i?this._time/i:this.ratio},t.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},t.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},t.timeScale=function(t){return arguments.length?(t=t||v,this._timeline&&this._timeline.smoothChildTiming&&(i=(e=this._pauseTime)||0===e?e:this._timeline.totalTime(),this._startTime=i-(i-this._startTime)*this._timeScale/t),this._timeScale=t,this._uncache(!1)):this._timeScale;var e,i},t.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},t.paused=function(t){if(!arguments.length)return this._paused;var e,i,r=this._timeline;return t!=this._paused&&r&&(g||t||M.wake(),i=(e=r.rawTime())-this._pauseTime,!t&&r.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!=i&&this._initted&&this.duration()&&(e=r.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,this.render(e,e===this._totalTime,!0))),this._gc&&!t&&this._enabled(!0,!1),this};var F=p("core.FWDSimpleTimeline",function(t){f.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});(t=F.prototype=new f).constructor=F,t.kill()._gc=!1,t._first=t._last=t._recent=null,t._sortChildren=!1,t.add=t.insert=function(t,e,i,r){var s,n;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),s=this._last,this._sortChildren)for(n=t._startTime;s&&s._startTime>n;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=s,this._recent=t,this._timeline&&this._uncache(!0),this},t._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},t.render=function(t,e,i){var r,s=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;s;)r=s._next,(s._active||t>=s._startTime&&!s._paused)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=r},t.rawTime=function(){return g||M.wake(),this._totalTime};var D=p("FWDTweenLite",function(t,e,i){if(f.call(this,e,i),this.render=D.prototype.render,null==t)throw"Cannot tween a null target.";this.target=t="string"==typeof t&&D.selector(t)||t;var r,s,n,a=t.jquery||t.length&&t!==_&&t[0]&&(t[0]===_||t[0].nodeType&&t[0].style&&!t.nodeType),o=this.vars.overwrite;if(this._overwrite=o=null==o?Z[D.defaultOverwrite]:"number"==typeof o?o>>0:Z[o],(a||t instanceof Array||t.push&&x(t))&&"number"!=typeof t[0])for(this._targets=n=l(t),this._propLookup=[],this._siblings=[],r=0;r<n.length;r++)(s=n[r])?"string"!=typeof s?s.length&&s!==_&&s[0]&&(s[0]===_||s[0].nodeType&&s[0].style&&!s.nodeType)?(n.splice(r--,1),this._targets=n=n.concat(l(s))):(this._siblings[r]=H(s,this,!1),1===o&&1<this._siblings[r].length&&J(s,this,null,1,this._siblings[r])):"string"==typeof(s=n[r--]=D.selector(s))&&n.splice(r+1,1):n.splice(r--,1);else this._propLookup={},this._siblings=H(t,this,!1),1===o&&1<this._siblings.length&&J(t,this,null,1,this._siblings);(this.vars.immediateRender||0===e&&0===this._delay&&!1!==this.vars.immediateRender)&&(this._time=-v,this.render(Math.min(0,-this._delay)))},!0),z=function(t){return t&&t.length&&t!==_&&t[0]&&(t[0]===_||t[0].nodeType&&t[0].style&&!t.nodeType)};(t=D.prototype=new f).constructor=D,t.kill()._gc=!1,t.ratio=0,t._firstPT=t._targets=t._overwrittenProps=t._startAt=null,t._notifyPluginsOfEnabled=t._lazy=!1,D.version="1.19.0",D.defaultEase=t._ease=new b(null,null,1,1),D.defaultOverwrite="auto",D.ticker=M,D.autoSleep=120,D.lagSmoothing=function(t,e){M.lagSmoothing(t,e)},D.selector=_.$||_.jQuery||function(t){var e=_.$||_.jQuery;return e?(D.selector=e)(t):"undefined"==typeof document?t:document.querySelectorAll?document.querySelectorAll(t):document.getElementById("#"===t.charAt(0)?t.substr(1):t)};var X=[],I={},N=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,Y=function(t){for(var e,i=this._firstPT;i;)e=i.blob?t?this.join(""):this.start:i.c*t+i.s,i.m?e=i.m(e,this._target||i.t):e<1e-6&&-1e-6<e&&(e=0),i.f?i.fp?i.t[i.p](i.fp,e):i.t[i.p](e):i.t[i.p]=e,i=i._next},E=function(t,e,i,r){var s,n,a,o,l,h,f,u=[t,e],p=0,_="",c=0;for(u.start=t,i&&(i(u),t=u[0],e=u[1]),u.length=0,s=t.match(N)||[],n=e.match(N)||[],r&&(r._next=null,r.blob=1,u._firstPT=u._applyPT=r),l=n.length,o=0;o<l;o++)f=n[o],_+=(h=e.substr(p,e.indexOf(f,p)-p))||!o?h:",",p+=h.length,c?c=(c+1)%5:"rgba("===h.substr(-5)&&(c=1),f===s[o]||s.length<=o?_+=f:(_&&(u.push(_),_=""),a=parseFloat(s[o]),u.push(a),u._firstPT={_next:u._firstPT,t:u,p:u.length-1,s:a,c:("="===f.charAt(1)?parseInt(f.charAt(0)+"1",10)*parseFloat(f.substr(2)):parseFloat(f)-a)||0,f:0,m:c&&c<4?Math.round:0}),p+=f.length;return(_+=e.substr(p))&&u.push(_),u.setRatio=Y,u},B=function(t,e,i,r,s,n,a,o,l){"function"==typeof r&&(r=r(l||0,t));var h,f="get"===i?t[e]:i,u=typeof t[e],p="string"==typeof r&&"="===r.charAt(1),_={t:t,p:e,s:f,f:"function"==u,pg:0,n:s||e,m:n?"function"==typeof n?n:Math.round:0,pr:0,c:p?parseInt(r.charAt(0)+"1",10)*parseFloat(r.substr(2)):parseFloat(r)-f||0};if("number"!=u&&("function"==u&&"get"===i&&(h=e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3),_.s=f=a?t[h](a):t[h]()),"string"==typeof f&&(a||isNaN(f))?(_.fp=a,_={t:E(f,r,o||D.defaultStringFilter,_),p:"setRatio",s:0,c:1,f:2,pg:0,n:s||e,pr:0,m:0}):p||(_.s=parseFloat(f),_.c=parseFloat(r)-_.s||0)),_.c)return(_._next=this._firstPT)&&(_._next._prev=_),this._firstPT=_},W=D._internals={isArray:x,isSelector:z,lazyTweens:X,blobDif:E},L=D._plugins={},j=W.tweenLookup={},V=0,q=W.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},Z={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},U=f._rootFramesTimeline=new F,$=f._rootTimeline=new F,Q=30,G=W.lazyRender=function(){var t,e=X.length;for(I={};-1<--e;)(t=X[e])&&!1!==t._lazy&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);X.length=0};$._startTime=M.time,U._startTime=M.frame,$._active=U._active=!0,setTimeout(G,1),f._updateRoot=D.render=function(){var t,e,i;if(X.length&&G(),$.render((M.time-$._startTime)*$._timeScale,!1,!1),U.render((M.frame-U._startTime)*U._timeScale,!1,!1),X.length&&G(),M.frame>=Q){for(i in Q=M.frame+(parseInt(D.autoSleep,10)||120),j){for(t=(e=j[i].tweens).length;-1<--t;)e[t]._gc&&e.splice(t,1);0===e.length&&delete j[i]}if((!(i=$._first)||i._paused)&&D.autoSleep&&!U._first&&1===M._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||M.sleep()}}},M.addEventListener("tick",f._updateRoot);var H=function(t,e,i){var r,s,n=t._fwdTweenID;if(j[n||(t._fwdTweenID=n="t"+V++)]||(j[n]={target:t,tweens:[]}),e&&((r=j[n].tweens)[s=r.length]=e,i))for(;-1<--s;)r[s]===e&&r.splice(s,1);return j[n].tweens},K=function(t,e,i,r){var s,n,a=t.vars.onOverwrite;return a&&(s=a(t,e,i,r)),(a=D.onOverwrite)&&(n=a(t,e,i,r)),!1!==s&&!1!==n},J=function(t,e,i,r,s){var n,a,o;if(1===r||4<=r){for(o=s.length,_=0;_<o;_++)if((a=s[_])!==e)a._gc||a._kill(null,t,e)&&(n=!0);else if(5===r)break;return n}for(var l,h=e._startTime+v,f=[],u=0,p=0===e._duration,_=s.length;-1<--_;)(a=s[_])===e||a._gc||a._paused||(a._timeline!==e._timeline?(l=l||tt(e,0,p),0===tt(a,l,p)&&(f[u++]=a)):a._startTime<=h&&a._startTime+a.totalDuration()/a._timeScale>h&&((p||!a._initted)&&h-a._startTime<=2e-10||(f[u++]=a)));for(_=u;-1<--_;)if(a=f[_],2===r&&a._kill(i,t,e)&&(n=!0),2!==r||!a._firstPT&&a._initted){if(2!==r&&!K(a,e))continue;a._enabled(!1,!1)&&(n=!0)}return n},tt=function(t,e,i){for(var r=t._timeline,s=r._timeScale,n=t._startTime;r._timeline;){if(n+=r._startTime,s*=r._timeScale,r._paused)return-100;r=r._timeline}return e<(n/=s)?n-e:i&&n===e||!t._initted&&n-e<2*v?v:(n+=t.totalDuration()/t._timeScale/s)>e+v?0:n-e-v};t._init=function(){var t,e,i,r,s,n,a=this.vars,o=this._overwrittenProps,l=this._duration,h=!!a.immediateRender,f=a.ease;if(a.startAt){for(r in this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),s={},a.startAt)s[r]=a.startAt[r];if(s.overwrite=!1,s.immediateRender=!0,s.lazy=h&&!1!==a.lazy,s.startAt=s.delay=null,this._startAt=D.to(this.target,0,s),h)if(0<this._time)this._startAt=null;else if(0!==l)return}else if(a.runBackwards&&0!==l)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{for(r in 0!==this._time&&(h=!1),i={},a)q[r]&&"autoCSS"!==r||(i[r]=a[r]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&!1!==a.lazy,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=f=f?f instanceof b?f:"function"==typeof f?new b(f,a.easeParams):P[f]||D.defaultEase:D.defaultEase,a.easeParams instanceof Array&&f.config&&(this._ease=f.config.apply(f,a.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(n=this._targets.length,t=0;t<n;t++)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],o?o[t]:null,t)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,o,0);if(e&&D._onPluginEvent("_onInitAllProps",this),o&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),a.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=a.onUpdate,this._initted=!0},t._initProps=function(t,e,i,r,s){var n,a,o,l,h,f;if(null==t)return!1;for(n in I[t._fwdTweenID]&&G(),this.vars.css||t.style&&t!==_&&t.nodeType&&L.css&&!1!==this.vars.autoCSS&&function(t,e){var i,r={};for(i in t)q[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!L[i]||L[i]&&L[i]._autoCSS)||(r[i]=t[i],delete t[i]);t.css=r}(this.vars,t),this.vars)if(f=this.vars[n],q[n])f&&(f instanceof Array||f.push&&x(f))&&-1!==f.join("").indexOf("{self}")&&(this.vars[n]=f=this._swapSelfInParams(f,this));else if(L[n]&&(l=new L[n])._onInitTween(t,this.vars[n],this,s)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:1,n:n,pg:1,pr:l._priority,m:0},a=l._overwriteProps.length;-1<--a;)e[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0),h._next&&(h._next._prev=h)}else e[n]=B.call(this,t,n,"get",f,n,0,null,this.vars.stringFilter,s);return r&&this._kill(r,t)?this._initProps(t,e,i,r,s):1<this._overwrite&&this._firstPT&&1<i.length&&J(t,this,e,this._overwrite,i)?(this._kill(e,t),this._initProps(t,e,i,r,s)):(this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration)&&(I[t._fwdTweenID]=!0),o)},t.render=function(t,e,i){var r,s,n,a,o,l,h,f=this._time,u=this._duration,p=this._rawPrevTime;if(u-1e-7<=t?(this._totalTime=this._time=u,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(r=!0,s="onComplete",i=i||this._timeline.autoRemoveChildren),0===u&&(!this._initted&&this.vars.lazy&&!i||(this._startTime===this._timeline._duration&&(t=0),(p<0||t<=0&&-1e-7<=t||p===v&&"isPause"!==this.data)&&p!==t&&(i=!0,v<p&&(s="onReverseComplete")),this._rawPrevTime=a=!e||t||p===t?t:v))):t<1e-7?(this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==f||0===u&&0<p)&&(s="onReverseComplete",r=this._reversed),t<0&&(this._active=!1,0===u&&(!this._initted&&this.vars.lazy&&!i||(0<=p&&(p!==v||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||p===t?t:v))),this._initted||(i=!0)):(this._totalTime=this._time=t,this._easeType?(o=t/u,(1===(l=this._easeType)||3===l&&.5<=o)&&(o=1-o),3===l&&(o*=2),1===(h=this._easePower)?o*=o:2===h?o*=o*o:3===h?o*=o*o*o:4===h&&(o*=o*o*o*o),this.ratio=1===l?1-o:2===l?o:t/u<.5?o/2:1-o/2):this.ratio=this._ease.getRatio(t/u)),this._time!==f||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=f,this._rawPrevTime=p,X.push(this),void(this._lazy=[t,e]);this._time&&!r?this.ratio=this._ease.getRatio(this._time/u):r&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||!this._paused&&this._time!==f&&0<=t&&(this._active=!0),0===f&&(this._startAt&&(0<=t?this._startAt.render(t,e,i):s=s||"_dummyGS"),this.vars.onStart&&(0===this._time&&0!==u||e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(t<0&&this._startAt&&-1e-4!==t&&this._startAt.render(t,e,i),e||(this._time!==f||r||i)&&this._callback("onUpdate")),s&&(this._gc&&!i||(t<0&&this._startAt&&!this._onUpdate&&-1e-4!==t&&this._startAt.render(t,e,i),r&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[s]&&this._callback(s),0===u&&this._rawPrevTime===v&&a!==v&&(this._rawPrevTime=0)))}},t._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var r,s,n,a,o,l,h,f,u,p=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((x(e)||z(e))&&"number"!=typeof e[0])for(r=e.length;-1<--r;)this._kill(t,e[r],i)&&(l=!0);else{if(this._targets){for(r=this._targets.length;-1<--r;)if(e===this._targets[r]){o=this._propLookup[r]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[r]=t?this._overwrittenProps[r]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,f=t!==s&&"all"!==s&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(D.onOverwrite||this.vars.onOverwrite)){for(n in h)o[n]&&(u=u||[]).push(n);if((u||!t)&&!K(this,i,e,u))return!1}for(n in h)(a=o[n])&&(p&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,l=!0),a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),f&&(s[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},t.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],f.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-v,this.render(Math.min(0,-this._delay))),this},t._enabled=function(t,e){if(g||M.wake(),t&&this._gc){var i,r=this._targets;if(r)for(i=r.length;-1<--i;)this._siblings[i]=H(r[i],this,!0);else this._siblings=H(this.target,this,!0)}return f.prototype._enabled.call(this,t,e),!(!this._notifyPluginsOfEnabled||!this._firstPT)&&D._onPluginEvent(t?"_onEnable":"_onDisable",this)},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,r){return r.startAt=i,r.immediateRender=0!=r.immediateRender&&0!=i.immediateRender,new D(t,e,r)},D.delayedCall=function(t,e,i,r,s){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:r,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:s,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];var i,r,s,n;if(t="string"==typeof t&&D.selector(t)||t,(x(t)||z(t))&&"number"!=typeof t[0]){for(i=t.length,r=[];-1<--i;)r=r.concat(D.getTweensOf(t[i],e));for(i=r.length;-1<--i;)for(n=r[i],s=i;-1<--s;)n===r[s]&&r.splice(i,1)}else for(i=(r=H(t).concat()).length;-1<--i;)(r[i]._gc||e&&!r[i].isActive())&&r.splice(i,1);return r},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var r=D.getTweensOf(t,e),s=r.length;-1<--s;)r[s]._kill(i,t)};var et=p("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=et.prototype},!0);if(t=et.prototype,et.version="1.19.0",et.API=2,t._firstPT=null,t._addTween=B,t.setRatio=Y,t._kill=function(t){var e,i=this._overwriteProps,r=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;-1<--e;)null!=t[i[e]]&&i.splice(e,1);for(;r;)null!=t[r.n]&&(r._next&&(r._next._prev=r._prev),r._prev?(r._prev._next=r._next,r._prev=null):this._firstPT===r&&(this._firstPT=r._next)),r=r._next;return!1},t._mod=t._roundProps=function(t){for(var e,i=this._firstPT;i;)(e=t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&"function"==typeof e&&(2===i.f?i.t._applyPT.m=e:i.m=e),i=i._next},D._onPluginEvent=function(t,e){var i,r,s,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,r=s;r&&r.pr>o.pr;)r=r._next;(o._prev=r?r._prev:n)?o._prev._next=o:s=o,(o._next=r)?r._prev=o:n=o,o=a}o=e._firstPT=s}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},et.activate=function(t){for(var e=t.length;-1<--e;)t[e].API===et.API&&(L[(new t[e])._propName]=t[e]);return!0},s.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,r=t.priority||0,s=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},a=p("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){et.call(this,i,r),this._overwriteProps=s||[]},!0===t.fwd_global),o=a.prototype=new et(i);for(e in(o.constructor=a).API=t.API,n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,et.activate([a]),a},o=_._fwd_fwdQueue){for(h=0;h<o.length;h++)o[h]();for(t in w)w[t].func||_.console.log("FWDAnimation encountered missing dependency: "+t)}g=!1}}("undefined"!=typeof fwd_module&&fwd_module.exports&&"undefined"!=typeof fwd_global?fwd_global:this||window,"FWDAnimation"));/* Thumb */
(function (window){
	
	var FWDConsole = function(){
		
		var self  = this;
		var prototype = FWDConsole.prototype;
		
		this.main_do = null;
	
		this.init = function(){
			this.setupScreen();

			window.onerror = this.showError;
			this.screen.style.zIndex = 10000009;
			setTimeout(this.addConsoleToDom, 100);
			setInterval(this.position, 100);
		};
		
		this.position = function(){
			var scrollOffsets = FWDIGPUtils.getScrollOffsets();
			self.setX(scrollOffsets.x);
			self.setX(100);
			self.setY(scrollOffsets.y);
		};
		
		this.addConsoleToDom  = function(){
			if(navigator.userAgent.toLowerCase().indexOf("msie 7") != -1){
				document.getElementsByTagName("body")[0].appendChild(self.screen);
			}else{
				document.documentElement.appendChild(self.screen);
			}
		};
		
		/* setup screens */
		this.setupScreen = function(){
			this.main_do = new FWDIGPDisplayObject("div", "absolute");
			this.main_do.setOverflow("auto");
			this.main_do.setWidth(200);
			this.main_do.setHeight(300);
			this.setWidth(200);
			this.setHeight(300);
			this.main_do.setBkColor("#FFFFFF");
			this.addChild(this.main_do);
		};
		
		this.showError = function(message, url, linenumber) {
			var currentInnerHTML = self.main_do.getInnerHTML() + "<br>" + "JavaScript error: " + message + " on line " + linenumber + " for " + url;
			self.main_do.setInnerHTML(currentInnerHTML);
			self.main_do.screen.scrollTop = self.main_do.screen.scrollHeight;
		};
		
		this.log = function(message){
			var currentInnerHTML = self.main_do.getInnerHTML() + "<br>" + message;
			self.main_do.setInnerHTML(currentInnerHTML);  
			self.main_do.getScreen().scrollTop = 10000;
		};
		
		this.init();
	};
	
	/* set prototype */
    FWDConsole.setPrototype = function(){
    	FWDConsole.prototype = new FWDIGPDisplayObject("div", "absolute");
    };
    
    FWDConsole.prototype = null;
	window.FWDConsole = FWDConsole;
}(window));/**
 * Infinite Grid Pro PACKAGED v3.0
 * Main class.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function (window){
	
	'use strict';

	var FWDIGP = function(props){
		
		var _s = this;
		
		// Initialize.
		_s.init = function(){
			
			FWDTweenLite.ticker.useRAF(true);
			_s.props = props;
			
			_s.listeners = {events_ar:[]};
			_s.fontIcon = props.fontIcon || "fwdigpicon";
			_s.mustHaveHolderDiv_bl = false;
			_s.instName = _s.props.instanceName;
			
			_s.displayType = props.displayType || FWDIGP.RESPONSIVE;
			_s.displayType = _s.displayType.toLowerCase();
			
			if(_s.displayType.toLowerCase() != FWDIGP.RESPONSIVE 
			   && _s.displayType.toLowerCase() != FWDIGP.FULL_SCREEN
			   && _s.displayType.toLowerCase() != FWDIGP.FLUID_WIDTH
			   && _s.displayType.toLowerCase() != FWDIGP.AFTER_PARENT
			   && _s.displayType.toLowerCase() != FWDIGP.FLUID_WIDTH_AND_HEIGHT){
				_s.displayType = FWDIGP.RESPONSIVE;
			}

			_s.mainFolderPath = _s.props.mainFolderPath;
			if(!_s.mainFolderPath){
				alert("The mainFolderPath property is not defined in the constructor function!");
				return;
			}
			
			if((_s.mainFolderPath.lastIndexOf("/") + 1) != _s.mainFolderPath.length){
				_s.mainFolderPath += "/";
			}
			
			_s.skinPath = _s.mainFolderPath + "skin/";
			_s.warningIconPath = _s.skinPath + "/warning.png"
			
			if(!_s.props.instanceName){
				alert("FWDIGP instance name is required please make sure that the instanceName parameter exsists and it's value is uinique.");
				return;
			}
			
			if(window[_s.instName]){
				alert("FWDIGP instance name " + _s.instName +  " is already defined and contains a different instance reference, set a different instance name.");
				return;
			}else{
				window[_s.instName] = _s;
			}
		
			if(!_s.props){
				alert("FWDIGP constructor properties object is not defined!");
				return;
			}
			
			if(_s.displayType != FWDIGP.FULL_SCREEN) _s.mustHaveHolderDiv_bl = true;
			
			if(!_s.props.parentId && _s.mustHaveHolderDiv_bl){		
				alert("Property parentId is not defined in the FWDIGP constructor, _s property represents the div id into which the megazoom is added as a child!");
				return;
			}
			
			if(_s.mustHaveHolderDiv_bl && !FWDIGPUtils.getChildById(_s.props.parentId)){
				alert("FWDIGP parent div is not found, please make sure that the div exsists and the id is correct! " + _s.props.parentId);
				return;
			}
		
			_s.body = document.getElementsByTagName("body")[0];
			_s.stageContainer = null;
			
			if(_s.displayType == FWDIGP.FULL_SCREEN){
				_s.stageContainer = _s.body;
			}else{	
				_s.stageContainer = FWDIGPUtils.getChildById(_s.props.parentId);
			}
			
			_s.refDiv = FWDIGPUtils.getChildById(_s.props.parentId);
			_s.backgroundColor = _s.props.backgroundColor || "transparent";
			_s.lightBoxBackgroundColor = _s.props.lightMainBoxBackgroundColor || "transparent";
			
			_s.initializeOnlyWhenVisible_bl = _s.props.initializeOnlyWhenVisible == "yes" ? true : false;
			_s.stageWidth = 0;
			_s.stageHeight = 0;
			_s.pageXOffset = window.pageXOffset;
			_s.pageYOffset = window.pageYOffset;
			_s.maxWidth = _s.props.maxWidth || 640;
			_s.maxHeight = _s.props.maxHeight || 380;
			_s.offsetWidth = _s.props.offsetWidth || 600;
			_s.minHeight = _s.props.minHeight || 400;
			_s.zIndex = _s.props.zIndex;
			_s.orintationChanceComplete_bl = true;
			_s.paralax_bl = _s.props.paralax == "yes" ? true : false;
			_s.autoScale_bl = _s.props.autoScale == "yes" ? true : false;
			_s.isMobile_bl = FWDIGPUtils.isMobile;
	    	_s.hasPointerEvent_bl = FWDIGPUtils.hasPointerEvent;
	    	_s.isReady_bl = false;

	    	if(_s.initializeOnlyWhenVisible_bl){
	    		
				_s.startResizeHandler();
				_s.resizeHandler();
				window.addEventListener("scroll", _s.onInitlalizeScrollHandler);
				setTimeout(_s.onInitlalizeScrollHandler, 500);
			}else{
				_s.setupGrid();
			}
		};


		// Initialize when visible.
		_s.onInitlalizeScrollHandler = function(){

			var scrollOffsets = FWDIGPUtils.getScrollOffsets();
			_s.pageXOffset = scrollOffsets.x;
			_s.pageYOffset = scrollOffsets.y;
		
			if(_s.stageContainer.getBoundingClientRect().top <=_s.ws.h){
				window.removeEventListener("scroll", _s.onInitlalizeScrollHandler);
				_s.setupGrid();
			}
		};


		// Setup grid.
		_s.setupGrid = function(){
			if(_s.main_do) return;
			_s.setupMainDo();
			_s.setupInfo();
			_s.setupData();
			_s.startResizeHandler();
			_s.resizeHandler();
			_s.checkParalaxOnScroll();
		}
		

		// Paralax.
		_s.checkParalaxOnScroll = function(){
			if(_s.paralax_bl){
				window.addEventListener("scroll", _s.checkVisisbility);
				_s.checkVisisbility();
			}
		}

		_s.stopParalaxOnScroll = function(){
			if(_s.paralax_bl){
				window.removeEventListener("scroll", _s.checkVisisbility);
				_s.stopRAF();
			}
		}

		_s.checkVisisbility =  function(e){
			var so = FWDIGPUtils.getScrollOffsets();
			_s.pageXOffset = so.x;
			_s.pageYOffset = so.y;
			if((_s.main_do.getRect().top >= -_s.stageHeight && _s.main_do.getRect().top < _s.ws.h)){
				if(_s.paralax_bl){
					_s.startRAF();
					clearTimeout(_s.pr_to);
					_s.pr_to = setTimeout(function(){
						_s.stopRAF();
					}, 1000);
				}
				_s.isVisible_bl = true;
			}else{
				_s.isVisible_bl = false;
			}
		}

		_s.stopRAF = function(){
			cancelAnimationFrame(_s.myReq);
		}

		_s.startRAF = function(){
			function step() {
				var pos = _s.main_do.getRect().top/2;
				if(pos > 0){
					pos = 0;
				}
				pos *= -1;

				if(_s.thumbsManager_do){
					if(_s.main_do.getRect().top >= -_s.stageHeight && _s.main_do.getRect().top < _s.ws.h){
						if(FWDIGPUtils.hasTransform3d){
							_s.thumbsManager_do.screen.style.transform = 'translate3d(0, ' + pos + 'px' + ', 0)';
						}else{
							_s.thumbsManager_do.setY(pos);
						}

						_s.offsetParalaxPos = pos;

						_s.preloader_do.positionAndResize();
						
					}
				}
				_s.myReq = requestAnimationFrame(step);
			}
			
			cancelAnimationFrame(_s.myReq);
			_s.myReq = requestAnimationFrame(step);
		}

		
		// Setup main do.
		_s.setupMainDo = function(){
			_s.main_do = new FWDIGPDisplayObject("div", "relative");
			_s.main_do.screen.className = "fwdigp";
			_s.main_do.getStyle().msTouchAction = "none";
			_s.main_do.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)";
			_s.main_do.getStyle().webkitFocusRingColor = "rgba(0, 0, 0, 0)";
			_s.main_do.getStyle().width = "100%";
			_s.main_do.getStyle().height = "100%";
			_s.main_do.setBkColor(_s.backgroundColor);
			if(!FWDIGPUtils.isMobile || (FWDIGPUtils.isMobile && FWDIGPUtils.hasPointerEvent)) _s.main_do.setSelectable(false);

			_s.main_do.screen.className = "fwdigp";

			if(_s.displayType == FWDIGP.FLUID_WIDTH_AND_HEIGHT){
				_s.main_do.screen.className = _s.main_do.screen.className + ' clear-padding';
			}
			
			_s.videoHolder_do = new FWDIGPDisplayObject("div");
			_s.main_do.addChild(_s.videoHolder_do);
			
			if(_s.displayType == FWDIGP.FULL_SCREEN || _s.displayType == FWDIGP.FLUID_WIDTH || _s.displayType == FWDIGP.FLUID_WIDTH_AND_HEIGHT){	
				_s.main_do.getStyle().position = "absolute";
				document.documentElement.appendChild(_s.main_do.screen);

				if(_s.displayType == FWDIGP.FULL_SCREEN){
					_s.main_do.getStyle().zIndex = "9999999999998";
					_s.stageContainer.style.height = "500px";
				}
				if(_s.displayType == FWDIGP.FLUID_WIDTH ||  _s.displayType == FWDIGP.FLUID_WIDTH_AND_HEIGHT){
					if(_s.zIndex) _s.main_do.getStyle().zIndex = _s.zIndex;
					_s.stageContainer.style.height = "500px";
				}
				_s.stageContainer.style.overflow = "hidden";
			}else{
				_s.stageContainer.appendChild(_s.main_do.screen);
			}	
		};
		
	
		// Setup info window.
		_s.setupInfo = function(){
			FWDIGPInfo.setPrototype();
			_s.info_do = new FWDIGPInfo(_s, _s.warningIconPath);
		};	
		
		
		// Resize handler.
		_s.startResizeHandler = function(){
			if(_s.setStartResizeHandler) return;
			_s.startResizeHandler2();
			
			_s.resizeHandlerId2_to = setTimeout(function(){_s.resizeHandler();}, 50);
			if(_s.displayType == FWDIGP.FLUID_WIDTH || _s.displayType == FWDIGP.FLUID_WIDTH_AND_HEIGHT) _s.resizeHandlerId1_to = setTimeout(function(){_s.resizeHandler(true);}, 800);

			if(_s.displayType == FWDIGP.FLUID_WIDTH || _s.displayType == FWDIGP.FLUID_WIDTH_AND_HEIGHT){
				_s.countInterval = 0;
				_s.ctId_to = setInterval(function(){
					if(!_s) return false;
					_s.resizeHandler()
					if(_s.countInterval > 400) clearInterval(_s.ctId_to);
					_s.countInterval ++;
				});
			}
			_s.setStartResizeHandler = true;
		};


		_s.startResizeHandler2 = function(){
			window.addEventListener("resize", _s.onResizeHandler);
			window.addEventListener("scroll", _s.onScrollHandler);
		}

		_s.stopResizeHandler = function(){
			window.removeEventListener("resize", _s.onResizeHandler);
			window.removeEventListener("scroll", _s.onScrollHandler);
		}
		
		_s.onResizeHandler = function(e){
			if(_s.isMobile_bl){
				clearTimeout(_s.resizeHandlerId2_to);
				_s.resizeHandlerId2_to = setTimeout(function(){_s.resizeHandler();}, 200);
			}else{
				_s.resizeHandler();
			}	
		};
		
		_s.onScrollHandler = function(e){
			_s.scrollHandler();
		};
		
		
		// Resize and scroll handler.
		_s.scrollHandler = function(){
			if(!_s.orintationChanceComplete_bl) return;
			_s.scrollOffsets = FWDIGPUtils.getScrollOffsets();
		
			_s.pageXOffset = _s.scrollOffsets.x;
			_s.pageYOffset = _s.scrollOffsets.y;
			if(!_s.main_do) return;
			
			if(_s.isFullScreen_bl || _s.displayType == FWDIGP.FULL_SCREEN){	
				_s.main_do.setX(_s.pageXOffset);
				_s.main_do.setY(_s.pageYOffset);
			}else if(_s.displayType == FWDIGP.FLUID_WIDTH || _s.displayType == FWDIGP.FLUID_WIDTH_AND_HEIGHT){	
				if(_s.isMobile_bl){
					clearTimeout(_s.scrollEndId_to);
					_s.scrollEndId_to = setTimeout(_s.resizeHandler, 200);		
				}else{
					_s.main_do.setX(_s.pageXOffset);
				}
				_s.main_do.setY(Math.round(_s.stageContainer.getBoundingClientRect().top + _s.pageYOffset));
			}
			_s.globalX = _s.main_do.getGlobalX();
			_s.globalY = _s.main_do.getGlobalY();
			if(_s.thumbsManager_do) _s.thumbsManager_do.setRect();
		};
		
		_s.resizeHandler = function(overwrite){
			if(!_s.orintationChanceComplete_bl) return;

			_s.scrollOffsets = FWDIGPUtils.getScrollOffsets();
			_s.ws = FWDIGPUtils.getViewportSize();
			var scale;
		
			_s.pageXOffset = _s.scrollOffsets.x;
			_s.pageYOffset = _s.scrollOffsets.y;
			if(!_s.main_do) return;
			if(_s.displayType == FWDIGP.FLUID_WIDTH){
				_s.stageWidth = _s.ws.w;
				_s.stageHeight = _s.ws.h;
				if (_s.autoScale_bl){
					scale = Math.min(_s.stageWidth/_s.offsetWidth, 1);
					_s.stageHeight = Math.min(parseInt(scale * _s.maxHeight), _s.maxHeight);
					if(_s.stageHeight < 300) _s.stageHeight = 300;
					_s.refDiv.style.height = _s.stageHeight + "px";
				}else{
					_s.stageHeight = _s.maxHeight;
					_s.refDiv.style.height = _s.stageHeight + "px";
				}
				if(_s.stageHeight < _s.minHeight) _s.stageHeight = _s.minHeight;
				if(_s.isMobile_bl && _s.ws.h < _s.minHeight) _s.stageHeight = _s.ws.h;
				_s.main_do.setX(_s.pageXOffset);
				_s.main_do.setY(Math.round(_s.stageContainer.getBoundingClientRect().top + _s.pageYOffset));
			}else if(_s.displayType == FWDIGP.RESPONSIVE){
				_s.stageContainer.style.width = "100%";

				if(_s.stageContainer.offsetWidth > _s.maxWidth){
					_s.stageContainer.style.width = _s.maxWidth + "px";
				}
				_s.stageWidth = _s.stageContainer.offsetWidth;
				if(_s.autoScale_bl){
					_s.stageHeight = parseInt(_s.maxHeight * Math.min(1, _s.stageWidth/_s.offsetWidth));
				}else{
					_s.stageHeight = _s.maxHeight;
				}
			
				_s.main_do.setX(0);
				_s.main_do.setY(0);

				if(_s.stageHeight < _s.minHeight) _s.stageHeight = _s.minHeight;
				if(_s.isMobile_bl && _s.ws.h < _s.minHeight) _s.stageHeight = _s.ws.h;
				_s.stageContainer.style.height = _s.stageHeight + "px";
			}else if(_s.displayType == FWDIGP.FLUID_WIDTH_AND_HEIGHT){
				_s.stageWidth = _s.ws.w;
				_s.stageHeight = _s.ws.h;
				_s.stageContainer.style.height = _s.stageHeight + "px";
				_s.main_do.setX(_s.pageXOffset);
				_s.main_do.setY(Math.round(_s.stageContainer.getBoundingClientRect().top + _s.pageYOffset));
			}else if(_s.displayType == FWDIGP.AFTER_PARENT){
				_s.stageWidth = _s.stageContainer.offsetWidth;
				_s.stageHeight = _s.stageContainer.offsetHeight;
			}else if(_s.isFullScreen_bl || _s.displayType == FWDIGP.FULL_SCREEN){	
				_s.main_do.setX(_s.scrollOffsets.x);
				_s.main_do.setY(_s.scrollOffsets.y);
				_s.stageWidth = _s.ws.w;
				_s.stageHeight = _s.ws.h;
			}else{
				_s.main_do.setX(0);
				_s.main_do.setY(0);
				_s.stageWidth = _s.ws.w;
				_s.stageHeight = _s.ws.h;
			}

			if(_s.menu_do){
				if(_s.menu_do.isShowed_bl){
					_s.menu_do.resizeAndPosition(_s.stageWidth);
				}else{
					_s.menu_do.setHeight(0);
				}
			}
			
			_s.main_do.setWidth(_s.stageWidth);
			_s.main_do.setHeight(_s.stageHeight);
			
			
			_s.globalX = _s.main_do.getGlobalX();
			_s.globalY = _s.main_do.getGlobalY();
			
			_s.positionPreloader();
			if(_s.thumbsManager_do){
				_s.thumbsManager_do.resizeAndPosition();
				_s.thumbsManager_do.setRect();
			}
		};
		
		
		// Setup context menu.
		_s.setupContextMenu = function(){
			_s.customContextMenu_do = new FWDIGPContextMenu(_s.main_do, _s._d.rightClickContextMenu);
		};
		
		
		// Setup data.
		_s.setupData = function(){
			FWDIGPData.setPrototype();
			_s._d = new FWDIGPData(_s);
			_s._d.addListener(FWDIGPData.LOAD_ERROR, _s._dLoadError);
			_s._d.addListener(FWDIGPData.LOAD_DONE, _s._dLoadComplete);	
		};
		
		_s.onLightBoxCloseButtonLoadDone = function(){
			if(_s.displayType == FWDIGP.LIGHTBOX) _s.setupLighBoxCloseButton();
		};
		
		_s._dLoadError = function(e){
			_s.main_do.addChild(_s.info_do);
			_s.info_do.showText(e.text);
		};
		
		_s._dLoadComplete = function(e){
			_s.isReady_bl = true;
			_s.startAtGallery =  _s._d.startAtGallery;
			_s.categoryId = -1;
			_s.setupPreloader();
			_s.positionPreloader();
			if(_s.displayType == FWDIGP.FULL_SCREEN){
				if(!FWDIGPUtils.hasFullScreen) _s._d.showFullScreenButton_bl = false;
			}
		
			_s.main_do.addChild(_s.preloader_do);

			if(_s._d.useVideoInThumb_bl){
				_s.loadVideoPlayer();
				return;
			}else{
				_s.setupMainStuff();
			}
		};

		// Load video player.
		_s.loadVideoPlayer = function(){
	 		if(!window['FWDEVPlayer']){
		 		var script = document.createElement('script');
				script.src = _s._d.mainFolderPath + 'rl/content/evp/java/FWDEVPlayer.js?t=' + Math.random() * 99999999;
				document.head.appendChild(script);
				script.onload = _s.videoLoadDone;
				script.onerror = _s.onVidLoadError;
			}

			_s.evp_it = setInterval(function(){
				if(window['FWDEVPlayer']){
					_s.vidHld_do = new FWDIGPTransformDisplayObject("div");
					_s.vidHld_do.getStyle().beckgroundColor = "#000";
					_s.vidHld_do.setX(-5000);
					_s.vidHld_do.setWidth(10);
					_s.vidHld_do.setHeight(10);
					_s.vidHld_do.getStyle().transformOrigin = "top left";
					_s.vidHld_do.screen.className = "video-holder";
					_s.vidHld_do.screen.setAttribute('id', _s.instName + '_evp_div')
					_s.vidHld_do.setOverflow('visible');
					clearInterval(_s.evp_it);
					_s.main_do.addChild(_s.vidHld_do);
					_s.setupMainStuff();
					_s.updateEVP("");
				}
			}, 5);
	 	}


		// Setup main instances.
		_s.setupMainStuff = function(){
			_s.setupThumbsManager();
			if(_s._d.showGalleriesMenu) _s.setupComboBox();
			_s.setupLightBox();
			_s.updateCategory(_s.startAtGallery, true);

			_s.main_do.addChild(_s.preloader_do);
			if(!_s.isMobile_bl) _s.setupContextMenu();
			

			setTimeout(function(){
				_s.preloader_do.hide(true);
			}, 500);

			_s.dispatchEvent(FWDIGP.READY);
		}


		_s.updateEVP = function(src, subSrc, vastSrc, password, thumbPreview){

			_s.src = src;
			_s.subtitleSrc = subSrc;
			_s.vdVastSrc = vastSrc;
			_s.password = password;
			_s.thumbPreview = thumbPreview;

			if(!_s.evpInst){
				_s.isLoading = true;
				_s.evpInst = true;
				FWDEVPUtils.hasTransform3d = FWDIGPUtils.hasTransform3d;
				FWDEVPUtils.hasTransform2d = FWDIGPUtils.hasTransform2d;
			
				var isPrivate = password ? 'yes' : 'no';
				var showFSB_bl = _s._d.vdShowFullScreenButton ? 'yes' : 'no';

				var pushBtns = -1;
				var startSpaceBetweenButtons = 4;
				var showVolumeButton = _s._d.vdShowVolumeButton ? 'yes' : 'no';
				var showVolumeScrubber = _s._d.vdShowVolumeScrubber ? 'yes' : 'no';

				if(FWDIGPUtils.isIOS){
					showFSB_bl = "no";
					pushBtns = -2;
					startSpaceBetweenButtons = 6;
					showVolumeButton = "no";
					showVolumeScrubber = "no";
				}
				
				new FWDEVPlayer({		

					// Main settings.
					isRL:true,
					instanceName:_s.instName + '_evp',
					parentId:_s.instName + '_evp_div',
					fontIcon:_s.fontIcon,
					mainFolderPath:_s.mainFolderPath + "rl/content/evp/",
					cls:"rl",
					displayType:'afterparent',
					delayPoster:true,
					playsinline:'no',
					skinPath:"skin",
					useVectorIcons:"yes",
					privateVideoPassword:_s.password,
					preloaderBackgroundColor: _s._d.vdPreloaderBkColor,
					preloaderFillColor: _s._d.vdPreloaderFillColor,
					startAtVideoSource:0,
					videoSource:[{source:_s.src, label:"small version", isPrivate:isPrivate}],
					posterPath:"",
					showErrorInfo:'no',
					fillEntireVideoScreen: _s._d.vdFillEntireVideoScreen ? 'yes' : 'no',
					addKeyboardSupport:_s._d.vdUseKeyboard ? 'yes' : 'no',
					autoPlay:'no',
					autoPlayText:"",
					volume:_s._d.vdVolume,
					posterBackgroundColor:"#000000",
					backgroundColor:_s._d.vdBackgroundColor,
					// Logo.
					showLogo:_s._d.vdShowLogo ? 'yes' : 'no',
					logoPath:_s._d.vdLogoPath,
					hideLogoWithController:'yes',
					logoPosition:'topRight',
					logoLink:_s._d.vdLogoLink,
					logoMargins:5,
					// Controller.
					pushBtns:pushBtns,
					showControllerWhenVideoIsStopped:'no',
					showDefaultControllerForVimeo:_s._d.vdShowDefaultControllerForVimeo ? 'yes' : 'no',
					showScrubberWhenControllerIsHidden:_s._d.vdShowScrubberWhenControllerIsHidden ? 'yes' : 'no',
					showVolumeButton: showVolumeButton,
					showVolumeScrubber: showVolumeScrubber,
					showTime:_s._d.vdShowTime ? 'yes' : 'no',
					showRewindButton:_s._d.vdShowRewindButton ? 'yes' : 'no',
					showShareButton:"no",
					showEmbedButton:"no",
					showQualityButton:'no',
					showChromecastButton:'no',
					showFullScreenButton:showFSB_bl,
					showMainScrubberToolTipLabel:_s._d.vdShowScrubberToolTipLabel ? 'yes' : 'no',
					controllerHeight:42,
					controllerHideDelay:_s._d.vdButtonsHideDelay/1000,
					startSpaceBetweenButtons:startSpaceBetweenButtons,
					spaceBetweenButtons:5,
					mainScrubberOffestTop:13,
					scrubbersOffsetWidth:3,
					timeOffsetLeftWidth:9,
					timeOffsetRightWidth:6 ,
					volumeScrubberWidth:80,
					volumeScrubberOffsetRightWidth:0,
					timeColor:_s._d.vdTimeColor,
					youtubeQualityButtonNormalColor:"#FFF",
					youtubeQualityButtonSelectedColor:"#FFF",
					scrubbersToolTipLabelBackgroundColor:_s._d.vdScrubbersToolTipLabelBackgroundColor,
					scrubbersToolTipLabelFontColor:_s._d.vdScrubbersToolTipLabelFontColor,
					// Subtitles.
					showSubtitleButton:'no',
					startAtSubtitle:1,
					subtitlesSource:[{subtitlePath:_s.subtitleSrc, subtileLabel:"test"}],
					// Playback rate/speed.
					showPlaybackRateButton:_s._d.vdShowPlaybackRateButton ? 'yes' : 'no',
					defaultPlaybackRate:'1', //0.25, 0.5, 1, 1.25, 1.5, 2
					// Audio visualizer
					audioVisualizerLinesColor:_s._d.vdAudioVisualizerLinesColor,
					audioVisualizerCircleColor:_s._d.vdAudioVisualizerCircleColor,
					// Thumbnails preview.
					thumbnailsPreview:'auto',
					thumbnailsPreviewWidth:_s._d.vdThumbnailsPreviewWidth,
					thumbnailsPreviewBackgroundColor:_s._d.vdThumbnailsPreviewBackgroundColor,
					thumbnailsPreviewBorderColor:_s._d.vdThumbnailsPreviewBorderColor,
					thumbnailsPreviewLabelBackgroundColor:_s._d.vdThumbnailsPreviewLabelBackgroundColor,
					thumbnailsPreviewLabelFontColor:_s._d.vdThumbnailsPreviewLabelFontColor,
					// Ads.
					vastSource:_s.vdVastSrc,
					openNewPageAtTheEndOfTheAds:'no',
					adsButtonsPosition:'right',
					skipToVideoText:"",
					skipToVideoButtonText:"",
					adsTextNormalColor:'#B9B9B9',
					adsTextSelectedColor:'#FFFFFF',
					adsBorderNormalColor:'#2e2e2e',
					adsBorderSelectedColor:'#FFFFFF',
					// context menu
					contextMenuType:'disabled',
					// Password window.
					embedWindowCloseButtonMargins:15,
					borderColor:"#333333",
					mainLabelsColor:"#FFFFFF",
					secondaryLabelsColor:"#a1a1a1",
					shareAndEmbedTextColor:"#5a5a5a",
					inputBackgroundColor:"#000000",
					inputColor:"#FFFFFF"
				});
				
				// Register API.
				var api_it;
				registerAPI();
				function registerAPI(){
					clearTimeout(api_it);
					_s.evp = window[_s.instName + '_evp'];

					_s.evp.inIGPGrid = true;
					_s.evp.notShowLargePlayButton_bl = false;
					if(_s.evp){
						_s.evp.addListener(FWDEVPlayer.SHOW_CURSOR, _s.evpShowCursor);
						_s.evp.addListener(FWDEVPlayer.ERROR, _s.evpError);
						_s.evp.addListener(FWDEVPlayer.STOP, _s.evpStop);
						_s.evp.addListener(FWDEVPlayer.PAUSE, _s.evpPause);
						_s.evp.addListener(FWDEVPlayer.PLAY, _s.evpPlay);
						_s.evp.addListener(FWDEVPlayer.PLAY_START, _s.evpPlayStart);
						_s.evp.addListener(FWDEVPlayer.PLAY_COMPLETE, _s.evpPlayComplete);
						_s.evp.addListener(FWDEVPlayer.START_TO_SCRUB, _s.evpStartToSrub);
						_s.evp.addListener(FWDEVPlayer.STOP_TO_SCRUB, _s.evpStopToSrub);
						_s.evp.addListener(FWDEVPlayer.GO_FULLSCREEN, _s.evpFS);
						_s.evp.addListener(FWDEVPlayer.GO_NORMALSCREEN, _s.evpNS);
					}else{
						api_it = clearTimeout(api_it, 50);
					}
				};
			}else{
				//_s.evp.notShowPlayBtnExternal = false;
				var isPrivate = _s.password ? 'yes' : 'no';
				
		
				_s.evp.prevSrc = '';
				if(_s._d.vdUseKeyboard){
					_s.evp.addKeyboardSupport();
				}else{
					_s.evp.removeKeyboardSupport();
				}

				// Set subtitle.
				_s.evp._d.subtitles_ar[0]["source"] = _s.subtitleSrc;
				_s.evp._d.thumbnailsPreview = _s.thumbPreview;
		
				// Set source.
				_s.evp._d.privateVideoPassword_str = _s.password;
				if(_s.evp.passWindow_do) _s.evp.passWindow_do.hide(true)
				_s.evp.setVideoSource(_s.src, '', '','', _s.vdVastSrc, Boolean(_s.password));

				if(_s.nextVideoAutoPlay){
  					 _s.playAudio();
  					 if(_s.type != FWDU3DCar.AUDIO){
  					 	_s.slideshowButtonDO.pause();
  					 	_s.videoStarted = true;
  					 }
  				}
			}
		}

		_s.evpShowCursor = function(){
			if(_s._d.dragDirection != "none"){
				if(_s.evp.dClk_do){
					 _s.evp.dClk_do.style().cursor = 'url(' + _s._d.handIconPath + '), default';
					 if(_s.evp.isFullScreen_bl){
					 	_s.evp.dClk_do.style().cursor = 'auto';
					 }
				}
			}
		}

		_s.evpPause = function(){
			_s.dispatchEvent(FWDIGP.THUMB_VIDEO_PAUSE);
		}

		_s.evpError = function(e){
			_s._dLoadError(e)
		}
		
		_s._dLoadError = function(e){
			_s.main_do.addChild(_s.info_do);
			_s.info_do.showText(e.error);
			
			_s.videoStarted = false;
			if(_s.evp){
				_s.evp.goNormalScreen();
			}
			if(_s.thumbsManager_do){
				_s.thumbsManager_do.thumbWithVideo.showPlayButton();
				_s.thumbsManager_do.thumbWithVideo.removeVideo();
			}
			_s.dispatchEvent(FWDIGP.ERROR, {error:e.error});
		};

		_s.evpStop = function(){
			_s.videoStarted = false;
			_s.dispatchEvent(FWDIGP.THUMB_VIDEO_STOP);
		}

		_s.evpPlayStart = function(){
			_s.thumbsManager_do.setVisitedThumbnail(_s.evp.thumbSrc);
			_s.dispatchEvent(FWDIGP.THUMB_VIDEO_START);
		}

		_s.evpPlay = function(){
			_s.wasPlaying = true;
			_s.dispatchEvent(FWDIGP.THUMB_VIDEO_PLAY);
		};

		_s.evpPlayComplete = function(){
			if(!_s.evp) return;
			_s.videoStarted = false;
			_s.evp.goNormalScreen();
			_s.thumbsManager_do.thumbWithVideo.showPlayButton();
			_s.thumbsManager_do.thumbWithVideo.removeVideo();
			_s.thumbsManager_do.thumbWithVideo.hideCaption(true);

			if(_s.thumbsManager_do.thumbWithVideo.isHit && !_s.mobile_bl){
				_s.thumbsManager_do.thumbWithVideo.hideOverlay(false);
				_s.thumbsManager_do.thumbWithVideo.showOverlay(true);
				_s.thumbsManager_do.thumbWithVideo.showCaption();
				_s.thumbsManager_do.thumbWithVideo.isHit = false;
				_s.thumbsManager_do.thumbWithVideo.isCaptionHidden_bl = true;
			}else{
				_s.thumbsManager_do.thumbWithVideo.hideOverlay(false);
				_s.thumbsManager_do.thumbWithVideo.isCaptionHidden_bl = true;
			}
			_s.dispatchEvent(FWDIGP.THUMB_VIDEO_PLAY_COMPLETE);
		}

		_s.evpStartToSrub = function(){
			_s.thumbsManager_do.stopToLoop();
		}	

		_s.evpStopToSrub = function(){
			if(_s.evp.isFullScreen_bl) return;
			setTimeout(function(){
				_s.thumbsManager_do.startToLoop();
			}, 500);
		}

		_s.evpFS = function(){
			_s.isFullScreen_bl = true;
			if(_s.isMobile_bl){
				_s.thumbsManager_do.removeZoomDragAndSwipeForMobile();
			}else{
				_s.thumbsManager_do.removeDragAndScrollForDesktop();
				_s.thumbsManager_do.removeAutoScrollSupport(true);
				_s.thumbsManager_do.removeDesktopZoomSupport();
			}
			
			_s.evp.dClk_do.style().cursor = 'auto';
			_s.thumbsManager_do.stopToLoop();
			_s.stopResizeHandler();
			_s.dispatchEvent(FWDIGP.GO_FULLSCREEN);
		};

		_s.evpNS = function(e){
			_s.isFullScreen_bl = false;
			setTimeout(function(){
				if(_s.isMobile_bl){
					_s.thumbsManager_do.addZoomDragAndSwipeForMobile();
				}else{
					if(_s.thumbsManager_do.addDragAndSwipeSupport_bl) _s.thumbsManager_do.addDragAndScrollForDesktop();
					if(_s.thumbsManager_do.addZoomSupport_bl) _s.thumbsManager_do.addDesktopZoomSupport();
				}
				_s.thumbsManager_do.startToLoop();
				_s.startResizeHandler2();
			}, 50);
			_s.dispatchEvent(FWDIGP.GO_NORMALSCREEN);
		};


		// Setup preloader.
		_s.setupPreloader = function(){
			
			FWDIGPSP.setPrototype();
			_s.preloader_do = new FWDIGPSP(
				_s, 
				'center',
				_s._d.slideshowRadius, 
				_s._d.preloaderBackgroundColor, 
				_s._d.preloaderFillColor, 
				_s._d.slideshowStrokeSize, 
				1);
			_s.preloader_do.screen.className = 'none';
			_s.preloader_do.show(true);
			_s.preloader_do.startPreloader();
			
			_s.main_do.addChild(_s.preloader_do);
		};
		
		_s.positionPreloader = function(){
			if(_s.preloader_do){
				_s.preloader_do.positionAndResize();
			}
		};
		
		_s.onPreloaderHideCompleteHandler = function(){
			_s.main_do.removeChild(_s.preloader_do);
		};
		
		
		// Setup thumbs manager.
		_s.setupThumbsManager = function(id){	
			FWDIGPThumbsManager.setPrototype();
			_s.thumbsManager_do = new FWDIGPThumbsManager(_s._d, _s);
			_s.thumbsManager_do.addListener(FWDIGPThumb.MOUSE_UP, _s.onThumbMouseUpHandler);
			_s.thumbsManager_do.addListener(FWDIGPData.LOAD_ERROR, _s.onThumbsManagerLoadError);
			
			_s.main_do.addChild(_s.thumbsManager_do);
		};
		
		_s.onThumbsManagerLoadError = function(e){
			_s.main_do.addChild(_s.info_do);
			_s.info_do.showText(e.text);
		};
		
		_s.onThumbMouseUpHandler = function(e){
			if(!_s.rl) return;
			var rlObj = "fwdigp" + e.categoryId + '_';

			window[rlObj] = _s._d.lightboxAr[e.categoryId];
			_s.thumbsManager_do.stopToLoop();
			_s.rl.show(rlObj, e.id);
		};

		
		// Setup combobox.
		_s.setupComboBox = function(){
			FWDIGPComboBox.setPrototype();
			_s.comboBox_do = new FWDIGPComboBox(_s._d, _s);
			_s.comboBox_do.addListener(FWDIGPComboBox.MOUSE_UP, _s.onComboboxButtonPressedHandler);
			_s.main_do.addChild(_s.comboBox_do);
		};
		
		_s.onComboboxButtonPressedHandler = function(e){
			_s.updateCategory(e.id);
		};
		
	
		// Setup lightbox.
		_s.setupLightBox = function(){
			if(!_s._d.useLightbox_bl) return;

			var rlInst = FWDIGPUtils.getHashParam('rlinst');
			var isThisRL = rlInst ? rlInst.match(/fwdigp/) : false;
			if(rlInst) rlInst = rlInst.match(/\d+/g)[1];
			var guid = FWDIGPUtils.getHashParam('rlguid');
			var isThisGuid = guid ? guid.match(/fwdigp/) : false;
			if(!isThisGuid && _s._d.useDeepLinking) return;

			if(rlInst){
				if(guid && rlInst == _s.instCountId && isThisRL){
					_s.startAtGallery = guid.match(/\d+/g)[1];
					window["fwdigp" + _s.startAtGallery + '_'] = _s._d.lightboxAr[_s.startAtGallery];
					if(_s.comboBox_do) _s.comboBox_do.curId = _s.startAtGallery;
				}
			}else if(guid){
				if(isThisGuid){
					_s.startAtGallery = guid.match(/\d+/g)[0];
					window["fwdigp" + _s.startAtGallery + '_'] = _s._d.lightboxAr[_s.startAtGallery];
					if(_s.comboBox_do) _s.comboBox_do.curId = _s.startAtGallery;
				}
			}

			if(!FWDIGP.hasLoadRL && !window['FWDRL']){
				var script = document.createElement('script');
				script.src = _s._d.mainFolderPath + 'rl/java/FWDRL.js';
				document.head.appendChild(script);
				script.onerror = _s.rlLoadError;
				script.onload = _s.rlLoadDone;
			}

			_s.rl_it = setInterval(function(){
				if(FWDIGP.hasRL || window['FWDRL']){
					_s.initializeRL();
					clearInterval(_s.rl_it);
				}
			}, 5);

			FWDIGP.hasLoadRL = true;
		};

		_s.rlLoadDone = function(){
	 		FWDIGP.hasRL = true;
	 	}

	 	_s.initializeRL = function(){

	 		if(_s._d.useVideoInThumb_bl){
	 			FWDRL.hasLoadEVP = true;
	 		}
	 
	 		new FWDRL({	
				// General settings.
				instanceName:_s.instName + '_rl',
				mainFolderPath:_s.mainFolderPath + "/rl/content",
				cls:"rl",
				fontIcon:_s.fontIcon,
				rightClickContextMenu:_s._d.rightClickContextMenu,
				useDeepLinking:_s._d.rlUseDeepLinking,
				useVectorIcons:true,
				buttonsAlignment:_s._d.rlButtonsAlignment,
				mediaLazyLoading:_s._d.rlMediaLazyLoading,
				useDrag:_s._d.rlUseDrag,
				useAsModal:_s._d.rlUseAsModal,
				showSlideShowButton:_s._d.rlShowSlideShowButton,
				showSlideShowAnimation:_s._d.rlShowSlideShowAnimation,
				slideShowAutoPlay:_s._d.rlSlideShowAutoPlay,
				slideShowAutoStop:_s._d.rlSlideShowAutoStop,
				slideShowDelay:_s._d.rlSlideShowDelay,
				slideShowBkColor:_s._d.rlSlideShowBkColor,
				slideShowFillColor:_s._d.rlSlideShowFillColor,
				useKeyboard:_s._d.rlUseKeyboard,
				useDoubleClick:_s._d.rlUseDoubleClick,
				showCloseButton:_s._d.rlShowCloseButton,
				showFullscreenButton:_s._d.rlShowFullscreenButton,
				showZoomButton:_s._d.rlShowZoomButton,
				showCounter:_s._d.rlShowCounter,
				showNextAndPrevBtns:_s._d.rlShowNextAndPrevBtns,
				maxZoom:_s._d.rlMaxZoom,
				buttonsHideDelay:_s._d.rlButtonsHideDelay,
				defaultItemWidth:_s._d.rlDefaultItemWidth,
				defaultItemHeight:_s._d.rlDefaultItemHeight,
				itemOffsetHeight:_s._d.rlItemOffsetHeight,
				itemOffsetHeightButtonsTop:_s._d.rlItemOffsetHeightButtonsTop,
				spaceBetweenBtns:_s._d.rlSpaceBetweenBtns,
				buttonsOffsetIn:_s._d.rlButtonsOffsetIn,
				buttonsOffsetOut:_s._d.rlButtonsOffsetOut,
				itemBorderSize:_s._d.rlItemBorderSize,
				startSpaceBetweenButtons: 2,
				itemBackgroundColor:_s._d.rlItemBackgroundColor,
				itemBorderColor:_s._d.rlItemBorderColor,
				preloaderBkColor:_s._d.rlPreloaderBkColor,
				preloaderFillColor:_s._d.rlPreloaderFillColor,
				backgroundColor:_s._d.rlBackgroundColor,
				shareButtons:_s._d.rlShareButtons,
				shareText:_s._d.rlShareText,
				sharedURL:_s._d.rlSharedURL,
				shareMainBackgroundColor:_s._d.rlShareMainBackgroundColor,
				shareBackgroundColor:_s._d.rlShareBackgroundColor,
				showThumbnails:_s._d.rlShowThumbnails,
				showThumbnailsIcon:_s._d.rlShowThumbnailsIcon,
				thumbnailsHeight:_s._d.rlThumbnailsHeight,
				thumbnailsOverlayColor:_s._d.rlThumbnailsOverlayColor,
				thumbnailsBorderSize:_s._d.rlThumbnailsBorderSize,
				thumbnailsBorderColor:_s._d.rlThumbnailsBorderColor,
				spaceBetweenThumbnailsAndItem:_s._d.rlSpaceBetweenThumbnailsAndItem,
				thumbnailsOffsetBottom:_s._d.rlThumbnailsOffsetBottom,
				spaceBetweenThumbnails:_s._d.rlSpaceBetweenThumbnails,
				caption:_s._d.rlShowCaption,
				captionPosition:_s._d.rlCaptionPosition,
				showCaptionOnSmallScreens:_s._d.rlShowCaptionOnSmallScreens,
				captionAnimationType:_s._d.rlCaptionAnimationType,
				useVideo:_s._d.rlUseVideo,
				fillEntireScreenWithPoster:_s._d.rlFillEntireScreenWithPoster,
				fillEntireVideoScreen:_s._d.rlFillEntireVideoScreen,
				volume:_s._d.rlVolume,
				videoAutoPlay:_s._d.rlVideoAutoPlay,
				nextVideoAutoPlay:_s._d.rlNextVideoAutoPlay,
				videoAutoPlayText:_s._d.rlVideoAutoPlayText,
				showLogo:_s._d.rlShowLogo,
				logoPath:_s._d.rlLogoPath,
				logoLink:_s._d.rlLogoLink,
				showControllerWhenVideoIsStopped:_s._d.rlShowControllerWhenVideoIsStopped,
				showDefaultControllerForVimeo:_s._d.rlShowDefaultControllerForVimeo,
				showScrubberWhenControllerIsHidden:_s._d.rlShowScrubberWhenControllerIsHidden,
				showRewindButton:_s._d.rlShowRewindButton,
				showVolumeButton:_s._d.rlShowVolumeButton,
				showTime:_s._d.rlShowTime,
				timeColor:_s._d.rlTimeColor,
				showChromecastButton:_s._d.rlShowChromecastButton,
				showPlaybackRateButton:_s._d.rlShowPlaybackRateButton,
				showQualityButton:_s._d.rlShowQualityButton,
				showFullScreenButton:_s._d.rlVideoShowFullScreenButton_bl,
				showScrubberToolTipLabel:_s._d.rlShowScrubberToolTipLabel,
				youtubeQualityButtonNormalColor:_s._d.rlYoutubeQualityButtonNormalColor,
				youtubeQualityButtonSelectedColor:_s._d.rlYoutubeQualityButtonSelectedColor,
				scrubbersToolTipLabelBackgroundColor:_s._d.rlScrubbersToolTipLabelBackgroundColor,
				scrubbersToolTipLabelFontColor:_s._d.rlScrubbersToolTipLabelFontColor,
				audioVisualizerLinesColor:_s._d.rlAudioVisualizerLinesColor,
				audioVisualizerCircleColor:_s._d.rlAudioVisualizerCircleColor,
				thumbnailsPreviewWidth:_s._d.rlThumbnailsPreviewWidth,
				thumbnailsPreviewBackgroundColor:_s._d.rlThumbnailsPreviewBackgroundColor,
				thumbnailsPreviewBorderColor:_s._d.rlThumbnailsPreviewBorderColor,
				thumbnailsPreviewLabelBackgroundColor:_s._d.rlThumbnailsPreviewLabelBackgroundColor,
				thumbnailsPreviewLabelFontColor:_s._d.rlThumbnailsPreviewLabelFontColor,
				skipToVideoText:_s._d.rlSkipToVideoText,
				skipToVideoButtonText:_s._d.rlSkipToVideoButtonText
			});
			
	 		_s.rl = window[_s.instName + '_rl'];
	 		
	 		_s.rl.addListener(FWDRL.SHOW_START, function(){
	 			if(_s.evp){
	 				_s.isEvpPlaying = _s.evp.isPlaying_bl;
	 				_s.isEvpKeyboardSUpported_bl = _s.evp._d.addKeyboardSupport_bl;
	 				_s.evp._d.addKeyboardSupport_bl = false;
	 				_s.evp.pause();
	 			}

	 			FWDIGP.rlShowed = true;
	 			_s.dispatchEvent(FWDIGP.LIGHTBOX_SHOW_START);
	 			if(_s.evp) _s.evp.pause();
	 		});

	 		_s.rl.addListener(FWDRL.SHOW_COMPLETE, function(){
	 			_s.dispatchEvent(FWDIGP.LIGHTBOX_SHOW_COMPLETE);
	 		});

	 		_s.rl.addListener(FWDRL.HIDE_START, function(){
	 			_s.dispatchEvent(FWDIGP.LIGHTBOX_HIDE_START);
	 		});

	 		_s.rl.addListener(FWDRL.HIDE_COMPLETE, function(){
	 			FWDIGP.rlShowed = false;
	 			if(_s.evp){
	 				if(_s.isEvpPlaying){
	 					_s.evp.play();
	 				}
	 				_s.evp._d.addKeyboardSupport_bl = _s.isEvpKeyboardSUpported_bl;
	 			}
	 			_s.thumbsManager_do.startToLoop();
				_s.dispatchEvent(FWDIGP.LIGHTBOX_HIDE_COMPLETE);
	 		});

	 		_s.rl.addListener(FWDRL.UPDATE_ITEM, function(e){	
	 			_s.thumbsManager_do.setVisitedThumbnail(_s._d.lightboxAr[_s.categoryId].playlistItems[e.curId].thumbSrc);
	 		});
	 	}
				
		
		// API.
		_s.updateCategory = function(id, overwrite){
			
			if(!_s.isReady_bl || _s.thumbsManager_do.isCategoryChanging_bl || _s.categoryId == id) return;
				
			_s.categoryId = id;
			if(_s.categoryId >= _s._d.totalGalleries){
				_s.categoryId = _s._d.totalGalleries -1;
			}else if(_s.categoryId < 0){
				_s.categoryId = 0;
			}

			_s.isEvpPlaying = false;
			if(_s.comboBox_do) _s.comboBox_do.setButtons(_s.categoryId);
			
			_s.thumbsManager_do.updateCategory(_s._d.dataListAr[_s.categoryId]);

			setTimeout(function(){_s.dispatchEvent(FWDIGP.CATEGORY_UPDATE);}, 50);
		};
		
		_s.getCategoryId = function(){
			return _s.categoryId;
		};
		
		_s.getCategoryName = function(id){
			if(id === undefined) id = _s.categoryId;
			return _s._d.categoriesAr[id];
		};
	
		
		// Event dispatcher.
		_s.addListener = function (type, listener){
		    	
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function.");
	    	
	    	
	        var event = {};
	        event.type = type;
	        event.listener = listener;
	        event.target = _s;
	        _s.listeners.events_ar.push(event);
	    };
		    
	    _s.dispatchEvent = function(type, props){
	    	if(_s.listeners == null) return;
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	
	        for (var i=0, len=_s.listeners.events_ar.length; i < len; i++){
	        	if(_s.listeners.events_ar[i].target === _s && _s.listeners.events_ar[i].type === type){		
	    	        if(props){
	    	        	for(var prop in props){
	    	        		_s.listeners.events_ar[i][prop] = props[prop];
	    	        	}
	    	        }
	        		_s.listeners.events_ar[i].listener.call(_s, _s.listeners.events_ar[i]);
	        	}
	        }
		    };
		    
		   _s.removeListener = function(type, listener){
		    	
		    	if(type == undefined) throw Error("type is required.");
		    	if(typeof type === "object") throw Error("type must be of type String.");
		    	if(typeof listener != "function") throw Error("listener must be of type Function." + type);
		    	
		        for (var i=0, len=_s.listeners.events_ar.length; i < len; i++){
		        	if(_s.listeners.events_ar[i].target === _s 
		        			&& _s.listeners.events_ar[i].type === type
		        			&& _s.listeners.events_ar[i].listener ===  listener
		        	){
		        		_s.listeners.events_ar.splice(i,1);
		        		break;
		        	}
		        }  
		    };
		
		// Initialize.
		_s.init();
	};
	
	
	FWDIGP.THUMB_VIDEO_STOP ="thumbVideoStop";
	FWDIGP.THUMB_VIDEO_START ="thumbVideoStart";
	FWDIGP.THUMB_VIDEO_PAUSE ="thumbVideoPause";
	FWDIGP.THUMB_VIDEO_PLAY = "thumbVideoPlay";
	FWDIGP.THUMB_VIDEO_PLAY_COMPLETE = "thumbVideoPlayComplete";
	FWDIGP.GO_FULLSCREEN = "goFullScreen";
	FWDIGP.GO_NORMALSCREEN = "goNormalScreen";
	FWDIGP.ERROR = "error";
	FWDIGP.READY = "ready";
	FWDIGP.VIDEO_IN_THUMB = "videoInThumb";
	FWDIGP.LIGHTBOX_SHOW_START = "showStart";
	FWDIGP.LIGHTBOX_SHOW_COMPLETE = "showComplete";
	FWDIGP.LIGHTBOX_HIDE_START = "hideStart";
	FWDIGP.LIGHTBOX_HIDE_COMPLETE = "hideComplete";
	FWDIGP.CATEGORY_UPDATE = "categoryUpdate";
	FWDIGP.FULL_SCREEN = "fullscreen";
	FWDIGP.LIGHTBOX = "lightbox";
	FWDIGP.RESPONSIVE = "responsive";
	FWDIGP.FLUID_WIDTH = "fluidwidth";
	FWDIGP.FLUID_WIDTH_AND_HEIGHT = "fluidwidthandheight"
	FWDIGP.AFTER_PARENT = "afterparent";
	FWDIGP.IFRAME = "iframe";
	FWDIGP.IMAGE = "image";
	FWDIGP.FLASH = "flash";
	FWDIGP.AUDIO = "audio";
	FWDIGP.VIDEO = "video";
	FWDIGP.VIMEO = "vimeo";
	FWDIGP.YOUTUBE = "youtube";
	FWDIGP.MAPS = "maps";
	FWDIGP.LINK = "link";
	FWDIGP.NONE = "none";
	
	
	window.FWDIGP = FWDIGP;
	
}(window));/**
 * Infinite Grid Pro PACKAGED v3.0
 * Categories select box.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */ 
 
(function (window){

	'use strict';
	
	var FWDIGPComboBox = function(_d, prt){
		
		var _s = this;
		var prototype = FWDIGPComboBox.prototype;
		
		_s.categoriesAr = _d.categoriesAr;
		_s.buttons_ar = [];
		_s.buttonsOriginal_ar = [];
		_s.spacers_ar = [];
		_s.comboboxSelectorLabel = _d.galleriesMenuSelectLabel;
		_s.menuButtonsSpacersClassName = _d.menuButtonsSpacersClassName;
		_s.menuButtonSpacerHeight = _d.menuButtonSpacerHeight;
		_s.curId = _d.startAtGallery;
		_s.totalButtons = _s.categoriesAr.length;
		_s.selectorOriginalWidth = 0;
		_s.stageWidth = 0;
		_s.stageHeight = 0;
		_s.isComboboxShowed_bl = false;
		_s.showAllCategories2_bl = false;
		_s.showMenuButtonsSpacers_bl = _d.showMenuButtonsSpacers_bl;
		_s.isShowed_bl = _d.showGalleriesMenu;
		_s.isMobile_bl = FWDIGPUtils.isMobile;
		_s.hasPointerEvent_bl = FWDIGPUtils.hasPointerEvent;
		

		// Intialize.
		_s.init = function(){
			_s.screen.className = 'p-selector';
			_s.setAlpha(0);
			_s.setY(100);
			FWDAnimation.to(_s, .8, {y:0, alpha:1, delay:.2, ease:Expo.easeInOut})
		
			_s.setupButtons();
			_s.setButtonsLabels();
			_s.setButtons(_s.curId);
			_s.setupSpacers();
			_s.setupCombobox();
			_s.updateMenuStyle();
			
			setTimeout(function(){
				_s.resizeAndPosition();
			}, 500);

			if(_s.categoriesAr.length <=1){
				_s.setX(-5000);
			} 

		};
		
		
		// Resize and position.
		_s.resizeAndPosition = function(){
			_s.stageWidth = prt.stageWidth;
			if(!_s.isShowed_bl || _s.stageWidth == 0) return;

			if(_s.isOpened_bl) return;
			_s.positionButtons();
		};
		
		
		// Setup combobox holders.
		_s.setupCombobox = function(){
			
			_s.mainButtonsHolder_do = new FWDIGPDisplayObject("div", 'relative');
			_s.bk_do = new FWDIGPDisplayObject("div");
			_s.bk_do.screen.className = 'p-buttons-background';
			_s.buttonsHolder_do = new FWDIGPDisplayObject("div");
			_s.buttonsHolder_do.setX(-10000);
			
			_s.arrow_do = new FWDIGPTransformDisplayObject("div");
			_s.arrow_do.setOverflow("visible");
			_s.arrow_do.setDisplay("inline-block");
			_s.arrow_do.getStyle().fontSmoothing = "antialiased";
			_s.arrow_do.getStyle().webkitFontSmoothing = "antialiased";
			_s.arrow_do.getStyle().textRendering = "optimizeLegibility";
			_s.arrow_do.getStyle().whiteSpace = "nowrap";
			_s.arrow_do.setBackfaceVisibility();
			_s.arrow_do.getStyle().padding = "";
			_s.arrow_do.getStyle().margin = "";
			_s.arrow_do.getStyle().borderRight = "2px solid";
			_s.arrow_do.getStyle().borderBottom = "2px solid";
			_s.arrow_do.getStyle().top = 0;
			_s.arrow_do.getStyle().left = 0;
			_s.arrow_do.setWidth(8);
			_s.arrow_do.setHeight(8);
			_s.arrow_do.screen.className = 'arrowNormal';
			
			FWDIGPComboBoxButton.setPrototype();
			_s.selector_do = new FWDIGPComboBoxButton(
				_s,
				"NOT DEFINED",
				10,
				'PGMenuSelectorTextNormal',
				'PGMenuSelectorTextSelected'
			);
			
			_s.selector_do.addListener(FWDIGPComboBoxButton.MOUSE_OVER, _s.selectorOverHandler);
			_s.selector_do.addListener(FWDIGPComboBoxButton.MOUSE_OUT, _s.selectorOutHandler);
			
			if(!FWDIGPUtils.isIEAndLessThen9) _s.selector_do.addChild(_s.arrow_do);
			_s.selector_do.addListener(FWDIGPComboBoxButton.MOUSE_UP, function(){
				if(_s.isComboboxShowed_bl){
					_s.closeComboBox();
				}else{
					_s.openCombobox();
				}
			});
			_s.selector_do.setLabel(_s.comboboxSelectorLabel);
			_s.selector_do.setSize();
			
			setTimeout(function(){
				_s.selector_do.getStyle().width = (_s.selector_do.getWidth() + 40) + "px";
				_s.selectorOriginalWidth = _s.selector_do.getWidth();
				
				_s.arrow_do.setRotation(45);
				_s.arrow_do.setY(Math.round(_s.selector_do.h - _s.arrow_do.h)/2 - 4);
				
			}, 60);

			_s.addChild(_s.mainButtonsHolder_do);
			_s.mainButtonsHolder_do.addChild(_s.bk_do);
			_s.mainButtonsHolder_do.addChild(_s.buttonsHolder_do);
			_s.mainButtonsHolder_do.addChild(_s.selector_do);
		};
		
		_s.selectorOverHandler = function(){
			FWDAnimation.to(_s.arrow_do.screen, .8, {className:'arrowSelected', ease:Expo.easeOut});
		};
		
		_s.selectorOutHandler = function(){
			FWDAnimation.to(_s.arrow_do.screen, .8, {className:'arrowNormal', ease:Expo.easeOut});
		};

		_s.resetButtons = function(id){
			for(var i=0; i<_s.buttons_ar.length; i++){
				var button = _s.buttons_ar[i];
				if(_s.curId != button.id){
					button.setNormalState(true);
				}
			}
		}
		
		_s.openCombobox = function(){
			if(_s.isComboboxShowed_bl) return
			_s.isComboboxShowed_bl = true;
			FWDAnimation.killTweensOf(_s.mainButtonsHolder_do);
			FWDAnimation.killTweensOf(_s.buttonsHolder_do);
			FWDAnimation.killTweensOf(_s.arrow_do);
		
			if(prt.zIndex == 0){
				_s.getStyle().zIndex = 1;
			}else{
				_s.getStyle().zIndex = prt.zIndex + 1;
			}
		
			_s.selector_do.isSelected_bl = _s.selector_do.isDisabled_bl = true;
			_s.selector_do.setSelectedState(true);
			_s.isOpened_bl = true;
			_s.buttonsHolder_do.setVisible(true);
			_s.buttonsHolder_do.setX(0);
			_s.mainButtonsHolder_do.setHeight(_s.buttonsHolder_do.h + _s.mainButtonsHolder_do.h);
			_s.selector_do.h = _s.selector_do.getHeight();
			if(!_s.buttonsHolder_do.y) _s.buttonsHolder_do.setY(-_s.buttonsHolder_do.h + _s.selector_do.h);
			FWDAnimation.to(_s.buttonsHolder_do, .8, {y:_s.selector_do.h, ease:Expo.easeInOut});
			FWDAnimation.to(_s.arrow_do, .8, {rotation:-135, y:Math.round(_s.selector_do.h - _s.arrow_do.h)/2 + 1, ease:Expo.easeInOut});
			
			_s.startToCheckMenuHit();
			_s.resetButtons();
			_s.setButtons(_s.curId);
		};
		
		_s.closeComboBox = function(e){
		
			if(!_s.isComboboxShowed_bl) return
			_s.isComboboxShowed_bl = false;
			FWDAnimation.killTweensOf(_s.buttonsHolder_do);
			FWDAnimation.killTweensOf(_s.arrow_do);
			_s.selector_do.isSelected_bl = _s.selector_do.isDisabled_bl = false;
			_s.isOpened_bl = false;

			FWDAnimation.to(_s.buttonsHolder_do, .8, {y:-_s.buttonsHolder_do.h + _s.selector_do.h - 5, ease:Expo.easeInOut});
			FWDAnimation.to(_s.mainButtonsHolder_do, .8, {h:_s.selector_do.h, ease:Expo.easeInOut, onComplete:function(){
				_s.isComboboxShowed_bl = false;
				_s.buttonsHolder_do.setVisible(false);

				if(!_s.menuHit_bl){
					if(!_s.isMobile_bl) _s.selector_do.setNormalState(true);
					FWDAnimation.to(_s.arrow_do.screen, .8, {className:'arrowNormal', ease:Expo.easeOut});
				} 
				if(_s.isMobile_bl) _s.selector_do.setNormalState(true);

			}});
			FWDAnimation.to(_s.arrow_do, .8, {rotation:45, y:Math.round(_s.selector_do.h - _s.arrow_do.h)/2 - 4, ease:Expo.easeInOut});
		};
		
		_s.startToCheckMenuHit = function(){
			if(_s.isCheckHitAdded_bl) return;
			_s.isCheckHitAdded_bl = true;
			
			if(_s.isMobile_bl){
				setTimeout(function(){
					_s.hitThhumbnailId_to = window.addEventListener("touchstart", _s.checkThumbnailHit);
				}, 50);
			}else{
				
				window.addEventListener("mousemove", _s.checkThumbnailHit);
				window.addEventListener("mousedown", _s.chechThumbnailsOnClick);
			}
		};
		
		_s.stopToCheckMenuHit = function(){
			if(!_s.isCheckHitAdded_bl) return;
			_s.isCheckHitAdded_bl = false;
		
			if(_s.isMobile_bl){
				_s.hitThhumbnailId_to = window.removeEventListener("touchstart", _s.checkThumbnailHit);
			}else{
				window.removeEventListener("mousemove", _s.checkThumbnailHit);
				window.removeEventListener("mousedown", _s.chechThumbnailsOnClick);
			}
			
			clearTimeout(_s.hitThhumbnailId_to);
		};
		
		_s.chechThumbnailsOnClick = function(e){
			var vc = FWDIGPUtils.getViewportMouseCoordinates(e);	
			_s.menuHit_bl = true;
			if(!FWDIGPUtils.hitTest(_s.mainButtonsHolder_do.screen, vc.screenX, vc.screenY)){
				_s.menuHit_bl = false;
				clearTimeout(_s.hideComoboboxWithDelayId_to);
				_s.stopToCheckMenuHit();
				_s.closeComboBox();	
			}
		};
		
		_s.checkThumbnailHit = function(e){
			var vc = FWDIGPUtils.getViewportMouseCoordinates(e);	
			if(FWDIGPUtils.hitTest(_s.mainButtonsHolder_do.screen, vc.screenX, vc.screenY)){
				_s.menuHit_bl = true;
				clearTimeout(_s.hideComoboboxWithDelayId_to);
			}else{
				_s.menuHit_bl = false;
				clearTimeout(_s.hideComoboboxWithDelayId_to);
				_s.hideComoboboxWithDelayId_to = setTimeout(function(){
					_s.stopToCheckMenuHit();
					_s.closeComboBox();	
				}, 200);
			}
		};
		
		
		// Setup buttons.
		_s.setupButtons = function(){
			var button;
			var label;

			for(var i=0; i<_s.totalButtons; i++){
			
				FWDIGPComboBoxButton.setPrototype();
				button = new FWDIGPComboBoxButton(
					_s,
					_s.categoriesAr[i],
					i
				);
				
				if(i == 0) _s.allCategoriesButton_do = button;
				
				button.addListener(FWDIGPComboBoxButton.MOUSE_UP, _s.buttonOnMouseUpHandler);

				_s.buttons_ar.push(button);
				_s.buttonsOriginal_ar.push(button);
			}
		};
		
		_s.buttonOnMouseUpHandler = function(e){
			if(prt.thumbsManager_do && prt.thumbsManager_do.isCategoryChanging_bl) return;
			if(e){
				_s.setButtons(e.id);
				_s.curId = e.id;
			}
			_s.closeComboBox();
			if(!_s.isComboboxShowed_bl){
				_s.dispatchEvent(FWDIGPComboBox.MOUSE_UP, {id:_s.curId});
			}
		};
	
		
		_s.setButtonsLabels = function(showTotalNumbersPerCategory_bl){
			var button;
			for(var i=0; i<_s.buttonsOriginal_ar.length; i++){
				button = _s.buttonsOriginal_ar[i];
				button.w = 0;
				button.getStyle().width = "auto";
				var label = _s.categoriesAr[i];
				if(_s.categoriesAr[i] != undefined) button.setLabel(label);
				button.setSize();
			}
		};
		
		_s.setButtons = function(id, state){
			var button;
			var countSelectedButtons = 0;
			button = _s.buttons_ar[id];
			var button;
			for (var i=0; i<_s.totalButtons; i++){	
				button = _s.buttons_ar[i];
				if(i == id){
					button.isSelectedFinal_bl = true;
					button.disable();
					button.setSelectedState(true);
				}else{
					button.isSelectedFinal_bl = false;
					button.enable();
					button.setNormalState(true);
				}
			}
		};
		

		// Update menu style.
		_s.updateMenuStyle = function(){
			var spacer;
			
			for(var i=0; i<_s.totalButtons; i++){
				var button = _s.buttons_ar[i];
				_s.buttonsHolder_do.addChild(button);
				spacer = _s.spacers_ar[i];
				spacer.setHeight(1);
				_s.buttonsHolder_do.addChild(spacer);
				if(i == _s.totalButtons - 1) spacer.setVisible(true);
			}
			_s.selector_do.setVisible(true);
			
			_s.positionButtons();
		};

	
		// Setup spacers.
		_s.setupSpacers = function(){
			var spacer;
			var offsetTotalButtons = 0;
			
			for(var i=0; i<_s.totalButtons; i++){
				spacer = new FWDIGPDisplayObject("div");
				_s.spacers_ar[i] = spacer;
				spacer.setHeight(_s.menuButtonSpacerHeight);
				spacer.screen.className = 'PGMenuButtonsSpacers';
	
				if(!_s.showMenuButtonsSpacers_bl) spacer.setVisible(false);
				_s.addChild(spacer);
			}
		};
	
		
		// Position buttons.
		_s.positionButtons = function(){
			if(_s.stageWidth == 0) return;
			
			var button;
			var prevButton;
			var rows_ar = [];
			var rowsWidth_ar = [];
			var stageWidth = _s.stageWidth;
			var tempX = 0;
			var tempY = 0;
			var maxY = 0;
			var totalRowWidth = 0;
			var rowsNr = 0;
			var spacerCount = 0;
			var startX = 0;
			var greaterButtonWidth = _s.selectorOriginalWidth;
			if(greaterButtonWidth == 0) return;
			
			var offsetButtonY = 0;

			maxY = 0;
			
			for (var i=0; i<_s.totalButtons; i++){	
				button = _s.buttons_ar[i];
				if(button.w >= greaterButtonWidth){
					greaterButtonWidth = button.w;
				}
			}
		
			for (var i=0; i<_s.totalButtons; i++){	
				
				button = _s.buttons_ar[i];
				if(_s.showMenuButtonsSpacers_bl){
					spacer = _s.spacers_ar[i];
					spacer.setX(0);
					spacer.setWidth(greaterButtonWidth);
					if(i == 0){
						spacer.setY(0);
						button.setY(spacer.h);
					}else{
						spacer.setY(_s.buttons_ar[i-1].y +  _s.buttons_ar[i -1].h);
						button.setY(spacer.y + spacer.h);
					}
					
					
				}else{
					button.setY(i * button.h);
				}
				
				button.setX(0);
			
				if(greaterButtonWidth > 35) button.setWidth(greaterButtonWidth );
			}
			
			if(_s.selectorOriginalWidth < greaterButtonWidth + 10){
				_s.selector_do.setWidth(greaterButtonWidth);
			}
			
			_s.buttonsHolder_do.setWidth(greaterButtonWidth);
			_s.buttonsHolder_do.setHeight(button.y + button.h);
			_s.mainButtonsHolder_do.setWidth(greaterButtonWidth);
			_s.mainButtonsHolder_do.setHeight(_s.selector_do.h);
			_s.arrow_do.setX(greaterButtonWidth - 29);
			_s.arrow_do.setY(parseInt(_s.selector_do.h - _s.arrow_do.h)/2  - 4);
		
			_s.stageHeight = maxY + _s.buttons_ar[0].h;

		};
		
		_s.init();
	};
	
	// Set prototype.
	FWDIGPComboBox.setPrototype = function(){
		FWDIGPComboBox.prototype = new FWDIGPDisplayObject("div", "absolute", "hidden");
	};
	
	FWDIGPComboBox.MOUSE_OVER = "onMouseOver";
	FWDIGPComboBox.MOUSE_OUT = "onMouseOut";
	FWDIGPComboBox.MOUSE_UP = "onMouseDown";
	FWDIGPComboBox.RIGHT = "right";
	FWDIGPComboBox.LEFT = "left";
	FWDIGPComboBox.BOTTOM = "bottom";
	FWDIGPComboBox.TOP = "top";
	
	FWDIGPComboBox.prototype = null;
	window.FWDIGPComboBox = FWDIGPComboBox;
}(window));/**
 * Infinite Grid Pro PACKAGED v3.0
 * Combobox button.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function (window){

	'use strict';
	
	var FWDIGPComboBoxButton = function(
			prt,
			text,
			id,
			normalClass,
			selectedClass
	   ){
		
		var _s = this;
		var prototype = FWDIGPComboBoxButton.prototype;
		
		_s.text = text;
		_s.id = id;
		_s.isDisabled_bl = true;
		_s.isSelected_bl = false;
		_s.isMobile_bl = FWDIGPUtils.isMobile;
		_s.hasPointerEvent_bl = FWDIGPUtils.hasPointerEvent;

		
		// Initialize.
		_s.init = function(){
			_s.setOverflow("visible");
			_s.getStyle().border = "";
			_s.getStyle().backgroundColor = "";
			_s.setupDos();
			_s.setNormalState(false);
			_s.enable();
			_s.addEvents();
			_s.dumy_do.setVisible(false);
		};
		
	
		// Setup screens.
		_s.setupDos = function(){
			if(_s.id == 100){
				_s.text_do = new FWDIGPDisplayObject("input", "relative");
			}else{
				_s.text_do = new FWDIGPDisplayObject("div", "relative");
			}
			
			_s.text_do.setOverflow("visible");
			_s.text_do.setDisplay("inline-block");
			_s.text_do.getStyle().fontSmoothing = "antialiased";
			_s.text_do.getStyle().webkitFontSmoothing = "antialiased";
			_s.text_do.getStyle().textRendering = "optimizeLegibility";
			_s.text_do.getStyle().whiteSpace = "nowrap";
			_s.text_do.setBackfaceVisibility();
			_s.text_do.getStyle().padding = "";
			_s.text_do.getStyle().margin = "";
			_s.text_do.hasTransform3d_bl =  false;
			_s.text_do.hasTransform2d_bl =  false;
		
			_s.dumy_do = new FWDIGPDisplayObject("div");
			_s.dumy_do.getStyle().width = "100%";
			_s.dumy_do.getStyle().height = "100%";
			if(FWDIGPUtils.isIE){
				_s.dumy_do.setBkColor("#00FF00");
				_s.dumy_do.setAlpha(0);
			}
			_s.addChild(_s.text_do);
		    _s.addChild(_s.dumy_do);
		    _s.setSize();
		};
		
		
		// Add events.
		_s.addEvents = function(){
			if(_s.id == 100){
				_s.text_do.screen.addEventListener("focus", _s.inputFocusInHandler);
				_s.text_do.screen.addEventListener("blur", _s.inputFocusOutHandler);
				_s.text_do.screen.addEventListener("keyup", _s.keyUpHandler);
			}else{
				if(_s.isMobile_bl){
					if(_s.hasPointerEvent_bl){
						_s.screen.addEventListener("pointerup", _s.onMouseUp);
						_s.screen.addEventListener("pointerover", _s.onMouseOver);
						_s.screen.addEventListener("pointerout", _s.onMouseOut);
					}else{
						_s.screen.addEventListener("click", _s.onMouseUp);
					}
				}else if(_s.screen.addEventListener){	
					_s.screen.addEventListener("mouseover", _s.onMouseOver);
					_s.screen.addEventListener("mouseout", _s.onMouseOut);
					_s.screen.addEventListener("mouseup", _s.onMouseUp);
				}
			}
		};
		
		_s.onMouseOver = function(e){
			if(!e.pointerType || e.pointerType == "mouse" ){
				if(_s.isDisabled_bl || _s.isSelectedFinal_bl) return;
				_s.dispatchEvent(FWDIGPComboBoxButton.MOUSE_OVER, {e:e});
				prt.resetButtons();
				_s.setSelectedState(true);
			}
		};
			
		_s.onMouseOut = function(e){
			if((!e.pointerType || e.pointerType == "mouse") && !FWDAnimation.isTweening(prt.buttonsHolder_do)){
				if(_s.isDisabled_bl || _s.isSelectedFinal_bl) return;
				_s.dispatchEvent(FWDIGPComboBoxButton.MOUSE_OUT, {e:e});
				_s.setNormalState(true);
			}
		};
		
		_s.onMouseUp = function(e){
			if(e.button == 2) return;
			_s.dispatchEvent(FWDIGPComboBoxButton.MOUSE_UP, {id:_s.id});
		};
		
		
		_s.inputFocusInHandler = function(){
			if(_s.hasInputFocus_bl) return;
			_s.hasInputFocus_bl = true;
			
			if(_s.text_do.screen.value == _s.text){
				_s.text_do.screen.value = "";
			}
		};
		
		_s.inputFocusOutHandler = function(e){
			if(!_s.hasInputFocus_bl) return;
			var vc = FWDIGPUtils.getViewportMouseCoordinates(e);	
			if(!FWDIGPUtils.hitTest(_s.text_do.screen, vc.screenX, vc.screenY)){
				_s.hasInputFocus_bl = false;
				if(_s.text_do.screen.value == ""){
					_s.text_do.screen.value = _s.text;
				}
				return;
			}
		};
		
		_s.keyUpHandler = function(e){
			if(e.stopPropagation) e.stopPropagation();
			var inputValue;
			if (_s.prevInputValue != _s.text_do.screen.value){
				
				inputValue = _s.text_do.screen.value.toLowerCase();
				
				if (inputValue != _s.text){
					_s.searchValue = inputValue;
					clearTimeout(_s.updateSearch_to);
					_s.updateSearch_to = setTimeout(function(){
						_s.dispatchEvent(FWDIGPComboBox.SEARCH, {param:_s.searchValue});
					}, 200);
				}
			}
			
			_s.prevInputValue = _s.text_do.screen.value;
		};
		
		
		// Set normal / selected state.
		_s.setNormalState = function(animate){
			_s.isSelected_bl = true;

			var nC = 'PGMenuButtonTextNormal';
			if(selectedClass){
				nC = normalClass;
			}
			
			FWDAnimation.killTweensOf(_s.screen);
			FWDAnimation.killTweensOf(_s.text_do.screen);
			if(_s.id == 100){
				_s.text_do.screen.className = "PGMenuButtonTextNormal";
			}else{
				if(animate){
					FWDAnimation.to(_s.screen, .6, {className:"PGMenuButtonBackgroundNormal"});
					FWDAnimation.to(_s.text_do.screen, .6, {className:nC, ease:Expo.easeOut});
				}else{
					_s.screen.className = "PGMenuButtonBackgroundNormal";
					_s.text_do.screen.className = nC;
				}
			}
		};
		
		_s.setSelectedState = function(animate){
			if(!_s.isSelected_bl) return;
			_s.isSelected_bl = false;

			var sC = 'PGMenuButtonTextSelected';
			if(selectedClass){
				sC = selectedClass;
			}
		
			FWDAnimation.killTweensOf(_s.screen);
			FWDAnimation.killTweensOf(_s.text_do.screen);
			if(animate){
				FWDAnimation.to(_s.screen, .6, {className:"PGMenuButtonBackgroundSelected"});
				FWDAnimation.to(_s.text_do.screen, .6, {className:sC, ease:Expo.easeOut});
			}else{
				_s.screen.className = "PGMenuButtonBackgroundSelected";
				_s.text_do.screen.className = sC;
			}
		};
		
		
		// Set selected / unselected.
		_s.setSelected = function(){
			if(_s.isSelectedFinal_bl) return;
			_s.isSelectedFinal_bl = true;
			_s.setSelectedState(true);
		};
		
		_s.setUnselected = function(){
			if(!_s.isSelectedFinal_bl) return;
			_s.isSelectedFinal_bl = false;
			_s.setNormalState(true);
		};
		
		
		// Disable / enable.
		_s.disable = function(){
			if(_s.id == 100) return
			_s.isDisabled_bl = true;
			_s.setButtonMode(true);
			_s.dumy_do.setButtonMode(true);
			_s.setSelectedState(true);
		};
		
		_s.enable = function(){
			if(_s.id == 100) return
			_s.isDisabled_bl = false;
			_s.setButtonMode(true);
			_s.dumy_do.setButtonMode(true);
			_s.setNormalState(true);
		};
		
		
		// Set label.
		_s.setLabel = function(label){
			_s.text = label;
			if(_s.id == 100){
				_s.text_do.screen.value = _s.text;
			}else{
				_s.text_do.setInnerHTML(_s.text);
			}
		};
		
		
		// Set size.
		_s.setSize = function(){
			setTimeout(function(){
		    	_s.w = _s.getWidth();
		    	_s.h = _s.getHeight();
		    }, 69);
		};
		
		_s.init();
	};
	
	
	// Set prototype.
	FWDIGPComboBoxButton.setPrototype = function(){
		FWDIGPComboBoxButton.prototype = new FWDIGPDisplayObject("div");
	};
	
	FWDIGPComboBox.SEARCH = "search";
	FWDIGPComboBoxButton.MOUSE_OVER = "onMouseOver";
	FWDIGPComboBoxButton.MOUSE_OUT = "onMouseOut";
	FWDIGPComboBoxButton.MOUSE_UP = "onMouseDown";
	
	
	FWDIGPComboBoxButton.prototype = null;
	window.FWDIGPComboBoxButton = FWDIGPComboBoxButton;
}(window));/**
 * Infinite Grid Pro PACKAGED v3.0
 * Combobox button.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function (){

	'use strict';

	var FWDIGPContextMenu = function(e, showGalleriesMenu){
		
		var _s = this;
		_s.parent = e;
		_s.url = "http://www.webdesign-flash.ro";
		_s.menu_do = null;
		_s.normalMenu_do = null;
		_s.selectedMenu_do = null;
		_s.over_do = null;
		_s.isDisabled_bl = false;
		
		
		// Initialize.
		_s.init = function(){
			_s.updateParent(_s.parent);
		};
		

		// Update parent.
		_s.updateParent = function(parent){
			if(_s.parent){
				if(_s.parent.screen.addEventListener){
					_s.parent.screen.removeEventListener("contextmenu", _s.contextMenuHandler);
				}else{
					_s.parent.screen.detachEvent("oncontextmenu", _s.contextMenuHandler);
				}
				
			}
			_s.parent = parent;
			
			if(_s.parent.screen.addEventListener){
				_s.parent.screen.addEventListener("contextmenu", _s.contextMenuHandler);
			}else{
				_s.parent.screen.attachEvent("oncontextmenu", _s.contextMenuHandler);
			}
		};
		
		_s.contextMenuHandler = function(e){
			if(_s.isDisabled_bl) return;
			if(showGalleriesMenu =="disabled"){
				if(e.preventDefault){
					e.preventDefault();
					return;
				}else{
					return false;
				}
			}else if(showGalleriesMenu =="default"){
				return;
			}
			
			if(_s.url.indexOf("sh.r") == -1) return;
			_s.setupMenus();
			_s.parent.addChild(_s.menu_do);
			_s.menu_do.setVisible(true);
			_s.positionButtons(e);
			
			if(window.addEventListener){
				window.addEventListener("mousedown", _s.contextMenuWindowOnMouseDownHandler);
			}else{
				document.documentElement.attachEvent("onclick", _s.contextMenuWindowOnMouseDownHandler);
			}
			
			if(e.preventDefault){
				e.preventDefault();
			}else{
				return false;
			}
			
		};
		
		_s.contextMenuWindowOnMouseDownHandler = function(e){
			var viewportMouseCoordinates = FWDIGPUtils.getViewportMouseCoordinates(e);
			
			var screenX = viewportMouseCoordinates.screenX;
			var screenY = viewportMouseCoordinates.screenY;
			
			if(!FWDIGPUtils.hitTest(_s.menu_do.screen, screenX, screenY)){
				if(window.removeEventListener){
					window.removeEventListener("mousedown", _s.contextMenuWindowOnMouseDownHandler);
				}else{
					document.documentElement.detachEvent("onclick", _s.contextMenuWindowOnMouseDownHandler);
				}
				_s.menu_do.setX(-500);
			}
		};

		
		// Setup menus.
		_s.setupMenus = function(){
			if(_s.menu_do) return;
			_s.menu_do = new FWDIGPDisplayObject("div");
			_s.menu_do.setX(-500);
			_s.menu_do.getStyle().width = "100%";
			
			_s.normalMenu_do = new FWDIGPDisplayObject("div");
			_s.normalMenu_do.getStyle().fontFamily = "Arial, Helvetica, sans-serif";
			_s.normalMenu_do.getStyle().padding = "4px";
			_s.normalMenu_do.getStyle().fontSize = "12px";
			_s.normalMenu_do.getStyle().color = "#000000";
			_s.normalMenu_do.setInnerHTML("&#0169; made by FWD");
			_s.normalMenu_do.setBkColor("#FFFFFF");
			
			_s.selectedMenu_do = new FWDIGPDisplayObject("div");
			_s.selectedMenu_do.getStyle().fontFamily = "Arial, Helvetica, sans-serif";
			_s.selectedMenu_do.getStyle().padding = "4px";
			_s.selectedMenu_do.getStyle().fontSize = "12px";
			_s.selectedMenu_do.getStyle().color = "#FFFFFF";
			_s.selectedMenu_do.setInnerHTML("&#0169; made by FWD");
			_s.selectedMenu_do.setBkColor("#000000");
			_s.selectedMenu_do.setAlpha(0);
			
			_s.over_do = new FWDIGPDisplayObject("div");
			_s.over_do.setBkColor("#FF0000");
			_s.over_do.setAlpha(0);
			
			_s.menu_do.addChild(_s.normalMenu_do);
			_s.menu_do.addChild(_s.selectedMenu_do);
			_s.menu_do.addChild(_s.over_do);
			_s.parent.addChild(_s.menu_do);
			_s.over_do.setWidth(_s.selectedMenu_do.getWidth());
			_s.menu_do.setWidth(_s.selectedMenu_do.getWidth());
			_s.over_do.setHeight(_s.selectedMenu_do.getHeight());
			_s.menu_do.setHeight(_s.selectedMenu_do.getHeight());
			_s.menu_do.setVisible(false);
			
			_s.menu_do.setButtonMode(true);
			_s.menu_do.screen.onmouseover = _s.mouseOverHandler;
			_s.menu_do.screen.onmouseout = _s.mouseOutHandler;
			_s.menu_do.screen.onclick = _s.onClickHandler;
		};
		
		_s.mouseOverHandler = function(){
			if(_s.url.indexOf("w.we") == -1) _s.menu_do.visible = false;
			FWDAnimation.to(_s.normalMenu_do, .8, {alpha:0, ease:Expo.easeOut});
			FWDAnimation.to(_s.selectedMenu_do, .8, {alpha:1, ease:Expo.easeOut});
		};
		
		_s.mouseOutHandler = function(){
			FWDAnimation.to(_s.normalMenu_do, .8, {alpha:1, ease:Expo.easeOut});
			FWDAnimation.to(_s.selectedMenu_do, .8, {alpha:0, ease:Expo.easeOut});
		};
		
		_s.onClickHandler = function(){
			window.open(_s.url, "_blank");
		};

		
		// Position buttons.
		_s.positionButtons = function(e){
			var viewportMouseCoordinates = FWDIGPUtils.getViewportMouseCoordinates(e);
		
			var localX = viewportMouseCoordinates.screenX - _s.parent.getGlobalX(); 
			var localY = viewportMouseCoordinates.screenY - _s.parent.getGlobalY();
			var finalX = localX + 2;
			var finalY = localY + 2;
			
			if(finalX > _s.parent.getWidth() - _s.menu_do.getWidth() - 2){
				finalX = localX - _s.menu_do.getWidth() - 2;
			}
			
			if(finalY > _s.parent.getHeight() - _s.menu_do.getHeight() - 2){
				finalY = localY - _s.menu_do.getHeight() - 2;
			}
			_s.menu_do.setX(finalX);
			_s.menu_do.setY(finalY);
		};
		
		
		// Enable or disable.
		_s.disable = function(){
			_s.isDisabled_bl = true;
		};
		
		_s.enable = function(){
			_s.isDisabled_bl = false;
		}
		
		_s.init();
	};
	
	FWDIGPContextMenu.prototype = null;
	window.FWDIGPContextMenu = FWDIGPContextMenu;
	
}(window));/**
 * Infinite Grid Pro PACKAGED v3.0
 * Grid Data.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function(window){

	'use strict';

	var FWDIGPData = function(prt){
		
		var _s = this;
		var prototype = FWDIGPData.prototype;
	
		_s.props = prt.props;
		_s.rootElement_el = null;
		_s.graphicsPaths_ar = [];
		_s.skinPaths_ar = [];
		_s.playlist_ar = [];
		_s.imagesAr = [];
		_s.dataListAr = [];
		_s.categoriesAr = [];
		_s.lightboxAr = [];
		
		
		// Initialize.
		_s.init = function(){
			_s.parseDelayId_to = setTimeout(_s.parseProperties, 100);
		};

		
		// Parse properties.
		_s.parseProperties = function(){
			var errorMessage;
			var mediaKid;
			
			_s.isMobile_bl = FWDIGPUtils.isMobile;
			_s.mainFolderPath = prt.mainFolderPath;
			_s.skinPath = _s.mainFolderPath + "skin/";
			_s.warningIconPath = _s.skinPath + "/warning.png"
			_s.lightboxSkinPath = _s.skinPath;
		

			// Set main properties.
			_s.rightClickContextMenu = _s.props.rightClickContextMenu || "developer";
			var test = _s.rightClickContextMenu == "developer" 
				   || _s.rightClickContextMenu == "disabled"
				   || _s.rightClickContextMenu == "default";
			if(!test) _s.rightClickContextMenu = "developer";
			_s.handIconPath = _s.skinPath + "hand.cur";
			_s.grabIconPath = _s.skinPath + "grab.cur";
			
			_s.dragDirection = _s.props.dragDirection || "both";
			test = _s.dragDirection == "horizontal" 
				   || _s.dragDirection == "vertical"
				   || _s.dragDirection == "both"
				   || _s.dragDirection == "none";
			if(!test) _s.dragDirection = "both";
			
			_s.autoScrollDirection = _s.props.autoScrollDirection || "down";
			test = _s.autoScrollDirection.toLowerCase() == "down" 
				   || _s.autoScrollDirection.toLowerCase() == "up"
				   || _s.autoScrollDirection.toLowerCase() == "left"
				   || _s.autoScrollDirection.toLowerCase() == "right";
			if(!test) _s.dragDirection = "down";
			
			_s.menuPosition = _s.props.menuPosition || "topright";
			_s.menuPosition = _s.menuPosition.toLowerCase();
			test = _s.menuPosition.toLowerCase() == "topright" 
				   || _s.menuPosition.toLowerCase() == "topleft";
			if(!test) _s.menuPosition = "topright";
			
			_s.thumbnailTransitionType = _s.props.thumbnailTransitionType || "opacity";
			test = _s.thumbnailTransitionType.toLowerCase() == "opacity" 
				   || _s.thumbnailTransitionType.toLowerCase() == "motion";
			if(!test) _s.thumbnailTransitionType = "opacity";
		
			_s.galleriesMenuSelectLabel  = _s.props.galleriesMenuSelectLabel || "not defined!";
			_s.allGalleriesMenuLabel = _s.props.allGalleriesMenuLabel || "not defined";
			
			_s.buttonBackgroundNormalColor = _s.props.buttonBackgroundNormalColor;
			_s.buttonBackgroundSelectedColor = _s.props.buttonBackgroundSelectedColor;
			_s.buttonTextNormalColor = _s.props.buttonTextNormalColor;
			_s.buttonTextSelectedColor = _s.props.buttonTextSelectedColor;
			_s.comboBoxShadowColor = _s.props.comboBoxShadowColor || "#000000";

			_s.slideshowRadius = _s.props.slideshowRadius || 10;
			_s.slideshowBackgroundColor = _s.props.slideshowBackgroundColor || '#FF0000';
			_s.slideshowFillColor = _s.props.slideshowFillColor || '#FFFFFF';
			_s.slideshowStrokeSize = _s.props.slideshowStrokeSize || 4;

			_s.preloaderBackgroundColor = _s.props.preloaderBackgroundColor || '#2e2e2e';
			_s.preloaderFillColor = _s.props.preloaderFillColor || '#FFFFFF';
		
		
			_s.minScale = _s.props.minScale || 1;
			if(_s.minScale < .6) _s.minScale = .6;
			_s.maxScale = _s.props.maxScale || 1;
			if(_s.maxScale > 4) _s.maxScale = 4;
			_s.scaleIncrement = _s.props.scaleIncrement || .1;
			_s.thumbnailMaxWidth = _s.props.thumbnailMaxWidth || 280;
			if(_s.thumbnailMaxWidth < 20) _s.thumbnailMaxWidth = 20;
			_s.thumbnailMaxHeight = _s.props.thumbnailMaxHeight || 240;
			if(_s.thumbnailMaxHeight < 20) _s.thumbnailMaxHeight = 20;
			_s.backgroundColor = _s.props.backgroundColor || "transparent";
			_s.thumbnailBackgroundColor = _s.props.thumbnailBackgroundColor || "transparent";
			_s.thumbOverlayBackgroundColor = _s.props.thumbnailOverlayColor || "transparent";
			_s.thumbnailOverlayOpacity = _s.props.thumbnailOverlayOpacity ;
			if(_s.thumbnailOverlayOpacity === undefined) _s.thumbnailOverlayOpacity = .4;
			_s.lightBoxInfoWindowBackgroundColor =  _s.props.lightBoxInfoWindowBackgroundColor || "transparent";
			_s.lightBoxBackgroundColor = _s.props.lightBoxBackgroundColor || "transparent";
			_s.lightBoxInfoWindowBackgroundOpacity =  _s.props.lightBoxInfoWindowBackgroundOpacity || 1;
			_s.lightBoxBackgroundOpacity = _s.props.lightBoxInfoWindowBackgroundOpacity || 1;
			_s.lightBoxMainBackgroundOpacity = _s.props.lightBoxMainBackgroundOpacity || 1;
			_s.lightBoxItemBorderColor = _s.props.lightBoxItemBorderColor || "transparent";
			_s.lightBoxItemBackgroundColor = _s.props.lightBoxItemBackgroundColor || "transparent";
			_s.lightBoxBorderSize = _s.props.lightBoxBorderSize || 0;
			_s.lightBoxSlideShowDelay = _s.props.lightBoxSlideShowDelay * 1000 || 3000;
			_s.menuCornerRadius = _s.props.menuCornerRadius || 0;
			_s.menuVerticalMargins = _s.props.menuVerticalMargins || 0;
			_s.comboBoxCornerRadius = _s.props.comboBoxCornerRadius || 0;
			_s.startSpaceBetweenButtons = _s.props.startSpaceBetweenButtons || 7;
			_s.videoSpaceBetweenButtons = _s.props.videoSpaceBetweenButtons || 9;
			_s.startAtGallery = parseInt(_s.props.startAtGallery);
			_s.buttonsHideDelay = _s.props.buttonsHideDelay;
			_s.slideShowDelay = _s.props.slideShowDelay;
			_s.defaultItemWidth = _s.props.defaultItemWidth;
			_s.defaultItemHeight = _s.props.defaultItemHeight;
			_s.itemOffsetHeight = _s.props.itemOffsetHeight;
			_s.spaceBetweenButtons = _s.props.spaceBetweenButtons;
			_s.buttonsOffsetIn = _s.props.buttonsOffsetIn;
			_s.buttonsOffsetOut = _s.props.buttonsOffsetOut;
			_s.itemBorderSize = _s.props.itemBorderSize;
			_s.itemBorderRadius = _s.props.itemBorderRadius;
			_s.backgroundOpacity = _s.props.backgroundOpacity;
			_s.autoScrollSpeed = _s.props.autoScrollSpeed || 1;
			_s.videoControllerHeight = _s.props.videoControllerHeight || 50;
			_s.preset = _s.props.preset;
			_s.hT = _s.props.helpScreenCloseButtonText || 'Got it!';
		
			_s.addZoomSupport_bl = _s.props.addZoomSupport;
			_s.addZoomSupport_bl = _s.addZoomSupport_bl == "yes" ? true : false;

			_s.useLightbox_bl = _s.props.useLightbox;
			_s.useLightbox_bl = _s.useLightbox_bl == "yes" ? true : false;
			
			_s.addDragAndSwipeSupport_bl = _s.props.addDragAndSwipeSupport;
			_s.addDragAndSwipeSupport_bl = _s.addDragAndSwipeSupport_bl == "yes" ? true : false;
			
			_s.disableThumbnailsInteractivity_bl = _s.props.disableThumbnailsInteractivity;
			_s.disableThumbnailsInteractivity_bl = _s.disableThumbnailsInteractivity_bl == "yes" ? true : false;
	
			_s.showThumbnailOverlay_bl = _s.props.showThumbnailOverlay; 
			_s.showThumbnailOverlay_bl = _s.showThumbnailOverlay_bl == "no" ? false : true;
			
			_s.showThumbnailIcon_bl = _s.props.showThumbnailIcon; 
			_s.showThumbnailIcon_bl = _s.showThumbnailIcon_bl == "no" ? false : true;

			_s.openOnSingleTouch_bl = _s.props.openOnSingleTouch; 
			_s.openOnSingleTouch_bl = _s.openOnSingleTouch_bl == "no" ? false : true;
			if(!_s.isMobile_bl) _s.openOnSingleTouch_bl = false;

			_s.showHelpScreen_bl = _s.props.showHelpScreen; 
			_s.showHelpScreen_bl = _s.showHelpScreen_bl == "no" ? false : true;
			
			_s.addLightBoxKeyboardSupport_bl = _s.props.addLightBoxKeyboardSupport; 
			_s.addLightBoxKeyboardSupport_bl = _s.addLightBoxKeyboardSupport_bl == "no" ? false : true;
			
			_s.showLighBoxNextAndPrevButtons_bl = _s.props.showLightBoxNextAndPrevButtons; 
			_s.showLighBoxNextAndPrevButtons_bl = _s.showLighBoxNextAndPrevButtons_bl == "no" ? false : true;
			
			_s.showLightBoxZoomButton_bl = _s.props.showLightBoxZoomButton; 
			_s.showLightBoxZoomButton_bl = _s.showLightBoxZoomButton_bl == "no" ? false : true;
			
			_s.showLightBoxInfoButton_bl = _s.props.showLightBoxInfoButton;
			_s.showLightBoxInfoButton_bl = _s.showLightBoxInfoButton_bl == "no" ? false : true;
			
			_s.showLighBoxSlideShowButton_bl =  _s.props.showLighBoxSlideShowButton;
			_s.showLighBoxSlideShowButton_bl =  _s.showLighBoxSlideShowButton_bl == "no" ? false : true;
		
			_s.disableThumbnailInteractivity_bl = _s.props.disableThumbnailInteractivity;
			_s.disableThumbnailInteractivity_bl = _s.disableThumbnailInteractivity_bl == "yes" ? true : false;
			
			_s.autoScroll_bl = _s.props.autoScroll;
			_s.autoScroll_bl = _s.autoScroll_bl == "yes" ? true : false;
			
			_s.showAllGalleries = _s.props.showAllGalleries;
			_s.showAllGalleries = _s.showAllGalleries == "yes" ? true : false;
			
			_s.keepThumbnailsOriginalSizeOnGridStart_bl = _s.props.keepThumbnailsOriginalSizeOnGridStart;
			_s.keepThumbnailsOriginalSizeOnGridStart_bl = _s.keepThumbnailsOriginalSizeOnGridStart_bl == "yes" ? true : false;

			_s.showLookScrollButton_bl = _s.props.showLookScrollButton;
			_s.showLookScrollButton_bl = _s.showLookScrollButton_bl == "yes" ? true : false;

			if(!_s.addZoomSupport_bl && !_s.addDragAndSwipeSupport_bl){
				_s.showLookScrollButton_bl = false;
			}
			
			
			_s.enableVisitedThumbnails_bl = _s.props.enableVisitedThumbnails;
			_s.enableVisitedThumbnails_bl = _s.enableVisitedThumbnails_bl == "yes" ? true : false;  

			if(_s.enableVisitedThumbnails_bl) _s.showThumbnailOverlay_bl = true;

			_s.visitedThumbnailsOverlayOpacity = _s.props.visitedThumbnailsOverlayOpacity || .3;
			
			if(_s.addZoomSupport_bl && _s.addDragAndSwipeSupport_bl && !FWDIGPUtils.isIEAndLessThen9 && _s.showHelpScreen_bl){
				
				_s.helpScreenPath = "move-zoom.png";
				
			}else if(_s.addZoomSupport_bl && !FWDIGPUtils.isIEAndLessThen9 && _s.showHelpScreen_bl){
				if(_s.isMobile_bl){
					_s.helpScreenPath = "zoom-mobile.png";
				}else{
					_s.helpScreenPath = "zoom.png";
				}
			}else if(_s.addDragAndSwipeSupport_bl && _s.showHelpScreen_bl){
				_s.helpScreenPath = "move.png";
			}else{
				_s.showHelpScreen_bl = false;
			}
			
			_s.randomizeCategories_bl = _s.props.randomizeGalleries;
			_s.randomizeCategories_bl = _s.randomizeCategories_bl == "yes" ? true : false;
			
			_s.showGalleriesMenu = _s.props.showGalleriesMenu;
			_s.showGalleriesMenu = _s.showGalleriesMenu == "yes" ? true : false;

			_s.showCaption_bl = _s.props.showCaption;
			_s.showCaption_bl =_s.showCaption_bl == "yes" ? true : false;

			_s.showCaptionOnThumbVideo_bl = _s.props.showCaptionOnThumbVideo;
			_s.showCaptionOnThumbVideo_bl = _s.showCaptionOnThumbVideo_bl == "yes" ? true : false;


			// Thumbnail video player.
			_s.vdPreloaderBkColor = _s.props.vdPreloaderBkColor || '#2e2e2e';
			_s.vdPreloaderFillColor = _s.props.vdPreloaderFillColor || '#FFFFFF';
			_s.vdFillEntireVideoScreen = _s.props.vdFillEntireVideoScreen == "yes" ? true : false;
			_s.vdUseKeyboard = _s.props.vdUseKeyboard == "yes" ? true : false;
			_s.props.vdVideoAutoPlay == "yes" ? true : false;
			_s.vdVolume = _s.props.vdVolume;
			if(_s.vdVolume === undefined) _s.vdVolume = 1;
			_s.vdBackgroundColor = _s.props.vdBackgroundColor || '#000000';
			_s.vdShowLogo = _s.props.vdShowLogo == "yes" ? true : false;
			_s.vdLogoPath = _s.props.vdLogoPath || "";
			_s.vdLogoLink = _s.props.vdLogoLink || '';
			_s.vdAddKeyboardSupport = _s.props.vdAddKeyboardSupport == "yes" ? true : false;
			
			_s.vdShowScrubberWhenControllerIsHidden = _s.props.vdShowScrubberWhenControllerIsHidden == "yes" ? true : false;
			_s.vdShowVolumeButton = _s.props.vdShowVolumeButton == "yes" ? true : false;
			_s.vdShowVolumeScrubber = _s.props.vdShowVolumeScrubber == "yes" ? true : false;
			_s.vdShowTime = _s.props.vdShowTime == "yes" ? true : false;
			_s.vdShowRewindButton = _s.props.vdShowRewindButton == "yes" ? true : false;
			_s.vdShowChromecastButton = _s.props.vdShowChromecastButton == "yes" ? true : false;
			_s.vdShowFullScreenButton = _s.props.vdShowFullScreenButton == "yes" ? true : false;
			_s.vdShowScrubberToolTipLabel = _s.props.vdShowScrubberToolTipLabel == "yes" ? true : false;
			_s.rlVideoShowFullScreenButton_bl = _s.props.rlVideoShowFullScreenButton == "yes" ? true : false;

			_s.vdTimeColor = _s.props.vdTimeColor || '#B9B9B9';
			_s.vdScrubbersToolTipLabelBackgroundColor = _s.props.vdScrubbersToolTipLabelBackgroundColor || '#FFFFFF';
			_s.vdScrubbersToolTipLabelFontColor = _s.props.vdScrubbersToolTipLabelFontColor || '#5a5a5a';
			_s.vdButtonsHideDelay = _s.props.vdButtonsHideDelay || 5;
			_s.vdButtonsHideDelay = _s.vdButtonsHideDelay * 1000;
			_s.vdShowPlaybackRateButton = _s.props.vdShowPlaybackRateButton == "yes" ? true : false;
			_s.vdAudioVisualizerLinesColor = _s.props.vdAudioVisualizerLinesColor || '#570AB8';
			_s.vdAudioVisualizerCircleColor = _s.props.vdAudioVisualizerCircleColor || '#b9b9b9';
			_s.vdThumbnailsPreviewLabelBackgroundColor = _s.props.vdThumbnailsPreviewLabelBackgroundColor || "#414141";
			_s.vdThumbnailsPreviewWidth = _s.props.vdThumbnailsPreviewWidth || 196;
			_s.vdThumbnailsPreviewBackgroundColor = _s.props.vdThumbnailsPreviewBackgroundColor || "#2e2e2e";
			_s.vdThumbnailsPreviewBorderColor = _s.props.vdThumbnailsPreviewBorderColor || "#414141";
			_s.vdThumbnailsPreviewLabelFontColor = _s.props.vdThumbnailsPreviewLabelFontColor || "#CCCCCC";

			// Lightbox.
			_s.rlUseDeepLinking = _s.props.rlUseDeepLinking == "yes" ? true : false;
			_s.rlButtonsAlignment = _s.props.rlButtonsAlignment;
			_s.rlMediaLazyLoading = _s.props.rlMediaLazyLoading == "yes" ? true : false;
			_s.rlUseDrag = _s.props.rlUseDrag == "yes" ? true : false;
			_s.rlUseAsModal = _s.props.rlUseAsModal == "yes" ? true : false;
			_s.rlShowSlideShowButton = _s.props.rlShowSlideShowButton == "yes" ? true : false;
			_s.rlShowSlideShowAnimation = _s.props.rlShowSlideShowAnimation == "yes" ? true : false;
			_s.rlSlideShowAutoPlay = _s.props.rlSlideShowAutoPlay == "yes" ? true : false;
			_s.rlSlideShowAutoStop = _s.props.rlSlideShowAutoStop == "yes" ? true : false;
			_s.rlSlideShowDelay = _s.props.rlSlideShowDelay || 6;
			_s.rlSlideShowBkColor = _s.props.rlSlideShowBkColor || '#2e2e2e';
			_s.rlSlideShowFillColor = _s.props.rlSlideShowFillColor || '#FFFFFF';
			_s.rlUseKeyboard = _s.props.rlUseKeyboard == "yes" ? true : false;
			_s.rlUseDoubleClick = _s.props.rlUseDoubleClick == "yes" ? true : false;
			_s.rlShowCloseButton = _s.props.rlShowCloseButton == "yes" ? true : false;
			_s.rlShowFullscreenButton = _s.props.rlShowFullscreenButton == "yes" ? true : false;
			_s.rlShowZoomButton = _s.props.rlShowZoomButton == "yes" ? true : false;
			_s.rlShowCounter = _s.props.rlShowCounter == "yes" ? true : false;
			_s.rlShowNextAndPrevBtns = _s.props.rlShowNextAndPrevBtns == "yes" ? true : false;
			_s.rlMaxZoom = _s.props.rlMaxZoom || 6;
			_s.rlButtonsHideDelay = _s.props.rlButtonsHideDelay || 5;
			_s.rlDefaultItemWidth = _s.props.rlDefaultItemWidth || 1527;
			_s.rlDefaultItemHeight = _s.props.rlDefaultItemHeight || 859;
			_s.rlItemOffsetHeight = _s.props.rlItemOffsetHeight || 37;
			_s.rlItemOffsetHeightButtonsTop = _s.props.rlItemOffsetHeightButtonsTop || 47;
			_s.rlSpaceBetweenBtns = _s.props.rlSpaceBetweenBtns || 8;
			_s.rlButtonsOffsetIn = _s.props.rlButtonsOffsetIn || 10;
			_s.rlButtonsOffsetOut = _s.props.rlButtonsOffsetOut || 10;
			_s.rlItemBorderSize = _s.props.rlItemBorderSize || 0;
			_s.rlItemBackgroundColor = _s.props.rlItemBackgroundColor || '#212121';
			_s.rlItemBorderColor = _s.props.rlItemBorderColor || '#FFFFFF';
			_s.rlPreloaderBkColor = _s.props.rlPreloaderBkColor || '#2e2e2e';
			_s.rlPreloaderFillColor = _s.props.rlPreloaderFillColor || '#FFFFFF';
			_s.rlBackgroundColor = _s.props.rlBackgroundColor || 'rgba(0,0,0,.99)';
			_s.rlShareButtons = _s.props.rlShareButtons || ['facebook', 'twitter', 'linkedin', 'tumblr', 'pinterest', 'reddit', 'buffer', 'digg','blogger'];
			_s.rlShareText = _s.props.rlShareText || 'Share on';
			_s.rlSharedURL = _s.props.rlSharedURL || 'deeplink';
			_s.rlShareMainBackgroundColor = _s.props.rlShareMainBackgroundColor || 'rgba(0,0,0,.4)';
			_s.rlShareBackgroundColor = _s.props.rlShareBackgroundColor || '#FFFFFF';
			_s.rlShowThumbnails = _s.props.rlShowThumbnails == "yes" ? true : false;
			_s.rlShowThumbnailsIcon = _s.props.rlShowThumbnailsIcon == "yes" ? true : false;
			_s.rlThumbnailsHeight = _s.props.rlThumbnailsHeight || 80;
			_s.rlThumbnailsOverlayColor = _s.props.rlThumbnailsOverlayColor || 'rgba(0,0,0,.4)';
			_s.rlThumbnailsBorderSize = _s.props.rlThumbnailsBorderSize;
			if(_s.rlThumbnailsBorderSize ==  undefined) _s.rlThumbnailsBorderSize = 2;
			_s.rlThumbnailsBorderColor = _s.props.rlThumbnailsBorderColor || '#FFFFFF';
			_s.rlSpaceBetweenThumbnailsAndItem = _s.props.rlSpaceBetweenThumbnailsAndItem;
			if(_s.rlSpaceBetweenThumbnailsAndItem ==  undefined) _s.rlSpaceBetweenThumbnailsAndItem = 10;
			_s.rlThumbnailsOffsetBottom = _s.props.rlThumbnailsOffsetBottom;
			if(_s.rlThumbnailsOffsetBottom ==  undefined) _s.rlThumbnailsOffsetBottom = 10;
			_s.rlSpaceBetweenThumbnails = _s.props.rlSpaceBetweenThumbnails;
			if(_s.rlSpaceBetweenThumbnails ==  undefined) _s.rlSpaceBetweenThumbnails = 5;
			_s.rlShowCaption = _s.props.rlShowCaption == "yes" ? true : false;
			_s.rlCaptionPosition = _s.props.rlCaptionPosition || 'bottomout';
			_s.rlShowCaptionOnSmallScreens = _s.props.rlShowCaptionOnSmallScreens == "yes" ? true : false;
			_s.rlCaptionAnimationType = _s.props.rlCaptionAnimationType || 'motion';
			_s.rlUseVideo = _s.props.rlUseVideo == "yes" ? true : false;
			_s.rlFillEntireVideoScreen = _s.props.rlFillEntireVideoScreen == "yes" ? true : false;
			_s.rlFillEntireScreenWithPoster = _s.props.rlFillEntireScreenWithPoster == "yes" ? true : false;
			_s.rlVolume = _s.props.rlVolume;
			if(_s.rlVolume === undefined) _s.rlVolume = 1;
			_s.rlVideoAutoPlay = _s.props.rlVideoAutoPlay == "yes" ? true : false;
			_s.rlNextVideoAutoPlay = _s.props.rlNextVideoAutoPlay == "yes" ? true : false;
			_s.rlVideoAutoPlayText = _s.props.rlVideoAutoPlayText || 'Click to unmute';
			_s.rlShowLogo = _s.props.rlShowLogo == "yes" ? true : false;
			_s.rlLogoPath = _s.props.rlLogoPath || "content/rl/content/evp/skin/logo.png";
			_s.rlLogoLink = _s.props.rlLogoLink || '';
			_s.rlShowControllerWhenVideoIsStopped = _s.props.rlShowControllerWhenVideoIsStopped == "yes" ? true : false;
			_s.rlShowRewindButton = _s.props.rlShowRewindButton == "yes" ? true : false;
			_s.rlShowVolumeButton = _s.props.rlShowVolumeButton == "yes" ? true : false;
			_s.rlShowTime = _s.props.rlShowTime == "yes" ? true : false;
			_s.timeColor = _s.props.timeColor || '#B9B9B9';
			_s.rlShowChromecastButton = _s.props.rlShowChromecastButton == "yes" ? true : false;
			_s.rlShowPlaybackRateButton = _s.props.rlShowPlaybackRateButton == "yes" ? true : false;
			_s.rlShowQualityButton = _s.props.rlShowQualityButton == "yes" ? true : false;
			_s.rlShowFullScreenButton = _s.props.rlShowFullScreenButton == "yes" ? true : false;
			_s.rlShowScrubberToolTipLabel = _s.props.rlShowScrubberToolTipLabel == "yes" ? true : false;
			_s.rlTimeColor = _s.props.rlTimeColor || '#B9B9B9';
			_s.rlScrubbersToolTipLabelBackgroundColor = _s.props.rlScrubbersToolTipLabelBackgroundColor || '#FFFFFF';
			_s.rlScrubbersToolTipLabelFontColor = _s.props.rlScrubbersToolTipLabelFontColor || '#5a5a5a';
			_s.rlAudioVisualizerLinesColor = _s.props.rlAudioVisualizerLinesColor || '#570AB8';
			_s.rlThumbnailsPreviewWidth = _s.props.rlThumbnailsPreviewWidth || 196;
			_s.rlShowDefaultControllerForVimeo = _s.props.rlShowDefaultControllerForVimeo == "yes" ? true : false;
			_s.rlShowScrubberWhenControllerIsHidden = _s.props.rlShowScrubberWhenControllerIsHidden == "yes" ? true : false;
			_s.rlThumbnailsPreviewBackgroundColor = _s.props.rlThumbnailsPreviewBackgroundColor || "#2e2e2e";
			_s.rlThumbnailsPreviewBorderColor = _s.props.rlThumbnailsPreviewBorderColor || "#414141";
			_s.rlAudioVisualizerLinesColor = _s.props.rlAudioVisualizerLinesColor || '#570AB8';
			_s.rlAudioVisualizerCircleColor = _s.props.rlAudioVisualizerCircleColor || '#b9b9b9';
			_s.rlThumbnailsPreviewLabelBackgroundColor = _s.props.rlThumbnailsPreviewLabelBackgroundColor || "#414141";
			_s.rlThumbnailsPreviewLabelFontColor = _s.props.rlThumbnailsPreviewLabelFontColor || "#CCCCCC";
			_s.rlSkipToVideoText = _s.props.rlSkipToVideoText || "You can skip to video in: ",
			_s.rlSkipToVideoButtonText = _s.props.rlSkipToVideoButtonText || "Skip Ad";
			_s.rlYoutubeQualityButtonSelectedClr = _s.props.rlYoutubeQualityButtonSelectedColor || '#FFFFFF';
			_s.rlYoutubeQualityButtonNormalClr = _s.props.rlYoutubeQualityButtonNormalColor || '#B9B9B9';

			// Thumbs video player.
			_s.useVideoInThumb_bl = _s.props.useVideoInThumb == "yes" ? true : false;
			
			// Create galleries.
			var dataListAr = FWDIGPUtils.getChildById(_s.props.galleryId);
			if(!dataListAr){
				errorMessage = "Gallery data div with the id - <font color='#FF0000'>" + _s.props.galleryId + "</font> doesn't exists.";
				_s.dispatchEvent(FWDIGPData.LOAD_ERROR, {error:errorMessage});
				return;
			}

			dataListAr = FWDIGPUtils.getChildren(dataListAr);

			_s.totalDataLists = dataListAr.length;
			var allCatAr = [];
			var allMediaAr = [];
			var allLightboxAr = [];
			var mediaAr;
			var dataAr;
			var childKidsAr;
			var curUlElem;
			var totalChildren;
			var totalInnerChildren;
			var dataListChildrenAr;
			var mediaKid;
			var attributeMissing;
			var dataListPositionError;
			var positionError;
			var errorMsg;
			var dataAll_ar = [];

			for (var i=0; i<_s.totalDataLists; i++){

				var lightboxParsedPlaylist_ar = [];
				curUlElem = dataListAr[i];
				dataAr = [];
				mediaAr = [];
				dataListChildrenAr = FWDIGPUtils.getChildren(curUlElem);

				
				if(_s.randomizeCategories_bl){
					dataListChildrenAr = FWDIGPUtils.randomizeArray(dataListChildrenAr);
				}
				totalChildren = dataListChildrenAr.length;
				
				if(totalChildren < 9){
					errorMsg = "A minimum of <font color='#FF0000'>9</font> images are required in the gallery nr: <font color='#FF0000'>" + (i + 1) + "</font>";
					_s.dispatchEvent(FWDIGPData.LOAD_ERROR, {error:errorMsg});
					return;
				}

			
				for (var j=0; j<totalChildren; j++){
					var obj = {};
					var child = dataListChildrenAr[j];
					var childKidsAr = FWDIGPUtils.getChildren(child);
				
					var galleryError = i + 1;
					var positionError = j + 1;
					totalInnerChildren = childKidsAr.length;
			
					// Check for data-thumb-src attribute.
					var hasError = true;
					for(var k=0; k<totalInnerChildren; k++){
						attributeMissing = "data-thumb-src";
					
						if (FWDIGPUtils.hasAttribute(childKidsAr[k], "data-thumb-src")){
							hasError = false;
							obj.thumbSrc = FWDIGPUtils.trim(FWDIGPUtils.getAttributeValue(childKidsAr[k], "data-thumb-src"));
							break;
						}
					}
				
					if(hasError){
						errorMsg = "Please add the <font color='#FF0000'>data-thumb-src</font> attribute the gallery nr: <font color='#FF0000'>" + galleryError + "</font> at position <font color='#FF0000'>" + positionError +  "</font>";
						_s.dispatchEvent(FWDIGPData.LOAD_ERROR, {error:errorMsg});
						return;
					}

					obj.type = "none";
					obj.thumbVideoSrc = FWDIGPUtils.getAttributeValue(childKidsAr[k], "data-thumb-video-src");
					obj.password = FWDIGPUtils.getAttributeValue(childKidsAr[k], "data-thumb-password");
					obj.subtitleSrc = FWDIGPUtils.getAttributeValue(childKidsAr[k], "data-thumb-subtitle-src");
					obj.thumbVastSrc = FWDIGPUtils.getAttributeValue(childKidsAr[k], "data-thumb-vast-src");
					obj.thumbPreview = FWDIGPUtils.getAttributeValue(childKidsAr[k], "data-thumb-preview");
					obj.thumbOverlayColor = FWDIGPUtils.getAttributeValue(childKidsAr[k], "data-thumb-overlay-color");
					obj.link = FWDIGPUtils.getAttributeValue(childKidsAr[k], "data-thumb-link");

					var soTarget = FWDIGPUtils.getAttributeValue(childKidsAr[k], "data-thumb-target");
					if(soTarget){
						 obj.target = soTarget;
					}else{
						 obj.target = '_blank';
					}

					if(_s.showCaption_bl || _s.showCaptionOnThumbVideo_bl){
						for (var k=0; k<totalInnerChildren; k++){
							if (FWDIGPUtils.hasAttribute(childKidsAr[k], "data-thumb-caption")){
								obj.thumbCaption = childKidsAr[k].innerHTML;
								mediaKid = childKidsAr[k];
								break;
							}
						}
						
						obj.captionOffset = 0;
						if(mediaKid){
							if(FWDIGPUtils.getAttributeValue(mediaKid, "data-thumb-caption-offset")){
								obj.captionOffset = parseInt(FWDIGPUtils.trim(FWDIGPUtils.getAttributeValue(mediaKid, "data-thumb-caption-offset")));
							}
						}
					}

					// Portfolio.
					obj.cats = [];
					var contentCh = FWDIGPUtils.getChildren(child);

					for(var u=0; u<contentCh.length; u++){
						var ch2 = contentCh[u];

						if(FWDIGPUtils.hasAttribute(ch2, 'data-category')){
							var categories = FWDIGPUtils.getChildren(ch2);
							for(var x=0; x<categories.length; x++ ){
								obj.cats.push(categories[x].innerText);
							}
						}

						if(FWDIGPUtils.hasAttribute(ch2, "data-title")){
							obj.title = ch2.innerHTML;
						}


						if(FWDIGPUtils.hasAttribute(ch2, "data-client")){
							obj.client = ch2.innerHTML;
						}

						if(FWDIGPUtils.hasAttribute(ch2, "data-likes")){
							obj.likes = ch2.innerHTML;
						}

						if(FWDIGPUtils.hasAttribute(ch2, "data-thumbnail-extra-content")){
							obj.htmlExtraContent_str = ch2.innerHTML;
							_s.hasExtraText_bl = true;
						}
					}

				

					obj.type = "none";

					// Set arrays for lightbox.
					var rlKid;
					for (var k=0; k<totalInnerChildren; k++){
						rlKid = undefined;
						if (FWDIGPUtils.hasAttribute(childKidsAr[k], "data-rl-src")){
							rlKid = childKidsAr[k];
							break;
						}
					}

					var secondObj = undefined;
					if(rlKid){
						secondObj = {};
						secondObj.type = 'none';
						
						secondObj.src = String(FWDIGPUtils.getAttributeValue(rlKid, "data-rl-src"));
						secondObj.thumbSrc = obj.thumbSrc;
					
						var soPosterSrc = FWDIGPUtils.getAttributeValue(rlKid, "data-rl-poster-src");
						if(soPosterSrc) secondObj.posterSrc = soPosterSrc;

						var soPassword = FWDIGPUtils.getAttributeValue(rlKid, "data-rl-password");
						if(soPassword) secondObj.password = soPassword;

						var soSubtitleSrc = FWDIGPUtils.getAttributeValue(rlKid, "data-rl-subtitle-src");
						if(soSubtitleSrc) secondObj.subtitleSrc = soSubtitleSrc;

						var soThumbnailsPreviewSrc = FWDIGPUtils.getAttributeValue(rlKid, "data-rl-preview-src");
						if(soThumbnailsPreviewSrc) secondObj.thumbnailsPreviewSrc = soThumbnailsPreviewSrc;

						var soVastSrc = FWDIGPUtils.getAttributeValue(rlKid, "data-rl-vast-src");
						if(soVastSrc) secondObj.vastSrc = soVastSrc

						var soWidth = FWDIGPUtils.getAttributeValue(rlKid, "data-rl-width");
						if(soWidth) secondObj.width = soWidth

						var soHeight = FWDIGPUtils.getAttributeValue(rlKid, "data-rl-height");
						if(soHeight) secondObj.height = soHeight
						
						// Check for rl caption.
						for (var k=0; k<totalInnerChildren; k++){
							if(FWDIGPUtils.hasAttribute(childKidsAr[k], "data-rl-caption")){
								secondObj.caption = childKidsAr[k].innerHTML;
								break;
							}
						}

						obj.secondObj = secondObj;

						_s.setItemType(secondObj, secondObj.src);

						_s.setItemType(obj, secondObj.src);
						
					}

					if(obj.thumbVideoSrc){
						obj.type = FWDIGP.VIDEO_IN_THUMB;
					}

					if(obj.link){
						obj.type = FWDIGP.LINK;
					}

					if(secondObj && secondObj.type != "link" && secondObj.type != "none" && obj.type != FWDIGP.VIDEO_IN_THUMB){
						lightboxParsedPlaylist_ar.push(secondObj);
						allLightboxAr.push(secondObj);
					}

					dataAr[j] = obj;
					allCatAr.push(obj);
					dataAll_ar.push({firstObj:obj, secondObj:secondObj})
				}

				_s.categoriesAr[i] = FWDIGPUtils.getAttributeValue(curUlElem, "data-cat") || "not defined!";
				_s.dataListAr[i] = dataAr;
				_s.lightboxAr[i] = {playlistItems:lightboxParsedPlaylist_ar};
			}


			if(_s.categoriesAr.length <= 1){
				_s.showAllGalleries = false;
			}

			if (_s.showAllGalleries){
				var tempDataAr = [];
				var tempLightboxAr = [];

				_s.categoriesAr.unshift(_s.allGalleriesMenuLabel);

				if(_s.randomizeCategories_bl){
					dataAll_ar = FWDIGPUtils.randomizeArray(dataAll_ar);
				}

				for(var i=0; i<dataAll_ar.length; i++){
				
					var fObj = dataAll_ar[i].firstObj;
					var scObj = dataAll_ar[i].secondObj;

					if(fObj){
						tempDataAr.push(fObj);
					}
					
					if(scObj){
						tempLightboxAr.push(scObj);
					}
				}
			
				_s.dataListAr.unshift(tempDataAr);
				_s.lightboxAr.unshift({playlistItems:tempLightboxAr});
			}


			
			if(_s.dataListAr.length <= 1){
				_s.showAllGalleries = false;
			}
			
			_s.totalGalleries = _s.categoriesAr.length;

			if(_s.totalGalleries <=1 ){
				_s.startAtGallery = 0;
				_s.showGalleriesMenu = false;
			}
			
			_s.dispatchEvent(FWDIGPData.LOAD_DONE);
		};


		// Set item type.
		_s.setItemType = function(obj, str){
			if(/\.jpg|\.jpeg|\.webp|\.png|\.bmp|\.gif|\.tif|\.tiff|\.jfi|\.jfif|\.exif|\.svg/i.test(str)){
				obj.type = FWDIGP.IMAGE;
			}else if(/\.mp4|\.m3u8|\.mpd/i.test(str)){
				obj.type = FWDIGP.VIDEO;
			}else if(/youtube\./i.test(str)){
				obj.type = FWDIGP.YOUTUBE;
			}else if(/vimeo\./i.test(str)){
				obj.type = FWDIGP.VIMEO;
			}else if(/\.mp3/i.test(str)){
				obj.type = FWDIGP.AUDIO;
			}else if(/https:|http:|\.pdf/i.test(str)){
				obj.type = FWDIGP.IFRAME;
			}
		}
	
		
		// Initialize.
		_s.init();
	};
	
	
	// Set prototype.
	FWDIGPData.setPrototype = function(){
		FWDIGPData.prototype = new FWDIGPEventDispatcher();
	};
	
	FWDIGPData.prototype = null;
	FWDIGPData.PRELOADER_LOAD_DONE = "onPreloaderLoadDone";
	FWDIGPData.LOAD_DONE = "onLoadDone";
	FWDIGPData.LOAD_ERROR = "onLoadError";
	FWDIGPData.LIGHBOX_CLOSE_BUTTON_LOADED = "onLightBoxCloseButtonLoadDone";
	
	window.FWDIGPData = FWDIGPData;
}(window));/**
 * Infinite Grid Pro PACKAGED v3.0
 * Display object.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */


(function (window){

	'use strict';

	/*
	 * @ type values: div, img.
	 * @ positon values: relative, absolute.
	 * @ positon values: hidden.
	 * @ display values: block, inline-block, _s applies only if the position is relative.
	 */
	var FWDIGPDisplayObject = function(type, position, overflow, display, normalPos){
		
		var _s = this;
		_s.listeners = {events_ar:[]};
		
		if(type == "div" || type == "img" || type == "canvas" || type == "input"){
			_s.type = type;	
		}else{
			throw Error("Type is not valid! " + type);
		}
	
		_s.children_ar = [];
		_s.style;
		_s.screen;
		_s.transform;
		_s.position = position || "absolute";
		_s.overflow = overflow || "hidden";
		_s.display = display || "inline-block";
		_s.visible = true;
		_s.buttonMode;
		_s.x = 0;
		_s.y = 0;
		_s.w = 0;
		_s.h = 0;
		_s.rect;
		_s.alpha = 1;
		_s.innerHTML = "";
		_s.opacityType = "";
		_s.isHtml5_bl = false;
		
	
		if(!normalPos){
			_s.hasTransform3d_bl =  FWDIGPUtils.hasTransform3d;
			_s.hasTransform2d_bl =  FWDIGPUtils.hasTransform2d;
		}else{
			_s.hasTransform3d_bl = _s.hasTransform2d_bl = false;
		}
		
		_s.hasBeenSetSelectable_bl = false;
		
		
		// Initialize.
		_s.init = function(){
			_s.setScreen();
		};	
		
		
		// Check if it supports transforms.
		_s.getTransform = function() {
		    var properties = ['transform', 'msTransform', 'WebkitTransform', 'MozTransform', 'OTransform'];
		    var p;
		    while (p = properties.shift()) {
		       if (typeof _s.screen.style[p] !== 'undefined') {
		            return p;
		       }
		    }
		    return false;
		};
		
		
		// Set opacity type.
		_s.getOpacityType = function(){
			var opacityType;
			if (typeof _s.screen.style.opacity != "undefined") {//ie9+ 
				opacityType = "opacity";
			}else{
				opacityType = "filter";
			}
			return opacityType;
		};
		
		
		// Setup main screen.
		_s.setScreen = function(element){
			if(_s.type == "img" && element){
				_s.screen = element;
				_s.setMainProperties();
			}else{
				_s.screen = document.createElement(_s.type);
				_s.setMainProperties();
			}
		};
		
	
		// Set main properties.
		_s.setMainProperties = function(){
			
			_s.transform = _s.getTransform();
			_s.setPosition(_s.position);
			_s.setOverflow(_s.overflow);
			_s.opacityType = _s.getOpacityType();
			
			if(_s.opacityType == "opacity") _s.isHtml5_bl = true;
			
			if(_s.opacityType == "filter") _s.screen.style.filter = "inherit";
			_s.screen.style.left = "0px";
			_s.screen.style.top = "0px";
			_s.screen.style.margin = "0px";
			_s.screen.style.padding = "0px";
			_s.screen.style.maxWidth = "none";
			_s.screen.style.maxHeight = "none";
			_s.screen.style.border = "none";
			_s.screen.style.lineHeight = "1";
			_s.screen.style.backfaceVisibility = "hidden";
			_s.screen.style.webkitBackfaceVisibility = "hidden";
			_s.screen.style.MozBackfaceVisibility = "hidden";	
			
			if(type == "img"){
				_s.setWidth(_s.screen.width);
				_s.setHeight(_s.screen.height);
			}
		};
			
		_s.setBackfaceVisibility =  function(){
			_s.screen.style.backfaceVisibility = "visible";
			_s.screen.style.webkitBackfaceVisibility = "visible";
			_s.screen.style.MozBackfaceVisibility = "visible";		
		};
		
		
		// Set / get various peoperties.
		_s.setSelectable = function(val){
			if(!val){
				_s.screen.style.userSelect = "none";
				_s.screen.style.MozUserSelect = "none";
				_s.screen.style.webkitUserSelect = "none";
				_s.screen.style.khtmlUserSelect = "none";
				_s.screen.style.oUserSelect = "none";
				_s.screen.style.msUserSelect = "none";
				_s.screen.msUserSelect = "none";
				_s.screen.ondragstart = function(e){return false;};
				_s.screen.onselectstart = function(){return false;};
				_s.screen.ontouchstart = function(){return false;};
				_s.screen.style.webkitTouchCallout='none';
				_s.hasBeenSetSelectable_bl = true;
			}
		};
		
		_s.getScreen = function(){
			return _s.screen;
		};
		
		_s.setVisible = function(val){
			_s.visible = val;
			if(_s.visible == true){
				_s.screen.style.visibility = "visible";
			}else{
				_s.screen.style.visibility = "hidden";
			}
		};
		
		_s.getVisible = function(){
			return _s.visible;
		};
			
		_s.setResizableSizeAfterParent = function(){
			_s.screen.style.width = "100%";
			_s.screen.style.height = "100%";
		};
		
		_s.getStyle = function(){
			return _s.screen.style;
		};
		
		_s.setOverflow = function(val){
			_s.overflow = val;
			_s.screen.style.overflow = _s.overflow;
		};
		
		_s.setPosition = function(val){
			_s.position = val;
			_s.screen.style.position = _s.position;
		};
		
		_s.setDisplay = function(val){
			_s.display = val;
			_s.screen.style.display = _s.display;
		};
		
		_s.setButtonMode = function(val){
			_s.buttonMode = val;
			if(_s.buttonMode ==  true){
				_s.screen.style.cursor = "pointer";
			}else{
				_s.screen.style.cursor = "default";
			}
		};
		
		_s.setBkColor = function(val){
			_s.screen.style.backgroundColor = val;
		};
		
		_s.setInnerHTML = function(val){
			_s.innerHTML = val;
			_s.screen.innerHTML = _s.innerHTML;
		};
		
		_s.getInnerHTML = function(){
			return _s.innerHTML;
		};
		
		_s.getRect = function(){
			return _s.screen.getBoundingClientRect();
		};
		
		_s.setAlpha = function(val){
			_s.alpha = val;
			if(_s.opacityType == "opacity"){
				_s.screen.style.opacity = _s.alpha;
			}else if(_s.opacityType == "filter"){
				_s.screen.style.filter = "alpha(opacity=" + _s.alpha * 100 + ")";
				_s.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(_s.alpha * 100) + ")";
			}
		};
		
		_s.getAlpha = function(){
			return _s.alpha;
		};
		
		_s.getRect = function(){
			return _s.screen.getBoundingClientRect();
		};
		
		_s.getGlobalX = function(){
			return _s.getRect().left;
		};
		
		_s.getGlobalY = function(){
			return _s.getRect().top;
		};
		
		_s.setX = function(val){
			_s.x = val;
			if(_s.hasTransform3d_bl){
				_s.screen.style[_s.transform] = 'translate3d(' + _s.x + 'px,' + _s.y + 'px,0)';
			}else if(_s.hasTransform2d_bl){
				_s.screen.style[_s.transform] = 'translate(' + _s.x + 'px,' + _s.y + 'px)';
			}else{
				_s.screen.style.left = _s.x + "px";
			}
		};
		
		_s.getX = function(){
			return  _s.x;
		};
		
		_s.setY = function(val){
			_s.y = val;
			if(_s.hasTransform3d_bl){
				_s.screen.style[_s.transform] = 'translate3d(' + _s.x + 'px,' + _s.y + 'px,0)';	
			}else if(_s.hasTransform2d_bl){
				_s.screen.style[_s.transform] = 'translate(' + _s.x + 'px,' + _s.y + 'px)';
			}else{
				_s.screen.style.top = _s.y + "px";
			}
		};
		
		_s.getY = function(){
			return  _s.y;
		};
		
		_s.setWidth = function(val){
			_s.w = val;
			if(_s.type == "img"){
				_s.screen.width = _s.w;
				_s.screen.style.width = _s.w + "px";
			}else{
				_s.screen.style.width = _s.w + "px";
			}
		};
		
		_s.getWidth = function(){
			if(_s.type == "div"){
				if(_s.screen.offsetWidth != 0) return  _s.screen.offsetWidth;
				return _s.w;
			}else if(_s.type == "img"){
				if(_s.screen.offsetWidth != 0) return  _s.screen.offsetWidth;
				if(_s.screen.width != 0) return  _s.screen.width;
				return _s._w;
			}else if( _s.type == "canvas"){
				if(_s.screen.offsetWidth != 0) return  _s.screen.offsetWidth;
				return _s.w;
			}
		};
		
		_s.setHeight = function(val){
			_s.h = val;
			if(_s.type == "img"){
				_s.screen.height = _s.h;
				_s.screen.style.height = _s.h + "px";
			}else{
				_s.screen.style.height = _s.h + "px";
			}
		};
		
		_s.getHeight = function(){
			if(_s.type == "div"){
				if(_s.screen.offsetHeight != 0) return  _s.screen.offsetHeight;
				return _s.h;
			}else if(_s.type == "img"){
				if(_s.screen.offsetHeight != 0) return  _s.screen.offsetHeight;
				if(_s.screen.height != 0) return  _s.screen.height;
				return _s.h;
			}else if(_s.type == "canvas"){
				if(_s.screen.offsetHeight != 0) return  _s.screen.offsetHeight;
				return _s.h;
			}
		};
		
		
		// DOM list.
		_s.addChild = function(e){
			if(_s.contains(e)){	
				_s.children_ar.splice(FWDIGPUtils.indexOfArray(_s.children_ar, e), 1);
				_s.children_ar.push(e);
				_s.screen.appendChild(e.screen);
			}else{
				_s.children_ar.push(e);
				_s.screen.appendChild(e.screen);
			}
		};

		_s.removeAllChilds = function(){
			for(var i=0; i<_s.getNumChildren(); i++){
				var removedChild = _s.children_ar.splice(0, 1)[0];
				_s.screen.removeChild(removedChild.screen);
				i--;
			}
		};
		
		_s.removeChild = function(e){
			if(_s.contains(e)){
				_s.children_ar.splice(FWDIGPUtils.indexOfArray(_s.children_ar, e), 1);
				_s.screen.removeChild(e.screen);
			}else{
				throw Error("##removeChild()## Child dose't exist, it can't be removed!");
			};
		};
		
		_s.contains = function(e){
			if(FWDIGPUtils.indexOfArray(_s.children_ar, e) == -1){
				return false;
			}else{
				return true;
			}
		};
		
		_s.addChildAt = function(e, index){
			if(_s.getNumChildren() == 0){
				_s.children_ar.push(e);
				_s.screen.appendChild(e.screen);
			}else if(index == 1){
				_s.screen.insertBefore(e.screen, _s.children_ar[0].screen);
				_s.screen.insertBefore(_s.children_ar[0].screen, e.screen);	
				if(_s.contains(e)){
					_s.children_ar.splice(FWDIGPUtils.indexOfArray(_s.children_ar, e), 1, e);
				}else{
					_s.children_ar.splice(FWDIGPUtils.indexOfArray(_s.children_ar, e), 0, e);
				}
			}else{
				if(index < 0  || index > _s.getNumChildren() -1) throw Error("##getChildAt()## Index out of bounds!");
				_s.screen.insertBefore(e.screen, _s.children_ar[index].screen);
				if(_s.contains(e)){
					_s.children_ar.splice(FWDIGPUtils.indexOfArray(_s.children_ar, e), 1, e);
				}else{
					_s.children_ar.splice(FWDIGPUtils.indexOfArray(_s.children_ar, e), 0, e);
				}
			}
		};
		
		_s.getChildAt = function(index){
			if(index < 0  || index > _s.getNumChildren() -1) throw Error("##getChildAt()## Index out of bounds!");
			if(_s.getNumChildren() == 0) throw Errror("##getChildAt## Child dose not exist!");
			return _s.children_ar[index];
		};
		
		_s.removeChildAtZero = function(){
			_s.screen.removeChild(_s.children_ar[0].screen);
			_s.children_ar.shift();
		};
		
		_s.getNumChildren = function(){
			return _s.children_ar.length;
		};
		
		_s.setCSSGradient = function(color1, color2){
			if (FWDIGPUtils.isIEAndLessThen10){
				_s.setBkColor(color1);
			}else{
				_s.screen.style.backgroundImage = "-webkit-linear-gradient(top, " + color1 + ", " + color2 + ")";
				_s.screen.style.backgroundImage = "-moz-linear-gradient(top, " + color1 + ", " + color2 + ")";
				_s.screen.style.backgroundImage = "-ms-linear-gradient(top, " + color1 + ", " + color2 + ")";
				_s.screen.style.backgroundImage = "-o-linear-gradient(top, " + color1 + ", " + color2 + ")";
			}
		};
		
		
		// Event dispatcher.
		_s.addListener = function (type, listener){
	    	
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function.");
	    	
	    	
	        var event = {};
	        event.type = type;
	        event.listener = listener;
	        event.target = _s;
	        _s.listeners.events_ar.push(event);
	    };
	    
	    _s.dispatchEvent = function(type, props){
	    	if(_s.listeners == null) return;
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	
	        for (var i=0, len=_s.listeners.events_ar.length; i < len; i++){
	        	if(_s.listeners.events_ar[i].target === _s && _s.listeners.events_ar[i].type === type){		
	    	        if(props){
	    	        	for(var prop in props){
	    	        		_s.listeners.events_ar[i][prop] = props[prop];
	    	        	}
	    	        }
	        		_s.listeners.events_ar[i].listener.call(_s, _s.listeners.events_ar[i]);
	        	}
	        }
	    };
	    
	    _s.removeListener = function(type, listener){
	    	
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function." + type);
	    	
	        for (var i=0, len=_s.listeners.events_ar.length; i < len; i++){
	        	if(_s.listeners.events_ar[i].target === _s 
	        			&& _s.listeners.events_ar[i].type === type
	        			&& _s.listeners.events_ar[i].listener ===  listener
	        	){
	        		_s.listeners.events_ar.splice(i,1);
	        		break;
	        	}
	        }  
	    };
	    
	   
	    // Destroy methods.
		_s.disposeImage = function(){
			if(_s.type == "img") _s.screen.src = null;
		};
		
		
		_s.destroy = function(){
			
			if(_s.hasBeenSetSelectable_bl){
				_s.screen.ondragstart = null;
				_s.screen.onselectstart = null;
				_s.screen.ontouchstart = null;
			};
			
			_s.screen.removeAttribute("style");
			
			// Destroy properties.
			_s.listeners = [];
			_s.listeners = null;
			_s.children_ar = [];
			_s.children_ar = null;
			_s.style = null;
			_s.screen = null;
			_s.transform = null;
			_s.position = null;
			_s.overflow = null;
			_s.display = null;
			_s.visible = null;
			_s.buttonMode = null;
			_s.x = null;
			_s.y = null;
			_s.w = null;
			_s.h = null;
			_s.rect = null;
			_s.alpha = null;
			_s.innerHTML = null;
			_s.opacityType = null;
			_s.isHtml5_bl = null;
		
			_s.hasTransform3d_bl = null;
			_s.hasTransform2d_bl = null;
			_s = null;
		};
		
	    // Initialize.
		_s.init();
	};
	
	window.FWDIGPDisplayObject = FWDIGPDisplayObject;
}(window));/**
 * Infinite Grid Pro PACKAGED v3.0
 * Event dispatcher.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function (){

	'use strict';
	
	var FWDIGPEventDispatcher = function (){
		
	    this.listeners = {events_ar:[]};
	     
	    this.addListener = function (type, listener){
	    	
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function.");
	    	
	    	
	        var event = {};
	        event.type = type;
	        event.listener = listener;
	        event.target = this;
	        this.listeners.events_ar.push(event);
	    };
	    
	    this.dispatchEvent = function(type, props){
	    	if(this.listeners == null) return;
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	
	        for (var i=0, len=this.listeners.events_ar.length; i < len; i++){
	        	if(this.listeners.events_ar[i].target === this && this.listeners.events_ar[i].type === type){		
	    	        if(props){
	    	        	for(var prop in props){
	    	        		this.listeners.events_ar[i][prop] = props[prop];
	    	        	}
	    	        }
	        		this.listeners.events_ar[i].listener.call(this, this.listeners.events_ar[i]);
	        	}
	        }
	    };
	    
	   this.removeListener = function(type, listener){
	    	
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function." + type);
	    	
	        for (var i=0, len=this.listeners.events_ar.length; i < len; i++){
	        	if(this.listeners.events_ar[i].target === this 
	        			&& this.listeners.events_ar[i].type === type
	        			&& this.listeners.events_ar[i].listener ===  listener
	        	){
	        		this.listeners.events_ar.splice(i,1);
	        		break;
	        	}
	        }  
	    };
	    
	    /* destroy */
	    this.destroy = function(){
	    	this.listeners = null;
	    	
	    	this.addListener = null;
		    this.dispatchEvent = null;
		    this.removeListener = null;
	    };
	    
	};	
	
	window.FWDIGPEventDispatcher = FWDIGPEventDispatcher;
}(window));/**
 * Infinite Grid Pro PACKAGED v3.0
 * Info screen.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function (window){

	'use strict';
	
	var FWDIGPInfo = function(parent, warningIconPath){
		
		var _s = this;
		var prototype = FWDIGPInfo.prototype;
	
		_s.textHolder_do = null;
		_s.img_do;
		
		_s.warningIconPath = warningIconPath;
		
		_s.show_to = null;
		_s.isShowed_bl = false;
		_s.isShowedOnce_bl = false;
		_s.allowToRemove_bl = true;
		
		
		// Initialize.
		_s.init = function(){
			_s.setResizableSizeAfterParent();
		
			_s.getStyle().width = "80%";
		
			_s.textHolder_do = new FWDIGPDisplayObject("div");
			if(!FWDIGPUtils.isIEAndLessThen9) _s.textHolder_do.getStyle().font = "Arial";
			_s.textHolder_do.getStyle().wordWrap = "break-word";
			_s.textHolder_do.getStyle().padding = "10px";
			_s.textHolder_do.getStyle().paddingLeft = "42px";
			_s.textHolder_do.getStyle().lineHeight = "18px";
			_s.textHolder_do.setBkColor("#EEEEEE");
			
			var img_img = new Image();
			img_img.src = _s.warningIconPath;
			_s.img_do = new FWDIGPDisplayObject("img");
			_s.img_do.setScreen(img_img);
			_s.img_do.setWidth(28);
			_s.img_do.setHeight(28);
			
			
			_s.addChild(_s.textHolder_do);
			_s.addChild(_s.img_do);
		};
		
		_s.showText = function(txt){
			
			clearTimeout(_s.checkId_to);
			_s.checkId_to = setTimeout(function(){
				window.removeEventListener("click", _s.closeWindow);
				window.addEventListener("click", _s.closeWindow);
				_s.isShowedOnce_bl = true;
			}, 50);
				
			_s.textHolder_do.setInnerHTML(txt);
			clearTimeout(_s.show_to);
			_s.show();
		};
		
		_s.show = function(){
			_s.isShowed_bl = true;
			_s.setVisible(true);
			setTimeout(function(){
				_s.positionAndResize();
			}, 60);
		};
		
		_s.positionAndResize = function(){		
			_s.setHeight(_s.textHolder_do.getHeight());
			_s.img_do.setX(6);
			_s.img_do.setY(parseInt((_s.h - _s.img_do.h)/2));
	
		};
		
		_s.closeWindow = function(){
			if(!_s.allowToRemove_bl) return;
			clearTimeout(_s.checkId_to);
			window.removeEventListener("click", _s.closeWindow);
			_s.isShowed_bl = false;
			clearTimeout(_s.show_to);
			try{parent.main_do.removeChild(_s);}catch(e){}
		};
		
		_s.init();
	};
		
	// Set prototype.
	FWDIGPInfo.setPrototype = function(){
		FWDIGPInfo.prototype = new FWDIGPDisplayObject("div", "relative");
	};
	
	FWDIGPInfo.prototype = null;
	window.FWDIGPInfo = FWDIGPInfo;
}(window));/**
 * Infinite Grid Pro PACKAGED v3.0
 * Scroll look icon.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function (){
var FWDIGPLockIcon = function(
			prt,
			clsName,
			icon1_str, 
			icon2_str,
			bkNormCls,
			bkSelCls, 
			normCls,
			selCls
		){

		'use strict';
		
		var _s = this;
		var prototype = FWDIGPLockIcon.prototype;
		
		_s.clsName = clsName;
		_s.icon1_str = icon1_str;
		_s.icon2_str = icon2_str;
		_s.bkNormCls = bkNormCls;
		_s.bkSelCls = bkSelCls;
		_s.normCls = normCls;
		_s.selCls = selCls;
		_s.checkCount = 0;
		_s.currentState = 1;
		_s.isMobile_bl = FWDIGPUtils.isMobile;
		_s.hasPointerEvent_bl = FWDIGPUtils.hasPointerEvent;
	

		// Initialize.
		_s.init = function(){
			_s.screen.className = clsName;
			_s.setButtonMode(true);
			_s.setWidth(2);
			_s.setHeight(2);
			_s.setupMainContainers();
			_s.secondBtn_do.setVisible(false);
			_s.setNormalState();
			if(_s.isMobile_bl) _s.setSelectedState();
			_s.setFinalSize();
			_s.hide();
		};
		

		// Setup main containers.
		_s.setupMainContainers = function(){
			_s.screen.style.transformOrigin = "50% 50%";
			_s.main_do = new FWDIGPDisplayObject("div");
			
			// First button.
			_s.firstBtn_do = new FWDIGPDisplayObject("div");
			_s.firstBtn_do.setOverflow("visible");
			_s.n1_do = new FWDIGPDisplayObject("div");	
			_s.n1_do.hasT3D = false;
			_s.n1_do.hasT2D = false;
			_s.n1_do.setInnerHTML(_s.icon1_str);
			_s.firstBtn_do.addChild(_s.n1_do);
			
			
			// Second button.
			_s.secondBtn_do = new FWDIGPDisplayObject("div");
			_s.secondBtn_do.setOverflow("visible");
			_s.n2_do = new FWDIGPDisplayObject("div");	
			_s.n2_do.hasT3D = false;
			_s.n2_do.hasT2D = false;
			_s.n2_do.setInnerHTML(_s.icon2_str);
			_s.secondBtn_do.addChild(_s.n2_do);

			_s.main_do.addChild(_s.secondBtn_do);
			_s.main_do.addChild(_s.firstBtn_do);
			_s.addChild(_s.main_do);
			
			if(_s.hasPointerEvent_bl){
				_s.screen.addEventListener("pointerup", _s.onMUP);
				_s.screen.addEventListener("pointerover", _s.onMOV);
				_s.screen.addEventListener("pointerout", _s.onMOU);
			}else if(_s.screen.addEventListener){	
				if(!_s.isMobile_bl){
					_s.screen.addEventListener("mouseover", _s.onMOV);
					_s.screen.addEventListener("mouseout", _s.onMOU);
					_s.screen.addEventListener("mouseup", _s.onMUP);
				}
				_s.screen.addEventListener("touchend", _s.onMUP);
			}
		};
		
		_s.onMOV = function(e, animate){
			if(_s.isDisabled_bl || _s.isSelectedState_bl) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == "mouse"){
				_s.dispatchEvent(FWDIGPLockIcon.MOUSE_OVER, {e:e});;
				_s.setSelectedState(true);
			}
		};
			
		_s.onMOU = function(e){
			if(_s.isDisabled_bl || !_s.isSelectedState_bl) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == "mouse"){
				_s.setNormalState(true);
				_s.dispatchEvent(FWDIGPLockIcon.MOUSE_OUT);
			}
		};
	
		_s.onMUP = function(e){
			if(_s.isDisabled_bl || e.button == 2) return;
			if(e.preventDefault) e.preventDefault();
			if(!_s.isMobile_bl) _s.onMOV(e, false);
			if(_s.disptachMainEvent_bl) _s.dispatchEvent(FWDIGPLockIcon.MOUSE_UP, {e:e});
			_s.toggleButton();
		};
		
		
		// Set final size.
		_s.setFinalSize = function(){
			
			clearInterval(_s.checkId_int);
			_s.lastWidth = _s.n1_do.screen.firstChild.offsetWidth;
			if(_s.checkCount > 10) return;
			_s.checkCount ++;
				
			_s.checkId_int = setInterval(function(){
				_s.setFinalSize();
			},100);
			
			if((_s.prevWidth == _s.lastWidth || _s.lastWidth == 0)) return;
			var maxWidth = Math.max(_s.n1_do.screen.firstChild.offsetWidth, _s.n2_do.screen.firstChild.offsetWidth); 
			var maxHeight = Math.max(_s.n1_do.screen.offsetHeight, _s.n2_do.screen.firstChild.offsetHeight); 
			_s.buttonWidth = maxWidth;
			_s.buttonHeight = maxHeight;
			
			_s.setWidth(maxWidth + 15);
			_s.setHeight(maxHeight + 15);
			_s.main_do.setWidth(maxWidth);
			_s.main_do.setHeight(maxHeight);
			
			_s.firstBtn_do.setWidth(_s.w);
			_s.firstBtn_do.setHeight(_s.h);
			_s.secondBtn_do.setWidth(_s.w);
			_s.secondBtn_do.setHeight(_s.h);

			_s.n1_do.setX(Math.round((maxWidth - _s.n1_do.getWidth())/2));
			_s.n1_do.setY(Math.round((maxHeight - _s.n1_do.getHeight())/2) + 1);
			_s.n2_do.setX(Math.round((maxWidth - _s.n2_do.getWidth())/2));
			_s.n2_do.setY(Math.round((maxHeight - _s.n2_do.getHeight())/2) + 1);
		
			_s.prevWidth = _s.lastWidth;
		}
		

		// Toggle button.
		_s.toggleButton = function(){
			if(prt.isCategoryChanging_bl) return;
			if(_s.currentState == 1){
				_s.firstBtn_do.setVisible(false);
				_s.secondBtn_do.setVisible(true);
				_s.currentState = 0;
				_s.dispatchEvent(FWDIGPLockIcon.FIRST_BUTTON_CLICK);
			}else{
				_s.firstBtn_do.setVisible(true);
				_s.secondBtn_do.setVisible(false);
				_s.currentState = 1;
				_s.dispatchEvent(FWDIGPLockIcon.SECOND_BUTTON_CLICK);
			}
		};
		

		// Set second buttons state.
		_s.setButtonState = function(state){
			if(state == 1){
				_s.firstBtn_do.setVisible(true);
				_s.secondBtn_do.setVisible(false);
				_s.currentState = 1; 
			}else{
				_s.firstBtn_do.setVisible(false);
				_s.secondBtn_do.setVisible(true);
				_s.currentState = 0; 
			}
		};
		
	
		// Set normal state.
		_s.setNormalState = function(animate){
			_s.isSelectedState_bl = false;
			
			FWDAnimation.killTweensOf(_s.main_do.screen);
			FWDAnimation.killTweensOf(_s.n1_do.screen);
			FWDAnimation.killTweensOf(_s.n2_do.screen);
				
			if(animate){
				FWDAnimation.to(_s.main_do.screen, .8, {className:_s.bkNormCls, ease:Expo.easeOut});
				FWDAnimation.to(_s.n1_do.screen, .8, {className:_s.normCls, ease:Expo.easeOut});	
				FWDAnimation.to(_s.n2_do.screen, .8, {className:_s.normCls, ease:Expo.easeOut});
			}else{
				_s.main_do.screen.className = _s.bkNormCls;
				_s.n1_do.screen.className = _s.normCls;
				_s.n2_do.screen.className = _s.normCls;
			}
		};
		
		_s.setSelectedState = function(animate){
			_s.isSelectedState_bl = true;
			
			FWDAnimation.killTweensOf(_s.n1_do.screen);
			FWDAnimation.killTweensOf(_s.n2_do.screen);
			if(animate){
				FWDAnimation.to(_s.main_do.screen, .8, {className:_s.bkSelCls, ease:Expo.easeOut});
				FWDAnimation.to(_s.n1_do.screen, .8, {className:_s.selCls, ease:Expo.easeOut});	
				FWDAnimation.to(_s.n2_do.screen, .8, {className:_s.selCls, ease:Expo.easeOut});	
			}else{
				_s.main_do.screen.className = _s.bkSelCls;
				_s.n1_do.screen.className = _s.selCls;
				_s.n2_do.screen.className = _s.selCls;
			}	
		};

		// Show / hide.
		_s.show = function(anim, dl){
			dl = dl || 0;
			FWDAnimation.killTweensOf(_s);
			if(anim){
				FWDAnimation.to(_s, .8, {scale:1, delay:dl, ease:Elastic.easeOut});
			}else{
				_s.setScale2(1);
			}
		}

		_s.hide = function(){
			FWDAnimation.killTweensOf(_s);
			_s.setScale2(0);
		}
		

		// Disable / enable.
		_s.disable = function(){
			if(_s.isDisabled_bl) return;
			_s.isDisabled_bl = true;
			_s.setButtonMode(false);
			FWDAnimation.killTweensOf(_s);
			FWDAnimation.to(_s, .6, {alpha:.4});
			_s.setNormalState();
		};
		
		_s.enable = function(){
			if(!_s.isDisabled_bl) return;
			_s.isDisabled_bl = false;
			_s.setButtonMode(true);
			FWDAnimation.killTweensOf(_s);
			FWDAnimation.to(_s, .6, {alpha:1});
		};
		
		_s.init();
	};
	
	
	// Set prototype.
	FWDIGPLockIcon.setPrototype = function(){
		FWDIGPLockIcon.prototype = new FWDIGPTransformDisplayObject("div");
	};
	
	FWDIGPLockIcon.FIRST_BUTTON_CLICK = "onFirstClick";
	FWDIGPLockIcon.SECOND_BUTTON_CLICK = "secondButtonOnClick";
	FWDIGPLockIcon.MOUSE_OVER = "onMOV";
	FWDIGPLockIcon.MOUSE_OUT = "onMOU";
	FWDIGPLockIcon.MOUSE_UP = "onMUP";
	FWDIGPLockIcon.CLICK = "onClick";
	
	FWDIGPLockIcon.prototype = null;
	window.FWDIGPLockIcon = FWDIGPLockIcon;
}(window));/**
 * Infinite Grid Pro PACKAGED v3.0
 * Preloader.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function (window){

	'use strict';
	
	var FWDIGPSP = function(prt, preloaderPostion, radius, backgroundColor, fillColor, strokeSize, animDuration){
		
		var _s  = this;
		var prototype = FWDIGPSP.prototype;
		_s.preloaderPostion = preloaderPostion;
		_s.backgroundColor = backgroundColor;
		_s.fillColor = fillColor;
		_s.radius = radius;
		_s.strokeSize = strokeSize;
		_s.animDuration = animDuration || 300;
		_s.strtAngle = 270;
		_s.countAnimation = 0;
		_s.isShowed_bl = true;
		_s.slideshowAngle = {n:0};
		
		
		// Intialize.
		_s.init = function(){
			_s.main_do = new FWDIGPDisplayObject("div");
			_s.main_do.setOverflow("visible");
			_s.main_do.setWidth(_s.radius * 2 + _s.strokeSize);
			_s.main_do.setHeight(_s.radius * 2 + _s.strokeSize);
			_s.addChild(_s.main_do);
			_s.setOverflow('visible');
			_s.setWidth((_s.radius * 2) + _s.strokeSize);
			_s.setHeight((_s.radius * 2) + _s.strokeSize);
			_s.bkCanvas =  new FWDIGPDisplayObject("canvas");
			_s.bkCanvasContext = _s.bkCanvas.screen.getContext('2d');
			_s.fillCircleCanvas = new FWDIGPDisplayObject("canvas");
			_s.fillCircleCanvasContext = _s.fillCircleCanvas.screen.getContext('2d');

			_s.bkCanvas.screen.className = 'canvas-background';
			_s.fillCircleCanvas.screen.className = 'canvas-fill';

			_s.main_do.screen.style.transformOrigin ="50% 50%";
		
			_s.main_do.addChild(_s.bkCanvas);
			_s.main_do.addChild(_s.fillCircleCanvas);
			_s.drawBackground();
			_s.drawFill();
			_s.hide();
		};

		
		// Postion.
		_s.positionAndResize = function(){

			var paralax_bl = prt && prt.paralax_bl;
			var offsetY = (paralax_bl ? prt.pageYOffset/2 : 0);
			
			if(_s.preloaderPostion == 'bottomleft'){
				_s.setX(prt.offsetPreloader);
				_s.setY(prt.stageHeight - _s.h - prt.offsetPreloader + Math.round(offsetY));
			}else if(_s.preloaderPostion == 'bottomright'){
				_s.setX(prt.stageWidth - _s.w - prt.offsetPreloader);
				_s.setY(prt.stageHeight - _s.h - prt.offsetPreloader + Math.round(offsetY));
			}else if(_s.preloaderPostion == 'topright'){
				_s.setX(prt.stageWidth - _s.w - prt.offsetPreloader + Math.round(offsetY));
				_s.setY(prt.offsetPreloader);
			}else if(_s.preloaderPostion == 'topleft'){
				_s.setX(prt.offsetPreloader);
				_s.setY(prt.offsetPreloader + Math.round(offsetY)) ;
			}else if(_s.preloaderPostion == 'center'){
				_s.setX(Math.round(prt.stageWidth - _s.w)/2);
				_s.setY(Math.round(prt.stageHeight - _s.h)/2 + Math.round(offsetY));
			}
		}	


		// Draw background.
		_s.drawBackground = function(){
			_s.bkCanvas.screen.width = (_s.radius * 2) + _s.strokeSize * 2;
			_s.bkCanvas.screen.height = (_s.radius * 2) + _s.strokeSize * 2;
			_s.bkCanvasContext.lineWidth = _s.thicknessSize;
			_s.bkCanvasContext.translate(_s.strokeSize/2, _s.strokeSize/2);
			_s.bkCanvasContext.shadowColor = '#333333';
		    _s.bkCanvasContext.shadowBlur = 1;
		   
			_s.bkCanvasContext.lineWidth=_s.strokeSize;
			_s.bkCanvasContext.strokeStyle = _s.backgroundColor;
			_s.bkCanvasContext.beginPath();
			_s.bkCanvasContext.arc(_s.radius, _s.radius,  _s.radius, (Math.PI/180) * 0, (Math.PI/180) * 360, false);
			_s.bkCanvasContext.stroke();
			_s.bkCanvasContext.closePath();
		};
		

		// Draw fill.
		_s.drawFill = function(){	
			_s.fillCircleCanvas.screen.width = (_s.radius * 2) + _s.strokeSize * 2;
			_s.fillCircleCanvas.screen.height = (_s.radius * 2) + _s.strokeSize * 2;
			_s.fillCircleCanvasContext.lineWidth = _s.thicknessSize;
			_s.fillCircleCanvasContext.translate(_s.strokeSize/2, _s.strokeSize/2);
			_s.fillCircleCanvasContext.lineWidth=_s.strokeSize;
			_s.fillCircleCanvasContext.strokeStyle = _s.fillColor;
			_s.fillCircleCanvasContext.beginPath();
			_s.fillCircleCanvasContext.arc(_s.radius, _s.radius,  _s.radius, (Math.PI/180) * _s.strtAngle, (Math.PI/180) * (_s.strtAngle +  _s.slideshowAngle.n), false);
			_s.fillCircleCanvasContext.stroke();
			_s.fillCircleCanvasContext.closePath()
		};
		
		
		// Start / stop preloader animation.
		_s.startSlideshow = function(){
			if(_s == null) return;
			FWDAnimation.killTweensOf(_s.slideshowAngle);
			FWDAnimation.to(_s.slideshowAngle, _s.animDuration, {n:360, onUpdate:_s.drawFill, onComplete:_s.stopSlideshow});
		};
		
		_s.stopSlideshow = function(){
			FWDAnimation.killTweensOf(_s.slideshowAngle);
			FWDAnimation.to(_s.slideshowAngle, .8, {n:0, onupdate:_s.drawFill, onUpdate:_s.drawFill, ease:Expo.easiInOut});
		};
		
		_s.startPreloader = function(){
			if(FWDAnimation.isTweening(_s.main_do.screen)) return;
			_s.slideshowAngle = {n:0};
			FWDAnimation.killTweensOf(_s.slideshowAngle);
			FWDAnimation.to(_s.slideshowAngle, _s.animDuration, {n:360, onUpdate:_s.drawFill, repeat:100, yoyo:true, ease:Expo.easInOut});
			FWDAnimation.to(_s.main_do.screen, _s.animDuration, {rotation:360, repeat:100});
		}
		
		_s.stopPreloader = function(){
			FWDAnimation.killTweensOf(_s.slideshowAngle);
			FWDAnimation.killTweensOf(_s.main_do.screen);
		}
		
		
		// Show / hide preloader animation.
		_s.show = function(){
			if(_s.isShowed_bl) return;
			_s.setVisible(true);
			FWDAnimation.killTweensOf(_s);
			FWDAnimation.to(_s, 1, {alpha:1, delay:.2});
			_s.isShowed_bl = true;
		};
		
		_s.hide = function(animate){
			if(!_s.isShowed_bl) return;
			FWDAnimation.killTweensOf(_s);
			if(animate){
				FWDAnimation.to(_s, 1, {alpha:0, onComplete:_s.onHideComplete});
			}else{
				_s.setVisible(false);
				_s.setAlpha(0);
			}
			_s.isShowed_bl = false;
		};
		
		_s.onHideComplete = function(){
			_s.setVisible(false);
			_s.stopPreloader();
			_s.dispatchEvent(FWDIGPSP.HIDE_COMPLETE);
		};
		
		_s.init();
	};
	

	// Set prototype.
    FWDIGPSP.setPrototype = function(){
    	FWDIGPSP.prototype = new FWDIGPDisplayObject("div");
    };
    
    FWDIGPSP.HIDE_COMPLETE = "hideComplete";
    
    FWDIGPSP.prototype = null;
	window.FWDIGPSP = FWDIGPSP;
}(window));/**
 * Infinite Grid Pro PACKAGED v3.0
 * Thumbnail.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function (window){

	'use strict';
	
	var FWDIGPThumb = function(
			prt,
			transitionType,
			backgroundColor, 
			thumbnailOverlayBackgroundColor,
			thumbnailOverlayOpacity, 
			hasOverlay_bl, 
			isMobile_bl,
			hasIcon_bl,
			openOnSingleTouch_bl,
			disableThumbnailInteractivity_bl,
			showCaption_bl,
			showCaptionOnThumbVideo_bl,
			visitedThumbnailsOverlayOpacity,
			useVideoInThumb_bl,
			preset){
		
		var _s = this;
		var prototype = FWDIGPThumb.prototype;
		
		_s.prt = prt;
		_s.transitionType = transitionType;
		_s.backgroundColor = backgroundColor;
		_s.thumbnailOverlayBackgroundColor = thumbnailOverlayBackgroundColor;
		_s.openOnSingleTouch_bl = openOnSingleTouch_bl;
		_s.visitedThumbnailsOverlayOpacity = visitedThumbnailsOverlayOpacity;
		_s.totalW = 0;
		_s.totalH = 0;
		_s.imageFinalWidth = 0;
		_s.imageFinalHeight = 0;
		_s.imageFinalX = 0;
		_s.imageFinalY = 0;
		_s.smallImageOriginalW = 0;
		_s.smallImageOriginalH = 0;
		_s.iconW = 37;
		_s.iconH = 32;
		_s.overlayOpacity = thumbnailOverlayOpacity;
		_s.isVisited_bl = false;
		_s.hasPointerEvent_bl = FWDIGPUtils.hasPointerEvent;
		_s.hasOverlay_bl = hasOverlay_bl;
		_s.hasIcon_bl = hasIcon_bl;
		_s.isAvailable_bl = true;
		_s.isNormalState_bl = true;
		_s.showCaption_bl = showCaption_bl;
		_s.showCaptionOnThumbVideo_bl = showCaptionOnThumbVideo_bl;
		_s.useVideoInThumb_bl = useVideoInThumb_bl;
		_s.preset = preset;
		_s.isMobile_bl = FWDIGPUtils.isMobile;
		_s.disableThumbnailInteractivity_bl = disableThumbnailInteractivity_bl;

	
		// Initialize.
		_s.init = function(){
			_s.screen.className = 'main';
			if(_s.disableThumbnailInteractivity_bl){
				_s.hasOverlay_bl = false;
				_s.hasIcon_bl = false;
			}
			
			_s.smallImage_img = new Image();
			if(_s.hasIcon_bl) _s.icon_img = new Image();;
			_s.setupOverlay();
			_s.addEvents();
			if(_s.preset){
				_s.setupPresetContent();
			}
			if(FWDIGPUtils.isAndroid) _s.setBackfaceVisibility();
		};
	

		// Setup background.
		_s.setupOverlay = function(){
			_s.setBkColor(_s.backgroundColor);
			
			_s.smallImage_do = new FWDIGPDisplayObject("img");
			
			if(_s.hasOverlay_bl){ 
				_s.overlay_do = new FWDIGPDisplayObject("div", "absolute", "hidden", "block", true);
				_s.overlay_do.setBkColor(_s.thumbnailOverlayBackgroundColor);
				_s.overlay_do.setAlpha(0);
				_s.overlay_do.setVisible(false);
				_s.overlay_do.screen.className = "PGThumbnailOverlay";
				_s.addChild(_s.overlay_do);
			}
		};
		

		// Setup video icon and functionality.
		_s.setupVideoPlayButton = function(){
			if(!_s.useVideoInThumb_bl || _s.preset) return;
			_s.hidePlayButton();
			if(_s.type != FWDIGP.VIDEO_IN_THUMB){
				if(_s.play_do){
					FWDAnimation.killTweensOf(_s.play_do);
					_s.play_do.hide();
				}
			}
			
			if(!_s.play_do){
				var ic = prt.prt.fontIcon + ' ' + prt.prt.fontIcon + '-play';
				FWDEVPSimpleButton.setTransformPrototype();
				_s.play_do = new FWDEVPSimpleButton(
						undefined, 0, 0, true, 0, 0, 0,
						"<div class='table-fwdevp-button'><span class='table-cell-fwdevp-button " + ic + "'></span></div>",
						undefined,
						"EVPLargePlayButtonNormalState",
						"EVPLargePlayButtonSelectedState"
				);
				_s.play_do.setOverflow("visible");
				_s.play_do.removeListener(FWDEVPSimpleButton.MOUSE_UP, _s.playUpHandler);
				_s.play_do.addListener(FWDEVPSimpleButton.MOUSE_UP, _s.playUpHandler)
			}

			if(!_s.contains(_s.play_do)) _s.addChild(_s.play_do);
			
			if(!prt.playBtnW){
				setTimeout(function(){
					prt.playBtnW = _s.play_do.getWidth();
					prt.playBtnH = _s.play_do.getHeight();
					_s.positionPlayBtn();
					_s.scalePlayButton();
					_s.resizeVideo()
			
				}, 300);
			}

			_s.playBtnHidden = false;
			_s.positionPlayBtn();
			_s.scalePlayButton(false);
			_s.resizeVideo()
			_s.play_do.hide();
		}

		_s.showPlayButton = function(){
			if(!_s.useVideoInThumb_bl || _s.preset) return;
			_s.play_do.show(true);
		}

		_s.positionPlayBtn = function(){
			_s.play_do.setX(Math.round(_s.totalW - prt.playBtnW)/2);
			_s.play_do.setY(Math.round(_s.totalH - prt.playBtnH)/2);
		}
		
		_s.playUpHandler = function(){
			if(prt.isCategoryChanging_bl || prt.disableOnDragOrSwipe_bl || prt.isMobileScrolling_bl) return;
			try{
				prt.thumbWithVideo.showPlayButton();
			}catch(e){};

			try{
				_s.removeChild(prt.prt.vidHld_do);
			}catch(e){};
			_s.play_do.hide();
			_s.addChild(prt.prt.vidHld_do);
			
			_s.vidHld_do = prt.prt.vidHld_do;
			_s.evp = prt.prt.evp;

			_s.resizeVideo();
			_s.setNormalState();
			_s.vidHld_do.setX(0);
			prt.prt.updateEVP(_s.thumbVideoSrc, _s.subtitleSrc, _s.thumbVastSrc, _s.password, _s.thumbPreview);
			_s.evp.thumbSrc = _s.thumbSrc;
			_s.evp.play();	
			prt.thumbWithVideo = _s;
		};
	
		_s.resizeVideo = function(){
			if(_s.contains(prt.prt.vidHld_do)){
				var w = Math.round(_s.totalW * _s.prt.scale);
				var h = Math.round(_s.totalH * _s.prt.scale);
				_s.vidHld_do.setWidth(w);
				_s.vidHld_do.setHeight(h);
				_s.vidHld_do.setScale2(1/_s.prt.scale);
				_s.evp.resizeHandler()
			}
		}

		_s.scalePlayButton = function(animate){
			if(animate){
				FWDAnimation.to(_s.play_do, prt.tweenDuration, { scale: 1/_s.prt.scale, ease:Quint.easeOut});
			}else{
				FWDAnimation.killTweensOf(_s.play_do);
				_s.play_do.setScale2(1/_s.prt.scale);
			}
		}

		_s.hidePlayButton = function(anim){
			clearTimeout(_s.showPlayBtnId_to)

			if(_s.play_do && !_s.playBtnHidden){
				FWDAnimation.killTweensOf(_s.play_do);
				if(anim){
					_s.play_do.hide(true);
				}else{
					_s.play_do.setX(-50000);
				}
				
				_s.playBtnHidden = true;
			}
		}

		_s.removeVideo = function(){
			if(prt.prt.vidHld_do && prt.prt.vidHld_do.x != -5000){
				prt.prt.main_do.addChild(prt.prt.vidHld_do);
				prt.prt.vidHld_do.setX(-5000);
				try{
					prt.prt.evp.pause();
				}catch(e){}
			}
		}

	
		// Aadd interaction events.
		_s.addEvents = function(){
			if(_s.isMobile_bl){
				if(_s.hasPointerEvent_bl){
					_s.screen.addEventListener("MSPointerUp", _s.onMouseClickHandler);
				}
				_s.screen.addEventListener("touchend", _s.onMouseClickHandler, {passive:false});
			}else if(_s.screen.addEventListener){
				_s.screen.addEventListener("mouseover", _s.onMouseOverHandler);
				_s.screen.addEventListener("click", _s.onMouseClickHandler);
			}
		};
		
		_s.onMouseOverHandler = function(e){
			if(prt.isMobileScrolling_bl) return;
			
			if(!prt.allowToShowPreset){
				_s.screen.addEventListener('mousemove', _s.onMouseOverHandler);
				return;
			}

			if(!_s.isNormalState_bl || !_s.isImageShowed_bl) return;
			_s.screen.removeEventListener('mousemove', _s.onMouseOverHandler);

			_s.setSelectedState();
			_s.dispatchEvent(FWDIGPThumb.MOUSE_OVER, {gridPosition:_s.gridPosition, _s:_s});
			
		};
		
		_s.onMouseClickHandler = function(e){
			if(prt.isMobileScrolling_bl) return;
			if(_s.type == FWDIGP.VIDEO_IN_THUMB && !_s.showCaptionOnThumbVideo_bl) return;
			if(_s.disableThumbnailInteractivity_bl 
			   || _s.smallImage_do.x != _s.imageFinalX
			   || _s.smallImage_do.y != _s.imageFinalY) return;

			// Check for a inside title.
			if(_s.caption_do){
				var vmc = FWDIGPUtils.getViewportMouseCoordinates(e);
				_s.vmcX = vmc.screenX;
				_s.vmcY = vmc.screenY;


				// Check if it hits a tags.
				var aaAr = [];
				if(_s.caption_do.screen.querySelectorAll('.title')){
					aaAr.push(_s.caption_do.screen.querySelectorAll('.title')[0]);
				}

				if(_s.caption_do.screen.querySelectorAll('.desc')){
					aaAr.push(_s.caption_do.screen.querySelectorAll('.desc')[0]);
				}

				try{
					if(aaAr.length){
						for(var i=0; i<aaAr.length; i++){
							var children = aaAr[i].children;
							for(var j=0; j<children.length; j++){
								var chl = children[j];
								if(chl.tagName == 'A'){
									if(FWDIGPUtils.hitTest(chl, _s.vmcX, _s.vmcY)){
										return;
									}
								}
							}
						}
					}
				}catch(e){}
			}

			if(_s.openOnSingleTouch_bl){
				if(_s.type != FWDIGP.VIDEO_IN_THUMB && _s.isMobile_bl){
					_s.dispatchEvent(FWDIGPThumb.MOUSE_UP, {id:_s.id, _s:_s});
				}
				return;
			}
			
			if(!_s.isContentShowed_bl && _s.isMobile_bl && !prt.disableOnDragOrSwipe_bl){
				if(_s.isMobile_bl){
					_s.onMouseOverHandler();
					return;
				}

				if(_s.type != FWDIGP.VIDEO_IN_THUMB && !_s.isMobile_bl){
					_s.onMouseOverHandler();
					return;
				}	
			}
			

			if(_s.type != FWDIGP.VIDEO_IN_THUMB){			
				_s.dispatchEvent(FWDIGPThumb.MOUSE_UP, {id:_s.id, _s:_s});
			}
		};
	
	
		// Resize thumb / image.
		_s.resizeThumb = function(animate){
			_s.setWidth(_s.totalW);
			_s.setHeight(_s.totalH);
			if(_s.background_do){
				_s.background_do.setX(-1);
				_s.background_do.setHeight(-1);
				_s.background_do.setWidth(_s.totalW + 2);
				_s.background_do.setHeight(_s.totalH + 2);
			}

			if(_s.overlay_do){
				_s.overlay_do.setX(-2);
				_s.overlay_do.setY(-2);
				_s.overlay_do.setWidth(_s.totalW + 4);
				_s.overlay_do.setHeight(_s.totalH + 4);
			}
		};
		
		_s.resizeImage = function(){
			var scaleX = _s.totalW/_s.smallImageOriginalW;
			var scaleY = _s.totalH/_s.smallImageOriginalH;
			var totalScale = 0;
			
			if(scaleX >= scaleY){
				totalScale = scaleX;
			}else if(scaleX <= scaleY){
				totalScale = scaleY;
			}
				
			_s.imageFinalWidth = Math.round((_s.smallImageOriginalW * totalScale) + 2);
			_s.imageFinalHeight = Math.round((_s.smallImageOriginalH * totalScale) + 2);
			_s.imageFinalX = Math.round((_s.totalW -  _s.imageFinalWidth)/2);
			_s.imageFinalY = Math.round((_s.totalH -  _s.imageFinalHeight)/2);
		
			_s.smallImage_do.setX(_s.imageFinalX);
			_s.smallImage_do.setY(_s.imageFinalY);
			_s.smallImage_do.setWidth(_s.imageFinalWidth);
			_s.smallImage_do.setHeight(_s.imageFinalHeight);
		};
		
		
		// Add image.
		_s.show = function(gallery_ar, addDelay){	
			
			_s.isNormalState_bl = true;
			_s.gallery_ar = gallery_ar;
			_s.thumbSrc = gallery_ar;
			_s.addDelay_bl = !addDelay;

			if(!prt.addDragAndSwipeSupport_bl && _s.type != FWDIGP.VIDEO_IN_THUMB){
				_s.setButtonMode(true);
			}

			FWDAnimation.killTweensOf(_s);
			_s.setAlpha(0);
			clearTimeout(_s.loadTimeOutId_to);
			if(_s.addDelay_bl){
				_s.loadTimeOutId_to = setTimeout(_s.startToLoadSmallImage,.5 + Math.random() * 400);
			}else{
				_s.loadTimeOutId_to = setTimeout(_s.startToLoadSmallImage, Math.random() * 400);
			}
		
			if(_s.hasOverlay_bl){
				_s.overlay_do.setBkColor(_s.thumbOverlayColor);
			}
			
			if(_s.hasIcon_bl){
			
				if(!_s.icon_do){
					_s.icon_do = new FWDIGPTransformDisplayObject("div");
				}

				_s.icon_do.setOverflow('visible');
				_s.icon_do.setVisible(false);
				_s.icon_do.setAlpha(0);
				if(!_s.contains(_s.icon_do)) _s.addChild(_s.icon_do);
			}

			if(_s.icon_do){
				
				if(_s.type == "image"){
					_s.icon_do.setInnerHTML('<span class="fwdrlin ' + prt.prt.fontIcon + ' '  + prt.prt.fontIcon + '-image"></span>');
				}else if(_s.type == "link"){
					_s.icon_do.setInnerHTML('<span class="fwdrlin ' + prt.prt.fontIcon + ' '  + prt.prt.fontIcon + '-link"></span>');
				}else if(_s.type == "iframe"){
					_s.icon_do.setInnerHTML('<span class="fwdrlin ' + prt.prt.fontIcon + ' '  + prt.prt.fontIcon + '-iframe"></span>');
				}else if(_s.type == "youtube"){
					_s.icon_do.setInnerHTML('<span class="fwdrlin ' + prt.prt.fontIcon + ' '  + prt.prt.fontIcon + '-youtube"></span>');
				}else if(_s.type == "vimeo"){
					_s.icon_do.setInnerHTML('<span class="fwdrlin ' + prt.prt.fontIcon + ' '  + prt.prt.fontIcon + '-vimeo"></span>');
				}else if(_s.type == "video" || _s.type == "audio"){
					_s.icon_do.setInnerHTML('<span class="fwdrlin ' + prt.prt.fontIcon + ' '  + prt.prt.fontIcon + '-play"></span>');
				} 
			}

		};
		
		_s.startToLoadSmallImage = function(){
			_s.smallImage_img.style.width = 'auto';
			_s.smallImage_img.style.height = 'auto';
			_s.smallImage_img.onload = _s.onSmallImageLoad;
			_s.smallImage_img.src = _s.gallery_ar;
		};
		
		_s.onSmallImageLoad = function(){
			var dl = _s.addDelay_bl == true ? .2 : 0;
			var alpha = _s.isVisited_bl == true ? .3 : 1;
			_s.smallImageOriginalW = _s.smallImage_img.width;
			_s.smallImageOriginalH = _s.smallImage_img.height;

			_s.smallImage_do.setScreen(_s.smallImage_img);
			_s.resizeImage();
			
			FWDAnimation.to(_s, .3, {alpha:1, delay:dl +  Math.random() * .6});
			_s.smallImage_do.setAlpha(0);
		
			if(_s.transitionType == "motion"){
				var dir = Math.round(Math.random() * 3);
				if(dir == 0){
					_s.smallImage_do.setX(-_s.imageFinalWidth);
					FWDAnimation.to(_s.smallImage_do, .8, {x:_s.imageFinalX, alpha:alpha, delay:dl +  Math.random() * .5, onComplete:_s.showImageComplete, ease:Expo.easeInOut});
				}else if(dir == 1){
					_s.smallImage_do.setX(_s.imageFinalWidth);
					FWDAnimation.to(_s.smallImage_do, .8, {x:_s.imageFinalX, alpha:alpha, delay:dl +  Math.random()  * .5, onComplete:_s.showImageComplete, ease:Expo.easeInOut});
				}else if(dir == 2){
					_s.smallImage_do.setY(_s.imageFinalHeight);
					FWDAnimation.to(_s.smallImage_do, .8, {y:_s.imageFinalY, alpha:alpha, delay:dl +  Math.random()  * .5,onComplete:_s.showImageComplete,  ease:Expo.easeInOut});
				}else if(dir == 3){
					_s.smallImage_do.setY(-_s.imageFinalHeight);
					FWDAnimation.to(_s.smallImage_do, .8, {y:_s.imageFinalY, alpha:alpha, delay:dl +  Math.random()  * .5,onComplete:_s.showImageComplete, ease:Expo.easeInOut});
				}
			}else{
				FWDAnimation.to(_s.smallImage_do, .5, {alpha:alpha, delay:Math.random(), onComplete:_s.showImageComplete});
			}
		
			if(!_s.contains(_s.smallImage_do)){
				_s.addChildAt(_s.smallImage_do, 0);
			}

			if(_s.type == FWDIGP.VIDEO_IN_THUMB){
				_s.showPlayBtnId_to = setTimeout(function(){
					_s.showPlayButton();
				}, 800);
			}
		};

		_s.showImageComplete = function(){
			_s.isImageShowed_bl = true;
			if(FWDIGPUtils.hitTest(_s.screen, prt.checkThumbX, prt.checkThumbY) && !_s.isMobile_bl){
				_s.isHitAllThumbs_bl = true; 
				_s.setSelectedState();
			}else{
				_s.isHitAllThumbs_bl = false; 
			}

			if(_s.isVisited_bl){
				_s.setToIsVisited(_s.isHitAllThumbs_bl);
			}
		}


		// Hide.
		_s.hide = function(animBtn){
			_s.hidePlayButton(animBtn);
			_s.isTweeninigOnHide_bl = true;

			_s.screen.removeEventListener('mousemove', _s.onMouseOverHandler);
			
			clearTimeout(_s.loadTimeOutId_to);
			_s.smallImage_img.onload = null;
			FWDAnimation.killTweensOf(_s);
			FWDAnimation.killTweensOf(_s.smallImage_do);
			
			if(_s.transitionType == "motion"){
				var dir = Math.round(Math.random() * 3);
				if(dir == 0){
					FWDAnimation.to(_s.smallImage_do, .8, {x:-_s.imageFinalWidth, delay:Math.random(), ease:Expo.easeInOut});
					FWDAnimation.to(_s, .6, {alpha:0, delay:.3 + Math.random() * .4, onComplete:_s.hideComplete});
				}else if(dir == 1){
					FWDAnimation.to(_s.smallImage_do, .8, {x:_s.imageFinalWidth, delay:Math.random(), ease:Expo.easeInOut});
					FWDAnimation.to(_s, .6, {alpha:0, delay:.3 + Math.random() * .4, onComplete:_s.hideComplete});
				}else if(dir == 2){
					FWDAnimation.to(_s.smallImage_do, .8, {y:-_s.imageFinalHeight, delay:Math.random(), ease:Expo.easeInOut});
					FWDAnimation.to(_s, .6, {alpha:0, delay:.3 + Math.random() * .4, onComplete:_s.hideComplete});
				}else if(dir == 3){
					FWDAnimation.to(_s.smallImage_do, .8, {y:_s.imageFinalHeight, delay:Math.random(), ease:Expo.easeInOut});
					FWDAnimation.to(_s, .6, {alpha:0, delay:.3 + Math.random() * .4, onComplete:_s.hideComplete});
				}
			}else{
				FWDAnimation.to(_s.smallImage_do, .6, {alpha:0, delay:Math.random() * .4});
				FWDAnimation.to(_s, .6, {alpha:0, delay:.3 + Math.random() * .4, onComplete:_s.hideComplete});
			}
		};
		
		_s.hideComplete = function(){
			_s.removeImage();
			_s.isTweeninigOnHide_bl = false;
		};
		
		_s.setToIsVisited = function(hit){
			var dl = Math.random();
			if(_s.transitionType == "motion") dl = 0;
			if(_s.transitionType != "motion") FWDAnimation.killTweensOf(_s.smallImage_do);
			FWDAnimation.to(_s.overlay_do, .3, {alpha: 0})
			if(hit){
				FWDAnimation.to(_s.smallImage_do, .5, {alpha:1, delay:dl});
			}else{
				FWDAnimation.to(_s.smallImage_do, .5, {alpha:_s.visitedThumbnailsOverlayOpacity, delay:dl});
			}
			
		};
		
		
		// Remove image.
		_s.removeImage = function(){	
			clearTimeout(_s.loadTimeOutId_to);
			_s.hidePlayButton();
			

			if(_s.smallImage_img){
				_s.smallImage_img.removeAttribute("width");
				_s.smallImage_img.removeAttribute("height");
				_s.smallImage_img.onload = null;
				try{
					FWDAnimation.killTweensOf(_s.smallImage_do);
					_s.smallImage_do.screen.src = "";
					_s.smallImage_do.set(-500);
					_s.removeChild(_s.smallImage_do);
				}catch(e){}
				
			}

			
			_s.isImageShowed_bl = false;
			_s.isVisited_bl = false;
			_s.isNormalState_bl = true;
			_s.captionShowed_bl = false;
			_s.caption = undefined;
			_s.setNormalState(false);
		};
		

		// Set normal / selected state.
		_s.setNormalState = function(animate, overwrite){
			if(_s.isNormalState_bl && !overwrite) return;
			_s.isNormalState_bl = true;
			_s.removeMouseMoveAnimCheck();
			_s.hideOverlay(animate);
			_s.hideSmallIcon(animate);
			_s.hidePresetContent();
			_s.hideCaption();
			_s.isCaptionHidden_bl = _s.isContentShowed_bl = false;
		};
		
		_s.setSelectedState = function(e){
			if(!_s.isNormalState_bl || _s.disableThumbnailInteractivity_bl) return;
			
			_s.isNormalState_bl = false;
			_s.showOverlay();
			_s.showSmallIcon();
			_s.showPresetContent();
			_s.showCaption();
			if(!_s.disableThumbnailInteractivity_bl){
				_s.addMouseMoveAnimCheck();
			}
			_s.isCaptionHidden_bl = _s.isContentShowed_bl = true;
		};
		
		_s.addMouseMoveAnimCheck = function(){
			if(_s.isMobile_bl){
				setTimeout(function(){
					 window.addEventListener("touchstart", _s.checkThumbnailHitStart);
					 window.addEventListener("touchend", _s.checkThumbnailHit);
				}, 50);
			}else{
				if(window.addEventListener){
					window.addEventListener("mousemove", _s.checkThumbnailHit);
				}
			}
		};
		
		_s.removeMouseMoveAnimCheck = function(){
			if(_s.isMobile_bl){
				window.removeEventListener("touchstart", _s.checkThumbnailHitStart);
				window.removeEventListener("touchend", _s.checkThumbnailHit);
			}else{
				if(window.removeEventListener){
					window.removeEventListener("mousemove", _s.checkThumbnailHit);
				}
			}
		};

		_s.checkThumbnailHitStart = function(e){
			var vpc = FWDIGPUtils.getViewportMouseCoordinates(e);
			_s.globalX = vpc.screenX;
			_s.globalY = vpc.screenY;
		}
		
		_s.checkThumbnailHit = function(e){
			if(e.type != "touchend"){
				var vpc = FWDIGPUtils.getViewportMouseCoordinates(e);
				_s.globalX = vpc.screenX;
				_s.globalY = vpc.screenY;
			}

			if(prt.thumbWithVideo){
				if(FWDIGPUtils.hitTest(prt.thumbWithVideo.screen, _s.globalX, _s.globalY)){
					prt.thumbWithVideo.isHit = true;
				}else{
					prt.thumbWithVideo.isHit = false;
				}
			}
	
			if(!FWDIGPUtils.hitTest(_s.screen, _s.globalX, _s.globalY)
				|| (_s.prt.prt.comboBox_do && FWDIGPUtils.hitTest(_s.prt.prt.comboBox_do.selector_do.screen, _s.globalX, _s.globalY))
				|| (_s.prt.prt.comboBox_do && FWDIGPUtils.hitTest(_s.prt.prt.comboBox_do.buttonsHolder_do.screen, _s.globalX, _s.globalY))
				|| (_s.prt.look_do && FWDIGPUtils.hitTest(_s.prt.look_do.screen, _s.globalX, _s.globalY))
			){
				_s.setNormalState(true);
				_s.removeMouseMoveAnimCheck();
			}
		};
		
		
		// Show / hide overlay.
		_s.showOverlay = function(e){
			if(!_s.hasOverlay_bl) return;


			if(!_s.hasOverlay_bl) return;
			_s.overlay_do.setVisible(true);
			FWDAnimation.killTweensOf(_s.overlay_do);
			if(_s.overlay_do){						
				FWDAnimation.to(_s.overlay_do, .8, {alpha:_s.overlayOpacity, ease:Expo.easeOut});
			}

			if(_s.isVisited_bl){
				FWDAnimation.killTweensOf(_s.smallImage_do);
				FWDAnimation.to(_s.smallImage_do, .8, {alpha:1, ease:Expo.easeOut});
			}
		};
		
		_s.hideOverlay = function(animate){
	
			if(!_s.hasOverlay_bl) return;

			FWDAnimation.killTweensOf(_s.overlay_do);
			if(_s.overlay_do && animate){
				FWDAnimation.to(_s.overlay_do, .8, {alpha:0, onComplete:_s.overlayHideComplete, ease:Expo.easeOut});
			}else if(_s.overlay_do){
				_s.overlay_do.setAlpha(0);
				_s.overlayHideComplete();
			}
			
			if(_s.isVisited_bl){
				FWDAnimation.killTweensOf(_s.smallImage_do);
				FWDAnimation.to(_s.smallImage_do, .8, {alpha:.3, ease:Expo.easeOut});
			}
		};
		
		_s.overlayHideComplete = function(){
			_s.overlay_do.setVisible(false);
		};


		// Set captions.
		_s.setCaption = function(caption){
			if(_s.preset) return;
			_s.isCaptionHidden_bl = true;
			_s.allowToShowCaption = false;
			_s.caption = caption;

			if(!_s.contentHolder_do){
				_s.contentHolder_do = new FWDIGPTransformDisplayObject("div");
				_s.contentHolder_do.getStyle().transformOrigin = "top left";
				_s.contentHolder_do.screen.className = 'caption';
				_s.addChild(_s.contentHolder_do);
				_s.caption_do = new FWDIGPTransformDisplayObject("div");	
				_s.caption_do.getStyle().transformOrigin = "bottom left";
				_s.contentHolder_do.addChild(_s.caption_do);
				_s.caption_do.screen.className = "caption-in";
			}

			setTimeout(function(){
				_s.allowToShowCaption = true;
			}, 200);

			_s.caption_do.setInnerHTML(caption);
			_s.contentHolder_do.setVisible(false);
			_s.resizeCaption();
		}

		_s.resizeCaption = function(){
			if(_s.preset) return;
			if(FWDAnimation.isTweening(_s.caption_do) && _s.isCaptionHiding_bl) return;
			var w = Math.round(_s.totalW * _s.prt.scale);
			var h = Math.round(_s.totalH * _s.prt.scale);
			_s.contentHolder_do.setWidth(w);
			_s.contentHolder_do.setHeight(h);
			_s.contentHolder_do.setScale2(1/_s.prt.scale);

			if(_s.prt.scale < 1){
				_s.caption_do.setScale2(_s.prt.scale);
				_s.caption_do.setWidth(_s.totalW);
			}else{
				_s.caption_do.setWidth(_s.totalW * _s.prt.scale);
				_s.caption_do.setScale2(1);
			}
		};

	
		_s.showCaption = function(){
			if(!_s.showCaption_bl || !_s.caption || !prt.allowToShowCaption || _s.preset){
				return;
			}
			
			if((_s.type == FWDIGP.VIDEO_IN_THUMB && !_s.showCaptionOnThumbVideo_bl)){
				return;
			}
			
			var mainTransitionDuration = .8;
			_s.captionShowed_bl = true;
			_s.isCaptionHiding_bl = false;
			
			_s.contentHolder_do.setVisible(true);
			_s.resizeCaption();

			if(_s.isCaptionHidden_bl){
				_s.caption_do.setY(_s.caption_do.getHeight());
			}
			
			_s.isCaptionHidden_bl = false;
			
			FWDAnimation.killTweensOf(_s.caption_do);	
			FWDAnimation.to(_s.caption_do, mainTransitionDuration, {y:0, ease:Expo.easeInOut});
			
			_s.isContentShowed_bl = true;
			clearTimeout(_s.contentShowCompleteId_to);
			clearTimeout(_s.contentHideCompleteId_to);
			_s.contentShowCompleteId_to = setTimeout(_s.showCaptionComplete, mainTransitionDuration);
		}

		_s.showCaptionComplete = function(){
			clearTimeout(_s.contentShowCompleteId_to);
			clearTimeout(_s.contentHideCompleteId_to);
		};

		_s.hideCaption = function(anim){
			if(!_s.isCaptionHidden_bl || !_s.showCaption_bl || !_s.caption || _s.preset) return;

			if((_s.type == FWDIGP.VIDEO_IN_THUMB && !_s.showCaptionOnThumbVideo_bl)){
				return;
			}

			var mainTransitionDuration = .8;
			_s.isCaptionHiding_bl = true;
			clearTimeout(_s.contentShowCompleteId_to);
			clearTimeout(_s.contentHideCompleteId_to);

			var h = Math.min(_s.prt.scale * _s.caption_do.getHeight(), _s.caption_do.getHeight());
			//var h =  _s.caption_do.getHeight();

			FWDAnimation.killTweensOf(_s.caption_do);

			if(!anim){				
				FWDAnimation.to(_s.caption_do, mainTransitionDuration, {y:h, ease:Expo.easeInOut});
				_s.contentHideCompleteId_to = setTimeout(_s.hideCaptionComplete, mainTransitionDuration * 1000);
			}else{
				_s.caption_do.setY(h)
				_s.hideCaptionComplete();
				clearTimeout(_s.contentShowCompleteId_to);
				clearTimeout(_s.contentHideCompleteId_to);
			}
		}
		
		_s.hideCaptionComplete = function(){
			clearTimeout(_s.contentShowCompleteId_to);
			clearTimeout(_s.contentHideCompleteId_to);
			_s.contentHolder_do.setVisible(false);
			_s.isCaptionHidden_bl = true;
			_s.captionShowed_bl = false;
		}


		// Setup preset content.
		_s.setupPresetContent = function(){
			_s.contentHolder_do = new FWDIGPDisplayObject("div");
			_s.contentHolder_do.screen.className = 'main-holder';
		}

		_s.setHTMLContent = function(data){
			if(!_s.preset) return;
			_s.isContentHidden_bl = true;
			_s.allowToShowPreset = false;
			setTimeout(function(){
				_s.allowToShowPreset = true;
			}, 200);

			_s.addChild(_s.contentHolder_do);
			_s.contentHolder_do.removeAllChilds();
			_s.contentHolder_do.setVisible(false);

			_s.overlay_do = new FWDIGPDisplayObject("div", "absolute", "hidden", "block", true);

			_s.overlay_do.setBkColor(_s.thumbnailOverlayBackgroundColor);
			_s.overlay_do.getStyle().width = "100%";
			_s.overlay_do.getStyle().height = "100%";
			_s.overlay_do.setAlpha(_s.overlayOpacity);
			_s.overlay_do.screen.className = "PGThumbnailOverlay";
			_s.contentHolder_do.addChild(_s.overlay_do);
		
			if(_s.preset == 'portfolio'){
				_s.contentHolder_do.setOverflow('visible');
				_s.arrow_do = new FWDIGPDisplayObject("div");
				_s.arrow_do.screen.className = 'default-arrow-main';
				_s.arrow_do.setInnerHTML('<span class="default-arrow fwdicon-right-arrow-thin"></span>');
				_s.contentHolder_do.addChild(_s.arrow_do);

				if(data.cats.length){
					_s.cats_do = new FWDIGPDisplayObject("div");	
					_s.cats_do.screen.className = 'default-categories-main';
					_s.cats = '<div class="categories"><span class="fwdicon fwdicon-categories"></span>';
					for(var i= 0; i<data.cats.length; i++){
						if(i < data.cats.length -1){
							_s.cats += '<span class="category">' + data.cats[i] + "</span><span class='separator'>/</span>";
						}else{
							_s.cats += '<span class="category">' + data.cats[i];
						}
						
					}
					_s.cats += "</div>";
					_s.cats_do.setInnerHTML(_s.cats);
					if(data.cats.length == 0) _s.cats_do.setVisible(false);
					_s.contentHolder_do.addChild(_s.cats_do);
				}

				_s.title_do = new FWDIGPDisplayObject("div");	
				_s.title_do.getStyle().position = 'relative'; 	
				_s.title_do.setInnerHTML('<div class="in">' + data.title + "</div>");
				_s.title_do.screen.className = "title-default";
				_s.contentHolder_do.addChild(_s.title_do);


				if(data.client){
					_s.client_do = new FWDIGPDisplayObject("div");	
					_s.client_do.screen.className = 'default-client-main';
					_s.client_do.setInnerHTML(data.client);
					_s.contentHolder_do.addChild(_s.client_do);	
				}
				
				if(data.likes){
					_s.likes_do = new FWDIGPDisplayObject("div");
					_s.likes_do.screen.className = 'default-likes-main';
					_s.likes_do.setInnerHTML(data.likes);
					_s.contentHolder_do.addChild(_s.likes_do);
				}
			}
		}

		_s.resizeContent = function(){
			_s.contentHolder_do.setWidth(_s.totalW)
			_s.contentHolder_do.getStyle().height = 'auto';
			_s.overlay_do.setHeight(_s.totalH + 20);
			_s.overlay_do.setY(-(_s.totalH + 10 - _s.contentHolder_do.getHeight()));
			clearTimeout(_s.resizeTextContent1Id_to);
		};

		_s.showPresetContent = function(){
			if(_s.isContentShowed_bl || !_s.preset || !_s.allowToShowPreset || !prt.allowToShowPreset) return;
			var mainTransitionDuration;
			
			_s.contentHolder_do.setVisible(true);
			if(_s.preset == "portfolio"){
				mainTransitionDuration = .6;
				var dl = 0;
				var showArrow = true;
				var overlayOpacity = _s.overlayOpacity;
				
				_s.resizeContent();

				if(_s.isContentHidden_bl){
					_s.overlay_do.setAlpha(0);
					_s.contentHolder_do.setX(0);
					_s.contentHolder_do.setY(0);
					
					_s.arrow_do.screen.firstChild.style.left = '-20px';
					_s.arrow_do.screen.firstChild.style.opacity = '0';
					_s.title_do.screen.firstChild.style.top = '20px';
					_s.title_do.screen.firstChild.style.opacity = 0;

					if(_s.contentHolder_do.getHeight() >= _s.finalH - 5) showArrow = false;

					if(_s.cats_do){
						_s.cats_do.screen.firstChild.style.top = '20px';
						_s.cats_do.screen.firstChild.style.opacity = 0;
					}

					if(_s.client_do){
						_s.client_do.screen.firstChild.style.top = '20px';
						_s.client_do.screen.firstChild.style.opacity = 0;
					}

					if(_s.likes_do){
						_s.likes_do.screen.firstChild.style.top = '20px';
						_s.likes_do.screen.firstChild.style.opacity = 0;
					}
				}
				
				_s.isContentHidden_bl = false;
				FWDAnimation.killTweensOf(_s.overlay_do);	
				FWDAnimation.to(_s.overlay_do, .4, {alpha:overlayOpacity});
				
				if(_s.cats_do){
					FWDAnimation.killTweensOf(_s.cats_do.screen.firstChild);	
					FWDAnimation.to(_s.cats_do.screen.firstChild, .6, {css:{top:'0', alpha:1}, delay:dl, ease:Expo.easeInOut});
				}

				dl += .1;
				FWDAnimation.killTweensOf(_s.title_do.screen.firstChild);	
				FWDAnimation.to(_s.title_do.screen.firstChild, .6, {css:{top:'0', alpha:1}, delay:dl, ease:Expo.easeInOut});

				if(_s.client_do){
					dl += .1;
					FWDAnimation.killTweensOf(_s.client_do.screen.firstChild);	
					FWDAnimation.to(_s.client_do.screen.firstChild, .6, {css:{top:'0', alpha:1}, delay:dl, ease:Expo.easeInOut});
				}

				if(_s.likes_do){
					dl += .1;
					FWDAnimation.killTweensOf(_s.likes_do.screen.firstChild);	
					FWDAnimation.to(_s.likes_do.screen.firstChild, .6, {css:{top:'0', alpha:1}, delay:dl, ease:Expo.easeInOut});
				}
				
				if(_s.contentHolder_do.getGlobalY() - 20 > _s.getGlobalY()){
					dl += .1;
					FWDAnimation.killTweensOf(_s.arrow_do.screen.firstChild);	
					FWDAnimation.to(_s.arrow_do.screen.firstChild, .6, {css:{left:'0', alpha:1}, delay:dl, ease:Expo.easeInOut});
				}
			}

			_s.isContentShowed_bl = true;
			clearTimeout(_s.contentShowCompleteId_to);
			clearTimeout(_s.contentHideCompleteId_to);
			_s.contentShowCompleteId_to = setTimeout(_s.showContentComplete, mainTransitionDuration * 1000);

		}

		_s.showContentComplete = function(){
			clearTimeout(_s.contentShowCompleteId_to);
			clearTimeout(_s.contentHideCompleteId_to);
		};

		_s.hidePresetContent = function(){
			if(!_s.isContentShowed_bl || !_s.preset) return;

			var mainTransitionDuration;

			if(_s.preset == "portfolio"){

				mainTransitionDuration = .6;
				
				FWDAnimation.killTweensOf(_s.overlay_do);	
				FWDAnimation.to(_s.overlay_do, .6, {alpha:0});

				FWDAnimation.killTweensOf(_s.arrow_do.screen.firstChild);	
				FWDAnimation.to(_s.arrow_do.screen.firstChild, .6, {css:{left:'-20px', alpha:0}, ease:Expo.easeInOut});

				if(_s.cats_do){
					FWDAnimation.killTweensOf(_s.cats_do.screen.firstChild);	
					FWDAnimation.to(_s.cats_do.screen.firstChild, .6, {css:{top:'20px', alpha:0}, ease:Expo.easeInOut});
				}

				FWDAnimation.killTweensOf(_s.title_do.screen.firstChild);	
				FWDAnimation.to(_s.title_do.screen.firstChild, .6, {css:{top:'20px', alpha:0}, ease:Expo.easeInOut});
			
				if(_s.client_do){
					FWDAnimation.killTweensOf(_s.client_do.screen.firstChild);	
					FWDAnimation.to(_s.client_do.screen.firstChild, .6, {css:{top:'20px', alpha:0}, ease:Expo.easeInOut});
				}

				if(_s.likes_do){
					FWDAnimation.killTweensOf(_s.likes_do.screen.firstChild);	
					FWDAnimation.to(_s.likes_do.screen.firstChild, .6, {css:{top:'20px', alpha:0},  ease:Expo.easeInOut});
				}
			}

			clearTimeout(_s.contentShowCompleteId_to);
			clearTimeout(_s.contentHideCompleteId_to);
			_s.contentHideCompleteId_to = setTimeout(_s.hideContentComplete, mainTransitionDuration * 1000);
		}
		

		_s.hideContentComplete = function(){
			clearTimeout(_s.contentShowCompleteId_to);
			clearTimeout(_s.contentHideCompleteId_to);
			_s.contentHolder_do.setVisible(false);
			_s.isContentHidden_bl = true;
		};
			
		
		// Add / remove icon image.
		_s.showSmallIcon = function(){
			if(!_s.hasIcon_bl || _s.type == FWDIGP.VIDEO_IN_THUMB || _s.type == "none") return;
			_s.icon_do.setVisible(true);
			_s.icon_do.setAlpha(0);
			
			if(_s.icon_do.hasTransform2d_bl){
				_s.icon_do.setScale2();
			}
			
			_s.icon_do.setScale2(2);
			_s.icon_do.setX(parseInt((_s.totalW - _s.iconW)/2));
			_s.icon_do.setY(parseInt((_s.totalH - _s.iconH)/2));

			
			FWDAnimation.killTweensOf(_s.icon_do);
			FWDAnimation.to(_s.icon_do, .5, {alpha:1, 
				scale: 1/_s.prt.scale,
				delay:.1, ease:Expo.easeInOut});
			
			_s.hasIconAdded_bl = true;
		};
		
		_s.hideSmallIcon = function(animate){
			if(!_s.hasIcon_bl || _s.type == FWDIGP.VIDEO_IN_THUMB) return;
			if(!_s.hasIconAdded_bl) return;
			FWDAnimation.killTweensOf(_s.icon_img);
			FWDAnimation.killTweensOf(_s.icon_do);
			if(animate){
				FWDAnimation.to(_s.icon_do, .4, {alpha:0, onComplete:function(){_s.icon_do.setVisible(false);}});
			}else{
				_s.icon_do.setAlpha(0);
			}
			
			_s.hasIconAdded_bl = false;
		};
		
		_s.scaleSmallIconOnTween = function(){
			if(_s.icon_do) FWDAnimation.to(_s.icon_do, .6, {scale:1/_s.prt.scale, ease:Quint.easeOut});

		};
		
	
		// Clean main events.
		_s.cleanMainEvents = function(){
			clearTimeout(_s.loadTimeOutId_to);
			clearInterval(_s.checkHitId_int);
			
		};
		
	
		// Destroy.
		_s.destroy = function(){
			
			_s.cleanMainEvents();
			
			if(_s.background_do){
				FWDAnimation.killTweensOf(_s.background_do);
				_s.background_do.destroy();
			}
			
			if(_s.smallImage_do){
				FWDAnimation.killTweensOf(_s.smallImage_do);
				_s.smallImage_do.disposeImage();
				_s.smallImage_do.destroy();	
			}
			
			if(_s.overlay_do){
				FWDAnimation.killTweensOf(_s.overlay_do);
				_s.overlay_do.destroy();
			}
			
			if(_s.smallImage_img){
				_s.smallImage_img.onload = null;
			}
			
			if(_s.icon_img){
				FWDAnimation.killTweensOf(_s.icon_img);
				_s.icon_img.src = null;
			}
			
			_s.prt = null;
			_s.smallImage_img = null;
			_s.icon_img = null;
			_s.background_do = null;
			_s.smallImage_do = null;
			_s.overlay_do = null;
			
			_s.backgroundColor = null;
			_s.gallery_ar = null;
			
			prt = null;
			
			_s.setInnerHTML("");
			prototype.destroy();
			_s = null;
			FWDIGPThumb.prototype = null;
		};
		
		_s.init();
	};
	
	
	// Set prototype.
	FWDIGPThumb.setPrototype = function(){
		FWDIGPThumb.prototype = new FWDIGPDisplayObject("div");
	};
	
	FWDIGPThumb.MOUSE_OVER = "onMouseOver";
	FWDIGPThumb.MOUSE_OUT = "onMouseOut";
	FWDIGPThumb.MOUSE_UP = "onMouseDown";
	FWDIGPThumb.RIGHT = "right";
	FWDIGPThumb.LEFT = "left";
	FWDIGPThumb.BOTTOM = "bottom";
	FWDIGPThumb.TOP = "top";
	
	FWDIGPThumb.prototype = null;
	window.FWDIGPThumb = FWDIGPThumb;
}(window));/**
 * Infinite Grid Pro PACKAGED v3.0
 * Thumbnails manager.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function (window){

	'use strict';
	
	var FWDIGPThumbsManager = function(_d, prt){
		
		var _s = this;
		var prototype = FWDIGPThumbsManager.prototype;
		
		_s._d = _d;
		_s.rect;
		_s.prt = prt;	
		_s.visitedThumbnailsPaths_ar = [];
		_s.poolThumbs_ar = [];
		_s.backgroundColor = _d.backgroundColor;
		_s.thumbnailBackgroundColor = _d.thumbnailBackgroundColor;
		_s.thumbOverlayBackgroundColor = _d.thumbOverlayBackgroundColor;
		_s.grabIconPath = _d.grabIconPath;
		_s.handIconPath = _d.handIconPath;
		_s.grabIconModernBrowsersPath = _d.grabIconModernBrowsersPath;
		_s.dragDirection = _d.dragDirection;
		_s.autoScrollDirection = _d.autoScrollDirection;
		_s.thumbnailTransitionType = _d.thumbnailTransitionType;
		_s.thumbnailMaxWidth = _d.thumbnailMaxWidth;
		_s.thumbnailMaxHeight = _d.thumbnailMaxHeight;
		_s.lastColRef = 1000;
		_s.lastRowRef = 1000;
		_s.friction = .9;
	    _s.vx = 0;
		_s.vy = 0;
		_s.scale = 1;
		_s.minScale = _d.minScale;
		_s.maxScale = _d.maxScale;
		_s.autoScrollSpeed = _d.autoScrollSpeed;
		_s.prevScale = 1;
		_s.thumbW = 0;
		_s.thumbH = 0;
		_s.totalThumbs;
		_s.curId = 0;
		_s.maxThumbs = 150;
		_s.keepThumbnailsOriginalSizeOnGridStart_bl =  _d.keepThumbnailsOriginalSizeOnGridStart_bl;
		_s.hasPointerEvent_bl = FWDIGPUtils.hasPointerEvent;
		_s.enableVisitedThumbnails_bl = _d.enableVisitedThumbnails_bl;
		_s.autoScroll_bl = _d.autoScroll_bl;
		_s.isAutoScolling_bl = _s.autoScroll_bl;
		_s.isMobile_bl = FWDIGPUtils.isMobile;
		_s.addZoomSupport_bl = _d.addZoomSupport_bl;
		_s.addDragAndSwipeSupport_bl = _d.addDragAndSwipeSupport_bl;
		_s.disableThumbnailInteractivity_bl = _d.disableThumbnailInteractivity_bl;

		
		// Initialize.
		_s.init = function(){
			if(_s.isMobile_bl) _s.friction = .85;
			_s.setResizableSizeAfterParent();
			_s.initComponentId_to = setTimeout(_s.initializeComponent, 100);
		};
		
		
		// Initialize component.
		_s.initializeComponent = function(){
			if(_s.addDragAndSwipeSupport_bl) _s.getStyle().cursor = 'url(' + _s.handIconPath + '), default';
			
			_s.setupThumbsHolder();
			_s.setupPoolThumbs();
			_s.setupDisableDragScreen();
			_s.setRect();
			setTimeout(_s.initilizeAndStartGrid, 150);
		};
	

		// Resize handler.
		_s.resizeAndPosition = function(overwrite){
			
			_s.stageWidth = prt.stageWidth;
			_s.stageHeight = prt.stageHeight;		
			_s.setWidth(_s.stageWidth);
			_s.setHeight(_s.stageHeight);

			if(!_s.allowToSwtchCategory_bl){
				_s.dsb_do.setWidth(_s.stageWidth);
				_s.dsb_do.setHeight(_s.stageHeight);
			}
		
			if(_s.allowToResizeGrid_bl){
				_s.drawGrid();
				_s.removeThumbsIfNotOnScreen();
			}

			_s.setLookDoVertically();
		};
		
		_s.setRect = function(){
			_s.rect = _s.getRect();
		};
		
		
		// Set cur category.
		_s.updateCategory = function(curCat_ar){
			
			if(_s.allowToSwtchCategory_bl){
				FWDIGP.isCategoryChanging_bl = _s.isCategoryChanging_bl = true;
				FWDIGP.disableOnDragOrSwipe_bl = _s.disableOnDragOrSwipe_bl = true;
				_s.allowToResizeGrid_bl = false;

				_s.showDsb();
				_s.stopToLoop();
				_s.removeDummyCheckSupport();
				if(_s.thumbWithVideo){
					 _s.thumbWithVideo.removeVideo();
				}

				if(_s.isMobile_bl){
					_s.removeZoomDragAndSwipeForMobile();
				}else{
					_s.removeDragAndScrollForDesktop();
					_s.removeAutoScrollSupport(true);
					_s.removeDesktopZoomSupport();
					_s.dsb_do.getStyle().cursor = 'default';
				}
				
				// Hide thumbnails.
				var thumb;
				for(var i = 0; i<_s.maxThumbs; i++){
					thumb = _s.poolThumbs_ar[i];
					if(!thumb.isAvailable_bl){
						thumb.isAvailable_bl = true;
						thumb.hide(true);
					} 
				}
				
				_s.checkThumbnailsOnHideId_int = setInterval(function(){
					for(var i = 0; i<_s.maxThumbs; i++){
						thumb = _s.poolThumbs_ar[i];
						if(thumb.isTweeninigOnHide_bl){
							return;
						} 
					}
					clearTimeout(_s.checkThumbnailsOnHideId_int);
					
					_s.initilizeAndStartGrid();
					return
				}, 16);
			}
			
			_s.gallery_ar = curCat_ar;
			_s.totalThumbs = _s.gallery_ar.length;
			_s.allowToSwtchCategory_bl = true;
			FWDIGP.isCategoryChanging_bl = _s.isCategoryChanging_bl = true;
		};


		// Add dummy mouse pos.
		_s.addDummyCheckSupport = function(){
			if(_d.openOnSingleTouch_bl) return;
			if(_s.isMobile_bl){
				if(_s.hasPointerEvent_bl){
					window.addEventListener("MSPointerDown", _s.onDummyAction);
				}else{			
					window.addEventListener("touchstart", _s.onDummyAction, {passive:false});
				}
			}else if(window.removeEventListener){
				window.addEventListener("mousemove", _s.onDummyAction);
			}
		};

		_s.removeDummyCheckSupport = function(){
			if(_s.isMobile_bl){
				if(_s.hasPointerEvent_bl){
					window.removeEventListener("MSPointerDown", _s.onDummyAction);
				}else{			
					window.removeEventListener("touchstart", _s.onDummyAction, {passive:false});
				}
			}else if(window.removeEventListener){
				window.removeEventListener("mousemove", _s.onDummyAction);
			}
		};
		
		_s.onDummyAction = function(e){
			var vpc = FWDIGPUtils.getViewportMouseCoordinates(e);
			_s.checkThumbX = vpc.screenX;
			_s.checkThumbY = vpc.screenY;
		}


		// Setup disable drag screen.
		_s.setupDisableDragScreen = function(){
			if(!_s.dsb_do){
				_s.dsb_do = new FWDIGPDisplayObject("div");
				if(FWDIGPUtils.isIE){
					_s.dsb_do.setBkColor("#FF0000");
					_s.dsb_do.setAlpha(.0001);
				}
				_s.addChild(_s.dsb_do);
			}
			if(_s.dragDirection != "none") _s.dsb_do.getStyle().cursor = 'url(' + _s.grabIconPath + '), default';
			
			_s.hideDsb();
		};
		
		_s.showDsb = function(){
			if(_s.isDsbShowed_bl) return;
			_s.isDsbShowed_bl = true;
			clearTimeout(_s.hDsbId_do);
			_s.dsb_do.setVisible(true);
			_s.dsb_do.setWidth(_s.stageWidth);
			_s.dsb_do.setHeight(_s.stageHeight);
			if(_s.lastHoveredThumb_do && !_s.isMobile_bl){
				_s.lastHoveredThumb_do.setNormalState(true);
				_s.lastHoveredThumb_do = null;
			}
			if(_s.dragDirection != "none") _s.dsb_do.getStyle().cursor = 'url(' + _s.grabIconPath + '), default';
		};
		
		_s.hideDsb = function(){
			if(!_s.isDsbShowed_bl) return;
				_s.hDsbId_do = setTimeout(function(){
				_s.isDsbShowed_bl = false;
				_s.dsb_do.setVisible(false);
				_s.dsb_do.setWidth(0);
				_s.dsb_do.setHeight(0);
				
			}, 300);
			if(_s.dragDirection != "none") _s.dsb_do.getStyle().cursor = 'url(' + _s.handIconPath + '), default';
		};
		
	
		// Setup hider.
		_s.addAutoScrollSupport = function(){
			if(_s.isMobile_bl){
				if(_s.hasPointerEvent_bl){
					_s.screen.addEventListener("MSPointerDown", _s.onAutoScrollDisable);
				}else{
					_s.screen.addEventListener("touchstart", _s.onAutoScrollDisable, {passive:false});
				}
			}else if(window.addEventListener){
				_s.screen.addEventListener("mouseover", _s.onAutoScrollDisable);
			}
		};
		

		// Autoscroll.
		_s.removeAutoScrollSupport = function(removeAll){
			if(_s.autoScroll_bl) _s.isAutoScolling_bl = true;
			if(_s.isMobile_bl){
				if(_s.hasPointerEvent_bl){
					window.removeEventListener("MSPointerDown", _s.onAutoScrollEnable);
					if(removeAll) window.removeEventListener("MSPointerDown", _s.onAutoScrollEnable);
				}else{
					window.removeEventListener("touchstart", _s.onAutoScrollEnable);
					if(removeAll) window.removeEventListener("touchstart", _s.onAutoScrollEnable, {passive:false});
				}
			}else if(window.removeEventListener){
				window.removeEventListener("mousemove", _s.onAutoScrollEnable);
				if(removeAll) window.removeEventListener("mousemove", _s.onAutoScrollEnable);
			}
		};
		
		_s.onAutoScrollDisable = function(){
			if(!_s.isAutoScolling_bl) return;
			if(!_s.addZoomSupport_bl && !_s.addDragAndSwipeSupport_bl) return;
			_s.isAutoScolling_bl = false;
			if(_s.isMobile_bl){
				if(_s.hasPointerEvent_bl){
					window.addEventListener("MSPointerDown", _s.onAutoScrollEnable);
				}else{
					window.addEventListener("touchstart", _s.onAutoScrollEnable);
				}
			}else if(window.addEventListener){
				window.addEventListener("mousemove", _s.onAutoScrollEnable);
			}
		};
		
		_s.onAutoScrollEnable = function(e){
			if(!_s.rect) return
			var vpc = FWDIGPUtils.getViewportMouseCoordinates(e);
			var x = vpc.screenX;
			var y = vpc.screenY;
			
			if(!(x >= _s.rect.left && x <= _s.rect.left +(_s.rect.right - _s.rect.left) 
			  && y >= _s.rect.top && y <= _s.rect.top + (_s.rect.bottom - _s.rect.top))){
				_s.removeAutoScrollSupport();
			}
		};
		
		
		// Setup thumbnail holder.
		_s.setupThumbsHolder = function(){
			if(_s.thumbsHolder_do) return;
			_s.thumbsHolder_do = new FWDIGPTransformDisplayObject("div");
			_s.thumbsHolder_do.getStyle().overflow = "visible";
			_s.addChild(_s.thumbsHolder_do);
		};
		
		
		// Setup pooling thumbs and methods.
		_s.setupPoolThumbs = function(){
			if(_s.poolThumbs_ar.length > 0) return;
			var thumb;
			var iconType;
			var thumbOverlayColor;
			var totalPlayListEntry = _s.gallery_ar.length;
			
			if (_s.isMobile_bl) _s.maxThumbs = 100;

			for(var i = 0; i<_s.maxThumbs; i++){
				FWDIGPThumb.setPrototype();
				thumb = new FWDIGPThumb(
						_s,
						_s.thumbnailTransitionType,
						_s.thumbnailBackgroundColor, 
						_s.thumbOverlayBackgroundColor,
						_d.thumbnailOverlayOpacity, 
						_d.showThumbnailOverlay_bl, 
						_s.isMobile_bl,
						_d.showThumbnailIcon_bl,
						_d.openOnSingleTouch_bl,
						_s.disableThumbnailInteractivity_bl,
						_d.showCaption_bl,
						_d.showCaptionOnThumbVideo_bl,
						_d.visitedThumbnailsOverlayOpacity,
						_d.useVideoInThumb_bl,
						_d.preset);
				thumb.setVisible(false);
				thumb.totalWidth =  _s.thumbW;
				thumb.totalHeight = _s.thumbH;
		
				thumb.addListener(FWDIGPThumb.MOUSE_OVER, _s.onMouseOverHandler);
				thumb.addListener(FWDIGPThumb.MOUSE_UP, _s.onMouseUpHandler);
				_s.poolThumbs_ar[i] = thumb;
			}
		};
		
		_s.onMouseOverHandler = function(e){
			_s.lastHoveredThumb_do = _s.thumbs_ar[e.gridPosition];
		};
		
		_s.onMouseUpHandler = function(e){
			if(_s.disableOnDragOrSwipe_bl) return;
			_s.setVisitedThumbnail(_s.gallery_ar[e.id].thumbSrc);
			e._s.setNormalState(true);

			if(e._s.type == FWDIGP.VIDEO_IN_THUMB) return;
			_s.openThumb(e.id); 
		};

		_s.setNormalStateOnDragOnMobile = function(){
			for(var i=0; i<_s.poolThumbs_ar.length; i++){
				var thumb = _s.poolThumbs_ar[i];
				if(!thumb.isNormalState_bl){
					thumb.setNormalState(true, true);
				}
			}	
		}
		
		// Get the correct id.
		_s.getCorrectId = function(pId){
			
			var regularId = pId;
			var tempId = pId;
			
			var type = _s.gallery_ar[regularId].type;
			if(type != FWDIGP.LINK){
				for(var i=0; i<_s.totalThumbs; i++){
					if(i < pId  && (_s.gallery_ar[i].type == FWDIGP.LINK 
						|| _s.gallery_ar[i].type == FWDIGP.VIDEO_IN_THUMB
						|| _s.gallery_ar[i].type == FWDIGP.NONE)){
						regularId -= 1;
					}
				};
			}
			return {type:type, target:_s.gallery_ar[regularId].target, id:regularId};
		};

		_s.openThumb = function(id){
			var info = _s.getCorrectId(id);
			var type = info.type;
			var target = info.target;
			var correctId = info.id;

			if(type == FWDIGP.NONE){
				return;
			}
			
			if(type == "link"){
				if(_s.gallery_ar[correctId].target == "_self"){
					window.location.href = _s.gallery_ar[correctId].link;
				}else{
					window.open(_s.gallery_ar[correctId].link, _s.gallery_ar[correctId].target);
				}
			}else{
				_s.dispatchEvent(FWDIGPThumb.MOUSE_UP, {categoryId:prt.categoryId, id:correctId});
			}
		}
		
		
		// Get / add thumb back to pool array.
		_s.getThumb = function(id){
			var thumb;
			var thumbAvailable = false;
			var count = 0;
			
			while(!thumbAvailable){
				thumb = _s.poolThumbs_ar[count];
				if(!thumb) return;
				if(thumb.isAvailable_bl){
					thumb.setVisible(true);
					_s.thumbsHolder_do.addChild(thumb);
					thumb.isAvailable_bl = false;
					thumbAvailable = true;
					return thumb;
				}
				count++; 
			}
		};
		
		_s.addThumbBack = function(thumb){
			FWDAnimation.killTweensOf(thumb);
			thumb.isAvailable_bl = true;
			_s.thumbsHolder_do.removeChild(thumb);
			thumb.setVisible(false);
		};
		
		
		// Update visited thumbnails.
		_s.setVisitedThumbnail = function(path){
			if(!_s.enableVisitedThumbnails_bl) return;
		
			var found_bl = false;
			var thumb;
			
			for(var i=0; i<_s.visitedThumbnailsPaths_ar.length; i++){
				if(_s.visitedThumbnailsPaths_ar[i] == path){
					found_bl = true;
					break;
				}
			}
			
			if(!found_bl) _s.visitedThumbnailsPaths_ar.push(path);

			for(var i=0; i<_s.poolThumbs_ar.length; i++){
				thumb = _s.poolThumbs_ar[i];
				if(!thumb.isAvailable_bl){
					for(var j=0; j<_s.visitedThumbnailsPaths_ar.length; j++){
						 if(thumb.thumbSrc == _s.visitedThumbnailsPaths_ar[j]){
							 thumb.isVisited_bl = true;
							 thumb.setToIsVisited();
							 break;
						 }
					}
				}
			}
		};
		
		_s.getVisitedThumb = function(thumbSrc){
			if(!_s.enableVisitedThumbnails_bl) return;
			for(var i=0; i<_s.visitedThumbnailsPaths_ar.length; i++){
				if(thumbSrc == _s.visitedThumbnailsPaths_ar[i]) return true;
			}
			return false;
		};
		
		
		// Start loop.
		_s.startToLoop = function(){
			_s.stopToLoop();
			_s.loopId_int = window.requestAnimationFrame(_s.animLoop);
		};
		
		_s.stopToLoop = function(){
			cancelAnimationFrame(_s.loopId_int);
		};
			
		_s.animLoop = function(){
			if(prt.evp && prt.isFullscreen_bl) return;
			if(!_s.isZooming_bl){
				_s.scrollGrid();
				if(!_s.disableDrawGrid_bl){
					_s.drawGrid();
					_s.removeThumbsIfNotOnScreen();
				}
			}
			_s.loopId_int = window.requestAnimationFrame(_s.animLoop);
		};
		
		
		// Initialize and start grid.
		_s.initilizeAndStartGrid = function(){
			if(_s == null) return;
			_s.allowToShowCaption = _s.allowToShowPreset = false;
			setTimeout(function(){
				_s.allowToShowCaption = _s.allowToShowPreset = true;
			},1200);

			if(isNaN(prt.stageWidth)){
				clearTimeout(_s.initGridWhenStageIsAvailableId_to);
				_s.initGridWhenStageIsAvailableId_to = setTimeout(_s.initilizeAndStartGrid, 150);
				return;
			}
			
			FWDIGP.disableOnDragOrSwipe_bl = _s.disableOnDragOrSwipe_bl = false;
			
			if(_s.thumbsHolder_do.hasTransform2d_bl && _s.thumbsHolder_do){
				_s.scale = _s.prevScale = 1;
				_s.thumbsHolder_do.setScale2(_s.scale);
			}
			
			_s.thumbs_ar = [];
			_s.grid_ar = [];
			_s.resizeAndPosition();
			_s.initGrid();
			_s.setupMouseWheelBlook();
			if(_s.autoScroll_bl) _s.addAutoScrollSupport();
			_s.addZoomSupport();
			_s.startToLoop();
			_s.addDummyCheckSupport();
			_s.hideDsb();
			_s.isGridInitialized_bl = true;
			_s.allowToResizeGrid_bl = true;
			FWDIGP.isCategoryChanging_bl = _s.isCategoryChanging_bl = false;
		};

		_s.addZoomSupport = function(overwrite){
			if(overwrite) _s.addDragAndSwipeSupport_bl = true
			if(_s.isMobile_bl && _s.addDragAndSwipeSupport_bl || overwrite){
				_s.addZoomDragAndSwipeForMobile();
				setTimeout(function(){
					_s.setLookDoVertically();
					_s.addSetLookDoVertically();
				}, 500);
				if(_d.showLookScrollButton_bl|| overwrite){
					_s.look_do.show(true, .5);
				}
			}

			if(!_s.isMobile_bl){
				if(_s.addDragAndSwipeSupport_bl || overwrite) _s.addDragAndScrollForDesktop();
				if(_s.addZoomSupport_bl || overwrite){

					_s.addDesktopZoomSupport();
					setTimeout(function(){
						_s.setLookDoVertically();
						_s.addSetLookDoVertically();
					}, 500);
					if(_d.showLookScrollButton_bl || overwrite){
						_s.look_do.show(true, .5);
					}
				} 
			}
			
		}

		_s.removeZoomSupport = function(overwrite){
			if(_s.isMobile_bl && _s.addDragAnd){
				_s.removeZoomDragAndSwipeForMobile();
				if(_s.look_do){
					_s.look_do.hide(true, .5);
				}
			}

			if(!_s.isMobile_bl){

				_s.removeDesktopZoomSupport();
				if(_s.addDragAndSwipeSupport_bl) _s.addDragAndScrollForDesktop();
				if(_s.look_do){
					_s.look_do.hide(true, .5);
				}
			}
			
		}


		// Setup mouse wheel block.
		_s.setupMouseWheelBlook = function(){
			if(_s.look_do) return;
			FWDIGPLockIcon.setPrototype();
			if(_s.isMobile_bl){
				_s.look_do = new FWDIGPLockIcon(
					_s,
					"look",
					"<span class='" +  prt.fontIcon + ' ' + prt.fontIcon + '-phone-blooked' + "'></span>",
					"<span class='" +  prt.fontIcon + ' ' + prt.fontIcon + '-phone-unblooked' + "'></span>",
					"look-background-normal-state",
					"look-background-selected-state",
					"look-fwdicon-normal-state",
					"look-fwdicon-selected-state"
				);
			}else{
				_s.look_do = new FWDIGPLockIcon(
					_s,
					"look",
					"<span class='" +  prt.fontIcon + ' ' + prt.fontIcon + '-wheel-blooked' + "'></span>",
					"<span class='" +  prt.fontIcon + ' ' + prt.fontIcon + '-wheel-unblooked' + "'></span>",
					"look-background-normal-state",
					"look-background-selected-state",
					"look-fwdicon-normal-state",
					"look-fwdicon-selected-state"
				);
			}

			_s.look_do.addListener(FWDIGPLockIcon.FIRST_BUTTON_CLICK, _s.lookFBtnClick);
			_s.look_do.addListener(FWDIGPLockIcon.SECOND_BUTTON_CLICK, _s.lookSBtnClick);
			_s.addChild(_s.look_do);	
		}

		_s.addSetLookDoVertically =  function(){
			window.addEventListener("scroll", _s.setLookDoVertically);
		}

		_s.removeSetLookDoVertically =  function(){
			window.removeEventListener("scroll", _s.setLookDoVertically);
		}

		_s.setLookDoVertically = function(e){
			if(!_s.look_do) return;
			prt.globalY = prt.main_do.getGlobalY()
			var y = 0;
			if(prt.stageWidth < 700) y = 0;
			if(prt.globalY < 0) y = Math.abs(prt.globalY);
			if(prt.stageWidth < 700){
				if(y > prt.stageHeight - _s.look_do.h - 25) y =  prt.stageHeight - _s.look_do.h - 25;
			}else{
				if(y > prt.stageHeight - _s.look_do.h - 40) y =  prt.stageHeight - _s.look_do.h - 40;

			}
			
			if(prt.paralax_bl){
				if(y > prt.stageHeight - _s.look_do.h - 100) y =  prt.stageHeight - _s.look_do.h - 100;
				if(prt.stageWidth < 700) y = y + 5;
				 y = Math.round(y/2);

			}
			_s.look_do.setY(y);
		}

		_s.lookFBtnClick = function(e){
			_s.addSetLookDoVertically();
			if(_s.isMobile_bl){
				_s.disableGridScrollOnMobile_bl = true
			}else{
				_s.disableMouseWheelScrool_bl = true;
				return;
			}
			window.addEventListener("scroll", _s.checkIfScroll);
			window.addEventListener("touchend", _s.checkIfScrollEnd, {passive:false});
		}

		_s.lookSBtnClick = function(e){
			if(_s.isMobile_bl){
				_s.disableGridScrollOnMobile_bl = false;
				_s.addZoomSupport(true);
			}else{
				_s.disableMouseWheelScrool_bl = false;
				_s.addZoomSupport(true);
				return;
			}
			window.removeEventListener("scroll", _s.checkIfScroll);
			window.removeEventListener("touchend", _s.checkIfScrollEnd, {passive:false});
			window.removeEventListener("scroll", _s.setLookDoVertically);
			_s.checkIfScrollEnd();
		}

		_s.setlookDefaultState = function(){
			_s.look_do.setState(1)
		}

		_s.checkIfScroll = function(e){
			FWDIGP.isMobileScrolling_bl = _s.isMobileScrolling_bl = true;
			_s.setNormalStateOnDragOnMobile();
		}

		_s.checkIfScrollEnd = function(){
			clearTimeout(_s.checkIfScrollId_to);
			_s.checkIfScrollId_to = setTimeout(function(){
				FWDIGP.isMobileScrolling_bl = _s.isMobileScrolling_bl = false;
			}, 200);
		}


		// Init grid.
		_s.initGrid = function(){
			
		    var stageW;
			var stageH;
			var maxRows;
			var maxColumns;
			var thumb;
			var matchId;
			var newId;
			var curPositionInGrid;
			var row;
			var col;	
			var nrImgH;
			var nrImgV;
			var count = 0;
			var curMatrixRow;
			var curMatrixCol;

			stageW = _s.stageWidth;
			stageH = _s.stageHeight;
			
			maxRows = Math.floor(stageH/_s.thumbnailMaxHeight);
			maxColumns =  Math.ceil(stageW/_s.thumbnailMaxWidth);
		
			_s.thumbW = Math.round(stageW/maxColumns);
			_s.thumbH = Math.round(stageH/maxRows);
		
			if(_s.thumbW > _s.thumbnailMaxWidth) maxColumns ++;
			if(_s.thumbH > _s.thumbnailMaxHeight) maxRows ++;
	
			_s.thumbW = Math.round(stageW/maxColumns);
			_s.thumbH = Math.round(stageH/maxRows);
			
			if(_s.keepThumbnailsOriginalSizeOnGridStart_bl){
				_s.thumbW = _s.thumbnailMaxWidth; 
				_s.thumbH = _s.thumbnailMaxHeight;
			}
			
			_s.posX = -_s.thumbW * FWDIGPThumbsManager.GRID_SIZE/2;
			_s.posY = -_s.thumbH * FWDIGPThumbsManager.GRID_SIZE/2;
			
			nrImgH = Math.ceil(stageW / _s.thumbW);
			nrImgV = Math.ceil(stageH / _s.thumbH);
			

			for (row=0; row < nrImgV; row++) {
				for (col=0; col<nrImgH; col++){
					
					curMatrixRow = FWDIGPThumbsManager.GRID_SIZE/2 + row;
					curMatrixCol = FWDIGPThumbsManager.GRID_SIZE/2 + col;
				
					curPositionInGrid = curMatrixRow * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol;
						
					newId = count % _s.totalThumbs;
					_s.curId = newId;

					_s.grid_ar[curPositionInGrid] = newId;

					thumb = _s.getThumb();
					thumb.id = newId;

					_s.thumbs_ar[curPositionInGrid] = thumb;
					thumb.gridPosition = curPositionInGrid;
					
					thumb.totalW = _s.thumbW;
					thumb.totalH = _s.thumbH;
					thumb.finalX = curMatrixCol * _s.thumbW;
					thumb.finalY = curMatrixRow * _s.thumbH;
					thumb.setX(thumb.finalX);
					thumb.setY(thumb.finalY);
					thumb.resizeThumb();
					thumb.isAvailable_bl = false;

					thumb.thumbVideoSrc = _s.gallery_ar[thumb.id].thumbVideoSrc;
					thumb.subtitleSrc = _s.gallery_ar[thumb.id].subtitleSrc;
					thumb.thumbVastSrc = _s.gallery_ar[thumb.id].thumbVastSrc;
					thumb.thumbPreview = _s.gallery_ar[thumb.id].thumbPreview;
					thumb.password = _s.gallery_ar[thumb.id].password;	
					thumb.caption = _s.gallery_ar[thumb.id].thumbCaption;		
					thumb.type = _s.gallery_ar[_s.curId].type;
					thumb.thumbOverlayColor = _s.gallery_ar[thumb.id].thumbOverlayColor || _s.thumbOverlayBackgroundColor;
					thumb.show(_s.gallery_ar[thumb.id].thumbSrc);
					thumb.setHTMLContent(_s.gallery_ar[thumb.id]);
					thumb.setCaption(_s.gallery_ar[thumb.id].thumbCaption);
					thumb.setupVideoPlayButton();
					if(_s.getVisitedThumb(_s.gallery_ar[thumb.id].thumbSrc)) thumb.isVisited_bl = true;
					count++;
				}
			}
			FWDAnimation.killTweensOf(_s.thumbsHolder_do);
			_s.thumbsHolder_do.setX(_s.posX);
			_s.thumbsHolder_do.setY(_s.posY);
		};
		
		
		// Draw grid.
		_s.drawGrid =  function(){
			
			var stageW;
			var stageH;
			var matchId;
			var newId;
			var curPositionInGrid;
			var row;
			var col;
			var curMatrixRow;
			var curMatrixCol;
			var nrImgH;
			var nrImgV;
			var rowRef;
			var colRef;
			
			stageW = _s.stageWidth;
			stageH = _s.stageHeight;
			
			var dx = Math.abs(_s.posX % (_s.thumbW * _s.scale));
			var dy = Math.abs(_s.posY % (_s.thumbH * _s.scale));
			
			nrImgH = Math.ceil(stageW / (_s.thumbW * _s.scale));
			nrImgV = Math.ceil(stageH / (_s.thumbH * _s.scale));
			
			
			if (dx > nrImgH * (_s.thumbW * _s.scale) - stageW){
				nrImgH++;
			}
			
			if (dy > nrImgV * (_s.thumbH * _s.scale) - stageH){
				nrImgV++;
			}
			
			rowRef = Math.floor(_s.posY/-(_s.thumbH * _s.scale));
			colRef = Math.floor(_s.posX/-(_s.thumbW * _s.scale));

			for (row=0; row < nrImgV; row++) {
				for (col=0; col < nrImgH; col++){
					
					curMatrixRow = rowRef + row;
					curMatrixCol = colRef + col;
					
					curPositionInGrid = curMatrixRow * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol;
				
					if (_s.thumbs_ar[curPositionInGrid] == undefined){
						if(_s.grid_ar[curPositionInGrid] == undefined){
							matchId = false;
							if(_d.thumbnailsOrder == 'random'){
								while(!matchId){
									matchId = true;
										
									newId = Math.floor(Math.random() * _s.totalThumbs);
									
									// Check left top.
									if (_s.grid_ar[((curMatrixRow - 1) * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol - 1)] == newId){
										matchId = false;
									}
									
									// Check left.
									if (_s.grid_ar[curMatrixRow * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol - 1] == newId){
										matchId = false;
									}
									
									// Check left bottom.
									if (_s.grid_ar[((curMatrixRow + 1) * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol - 1)] == newId){
										matchId = false;
									}
									
									// Check up.
									if (_s.grid_ar[((curMatrixRow - 1) * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol)] == newId){
										matchId = false;
									}
									
									// Check down.
									if (_s.grid_ar[((curMatrixRow + 1) * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol)] == newId){
										matchId = false;
									}
									
									// Check right top.
									if (_s.grid_ar[((curMatrixRow - 1) * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol + 1)] == newId){
										matchId = false;
									}
									
									// Check right.
									if (_s.grid_ar[(curMatrixRow * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol + 1)] == newId){
										matchId = false;
									}
									
									// Check right down.
									if (_s.grid_ar[((curMatrixRow + 1) * FWDIGPThumbsManager.GRID_SIZE + curMatrixCol + 1)] == newId){
										matchId = false;
									}
								}
							}else{
								_s.curId ++;
								if(_s.curId >= _s.totalThumbs) _s.curId = 0;
								newId = _s.curId;
							}
						}else{
							newId = _s.grid_ar[curPositionInGrid];	
						}
					
						_s.grid_ar[curPositionInGrid] = newId;
						var thumb = _s.getThumb();
						thumb.id = newId;
						
						if(!thumb) return;
						
						_s.thumbs_ar[curPositionInGrid] = thumb;
						thumb.gridPosition = curPositionInGrid;
						
						thumb = _s.thumbs_ar[curPositionInGrid];
						thumb.totalW = _s.thumbW;
						thumb.totalH = _s.thumbH;
						thumb.finalX = curMatrixCol * _s.thumbW;
						thumb.finalY = curMatrixRow * _s.thumbH;
						thumb.setX(thumb.finalX);
						thumb.setY(thumb.finalY);
						thumb.resizeThumb();

						thumb.iconPath = _s.gallery_ar[thumb.id].thumbIconPath;
						thumb.thumbVideoSrc = _s.gallery_ar[thumb.id].thumbVideoSrc;
						thumb.subtitleSrc = _s.gallery_ar[thumb.id].subtitleSrc;
						thumb.thumbVastSrc = _s.gallery_ar[thumb.id].thumbVastSrc;
						thumb.thumbPreview = _s.gallery_ar[thumb.id].thumbPreview;
						thumb.password = _s.gallery_ar[thumb.id].password;
						thumb.type = _s.gallery_ar[thumb.id].type;
						
						thumb.thumbOverlayColor = _s.gallery_ar[thumb.id].thumbOverlayColor || _s.thumbOverlayBackgroundColor;
						thumb.show(_s.gallery_ar[thumb.id].thumbSrc, _s.setThumbsSizeOnceOnScroll);
						thumb.setHTMLContent(_s.gallery_ar[thumb.id]);
						thumb.setCaption(_s.gallery_ar[thumb.id].thumbCaption);
						thumb.setupVideoPlayButton();
						if(_s.getVisitedThumb(_s.gallery_ar[thumb.id].thumbSrc)) thumb.isVisited_bl = true;
					}
				}
			}

			_s.setThumbsSizeOnceOnScroll = false;
		};
		
		
		// Remove thumbs if they are not on screen.
		_s.removeThumbsIfNotOnScreen = function(){
			var thumb;
			var i;
			
			for(i=0; i<_s.maxThumbs; i++){
				thumb = _s.poolThumbs_ar[i];
					
				if(_s.posX + thumb.finalX * _s.scale < -_s.thumbW * _s.scale
					|| _s.posX + thumb.finalX * _s.scale > _s.stageWidth
					|| _s.posY + thumb.finalY * _s.scale < -_s.thumbH * _s.scale
					|| _s.posY + thumb.finalY * _s.scale > _s.stageHeight
				){
					if(!thumb.isAvailable_bl){
						thumb.removeImage();
						_s.addThumbBack(thumb);
						_s.thumbs_ar[thumb.gridPosition] = undefined;
					}

					if(_s.thumbWithVideo == thumb){
						 _s.thumbWithVideo.removeVideo();
					}
				}
			}
		};
		
		
		// Add mouse wheel support.
		_s.addDesktopZoomSupport = function(){
			if(window.addEventListener){
				_s.screen.addEventListener ("mousewheel", _s.mouseWheelHandler);
				_s.screen.addEventListener('DOMMouseScroll', _s.mouseWheelHandler);
			}
		};
		
		_s.removeDesktopZoomSupport = function(){
			if(window.removeEventListener){
				_s.screen.removeEventListener ("mousewheel", _s.mouseWheelHandler);
				_s.screen.addEventListener('DOMMouseScroll', _s.mouseWheelHandler);
			}
		};
		
		
		// Zoom function.
		_s.mouseWheelHandler = function(e, posX, posY){
			if(_s.disableMouseWheelScrool_bl) return;
			if(e){
				if(e.preventDefault){
					e.preventDefault();
				}else{
					return false;
				}
			}
			if(_s.isDragged_bl && !_s.isMobile_bl) return;
			
			var vmc;
			var so; 
			
			_s.vx = 0;
			_s.vy = 0;
			
			if(e){
				var dir = e.detail || e.wheelDelta;	
				if(e.wheelDelta) dir *= -1;
				
				if(dir > 0){
					if (_s.scale == _s.minScale) return;
					_s.scale -= .2;
					
					if (_s.scale < _s.minScale){
						_s.scale = _s.minScale;
					}
				}else if(dir < 0){
					if (_s.scale == _s.maxScale) return;
					_s.scale += .2;
					if (_s.scale > _s.maxScale){
						_s.scale = _s.maxScale;
					}
				}
			}
			
			var curXScaleDividedByPrevScale = _s.scale / _s.prevScale;
			var curYScaleDividedByPrevScale = _s.scale / _s.prevScale;
			
			if (!FWDAnimation.isTweening(_s)){
				_s.newPosX = _s.posX;
				_s.newPosY = _s.posY;
			}

			_s.newPosX *= curXScaleDividedByPrevScale;
			_s.newPosY *= curYScaleDividedByPrevScale;

			if(_s.isMobile_bl){
				_s.newPosX += posX - curXScaleDividedByPrevScale * posX;
				_s.newPosY += posY - curXScaleDividedByPrevScale * posY;
			}else{
				vmc = FWDIGPUtils.getViewportMouseCoordinates(e);
				_s.newPosX += (vmc.screenX - prt.globalX) - (curXScaleDividedByPrevScale * (vmc.screenX - prt.globalX));
				_s.newPosY += (vmc.screenY - prt.globalY) - (curXScaleDividedByPrevScale  * (vmc.screenY - prt.globalY));
			}


			_s.newPosX = Math.round(_s.newPosX);
			_s.newPosY = Math.round(_s.newPosY);
		
			FWDAnimation.killTweensOf(_s);
			FWDAnimation.killTweensOf(_s.thumbsHolder_do);

			if(String(_s.scale).indexOf("1.0000") != -1){
				_s.scale = 1;
			}
		
			if(_s.isMobile_bl){
				_s.tweenDuration = .2;
			}else{
				_s.tweenDuration = .6;
			}
			FWDAnimation.to(_s, _s.tweenDuration, {posX:_s.newPosX, posY:_s.newPosY, ease:Quint.easeOut});
			FWDAnimation.to(_s.thumbsHolder_do, _s.tweenDuration, {x:_s.newPosX, y:_s.newPosY, scale:_s.scale, onComplete:_s.zoomCompleteHandler,  ease:Quint.easeOut});

			if(_s.lastHoveredThumb_do && !_s.disableThumbnailInteractivity_bl) _s.lastHoveredThumb_do.scaleSmallIconOnTween();
		
			_s.prevScale = _s.scale;
			_s.isZooming_bl = true;
			_s.setThumbsSizeOnceOnScroll = true;

			clearTimeout(_s.scaleThumbVideoId_to);
			_s.scaleThumbVideoId_to = setTimeout(function(){
				_s.scaleThumbVideo();
			}, 10);

			clearTimeout(_s.scaleThumbCaptionId_to);
			_s.scaleThumbCaptionId_to = setTimeout(function(){
				_s.scaleThumbCaption();
			}, 10);
		};

		_s.setNormalStateOnZoom = function(){
			for(var i=0; i<_s.poolThumbs_ar.length; i++){
				var thumb = _s.poolThumbs_ar[i];
				if(!thumb.isNormalState_bl){
					thumb.setNormalState(true, true);
				}
			}	
		}
		
		_s.zoomCompleteHandler = function(){
			_s.isZooming_bl = false;
			_s.drawGrid();
			_s.removeThumbsIfNotOnScreen();
		};


		// Scale thumb video and thumb caption.
		_s.scaleThumbVideo = function(){
			for(var i=0; i<_s.thumbs_ar.length; i++){
				var thumb = _s.thumbs_ar[i];
				if(thumb && thumb.type == FWDIGP.VIDEO_IN_THUMB){
					thumb.scalePlayButton(true);
					thumb.resizeVideo(true);
				}
			}
		}

		_s.scaleThumbCaption = function(){
			for(var i=0; i<_s.thumbs_ar.length; i++){
				var thumb = _s.thumbs_ar[i];
				if(thumb && thumb.caption && thumb.captionShowed_bl){
					thumb.resizeCaption(true);
				}
			}
		}
	
		
		// Setup scrollbar for mobile.
		_s.addZoomDragAndSwipeForMobile = function(){
			if(_s.hasPointerEvent_bl){
				_s.screen.addEventListener("MSPointerDown", _s.onTouchStart);
			}else{
				_s.screen.addEventListener("touchstart", _s.onTouchStart, {passive:false});
			}
		};	
		
		_s.removeZoomDragAndSwipeForMobile = function(){
			if(_s.hasPointerEvent_bl){
				_s.screen.removeEventListener("MSPointerDown", _s.onTouchStart);
				window.removeEventListener("MSPointerUp", _s.windowOnTouchEnd);
				window.removeEventListener("MSPointerMove", _s.windowOnTouchMove);
			}else{
				_s.screen.removeEventListener("touchstart", _s.onTouchStart, {passive:false});
				window.removeEventListener("touchend", _s.windowOnTouchEnd, {passive:false});
				window.removeEventListener("touchmove", _s.windowOnTouchMove, {passive:false});
			}
		};	
		
		_s.onTouchStart = function(e){
			if(_s.disableGridScrollOnMobile_bl){
				return;
			}

			if(_s.isZooming_bl) return;

			// Check if hit pass.
			if(prt.evp && prt.evp.passWindow_do && prt.evp.passWindow_do.passInput_do){
				var vc = FWDIGPUtils.getViewportMouseCoordinates(e);	
				if(FWDIGPUtils.hitTest(prt.evp.passWindow_do.passInput_do.screen, vc.screenX, vc.screenY)
				|| FWDIGPUtils.hitTest(prt.evp.passWindow_do.passButton_do.screen, vc.screenX, vc.screenY)){
					return;
				}
			}

			if(e.preventDefault) e.preventDefault();
		
			_s.vx = 0;
			_s.vy = 0;
			
			if(e.touches){
				_s.lastMouseX = _s.firstTouchMouseX = _s.lastDragX =  e.touches[0].pageX - prt.globalX - prt.scrollOffsets.x;
				_s.lastMouseY = _s.firstTouchMouseY = _s.lastDragY = e.touches[0].pageY - prt.globalY - prt.scrollOffsets.y;
			}else{
				_s.lastMouseX = _s.firstTouchMouseX = e.pageX - prt.globalX - prt.scrollOffsets.x;
				_s.lastMouseY = _s.firstTouchMouseY = e.pageY - prt.globalY - prt.scrollOffsets.y;
			}
			
			if(e.touches && e.touches.length == 2 && _s.addZoomSupport_bl){
				FWDIGP.disableOnDragOrSwipe_bl = _s.disableOnDragOrSwipe_bl = true;
				_s.lastMouseX2 = e.touches[1].pageX - prt.globalX - prt.scrollOffsets.x;
				_s.lastMouseY2 = e.touches[1].pageY - prt.globalY - prt.scrollOffsets.y;
			}else if(e.touches && e.touches.length > 2 && _s.addZoomSupport_bl){
				return;
			}
			
			if(_s.hasPointerEvent_bl){
				window.addEventListener("MSPointerUp", _s.windowOnTouchEnd);
				window.addEventListener("MSPointerMove", _s.windowOnTouchMove);
			}else{
				window.addEventListener("touchend", _s.windowOnTouchEnd, {passive:false});
				window.addEventListener("touchmove", _s.windowOnTouchMove, {passive:false});
			}
		};


		// Touch events for the grid.
		_s.windowOnTouchMove = function(e){
			if(e.preventDefault) e.preventDefault();
			
			var lcX;
			var lcY;
			var toAddX;
			var toAddY;
			var toAddY2;
			var posX1;
			var posY1;
			var posX2;
			var posY2;
			var pinchDist;
			var dx;
			var dy;
			var finalPosX;
			var finalPosY;

			if(e.touches){
				lcX = e.touches[0].pageX - prt.globalX - prt.scrollOffsets.x;
				lcY = e.touches[0].pageY - prt.globalY - prt.scrollOffsets.y;
			}else{
				lcX = e.pageX - prt.globalX - prt.scrollOffsets.x;
				lcY = e.pageY - prt.globalY - prt.scrollOffsets.y;
			}
			
			if(_s.firstTouchMouseX < lcX - 5 || _s.firstTouchMouseX > lcX + 5
			  || _s.firstTouchMouseY < lcY - 5 || _s.firstTouchMouseY > lcY + 5){

			  	_s.setNormalStateOnDragOnMobile();
			  
				FWDIGP.disableOnDragOrSwipe_bl = _s.disableOnDragOrSwipe_bl = true;
			}
			
			if(_s.hasPointerEvent_bl){
				toAddX = e.pageX - prt.globalX - _s.lastMouseX - prt.scrollOffsets.x;
				toAddY = e.pageY - prt.globalY - _s.lastMouseY - prt.scrollOffsets.y;
				_s.lastMouseX = lcX;
				_s.lastMouseY = lcY;
				if(_s.dragDirection == "both"){
					_s.posX += toAddX;
					_s.posY += toAddY;
				}else if(_s.dragDirection == "horizontal"){
					_s.posX += toAddX;
				}else if(_s.dragDirection == "vertical"){
					_s.posY += toAddY;
				}
				
				if(Math.abs(_s.lastDragX - _s.lastMouseX) > 10 || Math.abs(_s.lastDragY - _s.lastMouseY) > 10){
					FWDIGP.isDragged_bl = _s.isDragged_bl = true;
				}

			}else if(e.touches && e.touches.length == 1 && _s.addDragAndSwipeSupport_bl){
				toAddX = e.touches[0].pageX - prt.globalX - _s.lastMouseX - prt.scrollOffsets.x;
				toAddY = e.touches[0].pageY - prt.globalY - _s.lastMouseY - prt.scrollOffsets.y;
				_s.lastMouseX = lcX;
				_s.lastMouseY = lcY;
				if(_s.dragDirection == "both"){
					_s.posX += toAddX;
					_s.posY += toAddY;
				}else if(_s.dragDirection == "horizontal"){
					_s.posX += toAddX;
				}else if(_s.dragDirection == "vertical"){
					_s.posY += toAddY;
				}
				if(Math.abs(_s.lastDragX - _s.lastMouseX) > 10 || Math.abs(_s.lastDragY - _s.lastMouseY) > 10){
					FWDIGP.isDragged_bl = _s.isDragged_bl = true;
				}
			}else if(e.touches && e.touches.length == 2 && _s.addZoomSupport_bl){
				posX1 = lcX;
				posY1 = lcY;
				posX2 = e.touches[1].pageX - prt.globalX - prt.scrollOffsets.x;
				posY2 = e.touches[1].pageY - prt.globalY - prt.scrollOffsets.y;
				finalPosX = (posX2 + posX1)/2;
				finalPosY = (posY2 + posY1)/2;
				
				dx = posX1 - posX2;
				dy = posY1 - posY2;
				pinchDist = Math.sqrt(dx * dx + dy * dy);
				
				if(parseInt(_s.pinchDist) != parseInt(pinchDist)){
					if(_s.pinchDist > pinchDist){
						_s.scale -= 0.04;
						if (_s.scale < .8){
							_s.scale = .8;
						}
					}else{
						_s.scale += 0.04;
						if (_s.scale > 1.6){
							_s.scale = 1.6;
						}
					}
				}
				
				_s.pinchDist = pinchDist;
				_s.mouseWheelHandler(null, finalPosX, finalPosY);

				FWDIGP.isZoomed = true;
				FWDIGP.isDragged_bl = _s.isDragged_bl = true;	
			}
		};
		
		_s.windowOnTouchEnd = function(e){

			if(e.preventDefault) e.preventDefault();
			if(_s.hasPointerEvent_bl){
				window.removeEventListener("MSPointerUp", _s.windowOnTouchEnd);
				window.removeEventListener("MSPointerMove", _s.windowOnTouchMove);
				clearTimeout(_s.disableOnDragOrSwipeId_to);
				_s.disableOnDragOrSwipeId_to = setTimeout(function(){
					FWDIGP.disableOnDragOrSwipe_bl = _s.disableOnDragOrSwipe_bl = false;
				}, 200);
			}else{
				if(e.touches.length == 0){
					clearTimeout(_s.disableOnDragOrSwipeId_to);
					_s.disableOnDragOrSwipeId_to = setTimeout(function(){
						FWDIGP.disableOnDragOrSwipe_bl = _s.disableOnDragOrSwipe_bl = false;
					}, 200);
					window.removeEventListener("touchend", _s.windowOnTouchEnd);
					window.removeEventListener("touchmove", _s.windowOnTouchMove);
				}
			}
			
			_s.chckZoomId_to = setTimeout(function(){
				FWDIGP.isZoomed = false;
			}, 500);
			FWDIGP.isDragged_bl = _s.isDragged_bl = false;
		};
		
		
		// Setup scrolling for pc.
		_s.addDragAndScrollForDesktop = function(){
			_s.screen.addEventListener("mousedown", _s.onMouseDown);
		};
		
		_s.removeDragAndScrollForDesktop = function(){
			_s.screen.removeEventListener("mousedown", _s.onMouseDown);
			window.removeEventListener("mouseup", _s.windowOnMoveUp);
			window.removeEventListener("mousemove", _s.windowOnMouseMove);
		};
		
		_s.onMouseDown = function(e){

			// Check if hit pass.
			if(prt.evp && prt.evp.passWindow_do && prt.evp.passWindow_do.passInput_do){
				var vc = FWDIGPUtils.getViewportMouseCoordinates(e);	
				if(FWDIGPUtils.hitTest(prt.evp.passWindow_do.passInput_do.screen, vc.screenX, vc.screenY)){
					return;
				}

				if(FWDIGPUtils.hitTest(prt.evp.passWindow_do.passButton_do.screen, vc.screenX, vc.screenY)){
					return;
				}
			}

			if(e.preventDefault) e.preventDefault();
			
			var vpc = FWDIGPUtils.getViewportMouseCoordinates(e);
			
			_s.vx = 0;
			_s.vy = 0;
			_s.lastMouseX = vpc.screenX;
			_s.lastMouseY = vpc.screenY;
						
			if(window.addEventListener){
				setTimeout(function(){
					if(_s == null) return;
					window.addEventListener("mouseup", _s.windowOnMoveUp);
					window.addEventListener("mousemove", _s.windowOnMouseMove);
				}, 10);
			}
		};
		
		_s.windowOnMouseMove = function(e){
			var vpc = FWDIGPUtils.getViewportMouseCoordinates(e);
			
			var toAddX = vpc.screenX - _s.lastMouseX;
			var toAddY = vpc.screenY - _s.lastMouseY;
			
			_s.disableOpenLighbox_bl = true;
			_s.showDsb();
			
			if(_s.dragDirection == "both"){
				_s.posX += toAddX;
				_s.posY += toAddY;
			}else if(_s.dragDirection == "horizontal"){
				_s.posX += toAddX;
			}else if(_s.dragDirection == "vertical"){
				_s.posY += toAddY;
			}
			
			_s.lastMouseX = vpc.screenX;
			_s.lastMouseY = vpc.screenY;
			FWDIGP.isDragged_bl = _s.isDragged_bl = true;
		};
		
		_s.windowOnMoveUp = function(){
			
			_s.hideDsb();
			
			window.removeEventListener("mouseup", _s.windowOnMoveUp);
			window.removeEventListener("mousemove", _s.windowOnMouseMove);
		
			clearTimeout(_s.disableOpenLighboxId_to);
			_s.disableOpenLighboxId_to = setTimeout(function(){_s.disableOpenLighbox_bl = false;}, 100);
		
			FWDIGP.isDragged_bl = _s.isDragged_bl = false;
		};
	

		// Scroll grid.
		_s.scrollGrid =  function(){
			
			if(_s.vx > 80){
				_s.vx = 80;
			}else if(_s.vx < -80){
				_s.vx = -80;
			}
			
			if(_s.vy > 80){
				_s.vy = 80;
			}else if(_s.vy < -80){
				_s.vy = -80;
			}
			
			if(Math.abs(_s.vx) < .01 && Math.abs(_s.vy) < .01 || _s.isZooming_bl){
				_s.disableDrawGrid_bl = true;
			}else{
				_s.disableDrawGrid_bl = false;
			}
			
			if(_s.isDragged_bl){
				_s.vx = _s.posX - _s.lastThumsbHolderX;
				_s.vy = _s.posY - _s.lastThumsbHolderY;
				_s.lastThumsbHolderX = _s.posX;	
				_s.lastThumsbHolderY = _s.posY;
			}else if(_s.isAutoScolling_bl){
				if(_s.autoScrollDirection == "down"){
					_s.vy = _s.autoScrollSpeed;
				}else if(_s.autoScrollDirection == "up"){
					_s.vy = -_s.autoScrollSpeed;
				}else if(_s.autoScrollDirection == "left"){
					_s.vx = -_s.autoScrollSpeed;
				}else if(_s.autoScrollDirection == "right"){
					_s.vx = _s.autoScrollSpeed;
				}
				
				_s.vx *= _s.friction;
				_s.vy *= _s.friction;
				_s.posX += Math.round(_s.vx);
				_s.posY += Math.round(_s.vy);
			}else{
				_s.vx *= _s.friction;
				_s.vy *= _s.friction;
				_s.posX += Math.round(_s.vx);
				_s.posY += Math.round(_s.vy);
			}
			
			if(!_s.disableDrawGrid_bl){
				if(_s.dragDirection == "both"){
					_s.thumbsHolder_do.setX(_s.posX);
					_s.thumbsHolder_do.setY(_s.posY);
				}else if(_s.dragDirection == "horizontal"){
					_s.thumbsHolder_do.setX(_s.posX);
				}else if(_s.dragDirection == "vertical"){
					_s.thumbsHolder_do.setY(_s.posY);
				}
			}
		};
		
		_s.init();
		
	};
	
	// Set prototype.
	FWDIGPThumbsManager.setPrototype = function(){
		FWDIGPThumbsManager.prototype = new FWDIGPDisplayObject("div");
	};
	
	FWDIGPThumbsManager.GRID_SIZE = 1000;
	FWDIGPThumbsManager.MOUSE_DONE = "onMouseDown";
	
	FWDIGPThumbsManager.prototype = null;
	window.FWDIGPThumbsManager = FWDIGPThumbsManager;
	
}(window));﻿/**
 * Infinite Grid Pro PACKAGED v3.0
 * Display object.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function (window){

	'use strict';

	/*
	 * @ type values: div, img.
	 * @ positon values: relative, absolute.
	 * @ positon values: hidden.
	 * @ display values: block, inline-block, _s applies only if the position is relative.
	 */

	'use strict';
	
	var FWDIGPTransformDisplayObject = function(type, position, overflow, display){

		var _s = this;

		_s.listeners = {events_ar:[]};
		
		if(type == "div" || type == "img" || type == "canvas"){
			_s.type = type;	
		}else{
			throw Error("Type is not valid! " + type);
		}
	
		_s.children_ar = [];
		_s.style;
		_s.screen;
		_s.numChildren;
		_s.transform;
		_s.position = position || "absolute";
		_s.overflow = overflow || "hidden";
		_s.display = display || "block";
		_s.visible = true;
		_s.buttonMode;
		_s.x = 0;
		_s.y = 0;	
		_s.scale = 1;
		_s.rotation = 0;
		_s.w = 0;
		_s.h = 0;
		_s.rect;
		_s.alpha = 1;
		_s.innerHTML = "";
		_s.opacityType = "";
		_s.isHtml5_bl = false;
		
		_s.hasTransform2d_bl = FWDIGPUtils.hasTransform2d;
		
		
		// Initialize.
		_s.init = function(){
			_s.setScreen();
		};	
		

		// Check if it supports transforms.
		_s.getTransform = function() {
		    var properties = ['transform', 'msTransform', 'WebkitTransform', 'MozTransform', 'OTransform'];
		    var p;
		    while (p = properties.shift()) {
		       if (typeof _s.screen.style[p] !== 'undefined') {
		            return p;
		       }
		    }
		    return false;
		};
		
		
		// Set opacity type.
		_s.getOpacityType = function(){
			var opacityType;
			if (typeof _s.screen.style.opacity != "undefined") {//ie9+ 
				opacityType = "opacity";
			}else{ 
				opacityType = "filter";
			}
			return opacityType;
		};
		
		
		// Setup main screen.
		_s.setScreen = function(element){
			if(_s.type == "img" && element){
				_s.screen = element;
				_s.setMainProperties();
			}else{
				_s.screen = document.createElement(_s.type);
				_s.setMainProperties();
			}
		};
		
		
		// Set main properties.
		_s.setMainProperties = function(){
			
			_s.transform = _s.getTransform();
			_s.setPosition(_s.position);
			_s.setOverflow(_s.overflow);
			_s.opacityType = _s.getOpacityType();
			
			if(_s.opacityType == "opacity") _s.isHtml5_bl = true;
			
			if(_s.opacityType == "filter") _s.screen.style.filter = "inherit";
			
			_s.screen.style.left = "0px";
			_s.screen.style.top = "0px";
			_s.screen.style.margin = "0px";
			_s.screen.style.padding = "0px";
			_s.screen.style.maxWidth = "none";
			_s.screen.style.maxHeight = "none";
			_s.screen.style.border = "none";
			_s.screen.style.lineHeight = "1";
			_s.screen.style.backfaceVisibility = "hidden";
			_s.screen.style.webkitBackfaceVisibility = "hidden";
			_s.screen.style.MozBackfaceVisibility = "hidden";
			
			if(type == "img"){
				_s.setWidth(_s.screen.width);
				_s.setHeight(_s.screen.height);
				_s.screen.onmousedown = function(e){return false;};
			}
		};
		
		_s.setBackfaceVisibility =  function(){
			_s.screen.style.backfaceVisibility = "visible";
			_s.screen.style.webkitBackfaceVisibility = "visible";
			_s.screen.style.MozBackfaceVisibility = "visible";		
		};
		
		_s.removeBackfaceVisibility =  function(){
			_s.screen.style.backfaceVisibility = "hidden";
			_s.screen.style.webkitBackfaceVisibility = "hidden";
			_s.screen.style.MozBackfaceVisibility = "hidden";		
		};
		
		
		// Set / get various peoperties.
		_s.setSelectable = function(val){
			if(!val){
				try{_s.screen.style.userSelect = "none";}catch(e){};
				try{_s.screen.style.MozUserSelect = "none";}catch(e){};
				try{_s.screen.style.webkitUserSelect = "none";}catch(e){};
				try{_s.screen.style.khtmlUserSelect = "none";}catch(e){};
				try{_s.screen.style.oUserSelect = "none";}catch(e){};
				try{_s.screen.style.msUserSelect = "none";}catch(e){};
				try{_s.screen.msUserSelect = "none";}catch(e){};
				_s.screen.ondragstart = function(e){return  false;};
				_s.screen.onselectstart = function(){return false;};
				_s.screen.style.webkitTouchCallout='none';
			}
		};
		
		_s.getScreen = function(){
			return _s.screen;
		};
		
		_s.setVisible = function(val){
			_s.visible = val;
			if(_s.visible == true){
				_s.screen.style.visibility = "visible";
			}else{
				_s.screen.style.visibility = "hidden";
			}
		};
		
		_s.getVisible = function(){
			return _s.visible;
		};
			
		_s.setResizableSizeAfterParent = function(){
			_s.screen.style.width = "100%";
			_s.screen.style.height = "100%";
		};
		
		_s.getStyle = function(){
			return _s.screen.style;
		};
		
		_s.setOverflow = function(val){
			_s.overflow = val;
			_s.screen.style.overflow = _s.overflow;
		};
		
		_s.setPosition = function(val){
			_s.position = val;
			_s.screen.style.position = _s.position;
		};
		
		_s.setDisplay = function(val){
			_s.display = val;
			_s.screen.style.display = _s.display;
		};
		
		_s.setButtonMode = function(val){
			_s.buttonMode = val;
			if(_s.buttonMode ==  true){
				_s.screen.style.cursor = "pointer";
			}else{
				_s.screen.style.cursor = "default";
			}
		};
		
		_s.setBkColor = function(val){
			_s.screen.style.backgroundColor = val;
		};
		
		_s.setInnerHTML = function(val){
			_s.innerHTML = val;
			_s.screen.innerHTML = _s.innerHTML;
		};
		
		_s.getInnerHTML = function(){
			return _s.innerHTML;
		};
		
		_s.getRect = function(){
			return _s.screen.getBoundingClientRect();
		};
		
		_s.setAlpha = function(val){
			_s.alpha = val;
			if(_s.opacityType == "opacity"){
				_s.screen.style.opacity = _s.alpha;
			}else if(_s.opacityType == "filter"){
				_s.screen.style.filter = "alpha(opacity=" + _s.alpha * 100 + ")";
				_s.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(_s.alpha * 100) + ")";
			}
		};
		
		_s.getAlpha = function(){
			return _s.alpha;
		};
		
		_s.getRect = function(){
			return _s.screen.getBoundingClientRect();
		};
		
		_s.getGlobalX = function(){
			return _s.getRect().left;
		};
		
		_s.getGlobalY = function(){
			return _s.getRect().top;
		};
		
		_s.setX = function(val){
			_s.x = val;
			if(_s.hasTransform2d_bl){
				_s.screen.style[_s.transform] = "translate(" + _s.x + "px," + _s.y + "px) scale(" + _s.scale + " , " + _s.scale + ") rotate(" + _s.rotation + "deg)";
			}else{
				_s.screen.style.left = _s.x + "px";
			}
		};
		
		_s.getX = function(){
			return  _s.x;
		};
		
		_s.setY = function(val){
			_s.y = val;
			if(_s.hasTransform2d_bl){
				_s.screen.style[_s.transform] = "translate(" + _s.x + "px," + _s.y + "px) scale(" + _s.scale + " , " + _s.scale + ") rotate(" + _s.rotation + "deg)";
			}else{
				_s.screen.style.top = _s.y + "px";
			}
		};
		
		_s.getY = function(){
			return  _s.y;
		};
		
		_s.setScale2 = function(val){
			_s.scale = val;
			if(_s.hasTransform2d_bl){
				_s.screen.style[_s.transform] = "translate(" + _s.x + "px," + _s.y + "px) scale(" + _s.scale + " , " + _s.scale + ") rotate(" + _s.rotation + "deg)";
			}
		};
		
		_s.getScale = function(){
			return  _s.scale;
		};
		
		_s.setRotation = function(val){
			_s.rotation = val;
			if(_s.hasTransform2d_bl){
				_s.screen.style[_s.transform] = "translate(" + _s.x + "px," + _s.y + "px) scale(" + _s.scale + " , " + _s.scale + ") rotate(" + _s.rotation + "deg)";
			}
		};
		
		_s.setWidth = function(val){
			_s.w = val;
			if(_s.type == "img"){
				_s.screen.width = _s.w;
			}else{
				_s.screen.style.width = _s.w + "px";
			}
		};
		
		_s.getWidth = function(){
			if(_s.type == "div"){
				if(_s.screen.offsetWidth != 0) return  _s.screen.offsetWidth;
				return _s.w;
			}else if(_s.type == "img"){
				if(_s.screen.offsetWidth != 0) return  _s.screen.offsetWidth;
				if(_s.screen.width != 0) return  _s.screen.width;
				return _s._w;
			}else if( _s.type == "canvas"){
				if(_s.screen.offsetWidth != 0) return  _s.screen.offsetWidth;
				return _s.w;
			}
		};
		
		_s.setHeight = function(val){
			_s.h = val;
			if(_s.type == "img"){
				_s.screen.height = _s.h;
			}else{
				_s.screen.style.height = _s.h + "px";
			}
		};
		
		_s.getHeight = function(){
			if(_s.type == "div"){
				if(_s.screen.offsetHeight != 0) return  _s.screen.offsetHeight;
				return _s.h;
			}else if(_s.type == "img"){
				if(_s.screen.offsetHeight != 0) return  _s.screen.offsetHeight;
				if(_s.screen.height != 0) return  _s.screen.height;
				return _s.h;
			}else if(_s.type == "canvas"){
				if(_s.screen.offsetHeight != 0) return  _s.screen.offsetHeight;
				return _s.h;
			}
		};
		
		_s.getNumChildren = function(){
			return _s.children_ar.length;
		};
		
		
		// DOM list.
		_s.addChild = function(e){
			if(_s.contains(e)){	
				_s.children_ar.splice(FWDIGPUtils.indexOfArray(_s.children_ar, e), 1);
				_s.children_ar.push(e);
				_s.screen.appendChild(e.screen);
			}else{
				_s.children_ar.push(e);
				_s.screen.appendChild(e.screen);
			}
		};
		
		_s.removeChild = function(e){
			if(_s.contains(e)){
				_s.children_ar.splice(FWDIGPUtils.indexOfArray(_s.children_ar, e), 1);
				_s.screen.removeChild(e.screen);
			}else{
				throw Error("##removeChild()## Child doesn't exist, it can't be removed!");
			};
		};
		
		_s.contains = function(e){
			if(FWDIGPUtils.indexOfArray(_s.children_ar, e) == -1){
				return false;
			}else{
				return true;
			}
		};
		
		_s.addChildAt = function(e, index){
			
			if(_s.getNumChildren() == 0){
				_s.children_ar.push(e);
				_s.screen.appendChild(e.screen);
			}else if(index == 1){
				_s.screen.insertBefore(e.screen, _s.children_ar[0].screen);
				_s.screen.insertBefore(_s.children_ar[0].screen, e.screen);	
				if(_s.contains(e)){
					_s.children_ar.splice(FWDIGPUtils.indexOfArray(_s.children_ar, e), 1, e);
				}else{
					_s.children_ar.splice(FWDIGPUtils.indexOfArray(_s.children_ar, e), 0, e);
				}
			}else{
				if(index < 0  || index > _s.getNumChildren() -1) throw Error("##getChildAt()## Index out of bounds!");
				
				_s.screen.insertBefore(e.screen, _s.children_ar[index].screen);
				if(_s.contains(e)){
					_s.children_ar.splice(FWDIGPUtils.indexOfArray(_s.children_ar, e), 1, e);
				}else{
					_s.children_ar.splice(FWDIGPUtils.indexOfArray(_s.children_ar, e), 0, e);
				}
			}
		};
		
		_s.getChildAt = function(index){
			if(index < 0  || index > _s.numChildren -1) throw Error("##getChildAt()## Index out of bounds!");
			if(_s.numChildren == 0) throw Errror("##getChildAt## Child dose not exist!");
			return _s.children_ar[index];
		};
		
		_s.removeChildAtZero = function(){
			_s.screen.removeChild(_s.children_ar[0].screen);
			_s.children_ar.shift();
		};
		
		
		// Event dispatcher.
		_s.addListener = function (type, listener){
	    	
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function.");
	    	
	        var event = {};
	        event.type = type;
	        event.listener = listener;
	        event.target = _s;
	        _s.listeners.events_ar.push(event);
	    };
	    
	    _s.dispatchEvent = function(type, props){
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	
	        for (var i=0, len=_s.listeners.events_ar.length; i < len; i++){
	        	if(_s.listeners.events_ar[i].target === _s && _s.listeners.events_ar[i].type === type){
	        		
	    	        if(props){
	    	        	for(var prop in props){
	    	        		_s.listeners.events_ar[i][prop] = props[prop];
	    	        	}
	    	        }
	        		_s.listeners.events_ar[i].listener.call(_s, _s.listeners.events_ar[i]);
	        		break;
	        	}
	        }
	    };
	    
	   _s.removeListener = function(type, listener){
	    	
	    	if(type == undefined) throw Error("type is required.");
	    	if(typeof type === "object") throw Error("type must be of type String.");
	    	if(typeof listener != "function") throw Error("listener must be of type Function." + type);
	    	
	        for (var i=0, len=_s.listeners.events_ar.length; i < len; i++){
	        	if(_s.listeners.events_ar[i].target === _s 
	        			&& _s.listeners.events_ar[i].type === type
	        			&& _s.listeners.events_ar[i].listener ===  listener
	        	){
	        		_s.listeners.events_ar.splice(i,1);
	        		break;
	        	}
	        }  
	    };
	    
	  
	    // Destroy methods.
		_s.disposeImage = function(){
			if(_s.type == "img") _s.screen.src = null;
		};
		
		
		_s.destroy = function(){
			
			try{_s.screen.parentNode.removeChild(_s.screen);}catch(e){};
			
			_s.screen.onselectstart = null;
			_s.screen.ondragstart = null;
			_s.screen.ontouchstart = null;
			_s.screen.ontouchmove = null;
			_s.screen.ontouchend = null;
			_s.screen.onmouseover = null;
			_s.screen.onmouseout = null;
			_s.screen.onmouseup = null;
			_s.screen.onmousedown = null;
			_s.screen.onmousemove = null;
			_s.screen.onclick = null;
			
			delete _s.screen;
			delete _s.style;
			delete _s.rect;
			delete _s.selectable;
			delete _s.buttonMode;
			delete _s.position;
			delete _s.overflow;
			delete _s.visible;
			delete _s.innerHTML;
			delete _s.numChildren;
			delete _s.x;
			delete _s.y;
			delete _s.w;
			delete _s.h;
			delete _s.opacityType;
			delete _s.isHtml5_bl;
			delete _s.hasTransform2d_bl;

			_s.children_ar = null;
			_s.style = null;
			_s.screen = null;
			_s.numChildren = null;
			_s.transform = null;
			_s.position = null;
			_s.overflow = null;
			_s.display= null;
			_s.visible= null;
			_s.buttonMode = null;
			_s.globalX = null;
			_s.globalY = null;
			_s.x = null;
			_s.y = null;
			_s.w = null;;
			_s.h = null;;
			_s.rect = null;
			_s.alpha = null;
			_s.innerHTML = null;
			_s.opacityType = null;
			_s.isHtml5_bl = null;
			_s.hasTransform3d_bl = null;
			_s.hasTransform2d_bl = null;
			_s = null;
		};
		

	  	// Initialize.
		_s.init();
	};
	
	window.FWDIGPTransformDisplayObject = FWDIGPTransformDisplayObject;
}(window));/**
 * Infinite Grid Pro PACKAGED v3.0
 * Utils.
 *
 * @author Tibi - FWDesign [https://webdesign-flash.ro/]
 * Copyright © 2006 All Rights Reserved.
 */

(function (window){

	'use strict';
	
	var FWDIGPUtils = function(){};
	
	FWDIGPUtils.dumy = document.createElement("div");
	
	// String.
	FWDIGPUtils.trim = function(str){
		return str.replace(/\s/gi, "");
	};
	
	FWDIGPUtils.splitAndTrim = function(str, trim_bl){
		var array = str.split(",");
		var length = array.length;
		for(var i=0; i<length; i++){
			if(trim_bl) array[i] = FWDIGPUtils.trim(array[i]);
		};
		return array;
	};

	FWDIGPUtils.getCookie = function(name){
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}

	
	// Array.
	FWDIGPUtils.indexOfArray = function(array, prop){
		var length = array.length;
		for(var i=0; i<length; i++){
			if(array[i] === prop) return i;
		};
		return -1;
	};
	
	FWDIGPUtils.randomizeArray = function(aArray) {
		var randomizedArray = [];
		var copyArray = aArray.concat();
			
		var length = copyArray.length;
		for(var i=0; i< length; i++) {
			var index = Math.floor(Math.random() * copyArray.length);
			randomizedArray.push(copyArray[index]);
			copyArray.splice(index,1);
		}
		return randomizedArray;
	};
	
	FWDIGPUtils.removeArrayDuplicates = function(arr, key){ 
		var newArr = [],
	        origLen = arr.length,
	        found,
	        x, y;

	    for (x = 0; x < origLen; x++) {
	        found = undefined;
	        for (y = 0; y < newArr.length; y++) {
	            if(arr[x][key] === newArr[y][key]) { 
	              found = true;
	              break;
	            }
	        }
	        if(!found) newArr.push(arr[x]);    
	    }
	    return newArr;
	};

	
	// DOM manipulation.
	FWDIGPUtils.parent = function (e, n){
		if(n === undefined) n = 1;
		while(n-- && e) e = e.parentNode;
		if(!e || e.nodeType !== 1) return null;
		return e;
	};
	
	FWDIGPUtils.sibling = function(e, n){
		while (e && n !== 0){
			if(n > 0){
				if(e.nextElementSibling){
					 e = e.nextElementSibling;	 
				}else{
					for(var e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling);
				}
				n--;
			}else{
				if(e.previousElementSibling){
					 e = e.previousElementSibling;	 
				}else{
					for(var e = e.previousSibling; e && e.nodeType !== 1; e = e.previousSibling);
				}
				n++;
			}
		}
		return e;
	};
	
	FWDIGPUtils.getChildAt = function (e, n){
		var kids = FWDIGPUtils.getChildren(e);
		if(n < 0) n += kids.length;
		if(n < 0) return null;
		return kids[n];
	};
	
	FWDIGPUtils.getChildById = function(id){
		return document.getElementById(id) || undefined;
	};
	
	FWDIGPUtils.getChildren = function(e, allNodesTypes){
		var kids = [];
		for(var c = e.firstChild; c != null; c = c.nextSibling){
			if(allNodesTypes){
				kids.push(c);
			}else if(c.nodeType === 1){
				kids.push(c);
			}
		}
		return kids;
	};
	
	FWDIGPUtils.getChildrenFromAttribute = function(e, attr, allNodesTypes){
		var kids = [];
		for(var c = e.firstChild; c != null; c = c.nextSibling){
			if(allNodesTypes && FWDIGPUtils.hasAttribute(c, attr)){
				kids.push(c);
			}else if(c.nodeType === 1 && FWDIGPUtils.hasAttribute(c, attr)){
				kids.push(c);
			}
		}
		return kids.length == 0 ? undefined : kids;
	};
	
	FWDIGPUtils.getChildFromNodeListFromAttribute = function(e, attr, allNodesTypes){
		for(var c = e.firstChild; c != null; c = c.nextSibling){
			if(allNodesTypes && FWDIGPUtils.hasAttribute(c, attr)){
				return c;
			}else if(c.nodeType === 1 && FWDIGPUtils.hasAttribute(c, attr)){
				return c;
			}
		}
		return undefined;
	};
	
	FWDIGPUtils.getAttributeValue = function(e, attr){
		if(!FWDIGPUtils.hasAttribute(e, attr)) return undefined;
		return e.getAttribute(attr);	
	};
	
	FWDIGPUtils.hasAttribute = function(e, attr){
		if(e.hasAttribute){
			return e.hasAttribute(attr); 
		}else {
			var test = e.getAttribute(attr);
			return  test ? true : false;
		}
	};
	
	FWDIGPUtils.insertNodeAt = function(parent, child, n){
		var children = FWDIGPUtils.children(parent);
		if(n < 0 || n > children.length){
			throw new Error("invalid index!");
		}else {
			parent.insertBefore(child, children[n]);
		};
	};
	
	FWDIGPUtils.hasCanvas = function(){
		return Boolean(document.createElement("canvas"));
	};
	
	
	// DOM geometry.
	FWDIGPUtils.hitTest = function(target, x, y){
		var hit = false;
		if(!target) throw Error("Hit test target is null!");
		var rect = target.getBoundingClientRect();
		
		if(x >= rect.left && x <= rect.left +(rect.right - rect.left) && y >= rect.top && y <= rect.top + (rect.bottom - rect.top)) return true;
		return false;
	};
	
	FWDIGPUtils.getScrollOffsets = function(){
		//all browsers
		if(window.pageXOffset != null) return{x:window.pageXOffset, y:window.pageYOffset};
		
		//ie7/ie8
		if(document.compatMode == "CSS1Compat"){
			return({x:document.documentElement.scrollLeft, y:document.documentElement.scrollTop});
		}
	};
	

	FWDIGPUtils.getViewportSize = function(){
		if(FWDIGPUtils.hasPointerEvent && navigator.msMaxTouchPoints > 1){
			return {w:document.documentElement.clientWidth || window.innerWidth, h:document.documentElement.clientHeight || window.innerHeight};
		}
		
		if(FWDIGPUtils.isMobile) return {w:window.innerWidth, h:window.innerHeight};
		return {w:document.documentElement.clientWidth || window.innerWidth, h:document.documentElement.clientHeight || window.innerHeight};
	};
	
	FWDIGPUtils.getViewportMouseCoordinates = function(e){
		var offsets = FWDIGPUtils.getScrollOffsets();

		if(e.touches){
			return{
				screenX:e.touches[0] == undefined ? e.touches.pageX - offsets.x :e.touches[0].pageX - offsets.x,
				screenY:e.touches[0] == undefined ? e.touches.pageY - offsets.y :e.touches[0].pageY - offsets.y
			};
		}
		
		return{
			screenX: e.clientX == undefined ? e.pageX - offsets.x : e.clientX,
			screenY: e.clientY == undefined ? e.pageY - offsets.y : e.clientY
		};
	};
	
	
	// Browsers test.
	FWDIGPUtils.hasPointerEvent = (function(){
		return Boolean(window.navigator.msPointerEnabled) || Boolean(window.navigator.pointerEnabled);
	}());
	
	FWDIGPUtils.isMobile = (function (){
		if((FWDIGPUtils.hasPointerEvent && navigator.msMaxTouchPoints > 1) || (FWDIGPUtils.hasPointerEvent && navigator.maxTouchPoints > 1)) return true;
		var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry', 'kfsowi'];
	    for(var i in agents) {
	    	 if(String(navigator.userAgent).toLowerCase().indexOf(String(agents[i]).toLowerCase()) != -1) {
	            return true;
	        }
	    }
	    if(navigator.platform.toLowerCase() === 'macintel' && navigator.maxTouchPoints > 1 && !window.MSStream) return true;
	    return false;
	}());
	
	FWDIGPUtils.isAndroid = (function(){
		 return (navigator.userAgent.toLowerCase().indexOf("android".toLowerCase()) != -1);
	}());
	
	FWDIGPUtils.isChrome = (function(){
		return navigator.userAgent.toLowerCase().indexOf('chrome') != -1;
	}());
	
	FWDIGPUtils.isSafari = (function(){
		return navigator.userAgent.toLowerCase().indexOf('safari') != -1 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1;
	}());
	
	FWDIGPUtils.isOpera = (function(){
		return navigator.userAgent.toLowerCase().indexOf('opera') != -1 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1;
	}());
	
	FWDIGPUtils.isFirefox = (function(){
		return navigator.userAgent.toLowerCase().indexOf('firefox') != -1;
	}());
	
	FWDIGPUtils.isIE = (function(){
		var isIE = Boolean(navigator.userAgent.toLowerCase().indexOf('msie') != -1) || Boolean(navigator.userAgent.toLowerCase().indexOf('edge') != -1);
		return isIE || Boolean(document.documentElement.msRequestFullscreen);
	}());
	
	FWDIGPUtils.isIE11 = (function(){
		return Boolean(!FWDIGPUtils.isIE && document.documentElement.msRequestFullscreen);
	}());
	
	FWDIGPUtils.isIEAndLessThen9 = (function(){
		return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 || navigator.userAgent.toLowerCase().indexOf("msie 8") != -1;
	}());
	
	FWDIGPUtils.isIEAndLessThen10 = (function(){
		return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 
		|| navigator.userAgent.toLowerCase().indexOf("msie 8") != -1
		|| navigator.userAgent.toLowerCase().indexOf("msie 9") != -1;
	}());
	
	FWDIGPUtils.isIE7 = (function(){
		return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1;
	}());
	
	FWDIGPUtils.isIOS = (function(){
		return navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
	}());
	
	FWDIGPUtils.isIphone = (function(){
		return navigator.userAgent.match(/(iPhone|iPod)/g);
	}());
	
	FWDIGPUtils.isApple = (function(){
		return navigator.appVersion.toLowerCase().indexOf('mac') != -1;
	}());
	
	FWDIGPUtils.isLocal = (function(){
		return location.href.indexOf('file:') != -1;
	}());
	
	FWDIGPUtils.hasFullScreen = (function(){
		return FWDIGPUtils.dumy.requestFullScreen || FWDIGPUtils.dumy.mozRequestFullScreen || FWDIGPUtils.dumy.webkitRequestFullScreen || FWDIGPUtils.dumy.msieRequestFullScreen;
	}());
	
	function get3d(){
	    var properties = ['transform', 'msTransform', 'WebkitTransform', 'MozTransform', 'OTransform', 'KhtmlTransform'];
	    var p;
	    var position;
	    while (p = properties.shift()) {
	       if (typeof FWDIGPUtils.dumy.style[p] !== 'undefined') {
	    	   FWDIGPUtils.dumy.style.position = "absolute";
	    	   position = FWDIGPUtils.dumy.getBoundingClientRect().left;
	    	   FWDIGPUtils.dumy.style[p] = 'translate3d(500px, 0px, 0px)';
	    	   position = Math.abs(FWDIGPUtils.dumy.getBoundingClientRect().left - position);
	    	   
	           if(position > 100 && position < 900){
	        	   try{document.documentElement.removeChild(FWDIGPUtils.dumy);}catch(e){}
	        	   return true;
	           }
	       }
	    }
	    try{document.documentElement.removeChild(FWDIGPUtils.dumy);}catch(e){}
	    return false;
	};
	
	function get2d(){
	    var properties = ['transform', 'msTransform', 'WebkitTransform', 'MozTransform', 'OTransform', 'KhtmlTransform'];
	    var p;
	    while (p = properties.shift()) {
	       if (typeof FWDIGPUtils.dumy.style[p] !== 'undefined') {
	    	   return true;
	       }
	    }
	    try{document.documentElement.removeChild(FWDIGPUtils.dumy);}catch(e){}
	    return false;
	};	
	
	
	// Various utils.
	FWDIGPUtils.onReady =  function(callbalk){
		if (document.addEventListener) {
			document.addEventListener( "DOMContentLoaded", function(){
				FWDIGPUtils.checkIfHasTransofrms();
				callbalk();
			});
		}else{
			document.onreadystatechange = function () {
				FWDIGPUtils.checkIfHasTransofrms();
				if (document.readyState == "complete") callbalk();
			};
		 }
	};
	
	FWDIGPUtils.checkIfHasTransofrms = function(){
		document.documentElement.appendChild(FWDIGPUtils.dumy);
		FWDIGPUtils.hasTransform3d = get3d();
		FWDIGPUtils.hasTransform2d = get2d();
		FWDIGPUtils.isReadyMethodCalled_bl = true;
	};
	
	FWDIGPUtils.disableElementSelection = function(e){
		try{e.style.userSelect = "none";}catch(e){};
		try{e.style.MozUserSelect = "none";}catch(e){};
		try{e.style.webkitUserSelect = "none";}catch(e){};
		try{e.style.khtmlUserSelect = "none";}catch(e){};
		try{e.style.oUserSelect = "none";}catch(e){};
		try{e.style.msUserSelect = "none";}catch(e){};
		try{e.msUserSelect = "none";}catch(e){};
		e.onselectstart = function(){return false;};
	};
	
	FWDIGPUtils.getSearchArgs = function urlArgs(string){
		var args = {};
		var query = string.substr(string.indexOf("?") + 1) || location.search.substring(1);
		var pairs = query.split("&");
		for(var i=0; i< pairs.length; i++){
			var pos = pairs[i].indexOf("=");
			var name = pairs[i].substring(0,pos);
			var value = pairs[i].substring(pos + 1);
			value = decodeURIComponent(value);
			args[name] = value;
		}
		return args;
	};
	
	FWDIGPUtils.getHashArgs = function urlArgs(string){
		var args = {};
		var query = string.substr(string.indexOf("#") + 1) || location.hash.substring(1);
		var pairs = query.split("&");
		for(var i=0; i< pairs.length; i++){
			var pos = pairs[i].indexOf("=");
			var name = pairs[i].substring(0,pos);
			var value = pairs[i].substring(pos + 1);
			value = decodeURIComponent(value);
			args[name] = value;
		}
		return args;
	};

	FWDIGPUtils.getHashParam = function(param){
        var value = location.hash.substr(1);
        var index = value.indexOf("?");
        if (index != -1) {
            value = value.substr(index + 1);
            var p, params = value.split("&"),
                i = params.length,
                r = [];
            while (i--) {
                p = params[i].split("=");
                if (p[0] == param) {
                    r.push(p[1])
                }
            }

            if (r.length != 0) {
                return r.length != 1 ? r : r[0]
            }
        }

    };
	
	
	FWDIGPUtils.isReadyMethodCalled_bl = false;
	
	window.FWDIGPUtils = FWDIGPUtils;
}(window));