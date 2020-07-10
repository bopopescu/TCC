if (self.CavalryLogger) { CavalryLogger.start_js(["d1Cqy"]); }

__d("XCometGamingArenaControllerRouteBuilder",["cometRouteBuilder"],function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/gaming/tournaments/{arena_id}/",Object.freeze({}),void 0);e.exports=a},null);
__d("BaseCheckbox.react",["BaseFocusRing.react","BaseInput.react","BaseView.react","React","mergeRefs","stylex"],function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useLayoutEffect,i=c.useMemo,j=c.useRef,k={checkbox:{cursor:"nhd2j8a9",height:"datstx6m",marginTop:"kvgmc6g5",marginEnd:"cxmmr5t8",marginBottom:"oygrvhab",marginStart:"hcukyx3x",opacity:"b5wmifdl",outline:"lzcic4wl",paddingTop:"jb3vyjys",paddingEnd:"rz4wbd8a",paddingBottom:"qt6c0cv9",paddingStart:"a8nywdso",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",width:"k4urcfbm"},wrapper:{position:"l9j0dhe7"}};function a(a,c){var d=a.children,e=a.indeterminate,f=e===void 0?!1:e;e=a.suppressFocusRing;var l=a.testid,m=a.xstyle,n=babelHelpers.objectWithoutPropertiesLoose(a,["children","indeterminate","suppressFocusRing","testid","xstyle"]),o=j(null);h(function(){o.current!=null&&(o.current.indeterminate=f)},[f]);var p=i(function(){return b("mergeRefs")(c,o)},[c]);return g.jsx(b("BaseFocusRing.react"),{suppressFocusRing:e,children:function(a){return g.jsxs(b("BaseView.react"),{testid:void 0,xstyle:[k.wrapper,a,m],children:[d,g.jsx(b("BaseInput.react"),babelHelpers["extends"]({},n,{"aria-checked":f?"mixed":(a=n.checked)!=null?a:!1,ref:p,type:"checkbox",xstyle:k.checkbox}))]})}})}e.exports=g.memo(g.forwardRef(a))},null);
__d("CometFormCheckbox.react",["ix","BaseCheckbox.react","CometPressableOverlay.react","React","TetraIcon.react","TetraText.react","fbicon","stylex","useCometPressableEventHandlers"],function(a,b,c,d,e,f,g){"use strict";var h,i=b("React");c=b("React");var j=c.useCallback,k={checkbox:{display:"j83agx80"},root:{WebkitTapHighlightColor:"oajrlxb2",alignItems:"bp9cbjyn",display:"j83agx80",paddingBottom:"sj5x9vvc",paddingTop:"cxgpxx05",position:"l9j0dhe7",touchAction:"f1sip0of"},text:{flexBasis:"rj1gh0hx",flexGrow:"buofh1pr",marginStart:"h676nmdw",minWidth:"hpfvmrgz"}};function a(a,c){var d=a.checked,e=a.disabled;e=e===void 0?!1:e;var f=a.id,l=a.label,m=a.labelIsHidden;m=m===void 0?!1:m;var n=a.name,o=a.onChange,p=a.testid,q=a.value;p=b("useCometPressableEventHandlers")({disabled:e});a=p[0];p[1];var r=p[2],s=r.focusVisible,t=r.hovered;r=r.pressed;p=p[3];var u=j(function(){o(q)},[o,q]);return i.jsxs("label",babelHelpers["extends"]({className:(h||(h=b("stylex")))(k.root)},p,{ref:a,children:[i.jsxs(b("BaseCheckbox.react"),{"aria-label":m?l:void 0,checked:d,disabled:e,id:f,name:n,onValueChange:u,ref:c,testid:void 0,xstyle:k.checkbox,children:[i.jsx(b("TetraIcon.react"),{color:e?"disabled":d?"highlight":"secondary",icon:d?b("fbicon")._(g("531032"),24):b("fbicon")._(g("659289"),24)}),i.jsx(b("CometPressableOverlay.react"),{focusVisible:s,hovered:t,offset:8,pressed:r,radius:"50%"})]}),m?null:i.jsx("div",{className:(h||(h=b("stylex")))(k.text),children:i.jsx(b("TetraText.react"),{color:e?"disabled":"primary",type:"button2",children:l})})]}))}e.exports=i.forwardRef(a)},null);
__d("NullStateFiles",["IconSource"],function(a,b,c,d,e,f){"use strict";a={dark:new(b("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/files/null_states_files_dark_mode.svg",112),"default":new(b("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/files/null_states_files_gray_wash.svg",112)};e.exports=a},null);
__d("TetraUnitFooter.react",["React","stylex"],function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){a=a.addOn;return g.jsx("div",{className:"ofv0k9yr"+(a!=null?" aodizinl dati1w0a hv4rvrfc":""),children:a})}e.exports=a},null);
__d("CometLocalDate",["DateConsts","formatDate"],function(a,b,c,d,e,f){"use strict";var g=b("DateConsts").DAYS_PER_WEEK,h=b("DateConsts").MS_PER_DAY,i=1e3;a=function(){function a(a,b,c){a=new Date(a,b,c);this.year=a.getFullYear();this.month=a.getMonth();this.date=a.getDate()}a.fromDate=function(b){b===void 0&&(b=new Date());return new a(b.getFullYear(),b.getMonth(),b.getDate())};a.fromTimestamp=function(a){return this.fromDate(new Date(a*i))};var c=a.prototype;c.getYear=function(){return this.year};c.getMonth=function(){return this.month};c.getDate=function(){return this.date};c.getDayOfWeekFromMonday=function(){return(this.getJSDate().getDay()-1+g)%g};c.getNumDaysInThisMonth=function(){return new Date(this.year,this.month+1,0).getDate()};c.getNumDaysInPrevMonth=function(){return new Date(this.year,this.month,0).getDate()};c.getWithDaysAdded=function(b){return new a(this.year,this.month,this.date+b)};c.getWithWeeksAdded=function(a){return this.getWithDaysAdded(a*g)};c.getWithMonthsAdded=function(b){return new a(this.year,this.month+b,this.date)};c.getWithYearsAdded=function(b){return new a(this.year+b,this.month,this.date)};c.getJSDate=function(){return new Date(this.year,this.month,this.date)};c.format=function(a,c){return b("formatDate")(this.getJSDate(),a,c)};c.getHash=function(){return this.year*372+this.month*31+this.date};c.getNumDaysInThisYear=function(){return this.isLeapYear()?366:365};c.isLeapYear=function(){return this.year%4===0&&this.year%100!==0||this.year%400===0};c.isValid=function(){return!isNaN(this.getJSDate().getTime())};c.isEqual=function(a){return this.compareTo(a)===0};c.daysBetween=function(a){a=a.getJSDate()-this.getJSDate();return Math.round(Math.abs(a/h))};c.compareTo=function(a){var b=this.getJSDate();a=a.getJSDate();return b>a?1:b<a?-1:0};return a}();e.exports=a},null);