if (self.CavalryLogger) { CavalryLogger.start_js(["tvks8"]); }

__d("CometMenuComposite.react",["BaseScrollableArea.react","CometMenuBaseWithPopover.react","CometMenuFocusGroup","CometMenuItemBaseRoleContext","CometPopover.react","CometSeparatorMenuItem.react","React","TabbableScopeQuery.react","TetraTextPairing.react","stylex"],function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={centeredMenuSeparator:{marginTop:"aov4n071",marginEnd:"wkznzc2l",marginBottom:"bi6gxh9e",marginStart:"dhix69tm"},listItem:{borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",display:"j83agx80",flexDirection:"btwxx1t3",marginTop:"kvgmc6g5",marginEnd:"oi9244e8",marginBottom:"oygrvhab",marginStart:"h676nmdw",paddingTop:"pybr56ya",paddingEnd:"dflh9lhu",paddingBottom:"f10w8fjw",paddingStart:"scb9dxdr"},menuSeparator:{marginTop:"aov4n071",marginEnd:"cxmmr5t8",marginBottom:"bi6gxh9e",marginStart:"dhix69tm"},root:{alignItems:"gs1a9yip",display:"j83agx80",flexDirection:"cbu4d94t",paddingTop:"cxgpxx05",paddingEnd:"rz4wbd8a",paddingBottom:"sj5x9vvc",paddingStart:"a8nywdso"},sizeFull:{width:"k4urcfbm"},sizeNormal:{width:"geg40m2u"},sizeSmall:{width:"jbcpqwzg"},truncate:{maxHeight:"ktk59qbb"}},j="menu",k={listbox:"option",menu:"menuitem"};function a(a,c){var d=a.centeredSeparator,e=d===void 0?!1:d;d=a.submenus;var f=a.id,l=a.role;l=l===void 0?j:l;var m=a.size;m=m===void 0?"normal":m;var n=a.testid;n=n===void 0?"comet-menu-composite":n;n=a.truncate;n=n===void 0?!1:n;a=a.withArrow;var o=d.length;if(o===0)return null;var p=k[l];return h.jsx(b("CometMenuFocusGroup").FocusGroup,{portrait:!0,preventScrollOnFocus:!1,tabScopeQuery:b("TabbableScopeQuery.react"),wrap:!0,children:h.jsx(b("CometPopover.react"),{id:f,ref:c,role:l,testid:void 0,withArrow:a,children:h.jsx(b("BaseScrollableArea.react"),{horizontal:!1,vertical:!0,xstyle:[i.root,m==="full"&&i.sizeFull,m==="normal"&&i.sizeNormal,m==="small"&&i.sizeSmall,n&&i.truncate],children:h.jsx(b("CometMenuItemBaseRoleContext").Provider,{value:p,children:d.map(function(a,c){var d=a.children,f=a.footer;a=a.header;a=[a!=null?h.jsx("div",{className:(g||(g=b("stylex")))(i.listItem),role:p,children:h.jsx(b("TetraTextPairing.react"),{headline:a.title,level:2,meta:a.meta})},"submenu-header-"+c):null,h.jsx(h.Fragment,{children:d},"submenu-contents-"+c),f!=null?h.jsx("div",{className:(g||(g=b("stylex")))(i.listItem),role:p,children:h.jsx(b("TetraTextPairing.react"),{level:3,meta:f.text})},"submenu-footer-"+c):null];if(c!==0&&o>1)return[h.jsx(b("CometSeparatorMenuItem.react"),{xstyle:e?i.centeredMenuSeparator:i.menuSeparator},"menu-separator-"+c)].concat(a);else return a})})})})})}e.exports=h.memo(h.forwardRef(a))},null);
__d("CometActorMenu.react",["fbt","CometMenuComposite.react","React","stylex"],function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i="User",j="Page";function a(a){var c=a.onClose,d=a.options;a=a.renderActorOption;var e=a===void 0?null:a;if(e==null)return null;var f=[{title:g._("Perfil")},{title:g._("P\u00e1ginas")},{title:g._("Outros")}],k=[[],[],[]];d.forEach(function(a){var b=a==null?void 0:a.type;b===i?k[0].push(a):b===j?k[1].push(a):k[2].push(a)});a=k.map(function(a,b){return a.length===0?null:{children:[a.map(function(a){return e(a)})],header:f[b]}}).filter(Boolean);return h.jsx("div",{className:"h676nmdw oi9244e8",children:h.jsx(b("CometMenuComposite.react"),{onClose:c,size:"full",submenus:a,truncate:!0})})}e.exports=a},null);
__d("CometFormTimeRangeInput.react",["fbt","CometFormTimeInput.react","React","stylex"],function(a,b,c,d,e,f,g){"use strict";var h=b("React");c=b("React");var i=c.useCallback,j=[];function a(a){var c=a.constraints,d=c===void 0?j:c;c=a.timeRange;var e=a.startTimeInputProps,f=a.endTimeInputProps,k=a.disabled,l=a.layout;l=l===void 0?"row":l;var m=a.onTimeRangeChange,n=c[0],o=c[1];a=i(function(a){m([a,o])},[o,m]);c=i(function(a){m([n,a])},[m,n]);var p=i(function(a){return d.every(function(b){return b([a,o])})},[d,o]),q=i(function(a){return d.every(function(b){return b([n,a])})},[d,n]);return h.jsxs("div",{className:"j83agx80"+(l==="column"?" cbu4d94t gs1a9yip":""),children:[h.jsx("div",{className:(l==="row"?"cgat1ltu buofh1pr":"")+(l==="column"?" gjjqq4r6":""),children:h.jsx(b("CometFormTimeInput.react"),babelHelpers["extends"]({},e,{constraints:[p],disabled:k,label:(p=e&&e.label)!=null?p:g._("Hora de in\u00edcio"),onTimeChange:a,time:n}))}),h.jsx("div",{className:(l==="row"?"cgat1ltu buofh1pr":"")+(l==="column"?" gjjqq4r6":""),children:h.jsx(b("CometFormTimeInput.react"),babelHelpers["extends"]({},f,{constraints:[q],disabled:k,label:(e=f&&f.label)!=null?e:g._("Hora de t\u00e9rmino"),onTimeChange:c,time:o}))})]})}e.exports=h.memo(a)},null);