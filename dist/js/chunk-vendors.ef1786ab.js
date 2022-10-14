(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"0829":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Ll})),n.d(t,"b",(function(){return Ac})),n.d(t,"c",(function(){return pc})),n.d(t,"d",(function(){return ic})),n.d(t,"e",(function(){return cl})),n.d(t,"f",(function(){return Sc})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return xc})),n.d(t,"i",(function(){return ll})),n.d(t,"j",(function(){return ul})),n.d(t,"k",(function(){return F})),n.d(t,"l",(function(){return Pl})),n.d(t,"m",(function(){return Wa})),n.d(t,"n",(function(){return ae})),n.d(t,"o",(function(){return K})),n.d(t,"p",(function(){return Xa})),n.d(t,"q",(function(){return _})),n.d(t,"r",(function(){return Q})),n.d(t,"s",(function(){return g})),n.d(t,"t",(function(){return Ga})),n.d(t,"u",(function(){return Gl})),n.d(t,"v",(function(){return su})),n.d(t,"w",(function(){return iu})),n.d(t,"x",(function(){return wc})),n.d(t,"y",(function(){return oc})),n.d(t,"z",(function(){return ac})),n.d(t,"A",(function(){return nc})),n.d(t,"B",(function(){return Kl})),n.d(t,"C",(function(){return tu})),n.d(t,"D",(function(){return Ic})),n.d(t,"E",(function(){return cc})),n.d(t,"F",(function(){return yc})),n.d(t,"G",(function(){return bc})),n.d(t,"H",(function(){return Ec})),n.d(t,"I",(function(){return Sl})),n.d(t,"J",(function(){return Ol})),n.d(t,"K",(function(){return gc})),n.d(t,"L",(function(){return Jl})),n.d(t,"M",(function(){return Bl})),n.d(t,"N",(function(){return Ul})),n.d(t,"O",(function(){return $l})),n.d(t,"P",(function(){return Vl})),n.d(t,"Q",(function(){return ql})),n.d(t,"R",(function(){return Hl})),n.d(t,"S",(function(){return ru})),n.d(t,"T",(function(){return wl})),n.d(t,"U",(function(){return kl})),n.d(t,"V",(function(){return Tc})),n.d(t,"W",(function(){return Cc})),n.d(t,"X",(function(){return Ql})),n.d(t,"Y",(function(){return Yl})),n.d(t,"Z",(function(){return bl})),n.d(t,"ab",(function(){return ml})),n.d(t,"bb",(function(){return uc})),n.d(t,"cb",(function(){return lc})),n.d(t,"db",(function(){return eu})),n.d(t,"eb",(function(){return nu})),n.d(t,"fb",(function(){return Wl})),n.d(t,"gb",(function(){return f})),n.d(t,"hb",(function(){return dl})),n.d(t,"ib",(function(){return Tl})),n.d(t,"jb",(function(){return Il})),n.d(t,"kb",(function(){return zl})),n.d(t,"lb",(function(){return kc})),n.d(t,"mb",(function(){return vl}));var i=n("589b"),s=n("22e5"),r=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}l.UNAUTHENTICATED=new l(null),l.GOOGLE_CREDENTIALS=new l("google-credentials-uid"),l.FIRST_PARTY=new l("first-party-uid"),l.MOCK_USER=new l("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let u="9.6.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new r["b"]("@firebase/firestore");function d(){return h.logLevel}function f(e){h.setLogLevel(e)}function p(e,...t){if(h.logLevel<=r["a"].DEBUG){const n=t.map(v);h.debug(`Firestore (${u}): ${e}`,...n)}}function m(e,...t){if(h.logLevel<=r["a"].ERROR){const n=t.map(v);h.error(`Firestore (${u}): ${e}`,...n)}}function g(e,...t){if(h.logLevel<=r["a"].WARN){const n=t.map(v);h.warn(`Firestore (${u}): ${e}`,...n)}}function v(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e="Unexpected state"){const t=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+e;throw m(t),new Error(t)}function b(e,t){e||y()}function _(e,t){e||y()}function w(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class C{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(l.UNAUTHENTICATED))}shutdown(){}}class O{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class S{constructor(e){this.t=e,this.currentUser=l.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new I;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new I,e.enqueueRetryable(()=>i(this.currentUser))};const r=()=>{const t=s;e.enqueueRetryable(async()=>{await t.promise,await i(this.currentUser)})},o=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new I)}},0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(b("string"==typeof t.accessToken),new T(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return b(null===e||"string"==typeof e),new l(e)}}class A{constructor(e,t,n){this.type="FirstParty",this.user=l.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class D{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new A(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(l.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class x{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=n=>{e.enqueueRetryable(()=>(e=>(null!=e.error&&p("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message),t(e.token)))(n))};const n=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(b("string"==typeof e.token),new x(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.p(e),this.T=e=>t.writeSequenceNumber(e))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */L.I=-1;class N{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=R(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function P(e,t){return e<t?-1:e>t?1:0}function j(e,t,n){return e.length===t.length&&e.every((e,i)=>n(e,t[i]))}function B(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new E(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new E(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new E(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return F.fromMillis(Date.now())}static fromDate(e){return F.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new F(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?P(this.nanoseconds,e.nanoseconds):P(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new F(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function V(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function q(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,t,n){void 0===t?t=0:t>e.length&&y(),void 0===n?n=e.length-t:n>e.length-t&&y(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===H.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof H?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),s=t.get(i);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class W extends H{construct(e,t,n){return new W(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new E(k.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new W(t)}static emptyPath(){return new W([])}}const z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends H{construct(e,t,n){return new K(e,t,n)}static isValidIdentifier(e){return z.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new K(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(0===n.length)throw new E(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let r=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new E(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new E(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(r=!r,i++):"."!==t||r?(n+=t,i++):(s(),i++)}if(s(),r)throw new E(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new K(t)}static emptyPath(){return new K([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.fields=e,e.sort(K.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return j(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Y(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Y(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return P(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Y.EMPTY_BYTE_STRING=new Y("");const J=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function X(e){if(b(!!e),"string"==typeof e){let t=0;const n=J.exec(e);if(b(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Z(e.seconds),nanos:Z(e.nanos)}}function Z(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ee(e){return"string"==typeof e?Y.fromBase64String(e):Y.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ne(e){const t=e.mapValue.fields.__previous_value__;return te(t)?ne(t):t}function ie(e){const t=X(e.mapValue.fields.__local_write_time__.timestampValue);return new F(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){return null==e}function re(e){return 0===e&&1/e==-1/0}function oe(e){return"number"==typeof e&&Number.isInteger(e)&&!re(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(W.fromString(e))}static fromName(e){return new ae(W.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===W.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return W.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new W(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?te(e)?4:10:y()}function le(e,t){const n=ce(e);if(n!==ce(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ie(e).isEqual(ie(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=X(e.timestampValue),i=X(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ee(e.bytesValue).isEqual(ee(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Z(e.geoPointValue.latitude)===Z(t.geoPointValue.latitude)&&Z(e.geoPointValue.longitude)===Z(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Z(e.integerValue)===Z(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Z(e.doubleValue),i=Z(t.doubleValue);return n===i?re(n)===re(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return j(e.arrayValue.values||[],t.arrayValue.values||[],le);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if($(n)!==$(i))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===i[s]||!le(n[s],i[s])))return!1;return!0}(e,t);default:return y()}}function ue(e,t){return void 0!==(e.values||[]).find(e=>le(e,t))}function he(e,t){const n=ce(e),i=ce(t);if(n!==i)return P(n,i);switch(n){case 0:return 0;case 1:return P(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Z(e.integerValue||e.doubleValue),i=Z(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return de(e.timestampValue,t.timestampValue);case 4:return de(ie(e),ie(t));case 5:return P(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ee(e),i=ee(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let s=0;s<n.length&&s<i.length;s++){const e=P(n[s],i[s]);if(0!==e)return e}return P(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=P(Z(e.latitude),Z(t.latitude));return 0!==n?n:P(Z(e.longitude),Z(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let s=0;s<n.length&&s<i.length;++s){const e=he(n[s],i[s]);if(e)return e}return P(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},i=Object.keys(n),s=t.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let o=0;o<i.length&&o<r.length;++o){const e=P(i[o],r[o]);if(0!==e)return e;const t=he(n[i[o]],s[r[o]]);if(0!==t)return t}return P(i.length,r.length)}(e.mapValue,t.mapValue);default:throw y()}}function de(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return P(e,t);const n=X(e),i=X(t),s=P(n.seconds,i.seconds);return 0!==s?s:P(n.nanos,i.nanos)}function fe(e){return pe(e)}function pe(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=X(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ee(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ae.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=pe(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const s of t)i?i=!1:n+=",",n+=`${s}:${pe(e.fields[s])}`;return n+"}"}(e.mapValue):y();var t,n}function me(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ge(e){return!!e&&"integerValue"in e}function ve(e){return!!e&&"arrayValue"in e}function ye(e){return!!e&&"nullValue"in e}function be(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function _e(e){return!!e&&"mapValue"in e}function we(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return V(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=we(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=we(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.value=e}static empty(){return new ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!_e(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=we(t)}setAll(e){let t=K.emptyPath(),n={},i=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=s.popLast()}e?n[s.lastSegment()]=we(e):i.push(s.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());_e(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return le(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];_e(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){V(t,(t,n)=>e[t]=n);for(const i of n)delete e[i]}clone(){return new ke(we(this.value))}}function Ee(e){const t=[];return V(e.fields,(e,n)=>{const i=new K([e]);if(_e(n)){const e=Ee(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)}),new G(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ie{constructor(e,t,n,i,s){this.key=e,this.documentType=t,this.version=n,this.data=i,this.documentState=s}static newInvalidDocument(e){return new Ie(e,0,U.min(),ke.empty(),0)}static newFoundDocument(e,t,n){return new Ie(e,1,t,n,0)}static newNoDocument(e,t){return new Ie(e,2,t,ke.empty(),0)}static newUnknownDocument(e,t){return new Ie(e,3,t,ke.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Ie(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t=null,n=[],i=[],s=null,r=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.R=null}}function Ce(e,t=null,n=[],i=[],s=null,r=null,o=null){return new Te(e,t,n,i,s,r,o)}function Oe(e){const t=w(e);if(null===t.R){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Me(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),se(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=Ve(t.startAt)),t.endAt&&(e+="|ub:",e+=Ve(t.endAt)),t.R=e}return t.R}function Se(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>{return`${(t=e).field.canonicalString()} ${t.op} ${fe(t.value)}`;var t}).join(", ")}]`),se(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: "+Ve(e.startAt)),e.endAt&&(t+=", endAt: "+Ve(e.endAt)),`Target(${t})`}function Ae(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++)if(!He(e.orderBy[s],t.orderBy[s]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],i=t.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!le(n.value,i.value))return!1;var n,i;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ze(e.startAt,t.startAt)&&ze(e.endAt,t.endAt)}function De(e){return ae.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class xe extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.P(e,t,n):new Le(e,t,n):"array-contains"===t?new je(e,n):"in"===t?new Be(e,n):"not-in"===t?new Fe(e,n):"array-contains-any"===t?new Ue(e,n):new xe(e,t,n)}static P(e,t,n){return"in"===t?new Re(e,n):new Ne(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(he(t,this.value)):null!==t&&ce(this.value)===ce(t)&&this.v(he(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return y()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Me(e){return e.field.canonicalString()+e.op.toString()+fe(e.value)}class Le extends xe{constructor(e,t,n){super(e,t,n),this.key=ae.fromName(n.referenceValue)}matches(e){const t=ae.comparator(e.key,this.key);return this.v(t)}}class Re extends xe{constructor(e,t){super(e,"in",t),this.keys=Pe("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ne extends xe{constructor(e,t){super(e,"not-in",t),this.keys=Pe("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Pe(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>ae.fromName(e.referenceValue))}class je extends xe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ve(t)&&ue(t.arrayValue,this.value)}}class Be extends xe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ue(this.value.arrayValue,t)}}class Fe extends xe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ue(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ue(this.value.arrayValue,t)}}class Ue extends xe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ve(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ue(this.value.arrayValue,e))}}class $e{constructor(e,t){this.position=e,this.before=t}}function Ve(e){return`${e.before?"b":"a"}:${e.position.map(e=>fe(e)).join(",")}`}class qe{constructor(e,t="asc"){this.field=e,this.dir=t}}function He(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function We(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],o=e.position[s];if(i=r.field.isKeyField()?ae.comparator(ae.fromName(o.referenceValue),n.key):he(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return e.before?i<=0:i<0}function ze(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!le(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Ge(e,t,n,i,s,r,o,a){return new Ke(e,t,n,i,s,r,o,a)}function Qe(e){return new Ke(e)}function Ye(e){return!se(e.limit)&&"F"===e.limitType}function Je(e){return!se(e.limit)&&"L"===e.limitType}function Xe(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ze(e){for(const t of e.filters)if(t.V())return t.field;return null}function et(e){return null!==e.collectionGroup}function tt(e){const t=w(e);if(null===t.S){t.S=[];const e=Ze(t),n=Xe(t);if(null!==e&&null===n)e.isKeyField()||t.S.push(new qe(e)),t.S.push(new qe(K.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.S.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new qe(K.keyField(),e))}}}return t.S}function nt(e){const t=w(e);if(!t.D)if("F"===t.limitType)t.D=Ce(t.path,t.collectionGroup,tt(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of tt(t)){const t="desc"===s.dir?"asc":"desc";e.push(new qe(s.field,t))}const n=t.endAt?new $e(t.endAt.position,!t.endAt.before):null,i=t.startAt?new $e(t.startAt.position,!t.startAt.before):null;t.D=Ce(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.D}function it(e,t,n){return new Ke(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function st(e,t){return Ae(nt(e),nt(t))&&e.limitType===t.limitType}function rt(e){return`${Oe(nt(e))}|lt:${e.limitType}`}function ot(e){return`Query(target=${Se(nt(e))}; limitType=${e.limitType})`}function at(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ae.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!We(e.startAt,tt(e),t))&&(!e.endAt||!We(e.endAt,tt(e),t))}(e,t)}function ct(e){return(t,n)=>{let i=!1;for(const s of tt(e)){const e=lt(s,t,n);if(0!==e)return e;i=i||s.field.isKeyField()}return 0}}function lt(e,t,n){const i=e.field.isKeyField()?ae.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),s=n.data.field(e);return null!==i&&null!==s?he(i,s):y()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:re(t)?"-0":t}}function ht(e){return{integerValue:""+e}}function dt(e,t){return oe(t)?ht(t):ut(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(){this._=void 0}}function pt(e,t,n){return e instanceof vt?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof yt?bt(e,t):e instanceof _t?wt(e,t):function(e,t){const n=gt(e,t),i=Et(n)+Et(e.N);return ge(n)&&ge(e.N)?ht(i):ut(e.k,i)}(e,t)}function mt(e,t,n){return e instanceof yt?bt(e,t):e instanceof _t?wt(e,t):n}function gt(e,t){return e instanceof kt?ge(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class vt extends ft{}class yt extends ft{constructor(e){super(),this.elements=e}}function bt(e,t){const n=It(t);for(const i of e.elements)n.some(e=>le(e,i))||n.push(i);return{arrayValue:{values:n}}}class _t extends ft{constructor(e){super(),this.elements=e}}function wt(e,t){let n=It(t);for(const i of e.elements)n=n.filter(e=>!le(e,i));return{arrayValue:{values:n}}}class kt extends ft{constructor(e,t){super(),this.k=e,this.N=t}}function Et(e){return Z(e.integerValue||e.doubleValue)}function It(e){return ve(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t){this.field=e,this.transform=t}}function Ct(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof yt&&t instanceof yt||e instanceof _t&&t instanceof _t?j(e.elements,t.elements,le):e instanceof kt&&t instanceof kt?le(e.N,t.N):e instanceof vt&&t instanceof vt}(e.transform,t.transform)}class Ot{constructor(e,t){this.version=e,this.transformResults=t}}class St{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new St}static exists(e){return new St(void 0,e)}static updateTime(e){return new St(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function At(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Dt{}function xt(e,t,n){e instanceof Pt?function(e,t,n){const i=e.value.clone(),s=Ft(e.fieldTransforms,t,n.transformResults);i.setAll(s),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof jt?function(e,t,n){if(!At(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=Ft(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Bt(e)),s.setAll(i),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Mt(e,t,n){e instanceof Pt?function(e,t,n){if(!At(e.precondition,t))return;const i=e.value.clone(),s=Ut(e.fieldTransforms,n,t);i.setAll(s),t.convertToFoundDocument(Nt(t),i).setHasLocalMutations()}(e,t,n):e instanceof jt?function(e,t,n){if(!At(e.precondition,t))return;const i=Ut(e.fieldTransforms,n,t),s=t.data;s.setAll(Bt(e)),s.setAll(i),t.convertToFoundDocument(Nt(t),s).setHasLocalMutations()}(e,t,n):function(e,t){At(e.precondition,t)&&t.convertToNoDocument(U.min())}(e,t)}function Lt(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),s=gt(i.transform,e||null);null!=s&&(null==n&&(n=ke.empty()),n.set(i.field,s))}return n||null}function Rt(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&j(e,t,(e,t)=>Ct(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Nt(e){return e.isFoundDocument()?e.version:U.min()}class Pt extends Dt{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class jt extends Dt{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Bt(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function Ft(e,t,n){const i=new Map;b(e.length===n.length);for(let s=0;s<n.length;s++){const r=e[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,mt(o,a,n[s]))}return i}function Ut(e,t,n){const i=new Map;for(const s of e){const e=s.transform,r=n.data.field(s.field);i.set(s.field,pt(e,r,t))}return i}class $t extends Dt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Vt extends Dt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ht,Wt;function zt(e){switch(e){default:return y();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function Kt(e){if(void 0===e)return m("GRPC error has no .code"),k.UNKNOWN;switch(e){case Ht.OK:return k.OK;case Ht.CANCELLED:return k.CANCELLED;case Ht.UNKNOWN:return k.UNKNOWN;case Ht.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Ht.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Ht.INTERNAL:return k.INTERNAL;case Ht.UNAVAILABLE:return k.UNAVAILABLE;case Ht.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Ht.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Ht.NOT_FOUND:return k.NOT_FOUND;case Ht.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Ht.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Ht.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Ht.ABORTED:return k.ABORTED;case Ht.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Ht.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Ht.DATA_LOSS:return k.DATA_LOSS;default:return y()}}(Wt=Ht||(Ht={}))[Wt.OK=0]="OK",Wt[Wt.CANCELLED=1]="CANCELLED",Wt[Wt.UNKNOWN=2]="UNKNOWN",Wt[Wt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Wt[Wt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Wt[Wt.NOT_FOUND=5]="NOT_FOUND",Wt[Wt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Wt[Wt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Wt[Wt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Wt[Wt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Wt[Wt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Wt[Wt.ABORTED=10]="ABORTED",Wt[Wt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Wt[Wt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Wt[Wt.INTERNAL=13]="INTERNAL",Wt[Wt.UNAVAILABLE=14]="UNAVAILABLE",Wt[Wt.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt{constructor(e,t){this.comparator=e,this.root=t||Yt.EMPTY}insert(e,t){return new Gt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Yt.BLACK,null,null))}remove(e){return new Gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Yt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qt(this.root,e,this.comparator,!0)}}class Qt{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Yt{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Yt.RED,this.left=null!=i?i:Yt.EMPTY,this.right=null!=s?s:Yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new Yt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return Yt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const e=this.left.check();if(e!==this.right.check())throw y();return e+(this.isRed()?0:1)}}Yt.EMPTY=null,Yt.RED=!0,Yt.BLACK=!1,Yt.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(e,t,n,i,s){return this}insert(e,t,n){return new Yt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt{constructor(e){this.comparator=e,this.data=new Gt(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xt(this.data.getIterator())}getIteratorFrom(e){return new Xt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Jt))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Jt(this.comparator);return t.data=e,t}}class Xt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Gt(ae.comparator);function en(){return Zt}const tn=new Gt(ae.comparator);function nn(){return tn}const sn=new Gt(ae.comparator);function rn(){return sn}const on=new Jt(ae.comparator);function an(...e){let t=on;for(const n of e)t=t.add(n);return t}const cn=new Jt(P);function ln(){return cn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,hn.createSynthesizedTargetChangeForCurrentChange(e,t)),new un(U.min(),n,ln(),en(),an())}}class hn{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t){return new hn(Y.EMPTY_BYTE_STRING,t,an(),an(),an())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,n,i){this.$=e,this.removedTargetIds=t,this.key=n,this.F=i}}class fn{constructor(e,t){this.targetId=e,this.O=t}}class pn{constructor(e,t,n=Y.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class mn{constructor(){this.M=0,this.L=yn(),this.B=Y.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=an(),t=an(),n=an();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:y()}}),new hn(this.B,this.U,e,t,n)}H(){this.q=!1,this.L=yn()}J(e,t){this.q=!0,this.L=this.L.insert(e,t)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class gn{constructor(e){this.et=e,this.nt=new Map,this.st=en(),this.it=vn(),this.rt=new Jt(P)}ot(e){for(const t of e.$)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ut(e){this.forEachTarget(e,t=>{const n=this.ht(t);switch(e.state){case 0:this.lt(t)&&n.W(e.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(e.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(t);break;case 3:this.lt(t)&&(n.tt(),n.W(e.resumeToken));break;case 4:this.lt(t)&&(this.ft(t),n.W(e.resumeToken));break;default:y()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.nt.forEach((e,n)=>{this.lt(n)&&t(n)})}dt(e){const t=e.targetId,n=e.O.count,i=this.wt(t);if(i){const e=i.target;if(De(e))if(0===n){const n=new ae(e.path);this.ct(t,n,Ie.newNoDocument(n,U.min()))}else b(1===n);else this._t(t)!==n&&(this.ft(t),this.rt=this.rt.add(t))}}gt(e){const t=new Map;this.nt.forEach((n,i)=>{const s=this.wt(i);if(s){if(n.current&&De(s.target)){const t=new ae(s.target.path);null!==this.st.get(t)||this.yt(i,t)||this.ct(i,t,Ie.newNoDocument(t,e))}n.j&&(t.set(i,n.G()),n.H())}});let n=an();this.it.forEach((e,t)=>{let i=!0;t.forEachWhile(e=>{const t=this.wt(e);return!t||2===t.purpose||(i=!1,!1)}),i&&(n=n.add(e))});const i=new un(e,t,this.rt,this.st,n);return this.st=en(),this.it=vn(),this.rt=new Jt(P),i}at(e,t){if(!this.lt(e))return;const n=this.yt(e,t.key)?2:0;this.ht(e).J(t.key,n),this.st=this.st.insert(t.key,t),this.it=this.it.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.lt(e))return;const i=this.ht(e);this.yt(e,t)?i.J(t,1):i.Y(t),this.it=this.it.insert(t,this.Tt(t).delete(e)),n&&(this.st=this.st.insert(t,n))}removeTarget(e){this.nt.delete(e)}_t(e){const t=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let t=this.nt.get(e);return t||(t=new mn,this.nt.set(e,t)),t}Tt(e){let t=this.it.get(e);return t||(t=new Jt(P),this.it=this.it.insert(e,t)),t}lt(e){const t=null!==this.wt(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.nt.get(e);return t&&t.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new mn),this.et.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}yt(e,t){return this.et.getRemoteKeysForTarget(e).has(t)}}function vn(){return new Gt(ae.comparator)}function yn(){return new Gt(ae.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),_n=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class wn{constructor(e,t){this.databaseId=e,this.C=t}}function kn(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function En(e,t){return e.C?t.toBase64():t.toUint8Array()}function In(e,t){return kn(e,t.toTimestamp())}function Tn(e){return b(!!e),U.fromTimestamp(function(e){const t=X(e);return new F(t.seconds,t.nanos)}(e))}function Cn(e,t){return function(e){return new W(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function On(e){const t=W.fromString(e);return b(ti(t)),t}function Sn(e,t){return Cn(e.databaseId,t.path)}function An(e,t){const n=On(t);if(n.get(1)!==e.databaseId.projectId)throw new E(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ae(Ln(n))}function Dn(e,t){return Cn(e.databaseId,t)}function xn(e){const t=On(e);return 4===t.length?W.emptyPath():Ln(t)}function Mn(e){return new W(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ln(e){return b(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Rn(e,t,n){return{name:Sn(e,t),fields:n.value.mapValue.fields}}function Nn(e,t,n){const i=An(e,t.name),s=Tn(t.updateTime),r=new ke({mapValue:{fields:t.fields}}),o=Ie.newFoundDocument(i,s,r);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Pn(e,t){return"found"in t?function(e,t){b(!!t.found),t.found.name,t.found.updateTime;const n=An(e,t.found.name),i=Tn(t.found.updateTime),s=new ke({mapValue:{fields:t.found.fields}});return Ie.newFoundDocument(n,i,s)}(e,t):"missing"in t?function(e,t){b(!!t.missing),b(!!t.readTime);const n=An(e,t.missing),i=Tn(t.readTime);return Ie.newNoDocument(n,i)}(e,t):y()}function jn(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:y()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=function(e,t){return e.C?(b(void 0===t||"string"==typeof t),Y.fromBase64String(t||"")):(b(void 0===t||t instanceof Uint8Array),Y.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?k.UNKNOWN:Kt(e.code);return new E(t,e.message||"")}(o);n=new pn(i,s,r,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=An(e,i.document.name),r=Tn(i.document.updateTime),o=new ke({mapValue:{fields:i.document.fields}}),a=Ie.newFoundDocument(s,r,o),c=i.targetIds||[],l=i.removedTargetIds||[];n=new dn(c,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=An(e,i.document),r=i.readTime?Tn(i.readTime):U.min(),o=Ie.newNoDocument(s,r),a=i.removedTargetIds||[];n=new dn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=An(e,i.document),r=i.removedTargetIds||[];n=new dn([],r,s,null)}else{if(!("filter"in t))return y();{t.filter;const e=t.filter;e.targetId;const i=e.count||0,s=new qt(i),r=e.targetId;n=new fn(r,s)}}return n}function Bn(e,t){let n;if(t instanceof Pt)n={update:Rn(e,t.key,t.value)};else if(t instanceof $t)n={delete:Sn(e,t.key)};else if(t instanceof jt)n={update:Rn(e,t.key,t.data),updateMask:ei(t.fieldMask)};else{if(!(t instanceof Vt))return y();n={verify:Sn(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof vt)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof yt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof _t)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof kt)return{fieldPath:t.field.canonicalString(),increment:n.N};throw y()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:In(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:y()}(e,t.precondition)),n}function Fn(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?St.updateTime(Tn(e.updateTime)):void 0!==e.exists?St.exists(e.exists):St.none()}(t.currentDocument):St.none(),i=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)b("REQUEST_TIME"===t.setToServerValue),n=new vt;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new yt(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new _t(e)}else"increment"in t?n=new kt(e,t.increment):y();const i=K.fromServerFormat(t.fieldPath);return new Tt(i,n)}(e,t)):[];if(t.update){t.update.name;const s=An(e,t.update.name),r=new ke({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new G(t.map(e=>K.fromServerFormat(e)))}(t.updateMask);return new jt(s,r,e,n,i)}return new Pt(s,r,n,i)}if(t.delete){const i=An(e,t.delete);return new $t(i,n)}if(t.verify){const i=An(e,t.verify);return new Vt(i,n)}return y()}function Un(e,t){return e&&e.length>0?(b(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?Tn(e.updateTime):Tn(t);return n.isEqual(U.min())&&(n=Tn(t)),new Ot(n,e.transformResults||[])}(e,t))):[]}function $n(e,t){return{documents:[Dn(e,t.path)]}}function Vn(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=Dn(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Dn(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(e){if(0===e.length)return;const t=e.map(e=>function(e){if("=="===e.op){if(be(e.value))return{unaryFilter:{field:Yn(e.field),op:"IS_NAN"}};if(ye(e.value))return{unaryFilter:{field:Yn(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(be(e.value))return{unaryFilter:{field:Yn(e.field),op:"IS_NOT_NAN"}};if(ye(e.value))return{unaryFilter:{field:Yn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yn(e.field),op:Qn(e.op),value:e.value}}}(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);s&&(n.structuredQuery.where=s);const r=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Yn(e.field),direction:Gn(e.dir)}}(e))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(e,t){return e.C||se(t)?t:{value:t}}(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=zn(t.startAt)),t.endAt&&(n.structuredQuery.endAt=zn(t.endAt)),n}function qn(e){let t=xn(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){b(1===i);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let r=[];n.where&&(r=Wn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>function(e){return new qe(Jn(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,se(t)?null:t}(n.limit));let c=null;n.startAt&&(c=Kn(n.startAt));let l=null;return n.endAt&&(l=Kn(n.endAt)),Ge(t,s,o,r,a,"F",c,l)}function Hn(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Wn(e){return e?void 0!==e.unaryFilter?[Zn(e)]:void 0!==e.fieldFilter?[Xn(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>Wn(e)).reduce((e,t)=>e.concat(t)):y():[]}function zn(e){return{before:e.before,values:e.position}}function Kn(e){const t=!!e.before,n=e.values||[];return new $e(n,t)}function Gn(e){return bn[e]}function Qn(e){return _n[e]}function Yn(e){return{fieldPath:e.canonicalString()}}function Jn(e){return K.fromServerFormat(e.fieldPath)}function Xn(e){return xe.create(Jn(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(e.fieldFilter.op),e.fieldFilter.value)}function Zn(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Jn(e.unaryFilter.field);return xe.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Jn(e.unaryFilter.field);return xe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jn(e.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Jn(e.unaryFilter.field);return xe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function ei(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ti(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=si(t)),t=ii(e.get(n),t);return si(t)}function ii(e,t){let n=t;const i=e.length;for(let s=0;s<i;s++){const t=e.charAt(s);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function si(e){return e+""}function ri(e){const t=e.length;if(b(t>=2),2===t)return b(""===e.charAt(0)&&""===e.charAt(1)),W.emptyPath();const n=t-2,i=[];let s="";for(let r=0;r<t;){const t=e.indexOf("",r);switch((t<0||t>n)&&y(),e.charAt(t+1)){case"":const n=e.substring(r,t);let o;0===s.length?o=n:(s+=n,o=s,s=""),i.push(o);break;case"":s+=e.substring(r,t),s+="\0";break;case"":s+=e.substring(r,t+1);break;default:y()}r=t+2}return new W(i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t){this.seconds=e,this.nanoseconds=t}}class ai{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}ai.store="owner",ai.key="owner";class ci{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}ci.store="mutationQueues",ci.keyPath="userId";class li{constructor(e,t,n,i,s){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=i,this.mutations=s}}li.store="mutations",li.keyPath="batchId",li.userMutationsIndex="userMutationsIndex",li.userMutationsKeyPath=["userId","batchId"];class ui{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,ni(t)]}static key(e,t,n){return[e,ni(t),n]}}ui.store="documentMutations",ui.PLACEHOLDER=new ui;class hi{constructor(e,t){this.path=e,this.readTime=t}}class di{constructor(e,t){this.path=e,this.version=t}}class fi{constructor(e,t,n,i,s,r){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=i,this.readTime=s,this.parentPath=r}}fi.store="remoteDocuments",fi.readTimeIndex="readTimeIndex",fi.readTimeIndexPath="readTime",fi.collectionReadTimeIndex="collectionReadTimeIndex",fi.collectionReadTimeIndexPath=["parentPath","readTime"];class pi{constructor(e){this.byteSize=e}}pi.store="remoteDocumentGlobal",pi.key="remoteDocumentGlobalKey";class mi{constructor(e,t,n,i,s,r,o){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=i,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=r,this.query=o}}mi.store="targets",mi.keyPath="targetId",mi.queryTargetsIndexName="queryTargetsIndex",mi.queryTargetsKeyPath=["canonicalId","targetId"];class gi{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}gi.store="targetDocuments",gi.keyPath=["targetId","path"],gi.documentTargetsIndex="documentTargetsIndex",gi.documentTargetsKeyPath=["path","targetId"];class vi{constructor(e,t,n,i){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=i}}vi.key="targetGlobalKey",vi.store="targetGlobal";class yi{constructor(e,t){this.collectionId=e,this.parent=t}}yi.store="collectionParents",yi.keyPath=["collectionId","parent"];class bi{constructor(e,t,n,i){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=i}}bi.store="clientMetadata",bi.keyPath="clientId";class _i{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}_i.store="bundles",_i.keyPath="bundleId";class wi{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}wi.store="namedQueries",wi.keyPath="name";const ki=[ci.store,li.store,ui.store,fi.store,mi.store,ai.store,vi.store,gi.store,bi.store,pi.store,yi.store,_i.store,wi.store],Ei="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ii{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ti((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Ti?t:Ti.resolve(t)}catch(e){return Ti.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Ti.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Ti.reject(t)}static resolve(e){return new Ti((t,n)=>{t(e)})}static reject(e){return new Ti((t,n)=>{n(e)})}static waitFor(e){return new Ti((t,n)=>{let i=0,s=0,r=!1;e.forEach(e=>{++i,e.next(()=>{++s,r&&s===i&&t()},e=>n(e))}),r=!0,s===i&&t()})}static or(e){let t=Ti.resolve(!1);for(const n of e)t=t.next(e=>e?Ti.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,i)=>{n.push(t.call(this,e,i))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.It=new I,this.transaction.oncomplete=()=>{this.It.resolve()},this.transaction.onabort=()=>{t.error?this.It.reject(new Ai(e,t.error)):this.It.resolve()},this.transaction.onerror=t=>{const n=Ri(t.target.error);this.It.reject(new Ai(e,n))}}static open(e,t,n,i){try{return new Ci(t,e.transaction(i,n))}catch(e){throw new Ai(t,e)}}get At(){return this.It.promise}abort(e){e&&this.It.reject(e),this.aborted||(p("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const t=this.transaction.objectStore(e);return new xi(t)}}class Oi{constructor(e,t,n){this.name=e,this.version=t,this.Rt=n,12.2===Oi.Pt(Object(o["l"])())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return p("SimpleDb","Removing database:",e),Mi(window.indexedDB.deleteDatabase(e)).toPromise()}static bt(){if(!Object(o["r"])())return!1;if(Oi.vt())return!0;const e=Object(o["l"])(),t=Oi.Pt(e),n=0<t&&t<10,i=Oi.Vt(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static vt(){var t;return"undefined"!=typeof e&&"YES"===(null===(t=Object({NODE_ENV:"production",BASE_URL:"/Smoothie/dist/"}))||void 0===t?void 0:t.St)}static Dt(e,t){return e.store(t)}static Pt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Vt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Ct(e){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=e=>{const n=e.target.result;t(n)},i.onblocked=()=>{n(new Ai(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=t=>{const i=t.target.error;"VersionError"===i.name?n(new E(k.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===i.name?n(new E(k.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):n(new Ai(e,i))},i.onupgradeneeded=e=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.Rt.Nt(t,i.transaction,e.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.kt&&(this.db.onversionchange=e=>this.kt(e)),this.db}xt(e){this.kt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const s="readonly"===t;let r=0;for(;;){++r;try{this.db=await this.Ct(e);const t=Ci.open(this.db,e,s?"readonly":"readwrite",n),r=i(t).catch(e=>(t.abort(e),Ti.reject(e))).toPromise();return r.catch(()=>{}),await t.At,r}catch(e){const t="FirebaseError"!==e.name&&r<3;if(p("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Si{constructor(e){this.$t=e,this.Ft=!1,this.Ot=null}get isDone(){return this.Ft}get Mt(){return this.Ot}set cursor(e){this.$t=e}done(){this.Ft=!0}Lt(e){this.Ot=e}delete(){return Mi(this.$t.delete())}}class Ai extends E{constructor(e,t){super(k.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Di(e){return"IndexedDbTransactionError"===e.name}class xi{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(p("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Mi(n)}add(e){return p("SimpleDb","ADD",this.store.name,e,e),Mi(this.store.add(e))}get(e){return Mi(this.store.get(e)).next(t=>(void 0===t&&(t=null),p("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return p("SimpleDb","DELETE",this.store.name,e),Mi(this.store.delete(e))}count(){return p("SimpleDb","COUNT",this.store.name),Mi(this.store.count())}Bt(e,t){const n=this.cursor(this.options(e,t)),i=[];return this.Ut(n,(e,t)=>{i.push(t)}).next(()=>i)}qt(e,t){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Kt=!1;const i=this.cursor(n);return this.Ut(i,(e,t,n)=>n.delete())}jt(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.Ut(i,t)}Qt(e){const t=this.cursor({});return new Ti((n,i)=>{t.onerror=e=>{const t=Ri(e.target.error);i(t)},t.onsuccess=t=>{const i=t.target.result;i?e(i.primaryKey,i.value).next(e=>{e?i.continue():n()}):n()}})}Ut(e,t){const n=[];return new Ti((i,s)=>{e.onerror=e=>{s(e.target.error)},e.onsuccess=e=>{const s=e.target.result;if(!s)return void i();const r=new Si(s),o=t(s.primaryKey,s.value,r);if(o instanceof Ti){const e=o.catch(e=>(r.done(),Ti.reject(e)));n.push(e)}r.isDone?i():null===r.Mt?s.continue():s.continue(r.Mt)}}).next(()=>Ti.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Kt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Mi(e){return new Ti((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Ri(e.target.error);n(t)}})}let Li=!1;function Ri(e){const t=Oi.Pt(Object(o["l"])());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new E("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Li||(Li=!0,setTimeout(()=>{throw e},0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Ii{constructor(e,t){super(),this.Wt=e,this.currentSequenceNumber=t}}function Pi(e,t){const n=w(e);return Oi.Dt(n.Wt,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const t=this.mutations[i];t.key.isEqual(e.key)&&xt(t,e,n[i])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Mt(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Mt(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const n=e.get(t.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(U.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),an())}isEqual(e){return this.batchId===e.batchId&&j(this.mutations,e.mutations,(e,t)=>Rt(e,t))&&j(this.baseMutations,e.baseMutations,(e,t)=>Rt(e,t))}}class Bi{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){b(e.mutations.length===n.length);let i=rn();const s=e.mutations;for(let r=0;r<s.length;r++)i=i.insert(s[r].key,n[r].version);return new Bi(e,t,n,i)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t,n,i,s=U.min(),r=U.min(),o=Y.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(e){return new Fi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Fi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.Gt=e}}function $i(e,t){if(t.document)return Nn(e.Gt,t.document,!!t.hasCommittedMutations);if(t.noDocument){const e=ae.fromSegments(t.noDocument.path),n=zi(t.noDocument.readTime),i=Ie.newNoDocument(e,n);return t.hasCommittedMutations?i.setHasCommittedMutations():i}if(t.unknownDocument){const e=ae.fromSegments(t.unknownDocument.path),n=zi(t.unknownDocument.version);return Ie.newUnknownDocument(e,n)}return y()}function Vi(e,t,n){const i=qi(n),s=t.key.path.popLast().toArray();if(t.isFoundDocument()){const n=function(e,t){return{name:Sn(e,t.key),fields:t.data.value.mapValue.fields,updateTime:kn(e,t.version.toTimestamp())}}(e.Gt,t),r=t.hasCommittedMutations;return new fi(null,null,n,r,i,s)}if(t.isNoDocument()){const e=t.key.path.toArray(),n=Wi(t.version),r=t.hasCommittedMutations;return new fi(null,new hi(e,n),null,r,i,s)}if(t.isUnknownDocument()){const e=t.key.path.toArray(),n=Wi(t.version);return new fi(new di(e,n),null,null,!0,i,s)}return y()}function qi(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Hi(e){const t=new F(e[0],e[1]);return U.fromTimestamp(t)}function Wi(e){const t=e.toTimestamp();return new oi(t.seconds,t.nanoseconds)}function zi(e){const t=new F(e.seconds,e.nanoseconds);return U.fromTimestamp(t)}function Ki(e,t){const n=(t.baseMutations||[]).map(t=>Fn(e.Gt,t));for(let r=0;r<t.mutations.length-1;++r){const e=t.mutations[r];if(r+1<t.mutations.length&&void 0!==t.mutations[r+1].transform){const n=t.mutations[r+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(r+1,1),++r}}const i=t.mutations.map(t=>Fn(e.Gt,t)),s=F.fromMillis(t.localWriteTimeMs);return new ji(t.batchId,s,n,i)}function Gi(e){const t=zi(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?zi(e.lastLimboFreeSnapshotVersion):U.min();let i;var s;return void 0!==e.query.documents?(b(1===(s=e.query).documents.length),i=nt(Qe(xn(s.documents[0])))):i=function(e){return nt(qn(e))}(e.query),new Fi(i,e.targetId,0,e.lastListenSequenceNumber,t,n,Y.fromBase64String(e.resumeToken))}function Qi(e,t){const n=Wi(t.snapshotVersion),i=Wi(t.lastLimboFreeSnapshotVersion);let s;s=De(t.target)?$n(e.Gt,t.target):Vn(e.Gt,t.target);const r=t.resumeToken.toBase64();return new mi(t.targetId,Oe(t.target),n,r,t.sequenceNumber,i,s)}function Yi(e){const t=qn({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?it(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{getBundleMetadata(e,t){return Xi(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:zi(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return Xi(e).put({bundleId:(n=t).id,createTime:Wi(Tn(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Zi(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:Yi(t.bundledQuery),readTime:zi(t.readTime)};var t})}saveNamedQuery(e,t){return Zi(e).put(function(e){return{name:e.name,readTime:Wi(Tn(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Xi(e){return Pi(e,_i.store)}function Zi(e){return Pi(e,wi.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.zt=new ts}addToCollectionParentIndex(e,t){return this.zt.add(t),Ti.resolve()}getCollectionParents(e,t){return Ti.resolve(this.zt.getEntries(t))}}class ts{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new Jt(W.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Jt(W.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.Ht=new ts}addToCollectionParentIndex(e,t){if(!this.Ht.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.Ht.add(t)});const s={collectionId:n,parent:ni(i)};return is(e).put(s)}return Ti.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[B(t),""],!1,!0);return is(e).Bt(i).next(e=>{for(const i of e){if(i.collectionId!==t)break;n.push(ri(i.parent))}return n})}}function is(e){return Pi(e,yi.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class rs{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new rs(e,rs.DEFAULT_COLLECTION_PERCENTILE,rs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(e,t,n){const i=e.store(li.store),s=e.store(ui.store),r=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=i.jt({range:o},(e,t,n)=>(a++,n.delete()));r.push(c.next(()=>{b(1===a)}));const l=[];for(const u of n.mutations){const e=ui.key(t,u.key.path,n.batchId);r.push(s.delete(e)),l.push(u.key)}return Ti.waitFor(r).next(()=>l)}function as(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw y();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rs.DEFAULT_COLLECTION_PERCENTILE=10,rs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rs.DEFAULT=new rs(41943040,rs.DEFAULT_COLLECTION_PERCENTILE,rs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rs.DISABLED=new rs(-1,0,0);class cs{constructor(e,t,n,i){this.userId=e,this.k=t,this.Jt=n,this.referenceDelegate=i,this.Yt={}}static Xt(e,t,n,i){b(""!==e.uid);const s=e.isAuthenticated()?e.uid:"";return new cs(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return us(e).jt({index:li.userMutationsIndex,range:n},(e,n,i)=>{t=!1,i.done()}).next(()=>t)}addMutationBatch(e,t,n,i){const s=hs(e),r=us(e);return r.add({}).next(o=>{b("number"==typeof o);const a=new ji(o,t,n,i),c=function(e,t,n){const i=n.baseMutations.map(t=>Bn(e.Gt,t)),s=n.mutations.map(t=>Bn(e.Gt,t));return new li(t,n.batchId,n.localWriteTime.toMillis(),i,s)}(this.k,this.userId,a),l=[];let u=new Jt((e,t)=>P(e.canonicalString(),t.canonicalString()));for(const e of i){const t=ui.key(this.userId,e.key.path,o);u=u.add(e.key.path.popLast()),l.push(r.put(c)),l.push(s.put(t,ui.PLACEHOLDER))}return u.forEach(t=>{l.push(this.Jt.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Yt[o]=a.keys()}),Ti.waitFor(l).next(()=>a)})}lookupMutationBatch(e,t){return us(e).get(t).next(e=>e?(b(e.userId===this.userId),Ki(this.k,e)):null)}Zt(e,t){return this.Yt[t]?Ti.resolve(this.Yt[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.Yt[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return us(e).jt({index:li.userMutationsIndex,range:i},(e,t,i)=>{t.userId===this.userId&&(b(t.batchId>=n),s=Ki(this.k,t)),i.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return us(e).jt({index:li.userMutationsIndex,range:t,reverse:!0},(e,t,i)=>{n=t.batchId,i.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return us(e).Bt(li.userMutationsIndex,t).next(e=>e.map(e=>Ki(this.k,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ui.prefixForPath(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return hs(e).jt({range:i},(n,i,r)=>{const[o,a,c]=n,l=ri(a);if(o===this.userId&&t.path.isEqual(l))return us(e).get(c).next(e=>{if(!e)throw y();b(e.userId===this.userId),s.push(Ki(this.k,e))});r.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Jt(P);const i=[];return t.forEach(t=>{const s=ui.prefixForPath(this.userId,t.path),r=IDBKeyRange.lowerBound(s),o=hs(e).jt({range:r},(e,i,s)=>{const[r,o,a]=e,c=ri(o);r===this.userId&&t.path.isEqual(c)?n=n.add(a):s.done()});i.push(o)}),Ti.waitFor(i).next(()=>this.te(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=ui.prefixForPath(this.userId,n),r=IDBKeyRange.lowerBound(s);let o=new Jt(P);return hs(e).jt({range:r},(e,t,s)=>{const[r,a,c]=e,l=ri(a);r===this.userId&&n.isPrefixOf(l)?l.length===i&&(o=o.add(c)):s.done()}).next(()=>this.te(e,o))}te(e,t){const n=[],i=[];return t.forEach(t=>{i.push(us(e).get(t).next(e=>{if(null===e)throw y();b(e.userId===this.userId),n.push(Ki(this.k,e))}))}),Ti.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return os(e.Wt,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.ee(t.batchId)}),Ti.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}ee(e){delete this.Yt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return Ti.resolve();const n=IDBKeyRange.lowerBound(ui.prefixForUser(this.userId)),i=[];return hs(e).jt({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=ri(e[1]);i.push(t)}else n.done()}).next(()=>{b(0===i.length)})})}containsKey(e,t){return ls(e,this.userId,t)}ne(e){return ds(e).get(this.userId).next(e=>e||new ci(this.userId,-1,""))}}function ls(e,t,n){const i=ui.prefixForPath(t,n.path),s=i[1],r=IDBKeyRange.lowerBound(i);let o=!1;return hs(e).jt({range:r,Kt:!0},(e,n,i)=>{const[r,a,c]=e;r===t&&a===s&&(o=!0),i.done()}).next(()=>o)}function us(e){return Pi(e,li.store)}function hs(e){return Pi(e,ui.store)}function ds(e){return Pi(e,ci.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new fs(0)}static re(){return new fs(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t){this.referenceDelegate=e,this.k=t}allocateTargetId(e){return this.oe(e).next(t=>{const n=new fs(t.highestTargetId);return t.highestTargetId=n.next(),this.ae(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.oe(e).next(e=>U.fromTimestamp(new F(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.oe(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.oe(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.ae(e,i)))}addTargetData(e,t){return this.ce(e,t).next(()=>this.oe(e).next(n=>(n.targetCount+=1,this.ue(t,n),this.ae(e,n))))}updateTargetData(e,t){return this.ce(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ms(e).delete(t.targetId)).next(()=>this.oe(e)).next(t=>(b(t.targetCount>0),t.targetCount-=1,this.ae(e,t)))}removeTargets(e,t,n){let i=0;const s=[];return ms(e).jt((r,o)=>{const a=Gi(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(i++,s.push(this.removeTargetData(e,a)))}).next(()=>Ti.waitFor(s)).next(()=>i)}forEachTarget(e,t){return ms(e).jt((e,n)=>{const i=Gi(n);t(i)})}oe(e){return gs(e).get(vi.key).next(e=>(b(null!==e),e))}ae(e,t){return gs(e).put(vi.key,t)}ce(e,t){return ms(e).put(Qi(this.k,t))}ue(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.oe(e).next(e=>e.targetCount)}getTargetData(e,t){const n=Oe(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return ms(e).jt({range:i,index:mi.queryTargetsIndexName},(e,n,i)=>{const r=Gi(n);Ae(t,r.target)&&(s=r,i.done())}).next(()=>s)}addMatchingKeys(e,t,n){const i=[],s=vs(e);return t.forEach(t=>{const r=ni(t.path);i.push(s.put(new gi(n,r))),i.push(this.referenceDelegate.addReference(e,n,t))}),Ti.waitFor(i)}removeMatchingKeys(e,t,n){const i=vs(e);return Ti.forEach(t,t=>{const s=ni(t.path);return Ti.waitFor([i.delete([n,s]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=vs(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=vs(e);let s=an();return i.jt({range:n,Kt:!0},(e,t,n)=>{const i=ri(e[1]),r=new ae(i);s=s.add(r)}).next(()=>s)}containsKey(e,t){const n=ni(t.path),i=IDBKeyRange.bound([n],[B(n)],!1,!0);let s=0;return vs(e).jt({index:gi.documentTargetsIndex,Kt:!0,range:i},([e,t],n,i)=>{0!==e&&(s++,i.done())}).next(()=>s>0)}Et(e,t){return ms(e).get(t).next(e=>e?Gi(e):null)}}function ms(e){return Pi(e,mi.store)}function gs(e){return Pi(e,vi.store)}function vs(e){return Pi(e,gi.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(e){if(e.code!==k.FAILED_PRECONDITION||e.message!==Ei)throw e;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs([e,t],[n,i]){const s=P(e,n);return 0===s?P(t,i):s}class _s{constructor(e){this.he=e,this.buffer=new Jt(bs),this.le=0}fe(){return++this.le}de(e){const t=[e,this.fe()];if(this.buffer.size<this.he)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();bs(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ws{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.we=!1,this._e=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.me(e)}stop(){this._e&&(this._e.cancel(),this._e=null)}get started(){return null!==this._e}me(e){const t=this.we?3e5:6e4;p("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this._e=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this._e=null,this.we=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){Di(e)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await ys(e)}await this.me(e)})}}class ks{constructor(e,t){this.ge=e,this.params=t}calculateTargetCount(e,t){return this.ge.ye(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Ti.resolve(L.I);const n=new _s(t);return this.ge.forEachTarget(e,e=>n.de(e.sequenceNumber)).next(()=>this.ge.pe(e,e=>n.de(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.ge.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.ge.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),Ti.resolve(ss)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ss):this.Te(e,t))}getCacheSize(e){return this.ge.getCacheSize(e)}Te(e,t){let n,i,s,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),i=this.params.maximumSequenceNumbersToCollect):i=t,o=Date.now(),this.nthSequenceNumber(e,i))).next(i=>(n=i,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(s=t,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),d()<=r["a"].DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-u}ms\n\tDetermined least recently used ${i} in `+(a-o)+"ms\n"+`\tRemoved ${s} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(l-c)+"ms\n"+`Total Duration: ${l-u}ms`),Ti.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:e})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new ks(e,t)}(this,t)}ye(e){const t=this.Ee(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Ee(e){let t=0;return this.pe(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pe(e,t){return this.Ie(e,(e,n)=>t(n))}addReference(e,t,n){return Is(e,n)}removeReference(e,t,n){return Is(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Is(e,t)}Ae(e,t){return function(e,t){let n=!1;return ds(e).Qt(i=>ls(e,i,t).next(e=>(e&&(n=!0),Ti.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Ie(e,(r,o)=>{if(o<=t){const t=this.Ae(e,r).next(t=>{if(!t)return s++,n.getEntry(e,r).next(()=>(n.removeEntry(r),vs(e).delete([0,ni(r.path)])))});i.push(t)}}).next(()=>Ti.waitFor(i)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Is(e,t)}Ie(e,t){const n=vs(e);let i,s=L.I;return n.jt({index:gi.documentTargetsIndex},([e,n],{path:r,sequenceNumber:o})=>{0===e?(s!==L.I&&t(new ae(ri(i)),s),s=o,i=r):s=L.I}).next(()=>{s!==L.I&&t(new ae(ri(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Is(e,t){return vs(e).put(function(e,t){return new gi(0,ni(e.path),t)}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[i,s]of n)if(this.equalsFn(i,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0!==i){for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),!0;return!1}forEach(e){V(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return q(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.changes=new Ts(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:U.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:Ie.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ti.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t){this.k=e,this.Jt=t}addEntry(e,t,n){return Ds(e).put(xs(t),n)}removeEntry(e,t){const n=Ds(e),i=xs(t);return n.delete(i)}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Re(e,n)))}getEntry(e,t){return Ds(e).get(xs(t)).next(e=>this.Pe(t,e))}be(e,t){return Ds(e).get(xs(t)).next(e=>({document:this.Pe(t,e),size:as(e)}))}getEntries(e,t){let n=en();return this.ve(e,t,(e,t)=>{const i=this.Pe(e,t);n=n.insert(e,i)}).next(()=>n)}Ve(e,t){let n=en(),i=new Gt(ae.comparator);return this.ve(e,t,(e,t)=>{const s=this.Pe(e,t);n=n.insert(e,s),i=i.insert(e,as(t))}).next(()=>({documents:n,Se:i}))}ve(e,t,n){if(t.isEmpty())return Ti.resolve();const i=IDBKeyRange.bound(t.first().path.toArray(),t.last().path.toArray()),s=t.getIterator();let r=s.getNext();return Ds(e).jt({range:i},(e,t,i)=>{const o=ae.fromSegments(e);for(;r&&ae.comparator(r,o)<0;)n(r,null),r=s.getNext();r&&r.isEqual(o)&&(n(r,t),r=s.hasNext()?s.getNext():null),r?i.Lt(r.path.toArray()):i.done()}).next(()=>{for(;r;)n(r,null),r=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,n){let i=en();const s=t.path.length+1,r={};if(n.isEqual(U.min())){const e=t.path.toArray();r.range=IDBKeyRange.lowerBound(e)}else{const e=t.path.toArray(),i=qi(n);r.range=IDBKeyRange.lowerBound([e,i],!0),r.index=fi.collectionReadTimeIndex}return Ds(e).jt(r,(e,n,r)=>{if(e.length!==s)return;const o=$i(this.k,n);t.path.isPrefixOf(o.key.path)?at(t,o)&&(i=i.insert(o.key,o)):r.done()}).next(()=>i)}newChangeBuffer(e){return new Ss(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return As(e).get(pi.key).next(e=>(b(!!e),e))}Re(e,t){return As(e).put(pi.key,t)}Pe(e,t){if(t){const e=$i(this.k,t);if(!e.isNoDocument()||!e.version.isEqual(U.min()))return e}return Ie.newInvalidDocument(e)}}class Ss extends Cs{constructor(e,t){super(),this.De=e,this.trackRemovals=t,this.Ce=new Ts(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,i=new Jt((e,t)=>P(e.canonicalString(),t.canonicalString()));return this.changes.forEach((s,r)=>{const o=this.Ce.get(s);if(r.document.isValidDocument()){const a=Vi(this.De.k,r.document,this.getReadTime(s));i=i.add(s.path.popLast());const c=as(a);n+=c-o,t.push(this.De.addEntry(e,s,a))}else if(n-=o,this.trackRemovals){const n=Vi(this.De.k,Ie.newNoDocument(s,U.min()),this.getReadTime(s));t.push(this.De.addEntry(e,s,n))}else t.push(this.De.removeEntry(e,s))}),i.forEach(n=>{t.push(this.De.Jt.addToCollectionParentIndex(e,n))}),t.push(this.De.updateMetadata(e,n)),Ti.waitFor(t)}getFromCache(e,t){return this.De.be(e,t).next(e=>(this.Ce.set(t,e.size),e.document))}getAllFromCache(e,t){return this.De.Ve(e,t).next(({documents:e,Se:t})=>(t.forEach((e,t)=>{this.Ce.set(e,t)}),e))}}function As(e){return Pi(e,pi.store)}function Ds(e){return Pi(e,fi.store)}function xs(e){return e.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this.k=e}Nt(e,t,n,i){b(n<i&&n>=0&&i<=11);const s=new Ci("createOrUpgrade",t);n<1&&i>=1&&(function(e){e.createObjectStore(ai.store)}(e),function(e){e.createObjectStore(ci.store,{keyPath:ci.keyPath}),e.createObjectStore(li.store,{keyPath:li.keyPath,autoIncrement:!0}).createIndex(li.userMutationsIndex,li.userMutationsKeyPath,{unique:!0}),e.createObjectStore(ui.store)}(e),Ls(e),function(e){e.createObjectStore(fi.store)}(e));let r=Ti.resolve();return n<3&&i>=3&&(0!==n&&(function(e){e.deleteObjectStore(gi.store),e.deleteObjectStore(mi.store),e.deleteObjectStore(vi.store)}(e),Ls(e)),r=r.next(()=>function(e){const t=e.store(vi.store),n=new vi(0,0,U.min().toTimestamp(),0);return t.put(vi.key,n)}(s))),n<4&&i>=4&&(0!==n&&(r=r.next(()=>function(e,t){return t.store(li.store).Bt().next(n=>{e.deleteObjectStore(li.store),e.createObjectStore(li.store,{keyPath:li.keyPath,autoIncrement:!0}).createIndex(li.userMutationsIndex,li.userMutationsKeyPath,{unique:!0});const i=t.store(li.store),s=n.map(e=>i.put(e));return Ti.waitFor(s)})}(e,s))),r=r.next(()=>{!function(e){e.createObjectStore(bi.store,{keyPath:bi.keyPath})}(e)})),n<5&&i>=5&&(r=r.next(()=>this.Ne(s))),n<6&&i>=6&&(r=r.next(()=>(function(e){e.createObjectStore(pi.store)}(e),this.ke(s)))),n<7&&i>=7&&(r=r.next(()=>this.xe(s))),n<8&&i>=8&&(r=r.next(()=>this.$e(e,s))),n<9&&i>=9&&(r=r.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e),function(e){const t=e.objectStore(fi.store);t.createIndex(fi.readTimeIndex,fi.readTimeIndexPath,{unique:!1}),t.createIndex(fi.collectionReadTimeIndex,fi.collectionReadTimeIndexPath,{unique:!1})}(t)})),n<10&&i>=10&&(r=r.next(()=>this.Fe(s))),n<11&&i>=11&&(r=r.next(()=>{!function(e){e.createObjectStore(_i.store,{keyPath:_i.keyPath})}(e),function(e){e.createObjectStore(wi.store,{keyPath:wi.keyPath})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)})),r}ke(e){let t=0;return e.store(fi.store).jt((e,n)=>{t+=as(n)}).next(()=>{const n=new pi(t);return e.store(pi.store).put(pi.key,n)})}Ne(e){const t=e.store(ci.store),n=e.store(li.store);return t.Bt().next(t=>Ti.forEach(t,t=>{const i=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.Bt(li.userMutationsIndex,i).next(n=>Ti.forEach(n,n=>{b(n.userId===t.userId);const i=Ki(this.k,n);return os(e,t.userId,i).next(()=>{})}))}))}xe(e){const t=e.store(gi.store),n=e.store(fi.store);return e.store(vi.store).get(vi.key).next(e=>{const i=[];return n.jt((n,s)=>{const r=new W(n),o=function(e){return[0,ni(e)]}(r);i.push(t.get(o).next(n=>n?Ti.resolve():(n=>t.put(new gi(0,ni(n),e.highestListenSequenceNumber)))(r)))}).next(()=>Ti.waitFor(i))})}$e(e,t){e.createObjectStore(yi.store,{keyPath:yi.keyPath});const n=t.store(yi.store),i=new ts,s=e=>{if(i.add(e)){const t=e.lastSegment(),i=e.popLast();return n.put({collectionId:t,parent:ni(i)})}};return t.store(fi.store).jt({Kt:!0},(e,t)=>{const n=new W(e);return s(n.popLast())}).next(()=>t.store(ui.store).jt({Kt:!0},([e,t,n],i)=>{const r=ri(t);return s(r.popLast())}))}Fe(e){const t=e.store(mi.store);return t.jt((e,n)=>{const i=Gi(n),s=Qi(this.k,i);return t.put(s)})}}function Ls(e){e.createObjectStore(gi.store,{keyPath:gi.keyPath}).createIndex(gi.documentTargetsIndex,gi.documentTargetsKeyPath,{unique:!0}),e.createObjectStore(mi.store,{keyPath:mi.keyPath}).createIndex(mi.queryTargetsIndexName,mi.queryTargetsKeyPath,{unique:!0}),e.createObjectStore(vi.store)}const Rs="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ns{constructor(e,t,n,i,s,r,o,a,c,l){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Oe=s,this.window=r,this.document=o,this.Me=c,this.Le=l,this.Be=null,this.Ue=!1,this.isPrimary=!1,this.networkEnabled=!0,this.qe=null,this.inForeground=!1,this.Ke=null,this.je=null,this.Qe=Number.NEGATIVE_INFINITY,this.We=e=>Promise.resolve(),!Ns.bt())throw new E(k.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Es(this,i),this.Ge=t+"main",this.k=new Ui(a),this.ze=new Oi(this.Ge,11,new Ms(this.k)),this.He=new ps(this.referenceDelegate,this.k),this.Jt=new ns,this.Je=function(e,t){return new Os(e,t)}(this.k,this.Jt),this.Ye=new Ji,this.window&&this.window.localStorage?this.Xe=this.window.localStorage:(this.Xe=null,!1===l&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ze().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new E(k.FAILED_PRECONDITION,Rs);return this.tn(),this.en(),this.nn(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.He.getHighestSequenceNumber(e))}).then(e=>{this.Be=new L(e,this.Me)}).then(()=>{this.Ue=!0}).catch(e=>(this.ze&&this.ze.close(),Promise.reject(e)))}sn(e){return this.We=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ze.xt(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Ze()}))}Ze(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>js(e).put(new bi(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.rn(e).next(e=>{e||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.We(!1)))})}).next(()=>this.on(e)).next(t=>this.isPrimary&&!t?this.an(e).next(()=>!1):!!t&&this.cn(e).next(()=>!0))).catch(e=>{if(Di(e))return p("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable(()=>this.We(e)),this.isPrimary=e})}rn(e){return Ps(e).get(ai.key).next(e=>Ti.resolve(this.un(e)))}hn(e){return js(e).delete(this.clientId)}async ln(){if(this.isPrimary&&!this.fn(this.Qe,18e5)){this.Qe=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=Pi(e,bi.store);return t.Bt().next(e=>{const n=this.dn(e,18e5),i=e.filter(e=>-1===n.indexOf(e));return Ti.forEach(i,e=>t.delete(e.clientId)).next(()=>i)})}).catch(()=>[]);if(this.Xe)for(const t of e)this.Xe.removeItem(this.wn(t.clientId))}}nn(){this.je=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ze().then(()=>this.ln()).then(()=>this.nn()))}un(e){return!!e&&e.ownerId===this.clientId}on(e){return this.Le?Ti.resolve(!0):Ps(e).get(ai.key).next(t=>{if(null!==t&&this.fn(t.leaseTimestampMs,5e3)&&!this._n(t.ownerId)){if(this.un(t)&&this.networkEnabled)return!0;if(!this.un(t)){if(!t.allowTabSynchronization)throw new E(k.FAILED_PRECONDITION,Rs);return!1}}return!(!this.networkEnabled||!this.inForeground)||js(e).Bt().next(e=>void 0===this.dn(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,i=this.networkEnabled===e.networkEnabled;if(t||n&&i)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&p("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Ue=!1,this.mn(),this.je&&(this.je.cancel(),this.je=null),this.gn(),this.yn(),await this.ze.runTransaction("shutdown","readwrite",[ai.store,bi.store],e=>{const t=new Ni(e,L.I);return this.an(t).next(()=>this.hn(t))}),this.ze.close(),this.pn()}dn(e,t){return e.filter(e=>this.fn(e.updateTimeMs,t)&&!this._n(e.clientId))}Tn(){return this.runTransaction("getActiveClients","readonly",e=>js(e).Bt().next(e=>this.dn(e,18e5).map(e=>e.clientId)))}get started(){return this.Ue}getMutationQueue(e){return cs.Xt(e,this.k,this.Jt,this.referenceDelegate)}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getIndexManager(){return this.Jt}getBundleCache(){return this.Ye}runTransaction(e,t,n){p("IndexedDbPersistence","Starting transaction:",e);const i="readonly"===t?"readonly":"readwrite";let s;return this.ze.runTransaction(e,i,ki,i=>(s=new Ni(i,this.Be?this.Be.next():L.I),"readwrite-primary"===t?this.rn(s).next(e=>!!e||this.on(s)).next(t=>{if(!t)throw m(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.We(!1)),new E(k.FAILED_PRECONDITION,Ei);return n(s)}).next(e=>this.cn(s).next(()=>e)):this.En(s).next(()=>n(s)))).then(e=>(s.raiseOnCommittedEvent(),e))}En(e){return Ps(e).get(ai.key).next(e=>{if(null!==e&&this.fn(e.leaseTimestampMs,5e3)&&!this._n(e.ownerId)&&!this.un(e)&&!(this.Le||this.allowTabSynchronization&&e.allowTabSynchronization))throw new E(k.FAILED_PRECONDITION,Rs)})}cn(e){const t=new ai(this.clientId,this.allowTabSynchronization,Date.now());return Ps(e).put(ai.key,t)}static bt(){return Oi.bt()}an(e){const t=Ps(e);return t.get(ai.key).next(e=>this.un(e)?(p("IndexedDbPersistence","Releasing primary lease."),t.delete(ai.key)):Ti.resolve())}fn(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(m(`Detected an update time that is in the future: ${e} > ${n}`),!1))}tn(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ke=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ze()))},this.document.addEventListener("visibilitychange",this.Ke),this.inForeground="visible"===this.document.visibilityState)}gn(){this.Ke&&(this.document.removeEventListener("visibilitychange",this.Ke),this.Ke=null)}en(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.qe=()=>{this.mn(),Object(o["v"])()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.qe))}yn(){this.qe&&(this.window.removeEventListener("pagehide",this.qe),this.qe=null)}_n(e){var t;try{const n=null!==(null===(t=this.Xe)||void 0===t?void 0:t.getItem(this.wn(e)));return p("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return m("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}mn(){if(this.Xe)try{this.Xe.setItem(this.wn(this.clientId),String(Date.now()))}catch(e){m("Failed to set zombie client id.",e)}}pn(){if(this.Xe)try{this.Xe.removeItem(this.wn(this.clientId))}catch(e){}}wn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ps(e){return Pi(e,ai.store)}function js(e){return Pi(e,bi.store)}function Bs(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Fs{constructor(e,t){this.progress=e,this.In=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t,n){this.Je=e,this.An=t,this.Jt=n}Rn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKey(e,t).next(n=>this.Pn(e,t,n))}Pn(e,t,n){return this.Je.getEntry(e,t).next(e=>{for(const t of n)t.applyToLocalView(e);return e})}bn(e,t){e.forEach((e,n)=>{for(const i of t)i.applyToLocalView(n)})}vn(e,t){return this.Je.getEntries(e,t).next(t=>this.Vn(e,t).next(()=>t))}Vn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.bn(t,e))}getDocumentsMatchingQuery(e,t,n){return function(e){return ae.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Sn(e,t.path):et(t)?this.Dn(e,t,n):this.Cn(e,t,n)}Sn(e,t){return this.Rn(e,new ae(t)).next(e=>{let t=nn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}Dn(e,t,n){const i=t.collectionGroup;let s=nn();return this.Jt.getCollectionParents(e,i).next(r=>Ti.forEach(r,r=>{const o=function(e,t){return new Ke(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,r.child(i));return this.Cn(e,o,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}Cn(e,t,n){let i,s;return this.Je.getDocumentsMatchingQuery(e,t,n).next(n=>(i=n,this.An.getAllMutationBatchesAffectingQuery(e,t))).next(t=>(s=t,this.Nn(e,s,i).next(e=>{i=e;for(const t of s)for(const e of t.mutations){const n=e.key;let s=i.get(n);null==s&&(s=Ie.newInvalidDocument(n),i=i.insert(n,s)),Mt(e,s,t.localWriteTime),s.isFoundDocument()||(i=i.remove(n))}}))).next(()=>(i.forEach((e,n)=>{at(t,n)||(i=i.remove(e))}),i))}Nn(e,t,n){let i=an();for(const r of t)for(const e of r.mutations)e instanceof jt&&null===n.get(e.key)&&(i=i.add(e.key));let s=n;return this.Je.getEntries(e,i).next(e=>(e.forEach((e,t)=>{t.isFoundDocument()&&(s=s.insert(e,t))}),s))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.kn=n,this.xn=i}static $n(e,t){let n=an(),i=an();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new $s(e,t.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{Fn(e){this.On=e}getDocumentsMatchingQuery(e,t,n,i){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(U.min())?this.Mn(e,t):this.On.vn(e,i).next(s=>{const o=this.Ln(t,s);return(Ye(t)||Je(t))&&this.Bn(t.limitType,o,i,n)?this.Mn(e,t):(d()<=r["a"].DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ot(t)),this.On.getDocumentsMatchingQuery(e,t,n).next(e=>(o.forEach(t=>{e=e.insert(t.key,t)}),e)))})}Ln(e,t){let n=new Jt(ct(e));return t.forEach((t,i)=>{at(e,i)&&(n=n.add(i))}),n}Bn(e,t,n,i){if(n.size!==t.size)return!0;const s="F"===e?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mn(e,t){return d()<=r["a"].DEBUG&&p("QueryEngine","Using full collection scan to execute query:",ot(t)),this.On.getDocumentsMatchingQuery(e,t,U.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t,n,i){this.persistence=e,this.Un=t,this.k=i,this.qn=new Gt(P),this.Kn=new Ts(e=>Oe(e),Ae),this.jn=U.min(),this.An=e.getMutationQueue(n),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new Us(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qn))}}function Hs(e,t,n,i){return new qs(e,t,n,i)}async function Ws(e,t){const n=w(e);let i=n.An,s=n.Wn;const r=await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.An.getAllMutationBatches(e).next(o=>(r=o,i=n.persistence.getMutationQueue(t),s=new Us(n.Qn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(e))).next(t=>{const n=[],i=[];let o=an();for(const e of r){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return s.vn(e,o).next(e=>({Gn:e,removedBatchIds:n,addedBatchIds:i}))})});return n.An=i,n.Wn=s,n.Un.Fn(n.Wn),r}function zs(e,t){const n=w(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const i=t.batch.keys(),s=n.Qn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const s=n.batch,r=s.keys();let o=Ti.resolve();return r.forEach(e=>{o=o.next(()=>i.getEntry(t,e)).next(t=>{const r=n.docVersions.get(e);b(null!==r),t.version.compareTo(r)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&i.addEntry(t,n.commitVersion))})}),o.next(()=>e.An.removeMutationBatch(t,s))}(n,e,t,s).next(()=>s.apply(e)).next(()=>n.An.performConsistencyCheck(e)).next(()=>n.Wn.vn(e,i))})}function Ks(e){const t=w(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.He.getLastRemoteSnapshotVersion(e))}function Gs(e,t){const n=w(e),i=t.snapshotVersion;let s=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const r=n.Qn.newChangeBuffer({trackRemovals:!0});s=n.qn;const o=[];t.targetChanges.forEach((t,r)=>{const a=s.get(r);if(!a)return;o.push(n.He.removeMatchingKeys(e,t.removedDocuments,r).next(()=>n.He.addMatchingKeys(e,t.addedDocuments,r)));const c=t.resumeToken;if(c.approximateByteSize()>0){const l=a.withResumeToken(c,i).withSequenceNumber(e.currentSequenceNumber);s=s.insert(r,l),function(e,t,n){return b(t.resumeToken.approximateByteSize()>0),0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,l,t)&&o.push(n.He.updateTargetData(e,l))}});let a=en();if(t.documentUpdates.forEach((i,s)=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))}),o.push(Qs(e,r,t.documentUpdates,i,void 0).next(e=>{a=e})),!i.isEqual(U.min())){const t=n.He.getLastRemoteSnapshotVersion(e).next(t=>n.He.setTargetsMetadata(e,e.currentSequenceNumber,i));o.push(t)}return Ti.waitFor(o).next(()=>r.apply(e)).next(()=>n.Wn.Vn(e,a)).next(()=>a)}).then(e=>(n.qn=s,e))}function Qs(e,t,n,i,s){let r=an();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=en();return n.forEach((n,o)=>{const a=e.get(n),c=(null==s?void 0:s.get(n))||i;o.isNoDocument()&&o.version.isEqual(U.min())?(t.removeEntry(n,c),r=r.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,c),r=r.insert(n,o)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),r})}function Ys(e,t){const n=w(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.An.getNextMutationBatchAfterBatchId(e,t)))}function Js(e,t){const n=w(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let i;return n.He.getTargetData(e,t).next(s=>s?(i=s,Ti.resolve(i)):n.He.allocateTargetId(e).next(s=>(i=new Fi(t,s,0,e.currentSequenceNumber),n.He.addTargetData(e,i).next(()=>i))))}).then(e=>{const i=n.qn.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qn=n.qn.insert(e.targetId,e),n.Kn.set(t,e.targetId)),e})}async function Xs(e,t,n){const i=w(e),s=i.qn.get(t),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,e=>i.persistence.referenceDelegate.removeTarget(e,s))}catch(e){if(!Di(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.qn=i.qn.remove(t),i.Kn.delete(s.target)}function Zs(e,t,n){const i=w(e);let s=U.min(),r=an();return i.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const i=w(e),s=i.Kn.get(n);return void 0!==s?Ti.resolve(i.qn.get(s)):i.He.getTargetData(t,n)}(i,e,nt(t)).next(t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,i.He.getMatchingKeysForTargetId(e,t.targetId).next(e=>{r=e})}).next(()=>i.Un.getDocumentsMatchingQuery(e,t,n?s:U.min(),n?r:an())).next(e=>({documents:e,zn:r})))}function er(e,t){const n=w(e),i=w(n.He),s=n.qn.get(t);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",e=>i.Et(e,t).next(e=>e?e.target:null))}function tr(e){const t=w(e);return t.persistence.runTransaction("Get new document changes","readonly",e=>function(e,t,n){const i=w(e);let s=en(),r=qi(n);const o=Ds(t),a=IDBKeyRange.lowerBound(r,!0);return o.jt({index:fi.readTimeIndex,range:a},(e,t)=>{const n=$i(i.k,t);s=s.insert(n.key,n),r=t.readTime}).next(()=>({In:s,readTime:Hi(r)}))}(t.Qn,e,t.jn)).then(({In:e,readTime:n})=>(t.jn=n,e))}async function nr(e){const t=w(e);return t.persistence.runTransaction("Synchronize last document change read time","readonly",e=>function(e){const t=Ds(e);let n=U.min();return t.jt({index:fi.readTimeIndex,reverse:!0},(e,t,i)=>{t.readTime&&(n=Hi(t.readTime)),i.done()}).next(()=>n)}(e)).then(e=>{t.jn=e})}async function ir(e,t,n,i){const s=w(e);let r=an(),o=en(),a=rn();for(const u of n){const e=t.Hn(u.metadata.name);u.document&&(r=r.add(e)),o=o.insert(e,t.Jn(u)),a=a.insert(e,t.Yn(u.metadata.readTime))}const c=s.Qn.newChangeBuffer({trackRemovals:!0}),l=await Js(s,function(e){return nt(Qe(W.fromString("__bundle__/docs/"+e)))}(i));return s.persistence.runTransaction("Apply bundle documents","readwrite",e=>Qs(e,c,o,U.min(),a).next(t=>(c.apply(e),t)).next(t=>s.He.removeMatchingKeysForTargetId(e,l.targetId).next(()=>s.He.addMatchingKeys(e,r,l.targetId)).next(()=>s.Wn.Vn(e,t)).next(()=>t)))}async function sr(e,t,n=an()){const i=await Js(e,nt(Yi(t.bundledQuery))),s=w(e);return s.persistence.runTransaction("Save named query","readwrite",e=>{const r=Tn(t.readTime);if(i.snapshotVersion.compareTo(r)>=0)return s.Ye.saveNamedQuery(e,t);const o=i.withResumeToken(Y.EMPTY_BYTE_STRING,r);return s.qn=s.qn.insert(o.targetId,o),s.He.updateTargetData(e,o).next(()=>s.He.removeMatchingKeysForTargetId(e,i.targetId)).next(()=>s.He.addMatchingKeys(e,n,i.targetId)).next(()=>s.Ye.saveNamedQuery(e,t))})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,t){return Ti.resolve(this.Xn.get(t))}saveBundleMetadata(e,t){var n;return this.Xn.set(t.id,{id:(n=t).id,version:n.version,createTime:Tn(n.createTime)}),Ti.resolve()}getNamedQuery(e,t){return Ti.resolve(this.Zn.get(t))}saveNamedQuery(e,t){return this.Zn.set(t.name,function(e){return{name:e.name,query:Yi(e.bundledQuery),readTime:Tn(e.readTime)}}(t)),Ti.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.ts=new Jt(ar.es),this.ns=new Jt(ar.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,t){const n=new ar(e,t);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.os(new ar(e,t))}cs(e,t){e.forEach(e=>this.removeReference(e,t))}us(e){const t=new ae(new W([])),n=new ar(t,e),i=new ar(t,e+1),s=[];return this.ns.forEachInRange([n,i],e=>{this.os(e),s.push(e.key)}),s}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const t=new ae(new W([])),n=new ar(t,e),i=new ar(t,e+1);let s=an();return this.ns.forEachInRange([n,i],e=>{s=s.add(e.key)}),s}containsKey(e){const t=new ar(e,0),n=this.ts.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ar{constructor(e,t){this.key=e,this.fs=t}static es(e,t){return ae.comparator(e.key,t.key)||P(e.fs,t.fs)}static ss(e,t){return P(e.fs,t.fs)||ae.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t){this.Jt=e,this.referenceDelegate=t,this.An=[],this.ds=1,this.ws=new Jt(ar.es)}checkEmpty(e){return Ti.resolve(0===this.An.length)}addMutationBatch(e,t,n,i){const s=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const r=new ji(s,t,n,i);this.An.push(r);for(const o of i)this.ws=this.ws.add(new ar(o.key,s)),this.Jt.addToCollectionParentIndex(e,o.key.path.popLast());return Ti.resolve(r)}lookupMutationBatch(e,t){return Ti.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.gs(n),s=i<0?0:i;return Ti.resolve(this.An.length>s?this.An[s]:null)}getHighestUnacknowledgedBatchId(){return Ti.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(e){return Ti.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ar(t,0),i=new ar(t,Number.POSITIVE_INFINITY),s=[];return this.ws.forEachInRange([n,i],e=>{const t=this._s(e.fs);s.push(t)}),Ti.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Jt(P);return t.forEach(e=>{const t=new ar(e,0),i=new ar(e,Number.POSITIVE_INFINITY);this.ws.forEachInRange([t,i],e=>{n=n.add(e.fs)})}),Ti.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;ae.isDocumentKey(s)||(s=s.child(""));const r=new ar(new ae(s),0);let o=new Jt(P);return this.ws.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.fs)),!0)},r),Ti.resolve(this.ys(o))}ys(e){const t=[];return e.forEach(e=>{const n=this._s(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){b(0===this.ps(t.batchId,"removed")),this.An.shift();let n=this.ws;return Ti.forEach(t.mutations,i=>{const s=new ar(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ws=n})}ee(e){}containsKey(e,t){const n=new ar(t,0),i=this.ws.firstAfterOrEqual(n);return Ti.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.An.length,Ti.resolve()}ps(e,t){return this.gs(e)}gs(e){return 0===this.An.length?0:e-this.An[0].batchId}_s(e){const t=this.gs(e);return t<0||t>=this.An.length?null:this.An[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){this.Jt=e,this.Ts=t,this.docs=new Gt(ae.comparator),this.size=0}addEntry(e,t,n){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ts(t);return this.docs=this.docs.insert(i,{document:t.clone(),size:o,readTime:n}),this.size+=o-r,this.Jt.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ti.resolve(n?n.document.clone():Ie.newInvalidDocument(t))}getEntries(e,t){let n=en();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():Ie.newInvalidDocument(e))}),Ti.resolve(n)}getDocumentsMatchingQuery(e,t,n){let i=en();const s=new ae(t.path.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:e,value:{document:s,readTime:o}}=r.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||at(t,s)&&(i=i.insert(s.key,s.clone()))}return Ti.resolve(i)}Es(e,t){return Ti.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new ur(this)}getSize(e){return Ti.resolve(this.size)}}class ur extends Cs{constructor(e){super(),this.De=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.document.isValidDocument()?t.push(this.De.addEntry(e,i.document,this.getReadTime(n))):this.De.removeEntry(n)}),Ti.waitFor(t)}getFromCache(e,t){return this.De.getEntry(e,t)}getAllFromCache(e,t){return this.De.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.persistence=e,this.Is=new Ts(e=>Oe(e),Ae),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.As=0,this.Rs=new or,this.targetCount=0,this.Ps=fs.ie()}forEachTarget(e,t){return this.Is.forEach((e,n)=>t(n)),Ti.resolve()}getLastRemoteSnapshotVersion(e){return Ti.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ti.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),Ti.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.As&&(this.As=t),Ti.resolve()}ce(e){this.Is.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ps=new fs(t),this.highestTargetId=t),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,Ti.resolve()}updateTargetData(e,t){return this.ce(t),Ti.resolve()}removeTargetData(e,t){return this.Is.delete(t.target),this.Rs.us(t.targetId),this.targetCount-=1,Ti.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Is.forEach((r,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Is.delete(r),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)}),Ti.waitFor(s).next(()=>i)}getTargetCount(e){return Ti.resolve(this.targetCount)}getTargetData(e,t){const n=this.Is.get(t)||null;return Ti.resolve(n)}addMatchingKeys(e,t,n){return this.Rs.rs(t,n),Ti.resolve()}removeMatchingKeys(e,t,n){this.Rs.cs(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(t=>{s.push(i.markPotentiallyOrphaned(e,t))}),Ti.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Rs.us(t),Ti.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Rs.ls(t);return Ti.resolve(n)}containsKey(e,t){return Ti.resolve(this.Rs.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t){this.bs={},this.Be=new L(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new hr(this),this.Jt=new es,this.Je=function(e,t){return new lr(e,t)}(this.Jt,e=>this.referenceDelegate.vs(e)),this.k=new Ui(t),this.Ye=new rr(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new cr(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const i=new fr(this.Be.next());return this.referenceDelegate.Vs(),n(i).next(e=>this.referenceDelegate.Ss(i).next(()=>e)).toPromise().then(e=>(i.raiseOnCommittedEvent(),e))}Ds(e,t){return Ti.or(Object.values(this.bs).map(n=>()=>n.containsKey(e,t)))}}class fr extends Ii{constructor(e){super(),this.currentSequenceNumber=e}}class pr{constructor(e){this.persistence=e,this.Cs=new or,this.Ns=null}static ks(e){return new pr(e)}get xs(){if(this.Ns)return this.Ns;throw y()}addReference(e,t,n){return this.Cs.addReference(n,t),this.xs.delete(n.toString()),Ti.resolve()}removeReference(e,t,n){return this.Cs.removeReference(n,t),this.xs.add(n.toString()),Ti.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),Ti.resolve()}removeTarget(e,t){this.Cs.us(t.targetId).forEach(e=>this.xs.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.xs.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Vs(){this.Ns=new Set}Ss(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ti.forEach(this.xs,n=>{const i=ae.fromPath(n);return this.$s(e,i).next(e=>{e||t.removeEntry(i)})}).next(()=>(this.Ns=null,t.apply(e)))}updateLimboDocument(e,t){return this.$s(e,t).next(e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())})}vs(e){return 0}$s(e,t){return Ti.or([()=>Ti.resolve(this.Cs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ds(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e,t){return`firestore_clients_${e}_${t}`}function gr(e,t,n){let i=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(i+="_"+t.uid),i}function vr(e,t){return`firestore_targets_${e}_${t}`}class yr{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static Fs(e,t,n){const i=JSON.parse(n);let s,r="object"==typeof i&&-1!==["pending","acknowledged","rejected"].indexOf(i.state)&&(void 0===i.error||"object"==typeof i.error);return r&&i.error&&(r="string"==typeof i.error.message&&"string"==typeof i.error.code,r&&(s=new E(i.error.code,i.error.message))),r?new yr(e,t,i.state,s):(m("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class br{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Fs(e,t){const n=JSON.parse(t);let i,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(i=new E(n.error.code,n.error.message))),s?new br(e,n.state,i):(m("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class _r{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Fs(e,t){const n=JSON.parse(t);let i="object"==typeof n&&n.activeTargetIds instanceof Array,s=ln();for(let r=0;i&&r<n.activeTargetIds.length;++r)i=oe(n.activeTargetIds[r]),s=s.add(n.activeTargetIds[r]);return i?new _r(e,s):(m("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class wr{constructor(e,t){this.clientId=e,this.onlineState=t}static Fs(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new wr(t.clientId,t.onlineState):(m("SharedClientState","Failed to parse online state: "+e),null)}}class kr{constructor(){this.activeTargetIds=ln()}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Er{constructor(e,t,n,i,s){this.window=e,this.Oe=t,this.persistenceKey=n,this.Bs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Us=this.qs.bind(this),this.Ks=new Gt(P),this.started=!1,this.js=[];const r=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Qs=mr(this.persistenceKey,this.Bs),this.Ws=function(e){return"firestore_sequence_number_"+e}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.Ks=this.Ks.insert(this.Bs,new kr),this.Gs=new RegExp(`^firestore_clients_${r}_([^_]*)$`),this.zs=new RegExp(`^firestore_mutations_${r}_(\\d+)(?:_(.*))?$`),this.Hs=new RegExp(`^firestore_targets_${r}_(\\d+)$`),this.Js=function(e){return"firestore_online_state_"+e}(this.persistenceKey),this.Ys=function(e){return"firestore_bundle_loaded_"+e}(this.persistenceKey),this.window.addEventListener("storage",this.Us)}static bt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Tn();for(const n of e){if(n===this.Bs)continue;const e=this.getItem(mr(this.persistenceKey,n));if(e){const t=_r.Fs(n,e);t&&(this.Ks=this.Ks.insert(t.clientId,t))}}this.Xs();const t=this.storage.getItem(this.Js);if(t){const e=this.Zs(t);e&&this.ti(e)}for(const n of this.js)this.qs(n);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ei(this.Ks)}isActiveQueryTarget(e){let t=!1;return this.Ks.forEach((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.ni(e,"pending")}updateMutationState(e,t,n){this.ni(e,t,n),this.si(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(vr(this.persistenceKey,e));if(n){const i=br.Fs(e,n);i&&(t=i.state)}}return this.ii.Ms(e),this.Xs(),t}removeLocalQueryTarget(e){this.ii.Ls(e),this.Xs()}isLocalQueryTarget(e){return this.ii.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(vr(this.persistenceKey,e))}updateQueryState(e,t,n){this.ri(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.si(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.oi(e)}notifyBundleLoaded(){this.ai()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Us),this.removeItem(this.Qs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return p("SharedClientState","READ",e,t),t}setItem(e,t){p("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){p("SharedClientState","REMOVE",e),this.storage.removeItem(e)}qs(e){const t=e;if(t.storageArea===this.storage){if(p("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Qs)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.Gs.test(t.key)){if(null==t.newValue){const e=this.ci(t.key);return this.ui(e,null)}{const e=this.hi(t.key,t.newValue);if(e)return this.ui(e.clientId,e)}}else if(this.zs.test(t.key)){if(null!==t.newValue){const e=this.li(t.key,t.newValue);if(e)return this.fi(e)}}else if(this.Hs.test(t.key)){if(null!==t.newValue){const e=this.di(t.key,t.newValue);if(e)return this.wi(e)}}else if(t.key===this.Js){if(null!==t.newValue){const e=this.Zs(t.newValue);if(e)return this.ti(e)}}else if(t.key===this.Ws){const e=function(e){let t=L.I;if(null!=e)try{const n=JSON.parse(e);b("number"==typeof n),t=n}catch(e){m("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==L.I&&this.sequenceNumberHandler(e)}else if(t.key===this.Ys)return this.syncEngine._i()}else this.js.push(t)})}}get ii(){return this.Ks.get(this.Bs)}Xs(){this.setItem(this.Qs,this.ii.Os())}ni(e,t,n){const i=new yr(this.currentUser,e,t,n),s=gr(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Os())}si(e){const t=gr(this.persistenceKey,this.currentUser,e);this.removeItem(t)}oi(e){const t={clientId:this.Bs,onlineState:e};this.storage.setItem(this.Js,JSON.stringify(t))}ri(e,t,n){const i=vr(this.persistenceKey,e),s=new br(e,t,n);this.setItem(i,s.Os())}ai(){this.setItem(this.Ys,"value-not-used")}ci(e){const t=this.Gs.exec(e);return t?t[1]:null}hi(e,t){const n=this.ci(e);return _r.Fs(n,t)}li(e,t){const n=this.zs.exec(e),i=Number(n[1]),s=void 0!==n[2]?n[2]:null;return yr.Fs(new l(s),i,t)}di(e,t){const n=this.Hs.exec(e),i=Number(n[1]);return br.Fs(i,t)}Zs(e){return wr.Fs(e)}async fi(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.mi(e.batchId,e.state,e.error);p("SharedClientState","Ignoring mutation for non-active user "+e.user.uid)}wi(e){return this.syncEngine.gi(e.targetId,e.state,e.error)}ui(e,t){const n=t?this.Ks.insert(e,t):this.Ks.remove(e),i=this.ei(this.Ks),s=this.ei(n),r=[],o=[];return s.forEach(e=>{i.has(e)||r.push(e)}),i.forEach(e=>{s.has(e)||o.push(e)}),this.syncEngine.yi(r,o).then(()=>{this.Ks=n})}ti(e){this.Ks.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ei(e){let t=ln();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class Ir{constructor(){this.pi=new kr,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,t,n){this.Ti[e]=t}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new kr,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{Ei(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Mi=t+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,t,n,i,s){const r=this.Ui(e,t);p("RestConnection","Sending: ",r,n);const o={};return this.qi(o,i,s),this.Ki(e,r,o,n).then(e=>(p("RestConnection","Received: ",e),e),t=>{throw g("RestConnection",e+" failed with error: ",t,"url: ",r,"request:",n),t})}ji(e,t,n,i,s){return this.Bi(e,t,n,i,s)}qi(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+u,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Ui(e,t){const n=Or[e];return`${this.Mi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,t,n,i){return new Promise((s,r)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const t=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(t)),s(t);break;case a["a"].TIMEOUT:p("Connection",'RPC "'+e+'" timed out'),r(new E(k.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(t)>=0?t:k.UNKNOWN}(e.status);r(new E(t,e.message))}else r(new E(k.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new E(k.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{p("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);o.send(t,"POST",c,n,15)})}Qi(e,t,n){const i=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Object(a["h"])(),r=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.qi(c.initMessageHeaders,t,n),Object(o["s"])()||Object(o["u"])()||Object(o["o"])()||Object(o["q"])()||Object(o["w"])()||Object(o["n"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");p("Connection","Creating WebChannel: "+l,c);const u=s.createWebChannel(l,c);let h=!1,d=!1;const f=new Sr({Vi:e=>{d?p("Connection","Not sending because WebChannel is closed:",e):(h||(p("Connection","Opening WebChannel transport."),u.open(),h=!0),p("Connection","WebChannel sending:",e),u.send(e))},Si:()=>u.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(u,a["f"].EventType.OPEN,()=>{d||p("Connection","WebChannel transport opened.")}),m(u,a["f"].EventType.CLOSE,()=>{d||(d=!0,p("Connection","WebChannel transport closed"),f.Fi())}),m(u,a["f"].EventType.ERROR,e=>{d||(d=!0,g("Connection","WebChannel transport errored:",e),f.Fi(new E(k.UNAVAILABLE,"The operation could not be completed")))}),m(u,a["f"].EventType.MESSAGE,e=>{var t;if(!d){const n=e.data[0];b(!!n);const i=n,s=i.error||(null===(t=i[0])||void 0===t?void 0:t.error);if(s){p("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=Ht[e];if(void 0!==t)return Kt(t)}(e),n=s.message;void 0===t&&(t=k.INTERNAL,n="Unknown error status: "+e+" with message "+s.message),d=!0,f.Fi(new E(t,n)),u.close()}else p("Connection","WebChannel received:",n),f.Oi(n)}}),m(r,a["b"].STAT_EVENT,e=>{e.stat===a["e"].PROXY?p("Connection","Detected buffering proxy"):e.stat===a["e"].NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(){return"undefined"!=typeof window?window:null}function xr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(e){return new wn(e,!0)}class Lr{constructor(e,t,n=1e3,i=1.5,s=6e4){this.Oe=e,this.timerId=t,this.Wi=n,this.Gi=i,this.zi=s,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),i=Math.max(0,t-n);i>0&&p("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,i,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t,n,i,s,r,o,a){this.Oe=e,this.nr=n,this.sr=i,this.ir=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Lr(e,t)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==e?this.ur.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(m(t.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):t&&t.code===k.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(t)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),t=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.rr===t&&this.Ir(e,n)},t=>{e(()=>{const e=new E(k.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ar(e)})})}Ir(e,t){const n=this.Er(this.rr);this.stream=this.Rr(e,t),this.stream.Di(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(e=>{n(()=>this.Ar(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return p("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}Er(e){return t=>{this.Oe.enqueueAndForget(()=>this.rr===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nr extends Rr{constructor(e,t,n,i,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,r),this.k=s}Rr(e,t){return this.ir.Qi("Listen",e,t)}onMessage(e){this.ur.reset();const t=jn(this.k,e),n=function(e){if(!("targetChange"in e))return U.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?U.min():t.readTime?Tn(t.readTime):U.min()}(e);return this.listener.Pr(t,n)}br(e){const t={};t.database=Mn(this.k),t.addTarget=function(e,t){let n;const i=t.target;return n=De(i)?{documents:$n(e,i)}:{query:Vn(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=En(e,t.resumeToken):t.snapshotVersion.compareTo(U.min())>0&&(n.readTime=kn(e,t.snapshotVersion.toTimestamp())),n}(this.k,e);const n=Hn(this.k,e);n&&(t.labels=n),this.gr(t)}vr(e){const t={};t.database=Mn(this.k),t.removeTarget=e,this.gr(t)}}class Pr extends Rr{constructor(e,t,n,i,s,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,r),this.k=s,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,t){return this.ir.Qi("Write",e,t)}onMessage(e){if(b(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const t=Un(e.writeResults,e.commitTime),n=Tn(e.commitTime);return this.listener.Cr(n,t)}return b(!e.writeResults||0===e.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=Mn(this.k),this.gr(e)}Dr(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Bn(this.k,e))};this.gr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.ir=n,this.k=i,this.$r=!1}Fr(){if(this.$r)throw new E(k.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.Bi(e,t,n,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(k.UNKNOWN,e.toString())})}ji(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.ji(e,t,n,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(k.UNKNOWN,e.toString())})}terminate(){this.$r=!0}}class Br{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr("Connection failed 1 times. Most recent error: "+e.toString()),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,"Online"===e&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(m(t),this.Lr=!1):p("OnlineStateTracker",t)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=s,this.Hr.Ei(e=>{n.enqueueAndForget(async()=>{Gr(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=w(e);t.Gr.add(4),await $r(t),t.Jr.set("Unknown"),t.Gr.delete(4),await Ur(t)}(this))})}),this.Jr=new Br(n,i)}}async function Ur(e){if(Gr(e))for(const t of e.zr)await t(!0)}async function $r(e){for(const t of e.zr)await t(!1)}function Vr(e,t){const n=w(e);n.Wr.has(t.targetId)||(n.Wr.set(t.targetId,t),Kr(n)?zr(n):ho(n).lr()&&Hr(n,t))}function qr(e,t){const n=w(e),i=ho(n);n.Wr.delete(t),i.lr()&&Wr(n,t),0===n.Wr.size&&(i.lr()?i._r():Gr(n)&&n.Jr.set("Unknown"))}function Hr(e,t){e.Yr.X(t.targetId),ho(e).br(t)}function Wr(e,t){e.Yr.X(t),ho(e).vr(t)}function zr(e){e.Yr=new gn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Wr.get(t)||null}),ho(e).start(),e.Jr.Br()}function Kr(e){return Gr(e)&&!ho(e).hr()&&e.Wr.size>0}function Gr(e){return 0===w(e).Gr.size}function Qr(e){e.Yr=void 0}async function Yr(e){e.Wr.forEach((t,n)=>{Hr(e,t)})}async function Jr(e,t){Qr(e),Kr(e)?(e.Jr.Kr(t),zr(e)):e.Jr.set("Unknown")}async function Xr(e,t,n){if(e.Jr.set("Online"),t instanceof pn&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.Wr.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.Wr.delete(i),e.Yr.removeTarget(i))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Zr(e,n)}else if(t instanceof dn?e.Yr.ot(t):t instanceof fn?e.Yr.dt(t):e.Yr.ut(t),!n.isEqual(U.min()))try{const t=await Ks(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Yr.gt(t);return n.targetChanges.forEach((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.Wr.get(i);s&&e.Wr.set(i,s.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{const n=e.Wr.get(t);if(!n)return;e.Wr.set(t,n.withResumeToken(Y.EMPTY_BYTE_STRING,n.snapshotVersion)),Wr(e,t);const i=new Fi(n.target,t,1,n.sequenceNumber);Hr(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await Zr(e,t)}}async function Zr(e,t,n){if(!Di(t))throw t;e.Gr.add(1),await $r(e),e.Jr.set("Offline"),n||(n=()=>Ks(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await Ur(e)})}function eo(e,t){return t().catch(n=>Zr(e,n,t))}async function to(e){const t=w(e),n=fo(t);let i=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;no(t);)try{const e=await Ys(t.localStore,i);if(null===e){0===t.Qr.length&&n._r();break}i=e.batchId,io(t,e)}catch(e){await Zr(t,e)}so(t)&&ro(t)}function no(e){return Gr(e)&&e.Qr.length<10}function io(e,t){e.Qr.push(t);const n=fo(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function so(e){return Gr(e)&&!fo(e).hr()&&e.Qr.length>0}function ro(e){fo(e).start()}async function oo(e){fo(e).kr()}async function ao(e){const t=fo(e);for(const n of e.Qr)t.Dr(n.mutations)}async function co(e,t,n){const i=e.Qr.shift(),s=Bi.from(i,t,n);await eo(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await to(e)}async function lo(e,t){t&&fo(e).Sr&&await async function(e,t){if(n=t.code,zt(n)&&n!==k.ABORTED){const n=e.Qr.shift();fo(e).wr(),await eo(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await to(e)}var n}(e,t),so(e)&&ro(e)}async function uo(e,t){const n=w(e);t?(n.Gr.delete(2),await Ur(n)):t||(n.Gr.add(2),await $r(n),n.Jr.set("Unknown"))}function ho(e){return e.Xr||(e.Xr=function(e,t,n){const i=w(e);return i.Fr(),new Nr(t,i.ir,i.authCredentials,i.appCheckCredentials,i.k,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Di:Yr.bind(null,e),Ni:Jr.bind(null,e),Pr:Xr.bind(null,e)}),e.zr.push(async t=>{t?(e.Xr.wr(),Kr(e)?zr(e):e.Jr.set("Unknown")):(await e.Xr.stop(),Qr(e))})),e.Xr}function fo(e){return e.Zr||(e.Zr=function(e,t,n){const i=w(e);return i.Fr(),new Pr(t,i.ir,i.authCredentials,i.appCheckCredentials,i.k,n)}(e.datastore,e.asyncQueue,{Di:oo.bind(null,e),Ni:lo.bind(null,e),Nr:ao.bind(null,e),Cr:co.bind(null,e)}),e.zr.push(async t=>{t?(e.Zr.wr(),await to(e)):(await e.Zr.stop(),e.Qr.length>0&&(p("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))})),e.Zr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class po{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,i,s){const r=Date.now()+n,o=new po(e,t,r,i,s);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mo(e,t){if(m("AsyncQueue",`${t}: ${e}`),Di(e))return new E(k.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ae.comparator(t.key,n.key):(e,t)=>ae.comparator(e.key,t.key),this.keyedMap=nn(),this.sortedSet=new Gt(this.comparator)}static emptySet(e){return new go(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof go))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new go;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.eo=new Gt(ae.comparator)}track(e){const t=e.doc.key,n=this.eo.get(t);n?0!==e.type&&3===n.type?this.eo=this.eo.insert(t,e):3===e.type&&1!==n.type?this.eo=this.eo.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.eo=this.eo.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.eo=this.eo.remove(t):1===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):y():this.eo=this.eo.insert(t,e)}no(){const e=[];return this.eo.inorderTraversal((t,n)=>{e.push(n)}),e}}class yo{constructor(e,t,n,i,s,r,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,i){const s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new yo(e,t,go.emptySet(t),s,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&st(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.so=void 0,this.listeners=[]}}class _o{constructor(){this.queries=new Ts(e=>rt(e),st),this.onlineState="Unknown",this.io=new Set}}async function wo(e,t){const n=w(e),i=t.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new bo),s)try{r.so=await n.onListen(i)}catch(e){const n=mo(e,`Initialization of query '${ot(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,r),r.listeners.push(t),t.ro(n.onlineState),r.so&&t.oo(r.so)&&To(n)}async function ko(e,t){const n=w(e),i=t.query;let s=!1;const r=n.queries.get(i);if(r){const e=r.listeners.indexOf(t);e>=0&&(r.listeners.splice(e,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function Eo(e,t){const n=w(e);let i=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.oo(s)&&(i=!0);t.so=s}}i&&To(n)}function Io(e,t,n){const i=w(e),s=i.queries.get(t);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(t)}function To(e){e.io.forEach(e=>{e.next()})}class Co{constructor(e,t,n){this.query=e,this.ao=t,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new yo(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.co?this.ho(e)&&(this.ao.next(e),t=!0):this.lo(e,this.onlineState)&&(this.fo(e),t=!0),this.uo=e,t}onError(e){this.ao.error(e)}ro(e){this.onlineState=e;let t=!1;return this.uo&&!this.co&&this.lo(this.uo,e)&&(this.fo(this.uo),t=!0),t}lo(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.wo||!n)&&(!e.docs.isEmpty()||"Offline"===t)}ho(e){if(e.docChanges.length>0)return!0;const t=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}fo(e){e=yo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.ao.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t){this.payload=e,this.byteLength=t}_o(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.k=e}Hn(e){return An(this.k,e)}Jn(e){return e.metadata.exists?Nn(this.k,e.document,!1):Ie.newNoDocument(this.Hn(e.metadata.name),this.Yn(e.metadata.readTime))}Yn(e){return Tn(e)}}class Ao{constructor(e,t,n){this.mo=e,this.localStore=t,this.k=n,this.queries=[],this.documents=[],this.progress=Do(e)}yo(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t),t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}po(e){const t=new Map,n=new So(this.k);for(const i of e)if(i.metadata.queries){const e=n.Hn(i.metadata.name);for(const n of i.metadata.queries){const i=(t.get(n)||an()).add(e);t.set(n,i)}}return t}async complete(){const e=await ir(this.localStore,new So(this.k),this.documents,this.mo.id),t=this.po(this.documents);for(const n of this.queries)await sr(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",new Fs(Object.assign({},this.progress),e)}}function Do(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.key=e}}class Mo{constructor(e){this.key=e}}class Lo{constructor(e,t){this.query=e,this.To=t,this.Eo=null,this.current=!1,this.Io=an(),this.mutatedKeys=an(),this.Ao=ct(e),this.Ro=new go(this.Ao)}get Po(){return this.To}bo(e,t){const n=t?t.vo:new vo,i=t?t.Ro:this.Ro;let s=t?t.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a=Ye(this.query)&&i.size===this.query.limit?i.last():null,c=Je(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((e,t)=>{const l=i.get(e),u=at(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Vo(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ao(u,a)>0||c&&this.Ao(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(r=r.add(u),s=d?s.add(e):s.delete(e)):(r=r.delete(e),s=s.delete(e)))}),Ye(this.query)||Je(this.query))for(;r.size>this.query.limit;){const e=Ye(this.query)?r.last():r.first();r=r.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{Ro:r,vo:n,Bn:o,mutatedKeys:s}}Vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const s=e.vo.no();s.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Ao(e.doc,t.doc)),this.So(n);const r=t?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==s.length||a?{snapshot:new yo(this.query,e.Ro,i,s,e.mutatedKeys,0===o,a,!1),Co:r}:{Co:r}}ro(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new vo,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(e=>this.To=this.To.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.To=this.To.delete(e)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=an(),this.Ro.forEach(e=>{this.No(e.key)&&(this.Io=this.Io.add(e.key))});const t=[];return e.forEach(e=>{this.Io.has(e)||t.push(new Mo(e))}),this.Io.forEach(n=>{e.has(n)||t.push(new xo(n))}),t}ko(e){this.To=e.zn,this.Io=an();const t=this.bo(e.documents);return this.applyChanges(t,!0)}xo(){return yo.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Ro{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class No{constructor(e){this.key=e,this.$o=!1}}class Po{constructor(e,t,n,i,s,r){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.Fo={},this.Oo=new Ts(e=>rt(e),st),this.Mo=new Map,this.Lo=new Set,this.Bo=new Gt(ae.comparator),this.Uo=new Map,this.qo=new or,this.Ko={},this.jo=new Map,this.Qo=fs.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function jo(e,t){const n=da(e);let i,s;const r=n.Oo.get(t);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.xo();else{const e=await Js(n.localStore,nt(t)),r=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await Bo(n,t,i,"current"===r),n.isPrimaryClient&&Vr(n.remoteStore,e)}return s}async function Bo(e,t,n,i){e.Go=(t,n,i)=>async function(e,t,n,i){let s=t.view.bo(n);s.Bn&&(s=await Zs(e.localStore,t.query,!1).then(({documents:e})=>t.view.bo(e,s)));const r=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,r);return Jo(e,t.targetId,o.Co),o.snapshot}(e,t,n,i);const s=await Zs(e.localStore,t,!0),r=new Lo(t,s.zn),o=r.bo(s.documents),a=hn.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState),c=r.applyChanges(o,e.isPrimaryClient,a);Jo(e,n,c.Co);const l=new Ro(t,n,r);return e.Oo.set(t,l),e.Mo.has(n)?e.Mo.get(n).push(t):e.Mo.set(n,[t]),c.snapshot}async function Fo(e,t){const n=w(e),i=n.Oo.get(t),s=n.Mo.get(i.targetId);if(s.length>1)return n.Mo.set(i.targetId,s.filter(e=>!st(e,t))),void n.Oo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Xs(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),qr(n.remoteStore,i.targetId),Qo(n,i.targetId)}).catch(ys)):(Qo(n,i.targetId),await Xs(n.localStore,i.targetId,!0))}async function Uo(e,t,n){const i=fa(e);try{const e=await function(e,t){const n=w(e),i=F.now(),s=t.reduce((e,t)=>e.add(t.key),an());let r;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>n.Wn.vn(e,s).next(s=>{r=s;const o=[];for(const e of t){const t=Lt(e,r.get(e.key));null!=t&&o.push(new jt(e.key,t,Ee(t.value.mapValue),St.exists(!0)))}return n.An.addMutationBatch(e,i,o,t)})).then(e=>(e.applyToLocalDocumentSet(r),{batchId:e.batchId,changes:r}))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.Ko[e.currentUser.toKey()];i||(i=new Gt(P)),i=i.insert(t,n),e.Ko[e.currentUser.toKey()]=i}(i,e.batchId,n),await ea(i,e.changes),await to(i.remoteStore)}catch(e){const t=mo(e,"Failed to persist write");n.reject(t)}}async function $o(e,t){const n=w(e);try{const e=await Gs(n.localStore,t);t.targetChanges.forEach((e,t)=>{const i=n.Uo.get(t);i&&(b(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.$o=!0:e.modifiedDocuments.size>0?b(i.$o):e.removedDocuments.size>0&&(b(i.$o),i.$o=!1))}),await ea(n,e,t)}catch(e){await ys(e)}}function Vo(e,t,n){const i=w(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.Oo.forEach((n,i)=>{const s=i.view.ro(t);s.snapshot&&e.push(s.snapshot)}),function(e,t){const n=w(e);n.onlineState=t;let i=!1;n.queries.forEach((e,n)=>{for(const s of n.listeners)s.ro(t)&&(i=!0)}),i&&To(n)}(i.eventManager,t),e.length&&i.Fo.Pr(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function qo(e,t,n){const i=w(e);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.Uo.get(t),r=s&&s.key;if(r){let e=new Gt(ae.comparator);e=e.insert(r,Ie.newNoDocument(r,U.min()));const n=an().add(r),s=new un(U.min(),new Map,new Jt(P),e,n);await $o(i,s),i.Bo=i.Bo.remove(r),i.Uo.delete(t),Zo(i)}else await Xs(i.localStore,t,!1).then(()=>Qo(i,t,n)).catch(ys)}async function Ho(e,t){const n=w(e),i=t.batch.batchId;try{const e=await zs(n.localStore,t);Go(n,i,null),Ko(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ea(n,e)}catch(e){await ys(e)}}async function Wo(e,t,n){const i=w(e);try{const e=await function(e,t){const n=w(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let i;return n.An.lookupMutationBatch(e,t).next(t=>(b(null!==t),i=t.keys(),n.An.removeMutationBatch(e,t))).next(()=>n.An.performConsistencyCheck(e)).next(()=>n.Wn.vn(e,i))})}(i.localStore,t);Go(i,t,n),Ko(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await ea(i,e)}catch(n){await ys(n)}}async function zo(e,t){const n=w(e);Gr(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=w(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.An.getHighestUnacknowledgedBatchId(e))}(n.localStore);if(-1===e)return void t.resolve();const i=n.jo.get(e)||[];i.push(t),n.jo.set(e,i)}catch(e){const n=mo(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function Ko(e,t){(e.jo.get(t)||[]).forEach(e=>{e.resolve()}),e.jo.delete(t)}function Go(e,t,n){const i=w(e);let s=i.Ko[i.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),i.Ko[i.currentUser.toKey()]=s}}function Qo(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.Mo.get(t))e.Oo.delete(i),n&&e.Fo.zo(i,n);e.Mo.delete(t),e.isPrimaryClient&&e.qo.us(t).forEach(t=>{e.qo.containsKey(t)||Yo(e,t)})}function Yo(e,t){e.Lo.delete(t.path.canonicalString());const n=e.Bo.get(t);null!==n&&(qr(e.remoteStore,n),e.Bo=e.Bo.remove(t),e.Uo.delete(n),Zo(e))}function Jo(e,t,n){for(const i of n)i instanceof xo?(e.qo.addReference(i.key,t),Xo(e,i)):i instanceof Mo?(p("SyncEngine","Document no longer in limbo: "+i.key),e.qo.removeReference(i.key,t),e.qo.containsKey(i.key)||Yo(e,i.key)):y()}function Xo(e,t){const n=t.key,i=n.path.canonicalString();e.Bo.get(n)||e.Lo.has(i)||(p("SyncEngine","New document in limbo: "+n),e.Lo.add(i),Zo(e))}function Zo(e){for(;e.Lo.size>0&&e.Bo.size<e.maxConcurrentLimboResolutions;){const t=e.Lo.values().next().value;e.Lo.delete(t);const n=new ae(W.fromString(t)),i=e.Qo.next();e.Uo.set(i,new No(n)),e.Bo=e.Bo.insert(n,i),Vr(e.remoteStore,new Fi(nt(Qe(n.path)),i,2,L.I))}}async function ea(e,t,n){const i=w(e),s=[],r=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach((e,a)=>{o.push(i.Go(a,t,n).then(e=>{if(e){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),s.push(e);const t=$s.$n(a.targetId,e);r.push(t)}}))}),await Promise.all(o),i.Fo.Pr(s),await async function(e,t){const n=w(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Ti.forEach(t,t=>Ti.forEach(t.kn,i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i)).next(()=>Ti.forEach(t.xn,i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))}catch(e){if(!Di(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.qn.get(e),i=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(i);n.qn=n.qn.insert(e,s)}}}(i.localStore,r))}async function ta(e,t){const n=w(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await Ws(n.localStore,t);n.currentUser=t,function(e,t){e.jo.forEach(e=>{e.forEach(e=>{e.reject(new E(k.CANCELLED,t))})}),e.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ea(n,e.Gn)}}function na(e,t){const n=w(e),i=n.Uo.get(t);if(i&&i.$o)return an().add(i.key);{let e=an();const i=n.Mo.get(t);if(!i)return e;for(const t of i){const i=n.Oo.get(t);e=e.unionWith(i.view.Po)}return e}}async function ia(e,t){const n=w(e),i=await Zs(n.localStore,t.query,!0),s=t.view.ko(i);return n.isPrimaryClient&&Jo(n,t.targetId,s.Co),s}async function sa(e){const t=w(e);return tr(t.localStore).then(e=>ea(t,e))}async function ra(e,t,n,i){const s=w(e),r=await function(e,t){const n=w(e),i=w(n.An);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>i.Zt(e,t).next(t=>t?n.Wn.vn(e,t):Ti.resolve(null)))}(s.localStore,t);null!==r?("pending"===n?await to(s.remoteStore):"acknowledged"===n||"rejected"===n?(Go(s,t,i||null),Ko(s,t),function(e,t){w(w(e).An).ee(t)}(s.localStore,t)):y(),await ea(s,r)):p("SyncEngine","Cannot apply mutation batch with id: "+t)}async function oa(e,t){const n=w(e);if(da(n),fa(n),!0===t&&!0!==n.Wo){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await aa(n,e.toArray());n.Wo=!0,await uo(n.remoteStore,!0);for(const i of t)Vr(n.remoteStore,i)}else if(!1===t&&!1!==n.Wo){const e=[];let t=Promise.resolve();n.Mo.forEach((i,s)=>{n.sharedClientState.isLocalQueryTarget(s)?e.push(s):t=t.then(()=>(Qo(n,s),Xs(n.localStore,s,!0))),qr(n.remoteStore,s)}),await t,await aa(n,e),function(e){const t=w(e);t.Uo.forEach((e,n)=>{qr(t.remoteStore,n)}),t.qo.hs(),t.Uo=new Map,t.Bo=new Gt(ae.comparator)}(n),n.Wo=!1,await uo(n.remoteStore,!1)}}async function aa(e,t,n){const i=w(e),s=[],r=[];for(const o of t){let e;const t=i.Mo.get(o);if(t&&0!==t.length){e=await Js(i.localStore,nt(t[0]));for(const e of t){const t=i.Oo.get(e),n=await ia(i,t);n.snapshot&&r.push(n.snapshot)}}else{const t=await er(i.localStore,o);e=await Js(i.localStore,t),await Bo(i,ca(t),o,!1)}s.push(e)}return i.Fo.Pr(r),s}function ca(e){return Ge(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function la(e){const t=w(e);return w(w(t.localStore).persistence).Tn()}async function ua(e,t,n,i){const s=w(e);if(s.Wo)p("SyncEngine","Ignoring unexpected query state notification.");else if(s.Mo.has(t))switch(n){case"current":case"not-current":{const e=await tr(s.localStore),i=un.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await ea(s,e,i);break}case"rejected":await Xs(s.localStore,t,!0),Qo(s,t,i);break;default:y()}}async function ha(e,t,n){const i=da(e);if(i.Wo){for(const e of t){if(i.Mo.has(e)){p("SyncEngine","Adding an already active target "+e);continue}const t=await er(i.localStore,e),n=await Js(i.localStore,t);await Bo(i,ca(t),n.targetId,!1),Vr(i.remoteStore,n)}for(const e of n)i.Mo.has(e)&&await Xs(i.localStore,e,!1).then(()=>{qr(i.remoteStore,e),Qo(i,e)}).catch(ys)}}function da(e){const t=w(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=$o.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=na.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=qo.bind(null,t),t.Fo.Pr=Eo.bind(null,t.eventManager),t.Fo.zo=Io.bind(null,t.eventManager),t}function fa(e){const t=w(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ho.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Wo.bind(null,t),t}function pa(e,t,n){const i=w(e);(async function(e,t,n){try{const i=await t.getMetadata();if(await function(e,t){const n=w(e),i=Tn(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.Ye.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(i)>=0)}(e.localStore,i))return await t.close(),void n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(i));n._updateProgress(Do(i));const s=new Ao(i,e.localStore,t.k);let r=await t.Ho();for(;r;){const e=await s.yo(r);e&&n._updateProgress(e),r=await t.Ho()}const o=await s.complete();await ea(e,o.In,void 0),await function(e,t){const n=w(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n.Ye.saveBundleMetadata(e,t))}(e.localStore,i),n._completeWith(o.progress)}catch(e){g("SyncEngine","Loading bundle failed with "+e),n._failWith(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(i,t,n).then(()=>{i.sharedClientState.notifyBundleLoaded()})}class ma{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Mr(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return Hs(this.persistence,new Vs,e.initialUser,this.k)}Yo(e){return new dr(pr.ks,this.k)}Jo(e){return new Ir}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ga extends ma{constructor(e,t,n){super(),this.ta=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await nr(this.localStore),await this.ta.initialize(this,e),await fa(this.ta.syncEngine),await to(this.ta.remoteStore),await this.persistence.sn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Zo(e){return Hs(this.persistence,new Vs,e.initialUser,this.k)}Xo(e){const t=this.persistence.referenceDelegate.garbageCollector;return new ws(t,e.asyncQueue)}Yo(e){const t=Bs(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?rs.withCacheSize(this.cacheSizeBytes):rs.DEFAULT;return new Ns(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Dr(),xr(),this.k,this.sharedClientState,!!this.forceOwnership)}Jo(e){return new Ir}}class va extends ga{constructor(e,t){super(e,t,!1),this.ta=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ta.syncEngine;this.sharedClientState instanceof Er&&(this.sharedClientState.syncEngine={mi:ra.bind(null,t),gi:ua.bind(null,t),yi:ha.bind(null,t),Tn:la.bind(null,t),_i:sa.bind(null,t)},await this.sharedClientState.start()),await this.persistence.sn(async e=>{await oa(this.ta.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())})}Jo(e){const t=Dr();if(!Er.bt(t))throw new E(k.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Bs(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Er(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class ya{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Vo(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ta.bind(null,this.syncEngine),await uo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new _o}createDatastore(e){const t=Mr(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new Ar(i));var i;return function(e,t,n,i){return new jr(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,i=e.asyncQueue,s=e=>Vo(this.syncEngine,e,0),r=Cr.bt()?new Cr:new Tr,new Fr(t,n,i,s,r);var t,n,i,s,r}createSyncEngine(e,t){return function(e,t,n,i,s,r,o){const a=new Po(e,t,n,i,s,r);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=w(e);p("RemoteStore","RemoteStore shutting down."),t.Gr.add(5),await $r(t),t.Hr.shutdown(),t.Jr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const i={value:e.slice(n,n+t),done:!1};return n+=t,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ea(this.observer.next,e)}error(e){this.observer.error?this.ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}na(){this.muted=!0}ea(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t){this.sa=e,this.k=t,this.metadata=new I,this.buffer=new Uint8Array,this.ia=new TextDecoder("utf-8"),this.ra().then(e=>{e&&e._o()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==e?void 0:e.payload)))},e=>this.metadata.reject(e))}close(){return this.sa.cancel()}async getMetadata(){return this.metadata.promise}async Ho(){return await this.getMetadata(),this.ra()}async ra(){const e=await this.oa();if(null===e)return null;const t=this.ia.decode(e),n=Number(t);isNaN(n)&&this.aa(`length string (${t}) is not valid number`);const i=await this.ca(n);return new Oo(JSON.parse(i),e.length+n)}ua(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async oa(){for(;this.ua()<0;)if(await this.ha())break;if(0===this.buffer.length)return null;const e=this.ua();e<0&&this.aa("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ca(e){for(;this.buffer.length<e;)await this.ha()&&this.aa("Reached the end of bundle when more is expected.");const t=this.ia.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}aa(e){throw this.sa.cancel(),new Error("Invalid bundle format: "+e)}async ha(){const e=await this.sa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new E(k.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=w(e),i=Mn(n.k)+"/documents",s={documents:t.map(e=>Sn(n.k,e))},r=await n.ji("BatchGetDocuments",i,s),o=new Map;r.forEach(e=>{const t=Pn(n.k,e);o.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=o.get(e.toString());b(!!t),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new $t(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=ae.fromPath(t);this.mutations.push(new Vt(n,this.precondition(n)))}),await async function(e,t){const n=w(e),i=Mn(n.k)+"/documents",s={writes:t.map(e=>Bn(n.k,e))};await n.Bi("Commit",i,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw y();t=U.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new E(k.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?St.updateTime(t):St.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(U.min()))throw new E(k.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return St.updateTime(t)}return St.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t,n,i){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=i,this.la=5,this.ur=new Lr(this.asyncQueue,"transaction_retry")}run(){this.la-=1,this.fa()}fa(){this.ur.Zi(async()=>{const e=new ka(this.datastore),t=this.da(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.wa(e)}))}).catch(e=>{this.wa(e)})})}da(e){try{const t=this.updateFunction(e);return!se(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}wa(e){this.la>0&&this._a(e)?(this.la-=1,this.asyncQueue.enqueueAndForget(()=>(this.fa(),Promise.resolve()))):this.deferred.reject(e)}_a(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!zt(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=l.UNAUTHENTICATED,this.clientId=N.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=mo(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Ta(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async e=>{i.isEqual(e)||(await Ws(t.localStore,e),i=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Ca(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Oa(e);p("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener(e=>async function(e,t){const n=w(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const i=Gr(n);n.Gr.add(3),await $r(n),i&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Gr.delete(3),await Ur(n)}(t.remoteStore,e)),e.onlineComponents=t}async function Oa(e){return e.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await Ta(e,new ma)),e.offlineComponents}async function Sa(e){return e.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await Ca(e,new ya)),e.onlineComponents}function Aa(e){return Oa(e).then(e=>e.persistence)}function Da(e){return Oa(e).then(e=>e.localStore)}function xa(e){return Sa(e).then(e=>e.remoteStore)}function Ma(e){return Sa(e).then(e=>e.syncEngine)}async function La(e){const t=await Sa(e),n=t.eventManager;return n.onListen=jo.bind(null,t.syncEngine),n.onUnlisten=Fo.bind(null,t.syncEngine),n}function Ra(e){return e.asyncQueue.enqueue(async()=>{const t=await Aa(e),n=await xa(e);return t.setNetworkEnabled(!0),function(e){const t=w(e);return t.Gr.delete(0),Ur(t)}(n)})}function Na(e){return e.asyncQueue.enqueue(async()=>{const t=await Aa(e),n=await xa(e);return t.setNetworkEnabled(!1),async function(e){const t=w(e);t.Gr.add(0),await $r(t),t.Jr.set("Offline")}(n)})}function Pa(e,t){const n=new I;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const i=await function(e,t){const n=w(e);return n.persistence.runTransaction("read document","readonly",e=>n.Wn.Rn(e,t))}(e,t);i.isFoundDocument()?n.resolve(i):i.isNoDocument()?n.resolve(null):n.reject(new E(k.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const i=mo(e,`Failed to get document '${t} from cache`);n.reject(i)}}(await Da(e),t,n)),n.promise}function ja(e,t,n={}){const i=new I;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,i,s){const r=new _a({next:r=>{t.enqueueAndForget(()=>ko(e,o));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new E(k.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new E(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:e=>s.reject(e)}),o=new Co(Qe(n.path),r,{includeMetadataChanges:!0,wo:!0});return wo(e,o)}(await La(e),e.asyncQueue,t,n,i)),i.promise}function Ba(e,t){const n=new I;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const i=await Zs(e,t,!0),s=new Lo(t,i.zn),r=s.bo(i.documents),o=s.applyChanges(r,!1);n.resolve(o.snapshot)}catch(e){const i=mo(e,`Failed to execute query '${t} against cache`);n.reject(i)}}(await Da(e),t,n)),n.promise}function Fa(e,t,n={}){const i=new I;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,i,s){const r=new _a({next:n=>{t.enqueueAndForget(()=>ko(e,o)),n.fromCache&&"server"===i.source?s.reject(new E(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new Co(n,r,{includeMetadataChanges:!0,wo:!0});return wo(e,o)}(await La(e),e.asyncQueue,t,n,i)),i.promise}function Ua(e,t){const n=new _a(t);return e.asyncQueue.enqueueAndForget(async()=>function(e,t){w(e).io.add(t),t.next()}(await La(e),n)),()=>{n.na(),e.asyncQueue.enqueueAndForget(async()=>function(e,t){w(e).io.delete(t)}(await La(e),n))}}function $a(e,t){const n=new I;return e.asyncQueue.enqueueAndForget(async()=>{const i=await function(e){return Sa(e).then(e=>e.datastore)}(e);new Ea(e.asyncQueue,i,t,n).run()}),n.promise}function Va(e,t,n,i){const s=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new wa(e,t)}(function(e,t){if(e instanceof Uint8Array)return ba(e,t);if(e instanceof ArrayBuffer)return ba(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,Mr(t));e.asyncQueue.enqueueAndForget(async()=>{pa(await Ma(e),s,i)})}function qa(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const n=w(e);return n.persistence.runTransaction("Get named query","readonly",e=>n.Ye.getNamedQuery(e,t))}(await Da(e),t))}class Ha{constructor(e,t,n,i,s,r,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Wa{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Wa&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(e,t,n){if(!n)throw new E(k.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ga(e,t,n,i){if(!0===t&&!0===i)throw new E(k.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Qa(e){if(!ae.isDocumentKey(e))throw new E(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ya(e){if(ae.isDocumentKey(e))throw new E(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ja(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":y()}function Xa(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ja(e);throw new E(k.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Za(e,t){if(t<=0)throw new E(k.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new E(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new E(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Ga("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ec({}),this._settingsFrozen=!1,e instanceof Wa?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new E(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wa(e.options.projectId)}(e))}get app(){if(!this._app)throw new E(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new E(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ec(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new C;switch(e.type){case"gapi":const t=e.client;return b(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new D(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new E(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=za.get(e);t&&(p("ComponentProvider","Removing Datastore"),za.delete(e),t.terminate())}(this),Promise.resolve()}}function nc(e,t,n,i={}){var s;const r=(e=Xa(e,tc))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==t&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=l.MOCK_USER;else{t=Object(o["f"])(i.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new E(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new l(r)}e._authCredentials=new O(new T(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ic(this.firestore,e,this._key)}}class sc{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new sc(this.firestore,e,this._query)}}class rc extends sc{constructor(e,t,n){super(e,t,Qe(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ic(this.firestore,null,new ae(e))}withConverter(e){return new rc(this.firestore,e,this._path)}}function oc(e,t,...n){if(e=Object(o["k"])(e),Ka("collection","path",t),e instanceof tc){const i=W.fromString(t,...n);return Ya(i),new rc(e,null,i)}{if(!(e instanceof ic||e instanceof rc))throw new E(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(W.fromString(t,...n));return Ya(i),new rc(e.firestore,null,i)}}function ac(e,t){if(e=Xa(e,tc),Ka("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new E(k.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new sc(e,null,function(e){return new Ke(W.emptyPath(),e)}(t))}function cc(e,t,...n){if(e=Object(o["k"])(e),1===arguments.length&&(t=N.A()),Ka("doc","path",t),e instanceof tc){const i=W.fromString(t,...n);return Qa(i),new ic(e,null,new ae(i))}{if(!(e instanceof ic||e instanceof rc))throw new E(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(W.fromString(t,...n));return Qa(i),new ic(e.firestore,e instanceof rc?e.converter:null,new ae(i))}}function lc(e,t){return e=Object(o["k"])(e),t=Object(o["k"])(t),(e instanceof ic||e instanceof rc)&&(t instanceof ic||t instanceof rc)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function uc(e,t){return e=Object(o["k"])(e),t=Object(o["k"])(t),e instanceof sc&&t instanceof sc&&e.firestore===t.firestore&&st(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class hc{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Lr(this,"async_queue_retry"),this.Ra=()=>{const e=xr();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ur.er()};const e=xr();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const t=xr();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise(()=>{});const t=new I;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ga.push(e),this.va()))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!Di(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(e){const t=this.ma.then(()=>(this.Ea=!0,e().catch(e=>{this.Ta=e,this.Ea=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw m("INTERNAL UNHANDLED ERROR: ",t),e}).then(e=>(this.Ea=!1,e))));return this.ma=t,t}enqueueAfterDelay(e,t,n){this.Pa(),this.Aa.indexOf(e)>-1&&(t=0);const i=po.createAndSchedule(this,e,t,n,e=>this.Va(e));return this.pa.push(i),i}Pa(){this.Ta&&y()}verifyOperationInProgress(){}async Sa(){let e;do{e=this.ma,await e}while(e!==this.ma)}Da(e){for(const t of this.pa)if(t.timerId===e)return!0;return!1}Ca(e){return this.Sa().then(()=>{this.pa.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.pa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Sa()})}Na(e){this.Aa.push(e)}Va(e){const t=this.pa.indexOf(e);this.pa.splice(t,1)}}function dc(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const i of t)if(i in n&&"function"==typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class fc{constructor(){this._progressObserver={},this._taskCompletionResolver=new I,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=-1;class mc extends tc{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new hc,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||vc(this),this._firestoreClient.terminate()}}function gc(e){return e._firestoreClient||vc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function vc(e){var t;const n=e._freezeSettings(),i=function(e,t,n,i){return new Ha(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Ia(e._authCredentials,e._appCheckCredentials,e._queue,i)}function yc(e,t){Oc(e=Xa(e,mc));const n=gc(e),i=e._freezeSettings(),s=new ya;return _c(n,s,new ga(s,i.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function bc(e){Oc(e=Xa(e,mc));const t=gc(e),n=e._freezeSettings(),i=new ya;return _c(t,i,new va(i,n.cacheSizeBytes))}function _c(e,t,n){const i=new I;return e.asyncQueue.enqueue(async()=>{try{await Ta(e,n),await Ca(e,t),i.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===k.FAILED_PRECONDITION||e.code===k.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),i.reject(e)}}).then(()=>i.promise)}function wc(e){if(e._initialized&&!e._terminated)throw new E(k.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new I;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!Oi.bt())return Promise.resolve();const t=e+"main";await Oi.delete(t)}(Bs(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function kc(e){return function(e){const t=new I;return e.asyncQueue.enqueueAndForget(async()=>zo(await Ma(e),t)),t.promise}(gc(e=Xa(e,mc)))}function Ec(e){return Ra(gc(e=Xa(e,mc)))}function Ic(e){return Na(gc(e=Xa(e,mc)))}function Tc(e,t){const n=gc(e=Xa(e,mc)),i=new fc;return Va(n,e._databaseId,t,i),i}function Cc(e,t){return qa(gc(e=Xa(e,mc)),t).then(t=>t?new sc(e,null,t.query):null)}function Oc(e){if(e._initialized||e._terminated)throw new E(k.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new E(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ac{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ac(Y.fromBase64String(e))}catch(e){throw new E(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Ac(Y.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return P(this._lat,e._lat)||P(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=/^__.*__$/;class Lc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new jt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Pt(e,this.data,t,this.fieldTransforms)}}class Rc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new jt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Nc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class Pc{constructor(e,t,n,i,s,r){this.settings=e,this.databaseId=t,this.k=n,this.ignoreUndefinedProperties=i,void 0===s&&this.ka(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new Pc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.$a({path:n,Oa:!1});return i.Ma(e),i}La(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.$a({path:n,Oa:!1});return i.ka(),i}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return nl(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(0===e.length)throw this.Ua("Document fields must not be empty");if(Nc(this.xa)&&Mc.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class jc{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.k=n||Mr(e)}ja(e,t,n,i=!1){return new Pc({xa:e,methodName:t,Ka:n,path:K.emptyPath(),Oa:!1,qa:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Bc(e){const t=e._freezeSettings(),n=Mr(e._databaseId);return new jc(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Fc(e,t,n,i,s,r={}){const o=e.ja(r.merge||r.mergeFields?2:0,t,n,s);Xc("Data must be an object, but it was:",o,i);const a=Yc(i,o);let c,l;if(r.merge)c=new G(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const e=[];for(const i of r.mergeFields){const s=Zc(t,i,n);if(!o.contains(s))throw new E(k.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);il(e,s)||e.push(s)}c=new G(e),l=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,l=o.fieldTransforms;return new Lc(new ke(a),c,l)}class Uc extends Dc{_toFieldTransform(e){if(2!==e.xa)throw 1===e.xa?e.Ua(this._methodName+"() can only appear at the top level of your update data"):e.Ua(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Uc}}function $c(e,t,n){return new Pc({xa:3,Ka:t.settings.Ka,methodName:e._methodName,Oa:n},t.databaseId,t.k,t.ignoreUndefinedProperties)}class Vc extends Dc{_toFieldTransform(e){return new Tt(e.path,new vt)}isEqual(e){return e instanceof Vc}}class qc extends Dc{constructor(e,t){super(e),this.Qa=t}_toFieldTransform(e){const t=$c(this,e,!0),n=this.Qa.map(e=>Qc(e,t)),i=new yt(n);return new Tt(e.path,i)}isEqual(e){return this===e}}class Hc extends Dc{constructor(e,t){super(e),this.Qa=t}_toFieldTransform(e){const t=$c(this,e,!0),n=this.Qa.map(e=>Qc(e,t)),i=new _t(n);return new Tt(e.path,i)}isEqual(e){return this===e}}class Wc extends Dc{constructor(e,t){super(e),this.Wa=t}_toFieldTransform(e){const t=new kt(e.k,dt(e.k,this.Wa));return new Tt(e.path,t)}isEqual(e){return this===e}}function zc(e,t,n,i){const s=e.ja(1,t,n);Xc("Data must be an object, but it was:",s,i);const r=[],a=ke.empty();V(i,(e,i)=>{const c=tl(t,e,n);i=Object(o["k"])(i);const l=s.La(c);if(i instanceof Uc)r.push(c);else{const e=Qc(i,l);null!=e&&(r.push(c),a.set(c,e))}});const c=new G(r);return new Rc(a,c,s.fieldTransforms)}function Kc(e,t,n,i,s,r){const a=e.ja(1,t,n),c=[Zc(t,i,n)],l=[s];if(r.length%2!=0)throw new E(k.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<r.length;o+=2)c.push(Zc(t,r[o])),l.push(r[o+1]);const u=[],h=ke.empty();for(let f=c.length-1;f>=0;--f)if(!il(u,c[f])){const e=c[f];let t=l[f];t=Object(o["k"])(t);const n=a.La(e);if(t instanceof Uc)u.push(e);else{const i=Qc(t,n);null!=i&&(u.push(e),h.set(e,i))}}const d=new G(u);return new Rc(h,d,a.fieldTransforms)}function Gc(e,t,n,i=!1){return Qc(n,e.ja(i?4:3,t))}function Qc(e,t){if(Jc(e=Object(o["k"])(e)))return Xc("Unsupported field value:",t,e),Yc(e,t);if(e instanceof Dc)return function(e,t){if(!Nc(t.xa))throw t.Ua(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.Ua(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Oa&&4!==t.xa)throw t.Ua("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const s of e){let e=Qc(s,t.Ba(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(o["k"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return dt(t.k,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=F.fromDate(e);return{timestampValue:kn(t.k,n)}}if(e instanceof F){const n=new F(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:kn(t.k,n)}}if(e instanceof xc)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Ac)return{bytesValue:En(t.k,e._byteString)};if(e instanceof ic){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.Ua(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Cn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Ua("Unsupported field value: "+Ja(e))}(e,t)}function Yc(e,t){const n={};return q(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):V(e,(e,i)=>{const s=Qc(i,t.Fa(e));null!=s&&(n[e]=s)}),{mapValue:{fields:n}}}function Jc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof F||e instanceof xc||e instanceof Ac||e instanceof ic||e instanceof Dc)}function Xc(e,t,n){if(!Jc(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=Ja(n);throw"an object"===i?t.Ua(e+" a custom object"):t.Ua(e+" "+i)}}function Zc(e,t,n){if((t=Object(o["k"])(t))instanceof Sc)return t._internalPath;if("string"==typeof t)return tl(e,t);throw nl("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const el=new RegExp("[~\\*/\\[\\]]");function tl(e,t,n){if(t.search(el)>=0)throw nl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Sc(...t.split("."))._internalPath}catch(i){throw nl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function nl(e,t,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=" in field "+i),o&&(c+=" in document "+s),c+=")"),new E(k.INVALID_ARGUMENT,a+e+c)}function il(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ic(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new rl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ol("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class rl extends sl{data(){return super.data()}}function ol(e,t){return"string"==typeof t?tl(e,t):t instanceof Sc?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cl extends sl{constructor(e,t,n,i,s,r){super(e,t,n,i,r),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ll(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ol("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ll extends cl{data(e={}){return super.data(e)}}class ul{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new al(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new ll(this._firestore,this._userDataWriter,n.key,n,new al(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>({type:"added",doc:new ll(e._firestore,e._userDataWriter,n.doc.key,n.doc,new al(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const i=new ll(e._firestore,e._userDataWriter,t.doc.key,t.doc,new al(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,r=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),r=n.indexOf(t.doc.key)),{type:hl(t.type),doc:i,oldIndex:s,newIndex:r}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function hl(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}function dl(e,t){return e instanceof cl&&t instanceof cl?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof ul&&t instanceof ul&&e._firestore===t._firestore&&uc(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(e){if(Je(e)&&0===e.explicitOrderBy.length)throw new E(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pl{}function ml(e,...t){for(const n of t)e=n._apply(e);return e}class gl extends pl{constructor(e,t,n){super(),this.Ga=e,this.za=t,this.Ha=n,this.type="where"}_apply(e){const t=Bc(e.firestore),n=function(e,t,n,i,s,r,o){let a;if(s.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new E(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on FieldPath.documentId().`);if("in"===r||"not-in"===r){xl(o,r);const t=[];for(const n of o)t.push(Dl(i,e,n));a={arrayValue:{values:t}}}else a=Dl(i,e,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||xl(o,r),a=Gc(n,t,o,"in"===r||"not-in"===r);const c=xe.create(s,r,a);return function(e,t){if(t.V()){const n=Ze(e);if(null!==n&&!n.isEqual(t.field))throw new E(k.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const i=Xe(e);null!==i&&Ml(e,t.field,i)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new E(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new E(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.Ga,this.za,this.Ha);return new sc(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Ke(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function vl(e,t,n){const i=t,s=ol("where",e);return new gl(s,i,n)}class yl extends pl{constructor(e,t){super(),this.Ga=e,this.Ja=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new E(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new E(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new qe(t,n);return function(e,t){if(null===Xe(e)){const n=Ze(e);null!==n&&Ml(e,n,t.field)}}(e,i),i}(e._query,this.Ga,this.Ja);return new sc(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Ke(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function bl(e,t="asc"){const n=t,i=ol("orderBy",e);return new yl(i,n)}class _l extends pl{constructor(e,t,n){super(),this.type=e,this.Ya=t,this.Xa=n}_apply(e){return new sc(e.firestore,e.converter,it(e._query,this.Ya,this.Xa))}}function wl(e){return Za("limit",e),new _l("limit",e,"F")}function kl(e){return Za("limitToLast",e),new _l("limitToLast",e,"L")}class El extends pl{constructor(e,t,n){super(),this.type=e,this.Za=t,this.tc=n}_apply(e){const t=Al(e,this.type,this.Za,this.tc);return new sc(e.firestore,e.converter,function(e,t){return new Ke(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Il(...e){return new El("startAt",e,!0)}function Tl(...e){return new El("startAfter",e,!1)}class Cl extends pl{constructor(e,t,n){super(),this.type=e,this.Za=t,this.tc=n}_apply(e){const t=Al(e,this.type,this.Za,this.tc);return new sc(e.firestore,e.converter,function(e,t){return new Ke(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Ol(...e){return new Cl("endBefore",e,!0)}function Sl(...e){return new Cl("endAt",e,!1)}function Al(e,t,n,i){if(n[0]=Object(o["k"])(n[0]),n[0]instanceof sl)return function(e,t,n,i,s){if(!i)throw new E(k.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const r=[];for(const o of tt(e))if(o.field.isKeyField())r.push(me(t,i.key));else{const e=i.data.field(o.field);if(te(e))throw new E(k.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new E(k.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}r.push(e)}return new $e(r,s)}(e._query,e.firestore._databaseId,t,n[0]._document,i);{const s=Bc(e.firestore);return function(e,t,n,i,s,r){const o=e.explicitOrderBy;if(s.length>o.length)throw new E(k.INVALID_ARGUMENT,`Too many arguments provided to ${i}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<s.length;c++){const r=s[c];if(o[c].field.isKeyField()){if("string"!=typeof r)throw new E(k.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${i}(), but got a ${typeof r}`);if(!et(e)&&-1!==r.indexOf("/"))throw new E(k.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${i}() must be a plain document ID, but '${r}' contains a slash.`);const n=e.path.child(W.fromString(r));if(!ae.isDocumentKey(n))throw new E(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${i}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new ae(n);a.push(me(t,s))}else{const e=Gc(n,i,r);a.push(e)}}return new $e(a,r)}(e._query,e.firestore._databaseId,s,t,n,i)}}function Dl(e,t,n){if("string"==typeof(n=Object(o["k"])(n))){if(""===n)throw new E(k.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!et(t)&&-1!==n.indexOf("/"))throw new E(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(W.fromString(n));if(!ae.isDocumentKey(i))throw new E(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return me(e,new ae(i))}if(n instanceof ic)return me(e,n._key);throw new E(k.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ja(n)}.`)}function xl(e,t){if(!Array.isArray(e)||0===e.length)throw new E(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new E(k.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ml(e,t,n){if(!n.isEqual(t))throw new E(k.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{convertValue(e,t="none"){switch(ce(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Z(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ee(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw y()}}convertObject(e,t){const n={};return V(e.fields,(e,i)=>{n[e]=this.convertValue(i,t)}),n}convertGeoPoint(e){return new xc(Z(e.latitude),Z(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ne(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ie(e));default:return null}}convertTimestamp(e){const t=X(e);return new F(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=W.fromString(e);b(ti(n));const i=new Wa(n.get(1),n.get(3)),s=new ae(n.popFirst(5));return i.isEqual(t)||m(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}class Nl extends Ll{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ac(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ic(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Bc(e)}set(e,t,n){this._verifyNotCommitted();const i=jl(e,this._firestore),s=Rl(i.converter,t,n),r=Fc(this._dataReader,"WriteBatch.set",i._key,s,null!==i.converter,n);return this._mutations.push(r.toMutation(i._key,St.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const s=jl(e,this._firestore);let r;return r="string"==typeof(t=Object(o["k"])(t))||t instanceof Sc?Kc(this._dataReader,"WriteBatch.update",s._key,t,n,i):zc(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(r.toMutation(s._key,St.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=jl(e,this._firestore);return this._mutations=this._mutations.concat(new $t(t._key,St.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new E(k.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function jl(e,t){if((e=Object(o["k"])(e)).firestore!==t)throw new E(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(e){e=Xa(e,ic);const t=Xa(e.firestore,mc);return ja(gc(t),e._key).then(n=>Xl(t,e,n))}class Fl extends Ll{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ac(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ic(this.firestore,null,t)}}function Ul(e){e=Xa(e,ic);const t=Xa(e.firestore,mc),n=gc(t),i=new Fl(t);return Pa(n,e._key).then(n=>new cl(t,i,e._key,n,new al(null!==n&&n.hasLocalMutations,!0),e.converter))}function $l(e){e=Xa(e,ic);const t=Xa(e.firestore,mc);return ja(gc(t),e._key,{source:"server"}).then(n=>Xl(t,e,n))}function Vl(e){e=Xa(e,sc);const t=Xa(e.firestore,mc),n=gc(t),i=new Fl(t);return fl(e._query),Fa(n,e._query).then(n=>new ul(t,i,e,n))}function ql(e){e=Xa(e,sc);const t=Xa(e.firestore,mc),n=gc(t),i=new Fl(t);return Ba(n,e._query).then(n=>new ul(t,i,e,n))}function Hl(e){e=Xa(e,sc);const t=Xa(e.firestore,mc),n=gc(t),i=new Fl(t);return Fa(n,e._query,{source:"server"}).then(n=>new ul(t,i,e,n))}function Wl(e,t,n){e=Xa(e,ic);const i=Xa(e.firestore,mc),s=Rl(e.converter,t,n);return Jl(i,[Fc(Bc(i),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,St.none())])}function zl(e,t,n,...i){e=Xa(e,ic);const s=Xa(e.firestore,mc),r=Bc(s);let a;return a="string"==typeof(t=Object(o["k"])(t))||t instanceof Sc?Kc(r,"updateDoc",e._key,t,n,i):zc(r,"updateDoc",e._key,t),Jl(s,[a.toMutation(e._key,St.exists(!0))])}function Kl(e){return Jl(Xa(e.firestore,mc),[new $t(e._key,St.none())])}function Gl(e,t){const n=Xa(e.firestore,mc),i=cc(e),s=Rl(e.converter,t);return Jl(n,[Fc(Bc(e.firestore),"addDoc",i._key,s,null!==e.converter,{}).toMutation(i._key,St.exists(!1))]).then(()=>i)}function Ql(e,...t){var n,i,s;e=Object(o["k"])(e);let r={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||dc(t[a])||(r=t[a],a++);const c={includeMetadataChanges:r.includeMetadataChanges};if(dc(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(i=e.error)||void 0===i?void 0:i.bind(e),t[a+2]=null===(s=e.complete)||void 0===s?void 0:s.bind(e)}let l,u,h;if(e instanceof ic)u=Xa(e.firestore,mc),h=Qe(e._key.path),l={next:n=>{t[a]&&t[a](Xl(u,e,n))},error:t[a+1],complete:t[a+2]};else{const n=Xa(e,sc);u=Xa(n.firestore,mc),h=n._query;const i=new Fl(u);l={next:e=>{t[a]&&t[a](new ul(u,i,n,e))},error:t[a+1],complete:t[a+2]},fl(e._query)}return function(e,t,n,i){const s=new _a(i),r=new Co(t,s,n);return e.asyncQueue.enqueueAndForget(async()=>wo(await La(e),r)),()=>{s.na(),e.asyncQueue.enqueueAndForget(async()=>ko(await La(e),r))}}(gc(u),h,c,l)}function Yl(e,t){return Ua(gc(e=Xa(e,mc)),dc(t)?t:{next:t})}function Jl(e,t){return function(e,t){const n=new I;return e.asyncQueue.enqueueAndForget(async()=>Uo(await Ma(e),t,n)),n.promise}(gc(e),t)}function Xl(e,t,n){const i=n.docs.get(t._key),s=new Fl(e);return new cl(e,s,t._key,i,new al(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Bc(e)}get(e){const t=jl(e,this._firestore),n=new Nl(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return y();const i=e[0];if(i.isFoundDocument())return new sl(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new sl(this._firestore,n,t._key,null,t.converter);throw y()})}set(e,t,n){const i=jl(e,this._firestore),s=Rl(i.converter,t,n),r=Fc(this._dataReader,"Transaction.set",i._key,s,null!==i.converter,n);return this._transaction.set(i._key,r),this}update(e,t,n,...i){const s=jl(e,this._firestore);let r;return r="string"==typeof(t=Object(o["k"])(t))||t instanceof Sc?Kc(this._dataReader,"Transaction.update",s._key,t,n,i):zc(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,r),this}delete(e){const t=jl(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=jl(e,this._firestore),n=new Fl(this._firestore);return super.get(e).then(e=>new cl(this._firestore,n,t._key,e._document,new al(!1,!1),t.converter))}}function eu(e,t){return $a(gc(e=Xa(e,mc)),n=>t(new Zl(e,n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(){return new Uc("deleteField")}function nu(){return new Vc("serverTimestamp")}function iu(...e){return new qc("arrayUnion",e)}function su(...e){return new Hc("arrayRemove",e)}function ru(e){return new Wc("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){u=e}(i["SDK_VERSION"]),Object(i["_registerComponent"])(new s["a"]("firestore",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=new mc(i,new S(e.getProvider("auth-internal")),new M(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s},"PUBLIC")),Object(i["registerVersion"])(c,"3.4.1",e),Object(i["registerVersion"])(c,"3.4.1","esm2017")}()}).call(this,n("4362"))},1862:function(e,t,n){"use strict";var i=n("7ded"),s=n("0829"),r=n("1fd5"),o=n("22e5");const a="@firebase/firestore-compat",c="0.1.10";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new s["g"]("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(){if("undefined"===typeof Uint8Array)throw new s["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function h(){if(!Object(s["r"])())throw new s["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(e){this._delegate=e}static fromBase64String(e){return h(),new d(s["b"].fromBase64String(e))}static fromUint8Array(e){return u(),new d(s["b"].fromUint8Array(e))}toBase64(){return h(),this._delegate.toBase64()}toUint8Array(){return u(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e){return p(e,["next","error","complete"])}function p(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const i of t)if(i in n&&"function"===typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{enableIndexedDbPersistence(e,t){return Object(s["F"])(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Object(s["G"])(e._delegate)}clearIndexedDbPersistence(e){return Object(s["x"])(e._delegate)}}class g{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof s["m"]||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Object(s["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Object(s["A"])(this._delegate,e,t,n)}enableNetwork(){return Object(s["H"])(this._delegate)}disableNetwork(){return Object(s["D"])(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Object(s["t"])("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(s["lb"])(this._delegate)}onSnapshotsInSync(e){return Object(s["Y"])(this._delegate,e)}get app(){if(!this._appCompat)throw new s["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new x(this,Object(s["y"])(this._delegate,e))}catch(t){throw E(t,"collection()","Firestore.collection()")}}doc(e){try{return new k(this,Object(s["E"])(this._delegate,e))}catch(t){throw E(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new S(this,Object(s["z"])(this._delegate,e))}catch(t){throw E(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Object(s["db"])(this._delegate,t=>e(new b(this,t)))}batch(){return Object(s["K"])(this._delegate),new _(new s["l"](this._delegate,e=>Object(s["L"])(this._delegate,e)))}loadBundle(e){return Object(s["V"])(this._delegate,e)}namedQuery(e){return Object(s["W"])(this._delegate,e).then(e=>e?new S(this,e):null)}}class v extends s["a"]{constructor(e){super(),this.firestore=e}convertBytes(e){return new d(new s["b"](e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return k.forKey(t,this.firestore,null)}}function y(e){Object(s["gb"])(e)}class b{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new v(e)}get(e){const t=M(e);return this._delegate.get(t).then(e=>new C(this._firestore,new s["e"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,n){const i=M(e);return n?(l("Transaction.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const s=M(e);return 2===arguments.length?this._delegate.update(s,t):this._delegate.update(s,t,n,...i),this}delete(e){const t=M(e);return this._delegate.delete(t),this}}class _{constructor(e){this._delegate=e}set(e,t,n){const i=M(e);return n?(l("WriteBatch.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const s=M(e);return 2===arguments.length?this._delegate.update(s,t):this._delegate.update(s,t,n,...i),this}delete(e){const t=M(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class w{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new s["i"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new O(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=w.INSTANCES;let i=n.get(e);i||(i=new WeakMap,n.set(e,i));let s=i.get(t);return s||(s=new w(e,new v(e),t),i.set(t,s)),s}}w.INSTANCES=new WeakMap;class k{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}static forPath(e,t,n){if(e.length%2!==0)throw new s["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new k(t,new s["d"](t._delegate,n,new s["n"](e)))}static forKey(e,t,n){return new k(t,new s["d"](t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new x(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new x(this.firestore,Object(s["y"])(this._delegate,e))}catch(t){throw E(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Object(r["k"])(e),e instanceof s["d"]&&Object(s["cb"])(this._delegate,e)}set(e,t){t=l("DocumentReference.set",t);try{return t?Object(s["fb"])(this._delegate,e,t):Object(s["fb"])(this._delegate,e)}catch(n){throw E(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Object(s["kb"])(this._delegate,e):Object(s["kb"])(this._delegate,e,t,...n)}catch(i){throw E(i,"updateDoc()","DocumentReference.update()")}}delete(){return Object(s["B"])(this._delegate)}onSnapshot(...e){const t=I(e),n=T(e,e=>new C(this.firestore,new s["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return Object(s["X"])(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(s["N"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(s["O"])(this._delegate):Object(s["M"])(this._delegate),t.then(e=>new C(this.firestore,new s["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new k(this.firestore,e?this._delegate.withConverter(w.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function E(e,t,n){return e.message=e.message.replace(t,n),e}function I(e){for(const t of e)if("object"===typeof t&&!f(t))return t;return{}}function T(e,t){var n,i;let s;return s=f(e[0])?e[0]:f(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{s.next&&s.next(t(e))},error:null===(n=s.error)||void 0===n?void 0:n.bind(s),complete:null===(i=s.complete)||void 0===i?void 0:i.bind(s)}}class C{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new k(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Object(s["hb"])(this._delegate,e._delegate)}}class O extends C{data(e){const t=this._delegate.data(e);return Object(s["q"])(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class S{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}where(e,t,n){try{return new S(this.firestore,Object(s["ab"])(this._delegate,Object(s["mb"])(e,t,n)))}catch(i){throw E(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new S(this.firestore,Object(s["ab"])(this._delegate,Object(s["Z"])(e,t)))}catch(n){throw E(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new S(this.firestore,Object(s["ab"])(this._delegate,Object(s["T"])(e)))}catch(t){throw E(t,"limit()","Query.limit()")}}limitToLast(e){try{return new S(this.firestore,Object(s["ab"])(this._delegate,Object(s["U"])(e)))}catch(t){throw E(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new S(this.firestore,Object(s["ab"])(this._delegate,Object(s["jb"])(...e)))}catch(t){throw E(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new S(this.firestore,Object(s["ab"])(this._delegate,Object(s["ib"])(...e)))}catch(t){throw E(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new S(this.firestore,Object(s["ab"])(this._delegate,Object(s["J"])(...e)))}catch(t){throw E(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new S(this.firestore,Object(s["ab"])(this._delegate,Object(s["I"])(...e)))}catch(t){throw E(t,"endAt()","Query.endAt()")}}isEqual(e){return Object(s["bb"])(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(s["Q"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(s["R"])(this._delegate):Object(s["P"])(this._delegate),t.then(e=>new D(this.firestore,new s["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){const t=I(e),n=T(e,e=>new D(this.firestore,new s["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return Object(s["X"])(this._delegate,t,n)}withConverter(e){return new S(this.firestore,e?this._delegate.withConverter(w.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class A{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new O(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class D{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new S(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new O(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new A(this._firestore,e))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new O(this._firestore,n))})}isEqual(e){return Object(s["hb"])(this._delegate,e._delegate)}}class x extends S{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new k(this.firestore,e):null}doc(e){try{return new k(this.firestore,void 0===e?Object(s["E"])(this._delegate):Object(s["E"])(this._delegate,e))}catch(t){throw E(t,"doc()","CollectionReference.doc()")}}add(e){return Object(s["u"])(this._delegate,e).then(e=>new k(this.firestore,e))}isEqual(e){return Object(s["cb"])(this._delegate,e._delegate)}withConverter(e){return new x(this.firestore,e?this._delegate.withConverter(w.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function M(e){return Object(s["p"])(e,s["d"])}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(...e){this._delegate=new s["f"](...e)}static documentId(){return new L(s["o"].keyField().canonicalString())}isEqual(e){return e=Object(r["k"])(e),e instanceof s["f"]&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this._delegate=e}static serverTimestamp(){const e=Object(s["eb"])();return e._methodName="FieldValue.serverTimestamp",new R(e)}static delete(){const e=Object(s["C"])();return e._methodName="FieldValue.delete",new R(e)}static arrayUnion(...e){const t=Object(s["w"])(...e);return t._methodName="FieldValue.arrayUnion",new R(t)}static arrayRemove(...e){const t=Object(s["v"])(...e);return t._methodName="FieldValue.arrayRemove",new R(t)}static increment(e){const t=Object(s["S"])(e);return t._methodName="FieldValue.increment",new R(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={Firestore:g,GeoPoint:s["h"],Timestamp:s["k"],Blob:d,Transaction:b,WriteBatch:_,DocumentReference:k,DocumentSnapshot:C,Query:S,QueryDocumentSnapshot:O,QuerySnapshot:D,CollectionReference:x,FieldPath:L,FieldValue:R,setLogLevel:y,CACHE_SIZE_UNLIMITED:s["c"]};function P(e,t){e.INTERNAL.registerComponent(new o["a"]("firestore-compat",e=>{const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("firestore").getImmediate();return t(n,i)},"PUBLIC").setServiceProps(Object.assign({},N)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){P(e,(e,t)=>new g(e,t,new m)),e.registerVersion(a,c)}j(i["a"])},"1f5a":function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return Be})),n.d(t,"c",(function(){return lt})),n.d(t,"d",(function(){return ft})),n.d(t,"e",(function(){return mt})),n.d(t,"f",(function(){return pt})),n.d(t,"g",(function(){return Ze})),n.d(t,"h",(function(){return dt})),n.d(t,"i",(function(){return Mi})),n.d(t,"j",(function(){return zs})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return Ii})),n.d(t,"m",(function(){return vt})),n.d(t,"n",(function(){return bt})),n.d(t,"o",(function(){return _t})),n.d(t,"p",(function(){return k})),n.d(t,"q",(function(){return xe})),n.d(t,"r",(function(){return v})),n.d(t,"s",(function(){return Nn})),n.d(t,"t",(function(){return C})),n.d(t,"u",(function(){return rs})),n.d(t,"v",(function(){return fe})),n.d(t,"x",(function(){return qt})),n.d(t,"y",(function(){return Dn})),n.d(t,"z",(function(){return qs})),n.d(t,"A",(function(){return Mn})),n.d(t,"B",(function(){return Ht})),n.d(t,"C",(function(){return Vt})),n.d(t,"D",(function(){return Le})),n.d(t,"F",(function(){return zt})),n.d(t,"G",(function(){return d})),n.d(t,"H",(function(){return Xt})),n.d(t,"I",(function(){return pn})),n.d(t,"J",(function(){return vn})),n.d(t,"K",(function(){return ss})),n.d(t,"L",(function(){return de})),n.d(t,"M",(function(){return ii})),n.d(t,"N",(function(){return Qt})),n.d(t,"O",(function(){return Rt})),n.d(t,"P",(function(){return Si})),n.d(t,"Q",(function(){return Vi})),n.d(t,"R",(function(){return ns})),n.d(t,"S",(function(){return En})),n.d(t,"T",(function(){return Nt})),n.d(t,"U",(function(){return Ai})),n.d(t,"V",(function(){return $i})),n.d(t,"W",(function(){return es})),n.d(t,"X",(function(){return Zt})),n.d(t,"Y",(function(){return $t})),n.d(t,"Z",(function(){return Gt})),n.d(t,"ab",(function(){return It})),n.d(t,"bb",(function(){return Lt})),n.d(t,"cb",(function(){return jt})),n.d(t,"db",(function(){return Kt})),n.d(t,"eb",(function(){return Yt})),n.d(t,"fb",(function(){return Oi})),n.d(t,"gb",(function(){return Ui})),n.d(t,"hb",(function(){return Xi})),n.d(t,"ib",(function(){return St})),n.d(t,"jb",(function(){return sn})),n.d(t,"kb",(function(){return rn})),n.d(t,"lb",(function(){return xi})),n.d(t,"mb",(function(){return nn})),n.d(t,"nb",(function(){return en})),n.d(t,"ob",(function(){return Wt})),n.d(t,"w",(function(){return Er})),n.d(t,"E",(function(){return wr}));var i=n("1fd5"),s=n("589b");function r(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}Object.create;Object.create;var o=n("e691"),a=n("22e5");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=u,f=h,p=new i["b"]("auth","Firebase",h()),m=new o["b"]("@firebase/auth");function g(e,...t){m.logLevel<=o["a"].ERROR&&m.error(`Auth (${s["SDK_VERSION"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e,...t){throw w(e,...t)}function y(e,...t){return w(e,...t)}function b(e,t,n){const s=Object.assign(Object.assign({},f()),{[t]:n}),r=new i["b"]("auth","Firebase",s);return r.create(t,{appName:e.name})}function _(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&v(e,"argument-error"),b(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function w(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return p.create(e,...t)}function k(e,t,...n){if(!e)throw w(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw g(t),new Error(t)}function I(e,t){e||E(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=new Map;function C(e){I(e instanceof Function,"Expected a class definition");let t=T.get(e);return t?(I(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,T.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(C);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function A(){return"http:"===D()||"https:"===D()}function D(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(A()||Object(i["n"])()||"connection"in navigator))||navigator.onLine}function M(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,t){this.shortDelay=e,this.longDelay=t,I(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(i["s"])()||Object(i["u"])()}get(){return x()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){I(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},j=new L(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function F(e,t,n,s,r={}){return U(e,r,async()=>{let r={},o={};s&&("GET"===t?o=s:r={body:JSON.stringify(s)});const a=Object(i["x"])(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),N.fetch()(V(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},r))})}async function U(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},P),t);try{const t=new q(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await i.json();if("needConfirmation"in r)throw H(e,"account-exists-with-different-credential",r);if(i.ok&&!("errorMessage"in r))return r;{const t=i.ok?r.errorMessage:r.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw H(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw H(e,"email-already-in-use",r);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(e,a,o);v(e,a)}}catch(r){if(r instanceof i["c"])throw r;v(e,"network-request-failed")}}async function $(e,t,n,i,s={}){const r=await F(e,t,n,i,s);return"mfaPendingCredential"in r&&v(e,"multi-factor-auth-required",{_serverResponse:r}),r}function V(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?R(e.config,s):`${e.config.apiScheme}://${s}`}class q{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(y(this.auth,"timeout")),j.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function H(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=y(e,t,i);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t){return F(e,"POST","/v1/accounts:delete",t)}async function z(e,t){return F(e,"POST","/v1/accounts:update",t)}async function K(e,t){return F(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t=!1){const n=Object(i["k"])(e),s=await n.getIdToken(t),r=J(s);k(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"===typeof r.firebase?r.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:r,token:s,authTime:G(Y(r.auth_time)),issuedAtTime:G(Y(r.iat)),expirationTime:G(Y(r.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Y(e){return 1e3*Number(e)}function J(e){const[t,n,s]=e.split(".");if(void 0===t||void 0===n||void 0===s)return g("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(i["d"])(n);return e?JSON.parse(e):(g("Failed to decode base64 JWT payload"),null)}catch(r){return g("Caught error parsing JWT payload as JSON",r),null}}function X(e){const t=J(e);return k(t,"internal-error"),k("undefined"!==typeof t.exp,"internal-error"),k("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof i["c"]&&ee(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function ee({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=G(this.lastLoginAt),this.creationTime=G(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e){var t;const n=e.auth,i=await e.getIdToken(),s=await Z(e,K(n,{idToken:i}));k(null===s||void 0===s?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?oe(r.providerUserInfo):[],a=re(e.providerData,o),c=e.isAnonymous,l=!(e.email&&r.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ne(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function se(e){const t=Object(i["k"])(e);await ie(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function re(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function oe(e){return e.map(e=>{var{providerId:t}=e,n=r(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e,t){const n=await U(e,{},async()=>{const n=Object(i["x"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,o=V(e,s,"/v1/token","key="+r),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k("undefined"!==typeof e.idToken,"internal-error"),k("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await ae(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,r=new ce;return n&&(k("string"===typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(k("string"===typeof i,"internal-error",{appName:e}),r.accessToken=i),s&&(k("number"===typeof s,"internal-error",{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ce,this.toJSON())}_performRefresh(){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t){k("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ue{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=r(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new te(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new ne(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Z(this,this.stsTokenManager.getToken(this.auth,e));return k(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Q(this,e)}reload(){return se(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ie(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Z(this,W(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,r,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(r=t.photoURL)&&void 0!==r?r:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:w,stsTokenManager:E}=t;k(y&&E,e,"internal-error");const I=ce.fromJSON(this.name,E);k("string"===typeof y,e,"internal-error"),le(u,e.name),le(h,e.name),k("boolean"===typeof b,e,"internal-error"),k("boolean"===typeof _,e,"internal-error"),le(d,e.name),le(f,e.name),le(p,e.name),le(m,e.name),le(g,e.name),le(v,e.name);const T=new ue({uid:y,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(T.providerData=w.map(e=>Object.assign({},e))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new ce;i.updateFromServerResponse(t);const s=new ue({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ie(s),s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const de=he;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=fe(this.userKey,i.apiKey,s),this.fullPersistenceKey=fe("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ue._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(C(de),e,n);const i=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let s=i[0]||C(de);const r=fe(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(r);if(t){const n=ue._fromJSON(e,t);l!==s&&(o=n),s=l;break}}catch(c){}const a=i.filter(e=>e._shouldAllowMigration);return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==s)try{await e._remove(r)}catch(c){}})),new pe(s,e,n)):new pe(s,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ge(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(we(t))return"Blackberry";if(ke(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||ye(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ge(e=Object(i["l"])()){return/firefox\//i.test(e)}function ve(e=Object(i["l"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ye(e=Object(i["l"])()){return/crios\//i.test(e)}function be(e=Object(i["l"])()){return/iemobile/i.test(e)}function _e(e=Object(i["l"])()){return/android/i.test(e)}function we(e=Object(i["l"])()){return/blackberry/i.test(e)}function ke(e=Object(i["l"])()){return/webos/i.test(e)}function Ee(e=Object(i["l"])()){return/iphone|ipad|ipod/i.test(e)}function Ie(e=Object(i["l"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Te(e=Object(i["l"])()){var t;return Ee(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ce(){return Object(i["q"])()&&10===document.documentMode}function Oe(e=Object(i["l"])()){return Ee(e)||_e(e)||ke(e)||we(e)||/windows phone/i.test(e)||be(e)}function Se(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e,t=[]){let n;switch(e){case"Browser":n=me(Object(i["l"])());break;case"Worker":n=`${me(Object(i["l"])())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s["SDK_VERSION"]}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Me(this),this.idTokenSubscription=new Me(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=C(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===n||void 0===n?void 0:n._redirectEventId,r=await this.tryRedirectSignIn(e);i&&i!==s||!(null===r||void 0===r?void 0:r.user)||(n=r.user)}return n?n._redirectEventId?(k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ie(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=M()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(i["k"])(e):null;return t&&k(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(C(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&C(e)||this._popupRedirectResolver;k(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[C(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s="function"===typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return k(r,this,"internal-error"),r.then(()=>s(this.currentUser)),"function"===typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ae(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function xe(e){return Object(i["k"])(e)}class Me{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(i["g"])(e=>this.observer=e)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Le(e,t,n){const i=xe(e);k(i._canInitEmulator,i,"emulator-config-failed"),k(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(null===n||void 0===n?void 0:n.disableWarnings),r=Re(t),{host:o,port:a}=Ne(t),c=null===a?"":":"+a;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||je()}function Re(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ne(e){const t=Re(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const e=s[1];return{host:e,port:Pe(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Pe(t)}}}function Pe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function je(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(e,t){return F(e,"POST","/v1/accounts:resetPassword",B(e,t))}async function Ue(e,t){return F(e,"POST","/v1/accounts:update",t)}async function $e(e,t){return F(e,"POST","/v1/accounts:update",B(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(e,t){return $(e,"POST","/v1/accounts:signInWithPassword",B(e,t))}async function qe(e,t){return F(e,"POST","/v1/accounts:sendOobCode",B(e,t))}async function He(e,t){return qe(e,t)}async function We(e,t){return qe(e,t)}async function ze(e,t){return qe(e,t)}async function Ke(e,t){return qe(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge(e,t){return $(e,"POST","/v1/accounts:signInWithEmailLink",B(e,t))}async function Qe(e,t){return $(e,"POST","/v1/accounts:signInWithEmailLink",B(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends Be{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ye(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ye(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ve(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ge(e,{email:this._email,oobCode:this._password});default:v(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ue(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qe(e,{idToken:t,email:this._email,oobCode:this._password});default:v(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(e,t){return $(e,"POST","/v1/accounts:signInWithIdp",B(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="http://localhost";class Ze extends Be{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):v("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=r(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Ze(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Je(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Je(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Je(e,t)}buildRequest(){const e={requestUri:Xe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(i["x"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t){return F(e,"POST","/v1/accounts:sendVerificationCode",B(e,t))}async function tt(e,t){return $(e,"POST","/v1/accounts:signInWithPhoneNumber",B(e,t))}async function nt(e,t){const n=await $(e,"POST","/v1/accounts:signInWithPhoneNumber",B(e,t));if(n.temporaryProof)throw H(e,"account-exists-with-different-credential",n);return n}const it={["USER_NOT_FOUND"]:"user-not-found"};async function st(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return $(e,"POST","/v1/accounts:signInWithPhoneNumber",B(e,n),it)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Be{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new rt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new rt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return st(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return n||t||i||s?new rt({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function at(e){const t=Object(i["y"])(Object(i["j"])(e))["link"],n=t?Object(i["y"])(Object(i["j"])(t))["deep_link_id"]:null,s=Object(i["y"])(Object(i["j"])(e))["deep_link_id"],r=s?Object(i["y"])(Object(i["j"])(s))["link"]:null;return r||s||n||t||e}class ct{constructor(e){var t,n,s,r,o,a;const c=Object(i["y"])(Object(i["j"])(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ot(null!==(s=c["mode"])&&void 0!==s?s:null);k(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(r=c["continueUrl"])&&void 0!==r?r:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=at(e);try{return new ct(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(){this.providerId=lt.PROVIDER_ID}static credential(e,t){return Ye._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ct.parseLink(t);return k(n,"argument-error"),Ye._fromEmailAndCode(e,n.code,n.tenantId)}}lt.PROVIDER_ID="password",lt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",lt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends ut{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class dt extends ht{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return k("providerId"in t&&"signInMethod"in t,"argument-error"),Ze._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),Ze._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return dt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return dt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:s,nonce:r,providerId:o}=e;if(!n&&!i&&!t&&!s)return null;if(!o)return null;try{return new dt(o)._credential({idToken:t,accessToken:n,nonce:r,pendingToken:s})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends ht{constructor(){super("facebook.com")}static credential(e){return Ze._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch(t){return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com",ft.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ze._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return pt.credential(t,n)}catch(i){return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com",pt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends ht{constructor(){super("github.com")}static credential(e){return Ze._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com",mt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gt="http://localhost";class vt extends Be{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Je(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Je(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Je(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:s}=t;return n&&i&&s&&n===i?new vt(n,s):null}static _create(e,t){return new vt(e,t)}buildRequest(){return{requestUri:gt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="saml.";class bt extends ut{constructor(e){k(e.startsWith(yt),"argument-error"),super(e)}static credentialFromResult(e){return bt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return bt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=vt.fromJSON(e);return k(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return vt._create(n,t)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends ht{constructor(){super("twitter.com")}static credential(e,t){return Ze._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return _t.credential(t,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function wt(e,t){return $(e,"POST","/v1/accounts:signUp",B(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.TWITTER_SIGN_IN_METHOD="twitter.com",_t.PROVIDER_ID="twitter.com";class kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await ue._fromIdTokenResponse(e,n,i),r=Et(n),o=new kt({user:s,providerId:r,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Et(n);return new kt({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(e){var t;const n=xe(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new kt({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await wt(n,{returnSecureToken:!0}),s=await kt._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends i["c"]{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Tt.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Tt(e,t,n,i)}}function Ct(e,t,n,i){const s="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return s.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Tt._fromErrorAndOperation(e,n,t,i);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(e,t){const n=Object(i["k"])(e);await Dt(!0,n,t);const{providerUserInfo:s}=await z(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),r=Ot(s||[]);return n.providerData=n.providerData.filter(e=>r.has(e.providerId)),r.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function At(e,t,n=!1){const i=await Z(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return kt._forOperation(e,"link",i)}async function Dt(e,t,n){await ie(t);const i=Ot(t.providerData),s=!1===e?"provider-already-linked":"no-such-provider";k(i.has(n)===e,t.auth,s)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await Z(e,Ct(i,s,t,e),n);k(r.idToken,i,"internal-error");const o=J(r.idToken);k(o,i,"internal-error");const{sub:a}=o;return k(e.uid===a,i,"user-mismatch"),kt._forOperation(e,s,r)}catch(r){throw"auth/user-not-found"===(null===r||void 0===r?void 0:r.code)&&v(i,"user-mismatch"),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(e,t,n=!1){const i="signIn",s=await Ct(e,i,t),r=await kt._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}async function Lt(e,t){return Mt(xe(e),t)}async function Rt(e,t){const n=Object(i["k"])(e);return await Dt(!1,n,t.providerId),At(n,t)}async function Nt(e,t){return xt(Object(i["k"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(e,t){return $(e,"POST","/v1/accounts:signInWithCustomToken",B(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(e,t){const n=xe(e),i=await Pt(n,{token:t,returnSecureToken:!0}),s=await kt._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Ft._fromServerResponse(e,t):v(e,"internal-error")}}class Ft extends Bt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Ft(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,t,n){var i;k((null===(i=n.url)||void 0===i?void 0:i.length)>0,e,"invalid-continue-uri"),k("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(k(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(k(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(e,t,n){const s=Object(i["k"])(e),r={requestType:"PASSWORD_RESET",email:t};n&&Ut(s,r,n),await We(s,r)}async function Vt(e,t,n){await Fe(Object(i["k"])(e),{oobCode:t,newPassword:n})}async function qt(e,t){await $e(Object(i["k"])(e),{oobCode:t})}async function Ht(e,t){const n=Object(i["k"])(e),s=await Fe(n,{oobCode:t}),r=s.requestType;switch(k(r,n,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":k(s.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":k(s.mfaInfo,n,"internal-error");default:k(s.email,n,"internal-error")}let o=null;return s.mfaInfo&&(o=Bt._fromServerResponse(xe(n),s.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===s.requestType?s.newEmail:s.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===s.requestType?s.email:s.newEmail)||null,multiFactorInfo:o},operation:r}}async function Wt(e,t){const{data:n}=await Ht(Object(i["k"])(e),t);return n.email}async function zt(e,t,n){const i=xe(e),s=await wt(i,{returnSecureToken:!0,email:t,password:n}),r=await kt._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function Kt(e,t,n){return Lt(Object(i["k"])(e),lt.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(e,t,n){const s=Object(i["k"])(e),r={requestType:"EMAIL_SIGNIN",email:t};k(n.handleCodeInApp,s,"argument-error"),n&&Ut(s,r,n),await ze(s,r)}function Qt(e,t){const n=ct.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Yt(e,t,n){const s=Object(i["k"])(e),r=lt.credentialWithLink(t,n||S());return k(r._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),Lt(s,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(e,t){return F(e,"POST","/v1/accounts:createAuthUri",B(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e,t){const n=A()?S():"http://localhost",s={identifier:t,continueUri:n},{signinMethods:r}=await Jt(Object(i["k"])(e),s);return r||[]}async function Zt(e,t){const n=Object(i["k"])(e),s=await e.getIdToken(),r={requestType:"VERIFY_EMAIL",idToken:s};t&&Ut(n.auth,r,t);const{email:o}=await He(n.auth,r);o!==e.email&&await e.reload()}async function en(e,t,n){const s=Object(i["k"])(e),r=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:r,newEmail:t};n&&Ut(s.auth,o,n);const{email:a}=await Ke(s.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(e,t){return F(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const s=Object(i["k"])(e),r=await s.getIdToken(),o={idToken:r,displayName:t,photoUrl:n,returnSecureToken:!0},a=await Z(s,tn(s.auth,o));s.displayName=a.displayName||null,s.photoURL=a.photoUrl||null;const c=s.providerData.find(({providerId:e})=>"password"===e);c&&(c.displayName=s.displayName,c.photoURL=s.photoURL),await s._updateTokensIfNecessary(a)}function sn(e,t){return on(Object(i["k"])(e),t,null)}function rn(e,t){return on(Object(i["k"])(e),null,t)}async function on(e,t,n){const{auth:i}=e,s=await e.getIdToken(),r={idToken:s,returnSecureToken:!0};t&&(r.email=t),n&&(r.password=n);const o=await Z(e,Ue(i,r));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e){var t,n;if(!e)return null;const{providerId:i}=e,s=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},r=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!i&&(null===e||void 0===e?void 0:e.idToken)){const i=null===(n=null===(t=J(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(i){const e="anonymous"!==i&&"custom"!==i?i:null;return new cn(r,e)}}if(!i)return null;switch(i){case"facebook.com":return new un(r,s);case"github.com":return new hn(r,s);case"google.com":return new dn(r,s);case"twitter.com":return new fn(r,s,e.screenName||null);case"custom":case"anonymous":return new cn(r,null);default:return new cn(r,i,s)}}class cn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class ln extends cn{constructor(e,t,n,i){super(e,t,n),this.username=i}}class un extends cn{constructor(e,t){super(e,"facebook.com",t)}}class hn extends ln{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class dn extends cn{constructor(e,t){super(e,"google.com",t)}}class fn extends ln{constructor(e,t,n){super(e,"twitter.com",t,n)}}function pn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:an(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new mn("enroll",e)}static _fromMfaPendingCredential(e){return new mn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return mn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return mn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=xe(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(e=>Bt._fromServerResponse(n,e));k(i.mfaPendingCredential,n,"internal-error");const r=mn._fromMfaPendingCredential(i.mfaPendingCredential);return new gn(r,s,async e=>{const s=await e._process(n,r);delete i.mfaInfo,delete i.mfaPendingCredential;const o=Object.assign(Object.assign({},i),{idToken:s.idToken,refreshToken:s.refreshToken});switch(t.operationType){case"signIn":const e=await kt._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return k(t.user,n,"internal-error"),kt._forOperation(t.user,t.operationType,o);default:v(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function vn(e,t){var n;const s=Object(i["k"])(e),r=t;return k(t.customData.operationType,s,"argument-error"),k(null===(n=r.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,s,"argument-error"),gn._fromError(s,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(e,t){return F(e,"POST","/v2/accounts/mfaEnrollment:start",B(e,t))}function bn(e,t){return F(e,"POST","/v2/accounts/mfaEnrollment:finalize",B(e,t))}function _n(e,t){return F(e,"POST","/v2/accounts/mfaEnrollment:withdraw",B(e,t))}class wn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>Bt._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new wn(e)}async getSession(){return mn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,i=await this.getSession(),s=await Z(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),i=await Z(this.user,_n(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if("auth/user-token-expired"!==s.code)throw s}}}const kn=new WeakMap;function En(e){const t=Object(i["k"])(e);return kn.has(t)||kn.set(t,wn._fromUser(t)),kn.get(t)}const In="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(In,"1"),this.storage.removeItem(In),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){const e=Object(i["l"])();return ve(e)||Ee(e)}const On=1e3,Sn=10;class An extends Tn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Cn()&&Se(),this.fallbackToPolling=Oe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);Ce()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Sn):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},On)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}An.type="LOCAL";const Dn=An;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Tn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xn.type="SESSION";const Mn=xn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Rn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,r=this.handlersMap[i];if(!(null===r||void 0===r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map(async e=>e(t.origin,s)),a=await Ln(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nn(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn.receivers=[];class Pn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise((o,a)=>{const c=Nn("",20);i.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return window}function Bn(e){jn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return"undefined"!==typeof jn()["WorkerGlobalScope"]&&"function"===typeof jn()["importScripts"]}async function Un(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function $n(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Vn(){return Fn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="firebaseLocalStorageDb",Hn=1,Wn="firebaseLocalStorage",zn="fbase_key";class Kn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Gn(e,t){return e.transaction([Wn],t?"readwrite":"readonly").objectStore(Wn)}function Qn(){const e=indexedDB.deleteDatabase(qn);return new Kn(e).toPromise()}function Yn(){const e=indexedDB.open(qn,Hn);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Wn,{keyPath:zn})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Wn)?t(n):(n.close(),await Qn(),t(await Yn()))})})}async function Jn(e,t,n){const i=Gn(e,!0).put({[zn]:t,value:n});return new Kn(i).toPromise()}async function Xn(e,t){const n=Gn(e,!1).get(t),i=await new Kn(n).toPromise();return void 0===i?null:i.value}function Zn(e,t){const n=Gn(e,!0).delete(t);return new Kn(n).toPromise()}const ei=800,ti=3;class ni{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Yn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>ti)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rn._getInstance(Vn()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Un(),!this.activeServiceWorker)return;this.sender=new Pn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&$n()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yn();return await Jn(e,In,"1"),await Zn(e,In),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Xn(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Gn(e,!1).getAll();return new Kn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ei)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ni.type="LOCAL";const ii=ni;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e,t){return F(e,"POST","/v2/accounts/mfaSignIn:start",B(e,t))}function ri(e,t){return F(e,"POST","/v2/accounts/mfaSignIn:finalize",B(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(e){return(await F(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function ci(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=y("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",ai().appendChild(i)})}function li(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=500,hi=6e4,di=1e12;class fi{constructor(e){this.auth=e,this.counter=di,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new pi(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||di;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||di;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||di;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class pi{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"===typeof e?document.getElementById(e):e;k(i,"argument-error",{appName:t}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=mi(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()},hi)},ui))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function mi(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<e;i++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=li("rcb"),vi=new L(3e4,6e4),yi="https://www.google.com/recaptcha/api.js?";class bi{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!jn().grecaptcha}load(e,t=""){return k(_i(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(jn().grecaptcha):new Promise((n,s)=>{const r=jn().setTimeout(()=>{s(y(e,"network-request-failed"))},vi.get());jn()[gi]=()=>{jn().clearTimeout(r),delete jn()[gi];const i=jn().grecaptcha;if(!i)return void s(y(e,"internal-error"));const o=i.render;i.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const o=`${yi}?${Object(i["x"])({onload:gi,render:"explicit",hl:t})}`;ci(o).catch(()=>{clearTimeout(r),s(y(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!jn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function _i(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class wi{async load(e){return new fi(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="recaptcha",Ei={theme:"light",type:"image"};class Ii{constructor(e,t=Object.assign({},Ei),n){this.parameters=t,this.type=ki,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=xe(n),this.isInvisible="invisible"===this.parameters.size,k("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"===typeof e?document.getElementById(e):e;k(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new wi:new bi,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const i=e=>{e&&(this.tokenChangeListeners.delete(i),n(e))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"===typeof e)e(t);else if("string"===typeof e){const n=jn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){k(A()&&!Fn(),this.auth,"internal-error"),await Ti(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await oi(this.auth);k(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Ti(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=rt._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Oi(e,t,n){const s=xe(e),r=await Di(s,t,Object(i["k"])(n));return new Ci(r,e=>Lt(s,e))}async function Si(e,t,n){const s=Object(i["k"])(e);await Dt(!1,s,"phone");const r=await Di(s.auth,t,Object(i["k"])(n));return new Ci(r,e=>Rt(s,e))}async function Ai(e,t,n){const s=Object(i["k"])(e),r=await Di(s.auth,t,Object(i["k"])(n));return new Ci(r,e=>Nt(s,e))}async function Di(e,t,n){var i;const s=await n.verify();try{let r;if(k("string"===typeof s,e,"argument-error"),k(n.type===ki,e,"argument-error"),r="string"===typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){k("enroll"===t.type,e,"internal-error");const n=await yn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{k("signin"===t.type,e,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;k(n,e,"missing-multi-factor-info");const o=await si(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await et(e,{phoneNumber:r.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}async function xi(e,t){await At(Object(i["k"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.providerId=Mi.PROVIDER_ID,this.auth=xe(e)}verifyPhoneNumber(e,t){return Di(this.auth,e,Object(i["k"])(t))}static credential(e,t){return rt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Mi.credentialFromTaggedObject(t)}static credentialFromError(e){return Mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?rt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Li(e,t){return t?C(t):(k(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mi.PROVIDER_ID="phone",Mi.PHONE_SIGN_IN_METHOD="phone";class Ri extends Be{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Je(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Je(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Je(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ni(e){return Mt(e.auth,new Ri(e),e.bypassAuthState)}function Pi(e){const{auth:t,user:n}=e;return k(n,t,"internal-error"),xt(n,new Ri(e),e.bypassAuthState)}async function ji(e){const{auth:t,user:n}=e;return k(n,t,"internal-error"),At(n,new Ri(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ni;case"linkViaPopup":case"linkViaRedirect":return ji;case"reauthViaPopup":case"reauthViaRedirect":return Pi;default:v(this.auth,"internal-error")}}resolve(e){I(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){I(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new L(2e3,1e4);async function Ui(e,t,n){const i=xe(e);_(e,t,ut);const s=Li(i,n),r=new qi(i,"signInViaPopup",t,s);return r.executeNotNull()}async function $i(e,t,n){const s=Object(i["k"])(e);_(s.auth,t,ut);const r=Li(s.auth,n),o=new qi(s.auth,"reauthViaPopup",t,r,s);return o.executeNotNull()}async function Vi(e,t,n){const s=Object(i["k"])(e);_(s.auth,t,ut);const r=Li(s.auth,n),o=new qi(s.auth,"linkViaPopup",t,r,s);return o.executeNotNull()}class qi extends Bi{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,qi.currentPopupAction&&qi.currentPopupAction.cancel(),qi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){I(1===this.filter.length,"Popup operations only handle one event");const e=Nn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(y(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,Fi.get())};e()}}qi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hi="pendingRedirect",Wi=new Map;class zi extends Bi{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Wi.get(this.auth._key());if(!e){try{const t=await Ki(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Wi.set(this.auth._key(),e)}return this.bypassAuthState||Wi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Ki(e,t){const n=Ji(t),i=Yi(e);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}async function Gi(e,t){return Yi(e)._set(Ji(t),"true")}function Qi(){Wi.clear()}function Yi(e){return C(e._redirectPersistence)}function Ji(e){return fe(Hi,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e,t,n){return Zi(e,t,n)}async function Zi(e,t,n){const i=xe(e);_(e,t,ut);const s=Li(i,n);return await Gi(s,i),s._openRedirect(i,t,"signInViaRedirect")}function es(e,t,n){return ts(e,t,n)}async function ts(e,t,n){const s=Object(i["k"])(e);_(s.auth,t,ut);const r=Li(s.auth,n);await Gi(r,s.auth);const o=await os(s);return r._openRedirect(s.auth,t,"reauthViaRedirect",o)}function ns(e,t,n){return is(e,t,n)}async function is(e,t,n){const s=Object(i["k"])(e);_(s.auth,t,ut);const r=Li(s.auth,n);await Dt(!1,s,t.providerId),await Gi(r,s.auth);const o=await os(s);return r._openRedirect(s.auth,t,"linkViaRedirect",o)}async function ss(e,t){return await xe(e)._initializationPromise,rs(e,t,!1)}async function rs(e,t,n=!1){const i=xe(e),s=Li(i,t),r=new zi(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}async function os(e){const t=Nn(e.uid+":::");return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=6e5;class cs{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hs(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!us(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(y(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=as&&this.cachedEventUids.clear(),this.cachedEventUids.has(ls(e))}saveEventToCache(e){this.cachedEventUids.add(ls(e)),this.lastProcessedEventTime=Date.now()}}function ls(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function us({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function hs(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return us(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(e,t={}){return F(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ps=/^https?/;async function ms(e){if(e.config.emulator)return;const{authorizedDomains:t}=await ds(e);for(const i of t)try{if(gs(i))return}catch(n){}v(e,"unauthorized-domain")}function gs(e){const t=S(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!ps.test(n))return!1;if(fs.test(e))return i===e;const s=e.replace(/\./g,"\\."),r=new RegExp("^(.+\\."+s+"|"+s+")$","i");return r.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new L(3e4,6e4);function ys(){const e=jn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function bs(e){return new Promise((t,n)=>{var i,s,r;function o(){ys(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ys(),n(y(e,"network-request-failed"))},timeout:vs.get()})}if(null===(s=null===(i=jn().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=jn().gapi)||void 0===r?void 0:r.load)){const t=li("iframefcb");return jn()[t]=()=>{gapi.load?o():n(y(e,"network-request-failed"))},ci("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}o()}}).catch(e=>{throw _s=null,e})}let _s=null;function ws(e){return _s=_s||bs(e),_s}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new L(5e3,15e3),Es="__/auth/iframe",Is="emulator/auth/iframe",Ts={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cs=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Os(e){const t=e.config;k(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,Is):`https://${e.config.authDomain}/${Es}`,r={apiKey:t.apiKey,appName:e.name,v:s["SDK_VERSION"]},o=Cs.get(e.config.apiHost);o&&(r.eid=o);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Object(i["x"])(r).slice(1)}`}async function Ss(e){const t=await ws(e),n=jn().gapi;return k(n,e,"internal-error"),t.open({where:document.body,url:Os(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ts,dontclear:!0},t=>new Promise(async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=y(e,"network-request-failed"),r=jn().setTimeout(()=>{i(s)},ks.get());function o(){jn().clearTimeout(r),n(t)}t.ping(o).then(o,()=>{i(s)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ds=500,xs=600,Ms="_blank",Ls="http://localhost";class Rs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ns(e,t,n,s=Ds,r=xs){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l=Object.assign(Object.assign({},As),{width:s.toString(),height:r.toString(),top:o,left:a}),u=Object(i["l"])().toLowerCase();n&&(c=ye(u)?Ms:n),ge(u)&&(t=t||Ls,l.scrollbars="yes");const h=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(Te(u)&&"_self"!==c)return Ps(t||"",c),new Rs(null);const d=window.open(t||"",c,h);k(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Rs(d)}function Ps(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="__/auth/handler",Bs="emulator/auth/handler";function Fs(e,t,n,r,o,a){k(e.config.authDomain,e,"auth-domain-config-required"),k(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s["SDK_VERSION"],eventId:o};if(t instanceof ut){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(i["p"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ht){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const i of Object.keys(l))void 0===l[i]&&delete l[i];return`${Us(e)}?${Object(i["x"])(l).slice(1)}`}function Us({config:e}){return e.emulator?R(e,Bs):`https://${e.authDomain}/${js}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="webStorageSupport";class Vs{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mn,this._completeRedirectFn=rs}async _openPopup(e,t,n,i){var s;I(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");const r=Fs(e,t,n,S(),i);return Ns(e,r,Nn())}async _openRedirect(e,t,n,i){return await this._originValidation(e),Bn(Fs(e,t,n,S(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(I(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Ss(e),n=new cs(e);return t.register("authEvent",t=>{k(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send($s,{type:$s},n=>{var i;const s=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[$s];void 0!==s&&t(!!s),v(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ms(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Oe()||ve()||Ee()}}const qs=Vs;class Hs{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}}class Ws extends Hs{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ws(e)}_finalizeEnroll(e,t,n){return bn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return ri(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class zs{constructor(){}static assertion(e){return Ws._fromCredential(e)}}zs.FACTOR_ID="phone";var Ks="@firebase/auth",Gs="0.19.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Js(e){Object(s["_registerComponent"])(new a["a"]("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),{apiKey:s,authDomain:r}=i.options;return(t=>{k(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),k(!(null===r||void 0===r?void 0:r.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:r,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ae(e)},o=new De(t,i);return O(o,n),o})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()})),Object(s["_registerComponent"])(new a["a"]("auth-internal",e=>{const t=xe(e.getProvider("auth").getImmediate());return(e=>new Qs(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(s["registerVersion"])(Ks,Gs,Ys(e)),Object(s["registerVersion"])(Ks,Gs,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xs(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Js("Browser");const Zs=2e3;async function er(e,t,n){var i;const{BuildInfo:s}=Xs();I(t.sessionId,"AuthEvent did not contain a session ID");const r=await rr(t.sessionId),o={};return Ee()?o["ibi"]=s.packageName:_e()?o["apn"]=s.packageName:v(e,"operation-not-supported-in-this-environment"),s.displayName&&(o["appDisplayName"]=s.displayName),o["sessionId"]=r,Fs(e,n,t.type,void 0,null!==(i=t.eventId)&&void 0!==i?i:void 0,o)}async function tr(e){const{BuildInfo:t}=Xs(),n={};Ee()?n.iosBundleId=t.packageName:_e()?n.androidPackageName=t.packageName:v(e,"operation-not-supported-in-this-environment"),await ds(e,n)}function nr(e){const{cordova:t}=Xs();return new Promise(n=>{t.plugins.browsertab.isAvailable(i=>{let s=null;i?t.plugins.browsertab.openUrl(e):s=t.InAppBrowser.open(e,Ie()?"_blank":"_system","location=yes"),n(s)})})}async function ir(e,t,n){const{cordova:i}=Xs();let s=()=>{};try{await new Promise((r,o)=>{let a=null;function c(){var e;r();const t=null===(e=i.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(y(e,"redirect-cancelled-by-user"))},Zs))}function u(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&l()}t.addPassiveListener(c),document.addEventListener("resume",l,!1),_e()&&document.addEventListener("visibilitychange",u,!1),s=()=>{t.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{s()}}function sr(e){var t,n,i,s,r,o,a,c,l,u;const h=Xs();k("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),k("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),k("function"===typeof(null===(r=null===(s=null===(i=null===h||void 0===h?void 0:h.cordova)||void 0===i?void 0:i.plugins)||void 0===s?void 0:s.browsertab)||void 0===r?void 0:r.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k("function"===typeof(null===(u=null===(l=null===h||void 0===h?void 0:h.cordova)||void 0===l?void 0:l.InAppBrowser)||void 0===u?void 0:u.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function rr(e){const t=or(e),n=await crypto.subtle.digest("SHA-256",t),i=Array.from(new Uint8Array(n));return i.map(e=>e.toString(16).padStart(2,"0")).join("")}function or(e){if(I(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=20;class cr extends cs{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function lr(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:fr(),postBody:null,tenantId:e.tenantId,error:y(e,"no-auth-event")}}function ur(e,t){return pr()._set(mr(e),t)}async function hr(e){const t=await pr()._get(mr(e));return t&&await pr()._remove(mr(e)),t}function dr(e,t){var n,i;const s=vr(t);if(s.includes("/__/auth/callback")){const t=yr(s),r=t["firebaseError"]?gr(decodeURIComponent(t["firebaseError"])):null,o=null===(i=null===(n=null===r||void 0===r?void 0:r["code"])||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],a=o?y(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:s,postBody:null}}return null}function fr(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<ar;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function pr(){return C(Dn)}function mr(e){return fe("authEvent",e.config.apiKey,e.name)}function gr(e){try{return JSON.parse(e)}catch(t){return null}}function vr(e){const t=yr(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,i=yr(n)["link"],s=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,r=yr(s)["link"];return r||s||i||n||e}function yr(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Object(i["y"])(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=500;class _r{constructor(){this._redirectPersistence=Mn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=rs}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new cr(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){v(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){sr(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),Qi(),await this._originValidation(e);const r=lr(e,n,i);await ur(e,r);const o=await er(e,r,t),a=await nr(o);return ir(e,s,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tr(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:s}=Xs(),r=setTimeout(async()=>{await hr(e),t.onEvent(kr())},br),o=async n=>{clearTimeout(r);const i=await hr(e);let s=null;i&&(null===n||void 0===n?void 0:n["url"])&&(s=dr(i,n["url"])),t.onEvent(s||kr())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=i,c=s.packageName.toLowerCase()+"://";Xs().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const wr=_r;function kr(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:y("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(e,t){xe(e)._logFramework(t)}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return C})),n.d(t,"c",(function(){return T})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return A})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return P})),n.d(t,"h",(function(){return x})),n.d(t,"i",(function(){return l})),n.d(t,"j",(function(){return N})),n.d(t,"k",(function(){return U})),n.d(t,"l",(function(){return f})),n.d(t,"m",(function(){return g})),n.d(t,"n",(function(){return v})),n.d(t,"o",(function(){return b})),n.d(t,"p",(function(){return D})),n.d(t,"q",(function(){return _})),n.d(t,"r",(function(){return E})),n.d(t,"s",(function(){return p})),n.d(t,"t",(function(){return m})),n.d(t,"u",(function(){return y})),n.d(t,"v",(function(){return k})),n.d(t,"w",(function(){return w})),n.d(t,"x",(function(){return L})),n.d(t,"y",(function(){return R}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296===(64512&s)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},s=function(e){const t=[];let n=0,i=0;while(n<e.length){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=e[n++],o=e[n++],a=e[n++],c=((7&s)<<18|(63&r)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(1023&c))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const t=e[s],r=s+1<e.length,o=r?e[s+1]:0,a=s+2<e.length,c=a?e[s+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],r=s<e.length,o=r?n[e.charAt(s)]:0;++s;const a=s<e.length,c=a?n[e.charAt(s)]:64;++s;const l=s<e.length,u=l?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==c||null==u)throw Error();const h=t<<2|o>>4;if(i.push(h),64!==c){const e=o<<4&240|c>>2;if(i.push(e),64!==u){const e=c<<6&192|u;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=i(e);return r.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return r.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&u(n)&&(e[n]=l(e[n],t[n]));return e}function u(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+i,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function m(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function g(){return"object"===typeof self&&self.self===self}function v(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){return f().indexOf("Electron/")>=0}function _(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function w(){return f().indexOf("MSAppHost/")>=0}function k(){return!m()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function E(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I="FirebaseError";class T extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=I,Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?O(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`,a=new T(i,o,n);return a}}function O(e,t){return e.replace(S,(e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`})}const S=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function D(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function x(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(M(n)&&M(r)){if(!x(n,r))return!1}else if(n!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function M(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function R(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}}),t}function N(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){const n=new j(e,t);return n.subscribe.bind(n)}class j{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=B(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=F),void 0===i.error&&(i.error=F),void 0===i.complete&&(i.complete=F);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}}),this.observers.push(i),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function F(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l}));var i=n("1fd5");class s{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:r})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=r){return this.instances.has(e)}getOptions(e=r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,r]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(s);n===e&&r.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=r){return this.component?this.component.multipleInstances?e:r:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===r?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"256a":function(e,t,n){"use strict";n("5994")},3666:function(e,t,n){(function(t,n,i){e.exports=i(),e.exports["default"]=i()})(0,0,(function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'),t=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function n(n,i){if("string"!==typeof n)throw new Error("slugify: string argument expected");i="string"===typeof i?{replacement:i}:i||{};var s=t[i.locale]||{},r=void 0===i.replacement?"-":i.replacement,o=void 0===i.trim||i.trim,a=n.normalize().split("").reduce((function(t,n){var o=s[n]||e[n]||n;return o===r&&(o=" "),t+o.replace(i.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"");return i.strict&&(a=a.replace(/[^A-Za-z0-9\s]/g,"")),o&&(a=a.trim()),a=a.replace(/\s+/g,r),i.lower&&(a=a.toLowerCase()),a}return n.extend=function(t){Object.assign(e,t)},n}))},"3f4e":function(e,t,n){"use strict";n.d(t,"setupDevtoolsPlugin",(function(){return o}));var i=n("abc5"),s=n("b774"),r=n("f30a");function o(e,t){const n=Object(i["b"])(),o=Object(i["a"])(),a=i["c"]&&e.enableEarlyProxy;if(!o||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&a){const i=a?new r["a"](e,o):null,s=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:e,setupFn:t,proxy:i}),i&&t(i.proxiedTarget)}else o.emit(s["b"],e,t)}},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,i="/";t.cwd=function(){return i},t.chdir=function(t){e||(e=n("df7c")),i=e.resolve(t,i)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"4d5c":function(e,t,n){(function(n){var i,s,r=function e(t,n,i){null===t&&(t=Function.prototype);var s=Object.getOwnPropertyDescriptor(t,n);if(void 0===s){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,i)}if("value"in s)return s.value;var o=s.get;return void 0!==o?o.call(i):void 0},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/*!
 * Materialize v1.0.0-rc.2 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/*! cash-dom 1.3.5, https://github.com/kenwheeler/cash @license MIT */(function(e){window.cash=e()})((function(){var e,t=document,n=window,i=Array.prototype,s=i.slice,r=i.filter,o=i.push,a=function(){},c=function(e){return typeof e===typeof a&&e.call},l=function(e){return"string"===typeof e},u=/^#[\w-]*$/,h=/^\.[\w-]*$/,d=/<.+>/,f=/^\w+$/;function p(e,n){n=n||t;var i=h.test(e)?n.getElementsByClassName(e.slice(1)):f.test(e)?n.getElementsByTagName(e):n.querySelectorAll(e);return i}function m(n){if(!e){e=t.implementation.createHTMLDocument(null);var i=e.createElement("base");i.href=t.location.href,e.head.appendChild(i)}return e.body.innerHTML=n,e.body.childNodes}function g(e){"loading"!==t.readyState?e():t.addEventListener("DOMContentLoaded",e)}function v(e,i){if(!e)return this;if(e.cash&&e!==n)return e;var s,r=e,o=0;if(l(e))r=u.test(e)?t.getElementById(e.slice(1)):d.test(e)?m(e):p(e,i);else if(c(e))return g(e),this;if(!r)return this;if(r.nodeType||r===n)this[0]=r,this.length=1;else for(s=this.length=r.length;o<s;o++)this[o]=r[o];return this}function y(e,t){return new v(e,t)}var b=y.fn=y.prototype=v.prototype={cash:!0,length:0,push:o,splice:i.splice,map:i.map,init:v};function _(e,t){for(var n=e.length,i=0;i<n;i++)if(!1===t.call(e[i],e[i],i,e))break}function w(e,t){var n=e&&(e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector);return!!n&&n.call(e,t)}function k(e){return l(e)?w:e.cash?function(t){return e.is(t)}:function(e,t){return e===t}}function E(e){return y(s.call(e).filter((function(e,t,n){return n.indexOf(e)===t})))}Object.defineProperty(b,"constructor",{value:y}),y.parseHTML=m,y.noop=a,y.isFunction=c,y.isString=l,y.extend=b.extend=function(e){e=e||{};var t=s.call(arguments),n=t.length,i=1;for(1===t.length&&(e=this,i=0);i<n;i++)if(t[i])for(var r in t[i])t[i].hasOwnProperty(r)&&(e[r]=t[i][r]);return e},y.extend({merge:function(e,t){for(var n=+t.length,i=e.length,s=0;s<n;i++,s++)e[i]=t[s];return e.length=i,e},each:_,matches:w,unique:E,isArray:Array.isArray,isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)}});var I=y.uid="_cash"+Date.now();function T(e){return e[I]=e[I]||{}}function C(e,t,n){return T(e)[t]=n}function O(e,t){var n=T(e);return void 0===n[t]&&(n[t]=e.dataset?e.dataset[t]:y(e).attr("data-"+t)),n[t]}function S(e,t){var n=T(e);n?delete n[t]:e.dataset?delete e.dataset[t]:y(e).removeAttr("data-"+name)}b.extend({data:function(e,t){if(l(e))return void 0===t?O(this[0],e):this.each((function(n){return C(n,e,t)}));for(var n in e)this.data(n,e[n]);return this},removeData:function(e){return this.each((function(t){return S(t,e)}))}});var A=/\S+/g;function D(e){return l(e)&&e.match(A)}function x(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)}function M(e,t,n){e.classList?e.classList.add(t):n.indexOf(" "+t+" ")&&(e.className+=" "+t)}function L(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(t,"")}b.extend({addClass:function(e){var t=D(e);return t?this.each((function(e){var n=" "+e.className+" ";_(t,(function(t){M(e,t,n)}))})):this},attr:function(e,t){if(e){if(l(e))return void 0===t?this[0]?this[0].getAttribute?this[0].getAttribute(e):this[0][e]:void 0:this.each((function(n){n.setAttribute?n.setAttribute(e,t):n[e]=t}));for(var n in e)this.attr(n,e[n]);return this}},hasClass:function(e){var t=!1,n=D(e);return n&&n.length&&this.each((function(e){return t=x(e,n[0]),!t})),t},prop:function(e,t){if(l(e))return void 0===t?this[0][e]:this.each((function(n){n[e]=t}));for(var n in e)this.prop(n,e[n]);return this},removeAttr:function(e){return this.each((function(t){t.removeAttribute?t.removeAttribute(e):delete t[e]}))},removeClass:function(e){if(!arguments.length)return this.attr("class","");var t=D(e);return t?this.each((function(e){_(t,(function(t){L(e,t)}))})):this},removeProp:function(e){return this.each((function(t){delete t[e]}))},toggleClass:function(e,t){if(void 0!==t)return this[t?"addClass":"removeClass"](e);var n=D(e);return n?this.each((function(e){var t=" "+e.className+" ";_(n,(function(n){x(e,n)?L(e,n):M(e,n,t)}))})):this}}),b.extend({add:function(e,t){return E(y.merge(this,y(e,t)))},each:function(e){return _(this,e),this},eq:function(e){return y(this.get(e))},filter:function(e){if(!e)return this;var t=c(e)?e:k(e);return y(r.call(this,(function(n){return t(n,e)})))},first:function(){return this.eq(0)},get:function(e){return void 0===e?s.call(this):e<0?this[e+this.length]:this[e]},index:function(e){var t=e?y(e)[0]:this[0],n=e?this:y(t).parent().children();return s.call(n).indexOf(t)},last:function(){return this.eq(-1)}});var R=function(){var e=/(?:^\w|[A-Z]|\b\w)/g,t=/[\s-_]+/g;return function(n){return n.replace(e,(function(e,t){return e[0===t?"toLowerCase":"toUpperCase"]()})).replace(t,"")}}(),N=function(){var e={},t=document,n=t.createElement("div"),i=n.style;return function(t){if(t=R(t),e[t])return e[t];var n=t.charAt(0).toUpperCase()+t.slice(1),s=["webkit","moz","ms","o"],r=(t+" "+s.join(n+" ")+n).split(" ");return _(r,(function(n){if(n in i)return e[n]=t=e[t]=n,!1})),e[t]}}();function P(e,t){return parseInt(n.getComputedStyle(e[0],null)[t],10)||0}function j(e,t,n){var i=O(e,"_cashEvents")||C(e,"_cashEvents",{});i[t]=i[t]||[],i[t].push(n),e.addEventListener(t,n)}function B(e,t,n){var i,s=O(e,"_cashEvents"),r=s&&s[t];r&&(n?(e.removeEventListener(t,n),i=r.indexOf(n),i>=0&&r.splice(i,1)):(_(r,(function(n){e.removeEventListener(t,n)})),r=[]))}function F(e,t){return"&"+encodeURIComponent(e)+"="+encodeURIComponent(t).replace(/%20/g,"+")}function U(e){var t=[];return _(e.options,(function(e){e.selected&&t.push(e.value)})),t.length?t:null}function $(e){var t=e.selectedIndex;return t>=0?e.options[t].value:null}function V(e){var t=e.type;if(!t)return null;switch(t.toLowerCase()){case"select-one":return $(e);case"select-multiple":return U(e);case"radio":return e.checked?e.value:null;case"checkbox":return e.checked?e.value:null;default:return e.value?e.value:null}}function q(e,t,n){if(n){var i=e.childNodes[0];e.insertBefore(t,i)}else e.appendChild(t)}function H(e,t,n){var i=l(t);i||!t.length?_(e,i?function(e){return e.insertAdjacentHTML(n?"afterbegin":"beforeend",t)}:function(e,i){return q(e,0===i?t:t.cloneNode(!0),n)}):_(t,(function(t){return H(e,t,n)}))}y.prefixedProp=N,y.camelCase=R,b.extend({css:function(e,t){if(l(e))return e=N(e),arguments.length>1?this.each((function(n){return n.style[e]=t})):n.getComputedStyle(this[0])[e];for(var i in e)this.css(i,e[i]);return this}}),_(["Width","Height"],(function(e){var t=e.toLowerCase();b[t]=function(){return this[0].getBoundingClientRect()[t]},b["inner"+e]=function(){return this[0]["client"+e]},b["outer"+e]=function(t){return this[0]["offset"+e]+(t?P(this,"margin"+("Width"===e?"Left":"Top"))+P(this,"margin"+("Width"===e?"Right":"Bottom")):0)}})),b.extend({off:function(e,t){return this.each((function(n){return B(n,e,t)}))},on:function(e,t,n,i){var s;if(!l(e)){for(var r in e)this.on(r,t,e[r]);return this}return c(t)&&(n=t,t=null),"ready"===e?(g(n),this):(t&&(s=n,n=function(e){var n=e.target;while(!w(n,t)){if(n===this||null===n)return!1;n=n.parentNode}n&&s.call(n,e)}),this.each((function(t){var s=n;i&&(s=function(){n.apply(this,arguments),B(t,e,s)}),j(t,e,s)})))},one:function(e,t,n){return this.on(e,t,n,!0)},ready:g,trigger:function(e,t){if(document.createEvent){var n=document.createEvent("HTMLEvents");return n.initEvent(e,!0,!1),n=this.extend(n,t),this.each((function(e){return e.dispatchEvent(n)}))}}}),b.extend({serialize:function(){var e="";return _(this[0].elements||this,(function(t){if(!t.disabled&&"FIELDSET"!==t.tagName){var n=t.name;switch(t.type.toLowerCase()){case"file":case"reset":case"submit":case"button":break;case"select-multiple":var i=V(t);null!==i&&_(i,(function(t){e+=F(n,t)}));break;default:var s=V(t);null!==s&&(e+=F(n,s))}}})),e.substr(1)},val:function(e){return void 0===e?V(this[0]):this.each((function(t){return t.value=e}))}}),b.extend({after:function(e){return y(e).insertAfter(this),this},append:function(e){return H(this,e),this},appendTo:function(e){return H(y(e),this),this},before:function(e){return y(e).insertBefore(this),this},clone:function(){return y(this.map((function(e){return e.cloneNode(!0)})))},empty:function(){return this.html(""),this},html:function(e){if(void 0===e)return this[0].innerHTML;var t=e.nodeType?e[0].outerHTML:e;return this.each((function(e){return e.innerHTML=t}))},insertAfter:function(e){var t=this;return y(e).each((function(e,n){var i=e.parentNode,s=e.nextSibling;t.each((function(e){i.insertBefore(0===n?e:e.cloneNode(!0),s)}))})),this},insertBefore:function(e){var t=this;return y(e).each((function(e,n){var i=e.parentNode;t.each((function(t){i.insertBefore(0===n?t:t.cloneNode(!0),e)}))})),this},prepend:function(e){return H(this,e,!0),this},prependTo:function(e){return H(y(e),this,!0),this},remove:function(){return this.each((function(e){if(e.parentNode)return e.parentNode.removeChild(e)}))},text:function(e){return void 0===e?this[0].textContent:this.each((function(t){return t.textContent=e}))}});var W=t.documentElement;return b.extend({position:function(){var e=this[0];return{left:e.offsetLeft,top:e.offsetTop}},offset:function(){var e=this[0].getBoundingClientRect();return{top:e.top+n.pageYOffset-W.clientTop,left:e.left+n.pageXOffset-W.clientLeft}},offsetParent:function(){return y(this[0].offsetParent)}}),b.extend({children:function(e){var t=[];return this.each((function(e){o.apply(t,e.children)})),t=E(t),e?t.filter((function(t){return w(t,e)})):t},closest:function(e){return!e||this.length<1?y():this.is(e)?this.filter(e):this.parent().closest(e)},is:function(e){if(!e)return!1;var t=!1,n=k(e);return this.each((function(i){return t=n(i,e),!t})),t},find:function(e){if(!e||e.nodeType)return y(e&&this.has(e).length?e:null);var t=[];return this.each((function(n){o.apply(t,p(e,n))})),E(t)},has:function(e){var t=l(e)?function(t){return 0!==p(e,t).length}:function(t){return t.contains(e)};return this.filter(t)},next:function(){return y(this[0].nextElementSibling)},not:function(e){if(!e)return this;var t=k(e);return this.filter((function(n){return!t(n,e)}))},parent:function(){var e=[];return this.each((function(t){t&&t.parentNode&&e.push(t.parentNode)})),E(e)},parents:function(e){var n,i=[];return this.each((function(s){n=s;while(n&&n.parentNode&&n!==t.body.parentNode)n=n.parentNode,(!e||e&&w(n,e))&&i.push(n)})),E(i)},prev:function(){return y(this[0].previousElementSibling)},siblings:function(e){var t=this.parent().children(e),n=this[0];return t.filter((function(e){return e!==n}))}}),y}));var u=function(){function e(t,n,i){l(this,e),n instanceof Element||console.error(Error(n+" is not an HTML Element"));var s=t.getInstance(n);s&&s.destroy(),this.el=n,this.$el=cash(n)}return o(e,null,[{key:"init",value:function(e,t,n){var i=null;if(t instanceof Element)i=new e(t,n);else if(t&&(t.jquery||t.cash||t instanceof NodeList)){for(var s=[],r=0;r<t.length;r++)s.push(new e(t[r],n));i=s}return i}}]),e}();(function(e){e.Package?M={}:e.M={},M.jQueryLoaded=!!e.jQuery})(window),i=[],s=function(){return M}.apply(t,i),void 0===s||(e.exports=s),M.keys={TAB:9,ENTER:13,ESC:27,ARROW_UP:38,ARROW_DOWN:40},M.tabPressed=!1,M.keyDown=!1;var h=function(e){M.keyDown=!0,e.which!==M.keys.TAB&&e.which!==M.keys.ARROW_DOWN&&e.which!==M.keys.ARROW_UP||(M.tabPressed=!0)},d=function(e){M.keyDown=!1,e.which!==M.keys.TAB&&e.which!==M.keys.ARROW_DOWN&&e.which!==M.keys.ARROW_UP||(M.tabPressed=!1)},f=function(e){M.keyDown&&document.body.classList.add("keyboard-focused")},p=function(e){document.body.classList.remove("keyboard-focused")};document.addEventListener("keydown",h,!0),document.addEventListener("keyup",d,!0),document.addEventListener("focus",f,!0),document.addEventListener("blur",p,!0),M.initializeJqueryWrapper=function(e,t,n){jQuery.fn[t]=function(i){if(e.prototype[i]){var s=Array.prototype.slice.call(arguments,1);if("get"===i.slice(0,3)){var r=this.first()[0][n];return r[i].apply(r,s)}return this.each((function(){var e=this[n];e[i].apply(e,s)}))}if("object"===typeof i||!i)return e.init(this,arguments[0]),this;jQuery.error("Method "+i+" does not exist on jQuery."+t)}},M.AutoInit=function(e){var t=e||document.body,n={Autocomplete:t.querySelectorAll(".autocomplete:not(.no-autoinit)"),Carousel:t.querySelectorAll(".carousel:not(.no-autoinit)"),Chips:t.querySelectorAll(".chips:not(.no-autoinit)"),Collapsible:t.querySelectorAll(".collapsible:not(.no-autoinit)"),Datepicker:t.querySelectorAll(".datepicker:not(.no-autoinit)"),Dropdown:t.querySelectorAll(".dropdown-trigger:not(.no-autoinit)"),Materialbox:t.querySelectorAll(".materialboxed:not(.no-autoinit)"),Modal:t.querySelectorAll(".modal:not(.no-autoinit)"),Parallax:t.querySelectorAll(".parallax:not(.no-autoinit)"),Pushpin:t.querySelectorAll(".pushpin:not(.no-autoinit)"),ScrollSpy:t.querySelectorAll(".scrollspy:not(.no-autoinit)"),FormSelect:t.querySelectorAll("select:not(.no-autoinit)"),Sidenav:t.querySelectorAll(".sidenav:not(.no-autoinit)"),Tabs:t.querySelectorAll(".tabs:not(.no-autoinit)"),TapTarget:t.querySelectorAll(".tap-target:not(.no-autoinit)"),Timepicker:t.querySelectorAll(".timepicker:not(.no-autoinit)"),Tooltip:t.querySelectorAll(".tooltipped:not(.no-autoinit)"),FloatingActionButton:t.querySelectorAll(".fixed-action-btn:not(.no-autoinit)")};for(var i in n){var s=M[i];s.init(n[i])}},M.objectSelectorString=function(e){var t=e.prop("tagName")||"",n=e.attr("id")||"",i=e.attr("class")||"";return(t+n+i).replace(/\s/g,"")},M.guid=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}}(),M.escapeHash=function(e){return e.replace(/(:|\.|\[|\]|,|=|\/)/g,"\\$1")},M.elementOrParentIsFixed=function(e){var t=$(e),n=t.add(t.parents()),i=!1;return n.each((function(){if("fixed"===$(this).css("position"))return i=!0,!1})),i},M.checkWithinContainer=function(e,t,n){var i={top:!1,right:!1,bottom:!1,left:!1},s=e.getBoundingClientRect(),r=e===document.body?Math.max(s.bottom,window.innerHeight):s.bottom,o=e.scrollLeft,a=e.scrollTop,c=t.left-o,l=t.top-a;return(c<s.left+n||c<n)&&(i.left=!0),(c+t.width>s.right-n||c+t.width>window.innerWidth-n)&&(i.right=!0),(l<s.top+n||l<n)&&(i.top=!0),(l+t.height>r-n||l+t.height>window.innerHeight-n)&&(i.bottom=!0),i},M.checkPossibleAlignments=function(e,t,n,i){var s={top:!0,right:!0,bottom:!0,left:!0,spaceOnTop:null,spaceOnRight:null,spaceOnBottom:null,spaceOnLeft:null},r="visible"===getComputedStyle(t).overflow,o=t.getBoundingClientRect(),a=Math.min(o.height,window.innerHeight),c=Math.min(o.width,window.innerWidth),l=e.getBoundingClientRect(),u=t.scrollLeft,h=t.scrollTop,d=n.left-u,f=n.top-h,p=n.top+l.height-h;return s.spaceOnRight=r?window.innerWidth-(l.left+n.width):c-(d+n.width),s.spaceOnRight<0&&(s.left=!1),s.spaceOnLeft=r?l.right-n.width:d-n.width+l.width,s.spaceOnLeft<0&&(s.right=!1),s.spaceOnBottom=r?window.innerHeight-(l.top+n.height+i):a-(f+n.height+i),s.spaceOnBottom<0&&(s.top=!1),s.spaceOnTop=r?l.bottom-(n.height+i):p-(n.height-i),s.spaceOnTop<0&&(s.bottom=!1),s},M.getOverflowParent=function(e){return null==e?null:e===document.body||"visible"!==getComputedStyle(e).overflow?e:M.getOverflowParent(e.parentElement)},M.getIdFromTrigger=function(e){var t=e.getAttribute("data-target");return t||(t=e.getAttribute("href"),t=t?t.slice(1):""),t},M.getDocumentScrollTop=function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},M.getDocumentScrollLeft=function(){return window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0};
/**
 * Get time in ms
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @type {function}
 * @return {number}
 */
var m=Date.now||function(){return(new Date).getTime()};
/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @param {function} func
 * @param {number} wait
 * @param {Object=} options
 * @returns {Function}
 */M.throttle=function(e,t,n){var i=void 0,s=void 0,r=void 0,o=null,a=0;n||(n={});var c=function(){a=!1===n.leading?0:m(),o=null,r=e.apply(i,s),i=s=null};return function(){var l=m();a||!1!==n.leading||(a=l);var u=t-(l-a);return i=this,s=arguments,u<=0?(clearTimeout(o),o=null,a=l,r=e.apply(i,s),i=s=null):o||!1===n.trailing||(o=setTimeout(c,u)),r}};var g={scope:{}};g.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[t]=n.value)},g.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof n&&null!=n?n:e},g.global=g.getGlobal(this),g.SYMBOL_PREFIX="jscomp_symbol_",g.initSymbol=function(){g.initSymbol=function(){},g.global.Symbol||(g.global.Symbol=g.Symbol)},g.symbolCounter_=0,g.Symbol=function(e){return g.SYMBOL_PREFIX+(e||"")+g.symbolCounter_++},g.initSymbolIterator=function(){g.initSymbol();var e=g.global.Symbol.iterator;e||(e=g.global.Symbol.iterator=g.global.Symbol("iterator")),"function"!=typeof Array.prototype[e]&&g.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return g.arrayIterator(this)}}),g.initSymbolIterator=function(){}},g.arrayIterator=function(e){var t=0;return g.iteratorPrototype((function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}}))},g.iteratorPrototype=function(e){return g.initSymbolIterator(),e={next:e},e[g.global.Symbol.iterator]=function(){return this},e},g.array=g.array||{},g.iteratorFromArray=function(e,t){g.initSymbolIterator(),e instanceof String&&(e+="");var n=0,i={next:function(){if(n<e.length){var s=n++;return{value:t(s,e[s]),done:!1}}return i.next=function(){return{done:!0,value:void 0}},i.next()}};return i[Symbol.iterator]=function(){return i},i},g.polyfill=function(e,t,n,i){if(t){for(n=g.global,e=e.split("."),i=0;i<e.length-1;i++){var s=e[i];s in n||(n[s]={}),n=n[s]}e=e[e.length-1],i=n[e],t=t(i),t!=i&&null!=t&&g.defineProperty(n,e,{configurable:!0,writable:!0,value:t})}},g.polyfill("Array.prototype.keys",(function(e){return e||function(){return g.iteratorFromArray(this,(function(e){return e}))}}),"es6-impl","es3");var v=this;(function(e){M.anime=e()})((function(){function e(e){if(!B.col(e))try{return document.querySelectorAll(e)}catch(t){}}function t(e,t){for(var n=e.length,i=2<=arguments.length?arguments[1]:void 0,s=[],r=0;r<n;r++)if(r in e){var o=e[r];t.call(i,o,r,e)&&s.push(o)}return s}function n(e){return e.reduce((function(e,t){return e.concat(B.arr(t)?n(t):t)}),[])}function i(t){return B.arr(t)?t:(B.str(t)&&(t=e(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function s(e,t){return e.some((function(e){return e===t}))}function r(e){var t,n={};for(t in e)n[t]=e[t];return n}function o(e,t){var n,i=r(e);for(n in e)i[n]=t.hasOwnProperty(n)?t[n]:e[n];return i}function a(e,t){var n,i=r(e);for(n in t)i[n]=B.und(e[n])?t[n]:e[n];return i}function c(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,i){return t+t+n+n+i+i}));var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);e=parseInt(t[1],16);var n=parseInt(t[2],16);t=parseInt(t[3],16);return"rgba("+e+","+n+","+t+",1)"}function l(e){function t(e,t,n){return 0>n&&(n+=1),1<n&&--n,n<1/6?e+6*(t-e)*n:.5>n?t:n<2/3?e+(t-e)*(2/3-n)*6:e}var n=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e);e=parseInt(n[1])/360;var i=parseInt(n[2])/100,s=parseInt(n[3])/100;n=n[4]||1;if(0==i)s=i=e=s;else{var r=.5>s?s*(1+i):s+i-s*i,o=2*s-r;s=t(o,r,e+1/3),i=t(o,r,e);e=t(o,r,e-1/3)}return"rgba("+255*s+","+255*i+","+255*e+","+n+")"}function u(e){if(e=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e))return e[2]}function h(e){return-1<e.indexOf("translate")||"perspective"===e?"px":-1<e.indexOf("rotate")||-1<e.indexOf("skew")?"deg":void 0}function d(e,t){return B.fnc(e)?e(t.target,t.id,t.total):e}function f(e,t){if(t in e.style)return getComputedStyle(e).getPropertyValue(t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function p(e,t){return B.dom(e)&&s(j,t)?"transform":B.dom(e)&&(e.getAttribute(t)||B.svg(e)&&e[t])?"attribute":B.dom(e)&&"transform"!==t&&f(e,t)?"css":null!=e[t]?"object":void 0}function m(e,n){var i=h(n);i=-1<n.indexOf("scale")?1:0+i;if(e=e.style.transform,!e)return i;for(var s=[],r=[],o=[],a=/(\w+)\((.+?)\)/g;s=a.exec(e);)r.push(s[1]),o.push(s[2]);return e=t(o,(function(e,t){return r[t]===n})),e.length?e[0]:i}function g(e,t){switch(p(e,t)){case"transform":return m(e,t);case"css":return f(e,t);case"attribute":return e.getAttribute(t)}return e[t]||0}function y(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var i=u(e)||0;switch(t=parseFloat(t),e=parseFloat(e.replace(n[0],"")),n[0][0]){case"+":return t+e+i;case"-":return t-e+i;case"*":return t*e+i}}function b(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function _(e){e=e.points;for(var t,n=0,i=0;i<e.numberOfItems;i++){var s=e.getItem(i);0<i&&(n+=b(t,s)),t=s}return n}function w(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return 2*Math.PI*e.getAttribute("r");case"rect":return 2*e.getAttribute("width")+2*e.getAttribute("height");case"line":return b({x:e.getAttribute("x1"),y:e.getAttribute("y1")},{x:e.getAttribute("x2"),y:e.getAttribute("y2")});case"polyline":return _(e);case"polygon":var t=e.points;return _(e)+b(t.getItem(t.numberOfItems-1),t.getItem(0))}}function k(e,t){function n(n){return n=void 0===n?0:n,e.el.getPointAtLength(1<=t+n?t+n:0)}var i=n(),s=n(-1),r=n(1);switch(e.property){case"x":return i.x;case"y":return i.y;case"angle":return 180*Math.atan2(r.y-s.y,r.x-s.x)/Math.PI}}function E(e,t){var n,i=/-?\d*\.?\d+/g;if(n=B.pth(e)?e.totalLength:e,B.col(n))if(B.rgb(n)){var s=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);n=s?"rgba("+s[1]+",1)":n}else n=B.hex(n)?c(n):B.hsl(n)?l(n):void 0;else s=(s=u(n))?n.substr(0,n.length-s.length):n,n=t&&!/\s/g.test(n)?s+t:s;return n+="",{original:n,numbers:n.match(i)?n.match(i).map(Number):[0],strings:B.str(e)||t?n.split(i):[]}}function I(e){return e=e?n(B.arr(e)?e.map(i):i(e)):[],t(e,(function(e,t,n){return n.indexOf(e)===t}))}function T(e){var t=I(e);return t.map((function(e,n){return{target:e,id:n,total:t.length}}))}function C(e,t){var n=r(t);if(B.arr(e)){var s=e.length;2!==s||B.obj(e[0])?B.fnc(t.duration)||(n.duration=t.duration/s):e={value:e}}return i(e).map((function(e,n){return n=n?0:t.delay,e=B.obj(e)&&!B.pth(e)?e:{value:e},B.und(e.delay)&&(e.delay=n),e})).map((function(e){return a(e,n)}))}function O(e,t){var n,i={};for(n in e){var s=d(e[n],t);B.arr(s)&&(s=s.map((function(e){return d(e,t)})),1===s.length&&(s=s[0])),i[n]=s}return i.duration=parseFloat(i.duration),i.delay=parseFloat(i.delay),i}function S(e){return B.arr(e)?F.apply(this,e):U[e]}function A(e,t){var n;return e.tweens.map((function(i){i=O(i,t);var s=i.value,r=g(t.target,e.name),o=n?n.to.original:r,a=(o=B.arr(s)?s[0]:o,y(B.arr(s)?s[1]:s,o));r=u(a)||u(o)||u(r);return i.from=E(o,r),i.to=E(a,r),i.start=n?n.end:e.offset,i.end=i.start+i.delay+i.duration,i.easing=S(i.easing),i.elasticity=(1e3-Math.min(Math.max(i.elasticity,1),999))/1e3,i.isPath=B.pth(s),i.isColor=B.col(i.from.original),i.isColor&&(i.round=1),n=i}))}function D(e,i){return t(n(e.map((function(e){return i.map((function(t){var n=p(e.target,t.name);if(n){var i=A(t,e);t={type:n,property:t.name,animatable:e,tweens:i,duration:i[i.length-1].end,delay:i[0].delay}}else t=void 0;return t}))}))),(function(e){return!B.und(e)}))}function x(e,t,n,i){var s="delay"===e;return t.length?(s?Math.min:Math.max).apply(Math,t.map((function(t){return t[e]}))):s?i.delay:n.offset+i.delay+i.duration}function M(e){var t,n=o(N,e),i=o(P,e),s=T(e.targets),r=[],c=a(n,i);for(t in e)c.hasOwnProperty(t)||"targets"===t||r.push({name:t,offset:c.offset,tweens:C(e[t],i)});return e=D(s,r),a(n,{children:[],animatables:s,animations:e,duration:x("duration",e,n,i),delay:x("delay",e,n,i)})}function L(e){function n(){return window.Promise&&new Promise((function(e){return h=e}))}function i(e){return p.reversed?p.duration-e:e}function s(e){for(var n=0,i={},s=p.animations,r=s.length;n<r;){var o=s[n],a=o.animatable,c=o.tweens,l=c.length-1,u=c[l];l&&(u=t(c,(function(t){return e<t.end}))[0]||u);c=Math.min(Math.max(e-u.start-u.delay,0),u.duration)/u.duration;for(var h=isNaN(c)?1:u.easing(c,u.elasticity),d=(c=u.to.strings,u.round),m=(l=[],void 0),g=(m=u.to.numbers.length,0);g<m;g++){var v=void 0,y=(v=u.to.numbers[g],u.from.numbers[g]);v=u.isPath?k(u.value,h*v):y+h*(v-y);d&&(u.isColor&&2<g||(v=Math.round(v*d)/d)),l.push(v)}if(u=c.length)for(m=c[0],h=0;h<u;h++)d=c[h+1],g=l[h],isNaN(g)||(m=d?m+(g+d):m+(g+" "));else m=l[0];$[o.type](a.target,o.property,m,i,a.id),o.currentValue=m,n++}if(n=Object.keys(i).length)for(s=0;s<n;s++)R||(R=f(document.body,"transform")?"transform":"-webkit-transform"),p.animatables[s].target.style[R]=i[s].join(" ");p.currentTime=e,p.progress=e/p.duration*100}function r(e){p[e]&&p[e](p)}function o(){p.remaining&&!0!==p.remaining&&p.remaining--}function a(e){var t=p.duration,a=p.offset,f=a+p.delay,m=p.currentTime,g=p.reversed,v=i(e);if(p.children.length){var y=p.children,b=y.length;if(v>=p.currentTime)for(var _=0;_<b;_++)y[_].seek(v);else for(;b--;)y[b].seek(v)}(v>=f||!t)&&(p.began||(p.began=!0,r("begin")),r("run")),v>a&&v<t?s(v):(v<=a&&0!==m&&(s(0),g&&o()),(v>=t&&m!==t||!t)&&(s(t),g||o())),r("update"),e>=t&&(p.remaining?(l=c,"alternate"===p.direction&&(p.reversed=!p.reversed)):(p.pause(),p.completed||(p.completed=!0,r("complete"),"Promise"in window&&(h(),d=n()))),u=0)}e=void 0===e?{}:e;var c,l,u=0,h=null,d=n(),p=M(e);return p.reset=function(){var e=p.direction,t=p.loop;for(p.currentTime=0,p.progress=0,p.paused=!0,p.began=!1,p.completed=!1,p.reversed="reverse"===e,p.remaining="alternate"===e&&1===t?2:t,s(0),e=p.children.length;e--;)p.children[e].reset()},p.tick=function(e){c=e,l||(l=c),a((u+c-l)*L.speed)},p.seek=function(e){a(i(e))},p.pause=function(){var e=V.indexOf(p);-1<e&&V.splice(e,1),p.paused=!0},p.play=function(){p.paused&&(p.paused=!1,l=0,u=i(p.currentTime),V.push(p),q||H())},p.reverse=function(){p.reversed=!p.reversed,l=0,u=i(p.currentTime)},p.restart=function(){p.pause(),p.reset(),p.play()},p.finished=d,p.reset(),p.autoplay&&p.play(),p}var R,N={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},P={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},j="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),B={arr:function(e){return Array.isArray(e)},obj:function(e){return-1<Object.prototype.toString.call(e).indexOf("Object")},pth:function(e){return B.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},dom:function(e){return e.nodeType||B.svg(e)},str:function(e){return"string"===typeof e},fnc:function(e){return"function"===typeof e},und:function(e){return"undefined"===typeof e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return B.hex(e)||B.rgb(e)||B.hsl(e)}},F=function(){function e(e,t,n){return(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e}return function(t,n,i,s){if(0<=t&&1>=t&&0<=i&&1>=i){var r=new Float32Array(11);if(t!==n||i!==s)for(var o=0;11>o;++o)r[o]=e(.1*o,t,i);return function(o){if(t===n&&i===s)return o;if(0===o)return 0;if(1===o)return 1;for(var a=0,c=1;10!==c&&r[c]<=o;++c)a+=.1;--c;c=a+(o-r[c])/(r[c+1]-r[c])*.1;var l=3*(1-3*i+3*t)*c*c+2*(3*i-6*t)*c+3*t;if(.001<=l){for(a=0;4>a;++a){if(l=3*(1-3*i+3*t)*c*c+2*(3*i-6*t)*c+3*t,0===l)break;var u=e(c,t,i)-o;c=c-u/l}o=c}else if(0===l)o=c;else{c=a,a=a+.1;var h=0;do{u=c+(a-c)/2,l=e(u,t,i)-o,0<l?a=u:c=u}while(1e-7<Math.abs(l)&&10>++h);o=u}return e(o,n,s)}}}}(),U=function(){function e(e,t){return 0===e||1===e?e:-Math.pow(2,10*(e-1))*Math.sin(2*(e-1-t/(2*Math.PI)*Math.asin(1))*Math.PI/t)}var t,n="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),i={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],e],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(t,n){return 1-e(1-t,n)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(t,n){return.5>t?e(2*t,n)/2:1-e(-2*t+2,n)/2}]},s={linear:F(.25,.25,.75,.75)},r={};for(t in i)r.type=t,i[r.type].forEach(function(e){return function(t,i){s["ease"+e.type+n[i]]=B.fnc(t)?t:F.apply(v,t)}}(r)),r={type:r.type};return s}(),$={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,i,s){i[s]||(i[s]=[]),i[s].push(t+"("+n+")")}},V=[],q=0,H=function(){function e(){q=requestAnimationFrame(t)}function t(t){var n=V.length;if(n){for(var i=0;i<n;)V[i]&&V[i].tick(t),i++;e()}else cancelAnimationFrame(q),q=0}return e}();return L.version="2.2.0",L.speed=1,L.running=V,L.remove=function(e){e=I(e);for(var t=V.length;t--;)for(var n=V[t],i=n.animations,r=i.length;r--;)s(e,i[r].animatable.target)&&(i.splice(r,1),i.length||n.pause())},L.getValue=g,L.path=function(t,n){var i=B.str(t)?e(t)[0]:t,s=n||100;return function(e){return{el:i,property:e,totalLength:w(i)*(s/100)}}},L.setDashoffset=function(e){var t=w(e);return e.setAttribute("stroke-dasharray",t),t},L.bezier=F,L.easings=U,L.timeline=function(e){var t=L(e);return t.pause(),t.duration=0,t.add=function(n){return t.children.forEach((function(e){e.began=!0,e.completed=!0})),i(n).forEach((function(n){var i=a(n,o(P,e||{}));i.targets=i.targets||e.targets,n=t.duration;var s=i.offset;i.autoplay=!1,i.direction=t.direction,i.offset=B.und(s)?n:y(s,n),t.began=!0,t.completed=!0,t.seek(i.offset),i=L(i),i.began=!0,i.completed=!0,i.duration>n&&(t.duration=i.duration),t.children.push(i)})),t.seek(0),t.reset(),t.autoplay&&t.restart(),t},t},L.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},L})),function(e,t){"use strict";var n={accordion:!0,onOpenStart:void 0,onOpenEnd:void 0,onCloseStart:void 0,onCloseEnd:void 0,inDuration:300,outDuration:300},i=function(i){function s(t,n){l(this,s);var i=a(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,s,t,n));i.el.M_Collapsible=i,i.options=e.extend({},s.defaults,n),i.$headers=i.$el.children("li").children(".collapsible-header"),i.$headers.attr("tabindex",0),i._setupEventHandlers();var r=i.$el.children("li.active").children(".collapsible-body");return i.options.accordion?r.first().css("display","block"):r.css("display","block"),i}return c(s,i),o(s,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.M_Collapsible=void 0}},{key:"_setupEventHandlers",value:function(){var e=this;this._handleCollapsibleClickBound=this._handleCollapsibleClick.bind(this),this._handleCollapsibleKeydownBound=this._handleCollapsibleKeydown.bind(this),this.el.addEventListener("click",this._handleCollapsibleClickBound),this.$headers.each((function(t){t.addEventListener("keydown",e._handleCollapsibleKeydownBound)}))}},{key:"_removeEventHandlers",value:function(){var e=this;this.el.removeEventListener("click",this._handleCollapsibleClickBound),this.$headers.each((function(t){t.removeEventListener("keydown",e._handleCollapsibleKeydownBound)}))}},{key:"_handleCollapsibleClick",value:function(t){var n=e(t.target).closest(".collapsible-header");if(t.target&&n.length){var i=n.closest(".collapsible");if(i[0]===this.el){var s=n.closest("li"),r=i.children("li"),o=s[0].classList.contains("active"),a=r.index(s);o?this.close(a):this.open(a)}}}},{key:"_handleCollapsibleKeydown",value:function(e){13===e.keyCode&&this._handleCollapsibleClickBound(e)}},{key:"_animateIn",value:function(e){var n=this,i=this.$el.children("li").eq(e);if(i.length){var s=i.children(".collapsible-body");t.remove(s[0]),s.css({display:"block",overflow:"hidden",height:0,paddingTop:"",paddingBottom:""});var r=s.css("padding-top"),o=s.css("padding-bottom"),a=s[0].scrollHeight;s.css({paddingTop:0,paddingBottom:0}),t({targets:s[0],height:a,paddingTop:r,paddingBottom:o,duration:this.options.inDuration,easing:"easeInOutCubic",complete:function(e){s.css({overflow:"",paddingTop:"",paddingBottom:"",height:""}),"function"===typeof n.options.onOpenEnd&&n.options.onOpenEnd.call(n,i[0])}})}}},{key:"_animateOut",value:function(e){var n=this,i=this.$el.children("li").eq(e);if(i.length){var s=i.children(".collapsible-body");t.remove(s[0]),s.css("overflow","hidden"),t({targets:s[0],height:0,paddingTop:0,paddingBottom:0,duration:this.options.outDuration,easing:"easeInOutCubic",complete:function(){s.css({height:"",overflow:"",padding:"",display:""}),"function"===typeof n.options.onCloseEnd&&n.options.onCloseEnd.call(n,i[0])}})}}},{key:"open",value:function(t){var n=this,i=this.$el.children("li").eq(t);if(i.length&&!i[0].classList.contains("active")){if("function"===typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,i[0]),this.options.accordion){var s=this.$el.children("li"),r=this.$el.children("li.active");r.each((function(t){var i=s.index(e(t));n.close(i)}))}i[0].classList.add("active"),this._animateIn(t)}}},{key:"close",value:function(e){var t=this.$el.children("li").eq(e);t.length&&t[0].classList.contains("active")&&("function"===typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,t[0]),t[0].classList.remove("active"),this._animateOut(e))}}],[{key:"init",value:function(e,t){return r(s.__proto__||Object.getPrototypeOf(s),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Collapsible}},{key:"defaults",get:function(){return n}}]),s}(u);M.Collapsible=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"collapsible","M_Collapsible")}(cash,M.anime),function(e,t){"use strict";var n={alignment:"left",autoFocus:!0,constrainWidth:!0,container:null,coverTrigger:!0,closeOnClick:!0,hover:!1,inDuration:150,outDuration:250,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null,onItemClick:null},i=function(i){function s(t,n){l(this,s);var i=a(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,s,t,n));return i.el.M_Dropdown=i,s._dropdowns.push(i),i.id=M.getIdFromTrigger(t),i.dropdownEl=document.getElementById(i.id),i.$dropdownEl=e(i.dropdownEl),i.options=e.extend({},s.defaults,n),i.isOpen=!1,i.isScrollable=!1,i.isTouchMoving=!1,i.focusedIndex=-1,i.filterQuery=[],i.options.container?e(i.options.container).append(i.dropdownEl):i.$el.after(i.dropdownEl),i._makeDropdownFocusable(),i._resetFilterQueryBound=i._resetFilterQuery.bind(i),i._handleDocumentClickBound=i._handleDocumentClick.bind(i),i._handleDocumentTouchmoveBound=i._handleDocumentTouchmove.bind(i),i._handleDropdownClickBound=i._handleDropdownClick.bind(i),i._handleDropdownKeydownBound=i._handleDropdownKeydown.bind(i),i._handleTriggerKeydownBound=i._handleTriggerKeydown.bind(i),i._setupEventHandlers(),i}return c(s,i),o(s,[{key:"destroy",value:function(){this._resetDropdownStyles(),this._removeEventHandlers(),s._dropdowns.splice(s._dropdowns.indexOf(this),1),this.el.M_Dropdown=void 0}},{key:"_setupEventHandlers",value:function(){this.el.addEventListener("keydown",this._handleTriggerKeydownBound),this.dropdownEl.addEventListener("click",this._handleDropdownClickBound),this.options.hover?(this._handleMouseEnterBound=this._handleMouseEnter.bind(this),this.el.addEventListener("mouseenter",this._handleMouseEnterBound),this._handleMouseLeaveBound=this._handleMouseLeave.bind(this),this.el.addEventListener("mouseleave",this._handleMouseLeaveBound),this.dropdownEl.addEventListener("mouseleave",this._handleMouseLeaveBound)):(this._handleClickBound=this._handleClick.bind(this),this.el.addEventListener("click",this._handleClickBound))}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("keydown",this._handleTriggerKeydownBound),this.dropdownEl.removeEventListener("click",this._handleDropdownClickBound),this.options.hover?(this.el.removeEventListener("mouseenter",this._handleMouseEnterBound),this.el.removeEventListener("mouseleave",this._handleMouseLeaveBound),this.dropdownEl.removeEventListener("mouseleave",this._handleMouseLeaveBound)):this.el.removeEventListener("click",this._handleClickBound)}},{key:"_setupTemporaryEventHandlers",value:function(){document.body.addEventListener("click",this._handleDocumentClickBound,!0),document.body.addEventListener("touchend",this._handleDocumentClickBound),document.body.addEventListener("touchmove",this._handleDocumentTouchmoveBound),this.dropdownEl.addEventListener("keydown",this._handleDropdownKeydownBound)}},{key:"_removeTemporaryEventHandlers",value:function(){document.body.removeEventListener("click",this._handleDocumentClickBound,!0),document.body.removeEventListener("touchend",this._handleDocumentClickBound),document.body.removeEventListener("touchmove",this._handleDocumentTouchmoveBound),this.dropdownEl.removeEventListener("keydown",this._handleDropdownKeydownBound)}},{key:"_handleClick",value:function(e){e.preventDefault(),this.open()}},{key:"_handleMouseEnter",value:function(){this.open()}},{key:"_handleMouseLeave",value:function(t){var n=t.toElement||t.relatedTarget,i=!!e(n).closest(".dropdown-content").length,s=!1,r=e(n).closest(".dropdown-trigger");r.length&&r[0].M_Dropdown&&r[0].M_Dropdown.isOpen&&(s=!0),s||i||this.close()}},{key:"_handleDocumentClick",value:function(t){var n=this,i=e(t.target);this.options.closeOnClick&&i.closest(".dropdown-content").length&&!this.isTouchMoving?setTimeout((function(){n.close()}),0):!i.closest(".dropdown-trigger").length&&i.closest(".dropdown-content").length||setTimeout((function(){n.close()}),0),this.isTouchMoving=!1}},{key:"_handleTriggerKeydown",value:function(e){e.which!==M.keys.ARROW_DOWN&&e.which!==M.keys.ENTER||this.isOpen||(e.preventDefault(),this.open())}},{key:"_handleDocumentTouchmove",value:function(t){var n=e(t.target);n.closest(".dropdown-content").length&&(this.isTouchMoving=!0)}},{key:"_handleDropdownClick",value:function(t){if("function"===typeof this.options.onItemClick){var n=e(t.target).closest("li")[0];this.options.onItemClick.call(this,n)}}},{key:"_handleDropdownKeydown",value:function(t){if(t.which===M.keys.TAB)t.preventDefault(),this.close();else if(t.which!==M.keys.ARROW_DOWN&&t.which!==M.keys.ARROW_UP||!this.isOpen)if(t.which===M.keys.ENTER&&this.isOpen){var n=this.dropdownEl.children[this.focusedIndex],i=e(n).find("a, button").first();i.length?i[0].click():n.click()}else t.which===M.keys.ESC&&this.isOpen&&(t.preventDefault(),this.close());else{t.preventDefault();var s=t.which===M.keys.ARROW_DOWN?1:-1,r=this.focusedIndex,o=!1;do{if(r+=s,this.dropdownEl.children[r]&&-1!==this.dropdownEl.children[r].tabIndex){o=!0;break}}while(r<this.dropdownEl.children.length&&r>=0);o&&(this.focusedIndex=r,this._focusFocusedItem())}var a=String.fromCharCode(t.which).toLowerCase(),c=[9,13,27,38,40];if(a&&-1===c.indexOf(t.which)){this.filterQuery.push(a);var l=this.filterQuery.join(""),u=e(this.dropdownEl).find("li").filter((function(t){return 0===e(t).text().toLowerCase().indexOf(l)}))[0];u&&(this.focusedIndex=e(u).index(),this._focusFocusedItem())}this.filterTimeout=setTimeout(this._resetFilterQueryBound,1e3)}},{key:"_resetFilterQuery",value:function(){this.filterQuery=[]}},{key:"_resetDropdownStyles",value:function(){this.$dropdownEl.css({display:"",width:"",height:"",left:"",top:"","transform-origin":"",transform:"",opacity:""})}},{key:"_makeDropdownFocusable",value:function(){this.dropdownEl.tabIndex=0,e(this.dropdownEl).children().each((function(e){e.getAttribute("tabindex")||e.setAttribute("tabindex",0)}))}},{key:"_focusFocusedItem",value:function(){this.focusedIndex>=0&&this.focusedIndex<this.dropdownEl.children.length&&this.options.autoFocus&&this.dropdownEl.children[this.focusedIndex].focus()}},{key:"_getDropdownPosition",value:function(){this.el.offsetParent.getBoundingClientRect();var e=this.el.getBoundingClientRect(),t=this.dropdownEl.getBoundingClientRect(),n=t.height,i=t.width,s=e.left-t.left,r=e.top-t.top,o={left:s,top:r,height:n,width:i},a=this.dropdownEl.offsetParent?this.dropdownEl.offsetParent:this.dropdownEl.parentNode,c=M.checkPossibleAlignments(this.el,a,o,this.options.coverTrigger?0:e.height),l="top",u=this.options.alignment;if(r+=this.options.coverTrigger?0:e.height,this.isScrollable=!1,c.top||(c.bottom?l="bottom":(this.isScrollable=!0,c.spaceOnTop>c.spaceOnBottom?(l="bottom",n+=c.spaceOnTop,r-=c.spaceOnTop):n+=c.spaceOnBottom)),!c[u]){var h="left"===u?"right":"left";c[h]?u=h:c.spaceOnLeft>c.spaceOnRight?(u="right",i+=c.spaceOnLeft,s-=c.spaceOnLeft):(u="left",i+=c.spaceOnRight)}return"bottom"===l&&(r=r-t.height+(this.options.coverTrigger?e.height:0)),"right"===u&&(s=s-t.width+e.width),{x:s,y:r,verticalAlignment:l,horizontalAlignment:u,height:n,width:i}}},{key:"_animateIn",value:function(){var e=this;t.remove(this.dropdownEl),t({targets:this.dropdownEl,opacity:{value:[0,1],easing:"easeOutQuad"},scaleX:[.3,1],scaleY:[.3,1],duration:this.options.inDuration,easing:"easeOutQuint",complete:function(t){if(e.options.autoFocus&&e.dropdownEl.focus(),"function"===typeof e.options.onOpenEnd){var n=t.animatables[0].target;e.options.onOpenEnd.call(n,e.el)}}})}},{key:"_animateOut",value:function(){var e=this;t.remove(this.dropdownEl),t({targets:this.dropdownEl,opacity:{value:0,easing:"easeOutQuint"},scaleX:.3,scaleY:.3,duration:this.options.outDuration,easing:"easeOutQuint",complete:function(t){if(e._resetDropdownStyles(),"function"===typeof e.options.onCloseEnd){t.animatables[0].target;e.options.onCloseEnd.call(e,e.el)}}})}},{key:"_placeDropdown",value:function(){var e=this.options.constrainWidth?this.el.getBoundingClientRect().width:this.dropdownEl.getBoundingClientRect().width;this.dropdownEl.style.width=e+"px";var t=this._getDropdownPosition();this.dropdownEl.style.left=t.x+"px",this.dropdownEl.style.top=t.y+"px",this.dropdownEl.style.height=t.height+"px",this.dropdownEl.style.width=t.width+"px",this.dropdownEl.style.transformOrigin=("left"===t.horizontalAlignment?"0":"100%")+" "+("top"===t.verticalAlignment?"0":"100%")}},{key:"open",value:function(){this.isOpen||(this.isOpen=!0,"function"===typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,this.el),this._resetDropdownStyles(),this.dropdownEl.style.display="block",this._placeDropdown(),this._animateIn(),this._setupTemporaryEventHandlers())}},{key:"close",value:function(){this.isOpen&&(this.isOpen=!1,this.focusedIndex=-1,"function"===typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,this.el),this._animateOut(),this._removeTemporaryEventHandlers(),this.options.autoFocus&&this.el.focus())}},{key:"recalculateDimensions",value:function(){this.isOpen&&(this.$dropdownEl.css({width:"",height:"",left:"",top:"","transform-origin":""}),this._placeDropdown())}}],[{key:"init",value:function(e,t){return r(s.__proto__||Object.getPrototypeOf(s),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Dropdown}},{key:"defaults",get:function(){return n}}]),s}(u);i._dropdowns=[],window.M.Dropdown=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"dropdown","M_Dropdown")}(cash,M.anime),function(e,t){"use strict";var n={opacity:.5,inDuration:250,outDuration:250,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null,preventScrolling:!0,dismissible:!0,startingTop:"4%",endingTop:"10%"},i=function(i){function s(t,n){l(this,s);var i=a(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,s,t,n));return i.el.M_Modal=i,i.options=e.extend({},s.defaults,n),i.isOpen=!1,i.id=i.$el.attr("id"),i._openingTrigger=void 0,i.$overlay=e('<div class="modal-overlay"></div>'),i.el.tabIndex=0,i._nthModalOpened=0,s._count++,i._setupEventHandlers(),i}return c(s,i),o(s,[{key:"destroy",value:function(){s._count--,this._removeEventHandlers(),this.el.removeAttribute("style"),this.$overlay.remove(),this.el.M_Modal=void 0}},{key:"_setupEventHandlers",value:function(){this._handleOverlayClickBound=this._handleOverlayClick.bind(this),this._handleModalCloseClickBound=this._handleModalCloseClick.bind(this),1===s._count&&document.body.addEventListener("click",this._handleTriggerClick),this.$overlay[0].addEventListener("click",this._handleOverlayClickBound),this.el.addEventListener("click",this._handleModalCloseClickBound)}},{key:"_removeEventHandlers",value:function(){0===s._count&&document.body.removeEventListener("click",this._handleTriggerClick),this.$overlay[0].removeEventListener("click",this._handleOverlayClickBound),this.el.removeEventListener("click",this._handleModalCloseClickBound)}},{key:"_handleTriggerClick",value:function(t){var n=e(t.target).closest(".modal-trigger");if(n.length){var i=M.getIdFromTrigger(n[0]),s=document.getElementById(i).M_Modal;s&&s.open(n),t.preventDefault()}}},{key:"_handleOverlayClick",value:function(){this.options.dismissible&&this.close()}},{key:"_handleModalCloseClick",value:function(t){var n=e(t.target).closest(".modal-close");n.length&&this.close()}},{key:"_handleKeydown",value:function(e){27===e.keyCode&&this.options.dismissible&&this.close()}},{key:"_handleFocus",value:function(e){this.el.contains(e.target)||this._nthModalOpened!==s._modalsOpen||this.el.focus()}},{key:"_animateIn",value:function(){var n=this;e.extend(this.el.style,{display:"block",opacity:0}),e.extend(this.$overlay[0].style,{display:"block",opacity:0}),t({targets:this.$overlay[0],opacity:this.options.opacity,duration:this.options.inDuration,easing:"easeOutQuad"});var i={targets:this.el,duration:this.options.inDuration,easing:"easeOutCubic",complete:function(){"function"===typeof n.options.onOpenEnd&&n.options.onOpenEnd.call(n,n.el,n._openingTrigger)}};this.el.classList.contains("bottom-sheet")?(e.extend(i,{bottom:0,opacity:1}),t(i)):(e.extend(i,{top:[this.options.startingTop,this.options.endingTop],opacity:1,scaleX:[.8,1],scaleY:[.8,1]}),t(i))}},{key:"_animateOut",value:function(){var n=this;t({targets:this.$overlay[0],opacity:0,duration:this.options.outDuration,easing:"easeOutQuart"});var i={targets:this.el,duration:this.options.outDuration,easing:"easeOutCubic",complete:function(){n.el.style.display="none",n.$overlay.remove(),"function"===typeof n.options.onCloseEnd&&n.options.onCloseEnd.call(n,n.el)}};this.el.classList.contains("bottom-sheet")?(e.extend(i,{bottom:"-100%",opacity:0}),t(i)):(e.extend(i,{top:[this.options.endingTop,this.options.startingTop],opacity:0,scaleX:.8,scaleY:.8}),t(i))}},{key:"open",value:function(e){if(!this.isOpen)return this.isOpen=!0,s._modalsOpen++,this._nthModalOpened=s._modalsOpen,this.$overlay[0].style.zIndex=1e3+2*s._modalsOpen,this.el.style.zIndex=1e3+2*s._modalsOpen+1,this._openingTrigger=e?e[0]:void 0,"function"===typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,this.el,this._openingTrigger),this.options.preventScrolling&&(document.body.style.overflow="hidden"),this.el.classList.add("open"),this.el.insertAdjacentElement("afterend",this.$overlay[0]),this.options.dismissible&&(this._handleKeydownBound=this._handleKeydown.bind(this),this._handleFocusBound=this._handleFocus.bind(this),document.addEventListener("keydown",this._handleKeydownBound),document.addEventListener("focus",this._handleFocusBound,!0)),t.remove(this.el),t.remove(this.$overlay[0]),this._animateIn(),this.el.focus(),this}},{key:"close",value:function(){if(this.isOpen)return this.isOpen=!1,s._modalsOpen--,this._nthModalOpened=0,"function"===typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,this.el),this.el.classList.remove("open"),0===s._modalsOpen&&(document.body.style.overflow=""),this.options.dismissible&&(document.removeEventListener("keydown",this._handleKeydownBound),document.removeEventListener("focus",this._handleFocusBound,!0)),t.remove(this.el),t.remove(this.$overlay[0]),this._animateOut(),this}}],[{key:"init",value:function(e,t){return r(s.__proto__||Object.getPrototypeOf(s),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Modal}},{key:"defaults",get:function(){return n}}]),s}(u);i._modalsOpen=0,i._count=0,M.Modal=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"modal","M_Modal")}(cash,M.anime),function(e,t){"use strict";var n={inDuration:275,outDuration:200,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null},i=function(i){function s(t,n){l(this,s);var i=a(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,s,t,n));return i.el.M_Materialbox=i,i.options=e.extend({},s.defaults,n),i.overlayActive=!1,i.doneAnimating=!0,i.placeholder=e("<div></div>").addClass("material-placeholder"),i.originalWidth=0,i.originalHeight=0,i.originInlineStyles=i.$el.attr("style"),i.caption=i.el.getAttribute("data-caption")||"",i.$el.before(i.placeholder),i.placeholder.append(i.$el),i._setupEventHandlers(),i}return c(s,i),o(s,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.M_Materialbox=void 0,e(this.placeholder).after(this.el).remove(),this.$el.removeAttr("style")}},{key:"_setupEventHandlers",value:function(){this._handleMaterialboxClickBound=this._handleMaterialboxClick.bind(this),this.el.addEventListener("click",this._handleMaterialboxClickBound)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleMaterialboxClickBound)}},{key:"_handleMaterialboxClick",value:function(e){!1===this.doneAnimating||this.overlayActive&&this.doneAnimating?this.close():this.open()}},{key:"_handleWindowScroll",value:function(){this.overlayActive&&this.close()}},{key:"_handleWindowResize",value:function(){this.overlayActive&&this.close()}},{key:"_handleWindowEscape",value:function(e){27===e.keyCode&&this.doneAnimating&&this.overlayActive&&this.close()}},{key:"_makeAncestorsOverflowVisible",value:function(){this.ancestorsChanged=e();var t=this.placeholder[0].parentNode;while(null!==t&&!e(t).is(document)){var n=e(t);"visible"!==n.css("overflow")&&(n.css("overflow","visible"),void 0===this.ancestorsChanged?this.ancestorsChanged=n:this.ancestorsChanged=this.ancestorsChanged.add(n)),t=t.parentNode}}},{key:"_animateImageIn",value:function(){var e=this,n={targets:this.el,height:[this.originalHeight,this.newHeight],width:[this.originalWidth,this.newWidth],left:M.getDocumentScrollLeft()+this.windowWidth/2-this.placeholder.offset().left-this.newWidth/2,top:M.getDocumentScrollTop()+this.windowHeight/2-this.placeholder.offset().top-this.newHeight/2,duration:this.options.inDuration,easing:"easeOutQuad",complete:function(){e.doneAnimating=!0,"function"===typeof e.options.onOpenEnd&&e.options.onOpenEnd.call(e,e.el)}};this.maxWidth=this.$el.css("max-width"),this.maxHeight=this.$el.css("max-height"),"none"!==this.maxWidth&&(n.maxWidth=this.newWidth),"none"!==this.maxHeight&&(n.maxHeight=this.newHeight),t(n)}},{key:"_animateImageOut",value:function(){var e=this,n={targets:this.el,width:this.originalWidth,height:this.originalHeight,left:0,top:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){e.placeholder.css({height:"",width:"",position:"",top:"",left:""}),e.attrWidth&&e.$el.attr("width",e.attrWidth),e.attrHeight&&e.$el.attr("height",e.attrHeight),e.$el.removeAttr("style"),e.originInlineStyles&&e.$el.attr("style",e.originInlineStyles),e.$el.removeClass("active"),e.doneAnimating=!0,e.ancestorsChanged.length&&e.ancestorsChanged.css("overflow",""),"function"===typeof e.options.onCloseEnd&&e.options.onCloseEnd.call(e,e.el)}};t(n)}},{key:"_updateVars",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.caption=this.el.getAttribute("data-caption")||""}},{key:"open",value:function(){var n=this;this._updateVars(),this.originalWidth=this.el.getBoundingClientRect().width,this.originalHeight=this.el.getBoundingClientRect().height,this.doneAnimating=!1,this.$el.addClass("active"),this.overlayActive=!0,"function"===typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,this.el),this.placeholder.css({width:this.placeholder[0].getBoundingClientRect().width+"px",height:this.placeholder[0].getBoundingClientRect().height+"px",position:"relative",top:0,left:0}),this._makeAncestorsOverflowVisible(),this.$el.css({position:"absolute","z-index":1e3,"will-change":"left, top, width, height"}),this.attrWidth=this.$el.attr("width"),this.attrHeight=this.$el.attr("height"),this.attrWidth&&(this.$el.css("width",this.attrWidth+"px"),this.$el.removeAttr("width")),this.attrHeight&&(this.$el.css("width",this.attrHeight+"px"),this.$el.removeAttr("height")),this.$overlay=e('<div id="materialbox-overlay"></div>').css({opacity:0}).one("click",(function(){n.doneAnimating&&n.close()})),this.$el.before(this.$overlay);var i=this.$overlay[0].getBoundingClientRect();this.$overlay.css({width:this.windowWidth+"px",height:this.windowHeight+"px",left:-1*i.left+"px",top:-1*i.top+"px"}),t.remove(this.el),t.remove(this.$overlay[0]),t({targets:this.$overlay[0],opacity:1,duration:this.options.inDuration,easing:"easeOutQuad"}),""!==this.caption&&(this.$photocaption&&t.remove(this.$photoCaption[0]),this.$photoCaption=e('<div class="materialbox-caption"></div>'),this.$photoCaption.text(this.caption),e("body").append(this.$photoCaption),this.$photoCaption.css({display:"inline"}),t({targets:this.$photoCaption[0],opacity:1,duration:this.options.inDuration,easing:"easeOutQuad"}));var s=0,r=this.originalWidth/this.windowWidth,o=this.originalHeight/this.windowHeight;this.newWidth=0,this.newHeight=0,r>o?(s=this.originalHeight/this.originalWidth,this.newWidth=.9*this.windowWidth,this.newHeight=.9*this.windowWidth*s):(s=this.originalWidth/this.originalHeight,this.newWidth=.9*this.windowHeight*s,this.newHeight=.9*this.windowHeight),this._animateImageIn(),this._handleWindowScrollBound=this._handleWindowScroll.bind(this),this._handleWindowResizeBound=this._handleWindowResize.bind(this),this._handleWindowEscapeBound=this._handleWindowEscape.bind(this),window.addEventListener("scroll",this._handleWindowScrollBound),window.addEventListener("resize",this._handleWindowResizeBound),window.addEventListener("keyup",this._handleWindowEscapeBound)}},{key:"close",value:function(){var e=this;this._updateVars(),this.doneAnimating=!1,"function"===typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,this.el),t.remove(this.el),t.remove(this.$overlay[0]),""!==this.caption&&t.remove(this.$photoCaption[0]),window.removeEventListener("scroll",this._handleWindowScrollBound),window.removeEventListener("resize",this._handleWindowResizeBound),window.removeEventListener("keyup",this._handleWindowEscapeBound),t({targets:this.$overlay[0],opacity:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){e.overlayActive=!1,e.$overlay.remove()}}),this._animateImageOut(),""!==this.caption&&t({targets:this.$photoCaption[0],opacity:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){e.$photoCaption.remove()}})}}],[{key:"init",value:function(e,t){return r(s.__proto__||Object.getPrototypeOf(s),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Materialbox}},{key:"defaults",get:function(){return n}}]),s}(u);M.Materialbox=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"materialbox","M_Materialbox")}(cash,M.anime),function(e){"use strict";var t={responsiveThreshold:0},n=function(n){function i(t,n){l(this,i);var s=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));return s.el.M_Parallax=s,s.options=e.extend({},i.defaults,n),s._enabled=window.innerWidth>s.options.responsiveThreshold,s.$img=s.$el.find("img").first(),s.$img.each((function(){var t=this;t.complete&&e(t).trigger("load")})),s._updateParallax(),s._setupEventHandlers(),s._setupStyles(),i._parallaxes.push(s),s}return c(i,n),o(i,[{key:"destroy",value:function(){i._parallaxes.splice(i._parallaxes.indexOf(this),1),this.$img[0].style.transform="",this._removeEventHandlers(),this.$el[0].M_Parallax=void 0}},{key:"_setupEventHandlers",value:function(){this._handleImageLoadBound=this._handleImageLoad.bind(this),this.$img[0].addEventListener("load",this._handleImageLoadBound),0===i._parallaxes.length&&(i._handleScrollThrottled=M.throttle(i._handleScroll,5),window.addEventListener("scroll",i._handleScrollThrottled),i._handleWindowResizeThrottled=M.throttle(i._handleWindowResize,5),window.addEventListener("resize",i._handleWindowResizeThrottled))}},{key:"_removeEventHandlers",value:function(){this.$img[0].removeEventListener("load",this._handleImageLoadBound),0===i._parallaxes.length&&(window.removeEventListener("scroll",i._handleScrollThrottled),window.removeEventListener("resize",i._handleWindowResizeThrottled))}},{key:"_setupStyles",value:function(){this.$img[0].style.opacity=1}},{key:"_handleImageLoad",value:function(){this._updateParallax()}},{key:"_updateParallax",value:function(){var e=this.$el.height()>0?this.el.parentNode.offsetHeight:500,t=this.$img[0].offsetHeight,n=t-e,i=this.$el.offset().top+e,s=this.$el.offset().top,r=M.getDocumentScrollTop(),o=window.innerHeight,a=r+o,c=(a-s)/(e+o),l=n*c;this._enabled?i>r&&s<r+o&&(this.$img[0].style.transform="translate3D(-50%, "+l+"px, 0)"):this.$img[0].style.transform=""}}],[{key:"init",value:function(e,t){return r(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Parallax}},{key:"_handleScroll",value:function(){for(var e=0;e<i._parallaxes.length;e++){var t=i._parallaxes[e];t._updateParallax.call(t)}}},{key:"_handleWindowResize",value:function(){for(var e=0;e<i._parallaxes.length;e++){var t=i._parallaxes[e];t._enabled=window.innerWidth>t.options.responsiveThreshold}}},{key:"defaults",get:function(){return t}}]),i}(u);n._parallaxes=[],M.Parallax=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"parallax","M_Parallax")}(cash),function(e,t){"use strict";var n={duration:300,onShow:null,swipeable:!1,responsiveThreshold:1/0},i=function(i){function s(t,n){l(this,s);var i=a(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,s,t,n));return i.el.M_Tabs=i,i.options=e.extend({},s.defaults,n),i.$tabLinks=i.$el.children("li.tab").children("a"),i.index=0,i._setupActiveTabLink(),i.options.swipeable?i._setupSwipeableTabs():i._setupNormalTabs(),i._setTabsAndTabWidth(),i._createIndicator(),i._setupEventHandlers(),i}return c(s,i),o(s,[{key:"destroy",value:function(){this._removeEventHandlers(),this._indicator.parentNode.removeChild(this._indicator),this.options.swipeable?this._teardownSwipeableTabs():this._teardownNormalTabs(),this.$el[0].M_Tabs=void 0}},{key:"_setupEventHandlers",value:function(){this._handleWindowResizeBound=this._handleWindowResize.bind(this),window.addEventListener("resize",this._handleWindowResizeBound),this._handleTabClickBound=this._handleTabClick.bind(this),this.el.addEventListener("click",this._handleTabClickBound)}},{key:"_removeEventHandlers",value:function(){window.removeEventListener("resize",this._handleWindowResizeBound),this.el.removeEventListener("click",this._handleTabClickBound)}},{key:"_handleWindowResize",value:function(){this._setTabsAndTabWidth(),0!==this.tabWidth&&0!==this.tabsWidth&&(this._indicator.style.left=this._calcLeftPos(this.$activeTabLink)+"px",this._indicator.style.right=this._calcRightPos(this.$activeTabLink)+"px")}},{key:"_handleTabClick",value:function(t){var n=this,i=e(t.target).closest("li.tab"),s=e(t.target).closest("a");if(s.length&&s.parent().hasClass("tab"))if(i.hasClass("disabled"))t.preventDefault();else if(!s.attr("target")){this.$activeTabLink.removeClass("active");var r=this.$content;this.$activeTabLink=s,this.$content=e(M.escapeHash(s[0].hash)),this.$tabLinks=this.$el.children("li.tab").children("a"),this.$activeTabLink.addClass("active");var o=this.index;this.index=Math.max(this.$tabLinks.index(s),0),this.options.swipeable?this._tabsCarousel&&this._tabsCarousel.set(this.index,(function(){"function"===typeof n.options.onShow&&n.options.onShow.call(n,n.$content[0])})):this.$content.length&&(this.$content[0].style.display="block",this.$content.addClass("active"),"function"===typeof this.options.onShow&&this.options.onShow.call(this,this.$content[0]),r.length&&!r.is(this.$content)&&(r[0].style.display="none",r.removeClass("active"))),this._setTabsAndTabWidth(),this._animateIndicator(o),t.preventDefault()}}},{key:"_createIndicator",value:function(){var e=this,t=document.createElement("li");t.classList.add("indicator"),this.el.appendChild(t),this._indicator=t,setTimeout((function(){e._indicator.style.left=e._calcLeftPos(e.$activeTabLink)+"px",e._indicator.style.right=e._calcRightPos(e.$activeTabLink)+"px"}),0)}},{key:"_setupActiveTabLink",value:function(){this.$activeTabLink=e(this.$tabLinks.filter('[href="'+location.hash+'"]')),0===this.$activeTabLink.length&&(this.$activeTabLink=this.$el.children("li.tab").children("a.active").first()),0===this.$activeTabLink.length&&(this.$activeTabLink=this.$el.children("li.tab").children("a").first()),this.$tabLinks.removeClass("active"),this.$activeTabLink[0].classList.add("active"),this.index=Math.max(this.$tabLinks.index(this.$activeTabLink),0),this.$activeTabLink.length&&(this.$content=e(M.escapeHash(this.$activeTabLink[0].hash)),this.$content.addClass("active"))}},{key:"_setupSwipeableTabs",value:function(){var t=this;window.innerWidth>this.options.responsiveThreshold&&(this.options.swipeable=!1);var n=e();this.$tabLinks.each((function(t){var i=e(M.escapeHash(t.hash));i.addClass("carousel-item"),n=n.add(i)}));var i=e('<div class="tabs-content carousel carousel-slider"></div>');n.first().before(i),i.append(n),n[0].style.display="";var s=this.$activeTabLink.closest(".tab").index();this._tabsCarousel=M.Carousel.init(i[0],{fullWidth:!0,noWrap:!0,onCycleTo:function(n){var i=t.index;t.index=e(n).index(),t.$activeTabLink.removeClass("active"),t.$activeTabLink=t.$tabLinks.eq(t.index),t.$activeTabLink.addClass("active"),t._animateIndicator(i),"function"===typeof t.options.onShow&&t.options.onShow.call(t,t.$content[0])}}),this._tabsCarousel.set(s)}},{key:"_teardownSwipeableTabs",value:function(){var e=this._tabsCarousel.$el;this._tabsCarousel.destroy(),e.after(e.children()),e.remove()}},{key:"_setupNormalTabs",value:function(){this.$tabLinks.not(this.$activeTabLink).each((function(t){if(t.hash){var n=e(M.escapeHash(t.hash));n.length&&(n[0].style.display="none")}}))}},{key:"_teardownNormalTabs",value:function(){this.$tabLinks.each((function(t){if(t.hash){var n=e(M.escapeHash(t.hash));n.length&&(n[0].style.display="")}}))}},{key:"_setTabsAndTabWidth",value:function(){this.tabsWidth=this.$el.width(),this.tabWidth=Math.max(this.tabsWidth,this.el.scrollWidth)/this.$tabLinks.length}},{key:"_calcRightPos",value:function(e){return Math.ceil(this.tabsWidth-e.position().left-e[0].getBoundingClientRect().width)}},{key:"_calcLeftPos",value:function(e){return Math.floor(e.position().left)}},{key:"updateTabIndicator",value:function(){this._setTabsAndTabWidth(),this._animateIndicator(this.index)}},{key:"_animateIndicator",value:function(e){var n=0,i=0;this.index-e>=0?n=90:i=90;var s={targets:this._indicator,left:{value:this._calcLeftPos(this.$activeTabLink),delay:n},right:{value:this._calcRightPos(this.$activeTabLink),delay:i},duration:this.options.duration,easing:"easeOutQuad"};t.remove(this._indicator),t(s)}},{key:"select",value:function(e){var t=this.$tabLinks.filter('[href="#'+e+'"]');t.length&&t.trigger("click")}}],[{key:"init",value:function(e,t){return r(s.__proto__||Object.getPrototypeOf(s),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Tabs}},{key:"defaults",get:function(){return n}}]),s}(u);window.M.Tabs=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"tabs","M_Tabs")}(cash,M.anime),function(e,t){"use strict";var n={exitDelay:200,enterDelay:0,html:null,margin:5,inDuration:250,outDuration:200,position:"bottom",transitionMovement:10},i=function(i){function s(t,n){l(this,s);var i=a(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,s,t,n));return i.el.M_Tooltip=i,i.options=e.extend({},s.defaults,n),i.isOpen=!1,i.isHovered=!1,i.isFocused=!1,i._appendTooltipEl(),i._setupEventHandlers(),i}return c(s,i),o(s,[{key:"destroy",value:function(){e(this.tooltipEl).remove(),this._removeEventHandlers(),this.el.M_Tooltip=void 0}},{key:"_appendTooltipEl",value:function(){var e=document.createElement("div");e.classList.add("material-tooltip"),this.tooltipEl=e;var t=document.createElement("div");t.classList.add("tooltip-content"),t.innerHTML=this.options.html,e.appendChild(t),document.body.appendChild(e)}},{key:"_updateTooltipContent",value:function(){this.tooltipEl.querySelector(".tooltip-content").innerHTML=this.options.html}},{key:"_setupEventHandlers",value:function(){this._handleMouseEnterBound=this._handleMouseEnter.bind(this),this._handleMouseLeaveBound=this._handleMouseLeave.bind(this),this._handleFocusBound=this._handleFocus.bind(this),this._handleBlurBound=this._handleBlur.bind(this),this.el.addEventListener("mouseenter",this._handleMouseEnterBound),this.el.addEventListener("mouseleave",this._handleMouseLeaveBound),this.el.addEventListener("focus",this._handleFocusBound,!0),this.el.addEventListener("blur",this._handleBlurBound,!0)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("mouseenter",this._handleMouseEnterBound),this.el.removeEventListener("mouseleave",this._handleMouseLeaveBound),this.el.removeEventListener("focus",this._handleFocusBound,!0),this.el.removeEventListener("blur",this._handleBlurBound,!0)}},{key:"open",value:function(t){this.isOpen||(t=void 0===t||void 0,this.isOpen=!0,this.options=e.extend({},this.options,this._getAttributeOptions()),this._updateTooltipContent(),this._setEnterDelayTimeout(t))}},{key:"close",value:function(){this.isOpen&&(this.isHovered=!1,this.isFocused=!1,this.isOpen=!1,this._setExitDelayTimeout())}},{key:"_setExitDelayTimeout",value:function(){var e=this;clearTimeout(this._exitDelayTimeout),this._exitDelayTimeout=setTimeout((function(){e.isHovered||e.isFocused||e._animateOut()}),this.options.exitDelay)}},{key:"_setEnterDelayTimeout",value:function(e){var t=this;clearTimeout(this._enterDelayTimeout),this._enterDelayTimeout=setTimeout((function(){(t.isHovered||t.isFocused||e)&&t._animateIn()}),this.options.enterDelay)}},{key:"_positionTooltip",value:function(){var t=this.el,n=this.tooltipEl,i=t.offsetHeight,s=t.offsetWidth,r=n.offsetHeight,o=n.offsetWidth,a=void 0,c=this.options.margin,l=void 0,u=void 0;this.xMovement=0,this.yMovement=0,l=t.getBoundingClientRect().top+M.getDocumentScrollTop(),u=t.getBoundingClientRect().left+M.getDocumentScrollLeft(),"top"===this.options.position?(l+=-r-c,u+=s/2-o/2,this.yMovement=-this.options.transitionMovement):"right"===this.options.position?(l+=i/2-r/2,u+=s+c,this.xMovement=this.options.transitionMovement):"left"===this.options.position?(l+=i/2-r/2,u+=-o-c,this.xMovement=-this.options.transitionMovement):(l+=i+c,u+=s/2-o/2,this.yMovement=this.options.transitionMovement),a=this._repositionWithinScreen(u,l,o,r),e(n).css({top:a.y+"px",left:a.x+"px"})}},{key:"_repositionWithinScreen",value:function(e,t,n,i){var s=M.getDocumentScrollLeft(),r=M.getDocumentScrollTop(),o=e-s,a=t-r,c={left:o,top:a,width:n,height:i},l=this.options.margin+this.options.transitionMovement,u=M.checkWithinContainer(document.body,c,l);return u.left?o=l:u.right&&(o-=o+n-window.innerWidth),u.top?a=l:u.bottom&&(a-=a+i-window.innerHeight),{x:o+s,y:a+r}}},{key:"_animateIn",value:function(){this._positionTooltip(),this.tooltipEl.style.visibility="visible",t.remove(this.tooltipEl),t({targets:this.tooltipEl,opacity:1,translateX:this.xMovement,translateY:this.yMovement,duration:this.options.inDuration,easing:"easeOutCubic"})}},{key:"_animateOut",value:function(){t.remove(this.tooltipEl),t({targets:this.tooltipEl,opacity:0,translateX:0,translateY:0,duration:this.options.outDuration,easing:"easeOutCubic"})}},{key:"_handleMouseEnter",value:function(){this.isHovered=!0,this.isFocused=!1,this.open(!1)}},{key:"_handleMouseLeave",value:function(){this.isHovered=!1,this.isFocused=!1,this.close()}},{key:"_handleFocus",value:function(){M.tabPressed&&(this.isFocused=!0,this.open(!1))}},{key:"_handleBlur",value:function(){this.isFocused=!1,this.close()}},{key:"_getAttributeOptions",value:function(){var e={},t=this.el.getAttribute("data-tooltip"),n=this.el.getAttribute("data-position");return t&&(e.html=t),n&&(e.position=n),e}}],[{key:"init",value:function(e,t){return r(s.__proto__||Object.getPrototypeOf(s),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Tooltip}},{key:"defaults",get:function(){return n}}]),s}(u);M.Tooltip=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"tooltip","M_Tooltip")}(cash,M.anime),function(e){"use strict";var t=t||{},n=document.querySelectorAll.bind(document);function i(e){return null!==e&&e===e.window}function s(e){return i(e)?e:9===e.nodeType&&e.defaultView}function r(e){var t,n,i={top:0,left:0},r=e&&e.ownerDocument;return t=r.documentElement,"undefined"!==typeof e.getBoundingClientRect&&(i=e.getBoundingClientRect()),n=s(r),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}}function o(e){var t="";for(var n in e)e.hasOwnProperty(n)&&(t+=n+":"+e[n]+";");return t}var a={duration:750,show:function(e,t){if(2===e.button)return!1;var n=t||this,i=document.createElement("div");i.className="waves-ripple",n.appendChild(i);var s=r(n),c=e.pageY-s.top,l=e.pageX-s.left,u="scale("+n.clientWidth/100*10+")";"touches"in e&&(c=e.touches[0].pageY-s.top,l=e.touches[0].pageX-s.left),i.setAttribute("data-hold",Date.now()),i.setAttribute("data-scale",u),i.setAttribute("data-x",l),i.setAttribute("data-y",c);var h={top:c+"px",left:l+"px"};i.className=i.className+" waves-notransition",i.setAttribute("style",o(h)),i.className=i.className.replace("waves-notransition",""),h["-webkit-transform"]=u,h["-moz-transform"]=u,h["-ms-transform"]=u,h["-o-transform"]=u,h.transform=u,h.opacity="1",h["-webkit-transition-duration"]=a.duration+"ms",h["-moz-transition-duration"]=a.duration+"ms",h["-o-transition-duration"]=a.duration+"ms",h["transition-duration"]=a.duration+"ms",h["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",h["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",h["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",h["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",i.setAttribute("style",o(h))},hide:function(e){c.touchup(e);var t=this,n=(t.clientWidth,null),i=t.getElementsByClassName("waves-ripple");if(!(i.length>0))return!1;n=i[i.length-1];var s=n.getAttribute("data-x"),r=n.getAttribute("data-y"),l=n.getAttribute("data-scale"),u=Date.now()-Number(n.getAttribute("data-hold")),h=350-u;h<0&&(h=0),setTimeout((function(){var i={top:r+"px",left:s+"px",opacity:"0","-webkit-transition-duration":a.duration+"ms","-moz-transition-duration":a.duration+"ms","-o-transition-duration":a.duration+"ms","transition-duration":a.duration+"ms","-webkit-transform":l,"-moz-transform":l,"-ms-transform":l,"-o-transform":l,transform:l};n.setAttribute("style",o(i)),setTimeout((function(){try{t.removeChild(n)}catch(e){return!1}}),a.duration)}),h)},wrapInput:function(e){for(var t=0;t<e.length;t++){var n=e[t];if("input"===n.tagName.toLowerCase()){var i=n.parentNode;if("i"===i.tagName.toLowerCase()&&-1!==i.className.indexOf("waves-effect"))continue;var s=document.createElement("i");s.className=n.className+" waves-input-wrapper";var r=n.getAttribute("style");r||(r=""),s.setAttribute("style",r),n.className="waves-button-input",n.removeAttribute("style"),i.replaceChild(s,n),s.appendChild(n)}}}},c={touches:0,allowEvent:function(e){var t=!0;return"touchstart"===e.type?c.touches+=1:"touchend"===e.type||"touchcancel"===e.type?setTimeout((function(){c.touches>0&&(c.touches-=1)}),500):"mousedown"===e.type&&c.touches>0&&(t=!1),t},touchup:function(e){c.allowEvent(e)}};function l(e){if(!1===c.allowEvent(e))return null;var t=null,n=e.target||e.srcElement;while(null!==n.parentNode){if(!(n instanceof SVGElement)&&-1!==n.className.indexOf("waves-effect")){t=n;break}n=n.parentNode}return t}function u(t){var n=l(t);null!==n&&(a.show(t,n),"ontouchstart"in e&&(n.addEventListener("touchend",a.hide,!1),n.addEventListener("touchcancel",a.hide,!1)),n.addEventListener("mouseup",a.hide,!1),n.addEventListener("mouseleave",a.hide,!1),n.addEventListener("dragend",a.hide,!1))}t.displayEffect=function(t){t=t||{},"duration"in t&&(a.duration=t.duration),a.wrapInput(n(".waves-effect")),"ontouchstart"in e&&document.body.addEventListener("touchstart",u,!1),document.body.addEventListener("mousedown",u,!1)},t.attach=function(t){"input"===t.tagName.toLowerCase()&&(a.wrapInput([t]),t=t.parentNode),"ontouchstart"in e&&t.addEventListener("touchstart",u,!1),t.addEventListener("mousedown",u,!1)},e.Waves=t,document.addEventListener("DOMContentLoaded",(function(){t.displayEffect()}),!1)}(window),function(e,t){"use strict";var n={html:"",displayLength:4e3,inDuration:300,outDuration:375,classes:"",completeCallback:null,activationPercent:.8},i=function(){function i(t){l(this,i),this.options=e.extend({},i.defaults,t),this.message=this.options.html,this.panning=!1,this.timeRemaining=this.options.displayLength,0===i._toasts.length&&i._createContainer(),i._toasts.push(this);var n=this._createToast();n.M_Toast=this,this.el=n,this.$el=e(n),this._animateIn(),this._setTimer()}return o(i,[{key:"_createToast",value:function(){var t=document.createElement("div");return t.classList.add("toast"),this.options.classes.length&&e(t).addClass(this.options.classes),("object"===typeof HTMLElement?this.message instanceof HTMLElement:this.message&&"object"===typeof this.message&&null!==this.message&&1===this.message.nodeType&&"string"===typeof this.message.nodeName)?t.appendChild(this.message):this.message.jquery?e(t).append(this.message[0]):t.innerHTML=this.message,i._container.appendChild(t),t}},{key:"_animateIn",value:function(){t({targets:this.el,top:0,opacity:1,duration:this.options.inDuration,easing:"easeOutCubic"})}},{key:"_setTimer",value:function(){var e=this;this.timeRemaining!==1/0&&(this.counterInterval=setInterval((function(){e.panning||(e.timeRemaining-=20),e.timeRemaining<=0&&e.dismiss()}),20))}},{key:"dismiss",value:function(){var e=this;window.clearInterval(this.counterInterval);var n=this.el.offsetWidth*this.options.activationPercent;this.wasSwiped&&(this.el.style.transition="transform .05s, opacity .05s",this.el.style.transform="translateX("+n+"px)",this.el.style.opacity=0),t({targets:this.el,opacity:0,marginTop:-40,duration:this.options.outDuration,easing:"easeOutExpo",complete:function(){"function"===typeof e.options.completeCallback&&e.options.completeCallback(),e.$el.remove(),i._toasts.splice(i._toasts.indexOf(e),1),0===i._toasts.length&&i._removeContainer()}})}}],[{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Toast}},{key:"_createContainer",value:function(){var e=document.createElement("div");e.setAttribute("id","toast-container"),e.addEventListener("touchstart",i._onDragStart),e.addEventListener("touchmove",i._onDragMove),e.addEventListener("touchend",i._onDragEnd),e.addEventListener("mousedown",i._onDragStart),document.addEventListener("mousemove",i._onDragMove),document.addEventListener("mouseup",i._onDragEnd),document.body.appendChild(e),i._container=e}},{key:"_removeContainer",value:function(){document.removeEventListener("mousemove",i._onDragMove),document.removeEventListener("mouseup",i._onDragEnd),e(i._container).remove(),i._container=null}},{key:"_onDragStart",value:function(t){if(t.target&&e(t.target).closest(".toast").length){var n=e(t.target).closest(".toast"),s=n[0].M_Toast;s.panning=!0,i._draggedToast=s,s.el.classList.add("panning"),s.el.style.transition="",s.startingXPos=i._xPos(t),s.time=Date.now(),s.xPos=i._xPos(t)}}},{key:"_onDragMove",value:function(e){if(i._draggedToast){e.preventDefault();var t=i._draggedToast;t.deltaX=Math.abs(t.xPos-i._xPos(e)),t.xPos=i._xPos(e),t.velocityX=t.deltaX/(Date.now()-t.time),t.time=Date.now();var n=t.xPos-t.startingXPos,s=t.el.offsetWidth*t.options.activationPercent;t.el.style.transform="translateX("+n+"px)",t.el.style.opacity=1-Math.abs(n/s)}}},{key:"_onDragEnd",value:function(){if(i._draggedToast){var e=i._draggedToast;e.panning=!1,e.el.classList.remove("panning");var t=e.xPos-e.startingXPos,n=e.el.offsetWidth*e.options.activationPercent,s=Math.abs(t)>n||e.velocityX>1;s?(e.wasSwiped=!0,e.dismiss()):(e.el.style.transition="transform .2s, opacity .2s",e.el.style.transform="",e.el.style.opacity=""),i._draggedToast=null}}},{key:"_xPos",value:function(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}},{key:"dismissAll",value:function(){for(var e in i._toasts)i._toasts[e].dismiss()}},{key:"defaults",get:function(){return n}}]),i}();i._toasts=[],i._container=null,i._draggedToast=null,M.Toast=i,M.toast=function(e){return new i(e)}}(cash,M.anime),function(e,t){"use strict";var n={edge:"left",draggable:!0,inDuration:250,outDuration:200,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null,preventScrolling:!0},i=function(i){function s(t,n){l(this,s);var i=a(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,s,t,n));return i.el.M_Sidenav=i,i.id=i.$el.attr("id"),i.options=e.extend({},s.defaults,n),i.isOpen=!1,i.isFixed=i.el.classList.contains("sidenav-fixed"),i.isDragged=!1,i.lastWindowWidth=window.innerWidth,i.lastWindowHeight=window.innerHeight,i._createOverlay(),i._createDragTarget(),i._setupEventHandlers(),i._setupClasses(),i._setupFixed(),s._sidenavs.push(i),i}return c(s,i),o(s,[{key:"destroy",value:function(){this._removeEventHandlers(),this._enableBodyScrolling(),this._overlay.parentNode.removeChild(this._overlay),this.dragTarget.parentNode.removeChild(this.dragTarget),this.el.M_Sidenav=void 0,this.el.style.transform="";var e=s._sidenavs.indexOf(this);e>=0&&s._sidenavs.splice(e,1)}},{key:"_createOverlay",value:function(){var e=document.createElement("div");this._closeBound=this.close.bind(this),e.classList.add("sidenav-overlay"),e.addEventListener("click",this._closeBound),document.body.appendChild(e),this._overlay=e}},{key:"_setupEventHandlers",value:function(){0===s._sidenavs.length&&document.body.addEventListener("click",this._handleTriggerClick),this._handleDragTargetDragBound=this._handleDragTargetDrag.bind(this),this._handleDragTargetReleaseBound=this._handleDragTargetRelease.bind(this),this._handleCloseDragBound=this._handleCloseDrag.bind(this),this._handleCloseReleaseBound=this._handleCloseRelease.bind(this),this._handleCloseTriggerClickBound=this._handleCloseTriggerClick.bind(this),this.dragTarget.addEventListener("touchmove",this._handleDragTargetDragBound),this.dragTarget.addEventListener("touchend",this._handleDragTargetReleaseBound),this._overlay.addEventListener("touchmove",this._handleCloseDragBound),this._overlay.addEventListener("touchend",this._handleCloseReleaseBound),this.el.addEventListener("touchmove",this._handleCloseDragBound),this.el.addEventListener("touchend",this._handleCloseReleaseBound),this.el.addEventListener("click",this._handleCloseTriggerClickBound),this.isFixed&&(this._handleWindowResizeBound=this._handleWindowResize.bind(this),window.addEventListener("resize",this._handleWindowResizeBound))}},{key:"_removeEventHandlers",value:function(){1===s._sidenavs.length&&document.body.removeEventListener("click",this._handleTriggerClick),this.dragTarget.removeEventListener("touchmove",this._handleDragTargetDragBound),this.dragTarget.removeEventListener("touchend",this._handleDragTargetReleaseBound),this._overlay.removeEventListener("touchmove",this._handleCloseDragBound),this._overlay.removeEventListener("touchend",this._handleCloseReleaseBound),this.el.removeEventListener("touchmove",this._handleCloseDragBound),this.el.removeEventListener("touchend",this._handleCloseReleaseBound),this.el.removeEventListener("click",this._handleCloseTriggerClickBound),this.isFixed&&window.removeEventListener("resize",this._handleWindowResizeBound)}},{key:"_handleTriggerClick",value:function(t){var n=e(t.target).closest(".sidenav-trigger");if(t.target&&n.length){var i=M.getIdFromTrigger(n[0]),s=document.getElementById(i).M_Sidenav;s&&s.open(n),t.preventDefault()}}},{key:"_startDrag",value:function(e){var n=e.targetTouches[0].clientX;this.isDragged=!0,this._startingXpos=n,this._xPos=this._startingXpos,this._time=Date.now(),this._width=this.el.getBoundingClientRect().width,this._overlay.style.display="block",this._initialScrollTop=this.isOpen?this.el.scrollTop:M.getDocumentScrollTop(),this._verticallyScrolling=!1,t.remove(this.el),t.remove(this._overlay)}},{key:"_dragMoveUpdate",value:function(e){var t=e.targetTouches[0].clientX,n=this.isOpen?this.el.scrollTop:M.getDocumentScrollTop();this.deltaX=Math.abs(this._xPos-t),this._xPos=t,this.velocityX=this.deltaX/(Date.now()-this._time),this._time=Date.now(),this._initialScrollTop!==n&&(this._verticallyScrolling=!0)}},{key:"_handleDragTargetDrag",value:function(e){if(this.options.draggable&&!this._isCurrentlyFixed()&&!this._verticallyScrolling){this.isDragged||this._startDrag(e),this._dragMoveUpdate(e);var t=this._xPos-this._startingXpos,n=t>0?"right":"left";t=Math.min(this._width,Math.abs(t)),this.options.edge===n&&(t=0);var i=t,s="translateX(-100%)";"right"===this.options.edge&&(s="translateX(100%)",i=-i),this.percentOpen=Math.min(1,t/this._width),this.el.style.transform=s+" translateX("+i+"px)",this._overlay.style.opacity=this.percentOpen}}},{key:"_handleDragTargetRelease",value:function(){this.isDragged&&(this.percentOpen>.2?this.open():this._animateOut(),this.isDragged=!1,this._verticallyScrolling=!1)}},{key:"_handleCloseDrag",value:function(e){if(this.isOpen){if(!this.options.draggable||this._isCurrentlyFixed()||this._verticallyScrolling)return;this.isDragged||this._startDrag(e),this._dragMoveUpdate(e);var t=this._xPos-this._startingXpos,n=t>0?"right":"left";t=Math.min(this._width,Math.abs(t)),this.options.edge!==n&&(t=0);var i=-t;"right"===this.options.edge&&(i=-i),this.percentOpen=Math.min(1,1-t/this._width),this.el.style.transform="translateX("+i+"px)",this._overlay.style.opacity=this.percentOpen}}},{key:"_handleCloseRelease",value:function(){this.isOpen&&this.isDragged&&(this.percentOpen>.8?this._animateIn():this.close(),this.isDragged=!1,this._verticallyScrolling=!1)}},{key:"_handleCloseTriggerClick",value:function(t){var n=e(t.target).closest(".sidenav-close");n.length&&!this._isCurrentlyFixed()&&this.close()}},{key:"_handleWindowResize",value:function(){this.lastWindowWidth!==window.innerWidth&&(window.innerWidth>992?this.open():this.close()),this.lastWindowWidth=window.innerWidth,this.lastWindowHeight=window.innerHeight}},{key:"_setupClasses",value:function(){"right"===this.options.edge&&(this.el.classList.add("right-aligned"),this.dragTarget.classList.add("right-aligned"))}},{key:"_removeClasses",value:function(){this.el.classList.remove("right-aligned"),this.dragTarget.classList.remove("right-aligned")}},{key:"_setupFixed",value:function(){this._isCurrentlyFixed()&&this.open()}},{key:"_isCurrentlyFixed",value:function(){return this.isFixed&&window.innerWidth>992}},{key:"_createDragTarget",value:function(){var e=document.createElement("div");e.classList.add("drag-target"),document.body.appendChild(e),this.dragTarget=e}},{key:"_preventBodyScrolling",value:function(){var e=document.body;e.style.overflow="hidden"}},{key:"_enableBodyScrolling",value:function(){var e=document.body;e.style.overflow=""}},{key:"open",value:function(){!0!==this.isOpen&&(this.isOpen=!0,"function"===typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,this.el),this._isCurrentlyFixed()?(t.remove(this.el),t({targets:this.el,translateX:0,duration:0,easing:"easeOutQuad"}),this._enableBodyScrolling(),this._overlay.style.display="none"):(this.options.preventScrolling&&this._preventBodyScrolling(),this.isDragged&&1==this.percentOpen||this._animateIn()))}},{key:"close",value:function(){if(!1!==this.isOpen)if(this.isOpen=!1,"function"===typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,this.el),this._isCurrentlyFixed()){var e="left"===this.options.edge?"-105%":"105%";this.el.style.transform="translateX("+e+")"}else this._enableBodyScrolling(),this.isDragged&&0==this.percentOpen?this._overlay.style.display="none":this._animateOut()}},{key:"_animateIn",value:function(){this._animateSidenavIn(),this._animateOverlayIn()}},{key:"_animateSidenavIn",value:function(){var e=this,n="left"===this.options.edge?-1:1;this.isDragged&&(n="left"===this.options.edge?n+this.percentOpen:n-this.percentOpen),t.remove(this.el),t({targets:this.el,translateX:[100*n+"%",0],duration:this.options.inDuration,easing:"easeOutQuad",complete:function(){"function"===typeof e.options.onOpenEnd&&e.options.onOpenEnd.call(e,e.el)}})}},{key:"_animateOverlayIn",value:function(){var n=0;this.isDragged?n=this.percentOpen:e(this._overlay).css({display:"block"}),t.remove(this._overlay),t({targets:this._overlay,opacity:[n,1],duration:this.options.inDuration,easing:"easeOutQuad"})}},{key:"_animateOut",value:function(){this._animateSidenavOut(),this._animateOverlayOut()}},{key:"_animateSidenavOut",value:function(){var e=this,n="left"===this.options.edge?-1:1,i=0;this.isDragged&&(i="left"===this.options.edge?n+this.percentOpen:n-this.percentOpen),t.remove(this.el),t({targets:this.el,translateX:[100*i+"%",105*n+"%"],duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){"function"===typeof e.options.onCloseEnd&&e.options.onCloseEnd.call(e,e.el)}})}},{key:"_animateOverlayOut",value:function(){var n=this;t.remove(this._overlay),t({targets:this._overlay,opacity:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){e(n._overlay).css("display","none")}})}}],[{key:"init",value:function(e,t){return r(s.__proto__||Object.getPrototypeOf(s),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Sidenav}},{key:"defaults",get:function(){return n}}]),s}(u);i._sidenavs=[],window.M.Sidenav=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"sidenav","M_Sidenav")}(cash,M.anime),function(e,t){"use strict";var n={throttle:100,scrollOffset:200,activeClass:"active",getActiveElement:function(e){return'a[href="#'+e+'"]'}},i=function(i){function s(t,n){l(this,s);var i=a(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,s,t,n));return i.el.M_ScrollSpy=i,i.options=e.extend({},s.defaults,n),s._elements.push(i),s._count++,s._increment++,i.tickId=-1,i.id=s._increment,i._setupEventHandlers(),i._handleWindowScroll(),i}return c(s,i),o(s,[{key:"destroy",value:function(){s._elements.splice(s._elements.indexOf(this),1),s._elementsInView.splice(s._elementsInView.indexOf(this),1),s._visibleElements.splice(s._visibleElements.indexOf(this.$el),1),s._count--,this._removeEventHandlers(),e(this.options.getActiveElement(this.$el.attr("id"))).removeClass(this.options.activeClass),this.el.M_ScrollSpy=void 0}},{key:"_setupEventHandlers",value:function(){var e=M.throttle(this._handleWindowScroll,200);this._handleThrottledResizeBound=e.bind(this),this._handleWindowScrollBound=this._handleWindowScroll.bind(this),1===s._count&&(window.addEventListener("scroll",this._handleWindowScrollBound),window.addEventListener("resize",this._handleThrottledResizeBound),document.body.addEventListener("click",this._handleTriggerClick))}},{key:"_removeEventHandlers",value:function(){0===s._count&&(window.removeEventListener("scroll",this._handleWindowScrollBound),window.removeEventListener("resize",this._handleThrottledResizeBound),document.body.removeEventListener("click",this._handleTriggerClick))}},{key:"_handleTriggerClick",value:function(n){for(var i=e(n.target),r=s._elements.length-1;r>=0;r--){var o=s._elements[r];if(i.is('a[href="#'+o.$el.attr("id")+'"]')){n.preventDefault();var a=o.$el.offset().top+1;t({targets:[document.documentElement,document.body],scrollTop:a-o.options.scrollOffset,duration:400,easing:"easeOutCubic"});break}}}},{key:"_handleWindowScroll",value:function(){s._ticks++;for(var e=M.getDocumentScrollTop(),t=M.getDocumentScrollLeft(),n=t+window.innerWidth,i=e+window.innerHeight,r=s._findElements(e,n,i,t),o=0;o<r.length;o++){var a=r[o],c=a.tickId;c<0&&a._enter(),a.tickId=s._ticks}for(var l=0;l<s._elementsInView.length;l++){var u=s._elementsInView[l],h=u.tickId;h>=0&&h!==s._ticks&&(u._exit(),u.tickId=-1)}s._elementsInView=r}},{key:"_enter",value:function(){s._visibleElements=s._visibleElements.filter((function(e){return 0!=e.height()})),s._visibleElements[0]?(e(this.options.getActiveElement(s._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),s._visibleElements[0][0].M_ScrollSpy&&this.id<s._visibleElements[0][0].M_ScrollSpy.id?s._visibleElements.unshift(this.$el):s._visibleElements.push(this.$el)):s._visibleElements.push(this.$el),e(this.options.getActiveElement(s._visibleElements[0].attr("id"))).addClass(this.options.activeClass)}},{key:"_exit",value:function(){var t=this;s._visibleElements=s._visibleElements.filter((function(e){return 0!=e.height()})),s._visibleElements[0]&&(e(this.options.getActiveElement(s._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),s._visibleElements=s._visibleElements.filter((function(e){return e.attr("id")!=t.$el.attr("id")})),s._visibleElements[0]&&e(this.options.getActiveElement(s._visibleElements[0].attr("id"))).addClass(this.options.activeClass))}}],[{key:"init",value:function(e,t){return r(s.__proto__||Object.getPrototypeOf(s),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_ScrollSpy}},{key:"_findElements",value:function(e,t,n,i){for(var r=[],o=0;o<s._elements.length;o++){var a=s._elements[o],c=e+a.options.scrollOffset||200;if(a.$el.height()>0){var l=a.$el.offset().top,u=a.$el.offset().left,h=u+a.$el.width(),d=l+a.$el.height(),f=!(u>t||h<i||l>n||d<c);f&&r.push(a)}}return r}},{key:"defaults",get:function(){return n}}]),s}(u);i._elements=[],i._elementsInView=[],i._visibleElements=[],i._count=0,i._increment=0,i._ticks=0,M.ScrollSpy=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"scrollSpy","M_ScrollSpy")}(cash,M.anime),function(e){"use strict";var t={data:{},limit:1/0,onAutocomplete:null,minLength:1,sortFunction:function(e,t,n){return e.indexOf(n)-t.indexOf(n)}},n=function(n){function i(t,n){l(this,i);var s=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));return s.el.M_Autocomplete=s,s.options=e.extend({},i.defaults,n),s.isOpen=!1,s.count=0,s.activeIndex=-1,s.oldVal,s.$inputField=s.$el.closest(".input-field"),s.$active=e(),s._mousedown=!1,s._setupDropdown(),s._setupEventHandlers(),s}return c(i,n),o(i,[{key:"destroy",value:function(){this._removeEventHandlers(),this._removeDropdown(),this.el.M_Autocomplete=void 0}},{key:"_setupEventHandlers",value:function(){this._handleInputBlurBound=this._handleInputBlur.bind(this),this._handleInputKeyupAndFocusBound=this._handleInputKeyupAndFocus.bind(this),this._handleInputKeydownBound=this._handleInputKeydown.bind(this),this._handleInputClickBound=this._handleInputClick.bind(this),this._handleContainerMousedownAndTouchstartBound=this._handleContainerMousedownAndTouchstart.bind(this),this._handleContainerMouseupAndTouchendBound=this._handleContainerMouseupAndTouchend.bind(this),this.el.addEventListener("blur",this._handleInputBlurBound),this.el.addEventListener("keyup",this._handleInputKeyupAndFocusBound),this.el.addEventListener("focus",this._handleInputKeyupAndFocusBound),this.el.addEventListener("keydown",this._handleInputKeydownBound),this.el.addEventListener("click",this._handleInputClickBound),this.container.addEventListener("mousedown",this._handleContainerMousedownAndTouchstartBound),this.container.addEventListener("mouseup",this._handleContainerMouseupAndTouchendBound),"undefined"!==typeof window.ontouchstart&&(this.container.addEventListener("touchstart",this._handleContainerMousedownAndTouchstartBound),this.container.addEventListener("touchend",this._handleContainerMouseupAndTouchendBound))}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("blur",this._handleInputBlurBound),this.el.removeEventListener("keyup",this._handleInputKeyupAndFocusBound),this.el.removeEventListener("focus",this._handleInputKeyupAndFocusBound),this.el.removeEventListener("keydown",this._handleInputKeydownBound),this.el.removeEventListener("click",this._handleInputClickBound),this.container.removeEventListener("mousedown",this._handleContainerMousedownAndTouchstartBound),this.container.removeEventListener("mouseup",this._handleContainerMouseupAndTouchendBound),"undefined"!==typeof window.ontouchstart&&(this.container.removeEventListener("touchstart",this._handleContainerMousedownAndTouchstartBound),this.container.removeEventListener("touchend",this._handleContainerMouseupAndTouchendBound))}},{key:"_setupDropdown",value:function(){var t=this;this.container=document.createElement("ul"),this.container.id="autocomplete-options-"+M.guid(),e(this.container).addClass("autocomplete-content dropdown-content"),this.$inputField.append(this.container),this.el.setAttribute("data-target",this.container.id),this.dropdown=M.Dropdown.init(this.el,{autoFocus:!1,closeOnClick:!1,coverTrigger:!1,onItemClick:function(n){t.selectOption(e(n))}}),this.el.removeEventListener("click",this.dropdown._handleClickBound)}},{key:"_removeDropdown",value:function(){this.container.parentNode.removeChild(this.container)}},{key:"_handleInputBlur",value:function(){this._mousedown||(this.close(),this._resetAutocomplete())}},{key:"_handleInputKeyupAndFocus",value:function(e){"keyup"===e.type&&(i._keydown=!1),this.count=0;var t=this.el.value.toLowerCase();13!==e.keyCode&&38!==e.keyCode&&40!==e.keyCode&&(this.oldVal===t||!M.tabPressed&&"focus"===e.type||this.open(),this.oldVal=t)}},{key:"_handleInputKeydown",value:function(t){i._keydown=!0;var n=t.keyCode,s=void 0,r=e(this.container).children("li").length;if(n===M.keys.ENTER&&this.activeIndex>=0)return s=e(this.container).children("li").eq(this.activeIndex),void(s.length&&(this.selectOption(s),t.preventDefault()));n!==M.keys.ARROW_UP&&n!==M.keys.ARROW_DOWN||(t.preventDefault(),n===M.keys.ARROW_UP&&this.activeIndex>0&&this.activeIndex--,n===M.keys.ARROW_DOWN&&this.activeIndex<r-1&&this.activeIndex++,this.$active.removeClass("active"),this.activeIndex>=0&&(this.$active=e(this.container).children("li").eq(this.activeIndex),this.$active.addClass("active")))}},{key:"_handleInputClick",value:function(e){this.open()}},{key:"_handleContainerMousedownAndTouchstart",value:function(e){this._mousedown=!0}},{key:"_handleContainerMouseupAndTouchend",value:function(e){this._mousedown=!1}},{key:"_highlight",value:function(e,t){var n=t.find("img"),i=t.text().toLowerCase().indexOf(""+e.toLowerCase()),s=i+e.length-1,r=t.text().slice(0,i),o=t.text().slice(i,s+1),a=t.text().slice(s+1);t.html("<span>"+r+"<span class='highlight'>"+o+"</span>"+a+"</span>"),n.length&&t.prepend(n)}},{key:"_resetCurrentElement",value:function(){this.activeIndex=-1,this.$active.removeClass("active")}},{key:"_resetAutocomplete",value:function(){e(this.container).empty(),this._resetCurrentElement(),this.oldVal=null,this.isOpen=!1,this._mousedown=!1}},{key:"selectOption",value:function(e){var t=e.text().trim();this.el.value=t,this.$el.trigger("change"),this._resetAutocomplete(),this.close(),"function"===typeof this.options.onAutocomplete&&this.options.onAutocomplete.call(this,t)}},{key:"_renderDropdown",value:function(t,n){var i=this;this._resetAutocomplete();var s=[];for(var r in t)if(t.hasOwnProperty(r)&&-1!==r.toLowerCase().indexOf(n)){if(this.count>=this.options.limit)break;var o={data:t[r],key:r};s.push(o),this.count++}if(this.options.sortFunction){var a=function(e,t){return i.options.sortFunction(e.key.toLowerCase(),t.key.toLowerCase(),n.toLowerCase())};s.sort(a)}for(var c=0;c<s.length;c++){var l=s[c],u=e("<li></li>");l.data?u.append('<img src="'+l.data+'" class="right circle"><span>'+l.key+"</span>"):u.append("<span>"+l.key+"</span>"),e(this.container).append(u),this._highlight(n,u)}}},{key:"open",value:function(){var e=this.el.value.toLowerCase();this._resetAutocomplete(),e.length>=this.options.minLength&&(this.isOpen=!0,this._renderDropdown(this.options.data,e)),this.dropdown.isOpen?this.dropdown.recalculateDimensions():this.dropdown.open()}},{key:"close",value:function(){this.dropdown.close()}},{key:"updateData",value:function(e){var t=this.el.value.toLowerCase();this.options.data=e,this.isOpen&&this._renderDropdown(e,t)}}],[{key:"init",value:function(e,t){return r(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Autocomplete}},{key:"defaults",get:function(){return t}}]),i}(u);n._keydown=!1,M.Autocomplete=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"autocomplete","M_Autocomplete")}(cash),function(e){M.updateTextFields=function(){var t="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";e(t).each((function(t,n){var i=e(this);t.value.length>0||e(t).is(":focus")||t.autofocus||null!==i.attr("placeholder")?i.siblings("label").addClass("active"):t.validity?i.siblings("label").toggleClass("active",!0===t.validity.badInput):i.siblings("label").removeClass("active")}))},M.validate_field=function(e){var t=null!==e.attr("data-length"),n=parseInt(e.attr("data-length")),i=e[0].value.length;0!==i||!1!==e[0].validity.badInput||e.is(":required")?e.hasClass("validate")&&(e.is(":valid")&&t&&i<=n||e.is(":valid")&&!t?(e.removeClass("invalid"),e.addClass("valid")):(e.removeClass("valid"),e.addClass("invalid"))):e.hasClass("validate")&&(e.removeClass("valid"),e.removeClass("invalid"))},M.textareaAutoResize=function(t){if(t instanceof Element&&(t=e(t)),t.length){var n=e(".hiddendiv").first();n.length||(n=e('<div class="hiddendiv common"></div>'),e("body").append(n));var i=t.css("font-family"),s=t.css("font-size"),r=t.css("line-height"),o=t.css("padding-top"),a=t.css("padding-right"),c=t.css("padding-bottom"),l=t.css("padding-left");s&&n.css("font-size",s),i&&n.css("font-family",i),r&&n.css("line-height",r),o&&n.css("padding-top",o),a&&n.css("padding-right",a),c&&n.css("padding-bottom",c),l&&n.css("padding-left",l),t.data("original-height")||t.data("original-height",t.height()),"off"===t.attr("wrap")&&n.css("overflow-wrap","normal").css("white-space","pre"),n.text(t[0].value+"\n");var u=n.html().replace(/\n/g,"<br>");n.html(u),t[0].offsetWidth>0&&t[0].offsetHeight>0?n.css("width",t.width()+"px"):n.css("width",window.innerWidth/2+"px"),t.data("original-height")<=n.innerHeight()?t.css("height",n.innerHeight()+"px"):t[0].value.length<t.data("previous-length")&&t.css("height",t.data("original-height")+"px"),t.data("previous-length",t[0].value.length)}else console.error("No textarea element found")},e(document).ready((function(){var t="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";e(document).on("change",t,(function(){0===this.value.length&&null===e(this).attr("placeholder")||e(this).siblings("label").addClass("active"),M.validate_field(e(this))})),e(document).ready((function(){M.updateTextFields()})),e(document).on("reset",(function(n){var i=e(n.target);i.is("form")&&(i.find(t).removeClass("valid").removeClass("invalid"),i.find(t).each((function(t){this.value.length&&e(this).siblings("label").removeClass("active")})),setTimeout((function(){i.find("select").each((function(){this.M_FormSelect&&e(this).trigger("change")}))}),0))})),document.addEventListener("focus",(function(n){e(n.target).is(t)&&e(n.target).siblings("label, .prefix").addClass("active")}),!0),document.addEventListener("blur",(function(n){var i=e(n.target);if(i.is(t)){var s=".prefix";0===i[0].value.length&&!0!==i[0].validity.badInput&&null===i.attr("placeholder")&&(s+=", label"),i.siblings(s).removeClass("active"),M.validate_field(i)}}),!0);var n="input[type=radio], input[type=checkbox]";e(document).on("keyup",n,(function(t){if(t.which!==M.keys.TAB);else{e(this).addClass("tabbed");var n=e(this);n.one("blur",(function(t){e(this).removeClass("tabbed")}))}}));var i=".materialize-textarea";e(i).each((function(){var t=e(this);t.data("original-height",t.height()),t.data("previous-length",this.value.length),M.textareaAutoResize(t)})),e(document).on("keyup",i,(function(){M.textareaAutoResize(e(this))})),e(document).on("keydown",i,(function(){M.textareaAutoResize(e(this))})),e(document).on("change",'.file-field input[type="file"]',(function(){for(var t=e(this).closest(".file-field"),n=t.find("input.file-path"),i=e(this)[0].files,s=[],r=0;r<i.length;r++)s.push(i[r].name);n[0].value=s.join(", "),n.trigger("change")}))}))}(cash),function(e,t){"use strict";var n={indicators:!0,height:400,duration:500,interval:6e3},i=function(i){function s(n,i){l(this,s);var r=a(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,s,n,i));return r.el.M_Slider=r,r.options=e.extend({},s.defaults,i),r.$slider=r.$el.find(".slides"),r.$slides=r.$slider.children("li"),r.activeIndex=r.$slides.filter((function(t){return e(t).hasClass("active")})).first().index(),-1!=r.activeIndex&&(r.$active=r.$slides.eq(r.activeIndex)),r._setSliderHeight(),r.$slides.find(".caption").each((function(e){r._animateCaptionIn(e,0)})),r.$slides.find("img").each((function(t){var n="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";e(t).attr("src")!==n&&(e(t).css("background-image",'url("'+e(t).attr("src")+'")'),e(t).attr("src",n))})),r._setupIndicators(),r.$active?r.$active.css("display","block"):(r.$slides.first().addClass("active"),t({targets:r.$slides.first()[0],opacity:1,duration:r.options.duration,easing:"easeOutQuad"}),r.activeIndex=0,r.$active=r.$slides.eq(r.activeIndex),r.options.indicators&&r.$indicators.eq(r.activeIndex).addClass("active")),r.$active.find("img").each((function(e){t({targets:r.$active.find(".caption")[0],opacity:1,translateX:0,translateY:0,duration:r.options.duration,easing:"easeOutQuad"})})),r._setupEventHandlers(),r.start(),r}return c(s,i),o(s,[{key:"destroy",value:function(){this.pause(),this._removeIndicators(),this._removeEventHandlers(),this.el.M_Slider=void 0}},{key:"_setupEventHandlers",value:function(){var e=this;this._handleIntervalBound=this._handleInterval.bind(this),this._handleIndicatorClickBound=this._handleIndicatorClick.bind(this),this.options.indicators&&this.$indicators.each((function(t){t.addEventListener("click",e._handleIndicatorClickBound)}))}},{key:"_removeEventHandlers",value:function(){var e=this;this.options.indicators&&this.$indicators.each((function(t){t.removeEventListener("click",e._handleIndicatorClickBound)}))}},{key:"_handleIndicatorClick",value:function(t){var n=e(t.target).index();this.set(n)}},{key:"_handleInterval",value:function(){var e=this.$slider.find(".active").index();this.$slides.length===e+1?e=0:e+=1,this.set(e)}},{key:"_animateCaptionIn",value:function(n,i){var s={targets:n,opacity:0,duration:i,easing:"easeOutQuad"};e(n).hasClass("center-align")?s.translateY=-100:e(n).hasClass("right-align")?s.translateX=100:e(n).hasClass("left-align")&&(s.translateX=-100),t(s)}},{key:"_setSliderHeight",value:function(){this.$el.hasClass("fullscreen")||(this.options.indicators?this.$el.css("height",this.options.height+40+"px"):this.$el.css("height",this.options.height+"px"),this.$slider.css("height",this.options.height+"px"))}},{key:"_setupIndicators",value:function(){var t=this;this.options.indicators&&(this.$indicators=e('<ul class="indicators"></ul>'),this.$slides.each((function(n,i){var s=e('<li class="indicator-item"></li>');t.$indicators.append(s[0])})),this.$el.append(this.$indicators[0]),this.$indicators=this.$indicators.children("li.indicator-item"))}},{key:"_removeIndicators",value:function(){this.$el.find("ul.indicators").remove()}},{key:"set",value:function(e){var n=this;if(e>=this.$slides.length?e=0:e<0&&(e=this.$slides.length-1),this.activeIndex!=e){this.$active=this.$slides.eq(this.activeIndex);var i=this.$active.find(".caption");this.$active.removeClass("active"),t({targets:this.$active[0],opacity:0,duration:this.options.duration,easing:"easeOutQuad",complete:function(){n.$slides.not(".active").each((function(e){t({targets:e,opacity:0,translateX:0,translateY:0,duration:0,easing:"easeOutQuad"})}))}}),this._animateCaptionIn(i[0],this.options.duration),this.options.indicators&&(this.$indicators.eq(this.activeIndex).removeClass("active"),this.$indicators.eq(e).addClass("active")),t({targets:this.$slides.eq(e)[0],opacity:1,duration:this.options.duration,easing:"easeOutQuad"}),t({targets:this.$slides.eq(e).find(".caption")[0],opacity:1,translateX:0,translateY:0,duration:this.options.duration,delay:this.options.duration,easing:"easeOutQuad"}),this.$slides.eq(e).addClass("active"),this.activeIndex=e,this.start()}}},{key:"pause",value:function(){clearInterval(this.interval)}},{key:"start",value:function(){clearInterval(this.interval),this.interval=setInterval(this._handleIntervalBound,this.options.duration+this.options.interval)}},{key:"next",value:function(){var e=this.activeIndex+1;e>=this.$slides.length?e=0:e<0&&(e=this.$slides.length-1),this.set(e)}},{key:"prev",value:function(){var e=this.activeIndex-1;e>=this.$slides.length?e=0:e<0&&(e=this.$slides.length-1),this.set(e)}}],[{key:"init",value:function(e,t){return r(s.__proto__||Object.getPrototypeOf(s),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Slider}},{key:"defaults",get:function(){return n}}]),s}(u);M.Slider=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"slider","M_Slider")}(cash,M.anime),function(e,t){e(document).on("click",".card",(function(n){if(e(this).children(".card-reveal").length){var i=e(n.target).closest(".card");void 0===i.data("initialOverflow")&&i.data("initialOverflow",void 0===i.css("overflow")?"":i.css("overflow"));var s=e(this).find(".card-reveal");e(n.target).is(e(".card-reveal .card-title"))||e(n.target).is(e(".card-reveal .card-title i"))?t({targets:s[0],translateY:0,duration:225,easing:"easeInOutQuad",complete:function(t){var n=t.animatables[0].target;e(n).css({display:"none"}),i.css("overflow",i.data("initialOverflow"))}}):(e(n.target).is(e(".card .activator"))||e(n.target).is(e(".card .activator i")))&&(i.css("overflow","hidden"),s.css({display:"block"}),t({targets:s[0],translateY:"-100%",duration:300,easing:"easeInOutQuad"}))}}))}(cash,M.anime),function(e){"use strict";var t={data:[],placeholder:"",secondaryPlaceholder:"",autocompleteOptions:{},limit:1/0,onChipAdd:null,onChipSelect:null,onChipDelete:null},n=function(n){function i(t,n){l(this,i);var s=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));return s.el.M_Chips=s,s.options=e.extend({},i.defaults,n),s.$el.addClass("chips input-field"),s.chipsData=[],s.$chips=e(),s._setupInput(),s.hasAutocomplete=Object.keys(s.options.autocompleteOptions).length>0,s.$input.attr("id")||s.$input.attr("id",M.guid()),s.options.data.length&&(s.chipsData=s.options.data,s._renderChips(s.chipsData)),s.hasAutocomplete&&s._setupAutocomplete(),s._setPlaceholder(),s._setupLabel(),s._setupEventHandlers(),s}return c(i,n),o(i,[{key:"getData",value:function(){return this.chipsData}},{key:"destroy",value:function(){this._removeEventHandlers(),this.$chips.remove(),this.el.M_Chips=void 0}},{key:"_setupEventHandlers",value:function(){this._handleChipClickBound=this._handleChipClick.bind(this),this._handleInputKeydownBound=this._handleInputKeydown.bind(this),this._handleInputFocusBound=this._handleInputFocus.bind(this),this._handleInputBlurBound=this._handleInputBlur.bind(this),this.el.addEventListener("click",this._handleChipClickBound),document.addEventListener("keydown",i._handleChipsKeydown),document.addEventListener("keyup",i._handleChipsKeyup),this.el.addEventListener("blur",i._handleChipsBlur,!0),this.$input[0].addEventListener("focus",this._handleInputFocusBound),this.$input[0].addEventListener("blur",this._handleInputBlurBound),this.$input[0].addEventListener("keydown",this._handleInputKeydownBound)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleChipClickBound),document.removeEventListener("keydown",i._handleChipsKeydown),document.removeEventListener("keyup",i._handleChipsKeyup),this.el.removeEventListener("blur",i._handleChipsBlur,!0),this.$input[0].removeEventListener("focus",this._handleInputFocusBound),this.$input[0].removeEventListener("blur",this._handleInputBlurBound),this.$input[0].removeEventListener("keydown",this._handleInputKeydownBound)}},{key:"_handleChipClick",value:function(t){var n=e(t.target).closest(".chip"),i=e(t.target).is(".close");if(n.length){var s=n.index();i?(this.deleteChip(s),this.$input[0].focus()):this.selectChip(s)}else this.$input[0].focus()}},{key:"_handleInputFocus",value:function(){this.$el.addClass("focus")}},{key:"_handleInputBlur",value:function(){this.$el.removeClass("focus")}},{key:"_handleInputKeydown",value:function(e){if(i._keydown=!0,13===e.keyCode){if(this.hasAutocomplete&&this.autocomplete&&this.autocomplete.isOpen)return;e.preventDefault(),this.addChip({tag:this.$input[0].value}),this.$input[0].value=""}else 8!==e.keyCode&&37!==e.keyCode||""!==this.$input[0].value||!this.chipsData.length||(e.preventDefault(),this.selectChip(this.chipsData.length-1))}},{key:"_renderChip",value:function(t){if(t.tag){var n=document.createElement("div"),i=document.createElement("i");if(n.classList.add("chip"),n.textContent=t.tag,n.setAttribute("tabindex",0),e(i).addClass("material-icons close"),i.textContent="close",t.image){var s=document.createElement("img");s.setAttribute("src",t.image),n.insertBefore(s,n.firstChild)}return n.appendChild(i),n}}},{key:"_renderChips",value:function(){this.$chips.remove();for(var e=0;e<this.chipsData.length;e++){var t=this._renderChip(this.chipsData[e]);this.$el.append(t),this.$chips.add(t)}this.$el.append(this.$input[0])}},{key:"_setupAutocomplete",value:function(){var e=this;this.options.autocompleteOptions.onAutocomplete=function(t){e.addChip({tag:t}),e.$input[0].value="",e.$input[0].focus()},this.autocomplete=M.Autocomplete.init(this.$input[0],this.options.autocompleteOptions)}},{key:"_setupInput",value:function(){this.$input=this.$el.find("input"),this.$input.length||(this.$input=e("<input></input>"),this.$el.append(this.$input)),this.$input.addClass("input")}},{key:"_setupLabel",value:function(){this.$label=this.$el.find("label"),this.$label.length&&this.$label.setAttribute("for",this.$input.attr("id"))}},{key:"_setPlaceholder",value:function(){void 0!==this.chipsData&&!this.chipsData.length&&this.options.placeholder?e(this.$input).prop("placeholder",this.options.placeholder):(void 0===this.chipsData||this.chipsData.length)&&this.options.secondaryPlaceholder&&e(this.$input).prop("placeholder",this.options.secondaryPlaceholder)}},{key:"_isValid",value:function(e){if(e.hasOwnProperty("tag")&&""!==e.tag){for(var t=!1,n=0;n<this.chipsData.length;n++)if(this.chipsData[n].tag===e.tag){t=!0;break}return!t}return!1}},{key:"addChip",value:function(t){if(this._isValid(t)&&!(this.chipsData.length>=this.options.limit)){var n=this._renderChip(t);this.$chips.add(n),this.chipsData.push(t),e(this.$input).before(n),this._setPlaceholder(),"function"===typeof this.options.onChipAdd&&this.options.onChipAdd.call(this,this.$el,n)}}},{key:"deleteChip",value:function(t){var n=this.$chips.eq(t);this.$chips.eq(t).remove(),this.$chips=this.$chips.filter((function(t){return e(t).index()>=0})),this.chipsData.splice(t,1),this._setPlaceholder(),"function"===typeof this.options.onChipDelete&&this.options.onChipDelete.call(this,this.$el,n[0])}},{key:"selectChip",value:function(e){var t=this.$chips.eq(e);this._selectedChip=t,t[0].focus(),"function"===typeof this.options.onChipSelect&&this.options.onChipSelect.call(this,this.$el,t[0])}}],[{key:"init",value:function(e,t){return r(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Chips}},{key:"_handleChipsKeydown",value:function(t){i._keydown=!0;var n=e(t.target).closest(".chips"),s=t.target&&n.length;if(!e(t.target).is("input, textarea")&&s){var r=n[0].M_Chips;if(8===t.keyCode||46===t.keyCode){t.preventDefault();var o=r.chipsData.length;if(r._selectedChip){var a=r._selectedChip.index();r.deleteChip(a),r._selectedChip=null,o=Math.max(a-1,0)}r.chipsData.length&&r.selectChip(o)}else if(37===t.keyCode){if(r._selectedChip){var c=r._selectedChip.index()-1;if(c<0)return;r.selectChip(c)}}else if(39===t.keyCode&&r._selectedChip){var l=r._selectedChip.index()+1;l>=r.chipsData.length?r.$input[0].focus():r.selectChip(l)}}}},{key:"_handleChipsKeyup",value:function(e){i._keydown=!1}},{key:"_handleChipsBlur",value:function(t){if(!i._keydown){var n=e(t.target).closest(".chips"),s=n[0].M_Chips;s._selectedChip=null}}},{key:"defaults",get:function(){return t}}]),i}(u);n._keydown=!1,M.Chips=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"chips","M_Chips"),e(document).ready((function(){e(document.body).on("click",".chip .close",(function(){var t=e(this).closest(".chips");t.length&&t[0].M_Chips||e(this).closest(".chip").remove()}))}))}(cash),function(e){"use strict";var t={top:0,bottom:1/0,offset:0,onPositionChange:null},n=function(n){function i(t,n){l(this,i);var s=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));return s.el.M_Pushpin=s,s.options=e.extend({},i.defaults,n),s.originalOffset=s.el.offsetTop,i._pushpins.push(s),s._setupEventHandlers(),s._updatePosition(),s}return c(i,n),o(i,[{key:"destroy",value:function(){this.el.style.top=null,this._removePinClasses(),this._removeEventHandlers();var e=i._pushpins.indexOf(this);i._pushpins.splice(e,1)}},{key:"_setupEventHandlers",value:function(){document.addEventListener("scroll",i._updateElements)}},{key:"_removeEventHandlers",value:function(){document.removeEventListener("scroll",i._updateElements)}},{key:"_updatePosition",value:function(){var e=M.getDocumentScrollTop()+this.options.offset;this.options.top<=e&&this.options.bottom>=e&&!this.el.classList.contains("pinned")&&(this._removePinClasses(),this.el.style.top=this.options.offset+"px",this.el.classList.add("pinned"),"function"===typeof this.options.onPositionChange&&this.options.onPositionChange.call(this,"pinned")),e<this.options.top&&!this.el.classList.contains("pin-top")&&(this._removePinClasses(),this.el.style.top=0,this.el.classList.add("pin-top"),"function"===typeof this.options.onPositionChange&&this.options.onPositionChange.call(this,"pin-top")),e>this.options.bottom&&!this.el.classList.contains("pin-bottom")&&(this._removePinClasses(),this.el.classList.add("pin-bottom"),this.el.style.top=this.options.bottom-this.originalOffset+"px","function"===typeof this.options.onPositionChange&&this.options.onPositionChange.call(this,"pin-bottom"))}},{key:"_removePinClasses",value:function(){this.el.classList.remove("pin-top"),this.el.classList.remove("pinned"),this.el.classList.remove("pin-bottom")}}],[{key:"init",value:function(e,t){return r(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Pushpin}},{key:"_updateElements",value:function(){for(var e in i._pushpins){var t=i._pushpins[e];t._updatePosition()}}},{key:"defaults",get:function(){return t}}]),i}(u);n._pushpins=[],M.Pushpin=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"pushpin","M_Pushpin")}(cash),function(e,t){"use strict";var n={direction:"top",hoverEnabled:!0,toolbarEnabled:!1};e.fn.reverse=[].reverse;var i=function(i){function s(t,n){l(this,s);var i=a(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,s,t,n));return i.el.M_FloatingActionButton=i,i.options=e.extend({},s.defaults,n),i.isOpen=!1,i.$anchor=i.$el.children("a").first(),i.$menu=i.$el.children("ul").first(),i.$floatingBtns=i.$el.find("ul .btn-floating"),i.$floatingBtnsReverse=i.$el.find("ul .btn-floating").reverse(),i.offsetY=0,i.offsetX=0,i.$el.addClass("direction-"+i.options.direction),"top"===i.options.direction?i.offsetY=40:"right"===i.options.direction?i.offsetX=-40:"bottom"===i.options.direction?i.offsetY=-40:i.offsetX=40,i._setupEventHandlers(),i}return c(s,i),o(s,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.M_FloatingActionButton=void 0}},{key:"_setupEventHandlers",value:function(){this._handleFABClickBound=this._handleFABClick.bind(this),this._handleOpenBound=this.open.bind(this),this._handleCloseBound=this.close.bind(this),this.options.hoverEnabled&&!this.options.toolbarEnabled?(this.el.addEventListener("mouseenter",this._handleOpenBound),this.el.addEventListener("mouseleave",this._handleCloseBound)):this.el.addEventListener("click",this._handleFABClickBound)}},{key:"_removeEventHandlers",value:function(){this.options.hoverEnabled&&!this.options.toolbarEnabled?(this.el.removeEventListener("mouseenter",this._handleOpenBound),this.el.removeEventListener("mouseleave",this._handleCloseBound)):this.el.removeEventListener("click",this._handleFABClickBound)}},{key:"_handleFABClick",value:function(){this.isOpen?this.close():this.open()}},{key:"_handleDocumentClick",value:function(t){e(t.target).closest(this.$menu).length||this.close()}},{key:"open",value:function(){this.isOpen||(this.options.toolbarEnabled?this._animateInToolbar():this._animateInFAB(),this.isOpen=!0)}},{key:"close",value:function(){this.isOpen&&(this.options.toolbarEnabled?(window.removeEventListener("scroll",this._handleCloseBound,!0),document.body.removeEventListener("click",this._handleDocumentClickBound,!0),this._animateOutToolbar()):this._animateOutFAB(),this.isOpen=!1)}},{key:"_animateInFAB",value:function(){var e=this;this.$el.addClass("active");var n=0;this.$floatingBtnsReverse.each((function(i){t({targets:i,opacity:1,scale:[.4,1],translateY:[e.offsetY,0],translateX:[e.offsetX,0],duration:275,delay:n,easing:"easeInOutQuad"}),n+=40}))}},{key:"_animateOutFAB",value:function(){var e=this;this.$floatingBtnsReverse.each((function(n){t.remove(n),t({targets:n,opacity:0,scale:.4,translateY:e.offsetY,translateX:e.offsetX,duration:175,easing:"easeOutQuad",complete:function(){e.$el.removeClass("active")}})}))}},{key:"_animateInToolbar",value:function(){var t=this,n=void 0,i=window.innerWidth,s=window.innerHeight,r=this.el.getBoundingClientRect(),o=e('<div class="fab-backdrop"></div>'),a=this.$anchor.css("background-color");this.$anchor.append(o),this.offsetX=r.left-i/2+r.width/2,this.offsetY=s-r.bottom,n=i/o[0].clientWidth,this.btnBottom=r.bottom,this.btnLeft=r.left,this.btnWidth=r.width,this.$el.addClass("active"),this.$el.css({"text-align":"center",width:"100%",bottom:0,left:0,transform:"translateX("+this.offsetX+"px)",transition:"none"}),this.$anchor.css({transform:"translateY("+-this.offsetY+"px)",transition:"none"}),o.css({"background-color":a}),setTimeout((function(){t.$el.css({transform:"",transition:"transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"}),t.$anchor.css({overflow:"visible",transform:"",transition:"transform .2s"}),setTimeout((function(){t.$el.css({overflow:"hidden","background-color":a}),o.css({transform:"scale("+n+")",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"}),t.$menu.children("li").children("a").css({opacity:1}),t._handleDocumentClickBound=t._handleDocumentClick.bind(t),window.addEventListener("scroll",t._handleCloseBound,!0),document.body.addEventListener("click",t._handleDocumentClickBound,!0)}),100)}),0)}},{key:"_animateOutToolbar",value:function(){var e=this,t=window.innerWidth,n=window.innerHeight,i=this.$el.find(".fab-backdrop"),s=this.$anchor.css("background-color");this.offsetX=this.btnLeft-t/2+this.btnWidth/2,this.offsetY=n-this.btnBottom,this.$el.removeClass("active"),this.$el.css({"background-color":"transparent",transition:"none"}),this.$anchor.css({transition:"none"}),i.css({transform:"scale(0)","background-color":s}),this.$menu.children("li").children("a").css({opacity:""}),setTimeout((function(){i.remove(),e.$el.css({"text-align":"",width:"",bottom:"",left:"",overflow:"","background-color":"",transform:"translate3d("+-e.offsetX+"px,0,0)"}),e.$anchor.css({overflow:"",transform:"translate3d(0,"+e.offsetY+"px,0)"}),setTimeout((function(){e.$el.css({transform:"translate3d(0,0,0)",transition:"transform .2s"}),e.$anchor.css({transform:"translate3d(0,0,0)",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"})}),20)}),200)}}],[{key:"init",value:function(e,t){return r(s.__proto__||Object.getPrototypeOf(s),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_FloatingActionButton}},{key:"defaults",get:function(){return n}}]),s}(u);M.FloatingActionButton=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"floatingActionButton","M_FloatingActionButton")}(cash,M.anime),function(e){"use strict";var t={autoClose:!1,format:"mmm dd, yyyy",parse:null,defaultDate:null,setDefaultDate:!1,disableWeekends:!1,disableDayFn:null,firstDay:0,minDate:null,maxDate:null,yearRange:10,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,showMonthAfterYear:!1,showDaysInNextAndPreviousMonths:!1,container:null,showClearBtn:!1,i18n:{cancel:"Cancel",clear:"Clear",done:"Ok",previousMonth:"‹",nextMonth:"›",months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysAbbrev:["S","M","T","W","T","F","S"]},events:[],onSelect:null,onOpen:null,onClose:null,onDraw:null},n=function(n){function i(t,n){l(this,i);var s=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));s.el.M_Datepicker=s,s.options=e.extend({},i.defaults,n),n&&n.hasOwnProperty("i18n")&&"object"===typeof n.i18n&&(s.options.i18n=e.extend({},i.defaults.i18n,n.i18n)),s.options.minDate&&s.options.minDate.setHours(0,0,0,0),s.options.maxDate&&s.options.maxDate.setHours(0,0,0,0),s.id=M.guid(),s._setupVariables(),s._insertHTMLIntoDOM(),s._setupModal(),s._setupEventHandlers(),s.options.defaultDate||(s.options.defaultDate=new Date(Date.parse(s.el.value)));var r=s.options.defaultDate;return i._isDate(r)?s.options.setDefaultDate?(s.setDate(r,!0),s.setInputValue()):s.gotoDate(r):s.gotoDate(new Date),s.isOpen=!1,s}return c(i,n),o(i,[{key:"destroy",value:function(){this._removeEventHandlers(),this.modal.destroy(),e(this.modalEl).remove(),this.destroySelects(),this.el.M_Datepicker=void 0}},{key:"destroySelects",value:function(){var e=this.calendarEl.querySelector(".orig-select-year");e&&M.FormSelect.getInstance(e).destroy();var t=this.calendarEl.querySelector(".orig-select-month");t&&M.FormSelect.getInstance(t).destroy()}},{key:"_insertHTMLIntoDOM",value:function(){this.options.showClearBtn&&(e(this.clearBtn).css({visibility:""}),this.clearBtn.innerHTML=this.options.i18n.clear),this.doneBtn.innerHTML=this.options.i18n.done,this.cancelBtn.innerHTML=this.options.i18n.cancel,this.options.container?this.$modalEl.appendTo(this.options.container):this.$modalEl.insertBefore(this.el)}},{key:"_setupModal",value:function(){var e=this;this.modalEl.id="modal-"+this.id,this.modal=M.Modal.init(this.modalEl,{onCloseEnd:function(){e.isOpen=!1}})}},{key:"toString",value:function(e){var t=this;if(e=e||this.options.format,!i._isDate(this.date))return"";var n=e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g),s=n.map((function(e){return t.formats[e]?t.formats[e]():e})).join("");return s}},{key:"setDate",value:function(e,t){if(!e)return this.date=null,this._renderDateDisplay(),this.draw();if("string"===typeof e&&(e=new Date(Date.parse(e))),i._isDate(e)){var n=this.options.minDate,s=this.options.maxDate;i._isDate(n)&&e<n?e=n:i._isDate(s)&&e>s&&(e=s),this.date=new Date(e.getTime()),this._renderDateDisplay(),i._setToStartOfDay(this.date),this.gotoDate(this.date),t||"function"!==typeof this.options.onSelect||this.options.onSelect.call(this,this.date)}}},{key:"setInputValue",value:function(){this.el.value=this.toString(),this.$el.trigger("change",{firedBy:this})}},{key:"_renderDateDisplay",value:function(){var e=i._isDate(this.date)?this.date:new Date,t=this.options.i18n,n=t.weekdaysShort[e.getDay()],s=t.monthsShort[e.getMonth()],r=e.getDate();this.yearTextEl.innerHTML=e.getFullYear(),this.dateTextEl.innerHTML=n+", "+s+" "+r}},{key:"gotoDate",value:function(e){var t=!0;if(i._isDate(e)){if(this.calendars){var n=new Date(this.calendars[0].year,this.calendars[0].month,1),s=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),r=e.getTime();s.setMonth(s.getMonth()+1),s.setDate(s.getDate()-1),t=r<n.getTime()||s.getTime()<r}t&&(this.calendars=[{month:e.getMonth(),year:e.getFullYear()}]),this.adjustCalendars()}}},{key:"adjustCalendars",value:function(){this.calendars[0]=this.adjustCalendar(this.calendars[0]),this.draw()}},{key:"adjustCalendar",value:function(e){return e.month<0&&(e.year-=Math.ceil(Math.abs(e.month)/12),e.month+=12),e.month>11&&(e.year+=Math.floor(Math.abs(e.month)/12),e.month-=12),e}},{key:"nextMonth",value:function(){this.calendars[0].month++,this.adjustCalendars()}},{key:"prevMonth",value:function(){this.calendars[0].month--,this.adjustCalendars()}},{key:"render",value:function(e,t,n){var s=this.options,r=new Date,o=i._getDaysInMonth(e,t),a=new Date(e,t,1).getDay(),c=[],l=[];i._setToStartOfDay(r),s.firstDay>0&&(a-=s.firstDay,a<0&&(a+=7));var u=0===t?11:t-1,h=11===t?0:t+1,d=0===t?e-1:e,f=11===t?e+1:e,p=i._getDaysInMonth(d,u),m=o+a,g=m;while(g>7)g-=7;m+=7-g;for(var v=!1,y=0,b=0;y<m;y++){var _=new Date(e,t,y-a+1),w=!!i._isDate(this.date)&&i._compareDates(_,this.date),k=i._compareDates(_,r),E=-1!==s.events.indexOf(_.toDateString()),I=y<a||y>=o+a,T=y-a+1,C=t,O=e,S=s.startRange&&i._compareDates(s.startRange,_),A=s.endRange&&i._compareDates(s.endRange,_),D=s.startRange&&s.endRange&&s.startRange<_&&_<s.endRange,x=s.minDate&&_<s.minDate||s.maxDate&&_>s.maxDate||s.disableWeekends&&i._isWeekend(_)||s.disableDayFn&&s.disableDayFn(_);I&&(y<a?(T=p+T,C=u,O=d):(T-=o,C=h,O=f));var M={day:T,month:C,year:O,hasEvent:E,isSelected:w,isToday:k,isDisabled:x,isEmpty:I,isStartRange:S,isEndRange:A,isInRange:D,showDaysInNextAndPreviousMonths:s.showDaysInNextAndPreviousMonths};l.push(this.renderDay(M)),7===++b&&(c.push(this.renderRow(l,s.isRTL,v)),l=[],b=0,v=!1)}return this.renderTable(s,c,n)}},{key:"renderDay",value:function(e){var t=[],n="false";if(e.isEmpty){if(!e.showDaysInNextAndPreviousMonths)return'<td class="is-empty"></td>';t.push("is-outside-current-month"),t.push("is-selection-disabled")}return e.isDisabled&&t.push("is-disabled"),e.isToday&&t.push("is-today"),e.isSelected&&(t.push("is-selected"),n="true"),e.hasEvent&&t.push("has-event"),e.isInRange&&t.push("is-inrange"),e.isStartRange&&t.push("is-startrange"),e.isEndRange&&t.push("is-endrange"),'<td data-day="'+e.day+'" class="'+t.join(" ")+'" aria-selected="'+n+'"><button class="datepicker-day-button" type="button" data-year="'+e.year+'" data-month="'+e.month+'" data-day="'+e.day+'">'+e.day+"</button></td>"}},{key:"renderRow",value:function(e,t,n){return'<tr class="datepicker-row'+(n?" is-selected":"")+'">'+(t?e.reverse():e).join("")+"</tr>"}},{key:"renderTable",value:function(e,t,n){return'<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="'+n+'">'+this.renderHead(e)+this.renderBody(t)+"</table></div>"}},{key:"renderHead",value:function(e){var t=void 0,n=[];for(t=0;t<7;t++)n.push('<th scope="col"><abbr title="'+this.renderDayName(e,t)+'">'+this.renderDayName(e,t,!0)+"</abbr></th>");return"<thead><tr>"+(e.isRTL?n.reverse():n).join("")+"</tr></thead>"}},{key:"renderBody",value:function(e){return"<tbody>"+e.join("")+"</tbody>"}},{key:"renderTitle",value:function(t,n,i,s,r,o){var a=void 0,c=void 0,l=void 0,u=this.options,h=i===u.minYear,d=i===u.maxYear,f='<div id="'+o+'" class="datepicker-controls" role="heading" aria-live="assertive">',p=void 0,m=void 0,g=!0,v=!0;for(l=[],a=0;a<12;a++)l.push('<option value="'+(i===r?a-n:12+a-n)+'"'+(a===s?' selected="selected"':"")+(h&&a<u.minMonth||d&&a>u.maxMonth?'disabled="disabled"':"")+">"+u.i18n.months[a]+"</option>");for(p='<select class="datepicker-select orig-select-month" tabindex="-1">'+l.join("")+"</select>",e.isArray(u.yearRange)?(a=u.yearRange[0],c=u.yearRange[1]+1):(a=i-u.yearRange,c=1+i+u.yearRange),l=[];a<c&&a<=u.maxYear;a++)a>=u.minYear&&l.push('<option value="'+a+'" '+(a===i?'selected="selected"':"")+">"+a+"</option>");m='<select class="datepicker-select orig-select-year" tabindex="-1">'+l.join("")+"</select>";var y='<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg>';f+='<button class="month-prev'+(g?"":" is-disabled")+'" type="button">'+y+"</button>",f+='<div class="selects-container">',u.showMonthAfterYear?f+=m+p:f+=p+m,f+="</div>",h&&(0===s||u.minMonth>=s)&&(g=!1),d&&(11===s||u.maxMonth<=s)&&(v=!1);var b='<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg>';return f+='<button class="month-next'+(v?"":" is-disabled")+'" type="button">'+b+"</button>",f+"</div>"}},{key:"draw",value:function(e){if(this.isOpen||e){var t=this.options,n=t.minYear,i=t.maxYear,s=t.minMonth,r=t.maxMonth,o="",a=void 0;this._y<=n&&(this._y=n,!isNaN(s)&&this._m<s&&(this._m=s)),this._y>=i&&(this._y=i,!isNaN(r)&&this._m>r&&(this._m=r)),a="datepicker-title-"+Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,2);for(var c=0;c<1;c++)this._renderDateDisplay(),o+=this.renderTitle(this,c,this.calendars[c].year,this.calendars[c].month,this.calendars[0].year,a)+this.render(this.calendars[c].year,this.calendars[c].month,a);this.destroySelects(),this.calendarEl.innerHTML=o;var l=this.calendarEl.querySelector(".orig-select-year"),u=this.calendarEl.querySelector(".orig-select-month");M.FormSelect.init(l,{classes:"select-year",dropdownOptions:{container:document.body,constrainWidth:!1}}),M.FormSelect.init(u,{classes:"select-month",dropdownOptions:{container:document.body,constrainWidth:!1}}),l.addEventListener("change",this._handleYearChange.bind(this)),u.addEventListener("change",this._handleMonthChange.bind(this)),"function"===typeof this.options.onDraw&&this.options.onDraw(this)}}},{key:"_setupEventHandlers",value:function(){this._handleInputKeydownBound=this._handleInputKeydown.bind(this),this._handleInputClickBound=this._handleInputClick.bind(this),this._handleInputChangeBound=this._handleInputChange.bind(this),this._handleCalendarClickBound=this._handleCalendarClick.bind(this),this._finishSelectionBound=this._finishSelection.bind(this),this._handleMonthChange=this._handleMonthChange.bind(this),this._closeBound=this.close.bind(this),this.el.addEventListener("click",this._handleInputClickBound),this.el.addEventListener("keydown",this._handleInputKeydownBound),this.el.addEventListener("change",this._handleInputChangeBound),this.calendarEl.addEventListener("click",this._handleCalendarClickBound),this.doneBtn.addEventListener("click",this._finishSelectionBound),this.cancelBtn.addEventListener("click",this._closeBound),this.options.showClearBtn&&(this._handleClearClickBound=this._handleClearClick.bind(this),this.clearBtn.addEventListener("click",this._handleClearClickBound))}},{key:"_setupVariables",value:function(){var t=this;this.$modalEl=e(i._template),this.modalEl=this.$modalEl[0],this.calendarEl=this.modalEl.querySelector(".datepicker-calendar"),this.yearTextEl=this.modalEl.querySelector(".year-text"),this.dateTextEl=this.modalEl.querySelector(".date-text"),this.options.showClearBtn&&(this.clearBtn=this.modalEl.querySelector(".datepicker-clear")),this.doneBtn=this.modalEl.querySelector(".datepicker-done"),this.cancelBtn=this.modalEl.querySelector(".datepicker-cancel"),this.formats={d:function(){return t.date.getDate()},dd:function(){var e=t.date.getDate();return(e<10?"0":"")+e},ddd:function(){return t.options.i18n.weekdaysShort[t.date.getDay()]},dddd:function(){return t.options.i18n.weekdays[t.date.getDay()]},m:function(){return t.date.getMonth()+1},mm:function(){var e=t.date.getMonth()+1;return(e<10?"0":"")+e},mmm:function(){return t.options.i18n.monthsShort[t.date.getMonth()]},mmmm:function(){return t.options.i18n.months[t.date.getMonth()]},yy:function(){return(""+t.date.getFullYear()).slice(2)},yyyy:function(){return t.date.getFullYear()}}}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleInputClickBound),this.el.removeEventListener("keydown",this._handleInputKeydownBound),this.el.removeEventListener("change",this._handleInputChangeBound),this.calendarEl.removeEventListener("click",this._handleCalendarClickBound)}},{key:"_handleInputClick",value:function(){this.open()}},{key:"_handleInputKeydown",value:function(e){e.which===M.keys.ENTER&&(e.preventDefault(),this.open())}},{key:"_handleCalendarClick",value:function(t){if(this.isOpen){var n=e(t.target);n.hasClass("is-disabled")||(!n.hasClass("datepicker-day-button")||n.hasClass("is-empty")||n.parent().hasClass("is-disabled")?n.closest(".month-prev").length?this.prevMonth():n.closest(".month-next").length&&this.nextMonth():(this.setDate(new Date(t.target.getAttribute("data-year"),t.target.getAttribute("data-month"),t.target.getAttribute("data-day"))),this.options.autoClose&&this._finishSelection()))}}},{key:"_handleClearClick",value:function(){this.date=null,this.setInputValue(),this.close()}},{key:"_handleMonthChange",value:function(e){this.gotoMonth(e.target.value)}},{key:"_handleYearChange",value:function(e){this.gotoYear(e.target.value)}},{key:"gotoMonth",value:function(e){isNaN(e)||(this.calendars[0].month=parseInt(e,10),this.adjustCalendars())}},{key:"gotoYear",value:function(e){isNaN(e)||(this.calendars[0].year=parseInt(e,10),this.adjustCalendars())}},{key:"_handleInputChange",value:function(e){var t=void 0;e.firedBy!==this&&(t=this.options.parse?this.options.parse(this.el.value,this.options.format):new Date(Date.parse(this.el.value)),i._isDate(t)&&this.setDate(t))}},{key:"renderDayName",value:function(e,t,n){t+=e.firstDay;while(t>=7)t-=7;return n?e.i18n.weekdaysAbbrev[t]:e.i18n.weekdays[t]}},{key:"_finishSelection",value:function(){this.setInputValue(),this.close()}},{key:"open",value:function(){if(!this.isOpen)return this.isOpen=!0,"function"===typeof this.options.onOpen&&this.options.onOpen.call(this),this.draw(),this.modal.open(),this}},{key:"close",value:function(){if(this.isOpen)return this.isOpen=!1,"function"===typeof this.options.onClose&&this.options.onClose.call(this),this.modal.close(),this}}],[{key:"init",value:function(e,t){return r(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"_isDate",value:function(e){return/Date/.test(Object.prototype.toString.call(e))&&!isNaN(e.getTime())}},{key:"_isWeekend",value:function(e){var t=e.getDay();return 0===t||6===t}},{key:"_setToStartOfDay",value:function(e){i._isDate(e)&&e.setHours(0,0,0,0)}},{key:"_getDaysInMonth",value:function(e,t){return[31,i._isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]}},{key:"_isLeapYear",value:function(e){return e%4===0&&e%100!==0||e%400===0}},{key:"_compareDates",value:function(e,t){return e.getTime()===t.getTime()}},{key:"_setToStartOfDay",value:function(e){i._isDate(e)&&e.setHours(0,0,0,0)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Datepicker}},{key:"defaults",get:function(){return t}}]),i}(u);n._template=['<div class= "modal datepicker-modal">','<div class="modal-content datepicker-container">','<div class="datepicker-date-display">','<span class="year-text"></span>','<span class="date-text"></span>',"</div>",'<div class="datepicker-calendar-container">','<div class="datepicker-calendar"></div>','<div class="datepicker-footer">','<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>','<div class="confirmation-btns">','<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>','<button class="btn-flat datepicker-done waves-effect" type="button"></button>',"</div>","</div>","</div>","</div>","</div>"].join(""),M.Datepicker=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"datepicker","M_Datepicker")}(cash),function(e){"use strict";var t={dialRadius:135,outerRadius:105,innerRadius:70,tickRadius:20,duration:350,container:null,defaultTime:"now",fromNow:0,showClearBtn:!1,i18n:{cancel:"Cancel",clear:"Clear",done:"Ok"},autoClose:!1,twelveHour:!0,vibrate:!0,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null,onSelect:null},n=function(n){function i(t,n){l(this,i);var s=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));return s.el.M_Timepicker=s,s.options=e.extend({},i.defaults,n),s.id=M.guid(),s._insertHTMLIntoDOM(),s._setupModal(),s._setupVariables(),s._setupEventHandlers(),s._clockSetup(),s._pickerSetup(),s}return c(i,n),o(i,[{key:"destroy",value:function(){this._removeEventHandlers(),this.modal.destroy(),e(this.modalEl).remove(),this.el.M_Timepicker=void 0}},{key:"_setupEventHandlers",value:function(){this._handleInputKeydownBound=this._handleInputKeydown.bind(this),this._handleInputClickBound=this._handleInputClick.bind(this),this._handleClockClickStartBound=this._handleClockClickStart.bind(this),this._handleDocumentClickMoveBound=this._handleDocumentClickMove.bind(this),this._handleDocumentClickEndBound=this._handleDocumentClickEnd.bind(this),this.el.addEventListener("click",this._handleInputClickBound),this.el.addEventListener("keydown",this._handleInputKeydownBound),this.plate.addEventListener("mousedown",this._handleClockClickStartBound),this.plate.addEventListener("touchstart",this._handleClockClickStartBound),e(this.spanHours).on("click",this.showView.bind(this,"hours")),e(this.spanMinutes).on("click",this.showView.bind(this,"minutes"))}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleInputClickBound),this.el.removeEventListener("keydown",this._handleInputKeydownBound)}},{key:"_handleInputClick",value:function(){this.open()}},{key:"_handleInputKeydown",value:function(e){e.which===M.keys.ENTER&&(e.preventDefault(),this.open())}},{key:"_handleClockClickStart",value:function(e){e.preventDefault();var t=this.plate.getBoundingClientRect(),n={x:t.left,y:t.top};this.x0=n.x+this.options.dialRadius,this.y0=n.y+this.options.dialRadius,this.moved=!1;var s=i._Pos(e);this.dx=s.x-this.x0,this.dy=s.y-this.y0,this.setHand(this.dx,this.dy,!1),document.addEventListener("mousemove",this._handleDocumentClickMoveBound),document.addEventListener("touchmove",this._handleDocumentClickMoveBound),document.addEventListener("mouseup",this._handleDocumentClickEndBound),document.addEventListener("touchend",this._handleDocumentClickEndBound)}},{key:"_handleDocumentClickMove",value:function(e){e.preventDefault();var t=i._Pos(e),n=t.x-this.x0,s=t.y-this.y0;this.moved=!0,this.setHand(n,s,!1,!0)}},{key:"_handleDocumentClickEnd",value:function(t){var n=this;t.preventDefault(),document.removeEventListener("mouseup",this._handleDocumentClickEndBound),document.removeEventListener("touchend",this._handleDocumentClickEndBound);var s=i._Pos(t),r=s.x-this.x0,o=s.y-this.y0;this.moved&&r===this.dx&&o===this.dy&&this.setHand(r,o),"hours"===this.currentView?this.showView("minutes",this.options.duration/2):this.options.autoClose&&(e(this.minutesView).addClass("timepicker-dial-out"),setTimeout((function(){n.done()}),this.options.duration/2)),"function"===typeof this.options.onSelect&&this.options.onSelect.call(this,this.hours,this.minutes),document.removeEventListener("mousemove",this._handleDocumentClickMoveBound),document.removeEventListener("touchmove",this._handleDocumentClickMoveBound)}},{key:"_insertHTMLIntoDOM",value:function(){this.$modalEl=e(i._template),this.modalEl=this.$modalEl[0],this.modalEl.id="modal-"+this.id;var t=document.querySelector(this.options.container);this.options.container&&t?this.$modalEl.appendTo(t):this.$modalEl.insertBefore(this.el)}},{key:"_setupModal",value:function(){var e=this;this.modal=M.Modal.init(this.modalEl,{onOpenStart:this.options.onOpenStart,onOpenEnd:this.options.onOpenEnd,onCloseStart:this.options.onCloseStart,onCloseEnd:function(){"function"===typeof e.options.onCloseEnd&&e.options.onCloseEnd.call(e),e.isOpen=!1}})}},{key:"_setupVariables",value:function(){this.currentView="hours",this.vibrate=navigator.vibrate?"vibrate":navigator.webkitVibrate?"webkitVibrate":null,this._canvas=this.modalEl.querySelector(".timepicker-canvas"),this.plate=this.modalEl.querySelector(".timepicker-plate"),this.hoursView=this.modalEl.querySelector(".timepicker-hours"),this.minutesView=this.modalEl.querySelector(".timepicker-minutes"),this.spanHours=this.modalEl.querySelector(".timepicker-span-hours"),this.spanMinutes=this.modalEl.querySelector(".timepicker-span-minutes"),this.spanAmPm=this.modalEl.querySelector(".timepicker-span-am-pm"),this.footer=this.modalEl.querySelector(".timepicker-footer"),this.amOrPm="PM"}},{key:"_pickerSetup",value:function(){var t=e('<button class="btn-flat timepicker-clear waves-effect" style="visibility: hidden;" type="button" tabindex="'+(this.options.twelveHour?"3":"1")+'">'+this.options.i18n.clear+"</button>").appendTo(this.footer).on("click",this.clear.bind(this));this.options.showClearBtn&&t.css({visibility:""});var n=e('<div class="confirmation-btns"></div>');e('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="'+(this.options.twelveHour?"3":"1")+'">'+this.options.i18n.cancel+"</button>").appendTo(n).on("click",this.close.bind(this)),e('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="'+(this.options.twelveHour?"3":"1")+'">'+this.options.i18n.done+"</button>").appendTo(n).on("click",this.done.bind(this)),n.appendTo(this.footer)}},{key:"_clockSetup",value:function(){this.options.twelveHour&&(this.$amBtn=e('<div class="am-btn">AM</div>'),this.$pmBtn=e('<div class="pm-btn">PM</div>'),this.$amBtn.on("click",this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm),this.$pmBtn.on("click",this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm)),this._buildHoursView(),this._buildMinutesView(),this._buildSVGClock()}},{key:"_buildSVGClock",value:function(){var e=this.options.dialRadius,t=this.options.tickRadius,n=2*e,s=i._createSVGEl("svg");s.setAttribute("class","timepicker-svg"),s.setAttribute("width",n),s.setAttribute("height",n);var r=i._createSVGEl("g");r.setAttribute("transform","translate("+e+","+e+")");var o=i._createSVGEl("circle");o.setAttribute("class","timepicker-canvas-bearing"),o.setAttribute("cx",0),o.setAttribute("cy",0),o.setAttribute("r",4);var a=i._createSVGEl("line");a.setAttribute("x1",0),a.setAttribute("y1",0);var c=i._createSVGEl("circle");c.setAttribute("class","timepicker-canvas-bg"),c.setAttribute("r",t),r.appendChild(a),r.appendChild(c),r.appendChild(o),s.appendChild(r),this._canvas.appendChild(s),this.hand=a,this.bg=c,this.bearing=o,this.g=r}},{key:"_buildHoursView",value:function(){var t=e('<div class="timepicker-tick"></div>');if(this.options.twelveHour)for(var n=1;n<13;n+=1){var i=t.clone(),s=n/6*Math.PI,r=this.options.outerRadius;i.css({left:this.options.dialRadius+Math.sin(s)*r-this.options.tickRadius+"px",top:this.options.dialRadius-Math.cos(s)*r-this.options.tickRadius+"px"}),i.html(0===n?"00":n),this.hoursView.appendChild(i[0])}else for(var o=0;o<24;o+=1){var a=t.clone(),c=o/6*Math.PI,l=o>0&&o<13,u=l?this.options.innerRadius:this.options.outerRadius;a.css({left:this.options.dialRadius+Math.sin(c)*u-this.options.tickRadius+"px",top:this.options.dialRadius-Math.cos(c)*u-this.options.tickRadius+"px"}),a.html(0===o?"00":o),this.hoursView.appendChild(a[0])}}},{key:"_buildMinutesView",value:function(){for(var t=e('<div class="timepicker-tick"></div>'),n=0;n<60;n+=5){var s=t.clone(),r=n/30*Math.PI;s.css({left:this.options.dialRadius+Math.sin(r)*this.options.outerRadius-this.options.tickRadius+"px",top:this.options.dialRadius-Math.cos(r)*this.options.outerRadius-this.options.tickRadius+"px"}),s.html(i._addLeadingZero(n)),this.minutesView.appendChild(s[0])}}},{key:"_handleAmPmClick",value:function(t){var n=e(t.target);this.amOrPm=n.hasClass("am-btn")?"AM":"PM",this._updateAmPmView()}},{key:"_updateAmPmView",value:function(){this.options.twelveHour&&(this.$amBtn.toggleClass("text-primary","AM"===this.amOrPm),this.$pmBtn.toggleClass("text-primary","PM"===this.amOrPm))}},{key:"_updateTimeFromInput",value:function(){var e=((this.el.value||this.options.defaultTime||"")+"").split(":");if(this.options.twelveHour&&"undefined"!==typeof e[1]&&(e[1].toUpperCase().indexOf("AM")>0?this.amOrPm="AM":this.amOrPm="PM",e[1]=e[1].replace("AM","").replace("PM","")),"now"===e[0]){var t=new Date(+new Date+this.options.fromNow);e=[t.getHours(),t.getMinutes()],this.options.twelveHour&&(this.amOrPm=e[0]>=12&&e[0]<24?"PM":"AM")}this.hours=+e[0]||0,this.minutes=+e[1]||0,this.spanHours.innerHTML=this.hours,this.spanMinutes.innerHTML=i._addLeadingZero(this.minutes),this._updateAmPmView()}},{key:"showView",value:function(t,n){"minutes"===t&&e(this.hoursView).css("visibility");var i="hours"===t,s=i?this.hoursView:this.minutesView,r=i?this.minutesView:this.hoursView;this.currentView=t,e(this.spanHours).toggleClass("text-primary",i),e(this.spanMinutes).toggleClass("text-primary",!i),r.classList.add("timepicker-dial-out"),e(s).css("visibility","visible").removeClass("timepicker-dial-out"),this.resetClock(n),clearTimeout(this.toggleViewTimer),this.toggleViewTimer=setTimeout((function(){e(r).css("visibility","hidden")}),this.options.duration)}},{key:"resetClock",value:function(t){var n=this.currentView,i=this[n],s="hours"===n,r=Math.PI/(s?6:30),o=i*r,a=s&&i>0&&i<13?this.options.innerRadius:this.options.outerRadius,c=Math.sin(o)*a,l=-Math.cos(o)*a,u=this;t?(e(this.canvas).addClass("timepicker-canvas-out"),setTimeout((function(){e(u.canvas).removeClass("timepicker-canvas-out"),u.setHand(c,l)}),t)):this.setHand(c,l)}},{key:"setHand",value:function(e,t,n){var s=this,r=Math.atan2(e,-t),o="hours"===this.currentView,a=Math.PI/(o||n?6:30),c=Math.sqrt(e*e+t*t),l=o&&c<(this.options.outerRadius+this.options.innerRadius)/2,u=l?this.options.innerRadius:this.options.outerRadius;this.options.twelveHour&&(u=this.options.outerRadius),r<0&&(r=2*Math.PI+r);var h=Math.round(r/a);r=h*a,this.options.twelveHour?o?0===h&&(h=12):(n&&(h*=5),60===h&&(h=0)):o?(12===h&&(h=0),h=l?0===h?12:h:0===h?0:h+12):(n&&(h*=5),60===h&&(h=0)),this[this.currentView]!==h&&this.vibrate&&this.options.vibrate&&(this.vibrateTimer||(navigator[this.vibrate](10),this.vibrateTimer=setTimeout((function(){s.vibrateTimer=null}),100))),this[this.currentView]=h,o?this["spanHours"].innerHTML=h:this["spanMinutes"].innerHTML=i._addLeadingZero(h);var d=Math.sin(r)*(u-this.options.tickRadius),f=-Math.cos(r)*(u-this.options.tickRadius),p=Math.sin(r)*u,m=-Math.cos(r)*u;this.hand.setAttribute("x2",d),this.hand.setAttribute("y2",f),this.bg.setAttribute("cx",p),this.bg.setAttribute("cy",m)}},{key:"open",value:function(){this.isOpen||(this.isOpen=!0,this._updateTimeFromInput(),this.showView("hours"),this.modal.open())}},{key:"close",value:function(){this.isOpen&&(this.isOpen=!1,this.modal.close())}},{key:"done",value:function(e,t){var n=this.el.value,s=t?"":i._addLeadingZero(this.hours)+":"+i._addLeadingZero(this.minutes);this.time=s,!t&&this.options.twelveHour&&(s=s+" "+this.amOrPm),this.el.value=s,s!==n&&this.$el.trigger("change"),this.close(),this.el.focus()}},{key:"clear",value:function(){this.done(null,!0)}}],[{key:"init",value:function(e,t){return r(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"_addLeadingZero",value:function(e){return(e<10?"0":"")+e}},{key:"_createSVGEl",value:function(e){var t="http://www.w3.org/2000/svg";return document.createElementNS(t,e)}},{key:"_Pos",value:function(e){return e.targetTouches&&e.targetTouches.length>=1?{x:e.targetTouches[0].clientX,y:e.targetTouches[0].clientY}:{x:e.clientX,y:e.clientY}}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Timepicker}},{key:"defaults",get:function(){return t}}]),i}(u);n._template=['<div class= "modal timepicker-modal">','<div class="modal-content timepicker-container">','<div class="timepicker-digital-display">','<div class="timepicker-text-container">','<div class="timepicker-display-column">','<span class="timepicker-span-hours text-primary"></span>',":",'<span class="timepicker-span-minutes"></span>',"</div>",'<div class="timepicker-display-column timepicker-display-am-pm">','<div class="timepicker-span-am-pm"></div>',"</div>","</div>","</div>",'<div class="timepicker-analog-display">','<div class="timepicker-plate">','<div class="timepicker-canvas"></div>','<div class="timepicker-dial timepicker-hours"></div>','<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>',"</div>",'<div class="timepicker-footer"></div>',"</div>","</div>","</div>"].join(""),M.Timepicker=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"timepicker","M_Timepicker")}(cash),function(e){"use strict";var t={},n=function(n){function i(t,n){l(this,i);var s=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));return s.el.M_CharacterCounter=s,s.options=e.extend({},i.defaults,n),s.isInvalid=!1,s.isValidLength=!1,s._setupCounter(),s._setupEventHandlers(),s}return c(i,n),o(i,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.CharacterCounter=void 0,this._removeCounter()}},{key:"_setupEventHandlers",value:function(){this._handleUpdateCounterBound=this.updateCounter.bind(this),this.el.addEventListener("focus",this._handleUpdateCounterBound,!0),this.el.addEventListener("input",this._handleUpdateCounterBound,!0)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("focus",this._handleUpdateCounterBound,!0),this.el.removeEventListener("input",this._handleUpdateCounterBound,!0)}},{key:"_setupCounter",value:function(){this.counterEl=document.createElement("span"),e(this.counterEl).addClass("character-counter").css({float:"right","font-size":"12px",height:1}),this.$el.parent().append(this.counterEl)}},{key:"_removeCounter",value:function(){e(this.counterEl).remove()}},{key:"updateCounter",value:function(){var t=+this.$el.attr("data-length"),n=this.el.value.length;this.isValidLength=n<=t;var i=n;t&&(i+="/"+t,this._validateInput()),e(this.counterEl).html(i)}},{key:"_validateInput",value:function(){this.isValidLength&&this.isInvalid?(this.isInvalid=!1,this.$el.removeClass("invalid")):this.isValidLength||this.isInvalid||(this.isInvalid=!0,this.$el.removeClass("valid"),this.$el.addClass("invalid"))}}],[{key:"init",value:function(e,t){return r(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_CharacterCounter}},{key:"defaults",get:function(){return t}}]),i}(u);M.CharacterCounter=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"characterCounter","M_CharacterCounter")}(cash),function(e){"use strict";var t={duration:200,dist:-100,shift:0,padding:0,numVisible:5,fullWidth:!1,indicators:!1,noWrap:!1,onCycleTo:null},n=function(n){function i(t,n){l(this,i);var s=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));return s.el.M_Carousel=s,s.options=e.extend({},i.defaults,n),s.hasMultipleSlides=s.$el.find(".carousel-item").length>1,s.showIndicators=s.options.indicators&&s.hasMultipleSlides,s.noWrap=s.options.noWrap||!s.hasMultipleSlides,s.pressed=!1,s.dragged=!1,s.offset=s.target=0,s.images=[],s.itemWidth=s.$el.find(".carousel-item").first().innerWidth(),s.itemHeight=s.$el.find(".carousel-item").first().innerHeight(),s.dim=2*s.itemWidth+s.options.padding||1,s._autoScrollBound=s._autoScroll.bind(s),s._trackBound=s._track.bind(s),s.options.fullWidth&&(s.options.dist=0,s._setCarouselHeight(),s.showIndicators&&s.$el.find(".carousel-fixed-item").addClass("with-indicators")),s.$indicators=e('<ul class="indicators"></ul>'),s.$el.find(".carousel-item").each((function(t,n){if(s.images.push(t),s.showIndicators){var i=e('<li class="indicator-item"></li>');0===n&&i[0].classList.add("active"),s.$indicators.append(i)}})),s.showIndicators&&s.$el.append(s.$indicators),s.count=s.images.length,s.options.numVisible=Math.min(s.count,s.options.numVisible),s.xform="transform",["webkit","Moz","O","ms"].every((function(e){var t=e+"Transform";return"undefined"===typeof document.body.style[t]||(s.xform=t,!1)})),s._setupEventHandlers(),s._scroll(s.offset),s}return c(i,n),o(i,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.M_Carousel=void 0}},{key:"_setupEventHandlers",value:function(){var e=this;this._handleCarouselTapBound=this._handleCarouselTap.bind(this),this._handleCarouselDragBound=this._handleCarouselDrag.bind(this),this._handleCarouselReleaseBound=this._handleCarouselRelease.bind(this),this._handleCarouselClickBound=this._handleCarouselClick.bind(this),"undefined"!==typeof window.ontouchstart&&(this.el.addEventListener("touchstart",this._handleCarouselTapBound),this.el.addEventListener("touchmove",this._handleCarouselDragBound),this.el.addEventListener("touchend",this._handleCarouselReleaseBound)),this.el.addEventListener("mousedown",this._handleCarouselTapBound),this.el.addEventListener("mousemove",this._handleCarouselDragBound),this.el.addEventListener("mouseup",this._handleCarouselReleaseBound),this.el.addEventListener("mouseleave",this._handleCarouselReleaseBound),this.el.addEventListener("click",this._handleCarouselClickBound),this.showIndicators&&this.$indicators&&(this._handleIndicatorClickBound=this._handleIndicatorClick.bind(this),this.$indicators.find(".indicator-item").each((function(t,n){t.addEventListener("click",e._handleIndicatorClickBound)})));var t=M.throttle(this._handleResize,200);this._handleThrottledResizeBound=t.bind(this),window.addEventListener("resize",this._handleThrottledResizeBound)}},{key:"_removeEventHandlers",value:function(){var e=this;"undefined"!==typeof window.ontouchstart&&(this.el.removeEventListener("touchstart",this._handleCarouselTapBound),this.el.removeEventListener("touchmove",this._handleCarouselDragBound),this.el.removeEventListener("touchend",this._handleCarouselReleaseBound)),this.el.removeEventListener("mousedown",this._handleCarouselTapBound),this.el.removeEventListener("mousemove",this._handleCarouselDragBound),this.el.removeEventListener("mouseup",this._handleCarouselReleaseBound),this.el.removeEventListener("mouseleave",this._handleCarouselReleaseBound),this.el.removeEventListener("click",this._handleCarouselClickBound),this.showIndicators&&this.$indicators&&this.$indicators.find(".indicator-item").each((function(t,n){t.removeEventListener("click",e._handleIndicatorClickBound)})),window.removeEventListener("resize",this._handleThrottledResizeBound)}},{key:"_handleCarouselTap",value:function(t){"mousedown"===t.type&&e(t.target).is("img")&&t.preventDefault(),this.pressed=!0,this.dragged=!1,this.verticalDragged=!1,this.reference=this._xpos(t),this.referenceY=this._ypos(t),this.velocity=this.amplitude=0,this.frame=this.offset,this.timestamp=Date.now(),clearInterval(this.ticker),this.ticker=setInterval(this._trackBound,100)}},{key:"_handleCarouselDrag",value:function(e){var t=void 0,n=void 0,i=void 0,s=void 0;if(this.pressed)if(t=this._xpos(e),n=this._ypos(e),i=this.reference-t,s=Math.abs(this.referenceY-n),s<30&&!this.verticalDragged)(i>2||i<-2)&&(this.dragged=!0,this.reference=t,this._scroll(this.offset+i));else{if(this.dragged)return e.preventDefault(),e.stopPropagation(),!1;this.verticalDragged=!0}if(this.dragged)return e.preventDefault(),e.stopPropagation(),!1}},{key:"_handleCarouselRelease",value:function(e){if(this.pressed)return this.pressed=!1,clearInterval(this.ticker),this.target=this.offset,(this.velocity>10||this.velocity<-10)&&(this.amplitude=.9*this.velocity,this.target=this.offset+this.amplitude),this.target=Math.round(this.target/this.dim)*this.dim,this.noWrap&&(this.target>=this.dim*(this.count-1)?this.target=this.dim*(this.count-1):this.target<0&&(this.target=0)),this.amplitude=this.target-this.offset,this.timestamp=Date.now(),requestAnimationFrame(this._autoScrollBound),this.dragged&&(e.preventDefault(),e.stopPropagation()),!1}},{key:"_handleCarouselClick",value:function(t){if(this.dragged)return t.preventDefault(),t.stopPropagation(),!1;if(!this.options.fullWidth){var n=e(t.target).closest(".carousel-item").index(),i=this._wrap(this.center)-n;0!==i&&(t.preventDefault(),t.stopPropagation()),this._cycleTo(n)}}},{key:"_handleIndicatorClick",value:function(t){t.stopPropagation();var n=e(t.target).closest(".indicator-item");n.length&&this._cycleTo(n.index())}},{key:"_handleResize",value:function(e){this.options.fullWidth?(this.itemWidth=this.$el.find(".carousel-item").first().innerWidth(),this.imageHeight=this.$el.find(".carousel-item.active").height(),this.dim=2*this.itemWidth+this.options.padding,this.offset=2*this.center*this.itemWidth,this.target=this.offset,this._setCarouselHeight(!0)):this._scroll()}},{key:"_setCarouselHeight",value:function(e){var t=this,n=this.$el.find(".carousel-item.active").length?this.$el.find(".carousel-item.active").first():this.$el.find(".carousel-item").first(),i=n.find("img").first();if(i.length)if(i[0].complete){var s=i.height();if(s>0)this.$el.css("height",s+"px");else{var r=i[0].naturalWidth,o=i[0].naturalHeight,a=this.$el.width()/r*o;this.$el.css("height",a+"px")}}else i.one("load",(function(e,n){t.$el.css("height",e.offsetHeight+"px")}));else if(!e){var c=n.height();this.$el.css("height",c+"px")}}},{key:"_xpos",value:function(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}},{key:"_ypos",value:function(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}},{key:"_wrap",value:function(e){return e>=this.count?e%this.count:e<0?this._wrap(this.count+e%this.count):e}},{key:"_track",value:function(){var e=void 0,t=void 0,n=void 0,i=void 0;e=Date.now(),t=e-this.timestamp,this.timestamp=e,n=this.offset-this.frame,this.frame=this.offset,i=1e3*n/(1+t),this.velocity=.8*i+.2*this.velocity}},{key:"_autoScroll",value:function(){var e=void 0,t=void 0;this.amplitude&&(e=Date.now()-this.timestamp,t=this.amplitude*Math.exp(-e/this.options.duration),t>2||t<-2?(this._scroll(this.target-t),requestAnimationFrame(this._autoScrollBound)):this._scroll(this.target))}},{key:"_scroll",value:function(t){var n=this;this.$el.hasClass("scrolling")||this.el.classList.add("scrolling"),null!=this.scrollingTimeout&&window.clearTimeout(this.scrollingTimeout),this.scrollingTimeout=window.setTimeout((function(){n.$el.removeClass("scrolling")}),this.options.duration);var i=void 0,s=void 0,r=void 0,o=void 0,a=void 0,c=void 0,l=void 0,u=void 0,h=void 0,d=void 0,f=this.center,p=1/this.options.numVisible;if(this.offset="number"===typeof t?t:this.offset,this.center=Math.floor((this.offset+this.dim/2)/this.dim),r=this.offset-this.center*this.dim,o=r<0?1:-1,a=-o*r*2/this.dim,s=this.count>>1,this.options.fullWidth?(l="translateX(0)",d=1):(l="translateX("+(this.el.clientWidth-this.itemWidth)/2+"px) ",l+="translateY("+(this.el.clientHeight-this.itemHeight)/2+"px)",d=1-p*a),this.showIndicators){var m=this.center%this.count,g=this.$indicators.find(".indicator-item.active");g.index()!==m&&(g.removeClass("active"),this.$indicators.find(".indicator-item").eq(m)[0].classList.add("active"))}if(!this.noWrap||this.center>=0&&this.center<this.count){c=this.images[this._wrap(this.center)],e(c).hasClass("active")||(this.$el.find(".carousel-item").removeClass("active"),c.classList.add("active"));var v=l+" translateX("+-r/2+"px) translateX("+o*this.options.shift*a*i+"px) translateZ("+this.options.dist*a+"px)";this._updateItemStyle(c,d,0,v)}for(i=1;i<=s;++i){if(this.options.fullWidth?(u=this.options.dist,h=i===s&&r<0?1-a:1):(u=this.options.dist*(2*i+a*o),h=1-p*(2*i+a*o)),!this.noWrap||this.center+i<this.count){c=this.images[this._wrap(this.center+i)];var y=l+" translateX("+(this.options.shift+(this.dim*i-r)/2)+"px) translateZ("+u+"px)";this._updateItemStyle(c,h,-i,y)}if(this.options.fullWidth?(u=this.options.dist,h=i===s&&r>0?1-a:1):(u=this.options.dist*(2*i-a*o),h=1-p*(2*i-a*o)),!this.noWrap||this.center-i>=0){c=this.images[this._wrap(this.center-i)];var b=l+" translateX("+(-this.options.shift+(-this.dim*i-r)/2)+"px) translateZ("+u+"px)";this._updateItemStyle(c,h,-i,b)}}if(!this.noWrap||this.center>=0&&this.center<this.count){c=this.images[this._wrap(this.center)];var _=l+" translateX("+-r/2+"px) translateX("+o*this.options.shift*a+"px) translateZ("+this.options.dist*a+"px)";this._updateItemStyle(c,d,0,_)}var w=this.$el.find(".carousel-item").eq(this._wrap(this.center));f!==this.center&&"function"===typeof this.options.onCycleTo&&this.options.onCycleTo.call(this,w[0],this.dragged),"function"===typeof this.oneTimeCallback&&(this.oneTimeCallback.call(this,w[0],this.dragged),this.oneTimeCallback=null)}},{key:"_updateItemStyle",value:function(e,t,n,i){e.style[this.xform]=i,e.style.zIndex=n,e.style.opacity=t,e.style.visibility="visible"}},{key:"_cycleTo",value:function(e,t){var n=this.center%this.count-e;this.noWrap||(n<0?Math.abs(n+this.count)<Math.abs(n)&&(n+=this.count):n>0&&Math.abs(n-this.count)<n&&(n-=this.count)),this.target=this.dim*Math.round(this.offset/this.dim),n<0?this.target+=this.dim*Math.abs(n):n>0&&(this.target-=this.dim*n),"function"===typeof t&&(this.oneTimeCallback=t),this.offset!==this.target&&(this.amplitude=this.target-this.offset,this.timestamp=Date.now(),requestAnimationFrame(this._autoScrollBound))}},{key:"next",value:function(e){(void 0===e||isNaN(e))&&(e=1);var t=this.center+e;if(t>=this.count||t<0){if(this.noWrap)return;t=this._wrap(t)}this._cycleTo(t)}},{key:"prev",value:function(e){(void 0===e||isNaN(e))&&(e=1);var t=this.center-e;if(t>=this.count||t<0){if(this.noWrap)return;t=this._wrap(t)}this._cycleTo(t)}},{key:"set",value:function(e,t){if((void 0===e||isNaN(e))&&(e=0),e>this.count||e<0){if(this.noWrap)return;e=this._wrap(e)}this._cycleTo(e,t)}}],[{key:"init",value:function(e,t){return r(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Carousel}},{key:"defaults",get:function(){return t}}]),i}(u);M.Carousel=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"carousel","M_Carousel")}(cash),function(e){"use strict";var t={onOpen:void 0,onClose:void 0},n=function(n){function i(t,n){l(this,i);var s=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));return s.el.M_TapTarget=s,s.options=e.extend({},i.defaults,n),s.isOpen=!1,s.$origin=e("#"+s.$el.attr("data-target")),s._setup(),s._calculatePositioning(),s._setupEventHandlers(),s}return c(i,n),o(i,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.TapTarget=void 0}},{key:"_setupEventHandlers",value:function(){this._handleDocumentClickBound=this._handleDocumentClick.bind(this),this._handleTargetClickBound=this._handleTargetClick.bind(this),this._handleOriginClickBound=this._handleOriginClick.bind(this),this.el.addEventListener("click",this._handleTargetClickBound),this.originEl.addEventListener("click",this._handleOriginClickBound);var e=M.throttle(this._handleResize,200);this._handleThrottledResizeBound=e.bind(this),window.addEventListener("resize",this._handleThrottledResizeBound)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleTargetClickBound),this.originEl.removeEventListener("click",this._handleOriginClickBound),window.removeEventListener("resize",this._handleThrottledResizeBound)}},{key:"_handleTargetClick",value:function(e){this.open()}},{key:"_handleOriginClick",value:function(e){this.close()}},{key:"_handleResize",value:function(e){this._calculatePositioning()}},{key:"_handleDocumentClick",value:function(t){e(t.target).closest(".tap-target-wrapper").length||(this.close(),t.preventDefault(),t.stopPropagation())}},{key:"_setup",value:function(){this.wrapper=this.$el.parent()[0],this.waveEl=e(this.wrapper).find(".tap-target-wave")[0],this.originEl=e(this.wrapper).find(".tap-target-origin")[0],this.contentEl=this.$el.find(".tap-target-content")[0],e(this.wrapper).hasClass(".tap-target-wrapper")||(this.wrapper=document.createElement("div"),this.wrapper.classList.add("tap-target-wrapper"),this.$el.before(e(this.wrapper)),this.wrapper.append(this.el)),this.contentEl||(this.contentEl=document.createElement("div"),this.contentEl.classList.add("tap-target-content"),this.$el.append(this.contentEl)),this.waveEl||(this.waveEl=document.createElement("div"),this.waveEl.classList.add("tap-target-wave"),this.originEl||(this.originEl=this.$origin.clone(!0,!0),this.originEl.addClass("tap-target-origin"),this.originEl.removeAttr("id"),this.originEl.removeAttr("style"),this.originEl=this.originEl[0],this.waveEl.append(this.originEl)),this.wrapper.append(this.waveEl))}},{key:"_calculatePositioning",value:function(){var t="fixed"===this.$origin.css("position");if(!t)for(var n=this.$origin.parents(),i=0;i<n.length;i++)if(t="fixed"==e(n[i]).css("position"),t)break;var s=this.$origin.outerWidth(),r=this.$origin.outerHeight(),o=t?this.$origin.offset().top-M.getDocumentScrollTop():this.$origin.offset().top,a=t?this.$origin.offset().left-M.getDocumentScrollLeft():this.$origin.offset().left,c=window.innerWidth,l=window.innerHeight,u=c/2,h=l/2,d=a<=u,f=a>u,p=o<=h,m=o>h,g=a>=.25*c&&a<=.75*c,v=this.$el.outerWidth(),y=this.$el.outerHeight(),b=o+r/2-y/2,_=a+s/2-v/2,w=t?"fixed":"absolute",k=g?v:v/2+s,E=y/2,I=p?y/2:0,T=0,C=d&&!g?v/2-s:0,O=0,S=s,A=m?"bottom":"top",D=2*s,x=D,L=y/2-x/2,R=v/2-D/2,N={};N.top=p?b+"px":"",N.right=f?c-_-v+"px":"",N.bottom=m?l-b-y+"px":"",N.left=d?_+"px":"",N.position=w,e(this.wrapper).css(N),e(this.contentEl).css({width:k+"px",height:E+"px",top:I+"px",right:O+"px",bottom:T+"px",left:C+"px",padding:S+"px",verticalAlign:A}),e(this.waveEl).css({top:L+"px",left:R+"px",width:D+"px",height:x+"px"})}},{key:"open",value:function(){this.isOpen||("function"===typeof this.options.onOpen&&this.options.onOpen.call(this,this.$origin[0]),this.isOpen=!0,this.wrapper.classList.add("open"),document.body.addEventListener("click",this._handleDocumentClickBound,!0),document.body.addEventListener("touchend",this._handleDocumentClickBound))}},{key:"close",value:function(){this.isOpen&&("function"===typeof this.options.onClose&&this.options.onClose.call(this,this.$origin[0]),this.isOpen=!1,this.wrapper.classList.remove("open"),document.body.removeEventListener("click",this._handleDocumentClickBound,!0),document.body.removeEventListener("touchend",this._handleDocumentClickBound))}}],[{key:"init",value:function(e,t){return r(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_TapTarget}},{key:"defaults",get:function(){return t}}]),i}(u);M.TapTarget=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"tapTarget","M_TapTarget")}(cash),function(e){"use strict";var t={classes:"",dropdownOptions:{}},n=function(n){function i(t,n){l(this,i);var s=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,n));return s.$el.hasClass("browser-default")?a(s):(s.el.M_FormSelect=s,s.options=e.extend({},i.defaults,n),s.isMultiple=s.$el.prop("multiple"),s.el.tabIndex=-1,s._keysSelected={},s._valueDict={},s._setupDropdown(),s._setupEventHandlers(),s)}return c(i,n),o(i,[{key:"destroy",value:function(){this._removeEventHandlers(),this._removeDropdown(),this.el.M_FormSelect=void 0}},{key:"_setupEventHandlers",value:function(){var t=this;this._handleSelectChangeBound=this._handleSelectChange.bind(this),this._handleOptionClickBound=this._handleOptionClick.bind(this),this._handleInputClickBound=this._handleInputClick.bind(this),e(this.dropdownOptions).find("li:not(.optgroup)").each((function(e){e.addEventListener("click",t._handleOptionClickBound)})),this.el.addEventListener("change",this._handleSelectChangeBound),this.input.addEventListener("click",this._handleInputClickBound)}},{key:"_removeEventHandlers",value:function(){var t=this;e(this.dropdownOptions).find("li:not(.optgroup)").each((function(e){e.removeEventListener("click",t._handleOptionClickBound)})),this.el.removeEventListener("change",this._handleSelectChangeBound),this.input.removeEventListener("click",this._handleInputClickBound)}},{key:"_handleSelectChange",value:function(e){this._setValueToInput()}},{key:"_handleOptionClick",value:function(t){t.preventDefault();var n=e(t.target).closest("li")[0],i=n.id;if(!e(n).hasClass("disabled")&&!e(n).hasClass("optgroup")&&i.length){var s=!0;if(this.isMultiple){var r=e(this.dropdownOptions).find("li.disabled.selected");r.length&&(r.removeClass("selected"),r.find('input[type="checkbox"]').prop("checked",!1),this._toggleEntryFromArray(r[0].id)),s=this._toggleEntryFromArray(i)}else e(this.dropdownOptions).find("li").removeClass("selected"),e(n).toggleClass("selected",s);var o=e(this._valueDict[i].el).prop("selected");o!==s&&(e(this._valueDict[i].el).prop("selected",s),this.$el.trigger("change"))}t.stopPropagation()}},{key:"_handleInputClick",value:function(){this.dropdown&&this.dropdown.isOpen&&(this._setValueToInput(),this._setSelectedStates())}},{key:"_setupDropdown",value:function(){var t=this;this.wrapper=document.createElement("div"),e(this.wrapper).addClass("select-wrapper "+this.options.classes),this.$el.before(e(this.wrapper)),this.wrapper.appendChild(this.el),this.el.disabled&&this.wrapper.classList.add("disabled"),this.$selectOptions=this.$el.children("option, optgroup"),this.dropdownOptions=document.createElement("ul"),this.dropdownOptions.id="select-options-"+M.guid(),e(this.dropdownOptions).addClass("dropdown-content select-dropdown "+(this.isMultiple?"multiple-select-dropdown":"")),this.$selectOptions.length&&this.$selectOptions.each((function(n){if(e(n).is("option")){var i=void 0;i=t.isMultiple?t._appendOptionWithIcon(t.$el,n,"multiple"):t._appendOptionWithIcon(t.$el,n),t._addOptionToValueDict(n,i)}else if(e(n).is("optgroup")){var s=e(n).children("option");e(t.dropdownOptions).append(e('<li class="optgroup"><span>'+n.getAttribute("label")+"</span></li>")[0]),s.each((function(e){var n=t._appendOptionWithIcon(t.$el,e,"optgroup-option");t._addOptionToValueDict(e,n)}))}})),this.$el.after(this.dropdownOptions),this.input=document.createElement("input"),e(this.input).addClass("select-dropdown dropdown-trigger"),this.input.setAttribute("type","text"),this.input.setAttribute("readonly","true"),this.input.setAttribute("data-target",this.dropdownOptions.id),this.el.disabled&&e(this.input).prop("disabled","true"),this.$el.before(this.input),this._setValueToInput();var n=e('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');if(this.$el.before(n[0]),!this.el.disabled){var i=e.extend({},this.options.dropdownOptions);i.onOpenEnd=function(n){var i=e(t.dropdownOptions).find(".selected").first();if(t.dropdown.isScrollable&&i.length){var s=i[0].getBoundingClientRect().top-t.dropdownOptions.getBoundingClientRect().top;s-=t.dropdownOptions.clientHeight/2,t.dropdownOptions.scrollTop=s}},this.isMultiple&&(i.closeOnClick=!1),this.dropdown=M.Dropdown.init(this.input,i)}this._setSelectedStates()}},{key:"_addOptionToValueDict",value:function(e,t){var n=Object.keys(this._valueDict).length,i=this.dropdownOptions.id+n,s={};t.id=i,s.el=e,s.optionEl=t,this._valueDict[i]=s}},{key:"_removeDropdown",value:function(){e(this.wrapper).find(".caret").remove(),e(this.input).remove(),e(this.dropdownOptions).remove(),e(this.wrapper).before(this.$el),e(this.wrapper).remove()}},{key:"_appendOptionWithIcon",value:function(t,n,i){var s=n.disabled?"disabled ":"",r="optgroup-option"===i?"optgroup-option ":"",o=this.isMultiple?'<label><input type="checkbox"'+s+'"/><span>'+n.innerHTML+"</span></label>":n.innerHTML,a=e("<li></li>"),c=e("<span></span>");c.html(o),a.addClass(s+" "+r),a.append(c);var l=n.getAttribute("data-icon");if(l){var u=e('<img alt="" src="'+l+'">');a.prepend(u)}return e(this.dropdownOptions).append(a[0]),a[0]}},{key:"_toggleEntryFromArray",value:function(t){var n=!this._keysSelected.hasOwnProperty(t),i=e(this._valueDict[t].optionEl);return n?this._keysSelected[t]=!0:delete this._keysSelected[t],i.toggleClass("selected",n),i.find('input[type="checkbox"]').prop("checked",n),i.prop("selected",n),n}},{key:"_setValueToInput",value:function(){var t=[],n=this.$el.find("option");if(n.each((function(n){if(e(n).prop("selected")){var i=e(n).text();t.push(i)}})),!t.length){var i=this.$el.find("option:disabled").eq(0);i.length&&""===i[0].value&&t.push(i.text())}this.input.value=t.join(", ")}},{key:"_setSelectedStates",value:function(){for(var t in this._keysSelected={},this._valueDict){var n=this._valueDict[t],i=e(n.el).prop("selected");e(n.optionEl).find('input[type="checkbox"]').prop("checked",i),i?(this._activateOption(e(this.dropdownOptions),e(n.optionEl)),this._keysSelected[t]=!0):e(n.optionEl).removeClass("selected")}}},{key:"_activateOption",value:function(t,n){if(n){this.isMultiple||t.find("li.selected").removeClass("selected");var i=e(n);i.addClass("selected")}}},{key:"getSelectedValues",value:function(){var e=[];for(var t in this._keysSelected)e.push(this._valueDict[t].el.value);return e}}],[{key:"init",value:function(e,t){return r(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_FormSelect}},{key:"defaults",get:function(){return t}}]),i}(u);M.FormSelect=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"formSelect","M_FormSelect")}(cash),function(e,t){"use strict";var n={},i=function(i){function s(t,n){l(this,s);var i=a(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,s,t,n));return i.el.M_Range=i,i.options=e.extend({},s.defaults,n),i._mousedown=!1,i._setupThumb(),i._setupEventHandlers(),i}return c(s,i),o(s,[{key:"destroy",value:function(){this._removeEventHandlers(),this._removeThumb(),this.el.M_Range=void 0}},{key:"_setupEventHandlers",value:function(){this._handleRangeChangeBound=this._handleRangeChange.bind(this),this._handleRangeMousedownTouchstartBound=this._handleRangeMousedownTouchstart.bind(this),this._handleRangeInputMousemoveTouchmoveBound=this._handleRangeInputMousemoveTouchmove.bind(this),this._handleRangeMouseupTouchendBound=this._handleRangeMouseupTouchend.bind(this),this._handleRangeBlurMouseoutTouchleaveBound=this._handleRangeBlurMouseoutTouchleave.bind(this),this.el.addEventListener("change",this._handleRangeChangeBound),this.el.addEventListener("mousedown",this._handleRangeMousedownTouchstartBound),this.el.addEventListener("touchstart",this._handleRangeMousedownTouchstartBound),this.el.addEventListener("input",this._handleRangeInputMousemoveTouchmoveBound),this.el.addEventListener("mousemove",this._handleRangeInputMousemoveTouchmoveBound),this.el.addEventListener("touchmove",this._handleRangeInputMousemoveTouchmoveBound),this.el.addEventListener("mouseup",this._handleRangeMouseupTouchendBound),this.el.addEventListener("touchend",this._handleRangeMouseupTouchendBound),this.el.addEventListener("blur",this._handleRangeBlurMouseoutTouchleaveBound),this.el.addEventListener("mouseout",this._handleRangeBlurMouseoutTouchleaveBound),this.el.addEventListener("touchleave",this._handleRangeBlurMouseoutTouchleaveBound)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("change",this._handleRangeChangeBound),this.el.removeEventListener("mousedown",this._handleRangeMousedownTouchstartBound),this.el.removeEventListener("touchstart",this._handleRangeMousedownTouchstartBound),this.el.removeEventListener("input",this._handleRangeInputMousemoveTouchmoveBound),this.el.removeEventListener("mousemove",this._handleRangeInputMousemoveTouchmoveBound),this.el.removeEventListener("touchmove",this._handleRangeInputMousemoveTouchmoveBound),this.el.removeEventListener("mouseup",this._handleRangeMouseupTouchendBound),this.el.removeEventListener("touchend",this._handleRangeMouseupTouchendBound),this.el.removeEventListener("blur",this._handleRangeBlurMouseoutTouchleaveBound),this.el.removeEventListener("mouseout",this._handleRangeBlurMouseoutTouchleaveBound),this.el.removeEventListener("touchleave",this._handleRangeBlurMouseoutTouchleaveBound)}},{key:"_handleRangeChange",value:function(){e(this.value).html(this.$el.val()),e(this.thumb).hasClass("active")||this._showRangeBubble();var t=this._calcRangeOffset();e(this.thumb).addClass("active").css("left",t+"px")}},{key:"_handleRangeMousedownTouchstart",value:function(t){if(e(this.value).html(this.$el.val()),this._mousedown=!0,this.$el.addClass("active"),e(this.thumb).hasClass("active")||this._showRangeBubble(),"input"!==t.type){var n=this._calcRangeOffset();e(this.thumb).addClass("active").css("left",n+"px")}}},{key:"_handleRangeInputMousemoveTouchmove",value:function(){if(this._mousedown){e(this.thumb).hasClass("active")||this._showRangeBubble();var t=this._calcRangeOffset();e(this.thumb).addClass("active").css("left",t+"px"),e(this.value).html(this.$el.val())}}},{key:"_handleRangeMouseupTouchend",value:function(){this._mousedown=!1,this.$el.removeClass("active")}},{key:"_handleRangeBlurMouseoutTouchleave",value:function(){if(!this._mousedown){var n=parseInt(this.$el.css("padding-left")),i=7+n+"px";e(this.thumb).hasClass("active")&&(t.remove(this.thumb),t({targets:this.thumb,height:0,width:0,top:10,easing:"easeOutQuad",marginLeft:i,duration:100})),e(this.thumb).removeClass("active")}}},{key:"_setupThumb",value:function(){this.thumb=document.createElement("span"),this.value=document.createElement("span"),e(this.thumb).addClass("thumb"),e(this.value).addClass("value"),e(this.thumb).append(this.value),this.$el.after(this.thumb)}},{key:"_removeThumb",value:function(){e(this.thumb).remove()}},{key:"_showRangeBubble",value:function(){var n=parseInt(e(this.thumb).parent().css("padding-left")),i=-7+n+"px";t.remove(this.thumb),t({targets:this.thumb,height:30,width:30,top:-30,marginLeft:i,duration:300,easing:"easeOutQuint"})}},{key:"_calcRangeOffset",value:function(){var e=this.$el.width()-15,t=parseFloat(this.$el.attr("max"))||100,n=parseFloat(this.$el.attr("min"))||0,i=(parseFloat(this.$el.val())-n)/(t-n);return i*e}}],[{key:"init",value:function(e,t){return r(s.__proto__||Object.getPrototypeOf(s),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){var t=e.jquery?e[0]:e;return t.M_Range}},{key:"defaults",get:function(){return n}}]),s}(u);M.Range=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"range","M_Range"),i.init(e("input[type=range]"))}(cash,M.anime)}).call(this,n("c8ba"))},"4f60":function(e,t,n){"use strict";var i=n("7ded");n.d(t,"a",(function(){return i["a"]}));var s="firebase",r="9.6.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
i["a"].registerVersion(s,r,"app-compat")},5502:function(e,t,n){"use strict";n.d(t,"a",(function(){return Q}));var i=n("7a23"),s=n("3f4e"),r="store";function o(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function a(e){return null!==e&&"object"===typeof e}function c(e){return e&&"function"===typeof e.then}function l(e,t){if(!e)throw new Error("[vuex] "+t)}function u(e,t){return function(){return e(t)}}function h(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function d(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;p(e,n,[],e._modules.root,!0),f(e,n,t)}function f(e,t,n){var s=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var r=e._wrappedGetters,a={};o(r,(function(t,n){a[n]=u(t,e),Object.defineProperty(e.getters,n,{get:function(){return a[n]()},enumerable:!0})})),e._state=Object(i["t"])({data:t}),e.strict&&_(e),s&&n&&e._withCommit((function(){s.data=null}))}function p(e,t,n,i,s){var r=!n.length,o=e._modules.getNamespace(n);if(i.namespaced&&(e._modulesNamespaceMap[o]&&console.error("[vuex] duplicate namespace "+o+" for the namespaced module "+n.join("/")),e._modulesNamespaceMap[o]=i),!r&&!s){var a=w(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=i.state}))}var l=i.context=m(e,o,n);i.forEachMutation((function(t,n){var i=o+n;v(e,i,t,l)})),i.forEachAction((function(t,n){var i=t.root?n:o+n,s=t.handler||t;y(e,i,s,l)})),i.forEachGetter((function(t,n){var i=o+n;b(e,i,t,l)})),i.forEachChild((function(i,r){p(e,t,n.concat(r),i,s)}))}function m(e,t,n){var i=""===t,s={dispatch:i?e.dispatch:function(n,i,s){var r=k(n,i,s),o=r.payload,a=r.options,c=r.type;if(a&&a.root||(c=t+c,e._actions[c]))return e.dispatch(c,o);console.error("[vuex] unknown local action type: "+r.type+", global type: "+c)},commit:i?e.commit:function(n,i,s){var r=k(n,i,s),o=r.payload,a=r.options,c=r.type;a&&a.root||(c=t+c,e._mutations[c])?e.commit(c,o,a):console.error("[vuex] unknown local mutation type: "+r.type+", global type: "+c)}};return Object.defineProperties(s,{getters:{get:i?function(){return e.getters}:function(){return g(e,t)}},state:{get:function(){return w(e.state,n)}}}),s}function g(e,t){if(!e._makeLocalGettersCache[t]){var n={},i=t.length;Object.keys(e.getters).forEach((function(s){if(s.slice(0,i)===t){var r=s.slice(i);Object.defineProperty(n,r,{get:function(){return e.getters[s]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function v(e,t,n,i){var s=e._mutations[t]||(e._mutations[t]=[]);s.push((function(t){n.call(e,i.state,t)}))}function y(e,t,n,i){var s=e._actions[t]||(e._actions[t]=[]);s.push((function(t){var s=n.call(e,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:e.getters,rootState:e.state},t);return c(s)||(s=Promise.resolve(s)),e._devtoolHook?s.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):s}))}function b(e,t,n,i){e._wrappedGetters[t]?console.error("[vuex] duplicate getter key: "+t):e._wrappedGetters[t]=function(e){return n(i.state,i.getters,e.state,e.getters)}}function _(e){Object(i["B"])((function(){return e._state.data}),(function(){l(e._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function w(e,t){return t.reduce((function(e,t){return e[t]}),e)}function k(e,t,n){return a(e)&&e.type&&(n=t,t=e,e=e.type),l("string"===typeof e,"expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:n}}var E="vuex bindings",I="vuex:mutations",T="vuex:actions",C="vuex",O=0;function S(e,t){Object(s["setupDevtoolsPlugin"])({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[E]},(function(n){n.addTimelineLayer({id:I,label:"Vuex Mutations",color:A}),n.addTimelineLayer({id:T,label:"Vuex Actions",color:A}),n.addInspector({id:C,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===C)if(n.filter){var i=[];N(i,t._modules.root,n.filter,""),n.rootNodes=i}else n.rootNodes=[R(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===C){var i=n.nodeId;g(t,i),n.state=P(B(t._modules,i),"root"===i?t.getters:t._makeLocalGettersCache,i)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===C){var i=n.nodeId,s=n.path;"root"!==i&&(s=i.split("/").filter(Boolean).concat(s)),t._withCommit((function(){n.set(t._state.data,s,n.state.value)}))}})),t.subscribe((function(e,t){var i={};e.payload&&(i.payload=e.payload),i.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(C),n.sendInspectorState(C),n.addTimelineEvent({layerId:I,event:{time:Date.now(),title:e.type,data:i}})})),t.subscribeAction({before:function(e,t){var i={};e.payload&&(i.payload=e.payload),e._id=O++,e._time=Date.now(),i.state=t,n.addTimelineEvent({layerId:T,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:i}})},after:function(e,t){var i={},s=Date.now()-e._time;i.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},e.payload&&(i.payload=e.payload),i.state=t,n.addTimelineEvent({layerId:T,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:i}})}})}))}var A=8702998,D=6710886,x=16777215,M={label:"namespaced",textColor:x,backgroundColor:D};function L(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function R(e,t){return{id:t||"root",label:L(t),tags:e.namespaced?[M]:[],children:Object.keys(e._children).map((function(n){return R(e._children[n],t+n+"/")}))}}function N(e,t,n,i){i.includes(n)&&e.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:t.namespaced?[M]:[]}),Object.keys(t._children).forEach((function(s){N(e,t._children[s],n,i+s+"/")}))}function P(e,t,n){t="root"===n?t:t[n];var i=Object.keys(t),s={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(i.length){var r=j(t);s.getters=Object.keys(r).map((function(e){return{key:e.endsWith("/")?L(e):e,editable:!1,value:F((function(){return r[e]}))}}))}return s}function j(e){var t={};return Object.keys(e).forEach((function(n){var i=n.split("/");if(i.length>1){var s=t,r=i.pop();i.forEach((function(e){s[e]||(s[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),s=s[e]._custom.value})),s[r]=F((function(){return e[n]}))}else t[n]=F((function(){return e[n]}))})),t}function B(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,i,s){var r=e[i];if(!r)throw new Error('Missing module "'+i+'" for path "'+t+'".');return s===n.length-1?r:r._children}),"root"===t?e:e.root._children)}function F(e){try{return e()}catch(t){return t}}var U=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},$={namespaced:{configurable:!0}};$.namespaced.get=function(){return!!this._rawModule.namespaced},U.prototype.addChild=function(e,t){this._children[e]=t},U.prototype.removeChild=function(e){delete this._children[e]},U.prototype.getChild=function(e){return this._children[e]},U.prototype.hasChild=function(e){return e in this._children},U.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},U.prototype.forEachChild=function(e){o(this._children,e)},U.prototype.forEachGetter=function(e){this._rawModule.getters&&o(this._rawModule.getters,e)},U.prototype.forEachAction=function(e){this._rawModule.actions&&o(this._rawModule.actions,e)},U.prototype.forEachMutation=function(e){this._rawModule.mutations&&o(this._rawModule.mutations,e)},Object.defineProperties(U.prototype,$);var V=function(e){this.register([],e,!1)};function q(e,t,n){if(K(e,n),t.update(n),n.modules)for(var i in n.modules){if(!t.getChild(i))return void console.warn("[vuex] trying to add a new module '"+i+"' on hot reloading, manual reload is needed");q(e.concat(i),t.getChild(i),n.modules[i])}}V.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},V.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},V.prototype.update=function(e){q([],this.root,e)},V.prototype.register=function(e,t,n){var i=this;void 0===n&&(n=!0),K(e,t);var s=new U(t,n);if(0===e.length)this.root=s;else{var r=this.get(e.slice(0,-1));r.addChild(e[e.length-1],s)}t.modules&&o(t.modules,(function(t,s){i.register(e.concat(s),t,n)}))},V.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],i=t.getChild(n);i?i.runtime&&t.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},V.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var H={assert:function(e){return"function"===typeof e},expected:"function"},W={assert:function(e){return"function"===typeof e||"object"===typeof e&&"function"===typeof e.handler},expected:'function or object with "handler" function'},z={getters:H,mutations:H,actions:W};function K(e,t){Object.keys(z).forEach((function(n){if(t[n]){var i=z[n];o(t[n],(function(t,s){l(i.assert(t),G(e,n,s,t,i.expected))}))}}))}function G(e,t,n,i,s){var r=t+" should be "+s+' but "'+t+"."+n+'"';return e.length>0&&(r+=' in module "'+e.join(".")+'"'),r+=" is "+JSON.stringify(i)+".",r}function Q(e){return new Y(e)}var Y=function e(t){var n=this;void 0===t&&(t={}),l("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),l(this instanceof e,"store must be called with the new operator.");var i=t.plugins;void 0===i&&(i=[]);var s=t.strict;void 0===s&&(s=!1);var r=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new V(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(e,t){return c.call(o,e,t)},this.commit=function(e,t,n){return u.call(o,e,t,n)},this.strict=s;var h=this._modules.root.state;p(this,h,[],this._modules.root),f(this,h),i.forEach((function(e){return e(n)}))},J={state:{configurable:!0}};Y.prototype.install=function(e,t){e.provide(t||r,this),e.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&S(e,this)},J.state.get=function(){return this._state.data},J.state.set=function(e){l(!1,"use store.replaceState() to explicit replace store state.")},Y.prototype.commit=function(e,t,n){var i=this,s=k(e,t,n),r=s.type,o=s.payload,a=s.options,c={type:r,payload:o},l=this._mutations[r];l?(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(c,i.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+r+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+r)},Y.prototype.dispatch=function(e,t){var n=this,i=k(e,t),s=i.type,r=i.payload,o={type:s,payload:r},a=this._actions[s];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(l){console.warn("[vuex] error in before action subscribers: "),console.error(l)}var c=a.length>1?Promise.all(a.map((function(e){return e(r)}))):a[0](r);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(l){console.warn("[vuex] error in after action subscribers: "),console.error(l)}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(l){console.warn("[vuex] error in error action subscribers: "),console.error(l)}t(e)}))}))}console.error("[vuex] unknown action type: "+s)},Y.prototype.subscribe=function(e,t){return h(e,this._subscribers,t)},Y.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return h(n,this._actionSubscribers,t)},Y.prototype.watch=function(e,t,n){var s=this;return l("function"===typeof e,"store.watch only accepts a function."),Object(i["B"])((function(){return e(s.state,s.getters)}),t,Object.assign({},n))},Y.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},Y.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),l(e.length>0,"cannot register the root module by using registerModule."),this._modules.register(e,t),p(this,this.state,e,this._modules.get(e),n.preserveState),f(this,this.state)},Y.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.unregister(e),this._withCommit((function(){var n=w(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),d(this)},Y.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.isRegistered(e)},Y.prototype.hotUpdate=function(e){this._modules.update(e),d(this,!0)},Y.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(Y.prototype,J);ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),X(t).forEach((function(t){var i=t.key,s=t.val;n[i]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var i=te(this.$store,"mapState",e);if(!i)return;t=i.context.state,n=i.context.getters}return"function"===typeof s?s.call(this,t,n):t[s]},n[i].vuex=!0})),n})),ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),X(t).forEach((function(t){var i=t.key,s=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.commit;if(e){var r=te(this.$store,"mapMutations",e);if(!r)return;i=r.context.commit}return"function"===typeof s?s.apply(this,[i].concat(t)):i.apply(this.$store,[s].concat(t))}})),n})),ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),X(t).forEach((function(t){var i=t.key,s=t.val;s=e+s,n[i]=function(){if(!e||te(this.$store,"mapGetters",e)){if(s in this.$store.getters)return this.$store.getters[s];console.error("[vuex] unknown getter: "+s)}},n[i].vuex=!0})),n})),ee((function(e,t){var n={};return Z(t)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),X(t).forEach((function(t){var i=t.key,s=t.val;n[i]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var i=this.$store.dispatch;if(e){var r=te(this.$store,"mapActions",e);if(!r)return;i=r.context.dispatch}return"function"===typeof s?s.apply(this,[i].concat(t)):i.apply(this.$store,[s].concat(t))}})),n}));function X(e){return Z(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function Z(e){return Array.isArray(e)||a(e)}function ee(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function te(e,t,n){var i=e._modulesNamespaceMap[n];return i||console.error("[vuex] module namespace not found in "+t+"(): "+n),i}},"589b":function(e,t,n){"use strict";n.r(t),n.d(t,"SDK_VERSION",(function(){return Q})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return P})),n.d(t,"_addComponent",(function(){return U})),n.d(t,"_addOrOverwriteComponent",(function(){return $})),n.d(t,"_apps",(function(){return B})),n.d(t,"_clearComponents",(function(){return W})),n.d(t,"_components",(function(){return F})),n.d(t,"_getProvider",(function(){return q})),n.d(t,"_registerComponent",(function(){return V})),n.d(t,"_removeServiceInstance",(function(){return H})),n.d(t,"deleteApp",(function(){return Z})),n.d(t,"getApp",(function(){return J})),n.d(t,"getApps",(function(){return X})),n.d(t,"initializeApp",(function(){return Y})),n.d(t,"onLog",(function(){return te})),n.d(t,"registerVersion",(function(){return ee})),n.d(t,"setLogLevel",(function(){return ne}));var i=n("22e5"),s=n("e691"),r=n("1fd5");n.d(t,"FirebaseError",(function(){return r["c"]}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",l="0.7.11",u=new s["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",_="@firebase/functions",w="@firebase/functions-compat",k="@firebase/installations",E="@firebase/installations-compat",I="@firebase/messaging",T="@firebase/messaging-compat",C="@firebase/performance",O="@firebase/performance-compat",S="@firebase/remote-config",A="@firebase/remote-config-compat",D="@firebase/storage",x="@firebase/storage-compat",M="@firebase/firestore",L="@firebase/firestore-compat",R="firebase",N="9.6.1",P="[DEFAULT]",j={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[_]:"fire-fn",[w]:"fire-fn-compat",[k]:"fire-iid",[E]:"fire-iid-compat",[I]:"fire-fcm",[T]:"fire-fcm-compat",[C]:"fire-perf",[O]:"fire-perf-compat",[S]:"fire-rc",[A]:"fire-rc-compat",[D]:"fire-gcs",[x]:"fire-gcs-compat",[M]:"fire-fst",[L]:"fire-fst-compat","fire-js":"fire-js",[R]:"fire-js-all"},B=new Map,F=new Map;function U(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $(e,t){e.container.addOrOverwriteComponent(t)}function V(e){const t=e.name;if(F.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;F.set(t,e);for(const n of B.values())U(n,e);return!0}function q(e,t){return e.container.getProvider(t)}function H(e,t,n=P){q(e,t).clearInstance(n)}function W(){F.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},K=new r["b"]("app","Firebase",z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=N;function Y(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:P,automaticDataCollectionEnabled:!1},t),s=n.name;if("string"!==typeof s||!s)throw K.create("bad-app-name",{appName:String(s)});const o=B.get(s);if(o){if(Object(r["h"])(e,o.options)&&Object(r["h"])(n,o.config))return o;throw K.create("duplicate-app",{appName:s})}const a=new i["b"](s);for(const i of F.values())a.addComponent(i);const c=new G(e,n,a);return B.set(s,c),c}function J(e=P){const t=B.get(e);if(!t)throw K.create("no-app",{appName:e});return t}function X(){return Array.from(B.values())}async function Z(e){const t=e.name;B.has(t)&&(B.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function ee(e,t,n){var s;let r=null!==(s=j[e])&&void 0!==s?s:e;n&&(r+="-"+n);const o=r.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${r}" with version "${t}":`];return o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}V(new i["a"](r+"-version",()=>({library:r,version:t}),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw K.create("invalid-log-argument");Object(s["d"])(e,t)}function ne(e){Object(s["c"])(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){V(new i["a"]("platform-logger",e=>new o(e),"PRIVATE")),ee(c,l,e),ee(c,l,"esm2017"),ee("fire-js","")}ie("")},5994:function(e,t,n){"use strict";(function(e){var t=n("7ded"),i=n("1f5a"),s=n("22e5"),r=n("1fd5"),o="@firebase/auth-compat",a="0.2.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=1e3;function l(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function u(){return"http:"===l()||"https:"===l()}function h(e=Object(r["l"])()){return!("file:"!==l()&&"ionic:"!==l()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(){return Object(r["u"])()||Object(r["t"])()}function f(){return Object(r["q"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function p(e=Object(r["l"])()){return/Edge\/\d+/.test(e)}function m(e=Object(r["l"])()){return f()||p(e)}function g(){try{const e=self.localStorage,t=i["s"]();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!m()||Object(r["r"])()}catch(e){return v()&&Object(r["r"])()}return!1}function v(){return"undefined"!==typeof e&&"WorkerGlobalScope"in e&&"importScripts"in e}function y(){return(u()||Object(r["n"])()||h())&&!d()&&g()&&!v()}function b(){return h()&&"undefined"!==typeof document}async function _(){return!!b()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},c);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={LOCAL:"local",NONE:"none",SESSION:"session"},k=i["p"],E="persistence";function I(e,t){k(Object.values(w).includes(t),e,"invalid-persistence-type"),Object(r["u"])()?k(t!==w.SESSION,e,"unsupported-persistence-type"):Object(r["t"])()?k(t===w.NONE,e,"unsupported-persistence-type"):v()?k(t===w.NONE||t===w.LOCAL&&Object(r["r"])(),e,"unsupported-persistence-type"):k(t===w.NONE||g(),e,"unsupported-persistence-type")}async function T(e){await e._initializationPromise;const t=O(),n=i["v"](E,e.config.apiKey,e.name);(null===t||void 0===t?void 0:t.sessionStorage)&&t.sessionStorage.setItem(n,e._getPersistence())}function C(e,t){const n=O();if(!(null===n||void 0===n?void 0:n.sessionStorage))return[];const s=i["v"](E,e,t),r=n.sessionStorage.getItem(s);switch(r){case w.NONE:return[i["L"]];case w.LOCAL:return[i["M"],i["A"]];case w.SESSION:return[i["A"]];default:return[]}}function O(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=i["p"];class A{constructor(){this.browserResolver=i["t"](i["z"]),this.cordovaResolver=i["t"](i["E"]),this.underlyingResolver=null,this._redirectPersistence=i["A"],this._completeRedirectFn=i["u"]}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return b()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return S(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await _();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){return e.unwrap()}function x(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){return R(e)}function L(e,t){var n;const s=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new j(e,i["J"](e,t))}else if(s){const e=R(t),n=t;e&&(n.credential=e,n.tenantId=s.tenantId||void 0,n.email=s.email||void 0,n.phoneNumber=s.phoneNumber||void 0)}}function R(e){const{_tokenResponse:t}=e instanceof r["c"]?e.customData:e;if(!t)return null;if(!(e instanceof r["c"])&&"temporaryProof"in t&&"phoneNumber"in t)return i["i"].credentialFromResult(e);const n=t.providerId;if(!n||n===i["k"].PASSWORD)return null;let s;switch(n){case i["k"].GOOGLE:s=i["f"];break;case i["k"].FACEBOOK:s=i["d"];break;case i["k"].GITHUB:s=i["e"];break;case i["k"].TWITTER:s=i["o"];break;default:const{oauthIdToken:e,oauthAccessToken:r,oauthTokenSecret:o,pendingToken:a,nonce:c}=t;return r||o||e||a?a?n.startsWith("saml.")?i["m"]._create(n,a):i["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:r}):new i["h"](n).credential({idToken:e,accessToken:r,rawNonce:c}):null}return e instanceof r["c"]?s.credentialFromError(e):s.credentialFromResult(e)}function N(e,t){return t.catch(t=>{throw t instanceof r["c"]&&L(e,t),t}).then(e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:M(e),additionalUserInfo:i["I"](e),user:B.getOrCreate(n)}})}async function P(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>N(e,n.confirm(t))}}class j{constructor(e,t){this.resolver=t,this.auth=x(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return N(D(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this._delegate=e,this.multiFactor=i["S"](e)}static getOrCreate(e){return B.USER_MAP.has(e)||B.USER_MAP.set(e,new B(e)),B.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return N(this.auth,i["O"](this._delegate,e))}async linkWithPhoneNumber(e,t){return P(this.auth,i["P"](this._delegate,e,t))}async linkWithPopup(e){return N(this.auth,i["Q"](this._delegate,e,A))}async linkWithRedirect(e){return await T(i["q"](this.auth)),i["R"](this._delegate,e,A)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return N(this.auth,i["T"](this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return P(this.auth,i["U"](this._delegate,e,t))}reauthenticateWithPopup(e){return N(this.auth,i["V"](this._delegate,e,A))}async reauthenticateWithRedirect(e){return await T(i["q"](this.auth)),i["W"](this._delegate,e,A)}sendEmailVerification(e){return i["X"](this._delegate,e)}async unlink(e){return await i["ib"](this._delegate,e),this}updateEmail(e){return i["jb"](this._delegate,e)}updatePassword(e){return i["kb"](this._delegate,e)}updatePhoneNumber(e){return i["lb"](this._delegate,e)}updateProfile(e){return i["mb"](this._delegate,e)}verifyBeforeUpdateEmail(e,t){return i["nb"](this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}B.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F=i["p"];class U{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;F(n,"invalid-api-key",{appName:e.name});let s=[i["L"]];if("undefined"!==typeof window){s=C(n,e.name);for(const e of[i["M"],i["y"],i["A"]])s.includes(e)||s.push(e)}F(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?A:void 0;this._delegate=t.initialize({options:{persistence:s,popupRedirectResolver:r}}),this._delegate._updateErrorMap(i["G"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?B.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){i["D"](this._delegate,e,t)}applyActionCode(e){return i["x"](this._delegate,e)}checkActionCode(e){return i["B"](this._delegate,e)}confirmPasswordReset(e,t){return i["C"](this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return N(this._delegate,i["F"](this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return i["H"](this._delegate,e)}isSignInWithEmailLink(e){return i["N"](this._delegate,e)}async getRedirectResult(){F(y(),this._delegate,"operation-not-supported-in-this-environment");const e=await i["K"](this._delegate,A);return e?N(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){i["w"](this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:s,complete:r}=$(e,t,n);return this._delegate.onAuthStateChanged(i,s,r)}onIdTokenChanged(e,t,n){const{next:i,error:s,complete:r}=$(e,t,n);return this._delegate.onIdTokenChanged(i,s,r)}sendSignInLinkToEmail(e,t){return i["Z"](this._delegate,e,t)}sendPasswordResetEmail(e,t){return i["Y"](this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(I(this._delegate,e),e){case w.SESSION:t=i["A"];break;case w.LOCAL:const e=await i["t"](i["M"])._isAvailable();t=e?i["M"]:i["y"];break;case w.NONE:t=i["L"];break;default:return i["r"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return N(this._delegate,i["ab"](this._delegate))}signInWithCredential(e){return N(this._delegate,i["bb"](this._delegate,e))}signInWithCustomToken(e){return N(this._delegate,i["cb"](this._delegate,e))}signInWithEmailAndPassword(e,t){return N(this._delegate,i["db"](this._delegate,e,t))}signInWithEmailLink(e,t){return N(this._delegate,i["eb"](this._delegate,e,t))}signInWithPhoneNumber(e,t){return P(this._delegate,i["fb"](this._delegate,e,t))}async signInWithPopup(e){return F(y(),this._delegate,"operation-not-supported-in-this-environment"),N(this._delegate,i["gb"](this._delegate,e,A))}async signInWithRedirect(e){return F(y(),this._delegate,"operation-not-supported-in-this-environment"),await T(this._delegate),i["hb"](this._delegate,e,A)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return i["ob"](this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function $(e,t,n){let i=e;"function"!==typeof e&&({next:i,error:t,complete:n}=e);const s=i,r=e=>s(e&&B.getOrCreate(e));return{next:r,error:t,complete:n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */U.Persistence=w;class V{constructor(){this.providerId="phone",this._delegate=new i["i"](D(t["a"].auth()))}static credential(e,t){return i["i"].credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}V.PHONE_SIGN_IN_METHOD=i["i"].PHONE_SIGN_IN_METHOD,V.PROVIDER_ID=i["i"].PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const q=i["p"];class H{constructor(e,n,s=t["a"].app()){var r;q(null===(r=s.options)||void 0===r?void 0:r.apiKey,"invalid-api-key",{appName:s.name}),this._delegate=new i["l"](e,n,s.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="auth-compat";function z(e){e.INTERNAL.registerComponent(new s["a"](W,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new U(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:i["a"].EMAIL_SIGNIN,PASSWORD_RESET:i["a"].PASSWORD_RESET,RECOVER_EMAIL:i["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:i["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:i["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:i["a"].VERIFY_EMAIL}},EmailAuthProvider:i["c"],FacebookAuthProvider:i["d"],GithubAuthProvider:i["e"],GoogleAuthProvider:i["f"],OAuthProvider:i["h"],SAMLAuthProvider:i["n"],PhoneAuthProvider:V,PhoneMultiFactorGenerator:i["j"],RecaptchaVerifier:H,TwitterAuthProvider:i["o"],Auth:U,AuthCredential:i["b"],Error:r["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(o,a)}z(t["a"])}).call(this,n("c8ba"))},"619b":function(e,t,n){},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n}},"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ze})),n.d(t,"b",(function(){return H}));var i=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const s="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,r=e=>s?Symbol(e):"_vr_"+e,o=r("rvlm"),a=r("rvd"),c=r("r"),l=r("rl"),u=r("rvl"),h="undefined"!==typeof window;function d(e){return e.__esModule||s&&"Module"===e[Symbol.toStringTag]}const f=Object.assign;function p(e,t){const n={};for(const i in t){const s=t[i];n[i]=Array.isArray(s)?s.map(e):e(s)}return n}const m=()=>{};const g=/\/$/,v=e=>e.replace(g,"");function y(e,t,n="/"){let i,s={},r="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(i=t.slice(0,a),r=t.slice(a+1,c>-1?c:t.length),s=e(r)),c>-1&&(i=i||t.slice(0,c),o=t.slice(c,t.length)),i=C(null!=i?i:t,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function w(e,t,n){const i=t.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&k(t.matched[i],n.matched[s])&&E(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function k(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function E(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!I(e[n],t[n]))return!1;return!0}function I(e,t){return Array.isArray(e)?T(e,t):Array.isArray(t)?T(t,e):e===t}function T(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function C(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let s,r,o=n.length-1;for(s=0;s<i.length;s++)if(r=i[s],1!==o&&"."!==r){if(".."!==r)break;o--}return n.slice(0,o).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var O,S;(function(e){e["pop"]="pop",e["push"]="push"})(O||(O={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(S||(S={}));function A(e){if(!e)if(h){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}const D=/^[^#]+#/;function x(e,t){return e.replace(D,"#")+t}function M(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const L=()=>({left:window.pageXOffset,top:window.pageYOffset});function R(e){let t;if("el"in e){const n=e.el,i="string"===typeof n&&n.startsWith("#");0;const s="string"===typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=M(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function N(e,t){const n=history.state?history.state.position-t:-1;return n+e}const P=new Map;function j(e,t){P.set(e,t)}function B(e){const t=P.get(e);return P.delete(e),t}let F=()=>location.protocol+"//"+location.host;function U(e,t){const{pathname:n,search:i,hash:s}=t,r=e.indexOf("#");if(r>-1){let t=s.includes(e.slice(r))?e.slice(r).length:1,n=s.slice(t);return"/"!==n[0]&&(n="/"+n),_(n,"")}const o=_(n,e);return o+i+s}function $(e,t,n,i){let s=[],r=[],o=null;const a=({state:r})=>{const a=U(e,location),c=n.value,l=t.value;let u=0;if(r){if(n.value=a,t.value=r,o&&o===c)return void(o=null);u=l?r.position-l.position:0}else i(a);s.forEach(e=>{e(n.value,c,{delta:u,type:O.pop,direction:u?u>0?S.forward:S.back:S.unknown})})};function c(){o=n.value}function l(e){s.push(e);const t=()=>{const t=s.indexOf(e);t>-1&&s.splice(t,1)};return r.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(f({},e.state,{scroll:L()}),"")}function h(){for(const e of r)e();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function V(e,t,n,i=!1,s=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:s?L():null}}function q(e){const{history:t,location:n}=window,i={value:U(e,n)},s={value:t.state};function r(i,r,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:F()+e+i;try{t[o?"replaceState":"pushState"](r,"",c),s.value=r}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(e,n){const o=f({},t.state,V(s.value.back,e,s.value.forward,!0),n,{position:s.value.position});r(e,o,!0),i.value=e}function a(e,n){const o=f({},s.value,t.state,{forward:e,scroll:L()});r(o.current,o,!0);const a=f({},V(i.value,e,null),{position:o.position+1},n);r(e,a,!1),i.value=e}return s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:i,state:s,push:a,replace:o}}function H(e){e=A(e);const t=q(e),n=$(e,t.state,t.location,t.replace);function i(e,t=!0){t||n.pauseListeners(),history.go(e)}const s=f({location:"",base:e,go:i,createHref:x.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function W(e){return"string"===typeof e||e&&"object"===typeof e}function z(e){return"string"===typeof e||"symbol"===typeof e}const K={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},G=r("nf");var Q;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Q||(Q={}));function Y(e,t){return f(new Error,{type:e,[G]:!0},t)}function J(e,t){return e instanceof Error&&G in e&&(null==t||!!(e.type&t))}const X="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){const n=f({},Z,t),i=[];let s=n.start?"^":"";const r=[];for(const u of e){const e=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let t=0;t<u.length;t++){const i=u[t];let o=40+(n.sensitive?.25:0);if(0===i.type)t||(s+="/"),s+=i.value.replace(ee,"\\$&"),o+=40;else if(1===i.type){const{value:e,repeatable:n,optional:a,regexp:c}=i;r.push({name:e,repeatable:n,optional:a});const h=c||X;if(h!==X){o+=10;try{new RegExp(`(${h})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+l.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&u.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),s+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}i.push(e)}if(n.strict&&n.end){const e=i.length-1;i[e][i[e].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let i=1;i<t.length;i++){const e=t[i]||"",s=r[i-1];n[s.name]=e&&s.repeatable?e.split("/"):e}return n}function c(t){let n="",i=!1;for(const s of e){i&&n.endsWith("/")||(n+="/"),i=!1;for(const e of s)if(0===e.type)n+=e.value;else if(1===e.type){const{value:r,repeatable:o,optional:a}=e,c=r in t?t[r]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${r}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${r}"`);s.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=l}}return n}return{re:o,score:i,keys:r,parse:a,stringify:c}}function ne(e,t){let n=0;while(n<e.length&&n<t.length){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function ie(e,t){let n=0;const i=e.score,s=t.score;while(n<i.length&&n<s.length){const e=ne(i[n],s[n]);if(e)return e;n++}return s.length-i.length}const se={type:0,value:""},re=/[a-zA-Z0-9_]/;function oe(e){if(!e)return[[]];if("/"===e)return[[se]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a,c=0,l="",u="";function h(){l&&(0===n?r.push({type:0,value:l}):1===n||2===n||3===n?(r.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:"("===a?n=2:re.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else i=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function ae(e,t,n){const i=te(oe(e.path),n);const s=f(i,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf===!t.record.aliasOf&&t.children.push(s),s}function ce(e,t){const n=[],i=new Map;function s(e){return i.get(e)}function r(e,n,i){const s=!i,a=ue(e);a.aliasOf=i&&i.record;const l=pe(t,e),u=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(f({},a,{components:i?i.record.components:a.components,path:e,aliasOf:i?i.record:a}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,i="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&i+u)}if(h=ae(t,n,l),i?i.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),s&&e.name&&!de(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)r(e[t],h,i&&i.children[t])}i=i||h,c(h)}return d?()=>{o(d)}:m}function o(e){if(z(e)){const t=i.get(e);t&&(i.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&i.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function c(e){let t=0;while(t<n.length&&ie(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!de(e)&&i.set(e.record.name,e)}function l(e,t){let s,r,o,a={};if("name"in e&&e.name){if(s=i.get(e.name),!s)throw Y(1,{location:e});o=s.record.name,a=f(le(t.params,s.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),r=s.stringify(a)}else if("path"in e)r=e.path,s=n.find(e=>e.re.test(r)),s&&(a=s.parse(r),o=s.record.name);else{if(s=t.name?i.get(t.name):n.find(e=>e.re.test(t.path)),!s)throw Y(1,{location:e,currentLocation:t});o=s.record.name,a=f({},t.params,e.params),r=s.stringify(a)}const c=[];let l=s;while(l)c.unshift(l.record),l=l.parent;return{name:o,path:r,params:a,matched:c,meta:fe(c)}}return t=pe({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>r(e)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function le(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function ue(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:he(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function he(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]="boolean"===typeof n?n:n[i];return t}function de(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fe(e){return e.reduce((e,t)=>f(e,t.meta),{})}function pe(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}const me=/#/g,ge=/&/g,ve=/\//g,ye=/=/g,be=/\?/g,_e=/\+/g,we=/%5B/g,ke=/%5D/g,Ee=/%5E/g,Ie=/%60/g,Te=/%7B/g,Ce=/%7C/g,Oe=/%7D/g,Se=/%20/g;function Ae(e){return encodeURI(""+e).replace(Ce,"|").replace(we,"[").replace(ke,"]")}function De(e){return Ae(e).replace(Te,"{").replace(Oe,"}").replace(Ee,"^")}function xe(e){return Ae(e).replace(_e,"%2B").replace(Se,"+").replace(me,"%23").replace(ge,"%26").replace(Ie,"`").replace(Te,"{").replace(Oe,"}").replace(Ee,"^")}function Me(e){return xe(e).replace(ye,"%3D")}function Le(e){return Ae(e).replace(me,"%23").replace(be,"%3F")}function Re(e){return null==e?"":Le(e).replace(ve,"%2F")}function Ne(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Pe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],i=(n?e.slice(1):e).split("&");for(let s=0;s<i.length;++s){const e=i[s].replace(_e," "),n=e.indexOf("="),r=Ne(n<0?e:e.slice(0,n)),o=n<0?null:Ne(e.slice(n+1));if(r in t){let e=t[r];Array.isArray(e)||(e=t[r]=[e]),e.push(o)}else t[r]=o}return t}function je(e){let t="";for(let n in e){const i=e[n];if(n=Me(n),null==i){void 0!==i&&(t+=(t.length?"&":"")+n);continue}const s=Array.isArray(i)?i.map(e=>e&&xe(e)):[i&&xe(i)];s.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Be(e){const t={};for(const n in e){const i=e[n];void 0!==i&&(t[n]=Array.isArray(i)?i.map(e=>null==e?null:""+e):null==i?i:""+i)}return t}function Fe(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ue(e,t,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=e=>{!1===e?a(Y(4,{from:n,to:t})):e instanceof Error?a(e):W(e)?a(Y(2,{from:t,to:e})):(r&&i.enterCallbacks[s]===r&&"function"===typeof e&&r.push(e),o())},l=e.call(i&&i.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(e=>a(e))})}function $e(e,t,n,i){const s=[];for(const r of e)for(const e in r.components){let o=r.components[e];if("beforeRouteEnter"===t||r.instances[e])if(Ve(o)){const a=o.__vccOpts||o,c=a[t];c&&s.push(Ue(c,n,i,r,e))}else{let a=o();0,s.push(()=>a.then(s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${r.path}"`));const o=d(s)?s.default:s;r.components[e]=o;const a=o.__vccOpts||o,c=a[t];return c&&Ue(c,n,i,r,e)()}))}}return s}function Ve(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function qe(e){const t=Object(i["k"])(c),n=Object(i["k"])(l),s=Object(i["b"])(()=>t.resolve(Object(i["z"])(e.to))),r=Object(i["b"])(()=>{const{matched:e}=s.value,{length:t}=e,i=e[t-1],r=n.matched;if(!i||!r.length)return-1;const o=r.findIndex(k.bind(null,i));if(o>-1)return o;const a=Ge(e[t-2]);return t>1&&Ge(i)===a&&r[r.length-1].path!==a?r.findIndex(k.bind(null,e[t-2])):o}),o=Object(i["b"])(()=>r.value>-1&&Ke(n.params,s.value.params)),a=Object(i["b"])(()=>r.value>-1&&r.value===n.matched.length-1&&E(n.params,s.value.params));function u(n={}){return ze(n)?t[Object(i["z"])(e.replace)?"replace":"push"](Object(i["z"])(e.to)).catch(m):Promise.resolve()}return{route:s,href:Object(i["b"])(()=>s.value.href),isActive:o,isExactActive:a,navigate:u}}const He=Object(i["h"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qe,setup(e,{slots:t}){const n=Object(i["t"])(qe(e)),{options:s}=Object(i["k"])(c),r=Object(i["b"])(()=>({[Qe(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Qe(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Object(i["j"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),We=He;function ze(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ke(e,t){for(const n in t){const i=t[n],s=e[n];if("string"===typeof i){if(i!==s)return!1}else if(!Array.isArray(s)||s.length!==i.length||i.some((e,t)=>e!==s[t]))return!1}return!0}function Ge(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qe=(e,t,n)=>null!=e?e:null!=t?t:n,Ye=Object(i["h"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const s=Object(i["k"])(u),r=Object(i["b"])(()=>e.route||s.value),c=Object(i["k"])(a,0),l=Object(i["b"])(()=>r.value.matched[c]);Object(i["r"])(a,c+1),Object(i["r"])(o,l),Object(i["r"])(u,r);const h=Object(i["u"])();return Object(i["B"])(()=>[h.value,l.value,e.name],([e,t,n],[i,s,r])=>{t&&(t.instances[n]=e,s&&s!==t&&e&&e===i&&(t.leaveGuards.size||(t.leaveGuards=s.leaveGuards),t.updateGuards.size||(t.updateGuards=s.updateGuards))),!e||!t||s&&k(t,s)&&i||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const s=r.value,o=l.value,a=o&&o.components[e.name],c=e.name;if(!a)return Je(n.default,{Component:a,route:s});const u=o.props[e.name],d=u?!0===u?s.params:"function"===typeof u?u(s):u:null,p=e=>{e.component.isUnmounted&&(o.instances[c]=null)},m=Object(i["j"])(a,f({},d,t,{onVnodeUnmounted:p,ref:h}));return Je(n.default,{Component:m,route:s})||m}}});function Je(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Xe=Ye;function Ze(e){const t=ce(e.routes,e),n=e.parseQuery||Pe,s=e.stringifyQuery||je,r=e.history;const o=Fe(),a=Fe(),d=Fe(),g=Object(i["x"])(K);let v=K;h&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=p.bind(null,e=>""+e),k=p.bind(null,Re),E=p.bind(null,Ne);function I(e,n){let i,s;return z(e)?(i=t.getRecordMatcher(e),s=n):s=e,t.addRoute(s,i)}function T(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function C(){return t.getRoutes().map(e=>e.record)}function S(e){return!!t.getRecordMatcher(e)}function A(e,i){if(i=f({},i||g.value),"string"===typeof e){const s=y(n,e,i.path),o=t.resolve({path:s.path},i),a=r.createHref(s.fullPath);return f(s,o,{params:E(o.params),hash:Ne(s.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=f({},e,{path:y(n,e.path,i.path).path});else{const t=f({},e.params);for(const e in t)null==t[e]&&delete t[e];o=f({},e,{params:k(e.params)}),i.params=k(i.params)}const a=t.resolve(o,i),c=e.hash||"";a.params=_(E(a.params));const l=b(s,f({},e,{hash:De(c),path:a.path})),u=r.createHref(l);return f({fullPath:l,hash:c,query:s===je?Be(e.query):e.query||{}},a,{redirectedFrom:void 0,href:u})}function D(e){return"string"===typeof e?y(n,e,g.value.path):f({},e)}function x(e,t){if(v!==e)return Y(8,{from:t,to:e})}function M(e){return U(e)}function P(e){return M(f(D(e),{replace:!0}))}function F(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let i="function"===typeof n?n(e):n;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=D(i):{path:i},i.params={}),f({query:e.query,hash:e.hash,params:e.params},i)}}function U(e,t){const n=v=A(e),i=g.value,r=e.state,o=e.force,a=!0===e.replace,c=F(n);if(c)return U(f(D(c),{state:r,force:o,replace:a}),t||n);const l=n;let u;return l.redirectedFrom=t,!o&&w(s,i,n)&&(u=Y(16,{to:l,from:i}),ie(i,i,!0,!1)),(u?Promise.resolve(u):V(l,i)).catch(e=>J(e)?e:ee(e,l,i)).then(e=>{if(e){if(J(e,2))return U(f(D(e.to),{state:r,force:o,replace:a}),t||l)}else e=H(l,i,!0,a,r);return q(l,i,e),e})}function $(e,t){const n=x(e,t);return n?Promise.reject(n):Promise.resolve()}function V(e,t){let n;const[i,s,r]=tt(e,t);n=$e(i.reverse(),"beforeRouteLeave",e,t);for(const o of i)o.leaveGuards.forEach(i=>{n.push(Ue(i,e,t))});const c=$.bind(null,e,t);return n.push(c),et(n).then(()=>{n=[];for(const i of o.list())n.push(Ue(i,e,t));return n.push(c),et(n)}).then(()=>{n=$e(s,"beforeRouteUpdate",e,t);for(const i of s)i.updateGuards.forEach(i=>{n.push(Ue(i,e,t))});return n.push(c),et(n)}).then(()=>{n=[];for(const i of e.matched)if(i.beforeEnter&&!t.matched.includes(i))if(Array.isArray(i.beforeEnter))for(const s of i.beforeEnter)n.push(Ue(s,e,t));else n.push(Ue(i.beforeEnter,e,t));return n.push(c),et(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=$e(r,"beforeRouteEnter",e,t),n.push(c),et(n))).then(()=>{n=[];for(const i of a.list())n.push(Ue(i,e,t));return n.push(c),et(n)}).catch(e=>J(e,8)?e:Promise.reject(e))}function q(e,t,n){for(const i of d.list())i(e,t,n)}function H(e,t,n,i,s){const o=x(e,t);if(o)return o;const a=t===K,c=h?history.state:{};n&&(i||a?r.replace(e.fullPath,f({scroll:a&&c&&c.scroll},s)):r.push(e.fullPath,s)),g.value=e,ie(e,t,n,a),ne()}let W;function G(){W=r.listen((e,t,n)=>{const i=A(e),s=F(i);if(s)return void U(f(s,{replace:!0}),i).catch(m);v=i;const o=g.value;h&&j(N(o.fullPath,n.delta),L()),V(i,o).catch(e=>J(e,12)?e:J(e,2)?(U(e.to,i).then(e=>{J(e,20)&&!n.delta&&n.type===O.pop&&r.go(-1,!1)}).catch(m),Promise.reject()):(n.delta&&r.go(-n.delta,!1),ee(e,i,o))).then(e=>{e=e||H(i,o,!1),e&&(n.delta?r.go(-n.delta,!1):n.type===O.pop&&J(e,20)&&r.go(-1,!1)),q(i,o,e)}).catch(m)})}let Q,X=Fe(),Z=Fe();function ee(e,t,n){ne(e);const i=Z.list();return i.length?i.forEach(i=>i(e,t,n)):console.error(e),Promise.reject(e)}function te(){return Q&&g.value!==K?Promise.resolve():new Promise((e,t)=>{X.add([e,t])})}function ne(e){Q||(Q=!0,G(),X.list().forEach(([t,n])=>e?n(e):t()),X.reset())}function ie(t,n,s,r){const{scrollBehavior:o}=e;if(!h||!o)return Promise.resolve();const a=!s&&B(N(t.fullPath,0))||(r||!s)&&history.state&&history.state.scroll||null;return Object(i["l"])().then(()=>o(t,n,a)).then(e=>e&&R(e)).catch(e=>ee(e,t,n))}const se=e=>r.go(e);let re;const oe=new Set,ae={currentRoute:g,addRoute:I,removeRoute:T,hasRoute:S,getRoutes:C,resolve:A,options:e,push:M,replace:P,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:o.add,beforeResolve:a.add,afterEach:d.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",Xe),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(i["z"])(g)}),h&&!re&&g.value===K&&(re=!0,M(r.location).catch(e=>{0}));const n={};for(const r in K)n[r]=Object(i["b"])(()=>g.value[r]);e.provide(c,t),e.provide(l,Object(i["t"])(n)),e.provide(u,g);const s=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(v=K,W&&W(),g.value=K,re=!1,Q=!1),s()}}};return ae}function et(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function tt(e,t){const n=[],i=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const r=t.matched[o];r&&(e.matched.find(e=>k(e,r))?i.push(r):n.push(r));const a=e.matched[o];a&&(t.matched.find(e=>k(e,a))||s.push(a))}return[n,i,s]}},"7a23":function(e,t,n){"use strict";n.d(t,"b",(function(){return We})),n.d(t,"t",(function(){return Ee})),n.d(t,"u",(function(){return je})),n.d(t,"x",(function(){return Be})),n.d(t,"z",(function(){return $e})),n.d(t,"y",(function(){return i["L"]})),n.d(t,"a",(function(){return Fn})),n.d(t,"d",(function(){return li})),n.d(t,"e",(function(){return Yn})),n.d(t,"f",(function(){return ii})),n.d(t,"g",(function(){return si})),n.d(t,"h",(function(){return wt})),n.d(t,"i",(function(){return Ei})),n.d(t,"j",(function(){return _s})),n.d(t,"k",(function(){return ut})),n.d(t,"l",(function(){return ns})),n.d(t,"m",(function(){return Tt})),n.d(t,"n",(function(){return Ct})),n.d(t,"o",(function(){return Bt})),n.d(t,"p",(function(){return Wn})),n.d(t,"q",(function(){return Ze})),n.d(t,"r",(function(){return lt})),n.d(t,"s",(function(){return Xe})),n.d(t,"v",(function(){return mi})),n.d(t,"w",(function(){return Nn})),n.d(t,"B",(function(){return ms})),n.d(t,"C",(function(){return et})),n.d(t,"D",(function(){return _n})),n.d(t,"c",(function(){return Ar})),n.d(t,"A",(function(){return _r})),n.d(t,"E",(function(){return Tr})),n.d(t,"F",(function(){return Er}));var i=n("9ff4");let s;const r=[];class o{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&s&&(this.parent=s,this.index=(s.scopes||(s.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(r.push(this),s=this)}off(){this.active&&(r.pop(),s=r[r.length-1])}stop(e){if(this.active){if(this.effects.forEach(e=>e.stop()),this.cleanups.forEach(e=>e()),this.scopes&&this.scopes.forEach(e=>e.stop(!0)),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t){t=t||s,t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&m)>0,u=e=>(e.n&m)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const s=t[i];l(s)&&!u(s)?s.delete(e):t[n++]=s,s.w&=~m,s.n&=~m}t.length=n}},f=new WeakMap;let p=0,m=1;const g=30,v=[];let y;const b=Symbol(""),_=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!v.includes(this))try{return v.push(y=this),C(),m=1<<++p,p<=g?h(this):k(this),this.fn()}finally{p<=g&&d(this),m=1<<--p,O(),v.pop();const e=v.length;y=e>0?v[e-1]:void 0}}stop(){this.active&&(k(this),this.onStop&&this.onStop(),this.active=!1)}}function k(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let E=!0;const I=[];function T(){I.push(E),E=!1}function C(){I.push(E),E=!0}function O(){const e=I.pop();E=void 0===e||e}function S(e,t,n){if(!A())return;let i=f.get(e);i||f.set(e,i=new Map);let s=i.get(n);s||i.set(n,s=c());const r=void 0;D(s,r)}function A(){return E&&void 0!==y}function D(e,t){let n=!1;p<=g?u(e)||(e.n|=m,n=!l(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function x(e,t,n,s,r,o){const a=f.get(e);if(!a)return;let l=[];if("clear"===t)l=[...a.values()];else if("length"===n&&Object(i["o"])(e))a.forEach((e,t)=>{("length"===t||t>=s)&&l.push(e)});else switch(void 0!==n&&l.push(a.get(n)),t){case"add":Object(i["o"])(e)?Object(i["s"])(n)&&l.push(a.get("length")):(l.push(a.get(b)),Object(i["t"])(e)&&l.push(a.get(_)));break;case"delete":Object(i["o"])(e)||(l.push(a.get(b)),Object(i["t"])(e)&&l.push(a.get(_)));break;case"set":Object(i["t"])(e)&&l.push(a.get(b));break}if(1===l.length)l[0]&&M(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);M(c(e))}}function M(e,t){for(const n of Object(i["o"])(e)?e:[...e])(n!==y||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const L=Object(i["H"])("__proto__,__v_isRef,__isVue"),R=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(i["E"])),N=U(),P=U(!1,!0),j=U(!0),B=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=De(this);for(let t=0,s=this.length;t<s;t++)S(n,"get",t+"");const i=n[t](...e);return-1===i||!1===i?n[t](...e.map(De)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){T();const n=De(this)[t].apply(this,e);return O(),n}}),e}function U(e=!1,t=!1){return function(n,s,r){if("__v_isReactive"===s)return!e;if("__v_isReadonly"===s)return e;if("__v_raw"===s&&r===(e?t?_e:be:t?ye:ve).get(n))return n;const o=Object(i["o"])(n);if(!e&&o&&Object(i["k"])(B,s))return Reflect.get(B,s,r);const a=Reflect.get(n,s,r);if(Object(i["E"])(s)?R.has(s):L(s))return a;if(e||S(n,"get",s),t)return a;if(Pe(a)){const e=!o||!Object(i["s"])(s);return e?a.value:a}return Object(i["v"])(a)?e?Te(a):Ee(a):a}}const $=q(),V=q(!0);function q(e=!1){return function(t,n,s,r){let o=t[n];if(!e&&!Se(s)&&(s=De(s),o=De(o),!Object(i["o"])(t)&&Pe(o)&&!Pe(s)))return o.value=s,!0;const a=Object(i["o"])(t)&&Object(i["s"])(n)?Number(n)<t.length:Object(i["k"])(t,n),c=Reflect.set(t,n,s,r);return t===De(r)&&(a?Object(i["j"])(s,o)&&x(t,"set",n,s,o):x(t,"add",n,s)),c}}function H(e,t){const n=Object(i["k"])(e,t),s=e[t],r=Reflect.deleteProperty(e,t);return r&&n&&x(e,"delete",t,void 0,s),r}function W(e,t){const n=Reflect.has(e,t);return Object(i["E"])(t)&&R.has(t)||S(e,"has",t),n}function z(e){return S(e,"iterate",Object(i["o"])(e)?"length":b),Reflect.ownKeys(e)}const K={get:N,set:$,deleteProperty:H,has:W,ownKeys:z},G={get:j,set(e,t){return!0},deleteProperty(e,t){return!0}},Q=Object(i["h"])({},K,{get:P,set:V}),Y=e=>e,J=e=>Reflect.getPrototypeOf(e);function X(e,t,n=!1,i=!1){e=e["__v_raw"];const s=De(e),r=De(t);t!==r&&!n&&S(s,"get",t),!n&&S(s,"get",r);const{has:o}=J(s),a=i?Y:n?Le:Me;return o.call(s,t)?a(e.get(t)):o.call(s,r)?a(e.get(r)):void(e!==s&&e.get(t))}function Z(e,t=!1){const n=this["__v_raw"],i=De(n),s=De(e);return e!==s&&!t&&S(i,"has",e),!t&&S(i,"has",s),e===s?n.has(e):n.has(e)||n.has(s)}function ee(e,t=!1){return e=e["__v_raw"],!t&&S(De(e),"iterate",b),Reflect.get(e,"size",e)}function te(e){e=De(e);const t=De(this),n=J(t),i=n.has.call(t,e);return i||(t.add(e),x(t,"add",e,e)),this}function ne(e,t){t=De(t);const n=De(this),{has:s,get:r}=J(n);let o=s.call(n,e);o||(e=De(e),o=s.call(n,e));const a=r.call(n,e);return n.set(e,t),o?Object(i["j"])(t,a)&&x(n,"set",e,t,a):x(n,"add",e,t),this}function ie(e){const t=De(this),{has:n,get:i}=J(t);let s=n.call(t,e);s||(e=De(e),s=n.call(t,e));const r=i?i.call(t,e):void 0,o=t.delete(e);return s&&x(t,"delete",e,void 0,r),o}function se(){const e=De(this),t=0!==e.size,n=void 0,i=e.clear();return t&&x(e,"clear",void 0,void 0,n),i}function re(e,t){return function(n,i){const s=this,r=s["__v_raw"],o=De(r),a=t?Y:e?Le:Me;return!e&&S(o,"iterate",b),r.forEach((e,t)=>n.call(i,a(e),a(t),s))}}function oe(e,t,n){return function(...s){const r=this["__v_raw"],o=De(r),a=Object(i["t"])(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=r[e](...s),h=n?Y:t?Le:Me;return!t&&S(o,"iterate",l?_:b),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function ce(){const e={get(e){return X(this,e)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:ie,clear:se,forEach:re(!1,!1)},t={get(e){return X(this,e,!1,!0)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:ie,clear:se,forEach:re(!1,!0)},n={get(e){return X(this,e,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:re(!0,!1)},i={get(e){return X(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:re(!0,!0)},s=["keys","values","entries",Symbol.iterator];return s.forEach(s=>{e[s]=oe(s,!1,!1),n[s]=oe(s,!0,!1),t[s]=oe(s,!1,!0),i[s]=oe(s,!0,!0)}),[e,n,t,i]}const[le,ue,he,de]=ce();function fe(e,t){const n=t?e?de:he:e?ue:le;return(t,s,r)=>"__v_isReactive"===s?!e:"__v_isReadonly"===s?e:"__v_raw"===s?t:Reflect.get(Object(i["k"])(n,s)&&s in t?n:t,s,r)}const pe={get:fe(!1,!1)},me={get:fe(!1,!0)},ge={get:fe(!0,!1)};const ve=new WeakMap,ye=new WeakMap,be=new WeakMap,_e=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ke(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we(Object(i["O"])(e))}function Ee(e){return e&&e["__v_isReadonly"]?e:Ce(e,!1,K,pe,ve)}function Ie(e){return Ce(e,!1,Q,me,ye)}function Te(e){return Ce(e,!0,G,ge,be)}function Ce(e,t,n,s,r){if(!Object(i["v"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=r.get(e);if(o)return o;const a=ke(e);if(0===a)return e;const c=new Proxy(e,2===a?s:n);return r.set(e,c),c}function Oe(e){return Se(e)?Oe(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Se(e){return!(!e||!e["__v_isReadonly"])}function Ae(e){return Oe(e)||Se(e)}function De(e){const t=e&&e["__v_raw"];return t?De(t):e}function xe(e){return Object(i["g"])(e,"__v_skip",!0),e}const Me=e=>Object(i["v"])(e)?Ee(e):e,Le=e=>Object(i["v"])(e)?Te(e):e;function Re(e){A()&&(e=De(e),e.dep||(e.dep=c()),D(e.dep))}function Ne(e,t){e=De(e),e.dep&&M(e.dep)}function Pe(e){return Boolean(e&&!0===e.__v_isRef)}function je(e){return Fe(e,!1)}function Be(e){return Fe(e,!0)}function Fe(e,t){return Pe(e)?e:new Ue(e,t)}class Ue{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:De(e),this._value=t?e:Me(e)}get value(){return Re(this),this._value}set value(e){e=this._shallow?e:De(e),Object(i["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Me(e),Ne(this,e))}}function $e(e){return Pe(e)?e.value:e}const Ve={get:(e,t,n)=>$e(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return Pe(s)&&!Pe(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function qe(e){return Oe(e)?e:new Proxy(e,Ve)}class He{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new w(e,()=>{this._dirty||(this._dirty=!0,Ne(this))}),this["__v_isReadonly"]=n}get value(){const e=De(this);return Re(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function We(e,t){let n,s;const r=Object(i["p"])(e);r?(n=e,s=i["d"]):(n=e.get,s=e.set);const o=new He(n,s,r||!s);return o}Promise.resolve();new Set;new Map;function ze(e,t,...n){const s=e.vnode.props||i["b"];let r=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in s){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:o}=s[e]||i["b"];o?r=n.map(e=>e.trim()):t&&(r=n.map(i["N"]))}let c;let l=s[c=Object(i["M"])(t)]||s[c=Object(i["M"])(Object(i["e"])(t))];!l&&o&&(l=s[c=Object(i["M"])(Object(i["l"])(t))]),l&&Ui(l,e,6,r);const u=s[c+"Once"];if(u){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,Ui(u,e,6,r)}}function Ke(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(void 0!==r)return r;const o=e.emits;let a={},c=!1;if(!Object(i["p"])(e)){const s=e=>{const n=Ke(e,t,!0);n&&(c=!0,Object(i["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return o||c?(Object(i["o"])(o)?o.forEach(e=>a[e]=null):Object(i["h"])(a,o),s.set(e,a),a):(s.set(e,null),null)}function Ge(e,t){return!(!e||!Object(i["w"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(i["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(i["k"])(e,Object(i["l"])(t))||Object(i["k"])(e,t))}let Qe=null,Ye=null;function Je(e){const t=Qe;return Qe=e,Ye=e&&e.type.__scopeId||null,t}function Xe(e){Ye=e}function Ze(){Ye=null}function et(e,t=Qe,n){if(!t)return e;if(e._n)return e;const i=(...n)=>{i._d&&Gn(-1);const s=Je(t),r=e(...n);return Je(s),i._d&&Gn(1),r};return i._n=!0,i._c=!0,i._d=!0,i}function tt(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:o,propsOptions:[a],slots:c,attrs:l,emit:u,render:h,renderCache:d,data:f,setupState:p,ctx:m,inheritAttrs:g}=e;let v,y;const b=Je(e);try{if(4&n.shapeFlag){const e=r||s;v=ui(h.call(e,e,d,o,p,f,m)),y=l}else{const e=t;0,v=ui(e.length>1?e(o,{attrs:l,slots:c,emit:u}):e(o,null)),y=t.props?l:nt(l)}}catch(w){qn.length=0,$i(w,e,1),v=si($n)}let _=v;if(y&&!1!==g){const e=Object.keys(y),{shapeFlag:t}=_;e.length&&7&t&&(a&&e.some(i["u"])&&(y=it(y,a)),_=ai(_,y))}return n.dirs&&(_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),v=_,Je(b),v}const nt=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(i["w"])(n))&&((t||(t={}))[n]=e[n]);return t},it=(e,t)=>{const n={};for(const s in e)Object(i["u"])(s)&&s.slice(9)in t||(n[s]=e[s]);return n};function st(e,t,n){const{props:i,children:s,component:r}=e,{props:o,children:a,patchFlag:c}=t,l=r.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||i!==o&&(i?!o||rt(i,o,l):!!o);if(1024&c)return!0;if(16&c)return i?rt(i,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==i[n]&&!Ge(l,n))return!0}}return!1}function rt(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==e[r]&&!Ge(n,r))return!0}return!1}function ot({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const at=e=>e.__isSuspense;function ct(e,t){t&&t.pendingBranch?Object(i["o"])(e)?t.effects.push(...e):t.effects.push(e):ls(e)}function lt(e,t){if(ki){let n=ki.provides;const i=ki.parent&&ki.parent.provides;i===n&&(n=ki.provides=Object.create(i)),n[e]=t}else 0}function ut(e,t,n=!1){const s=ki||Qe;if(s){const r=null==s.parent?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&Object(i["p"])(t)?t.call(s.proxy):t}else 0}function ht(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rt(()=>{e.isMounted=!0}),jt(()=>{e.isUnmounting=!0}),e}const dt=[Function,Array],ft={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dt,onEnter:dt,onAfterEnter:dt,onEnterCancelled:dt,onBeforeLeave:dt,onLeave:dt,onAfterLeave:dt,onLeaveCancelled:dt,onBeforeAppear:dt,onAppear:dt,onAfterAppear:dt,onAppearCancelled:dt},setup(e,{slots:t}){const n=Ei(),i=ht();let s;return()=>{const r=t.default&&_t(t.default(),!0);if(!r||!r.length)return;const o=De(e),{mode:a}=o;const c=r[0];if(i.isLeaving)return vt(c);const l=yt(c);if(!l)return vt(c);const u=gt(l,o,i,n);bt(l,u);const h=n.subTree,d=h&&yt(h);let f=!1;const{getTransitionKey:p}=l.type;if(p){const e=p();void 0===s?s=e:e!==s&&(s=e,f=!0)}if(d&&d.type!==$n&&(!Zn(l,d)||f)){const e=gt(d,o,i,n);if(bt(d,e),"out-in"===a)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},vt(c);"in-out"===a&&l.type!==$n&&(e.delayLeave=(e,t,n)=>{const s=mt(i,d);s[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return c}}},pt=ft;function mt(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function gt(e,t,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:m,onAppear:g,onAfterAppear:v,onAppearCancelled:y}=t,b=String(e.key),_=mt(n,e),w=(e,t)=>{e&&Ui(e,i,9,t)},k={mode:r,persisted:o,beforeEnter(t){let i=a;if(!n.isMounted){if(!s)return;i=m||a}t._leaveCb&&t._leaveCb(!0);const r=_[b];r&&Zn(e,r)&&r.el._leaveCb&&r.el._leaveCb(),w(i,[t])},enter(e){let t=c,i=l,r=u;if(!n.isMounted){if(!s)return;t=g||c,i=v||l,r=y||u}let o=!1;const a=e._enterCb=t=>{o||(o=!0,w(t?r:i,[e]),k.delayedLeave&&k.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,i){const s=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return i();w(h,[t]);let r=!1;const o=t._leaveCb=n=>{r||(r=!0,i(),w(n?p:f,[t]),t._leaveCb=void 0,_[s]===e&&delete _[s])};_[s]=e,d?(d(t,o),d.length<=1&&o()):o()},clone(e){return gt(e,t,n,i)}};return k}function vt(e){if(Et(e))return e=ai(e),e.children=null,e}function yt(e){return Et(e)?e.children?e.children[0]:void 0:e}function bt(e,t){6&e.shapeFlag&&e.component?bt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function _t(e,t=!1){let n=[],i=0;for(let s=0;s<e.length;s++){const r=e[s];r.type===Fn?(128&r.patchFlag&&i++,n=n.concat(_t(r.children,t))):(t||r.type!==$n)&&n.push(r)}if(i>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function wt(e){return Object(i["p"])(e)?{setup:e,name:e.name}:e}const kt=e=>!!e.type.__asyncLoader;const Et=e=>e.type.__isKeepAlive;RegExp,RegExp;function It(e,t){return Object(i["o"])(e)?e.some(e=>It(e,t)):Object(i["D"])(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function Tt(e,t){Ot(e,"a",t)}function Ct(e,t){Ot(e,"da",t)}function Ot(e,t,n=ki){const i=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(xt(t,i,n),n){let e=n.parent;while(e&&e.parent)Et(e.parent.vnode)&&St(i,t,n,e),e=e.parent}}function St(e,t,n,s){const r=xt(t,e,s,!0);Bt(()=>{Object(i["K"])(s[t],r)},n)}function At(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Dt(e){return 128&e.shapeFlag?e.ssContent:e}function xt(e,t,n=ki,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;T(),Ii(n);const s=Ui(t,n,e,i);return Ti(),O(),s});return i?s.unshift(r):s.push(r),r}}const Mt=e=>(t,n=ki)=>(!Ai||"sp"===e)&&xt(e,t,n),Lt=Mt("bm"),Rt=Mt("m"),Nt=Mt("bu"),Pt=Mt("u"),jt=Mt("bum"),Bt=Mt("um"),Ft=Mt("sp"),Ut=Mt("rtg"),$t=Mt("rtc");function Vt(e,t=ki){xt("ec",e,t)}let qt=!0;function Ht(e){const t=Gt(e),n=e.proxy,s=e.ctx;qt=!1,t.beforeCreate&&zt(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:a,watch:c,provide:l,inject:u,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:g,deactivated:v,beforeDestroy:y,beforeUnmount:b,destroyed:_,unmounted:w,render:k,renderTracked:E,renderTriggered:I,errorCaptured:T,serverPrefetch:C,expose:O,inheritAttrs:S,components:A,directives:D,filters:x}=t,M=null;if(u&&Wt(u,s,M,e.appContext.config.unwrapInjectedRef),a)for(const R in a){const e=a[R];Object(i["p"])(e)&&(s[R]=e.bind(n))}if(r){0;const t=r.call(n,n);0,Object(i["v"])(t)&&(e.data=Ee(t))}if(qt=!0,o)for(const R in o){const e=o[R],t=Object(i["p"])(e)?e.bind(n,n):Object(i["p"])(e.get)?e.get.bind(n,n):i["d"];0;const r=!Object(i["p"])(e)&&Object(i["p"])(e.set)?e.set.bind(n):i["d"],a=We({get:t,set:r});Object.defineProperty(s,R,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const i in c)Kt(c[i],s,n,i);if(l){const e=Object(i["p"])(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{lt(t,e[t])})}function L(e,t){Object(i["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(h&&zt(h,e,"c"),L(Lt,d),L(Rt,f),L(Nt,p),L(Pt,m),L(Tt,g),L(Ct,v),L(Vt,T),L($t,E),L(Ut,I),L(jt,b),L(Bt,w),L(Ft,C),Object(i["o"])(O))if(O.length){const t=e.exposed||(e.exposed={});O.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});k&&e.render===i["d"]&&(e.render=k),null!=S&&(e.inheritAttrs=S),A&&(e.components=A),D&&(e.directives=D)}function Wt(e,t,n=i["d"],s=!1){Object(i["o"])(e)&&(e=Zt(e));for(const r in e){const n=e[r];let o;o=Object(i["v"])(n)?"default"in n?ut(n.from||r,n.default,!0):ut(n.from||r):ut(n),Pe(o)&&s?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[r]=o}}function zt(e,t,n){Ui(Object(i["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Kt(e,t,n,s){const r=s.includes(".")?ys(n,s):()=>n[s];if(Object(i["D"])(e)){const n=t[e];Object(i["p"])(n)&&ms(r,n)}else if(Object(i["p"])(e))ms(r,e.bind(n));else if(Object(i["v"])(e))if(Object(i["o"])(e))e.forEach(e=>Kt(e,t,n,s));else{const s=Object(i["p"])(e.handler)?e.handler.bind(n):t[e.handler];Object(i["p"])(s)&&ms(r,s,e)}else 0}function Gt(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let c;return a?c=a:s.length||n||i?(c={},s.length&&s.forEach(e=>Qt(c,e,o,!0)),Qt(c,t,o)):c=t,r.set(t,c),c}function Qt(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&Qt(e,r,n,!0),s&&s.forEach(t=>Qt(e,t,n,!0));for(const o in t)if(i&&"expose"===o);else{const i=Yt[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const Yt={data:Jt,props:tn,emits:tn,methods:tn,computed:tn,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:tn,directives:tn,watch:nn,provide:Jt,inject:Xt};function Jt(e,t){return t?e?function(){return Object(i["h"])(Object(i["p"])(e)?e.call(this,this):e,Object(i["p"])(t)?t.call(this,this):t)}:t:e}function Xt(e,t){return tn(Zt(e),Zt(t))}function Zt(e){if(Object(i["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function en(e,t){return e?[...new Set([].concat(e,t))]:t}function tn(e,t){return e?Object(i["h"])(Object(i["h"])(Object.create(null),e),t):t}function nn(e,t){if(!e)return t;if(!t)return e;const n=Object(i["h"])(Object.create(null),e);for(const i in t)n[i]=en(e[i],t[i]);return n}function sn(e,t,n,s=!1){const r={},o={};Object(i["g"])(o,ei,1),e.propsDefaults=Object.create(null),on(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=s?r:Ie(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function rn(e,t,n,s){const{props:r,attrs:o,vnode:{patchFlag:a}}=e,c=De(r),[l]=e.propsOptions;let u=!1;if(!(s||a>0)||16&a){let s;on(e,t,r,o)&&(u=!0);for(const o in c)t&&(Object(i["k"])(t,o)||(s=Object(i["l"])(o))!==o&&Object(i["k"])(t,s))||(l?!n||void 0===n[o]&&void 0===n[s]||(r[o]=an(l,c,o,void 0,e,!0)):delete r[o]);if(o!==c)for(const e in o)t&&Object(i["k"])(t,e)||(delete o[e],u=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let s=0;s<n.length;s++){let a=n[s];const h=t[a];if(l)if(Object(i["k"])(o,a))h!==o[a]&&(o[a]=h,u=!0);else{const t=Object(i["e"])(a);r[t]=an(l,c,t,h,e,!1)}else h!==o[a]&&(o[a]=h,u=!0)}}u&&x(e,"set","$attrs")}function on(e,t,n,s){const[r,o]=e.propsOptions;let a,c=!1;if(t)for(let l in t){if(Object(i["z"])(l))continue;const u=t[l];let h;r&&Object(i["k"])(r,h=Object(i["e"])(l))?o&&o.includes(h)?(a||(a={}))[h]=u:n[h]=u:Ge(e.emitsOptions,l)||l in s&&u===s[l]||(s[l]=u,c=!0)}if(o){const t=De(n),s=a||i["b"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=an(r,t,c,s[c],e,!Object(i["k"])(s,c))}}return c}function an(e,t,n,s,r,o){const a=e[n];if(null!=a){const e=Object(i["k"])(a,"default");if(e&&void 0===s){const e=a.default;if(a.type!==Function&&Object(i["p"])(e)){const{propsDefaults:i}=r;n in i?s=i[n]:(Ii(r),s=i[n]=e.call(null,t),Ti())}else s=e}a[0]&&(o&&!e?s=!1:!a[1]||""!==s&&s!==Object(i["l"])(n)||(s=!0))}return s}function cn(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const o=e.props,a={},c=[];let l=!1;if(!Object(i["p"])(e)){const s=e=>{l=!0;const[n,s]=cn(e,t,!0);Object(i["h"])(a,n),s&&c.push(...s)};!n&&t.mixins.length&&t.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}if(!o&&!l)return s.set(e,i["a"]),i["a"];if(Object(i["o"])(o))for(let h=0;h<o.length;h++){0;const e=Object(i["e"])(o[h]);ln(e)&&(a[e]=i["b"])}else if(o){0;for(const e in o){const t=Object(i["e"])(e);if(ln(t)){const n=o[e],s=a[t]=Object(i["o"])(n)||Object(i["p"])(n)?{type:n}:n;if(s){const e=dn(Boolean,s.type),n=dn(String,s.type);s[0]=e>-1,s[1]=n<0||e<n,(e>-1||Object(i["k"])(s,"default"))&&c.push(t)}}}}const u=[a,c];return s.set(e,u),u}function ln(e){return"$"!==e[0]}function un(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function hn(e,t){return un(e)===un(t)}function dn(e,t){return Object(i["o"])(t)?t.findIndex(t=>hn(t,e)):Object(i["p"])(t)&&hn(t,e)?0:-1}const fn=e=>"_"===e[0]||"$stable"===e,pn=e=>Object(i["o"])(e)?e.map(ui):[ui(e)],mn=(e,t,n)=>{const i=et((...e)=>pn(t(...e)),n);return i._c=!1,i},gn=(e,t,n)=>{const s=e._ctx;for(const r in e){if(fn(r))continue;const n=e[r];if(Object(i["p"])(n))t[r]=mn(r,n,s);else if(null!=n){0;const e=pn(n);t[r]=()=>e}}},vn=(e,t)=>{const n=pn(t);e.slots.default=()=>n},yn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=De(t),Object(i["g"])(t,"_",n)):gn(t,e.slots={})}else e.slots={},t&&vn(e,t);Object(i["g"])(e.slots,ei,1)},bn=(e,t,n)=>{const{vnode:s,slots:r}=e;let o=!0,a=i["b"];if(32&s.shapeFlag){const e=t._;e?n&&1===e?o=!1:(Object(i["h"])(r,t),n||1!==e||delete r._):(o=!t.$stable,gn(t,r)),a=t}else t&&(vn(e,t),a={default:1});if(o)for(const i in r)fn(i)||i in a||delete r[i]};function _n(e,t){const n=Qe;if(null===n)return e;const s=n.proxy,r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i["b"]]=t[o];Object(i["p"])(e)&&(e={mounted:e,updated:e}),e.deep&&bs(n),r.push({dir:e,instance:s,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function wn(e,t,n,i){const s=e.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(T(),Ui(c,n,8,[e.el,a,e,t]),O())}}function kn(){return{app:null,config:{isNativeTag:i["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let En=0;function In(e,t){return function(n,s=null){null==s||Object(i["v"])(s)||(s=null);const r=kn(),o=new Set;let a=!1;const c=r.app={_uid:En++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:ws,get config(){return r.config},set config(e){0},use(e,...t){return o.has(e)||(e&&Object(i["p"])(e.install)?(o.add(e),e.install(c,...t)):Object(i["p"])(e)&&(o.add(e),e(c,...t))),c},mixin(e){return r.mixins.includes(e)||r.mixins.push(e),c},component(e,t){return t?(r.components[e]=t,c):r.components[e]},directive(e,t){return t?(r.directives[e]=t,c):r.directives[e]},mount(i,o,l){if(!a){const u=si(n,s);return u.appContext=r,o&&t?t(u,i):e(u,i,l),a=!0,c._container=i,i.__vue_app__=c,Pi(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return r.provides[e]=t,c}};return c}}function Tn(e,t,n,s,r=!1){if(Object(i["o"])(e))return void e.forEach((e,o)=>Tn(e,t&&(Object(i["o"])(t)?t[o]:t),n,s,r));if(kt(s)&&!r)return;const o=4&s.shapeFlag?Pi(s.component)||s.component.proxy:s.el,a=r?null:o,{i:c,r:l}=e;const u=t&&t.r,h=c.refs===i["b"]?c.refs={}:c.refs,d=c.setupState;if(null!=u&&u!==l&&(Object(i["D"])(u)?(h[u]=null,Object(i["k"])(d,u)&&(d[u]=null)):Pe(u)&&(u.value=null)),Object(i["p"])(l))Fi(l,c,12,[a,h]);else{const t=Object(i["D"])(l),s=Pe(l);if(t||s){const s=()=>{if(e.f){const n=t?h[l]:l.value;r?Object(i["o"])(n)&&Object(i["K"])(n,o):Object(i["o"])(n)?n.includes(o)||n.push(o):t?h[l]=[o]:(l.value=[o],e.k&&(h[e.k]=l.value))}else t?(h[l]=a,Object(i["k"])(d,l)&&(d[l]=a)):Pe(l)&&(l.value=a,e.k&&(h[e.k]=a))};a?(s.id=-1,On(s,n)):s()}else 0}}function Cn(){}const On=ct;function Sn(e){return An(e)}function An(e,t){Cn();const n=Object(i["i"])();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:a,createText:c,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=i["d"],cloneNode:m,insertStaticContent:g}=e,v=(e,t,n,i=null,s=null,r=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Zn(e,t)&&(i=G(e),q(e,s,r,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Un:y(e,t,n,i);break;case $n:b(e,t,n,i);break;case Vn:null==e&&_(t,n,i,o);break;case Fn:L(e,t,n,i,s,r,o,a,c);break;default:1&h?I(e,t,n,i,s,r,o,a,c):6&h?R(e,t,n,i,s,r,o,a,c):(64&h||128&h)&&l.process(e,t,n,i,s,r,o,a,c,Y)}null!=u&&s&&Tn(u,e&&e.ref,r,t||e,!t)},y=(e,t,n,i)=>{if(null==e)s(t.el=c(t.children),n,i);else{const n=t.el=e.el;t.children!==e.children&&u(n,t.children)}},b=(e,t,n,i)=>{null==e?s(t.el=l(t.children||""),n,i):t.el=e.el},_=(e,t,n,i)=>{[e.el,e.anchor]=g(e.children,t,n,i)},k=({el:e,anchor:t},n,i)=>{let r;while(e&&e!==t)r=f(e),s(e,n,i),e=r;s(t,n,i)},E=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),r(e),e=n;r(t)},I=(e,t,n,i,s,r,o,a,c)=>{o=o||"svg"===t.type,null==e?C(t,n,i,s,r,o,a,c):D(e,t,s,r,o,a,c)},C=(e,t,n,r,c,l,u,d)=>{let f,p;const{type:g,props:v,shapeFlag:y,transition:b,patchFlag:_,dirs:w}=e;if(e.el&&void 0!==m&&-1===_)f=e.el=m(e.el);else{if(f=e.el=a(e.type,l,v&&v.is,v),8&y?h(f,e.children):16&y&&A(e.children,f,null,r,c,l&&"foreignObject"!==g,u,d),w&&wn(e,null,r,"created"),v){for(const t in v)"value"===t||Object(i["z"])(t)||o(f,t,null,v[t],l,e.children,r,c,K);"value"in v&&o(f,"value",null,v.value),(p=v.onVnodeBeforeMount)&&pi(p,r,e)}S(f,e,e.scopeId,u,r)}w&&wn(e,null,r,"beforeMount");const k=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;k&&b.beforeEnter(f),s(f,t,n),((p=v&&v.onVnodeMounted)||k||w)&&On(()=>{p&&pi(p,r,e),k&&b.enter(f),w&&wn(e,null,r,"mounted")},c)},S=(e,t,n,i,s)=>{if(n&&p(e,n),i)for(let r=0;r<i.length;r++)p(e,i[r]);if(s){let n=s.subTree;if(t===n){const t=s.vnode;S(e,t,t.scopeId,t.slotScopeIds,s.parent)}}},A=(e,t,n,i,s,r,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?hi(e[l]):ui(e[l]);v(null,c,t,n,i,s,r,o,a)}},D=(e,t,n,s,r,a,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||i["b"],m=t.props||i["b"];let g;n&&Dn(n,!1),(g=m.onVnodeBeforeUpdate)&&pi(g,n,t,e),f&&wn(t,e,n,"beforeUpdate"),n&&Dn(n,!0);const v=r&&"foreignObject"!==t.type;if(d?x(e.dynamicChildren,d,l,n,s,v,a):c||F(e,t,l,null,n,s,v,a,!1),u>0){if(16&u)M(l,t,p,m,n,s,r);else if(2&u&&p.class!==m.class&&o(l,"class",null,m.class,r),4&u&&o(l,"style",p.style,m.style,r),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const a=i[t],c=p[a],u=m[a];u===c&&"value"!==a||o(l,a,c,u,r,e.children,n,s,K)}}1&u&&e.children!==t.children&&h(l,t.children)}else c||null!=d||M(l,t,p,m,n,s,r);((g=m.onVnodeUpdated)||f)&&On(()=>{g&&pi(g,n,t,e),f&&wn(t,e,n,"updated")},s)},x=(e,t,n,i,s,r,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Fn||!Zn(c,l)||70&c.shapeFlag)?d(c.el):n;v(c,l,u,null,i,s,r,o,!0)}},M=(e,t,n,s,r,a,c)=>{if(n!==s){for(const l in s){if(Object(i["z"])(l))continue;const u=s[l],h=n[l];u!==h&&"value"!==l&&o(e,l,h,u,c,t.children,r,a,K)}if(n!==i["b"])for(const l in n)Object(i["z"])(l)||l in s||o(e,l,n[l],null,c,t.children,r,a,K);"value"in s&&o(e,"value",n.value,s.value)}},L=(e,t,n,i,r,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(s(h,n,i),s(d,n,i),A(t.children,n,d,r,o,a,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(x(e.dynamicChildren,p,n,r,o,a,l),(null!=t.key||r&&t===r.subTree)&&xn(e,t,!0)):F(e,t,n,d,r,o,a,l,u)},R=(e,t,n,i,s,r,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?s.ctx.activate(t,n,i,o,c):N(t,n,i,s,r,o,c):P(e,t,c)},N=(e,t,n,i,s,r,o)=>{const a=e.component=wi(e,i,s);if(Et(e)&&(a.ctx.renderer=Y),Di(a),a.asyncDep){if(s&&s.registerDep(a,j),!e.el){const e=a.subTree=si($n);b(null,e,t,n)}}else j(a,e,t,n,s,r,o)},P=(e,t,n)=>{const i=t.component=e.component;if(st(e,t,n)){if(i.asyncDep&&!i.asyncResolved)return void B(i,t,n);i.next=t,os(i.update),i.update()}else t.component=e.component,t.el=e.el,i.vnode=t},j=(e,t,n,s,r,o,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:s,u:c,parent:l,vnode:u}=e,h=n;0,Dn(e,!1),n?(n.el=u.el,B(e,n,a)):n=u,s&&Object(i["n"])(s),(t=n.props&&n.props.onVnodeBeforeUpdate)&&pi(t,l,n,u),Dn(e,!0);const f=tt(e);0;const p=e.subTree;e.subTree=f,v(p,f,d(p.el),G(p),e,r,o),n.el=f.el,null===h&&ot(e,f.el),c&&On(c,r),(t=n.props&&n.props.onVnodeUpdated)&&On(()=>pi(t,l,n,u),r)}else{let a;const{el:c,props:l}=t,{bm:u,m:h,parent:d}=e,f=kt(t);if(Dn(e,!1),u&&Object(i["n"])(u),!f&&(a=l&&l.onVnodeBeforeMount)&&pi(a,d,t),Dn(e,!0),c&&X){const n=()=>{e.subTree=tt(e),X(c,e.subTree,e,r,null)};f?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const i=e.subTree=tt(e);0,v(null,i,n,s,e,r,o),t.el=i.el}if(h&&On(h,r),!f&&(a=l&&l.onVnodeMounted)){const e=t;On(()=>pi(a,d,e),r)}256&t.shapeFlag&&e.a&&On(e.a,r),e.isMounted=!0,t=n=s=null}},l=e.effect=new w(c,()=>ss(e.update),e.scope),u=e.update=l.run.bind(l);u.id=e.uid,Dn(e,!0),u()},B=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,rn(e,t.props,i,n),bn(e,t.children,n),T(),us(void 0,e.update),O()},F=(e,t,n,i,s,r,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void $(l,d,n,i,s,r,o,a,c);if(256&f)return void U(l,d,n,i,s,r,o,a,c)}8&p?(16&u&&K(l,s,r),d!==l&&h(n,d)):16&u?16&p?$(l,d,n,i,s,r,o,a,c):K(l,s,r,!0):(8&u&&h(n,""),16&p&&A(d,n,i,s,r,o,a,c))},U=(e,t,n,s,r,o,a,c,l)=>{e=e||i["a"],t=t||i["a"];const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const i=t[f]=l?hi(t[f]):ui(t[f]);v(e[f],i,n,null,r,o,a,c,l)}u>h?K(e,r,o,!0,!1,d):A(t,n,s,r,o,a,c,l,d)},$=(e,t,n,s,r,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const i=e[u],s=t[u]=l?hi(t[u]):ui(t[u]);if(!Zn(i,s))break;v(i,s,n,null,r,o,a,c,l),u++}while(u<=d&&u<=f){const i=e[d],s=t[f]=l?hi(t[f]):ui(t[f]);if(!Zn(i,s))break;v(i,s,n,null,r,o,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,i=e<h?t[e].el:s;while(u<=f)v(null,t[u]=l?hi(t[u]):ui(t[u]),n,i,r,o,a,c,l),u++}}else if(u>f)while(u<=d)q(e[u],r,o,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=f;u++){const e=t[u]=l?hi(t[u]):ui(t[u]);null!=e.key&&g.set(e.key,u)}let y,b=0;const _=f-m+1;let w=!1,k=0;const E=new Array(_);for(u=0;u<_;u++)E[u]=0;for(u=p;u<=d;u++){const i=e[u];if(b>=_){q(i,r,o,!0);continue}let s;if(null!=i.key)s=g.get(i.key);else for(y=m;y<=f;y++)if(0===E[y-m]&&Zn(i,t[y])){s=y;break}void 0===s?q(i,r,o,!0):(E[s-m]=u+1,s>=k?k=s:w=!0,v(i,t[s],n,null,r,o,a,c,l),b++)}const I=w?Mn(E):i["a"];for(y=I.length-1,u=_-1;u>=0;u--){const e=m+u,i=t[e],d=e+1<h?t[e+1].el:s;0===E[u]?v(null,i,n,d,r,o,a,c,l):w&&(y<0||u!==I[y]?V(i,n,d,2):y--)}}},V=(e,t,n,i,r=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void V(e.component.subTree,t,n,i);if(128&u)return void e.suspense.move(t,n,i);if(64&u)return void a.move(e,t,n,Y);if(a===Fn){s(o,t,n);for(let e=0;e<l.length;e++)V(l[e],t,n,i);return void s(e.anchor,t,n)}if(a===Vn)return void k(e,t,n);const h=2!==i&&1&u&&c;if(h)if(0===i)c.beforeEnter(o),s(o,t,n),On(()=>c.enter(o),r);else{const{leave:e,delayLeave:i,afterLeave:r}=c,a=()=>s(o,t,n),l=()=>{e(o,()=>{a(),r&&r()})};i?i(o,a,l):l()}else s(o,t,n)},q=(e,t,n,i=!1,s=!1)=>{const{type:r,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Tn(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!kt(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&pi(m,t,e),6&u)z(e.component,n,i);else{if(128&u)return void e.suspense.unmount(n,i);f&&wn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,s,Y,i):l&&(r!==Fn||h>0&&64&h)?K(l,t,n,!1,!0):(r===Fn&&384&h||!s&&16&u)&&K(c,t,n),i&&H(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&On(()=>{m&&pi(m,t,e),f&&wn(e,null,t,"unmounted")},n)},H=e=>{const{type:t,el:n,anchor:i,transition:s}=e;if(t===Fn)return void W(n,i);if(t===Vn)return void E(e);const o=()=>{r(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:i}=s,r=()=>t(n,o);i?i(e.el,o,r):r()}else o()},W=(e,t)=>{let n;while(e!==t)n=f(e),r(e),e=n;r(t)},z=(e,t,n)=>{const{bum:s,scope:r,update:o,subTree:a,um:c}=e;s&&Object(i["n"])(s),r.stop(),o&&(o.active=!1,q(a,e,t,n)),c&&On(c,t),On(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},K=(e,t,n,i=!1,s=!1,r=0)=>{for(let o=r;o<e.length;o++)q(e[o],t,n,i,s)},G=e=>6&e.shapeFlag?G(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),Q=(e,t,n)=>{null==e?t._vnode&&q(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),hs(),t._vnode=e},Y={p:v,um:q,m:V,r:H,mt:N,mc:A,pc:F,pbc:x,n:G,o:e};let J,X;return t&&([J,X]=t(Y)),{render:Q,hydrate:J,createApp:In(Q,J)}}function Dn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function xn(e,t,n=!1){const s=e.children,r=t.children;if(Object(i["o"])(s)&&Object(i["o"])(r))for(let i=0;i<s.length;i++){const e=s[i];let t=r[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=r[i]=hi(r[i]),t.el=e.el),n||xn(e,t))}}function Mn(e){const t=e.slice(),n=[0];let i,s,r,o,a;const c=e.length;for(i=0;i<c;i++){const c=e[i];if(0!==c){if(s=n[n.length-1],e[s]<c){t[i]=s,n.push(i);continue}r=0,o=n.length-1;while(r<o)a=r+o>>1,e[n[a]]<c?r=a+1:o=a;c<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}r=n.length,o=n[r-1];while(r-- >0)n[r]=o,o=t[o];return n}const Ln=e=>e.__isTeleport;const Rn="components";function Nn(e,t){return jn(Rn,e,!0,t)||e}const Pn=Symbol();function jn(e,t,n=!0,s=!1){const r=Qe||ki;if(r){const n=r.type;if(e===Rn){const e=ji(n);if(e&&(e===t||e===Object(i["e"])(t)||e===Object(i["f"])(Object(i["e"])(t))))return n}const o=Bn(r[e]||n[e],t)||Bn(r.appContext[e],t);return!o&&s?n:o}}function Bn(e,t){return e&&(e[t]||e[Object(i["e"])(t)]||e[Object(i["f"])(Object(i["e"])(t))])}const Fn=Symbol(void 0),Un=Symbol(void 0),$n=Symbol(void 0),Vn=Symbol(void 0),qn=[];let Hn=null;function Wn(e=!1){qn.push(Hn=e?null:[])}function zn(){qn.pop(),Hn=qn[qn.length-1]||null}let Kn=1;function Gn(e){Kn+=e}function Qn(e){return e.dynamicChildren=Kn>0?Hn||i["a"]:null,zn(),Kn>0&&Hn&&Hn.push(e),e}function Yn(e,t,n,i,s,r){return Qn(ii(e,t,n,i,s,r,!0))}function Jn(e,t,n,i,s){return Qn(si(e,t,n,i,s,!0))}function Xn(e){return!!e&&!0===e.__v_isVNode}function Zn(e,t){return e.type===t.type&&e.key===t.key}const ei="__vInternal",ti=({key:e})=>null!=e?e:null,ni=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(i["D"])(e)||Pe(e)||Object(i["p"])(e)?{i:Qe,r:e,k:t,f:!!n}:e:null;function ii(e,t=null,n=null,s=0,r=null,o=(e===Fn?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ti(t),ref:t&&ni(t),scopeId:Ye,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return c?(di(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=Object(i["D"])(n)?8:16),Kn>0&&!a&&Hn&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&Hn.push(l),l}const si=ri;function ri(e,t=null,n=null,s=0,r=null,o=!1){if(e&&e!==Pn||(e=$n),Xn(e)){const i=ai(e,t,!0);return n&&di(i,n),i}if(Bi(e)&&(e=e.__vccOpts),t){t=oi(t);let{class:e,style:n}=t;e&&!Object(i["D"])(e)&&(t.class=Object(i["I"])(e)),Object(i["v"])(n)&&(Ae(n)&&!Object(i["o"])(n)&&(n=Object(i["h"])({},n)),t.style=Object(i["J"])(n))}const a=Object(i["D"])(e)?1:at(e)?128:Ln(e)?64:Object(i["v"])(e)?4:Object(i["p"])(e)?2:0;return ii(e,t,n,s,r,a,o,!0)}function oi(e){return e?Ae(e)||ei in e?Object(i["h"])({},e):e:null}function ai(e,t,n=!1){const{props:s,ref:r,patchFlag:o,children:a}=e,c=t?fi(s||{},t):s,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&ti(c),ref:t&&t.ref?n&&r?Object(i["o"])(r)?r.concat(ni(t)):[r,ni(t)]:ni(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Fn?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ai(e.ssContent),ssFallback:e.ssFallback&&ai(e.ssFallback),el:e.el,anchor:e.anchor};return l}function ci(e=" ",t=0){return si(Un,null,e,t)}function li(e="",t=!1){return t?(Wn(),Jn($n,null,e)):si($n,null,e)}function ui(e){return null==e||"boolean"===typeof e?si($n):Object(i["o"])(e)?si(Fn,null,e.slice()):"object"===typeof e?hi(e):si(Un,null,String(e))}function hi(e){return null===e.el||e.memo?e:ai(e)}function di(e,t){let n=0;const{shapeFlag:s}=e;if(null==t)t=null;else if(Object(i["o"])(t))n=16;else if("object"===typeof t){if(65&s){const n=t.default;return void(n&&(n._c&&(n._d=!1),di(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||ei in t?3===i&&Qe&&(1===Qe.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Qe}}else Object(i["p"])(t)?(t={default:t,_ctx:Qe},n=32):(t=String(t),64&s?(n=16,t=[ci(t)]):n=8);e.children=t,e.shapeFlag|=n}function fi(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const e in s)if("class"===e)t.class!==s.class&&(t.class=Object(i["I"])([t.class,s.class]));else if("style"===e)t.style=Object(i["J"])([t.style,s.style]);else if(Object(i["w"])(e)){const n=t[e],r=s[e];n===r||Object(i["o"])(n)&&n.includes(r)||(t[e]=n?[].concat(n,r):r)}else""!==e&&(t[e]=s[e])}return t}function pi(e,t,n,i=null){Ui(e,t,7,[n,i])}function mi(e,t,n,s){let r;const o=n&&n[s];if(Object(i["o"])(e)||Object(i["D"])(e)){r=new Array(e.length);for(let n=0,i=e.length;n<i;n++)r[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,r=new Array(e);for(let n=0;n<e;n++)r[n]=t(n+1,n,void 0,o&&o[n])}else if(Object(i["v"])(e))if(e[Symbol.iterator])r=Array.from(e,(e,n)=>t(e,n,void 0,o&&o[n]));else{const n=Object.keys(e);r=new Array(n.length);for(let i=0,s=n.length;i<s;i++){const s=n[i];r[i]=t(e[s],s,i,o&&o[i])}}else r=[];return n&&(n[s]=r),r}const gi=e=>e?Ci(e)?Pi(e)||e.proxy:gi(e.parent):null,vi=Object(i["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>gi(e.parent),$root:e=>gi(e.root),$emit:e=>e.emit,$options:e=>Gt(e),$forceUpdate:e=>()=>ss(e.update),$nextTick:e=>ns.bind(e.proxy),$watch:e=>vs.bind(e)}),yi={get({_:e},t){const{ctx:n,setupState:s,data:r,props:o,accessCache:a,type:c,appContext:l}=e;let u;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(s!==i["b"]&&Object(i["k"])(s,t))return a[t]=1,s[t];if(r!==i["b"]&&Object(i["k"])(r,t))return a[t]=2,r[t];if((u=e.propsOptions[0])&&Object(i["k"])(u,t))return a[t]=3,o[t];if(n!==i["b"]&&Object(i["k"])(n,t))return a[t]=4,n[t];qt&&(a[t]=0)}}const h=vi[t];let d,f;return h?("$attrs"===t&&S(e,"get",t),h(e)):(d=c.__cssModules)&&(d=d[t])?d:n!==i["b"]&&Object(i["k"])(n,t)?(a[t]=4,n[t]):(f=l.config.globalProperties,Object(i["k"])(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:s,setupState:r,ctx:o}=e;if(r!==i["b"]&&Object(i["k"])(r,t))r[t]=n;else if(s!==i["b"]&&Object(i["k"])(s,t))s[t]=n;else if(Object(i["k"])(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:o}},a){let c;return!!n[a]||e!==i["b"]&&Object(i["k"])(e,a)||t!==i["b"]&&Object(i["k"])(t,a)||(c=o[0])&&Object(i["k"])(c,a)||Object(i["k"])(s,a)||Object(i["k"])(vi,a)||Object(i["k"])(r.config.globalProperties,a)}};const bi=kn();let _i=0;function wi(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||bi,a={uid:_i++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new o(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cn(s,r),emitsOptions:Ke(s,r),emit:null,emitted:null,propsDefaults:i["b"],inheritAttrs:s.inheritAttrs,ctx:i["b"],data:i["b"],props:i["b"],attrs:i["b"],slots:i["b"],refs:i["b"],setupState:i["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=ze.bind(null,a),e.ce&&e.ce(a),a}let ki=null;const Ei=()=>ki||Qe,Ii=e=>{ki=e,e.scope.on()},Ti=()=>{ki&&ki.scope.off(),ki=null};function Ci(e){return 4&e.vnode.shapeFlag}let Oi,Si,Ai=!1;function Di(e,t=!1){Ai=t;const{props:n,children:i}=e.vnode,s=Ci(e);sn(e,n,s,t),yn(e,i);const r=s?xi(e,t):void 0;return Ai=!1,r}function xi(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=xe(new Proxy(e.ctx,yi));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?Ni(e):null;Ii(e),T();const r=Fi(s,e,0,[e.props,n]);if(O(),Ti(),Object(i["y"])(r)){if(r.then(Ti,Ti),t)return r.then(n=>{Mi(e,n,t)}).catch(t=>{$i(t,e,0)});e.asyncDep=r}else Mi(e,r,t)}else Li(e,t)}function Mi(e,t,n){Object(i["p"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(i["v"])(t)&&(e.setupState=qe(t)),Li(e,n)}function Li(e,t,n){const s=e.type;if(!e.render){if(!t&&Oi&&!s.render){const t=s.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=Object(i["h"])(Object(i["h"])({isCustomElement:n,delimiters:o},r),a);s.render=Oi(t,c)}}e.render=s.render||i["d"],Si&&Si(e)}Ii(e),T(),Ht(e),O(),Ti()}function Ri(e){return new Proxy(e.attrs,{get(t,n){return S(e,"get","$attrs"),t[n]}})}function Ni(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Ri(e))},slots:e.slots,emit:e.emit,expose:t}}function Pi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(qe(xe(e.exposed)),{get(t,n){return n in t?t[n]:n in vi?vi[n](e):void 0}}))}function ji(e){return Object(i["p"])(e)&&e.displayName||e.name}function Bi(e){return Object(i["p"])(e)&&"__vccOpts"in e}function Fi(e,t,n,i){let s;try{s=i?e(...i):e()}catch(r){$i(r,t,n)}return s}function Ui(e,t,n,s){if(Object(i["p"])(e)){const r=Fi(e,t,n,s);return r&&Object(i["y"])(r)&&r.catch(e=>{$i(e,t,n)}),r}const r=[];for(let i=0;i<e.length;i++)r.push(Ui(e[i],t,n,s));return r}function $i(e,t,n,i=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,r=n;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,r))return;i=i.parent}const o=t.appContext.config.errorHandler;if(o)return void Fi(o,null,10,[e,s,r])}Vi(e,n,s,i)}function Vi(e,t,n,i=!0){console.error(e)}let qi=!1,Hi=!1;const Wi=[];let zi=0;const Ki=[];let Gi=null,Qi=0;const Yi=[];let Ji=null,Xi=0;const Zi=Promise.resolve();let es=null,ts=null;function ns(e){const t=es||Zi;return e?t.then(this?e.bind(this):e):t}function is(e){let t=zi+1,n=Wi.length;while(t<n){const i=t+n>>>1,s=ds(Wi[i]);s<e?t=i+1:n=i}return t}function ss(e){Wi.length&&Wi.includes(e,qi&&e.allowRecurse?zi+1:zi)||e===ts||(null==e.id?Wi.push(e):Wi.splice(is(e.id),0,e),rs())}function rs(){qi||Hi||(Hi=!0,es=Zi.then(fs))}function os(e){const t=Wi.indexOf(e);t>zi&&Wi.splice(t,1)}function as(e,t,n,s){Object(i["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?s+1:s)||n.push(e),rs()}function cs(e){as(e,Gi,Ki,Qi)}function ls(e){as(e,Ji,Yi,Xi)}function us(e,t=null){if(Ki.length){for(ts=t,Gi=[...new Set(Ki)],Ki.length=0,Qi=0;Qi<Gi.length;Qi++)Gi[Qi]();Gi=null,Qi=0,ts=null,us(e,t)}}function hs(e){if(Yi.length){const e=[...new Set(Yi)];if(Yi.length=0,Ji)return void Ji.push(...e);for(Ji=e,Ji.sort((e,t)=>ds(e)-ds(t)),Xi=0;Xi<Ji.length;Xi++)Ji[Xi]();Ji=null,Xi=0}}const ds=e=>null==e.id?1/0:e.id;function fs(e){Hi=!1,qi=!0,us(e),Wi.sort((e,t)=>ds(e)-ds(t));i["d"];try{for(zi=0;zi<Wi.length;zi++){const e=Wi[zi];e&&!1!==e.active&&Fi(e,null,14)}}finally{zi=0,Wi.length=0,hs(e),qi=!1,es=null,(Wi.length||Ki.length||Yi.length)&&fs(e)}}const ps={};function ms(e,t,n){return gs(e,t,n)}function gs(e,t,{immediate:n,deep:s,flush:r,onTrack:o,onTrigger:a}=i["b"]){const c=ki;let l,u,h=!1,d=!1;if(Pe(e)?(l=()=>e.value,h=!!e._shallow):Oe(e)?(l=()=>e,s=!0):Object(i["o"])(e)?(d=!0,h=e.some(Oe),l=()=>e.map(e=>Pe(e)?e.value:Oe(e)?bs(e):Object(i["p"])(e)?Fi(e,c,2):void 0)):l=Object(i["p"])(e)?t?()=>Fi(e,c,2):()=>{if(!c||!c.isUnmounted)return u&&u(),Ui(e,c,3,[f])}:i["d"],t&&s){const e=l;l=()=>bs(e())}let f=e=>{u=v.onStop=()=>{Fi(e,c,4)}};if(Ai)return f=i["d"],t?n&&Ui(t,c,3,[l(),d?[]:void 0,f]):l(),i["d"];let p=d?[]:ps;const m=()=>{if(v.active)if(t){const e=v.run();(s||h||(d?e.some((e,t)=>Object(i["j"])(e,p[t])):Object(i["j"])(e,p)))&&(u&&u(),Ui(t,c,3,[e,p===ps?void 0:p,f]),p=e)}else v.run()};let g;m.allowRecurse=!!t,g="sync"===r?m:"post"===r?()=>On(m,c&&c.suspense):()=>{!c||c.isMounted?cs(m):m()};const v=new w(l,g);return t?n?m():p=v.run():"post"===r?On(v.run.bind(v),c&&c.suspense):v.run(),()=>{v.stop(),c&&c.scope&&Object(i["K"])(c.scope.effects,v)}}function vs(e,t,n){const s=this.proxy,r=Object(i["D"])(e)?e.includes(".")?ys(s,e):()=>s[e]:e.bind(s,s);let o;Object(i["p"])(t)?o=t:(o=t.handler,n=t);const a=ki;Ii(this);const c=gs(r,o.bind(s),n);return a?Ii(a):Ti(),c}function ys(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function bs(e,t){if(!Object(i["v"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),Pe(e))bs(e.value,t);else if(Object(i["o"])(e))for(let n=0;n<e.length;n++)bs(e[n],t);else if(Object(i["B"])(e)||Object(i["t"])(e))e.forEach(e=>{bs(e,t)});else if(Object(i["x"])(e))for(const n in e)bs(e[n],t);return e}function _s(e,t,n){const s=arguments.length;return 2===s?Object(i["v"])(t)&&!Object(i["o"])(t)?Xn(t)?si(e,null,[t]):si(e,t):si(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):3===s&&Xn(n)&&(n=[n]),si(e,t,n))}Symbol("");const ws="3.2.26",ks="http://www.w3.org/2000/svg",Es="undefined"!==typeof document?document:null,Is=new Map,Ts={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t?Es.createElementNS(ks,e):Es.createElement(e,n?{is:n}:void 0);return"select"===e&&i&&null!=i.multiple&&s.setAttribute("multiple",i.multiple),s},createText:e=>Es.createTextNode(e),createComment:e=>Es.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Es.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,i){const s=n?n.previousSibling:t.lastChild;let r=Is.get(e);if(!r){const t=Es.createElement("template");if(t.innerHTML=i?`<svg>${e}</svg>`:e,r=t.content,i){const e=r.firstChild;while(e.firstChild)r.appendChild(e.firstChild);r.removeChild(e)}Is.set(e,r)}return t.insertBefore(r.cloneNode(!0),n),[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Cs(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Os(e,t,n){const s=e.style,r=Object(i["D"])(n);if(n&&!r){for(const e in n)As(s,e,n[e]);if(t&&!Object(i["D"])(t))for(const e in t)null==n[e]&&As(s,e,"")}else{const i=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=i)}}const Ss=/\s*!important$/;function As(e,t,n){if(Object(i["o"])(n))n.forEach(n=>As(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const s=Ms(e,t);Ss.test(n)?e.setProperty(Object(i["l"])(s),n.replace(Ss,""),"important"):e[s]=n}}const Ds=["Webkit","Moz","ms"],xs={};function Ms(e,t){const n=xs[t];if(n)return n;let s=Object(i["e"])(t);if("filter"!==s&&s in e)return xs[t]=s;s=Object(i["f"])(s);for(let i=0;i<Ds.length;i++){const n=Ds[i]+s;if(n in e)return xs[t]=n}return t}const Ls="http://www.w3.org/1999/xlink";function Rs(e,t,n,s,r){if(s&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Ls,t.slice(6,t.length)):e.setAttributeNS(Ls,t,n);else{const s=Object(i["C"])(t);null==n||s&&!Object(i["m"])(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Ns(e,t,n,s,r,o,a){if("innerHTML"===t||"textContent"===t)return s&&a(s,r,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const i=null==n?"":n;return e.value===i&&"OPTION"!==e.tagName||(e.value=i),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const s=typeof e[t];if("boolean"===s)return void(e[t]=Object(i["m"])(n));if(null==n&&"string"===s)return e[t]="",void e.removeAttribute(t);if("number"===s){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(l){0}}let Ps=Date.now,js=!1;if("undefined"!==typeof window){Ps()>document.createEvent("Event").timeStamp&&(Ps=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);js=!!(e&&Number(e[1])<=53)}let Bs=0;const Fs=Promise.resolve(),Us=()=>{Bs=0},$s=()=>Bs||(Fs.then(Us),Bs=Ps());function Vs(e,t,n,i){e.addEventListener(t,n,i)}function qs(e,t,n,i){e.removeEventListener(t,n,i)}function Hs(e,t,n,i,s=null){const r=e._vei||(e._vei={}),o=r[t];if(i&&o)o.value=i;else{const[n,a]=zs(t);if(i){const o=r[t]=Ks(i,s);Vs(e,n,o,a)}else o&&(qs(e,n,o,a),r[t]=void 0)}}const Ws=/(?:Once|Passive|Capture)$/;function zs(e){let t;if(Ws.test(e)){let n;t={};while(n=e.match(Ws))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(i["l"])(e.slice(2)),t]}function Ks(e,t){const n=e=>{const i=e.timeStamp||Ps();(js||i>=n.attached-1)&&Ui(Gs(e,n.value),t,5,[e])};return n.value=e,n.attached=$s(),n}function Gs(e,t){if(Object(i["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}const Qs=/^on[a-z]/,Ys=(e,t,n,s,r=!1,o,a,c,l)=>{"class"===t?Cs(e,s,r):"style"===t?Os(e,n,s):Object(i["w"])(t)?Object(i["u"])(t)||Hs(e,t,n,s,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):Js(e,t,s,r))?Ns(e,t,s,o,a,c,l):("true-value"===t?e._trueValue=s:"false-value"===t&&(e._falseValue=s),Rs(e,t,s,r))};function Js(e,t,n,s){return s?"innerHTML"===t||"textContent"===t||!!(t in e&&Qs.test(t)&&Object(i["p"])(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!Qs.test(t)||!Object(i["D"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Xs="transition",Zs="animation",er=(e,{slots:t})=>_s(pt,sr(e),t);er.displayName="Transition";const tr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},nr=(er.props=Object(i["h"])({},pt.props,tr),(e,t=[])=>{Object(i["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),ir=e=>!!e&&(Object(i["o"])(e)?e.some(e=>e.length>1):e.length>1);function sr(e){const t={};for(const i in e)i in tr||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:s,duration:r,enterFromClass:o=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,m=rr(r),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:_,onLeave:w,onLeaveCancelled:k,onBeforeAppear:E=y,onAppear:I=b,onAppearCancelled:T=_}=t,C=(e,t,n)=>{cr(e,t?h:c),cr(e,t?u:a),n&&n()},O=(e,t)=>{cr(e,p),cr(e,f),t&&t()},S=e=>(t,n)=>{const i=e?I:b,r=()=>C(t,e,n);nr(i,[t,r]),lr(()=>{cr(t,e?l:o),ar(t,e?h:c),ir(i)||hr(t,s,g,r)})};return Object(i["h"])(t,{onBeforeEnter(e){nr(y,[e]),ar(e,o),ar(e,a)},onBeforeAppear(e){nr(E,[e]),ar(e,l),ar(e,u)},onEnter:S(!1),onAppear:S(!0),onLeave(e,t){const n=()=>O(e,t);ar(e,d),mr(),ar(e,f),lr(()=>{cr(e,d),ar(e,p),ir(w)||hr(e,s,v,n)}),nr(w,[e,n])},onEnterCancelled(e){C(e,!1),nr(_,[e])},onAppearCancelled(e){C(e,!0),nr(T,[e])},onLeaveCancelled(e){O(e),nr(k,[e])}})}function rr(e){if(null==e)return null;if(Object(i["v"])(e))return[or(e.enter),or(e.leave)];{const t=or(e);return[t,t]}}function or(e){const t=Object(i["N"])(e);return t}function ar(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function cr(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function lr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ur=0;function hr(e,t,n,i){const s=e._endId=++ur,r=()=>{s===e._endId&&i()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:c}=dr(e,t);if(!o)return i();const l=o+"end";let u=0;const h=()=>{e.removeEventListener(l,d),r()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),e.addEventListener(l,d)}function dr(e,t){const n=window.getComputedStyle(e),i=e=>(n[e]||"").split(", "),s=i(Xs+"Delay"),r=i(Xs+"Duration"),o=fr(s,r),a=i(Zs+"Delay"),c=i(Zs+"Duration"),l=fr(a,c);let u=null,h=0,d=0;t===Xs?o>0&&(u=Xs,h=o,d=r.length):t===Zs?l>0&&(u=Zs,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?Xs:Zs:null,d=u?u===Xs?r.length:c.length:0);const f=u===Xs&&/\b(transform|all)(,|$)/.test(n[Xs+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function fr(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>pr(t)+pr(e[n])))}function pr(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function mr(){return document.body.offsetHeight}new WeakMap,new WeakMap;const gr=e=>{const t=e.props["onUpdate:modelValue"];return Object(i["o"])(t)?e=>Object(i["n"])(t,e):t};function vr(e){e.target.composing=!0}function yr(e){const t=e.target;t.composing&&(t.composing=!1,br(t,"input"))}function br(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const _r={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=gr(r);const o=s||r.props&&"number"===r.props.type;Vs(e,t?"change":"input",t=>{if(t.target.composing)return;let s=e.value;n?s=s.trim():o&&(s=Object(i["N"])(s)),e._assign(s)}),n&&Vs(e,"change",()=>{e.value=e.value.trim()}),t||(Vs(e,"compositionstart",vr),Vs(e,"compositionend",yr),Vs(e,"change",yr))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},o){if(e._assign=gr(o),e.composing)return;if(document.activeElement===e){if(n)return;if(s&&e.value.trim()===t)return;if((r||"number"===e.type)&&Object(i["N"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const wr=["ctrl","shift","alt","meta"],kr={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>wr.some(n=>e[n+"Key"]&&!t.includes(n))},Er=(e,t)=>(n,...i)=>{for(let e=0;e<t.length;e++){const i=kr[t[e]];if(i&&i(n,t))return}return e(n,...i)},Ir={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Tr=(e,t)=>n=>{if(!("key"in n))return;const s=Object(i["l"])(n.key);return t.some(e=>e===s||Ir[e]===s)?e(n):void 0};const Cr=Object(i["h"])({patchProp:Ys},Ts);let Or;function Sr(){return Or||(Or=Sn(Cr))}const Ar=(...e)=>{const t=Sr().createApp(...e);const{mount:n}=t;return t.mount=e=>{const s=Dr(e);if(!s)return;const r=t._component;Object(i["p"])(r)||r.render||r.template||(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Dr(e){if(Object(i["D"])(e)){const t=document.querySelector(e);return t}return e}},"7ded":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var i=n("1fd5"),s=n("22e5"),r=n("589b"),o=n("e691");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,Object(r["_addComponent"])(e,new s["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(r["deleteApp"])(this._delegate)))}_getService(e,t=r["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=r["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(r["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(r["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},l=new i["b"]("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:r["registerVersion"],setLogLevel:r["setLogLevel"],onLog:r["onLog"],apps:null,SDK_VERSION:r["SDK_VERSION"],INTERNAL:{registerComponent:u,removeApp:s,useAsService:h,modularAPIs:r}};function s(e){delete t[e]}function o(e){if(e=e||r["_DEFAULT_ENTRY_NAME"],!Object(i["e"])(t,e))throw l.create("no-app",{appName:e});return t[e]}function a(s,o={}){const a=r["initializeApp"](s,o);if(Object(i["e"])(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map(e=>t[e])}function u(t){const s=t.name,a=s.replace("-compat","");if(r["_registerComponent"](t)&&"PUBLIC"===t.type){const r=(e=o())=>{if("function"!==typeof e[a])throw l.create("invalid-app-argument",{appName:s});return e[a]()};void 0!==t.serviceProps&&Object(i["i"])(r,t.serviceProps),n[a]=r,e.prototype[a]=function(...e){const n=this._getService.bind(this,s);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=u(a);function t(t){Object(i["i"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:i["g"],ErrorFactory:i["b"],deepExtend:i["i"]}),e}const d=h(),f=new o["b"]("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.12";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){Object(r["registerVersion"])(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(i["m"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},8266:function(e,t,n){},"8f6b":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Si})),n.d(t,"b",(function(){return Di})),n.d(t,"c",(function(){return Ai})),n.d(t,"d",(function(){return Mi})),n.d(t,"e",(function(){return xi})),n.d(t,"f",(function(){return Li})),n.d(t,"g",(function(){return Ri})),n.d(t,"h",(function(){return Ci})),n.d(t,"i",(function(){return Oi}));var i,s="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{},r={},o=o||{},a=s||self;function c(){}function l(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function u(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function h(e){return Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function m(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function g(e,t,n){return g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m,g.apply(null,arguments)}function v(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function y(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return t.prototype[n].apply(e,s)}}function b(){this.s=this.s,this.o=this.o}var _=0,w={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=_)){var e=h(this);delete w[e]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},E=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const i=e.length,s="string"===typeof e?e.split(""):e;for(let r=0;r<i;r++)r in s&&t.call(n,s[r],r,e)};function I(e){e:{var t=Vn;const n=e.length,i="string"===typeof e?e.split(""):e;for(let s=0;s<n;s++)if(s in i&&t.call(void 0,i[s],s,e)){t=s;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function T(e){return Array.prototype.concat.apply([],arguments)}function C(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function O(e){return/^[\s\xa0]*$/.test(e)}var S,A=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function D(e,t){return-1!=e.indexOf(t)}function x(e,t){return e<t?-1:e>t?1:0}e:{var M=a.navigator;if(M){var L=M.userAgent;if(L){S=L;break e}}S=""}function R(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function N(e){const t={};for(const n in e)t[n]=e[n];return t}var P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(e,t){let n,i;for(let s=1;s<arguments.length;s++){for(n in i=arguments[s],i)e[n]=i[n];for(let t=0;t<P.length;t++)n=P[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function B(e){return B[" "](e),e}function F(e){var t=X;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}B[" "]=c;var U,$=D(S,"Opera"),V=D(S,"Trident")||D(S,"MSIE"),q=D(S,"Edge"),H=q||V,W=D(S,"Gecko")&&!(D(S.toLowerCase(),"webkit")&&!D(S,"Edge"))&&!(D(S,"Trident")||D(S,"MSIE"))&&!D(S,"Edge"),z=D(S.toLowerCase(),"webkit")&&!D(S,"Edge");function K(){var e=a.document;return e?e.documentMode:void 0}e:{var G="",Q=function(){var e=S;return W?/rv:([^\);]+)(\)|;)/.exec(e):q?/Edge\/([\d\.]+)/.exec(e):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):z?/WebKit\/(\S+)/.exec(e):$?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Q&&(G=Q?Q[1]:""),V){var Y=K();if(null!=Y&&Y>parseFloat(G)){U=String(Y);break e}}U=G}var J,X={};function Z(){return F((function(){let e=0;const t=A(String(U)).split("."),n=A("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var s=t[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;e=x(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||x(0==s[2].length,0==r[2].length)||x(s[2],r[2]),s=s[3],r=r[3]}while(0==e)}return 0<=e}))}if(a.document&&V){var ee=K();J=ee||(parseInt(U,10)||void 0)}else J=void 0;var te=J,ne=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",c,t),a.removeEventListener("test",c,t)}catch(n){}return e}();function ie(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function se(e,t){if(ie.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(W){e:{try{B(t.nodeName);var s=!0;break e}catch(r){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:re[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&se.Z.h.call(this)}}ie.prototype.h=function(){this.defaultPrevented=!0},y(se,ie);var re={2:"touch",3:"pen",4:"mouse"};se.prototype.h=function(){se.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var oe="closure_listenable_"+(1e6*Math.random()|0),ae=0;function ce(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ia=s,this.key=++ae,this.ca=this.fa=!1}function le(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function ue(e){this.src=e,this.g={},this.h=0}function he(e,t){var n=t.type;if(n in e.g){var i,s=e.g[n],r=k(s,t);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(le(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function de(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==i)return s}return-1}ue.prototype.add=function(e,t,n,i,s){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=de(e,t,i,s);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new ce(t,this.src,r,!!i,s),t.fa=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function me(e,t,n,i,s){if(i&&i.once)return ye(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)me(e,t[r],n,i,s);return null}return n=Te(n),e&&e[oe]?e.N(t,n,u(i)?!!i.capture:!!i,s):ge(e,t,n,!1,i,s)}function ge(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=u(s)?!!s.capture:!!s,a=Ee(e);if(a||(e[fe]=a=new ue(e)),n=a.add(t,n,i,o,r),n.proxy)return n;if(i=ve(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)ne||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(we(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function ve(){function e(n){return t.call(e.src,e.listener,n)}var t=ke;return e}function ye(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)ye(e,t[r],n,i,s);return null}return n=Te(n),e&&e[oe]?e.O(t,n,u(i)?!!i.capture:!!i,s):ge(e,t,n,!0,i,s)}function be(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)be(e,t[r],n,i,s);else i=u(i)?!!i.capture:!!i,n=Te(n),e&&e[oe]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=de(r,n,i,s),-1<n&&(le(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete e.g[t],e.h--)))):e&&(e=Ee(e))&&(t=e.g[t.toString()],e=-1,t&&(e=de(t,n,i,s)),(n=-1<e?t[e]:null)&&_e(n))}function _e(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[oe])he(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(we(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Ee(t))?(he(n,e),0==n.h&&(n.src=null,t[fe]=null)):le(e)}}}function we(e){return e in pe?pe[e]:pe[e]="on"+e}function ke(e,t){if(e.ca)e=!0;else{t=new se(t,this);var n=e.listener,i=e.ia||e.src;e.fa&&_e(e),e=n.call(i,t)}return e}function Ee(e){return e=e[fe],e instanceof ue?e:null}var Ie="__closure_events_fn_"+(1e9*Math.random()>>>0);function Te(e){return"function"===typeof e?e:(e[Ie]||(e[Ie]=function(t){return e.handleEvent(t)}),e[Ie])}function Ce(){b.call(this),this.i=new ue(this),this.P=this,this.I=null}function Oe(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"===typeof t)t=new ie(t,e);else if(t instanceof ie)t.target=t.target||e;else{var s=t;t=new ie(i,e),j(t,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=Se(o,i,!0,t)&&s}if(o=t.g=e,s=Se(o,i,!0,t)&&s,s=Se(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)o=t.g=n[r],s=Se(o,i,!1,t)&&s}function Se(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&he(e.i,o),s=!1!==a.call(c,i)&&s}}return s&&!i.defaultPrevented}y(Ce,b),Ce.prototype[oe]=!0,Ce.prototype.removeEventListener=function(e,t,n,i){be(this,e,t,n,i)},Ce.prototype.M=function(){if(Ce.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)le(n[i]);delete t.g[e],t.h--}}this.I=null},Ce.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},Ce.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var Ae=a.JSON.stringify;function De(){var e=Fe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class xe{constructor(){this.h=this.g=null}add(e,t){const n=Le.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Me,Le=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Re,e=>e.reset());class Re{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ne(e){a.setTimeout(()=>{throw e},0)}function Pe(e,t){Me||je(),Be||(Me(),Be=!0),Fe.add(e,t)}function je(){var e=a.Promise.resolve(void 0);Me=function(){e.then(Ue)}}var Be=!1,Fe=new xe;function Ue(){for(var e;e=De();){try{e.h.call(e.g)}catch(n){Ne(n)}var t=Le;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Be=!1}function $e(e,t){Ce.call(this),this.h=e||1,this.g=t||a,this.j=g(this.kb,this),this.l=Date.now()}function Ve(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function qe(e,t,n){if("function"===typeof e)n&&(e=g(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=g(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function He(e){e.g=qe(()=>{e.g=null,e.i&&(e.i=!1,He(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}y($e,Ce),i=$e.prototype,i.da=!1,i.S=null,i.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Oe(this,"tick"),this.da&&(Ve(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){$e.Z.M.call(this),Ve(this),delete this.g};class We extends b{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:He(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(e){b.call(this),this.h=e,this.g={}}y(ze,b);var Ke=[];function Ge(e,t,n,i){Array.isArray(n)||(n&&(Ke[0]=n.toString()),n=Ke);for(var s=0;s<n.length;s++){var r=me(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Qe(e){R(e.g,(function(e,t){this.g.hasOwnProperty(t)&&_e(e)}),e),e.g={}}function Ye(){this.g=!0}function Je(e,t,n,i,s,r){e.info((function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}function Xe(e,t,n,i,s,r,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+r+" "+o}))}function Ze(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+tt(e,n)+(i?" "+i:"")}))}function et(e,t){e.info((function(){return"TIMEOUT: "+t}))}function tt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Ae(n)}catch(a){return t}}ze.prototype.M=function(){ze.Z.M.call(this),Qe(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ye.prototype.Aa=function(){this.g=!1},Ye.prototype.info=function(){};var nt={},it=null;function st(){return it=it||new Ce}function rt(e){ie.call(this,nt.Ma,e)}function ot(e){const t=st();Oe(t,new rt(t,e))}function at(e,t){ie.call(this,nt.STAT_EVENT,e),this.stat=t}function ct(e){const t=st();Oe(t,new at(t,e))}function lt(e,t){ie.call(this,nt.Na,e),this.size=t}function ut(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}nt.Ma="serverreachability",y(rt,ie),nt.STAT_EVENT="statevent",y(at,ie),nt.Na="timingevent",y(lt,ie);var ht={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},dt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ft(){}function pt(e){return e.h||(e.h=e.i())}function mt(){}ft.prototype.h=null;var gt,vt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function yt(){ie.call(this,"d")}function bt(){ie.call(this,"c")}function _t(){}function wt(e,t,n,i){this.l=e,this.j=t,this.m=n,this.X=i||1,this.V=new ze(this),this.P=Et,e=H?125:void 0,this.W=new $e(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new kt}function kt(){this.i=null,this.g="",this.h=!1}y(yt,ie),y(bt,ie),y(_t,ft),_t.prototype.g=function(){return new XMLHttpRequest},_t.prototype.i=function(){return{}},gt=new _t;var Et=45e3,It={},Tt={};function Ct(e,t,n){e.K=1,e.v=Jt(Wt(t)),e.s=n,e.U=!0,Ot(e,null)}function Ot(e,t){e.F=Date.now(),xt(e),e.A=Wt(e.v);var n=e.A,i=e.X;Array.isArray(i)||(i=[String(i)]),fn(n.h,"t",i),e.C=0,n=e.l.H,e.h=new kt,e.g=bi(e.l,n?t:null,!e.s),0<e.O&&(e.L=new We(g(e.Ia,e,e.g),e.O)),Ge(e.V,e.g,"readystatechange",e.gb),t=e.H?N(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ot(1),Je(e.j,e.u,e.A,e.m,e.X,e.s)}function St(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function At(e,t,n){let i,s=!0;for(;!e.I&&e.C<n.length;){if(i=Dt(e,n),i==Tt){4==t&&(e.o=4,ct(14),s=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(i==It){e.o=4,ct(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}Ze(e.j,e.m,i,null),Pt(e,i)}St(e)&&i!=Tt&&i!=It&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ct(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hi(t),t.L=!0,ct(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),Nt(e),Rt(e))}function Dt(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?Tt:(n=Number(t.substring(n,i)),isNaN(n)?It:(i+=1,i+n>t.length?Tt:(t=t.substr(i,n),e.C=i+n,t)))}function xt(e){e.Y=Date.now()+e.P,Mt(e,e.P)}function Mt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ut(g(e.eb,e),t)}function Lt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function Rt(e){0==e.l.G||e.I||pi(e.l,e)}function Nt(e){Lt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ve(e.W),Qe(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Pt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||wn(n.i,e)))if(n.I=e.N,!e.J&&wn(n.i,e)&&3==n.G){try{var i=n.Ca.g.parse(t)}catch(l){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;fi(n),ti(n)}ui(n),ct(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=ut(g(n.ab,n),6e3));if(1>=_n(n.i)&&n.ka){try{n.ka()}catch(l){}n.ka=void 0}}else gi(n,11)}else if((e.J||n.g==e)&&fi(n),!O(t))for(s=n.Ca.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const s=l[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var r=i.i;!r.g&&(D(e,"spdy")||D(e,"quic")||D(e,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(kn(r,r.h),r.h=null))}if(i.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.sa=e,Yt(i.F,i.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=e;if(i.oa=yi(i,i.H?i.la:null,i.W),o.J){En(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(Lt(a),xt(a)),i.g=o}else li(i);0<n.l.length&&si(n)}else"stop"!=l[0]&&"close"!=l[0]||gi(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?gi(n,7):ei(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}ot(4)}catch(l){}}function jt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(l(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}function Bt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(l(e)||"string"===typeof e)E(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(l(e)||"string"===typeof e){n=[];for(var i=e.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,e)n[i++]=s;i=jt(e),s=i.length;for(var r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}}function Ft(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof Ft)for(n=e.T(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}function Ut(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var i=e.g[t];$t(e.h,i)&&(e.g[n++]=i),t++}e.g.length=n}if(e.i!=e.g.length){var s={};for(n=t=0;t<e.g.length;)i=e.g[t],$t(s,i)||(e.g[n++]=i,s[i]=1),t++;e.g.length=n}}function $t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}i=wt.prototype,i.setTimeout=function(e){this.P=e},i.gb=function(e){e=e.target;const t=this.L;t&&3==Gn(e)?t.l():this.Ia(e)},i.Ia=function(e){try{if(e==this.g)e:{const h=Gn(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||H||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=h||7==t||ot(8==t||0>=d?3:2),Lt(this);var n=this.g.ba();this.N=n;t:if(St(this)){var i=Qn(this.g);e="";var s=i.length,r=4==Gn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Nt(this),Rt(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Xe(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(c)){var u=c;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,ct(12),Nt(this),Rt(this);break e}Ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pt(this,n)}this.U?(At(this,h,o),H&&this.i&&3==h&&(Ge(this.V,this.W,"tick",this.fb),this.W.start())):(Ze(this.j,this.m,o,null),Pt(this,o)),4==h&&Nt(this),this.i&&!this.I&&(4==h?pi(this.l,this):(this.i=!1,xt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Nt(this),Rt(this)}}}catch(h){}},i.fb=function(){if(this.g){var e=Gn(this.g),t=this.g.ga();this.C<t.length&&(Lt(this),At(this,e,t),this.i&&4!=e&&xt(this))}},i.cancel=function(){this.I=!0,Nt(this)},i.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(et(this.j,this.A),2!=this.K&&(ot(3),ct(17)),Nt(this),this.o=2,Rt(this)):Mt(this,this.Y-e)},i=Ft.prototype,i.R=function(){Ut(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},i.T=function(){return Ut(this),this.g.concat()},i.get=function(e,t){return $t(this.h,e)?this.h[e]:t},i.set=function(e,t){$t(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},i.forEach=function(e,t){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);e.call(t,r,s,this)}};var Vt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ht(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Ht){this.g=void 0!==t?t:e.g,zt(this,e.j),this.s=e.s,Kt(this,e.i),Gt(this,e.m),this.l=e.l,t=e.h;var n=new ln;n.i=t.i,t.g&&(n.g=new Ft(t.g),n.h=t.h),Qt(this,n),this.o=e.o}else e&&(n=String(e).match(Vt))?(this.g=!!t,zt(this,n[1]||"",!0),this.s=en(n[2]||""),Kt(this,n[3]||"",!0),Gt(this,n[4]),this.l=en(n[5]||"",!0),Qt(this,n[6]||"",!0),this.o=en(n[7]||"")):(this.g=!!t,this.h=new ln(null,this.g))}function Wt(e){return new Ht(e)}function zt(e,t,n){e.j=n?en(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Kt(e,t,n){e.i=n?en(t,!0):t}function Gt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Qt(e,t,n){t instanceof ln?(e.h=t,mn(e.h,e.g)):(n||(t=tn(t,an)),e.h=new ln(t,e.g))}function Yt(e,t,n){e.h.set(t,n)}function Jt(e){return Yt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Xt(e){return e instanceof Ht?Wt(e):new Ht(e,void 0)}function Zt(e,t,n,i){var s=new Ht(null,void 0);return e&&zt(s,e),t&&Kt(s,t),n&&Gt(s,n),i&&(s.l=i),s}function en(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tn(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,nn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Ht.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tn(t,sn,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tn(t,sn,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(tn(n,"/"==n.charAt(0)?on:rn,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tn(n,cn)),e.join("")};var sn=/[#\/\?@]/g,rn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function ln(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function un(e){e.g||(e.g=new Ft,e.h=0,e.i&&qt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function hn(e,t){un(e),t=pn(e,t),$t(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,$t(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Ut(e)))}function dn(e,t){return un(e),t=pn(e,t),$t(e.g.h,t)}function fn(e,t,n){hn(e,t),0<n.length&&(e.i=null,e.g.set(pn(e,t),C(n)),e.h+=n.length)}function pn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function mn(e,t){t&&!e.j&&(un(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(hn(this,t),fn(this,n,e))}),e)),e.j=t}i=ln.prototype,i.add=function(e,t){un(this),this.i=null,e=pn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},i.forEach=function(e,t){un(this),this.g.forEach((function(n,i){E(n,(function(n){e.call(t,n,i,this)}),this)}),this)},i.T=function(){un(this);for(var e=this.g.R(),t=this.g.T(),n=[],i=0;i<t.length;i++)for(var s=e[i],r=0;r<s.length;r++)n.push(t[i]);return n},i.R=function(e){un(this);var t=[];if("string"===typeof e)dn(this,e)&&(t=T(t,this.g.get(pn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=T(t,e[n])}return t},i.set=function(e,t){return un(this),this.i=null,e=pn(this,e),dn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},i.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var i=t[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;""!==i[r]&&(o+="="+encodeURIComponent(String(i[r]))),e.push(o)}}return this.i=e.join("&")};var gn=class{constructor(e,t){this.h=e,this.g=t}};function vn(e){this.l=e||yn,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yn=10;function bn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function _n(e){return e.h?1:e.g?e.g.size:0}function wn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function kn(e,t){e.g?e.g.add(t):e.h=t}function En(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function In(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return C(e.i)}function Tn(){}function Cn(){this.g=new Tn}function On(e,t,n){const i=n||"";try{Bt(e,(function(e,n){let s=e;u(e)&&(s=Ae(e)),t.push(i+n+"="+encodeURIComponent(s))}))}catch(s){throw t.push(i+"type="+encodeURIComponent("_badmap")),s}}function Sn(e,t){const n=new Ye;if(a.Image){const i=new Image;i.onload=v(An,n,i,"TestLoadImage: loaded",!0,t),i.onerror=v(An,n,i,"TestLoadImage: error",!1,t),i.onabort=v(An,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=v(An,n,i,"TestLoadImage: timeout",!1,t),a.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}function An(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch(r){}}function Dn(e){this.l=e.$b||null,this.j=e.ib||!1}function xn(e,t){Ce.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vn.prototype.cancel=function(){if(this.i=In(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Tn.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},Tn.prototype.parse=function(e){return a.JSON.parse(e,void 0)},y(Dn,ft),Dn.prototype.g=function(){return new xn(this.l,this.j)},Dn.prototype.i=function(e){return function(){return e}}({}),y(xn,Ce);var Mn=0;function Ln(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Rn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Nn(e)}function Nn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}i=xn.prototype,i.open=function(e,t){if(this.readyState!=Mn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Nn(this)},i.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Rn(this)),this.readyState=Mn},i.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ln(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Rn(this):Nn(this),3==this.readyState&&Ln(this)}},i.Ua=function(e){this.g&&(this.response=this.responseText=e,Rn(this))},i.Ta=function(e){this.g&&(this.response=e,Rn(this))},i.ha=function(){this.g&&Rn(this)},i.setRequestHeader=function(e,t){this.v.append(e,t)},i.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(xn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Pn=a.JSON.parse;function jn(e){Ce.call(this),this.headers=new Ft,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Bn,this.K=this.L=!1}y(jn,Ce);var Bn="",Fn=/^https?$/i,Un=["POST","PUT"];function $n(e){return V&&Z()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Vn(e){return"content-type"==e.toLowerCase()}function qn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Hn(e),zn(e)}function Hn(e){e.D||(e.D=!0,Oe(e,"complete"),Oe(e,"error"))}function Wn(e){if(e.h&&"undefined"!=typeof o&&(!e.C[1]||4!=Gn(e)||2!=e.ba()))if(e.v&&4==Gn(e))qe(e.Fa,0,e);else if(Oe(e,"readystatechange"),4==Gn(e)){e.h=!1;try{const o=e.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===o){var s=String(e.H).match(Vt)[1]||null;if(!s&&a.self&&a.self.location){var r=a.self.location.protocol;s=r.substr(0,r.length-1)}i=!Fn.test(s?s.toLowerCase():"")}n=i}if(n)Oe(e,"complete"),Oe(e,"success");else{e.m=6;try{var c=2<Gn(e)?e.g.statusText:""}catch(l){c=""}e.j=c+" ["+e.ba()+"]",Hn(e)}}finally{zn(e)}}}function zn(e,t){if(e.g){Kn(e);const i=e.g,s=e.C[0]?c:null;e.g=null,e.C=null,t||Oe(e,"ready");try{i.onreadystatechange=s}catch(n){}}}function Kn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function Gn(e){return e.g?e.g.readyState:0}function Qn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Bn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Yn(e){let t="";return R(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Jn(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Yn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Yt(e,t,n))}function Xn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Zn(e){this.za=0,this.l=[],this.h=new Ye,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Xn("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Xn("baseRetryDelayMs",5e3,e),this.$a=Xn("retryDelaySeedMs",1e4,e),this.Ya=Xn("forwardChannelMaxRetries",2,e),this.ra=Xn("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new vn(e&&e.concurrentRequestLimit),this.Ca=new Cn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function ei(e){if(ni(e),3==e.G){var t=e.V++,n=Wt(e.F);Yt(n,"SID",e.J),Yt(n,"RID",t),Yt(n,"TYPE","terminate"),ai(e,n),t=new wt(e,e.h,t,void 0),t.K=2,t.v=Jt(Wt(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(t.v.toString(),"")),!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=bi(t.l,null),t.g.ea(t.v)),t.F=Date.now(),xt(t)}vi(e)}function ti(e){e.g&&(hi(e),e.g.cancel(),e.g=null)}function ni(e){ti(e),e.u&&(a.clearTimeout(e.u),e.u=null),fi(e),e.i.cancel(),e.m&&("number"===typeof e.m&&a.clearTimeout(e.m),e.m=null)}function ii(e,t){e.l.push(new gn(e.Za++,t)),3==e.G&&si(e)}function si(e){bn(e.i)||e.m||(e.m=!0,Pe(e.Ha,e),e.C=0)}function ri(e,t){return!(_n(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=ut(g(e.Ha,e,t),mi(e,e.C)),e.C++,!0))}function oi(e,t){var n;n=t?t.m:e.V++;const i=Wt(e.F);Yt(i,"SID",e.J),Yt(i,"RID",n),Yt(i,"AID",e.U),ai(e,i),e.o&&e.s&&Jn(i,e.o,e.s),n=new wt(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=ci(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),kn(e.i,n),Ct(n,i,t)}function ai(e,t){e.j&&Bt({},(function(e,n){Yt(t,n,e)}))}function ci(e,t,n){n=Math.min(e.l.length,n);var i=e.j?g(e.j.Oa,e.j,e):null;e:{var s=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=s[a].h;const c=s[a].g;if(n-=t,0>n)t=Math.max(0,s[a].h-100),o=!1;else try{On(c,e,"req"+n+"_")}catch(r){i&&i(c)}}if(o){i=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,i}function li(e){e.g||e.u||(e.Y=1,Pe(e.Ga,e),e.A=0)}function ui(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=ut(g(e.Ga,e),mi(e,e.A)),e.A++,!0)}function hi(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function di(e){e.g=new wt(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Wt(e.oa);Yt(t,"RID","rpc"),Yt(t,"SID",e.J),Yt(t,"CI",e.N?"0":"1"),Yt(t,"AID",e.U),ai(e,t),Yt(t,"TYPE","xmlhttp"),e.o&&e.s&&Jn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Jt(Wt(t)),n.s=null,n.U=!0,Ot(n,e)}function fi(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function pi(e,t){var n=null;if(e.g==t){fi(e),hi(e),e.g=null;var i=2}else{if(!wn(e.i,t))return;n=t.D,En(e.i,t),i=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;i=st(),Oe(i,new lt(i,n,t,s)),si(e)}else li(e);else if(s=t.o,3==s||0==s&&0<e.I||!(1==i&&ri(e,t)||2==i&&ui(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:gi(e,5);break;case 4:gi(e,10);break;case 3:gi(e,6);break;default:gi(e,2)}}function mi(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function gi(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var i=g(e.jb,e);n||(n=new Ht("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||zt(n,"https"),Jt(n)),Sn(n.toString(),i)}else ct(2);e.G=0,e.j&&e.j.va(t),vi(e),ni(e)}function vi(e){e.G=0,e.I=-1,e.j&&(0==In(e.i).length&&0==e.l.length||(e.i.i.length=0,C(e.l),e.l.length=0),e.j.ua())}function yi(e,t,n){let i=Xt(n);if(""!=i.i)t&&Kt(i,t+"."+i.i),Gt(i,i.m);else{const e=a.location;i=Zt(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&R(e.aa,(function(e,t){Yt(i,t,e)})),t=e.D,n=e.sa,t&&n&&Yt(i,t,n),Yt(i,"VER",e.ma),ai(e,i),i}function bi(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new jn(new Dn({ib:!0})):new jn(e.qa),t.L=e.H,t}function _i(){}function wi(){if(V&&!(10<=Number(te)))throw Error("Environmental error: no available transport.")}function ki(e,t){Ce.call(this),this.g=new Zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ti(this)}function Ei(e){yt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Ii(){bt.call(this),this.status=1}function Ti(e){this.g=e}i=jn.prototype,i.ea=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gt.g(),this.C=this.u?pt(this.u):pt(gt),this.g.onreadystatechange=g(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){return void qn(this,r)}e=n||"";const s=new Ft(this.headers);i&&Bt(i,(function(e,t){s.set(t,e)})),i=I(s.T()),n=a.FormData&&e instanceof a.FormData,!(0<=k(Un,t))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Kn(this),0<this.B&&((this.K=$n(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.pa,this)):this.A=qe(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){qn(this,r)}},i.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))},i.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Oe(this,"complete"),Oe(this,"abort"),zn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zn(this,!0)),jn.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?Wn(this):this.cb())},i.cb=function(){Wn(this)},i.ba=function(){try{return 2<Gn(this)?this.g.status:-1}catch(e){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},i.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Pn(t)}},i.Da=function(){return this.m},i.La=function(){return"string"===typeof this.j?this.j:String(this.j)},i=Zn.prototype,i.ma=8,i.G=1,i.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},i.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new wt(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=N(r),j(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var i=this.l[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(t+=i,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ci(this,s,t),n=Wt(this.F),Yt(n,"RID",e),Yt(n,"CVER",22),this.D&&Yt(n,"X-HTTP-Session-Id",this.D),ai(this,n),this.o&&r&&Jn(n,this.o,r),kn(this.i,s),this.Ra&&Yt(n,"TYPE","init"),this.ja?(Yt(n,"$req",t),Yt(n,"SID","null"),s.$=!0,Ct(s,n,null)):Ct(s,n,t),this.G=2}}else 3==this.G&&(e?oi(this,e):0==this.l.length||bn(this.i)||oi(this))},i.Ga=function(){if(this.u=null,di(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=ut(g(this.bb,this),e)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ct(10),ti(this),di(this))},i.ab=function(){null!=this.v&&(this.v=null,ti(this),ui(this),ct(19))},i.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ct(2)):(this.h.info("Failed to ping google.com"),ct(1))},i=_i.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},wi.prototype.g=function(e,t){return new ki(e,t)},y(ki,Ce),ki.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Pe(g(e.hb,e,t))),ct(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=yi(e,null,e.W),si(e)},ki.prototype.close=function(){ei(this.g)},ki.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,ii(this.g,t)}else this.v?(t={},t.__data__=Ae(e),ii(this.g,t)):ii(this.g,e)},ki.prototype.M=function(){this.g.j=null,delete this.j,ei(this.g),delete this.g,ki.Z.M.call(this)},y(Ei,yt),y(Ii,bt),y(Ti,_i),Ti.prototype.xa=function(){Oe(this.g,"a")},Ti.prototype.wa=function(e){Oe(this.g,new Ei(e))},Ti.prototype.va=function(e){Oe(this.g,new Ii(e))},Ti.prototype.ua=function(){Oe(this.g,"b")},wi.prototype.createWebChannel=wi.prototype.g,ki.prototype.send=ki.prototype.u,ki.prototype.open=ki.prototype.m,ki.prototype.close=ki.prototype.close,ht.NO_ERROR=0,ht.TIMEOUT=8,ht.HTTP_ERROR=6,dt.COMPLETE="complete",mt.EventType=vt,vt.OPEN="a",vt.CLOSE="b",vt.ERROR="c",vt.MESSAGE="d",Ce.prototype.listen=Ce.prototype.N,jn.prototype.listenOnce=jn.prototype.O,jn.prototype.getLastError=jn.prototype.La,jn.prototype.getLastErrorCode=jn.prototype.Da,jn.prototype.getStatus=jn.prototype.ba,jn.prototype.getResponseJson=jn.prototype.Qa,jn.prototype.getResponseText=jn.prototype.ga,jn.prototype.send=jn.prototype.ea;var Ci=r.createWebChannelTransport=function(){return new wi},Oi=r.getStatEventTarget=function(){return st()},Si=r.ErrorCode=ht,Ai=r.EventType=dt,Di=r.Event=nt,xi=r.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Mi=r.FetchXmlHttpFactory=Dn,Li=r.WebChannel=mt,Ri=r.XhrIo=jn}).call(this,n("c8ba"))},"9ff4":function(e,t,n){"use strict";(function(e){function i(e,t){const n=Object.create(null),i=e.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return I})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return C})),n.d(t,"d",(function(){return T})),n.d(t,"e",(function(){return J})),n.d(t,"f",(function(){return ee})),n.d(t,"g",(function(){return se})),n.d(t,"h",(function(){return D})),n.d(t,"i",(function(){return ae})),n.d(t,"j",(function(){return ne})),n.d(t,"k",(function(){return L})),n.d(t,"l",(function(){return Z})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return ie})),n.d(t,"o",(function(){return R})),n.d(t,"p",(function(){return B})),n.d(t,"q",(function(){return r})),n.d(t,"r",(function(){return g})),n.d(t,"s",(function(){return K})),n.d(t,"t",(function(){return N})),n.d(t,"u",(function(){return A})),n.d(t,"v",(function(){return $})),n.d(t,"w",(function(){return S})),n.d(t,"x",(function(){return z})),n.d(t,"y",(function(){return V})),n.d(t,"z",(function(){return G})),n.d(t,"A",(function(){return v})),n.d(t,"B",(function(){return P})),n.d(t,"C",(function(){return a})),n.d(t,"D",(function(){return F})),n.d(t,"E",(function(){return U})),n.d(t,"F",(function(){return b})),n.d(t,"G",(function(){return _})),n.d(t,"H",(function(){return i})),n.d(t,"I",(function(){return f})),n.d(t,"J",(function(){return l})),n.d(t,"K",(function(){return x})),n.d(t,"L",(function(){return w})),n.d(t,"M",(function(){return te})),n.d(t,"N",(function(){return re})),n.d(t,"O",(function(){return W}));const s="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",r=i(s);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=i(o);function c(e){return!!e||""===e}function l(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=F(i)?d(i):l(i);if(s)for(const e in s)t[e]=s[e]}return t}return F(e)||$(e)?e:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(u).forEach(e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if(F(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const i=f(e[n]);i&&(t+=i+" ")}else if($(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",m="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",g=i(p),v=i(m);function y(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=b(e[i],t[i]);return n}function b(e,t){if(e===t)return!0;let n=j(e),i=j(t);if(n||i)return!(!n||!i)&&e.getTime()===t.getTime();if(n=R(e),i=R(t),n||i)return!(!n||!i)&&y(e,t);if(n=$(e),i=$(t),n||i){if(!n||!i)return!1;const s=Object.keys(e).length,r=Object.keys(t).length;if(s!==r)return!1;for(const n in e){const i=e.hasOwnProperty(n),s=t.hasOwnProperty(n);if(i&&!s||!i&&s||!b(e[n],t[n]))return!1}}return String(e)===String(t)}function _(e,t){return e.findIndex(e=>b(e,t))}const w=e=>null==e?"":R(e)||$(e)&&(e.toString===q||!B(e.toString))?JSON.stringify(e,k,2):String(e),k=(e,t)=>t&&t.__v_isRef?k(e,t.value):N(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:P(t)?{[`Set(${t.size})`]:[...t.values()]}:!$(t)||R(t)||z(t)?t:String(t),E={},I=[],T=()=>{},C=()=>!1,O=/^on[^a-z]/,S=e=>O.test(e),A=e=>e.startsWith("onUpdate:"),D=Object.assign,x=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},M=Object.prototype.hasOwnProperty,L=(e,t)=>M.call(e,t),R=Array.isArray,N=e=>"[object Map]"===H(e),P=e=>"[object Set]"===H(e),j=e=>e instanceof Date,B=e=>"function"===typeof e,F=e=>"string"===typeof e,U=e=>"symbol"===typeof e,$=e=>null!==e&&"object"===typeof e,V=e=>$(e)&&B(e.then)&&B(e.catch),q=Object.prototype.toString,H=e=>q.call(e),W=e=>H(e).slice(8,-1),z=e=>"[object Object]"===H(e),K=e=>F(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,G=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Q=e=>{const t=Object.create(null);return n=>{const i=t[n];return i||(t[n]=e(n))}},Y=/-(\w)/g,J=Q(e=>e.replace(Y,(e,t)=>t?t.toUpperCase():"")),X=/\B([A-Z])/g,Z=Q(e=>e.replace(X,"-$1").toLowerCase()),ee=Q(e=>e.charAt(0).toUpperCase()+e.slice(1)),te=Q(e=>e?"on"+ee(e):""),ne=(e,t)=>!Object.is(e,t),ie=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},se=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},re=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let oe;const ae=()=>oe||(oe="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},abc5:function(e,t,n){"use strict";(function(e){function i(){return s().__VUE_DEVTOOLS_GLOBAL_HOOK__}function s(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return r}));const r="function"===typeof Proxy}).call(this,n("c8ba"))},b774:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));const i="devtools-plugin:setup",s="plugin:settings:set"},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}e.exports=n},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,i=e.length-1;i>=0;i--){var s=e[i];"."===s?e.splice(i,1):".."===s?(e.splice(i,1),n++):n&&(e.splice(i,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function i(e){"string"!==typeof e&&(e+="");var t,n=0,i=-1,s=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!s){n=t+1;break}}else-1===i&&(s=!1,i=t+1);return-1===i?"":e.slice(n,i)}function s(e,t){if(e.filter)return e.filter(t);for(var n=[],i=0;i<e.length;i++)t(e[i],i,e)&&n.push(e[i]);return n}t.resolve=function(){for(var t="",i=!1,r=arguments.length-1;r>=-1&&!i;r--){var o=r>=0?arguments[r]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,i="/"===o.charAt(0))}return t=n(s(t.split("/"),(function(e){return!!e})),!i).join("/"),(i?"/":"")+t||"."},t.normalize=function(e){var i=t.isAbsolute(e),o="/"===r(e,-1);return e=n(s(e.split("/"),(function(e){return!!e})),!i).join("/"),e||i||(e="."),e&&o&&(e+="/"),(i?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(s(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function i(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var s=i(e.split("/")),r=i(n.split("/")),o=Math.min(s.length,r.length),a=o,c=0;c<o;c++)if(s[c]!==r[c]){a=c;break}var l=[];for(c=a;c<s.length;c++)l.push("..");return l=l.concat(r.slice(a)),l.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,s=!0,r=e.length-1;r>=1;--r)if(t=e.charCodeAt(r),47===t){if(!s){i=r;break}}else s=!1;return-1===i?n?"/":".":n&&1===i?"/":e.slice(0,i)},t.basename=function(e,t){var n=i(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,i=-1,s=!0,r=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===i&&(s=!1,i=o+1),46===a?-1===t?t=o:1!==r&&(r=1):-1!==t&&(r=-1);else if(!s){n=o+1;break}}return-1===t||-1===i||0===r||1===r&&t===i-1&&t===n+1?"":e.slice(t,i)};var r="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var s;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(s||(s={}));const r={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=a[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?r[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}function u(e){i.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of i){let i=null;t&&t.level&&(i=r[t.level]),n.userLogHandler=null===e?null:(t,n,...r)=>{const o=r.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==i&&void 0!==i?i:t.logLevel)&&e({level:s[n].toLowerCase(),message:o,args:r,type:t.name})}}}},f30a:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("b774");class s{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const i in e.settings){const t=e.settings[i];n[i]=t.defaultValue}const s="__vue-devtools-plugin-settings__"+e.id;let r={...n};try{const e=localStorage.getItem(s),t=JSON.parse(e);Object.assign(r,t)}catch(o){}this.fallbacks={getSettings(){return r},setSettings(e){try{localStorage.setItem(s,JSON.stringify(e))}catch(o){}r=e}},t.on(i["a"],(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise(n=>{this.targetQueue.push({method:t,args:e,resolve:n})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}}}]);
//# sourceMappingURL=chunk-vendors.ef1786ab.js.map