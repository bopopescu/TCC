if (self.CavalryLogger) { CavalryLogger.start_js(["OPFpY"]); }

__d("LWICometBoostUnavailableButton_boostedComponent.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"LWICometBoostUnavailableButton_boostedComponent",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"boost_unavailable_info",plural:!1,selections:[{alias:null,args:null,concreteType:"Error",kind:"LinkedField",name:"coded_exception",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"summary",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"LWICometBoostUnavailablePopover_boostUnavailableInfo"}],storageKey:null}],type:"BoostedComponentWrapper",abstractKey:null};e.exports=a},null);
__d("LWICometButtonQuery.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"boostedComponentInput"},{defaultValue:null,kind:"LocalArgument",name:"graphqlEntryPoint"}],b=[{kind:"Variable",name:"input",variableName:"boostedComponentInput"}],c={alias:null,args:[{kind:"Variable",name:"entry_point",variableName:"graphqlEntryPoint"}],concreteType:"BoostedComponentButtonData",kind:"LinkedField",name:"button_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"button_label",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"button_action_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tooltip_label",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"button_label_type",storageKey:null}],storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"LWICometButtonQuery",selections:[{alias:null,args:null,concreteType:"LWIAPI",kind:"LinkedField",name:"lwi",plural:!1,selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"boosted_component",plural:!1,selections:[c,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"boost_unavailable_info",plural:!1,selections:[d],storageKey:null}],type:"BoostedComponentWrapper",abstractKey:null},{args:null,kind:"FragmentSpread",name:"LWICometBoostUnavailableButton_boostedComponent"}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"LWICometButtonQuery",selections:[{alias:null,args:null,concreteType:"LWIAPI",kind:"LinkedField",name:"lwi",plural:!1,selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"boosted_component",plural:!1,selections:[d,c,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"boost_unavailable_info",plural:!1,selections:[d,{alias:null,args:null,concreteType:"Error",kind:"LinkedField",name:"coded_exception",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"summary",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null}],storageKey:null},{kind:"TypeDiscriminator",abstractKey:"__isBoostedComponentBoostUnavailableInfo"},{alias:null,args:null,kind:"ScalarField",name:"confirm_label",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"confirm_link",storageKey:null}],storageKey:null}],type:"BoostedComponentWrapper",abstractKey:null}],storageKey:null}],storageKey:null}]},params:{id:"2907384602708273",metadata:{},name:"LWICometButtonQuery",operationKind:"query",text:null}}}();e.exports=a},null);
__d("BoostedComponentTypedLoggerLite",["Banzai","generateLiteTypedLogger"],function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:BoostedComponentLoggerConfig")},null);
__d("LWICometLogger",[],function(a,b,c,d,e,f){"use strict";a=function(){function a(a){this.$2=new Set([]),this.$1=a}var b=a.prototype;b.subscribe=function(a){this.$2.add(a)};b.unsubscribe=function(a){this.$2["delete"](a)};b.$4=function(a){this.$2.forEach(function(b){b(a)})};b.log=function(a){this.$3=a,this.$4(a),this.$1(a)};b.getLastLoggedData=function(){return this.$3};return a}();e.exports=a},null);
__d("LWICometTypedLoggerLite",["BoostedComponentTypedLoggerLite","LWICometLogger"],function(a,b,c,d,e,f){"use strict";var g=b("BoostedComponentTypedLoggerLite").log,h;function i(){h==null&&(h=new(b("LWICometLogger"))(g));return h}function a(a){i().log(a)}e.exports={getLogger:i,log:a}},null);
__d("LWICometBoostUnavailableButton.react",["fbt","CometLazyPopoverTrigger.react","CometRelay","CometThrottle","JSResource","LWICometTypedLoggerLite","React","TetraButton.react","emptyFunction","unrecoverableViolation","LWICometBoostUnavailableButton_boostedComponent.graphql"],function(a,b,c,d,e,f,g){"use strict";var h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("LWICometTypedLoggerLite").log,k=b("React");c=b("React");var l=c.useEffect,m=b("JSResource")("LWICometBoostUnavailablePopover.react").__setRef("LWICometBoostUnavailableButton.react");function a(a){var c=a.boostedComponent,d=a.entryPoint,e=a.logHoverButton,f=a.pageID,n=a.product,o=a.targetID;a=i(h!==void 0?h:h=b("LWICometBoostUnavailableButton_boostedComponent.graphql"),c);c=a.boost_unavailable_info;if(c==null)throw b("unrecoverableViolation")("boost_unavailable_info is null in boost unavailable button","pages_lwi");l(function(){j({action:"render",context:"flow",entry_point:d,event:"render_flow_entry_point_error",event_category:"error",flow:"ineligible",page_id:f,post_id:o,product:n,side:"client_side"})},[]);var p=c==null?void 0:(a=c.coded_exception)==null?void 0:a.summary,q=e!=null?b("CometThrottle")(function(){return e({boost_unavailable_reason:p,button:"Boost Unavailable"})},5e3):b("emptyFunction");return k.jsx(b("CometLazyPopoverTrigger.react"),{align:"end",popoverProps:{boostUnavailableInfo:c},popoverResource:m,position:"above",children:function(a,c){return k.jsx(b("TetraButton.react"),{label:g._("Impulsionamento indispon\u00edvel"),onHoverIn:function(){q()},onPress:c,ref:a,size:"medium",type:"secondary"})}})}e.exports=a},null);
__d("LWICometButtonPlaceholder.react",["BaseGlimmer.react","React","stylex"],function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){return g.jsx(b("BaseGlimmer.react"),{className:"gjzvkazv orb7ywq3 pq6dq46d kzx2olss aot14ch1 p86d2i9g beltcj47 aypy0576 s1tcr66n maa8sdkg l6v480f0 du4w35lb i1ao9s8h l9j0dhe7 jb3vyjys a8nywdso rz4wbd8a qt6c0cv9 kvgmc6g5 hcukyx3x cxmmr5t8 oygrvhab nhd2j8a9 rq0escxv auili1gw ow4ym5g4 g5ia77u1 dwo3fsh8",index:0})}e.exports=a},null);
__d("LWICometDialogContext",["React"],function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext();e.exports=c},null);
__d("BoostedComponentProduct",[],function(a,b,c,d,e,f){e.exports=Object.freeze({BOOSTED_APP_INSTALL:"boosted_app_install",BOOSTED_AUTOMATED_ADS:"boosted_automated_ads",BOOSTED_AUTOMOTIVE_INVENTORY:"boosted_automotive_inventory",BOOSTED_CATALOG_SALES:"boosted_catalog_sales",BOOSTED_CTA:"boosted_cta",BOOSTED_EVENT:"boosted_event",BOOSTED_FB_INSTAGRAM_MEDIA:"boosted_fb_instagram_media",BOOSTED_FB_STORY:"boosted_fb_story",BOOSTED_INFERRED_GOAL:"boosted_inferred_goal",BOOSTED_INSTAGRAM_MEDIA:"boosted_instagram_media",BOOSTED_INSTAGRAM_USER:"boosted_instagram_user",BOOSTED_INTEGRATED_BUSINESS:"boosted_integrated_business",BOOSTED_JOB_POST:"boosted_job_post",BOOSTED_LEAD_GEN:"boosted_lead_gen",BOOSTED_LOCAL_AWARENESS:"boosted_local_awareness",BOOSTED_MARKETPLACE_LISTING:"boosted_marketplace_listing",BOOSTED_MINI_SHOP:"boosted_mini_shop",BOOSTED_PAGELIKE:"boosted_pagelike",BOOSTED_POST:"boosted_post",BOOSTED_PURCHASE:"boosted_purchase",BOOSTED_REAL_ESTATE_LISTING:"boosted_real_estate_listing",BOOSTED_TOUR:"boosted_tour",BOOSTED_USER_POST:"boosted_user_post",BOOSTED_WEBSITE:"boosted_website"})},null);
__d("LWICometProductUtils",["BoostedComponentProduct","getJSEnumSafe","unrecoverableViolation"],function(a,b,c,d,e,f){"use strict";function a(a){a=b("getJSEnumSafe")(b("BoostedComponentProduct"),a);if(a==null)throw b("unrecoverableViolation")("product should be a valid BoostedComponentProduct","pages_lwi");return a}e.exports={productFromGraphQLEnumToJSEnumStrict:a}},null);
__d("LWICometButton.react",["AdsLWICoBPostCreationDialog.entrypoint","BoostedComponentTypedLoggerLite","CometPlaceholder.react","CometRelay","CometThrottle","CometTooltip.react","LWICometBoostUnavailableButton.react","LWICometButtonActionContext","LWICometButtonPlaceholder.react","LWICometDialogContext","LWICometEntryPointUtils","LWICometProductUtils","React","TetraButton.react","recoverableViolation","useCometRelayEntrypointContextualEnvironmentProvider","LWICometButtonQuery.graphql"],function(a,b,c,d,e,f){"use strict";var g,h=b("BoostedComponentTypedLoggerLite").log;b("CometRelay").graphql;var i=b("CometRelay").prepareEntryPoint,j=b("CometRelay").useLazyLoadQuery,k=b("LWICometEntryPointUtils").jsEnumToGraphQLEnum,l=b("LWICometProductUtils").productFromGraphQLEnumToJSEnumStrict,m=b("React");c=b("React");var n=c.useCallback,o=c.useContext,p=g!==void 0?g:g=b("LWICometButtonQuery.graphql");function q(a){var c=a.deemphasized;c=c===void 0?!1:c;var d=a.entryPoint,e=a.icon,f=a.newAd,g=a.onPress,q=a.product,r=a.profileID,s=a.targetID;a=a.type;a=a===void 0?"primary":a;var t={new_promotion:f,page_id:r,product:q,target_id:s},u=o(b("LWICometButtonActionContext")),v=u.getOpenDialogWithPhase;u=u.getOpenDialogWithTargetID;var w=o(b("LWICometDialogContext")),x=b("useCometRelayEntrypointContextualEnvironmentProvider")(),y=k(d);t=j(p,{boostedComponentInput:t,graphqlEntryPoint:y});var z=l(q),A=n(function(a){var b=f!=null?f?"create":"edit":null;h({action:"hover",context:"flow",entry_point:d,event:"enter_flow_hover",extra_data:a,flow:b,page_id:r,post_id:s,product:z,side:"user_action"})},[d,f,r,z,s]),B=function(a){var b=f!=null?f?"create":"edit":null;h({action:"enter",context:"flow",entry_point:d,event:"enter_flow_click",extra_data:a,flow:b,page_id:r,post_id:s,product:z,side:"user_action"})},C=(y=t.lwi)==null?void 0:y.boosted_component;if(C==null)return null;if(C.boost_unavailable_info!=null)return m.jsx(b("LWICometBoostUnavailableButton.react"),{boostedComponent:C,entryPoint:d,logHoverButton:A,pageID:r,product:z,targetID:s});t=(q=C.button_data)==null?void 0:q.button_label;q=(y=C.button_data)==null?void 0:y.button_action_uri;if(t==null||t===""||q==null){b("recoverableViolation")("`buttonLabel` or `buttonURI` passed into LWICometButton.react is empty","pages_lwi");return null}y=b("CometThrottle")(function(){var a;return A({button:(a=C.button_data)==null?void 0:a.button_label_type})},5e3);var D=function(){var a;g!=null&&g();B({button:(a=C.button_data)==null?void 0:a.button_label_type})},E;if(w!=null)E={onPress:function(){D();z!=="boosted_post"&&b("recoverableViolation")("LWI Comet-on-Blue dialog is not implemented for "+z,"pages_lwi");if(s!=null){w.historyPush(w.dialogState);var a=w.pageID;a=i(x,b("AdsLWICoBPostCreationDialog.entrypoint"),{pageID:a,targetID:s});w.setDialogState({boostishID:null,currentEntryPoint:a,routeType:"post_creation",targetID:s})}else b("recoverableViolation")("targetID is invalid for boost post","pages_lwi")}};else if(v!=null&&u!=null){var F=u(d),G=v(d);E={onPress:function(){D(),s!=null?F(r,z,s):G(r,"PRODUCT_SELECTOR")}}}else E={linkProps:{url:q},onPress:function(){var a;B({button:(a=C.button_data)==null?void 0:a.button_label_type})}};return m.jsx(b("CometTooltip.react"),{position:"above",tooltip:(u=C.button_data)==null?void 0:u.tooltip_label,children:m.jsx(b("TetraButton.react"),babelHelpers["extends"]({icon:e,label:t,onHoverIn:y,reduceEmphasis:c,size:"medium",type:a},E))})}function a(a){if(a.profileID===""){b("recoverableViolation")("Empty pageID is passed to Comet LWI Button","pages_lwi");return null}return m.jsx(b("CometPlaceholder.react"),{fallback:m.jsx(b("LWICometButtonPlaceholder.react"),{}),children:m.jsx(q,babelHelpers["extends"]({},a))})}e.exports=a},null);