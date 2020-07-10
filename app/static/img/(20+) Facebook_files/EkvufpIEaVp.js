if (self.CavalryLogger) { CavalryLogger.start_js(["wz\/ig"]); }

__d("PageCometLaunchpointLeftNavMenuRootQuery.graphql",["relay-runtime"],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"useNewPagesYouManage"}],b={alias:null,args:null,kind:"ScalarField",name:"can_create_page",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},e=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],f={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"PageCometLaunchpointLeftNavMenuRootQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[b,{condition:"useNewPagesYouManage",kind:"Condition",passingValue:!1,selections:[{args:null,kind:"FragmentSpread",name:"PageCometLaunchpointLeftNavPagesLayout_viewer"}]},{condition:"useNewPagesYouManage",kind:"Condition",passingValue:!0,selections:[{args:null,kind:"FragmentSpread",name:"PagesCometPagesYouManageLeftNavPagesLayout_viewer"}]}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"PageCometLaunchpointLeftNavMenuRootQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[b,{condition:"useNewPagesYouManage",kind:"Condition",passingValue:!1,selections:[{alias:null,args:[{kind:"Literal",name:"orderby",value:["page_switcher_order"]}],concreteType:"AdminedPagesConnection",kind:"LinkedField",name:"admined_pages",plural:!1,selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"nodes",plural:!0,selections:[c,d,{alias:null,args:null,kind:"ScalarField",name:"new_activity_count",storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:e,storageKey:null},f],storageKey:null}],storageKey:'admined_pages(orderby:["page_switcher_order"])'}]},{condition:"useNewPagesYouManage",kind:"Condition",passingValue:!0,selections:[{alias:"adminedPages",args:[{kind:"Literal",name:"orderby",value:["most_active_with_pinned_pages"]}],concreteType:"AdminedPagesConnection",kind:"LinkedField",name:"admined_pages",plural:!1,selections:[{alias:null,args:null,concreteType:"AdminedPagesEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"node",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"is_page_pinned_to_shortcuts",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:24},{kind:"Literal",name:"width",value:24}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:e,storageKey:"profile_picture(height:24,width:24)"},d,f],storageKey:null}],storageKey:null}],storageKey:'admined_pages(orderby:["most_active_with_pinned_pages"])'}]}],storageKey:null}]},params:{id:"3153224421404164",metadata:{relayPreloadable:!0},name:"PageCometLaunchpointLeftNavMenuRootQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a},null);
__d("PageCometLaunchpointLeftNavPagesLayout_viewer.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PageCometLaunchpointLeftNavPagesLayout_viewer",selections:[{alias:null,args:[{kind:"Literal",name:"orderby",value:["page_switcher_order"]}],concreteType:"AdminedPagesConnection",kind:"LinkedField",name:"admined_pages",plural:!1,selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"new_activity_count",storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}],storageKey:'admined_pages(orderby:["page_switcher_order"])'}],type:"Viewer",abstractKey:null};e.exports=a},null);
__d("PagesCometPagesYouManageLeftNavPageItem_page.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PagesCometPagesYouManageLeftNavPageItem_page",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_page_pinned_to_shortcuts",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:24},{kind:"Literal",name:"width",value:24}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:"profile_picture(height:24,width:24)"},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Page",abstractKey:null};e.exports=a},null);
__d("PagesCometPagesYouManageLeftNavPagesLayout_viewer.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PagesCometPagesYouManageLeftNavPagesLayout_viewer",selections:[{alias:"adminedPages",args:[{kind:"Literal",name:"orderby",value:["most_active_with_pinned_pages"]}],concreteType:"AdminedPagesConnection",kind:"LinkedField",name:"admined_pages",plural:!1,selections:[{alias:null,args:null,concreteType:"AdminedPagesEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"PagesCometPagesYouManageLeftNavPageItem_page"}],storageKey:null}],storageKey:null}],storageKey:'admined_pages(orderby:["most_active_with_pinned_pages"])'}],type:"Viewer",abstractKey:null};e.exports=a},null);
__d("CometPagesLaunchpointUpdateLastVisitTimeMutation.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c=[{kind:"Literal",name:"bookmark_render_location",value:"COMET_LEFT_NAV"}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometPagesLaunchpointUpdateLastVisitTimeMutation",selections:[{alias:null,args:b,concreteType:"PagesLaunchpointUpdateLastVisitTimeResponsePayload",kind:"LinkedField",name:"pages_launchpoint_update_last_visit_time",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:[{kind:"Literal",name:"bookmarkID",value:"250100865708545"},{kind:"Literal",name:"hasBookmark",value:!0},{kind:"Literal",name:"hasTopTab",value:!0}],kind:"FragmentSpread",name:"CometHomepageBadgeCountClearingMutationHelper_viewer"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometPagesLaunchpointUpdateLastVisitTimeMutation",selections:[{alias:null,args:b,concreteType:"PagesLaunchpointUpdateLastVisitTimeResponsePayload",kind:"LinkedField",name:"pages_launchpoint_update_last_visit_time",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:[{items:[{kind:"Literal",name:"bookmark_ids.0",value:"250100865708545"}],kind:"ListValue",name:"bookmark_ids"},{kind:"Literal",name:"environment",value:"COMET"},{kind:"Literal",name:"folder_id",value:"PRODUCT"},{kind:"Literal",name:"sections",value:["FACEBOOK_APP"]}],concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:"bookmark_unread_count",args:c,kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_LEFT_NAV")'},{alias:"bookmark_unread_count_string",args:c,kind:"ScalarField",name:"unread_count_string",storageKey:'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")'},{alias:"tab_unread_count",args:[{kind:"Literal",name:"bookmark_render_location",value:"COMET_TOP_TAB"}],kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_TOP_TAB")'},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:'bookmarks(bookmark_ids:["250100865708545"],environment:"COMET",folder_id:"PRODUCT",sections:["FACEBOOK_APP"])'}],storageKey:null}],storageKey:null}]},params:{id:"3208454622539929",metadata:{},name:"CometPagesLaunchpointUpdateLastVisitTimeMutation",operationKind:"mutation",text:null}}}();e.exports=a},null);
__d("CometFullPageEntryPointCompatRoot.react",["CometFullPageCompatRoot.react","React"],function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){a=a.extraProps;return g.jsx(b("CometFullPageCompatRoot.react"),babelHelpers["extends"]({},a))}e.exports=a},null);
__d("CometPagesLaunchpointUpdateLastVisitTimeMutation",["CometHomepageBadgeCountClearingMutationHelper","CometRelay","recoverableViolation","CometPagesLaunchpointUpdateLastVisitTimeMutation.graphql"],function(a,b,c,d,e,f){"use strict";var g,h=b("CometHomepageBadgeCountClearingMutationHelper").clearBadgeCount;b("CometRelay").graphql;var i=b("CometRelay").commitMutation,j=g!==void 0?g:g=b("CometPagesLaunchpointUpdateLastVisitTimeMutation.graphql"),k=function(a){h({bookmarkID:"250100865708545",hasBookmark:!0,hasTopTab:!0,store:a})};function a(a){i(a,{mutation:j,onError:function(){b("recoverableViolation")("Failed to update the last visit time of the pages launchpoint surface","core_biz_growth")},optimisticUpdater:k,variables:{input:{}}})}e.exports={pagesLaunchpointUpdateLastVisitTime:a}},null);
__d("PageCometLaunchpointLeftNavCreatePageLayout.react",["ix","fbt","CometErrorBoundary.react","React","TetraButton.react","XCometPageCreationControllerRouteBuilder","fbicon","stylex"],function(a,b,c,d,e,f,g,h){"use strict";var i=b("React"),j=b("XCometPageCreationControllerRouteBuilder").buildURL({ref_type:"launch_point"});function a(){var a=h._("Criar nova P\u00e1gina");return i.jsx("div",{className:"dhix69tm oygrvhab wkznzc2l kvgmc6g5",children:i.jsx(b("CometErrorBoundary.react"),{fallback:null,children:i.jsx("div",{className:"cxgpxx05",children:i.jsx(b("TetraButton.react"),{icon:b("fbicon")._(g("483768"),16),label:a,linkProps:{url:j},reduceEmphasis:!0,size:"medium"})})})})}e.exports=a},null);
__d("PagesLaunchpointPagesYouManageClickFalcoEvent",["FalcoLoggerInternal","getSamplingPolicyConfig_DO_NOT_USE"],function(a,b,c,d,e,f){"use strict";a=b("getSamplingPolicyConfig_DO_NOT_USE")("falco","pages_launchpoint_pages_you_manage_click");c=b("FalcoLoggerInternal").create(a);e.exports=c},null);
__d("PageCometLaunchpointLeftNavPagesLayout.react",["ix","fbt","CometBadge.react","CometRelay","PagesLaunchpointPagesYouManageClickFalcoEvent","React","TetraAccessoryListCell.react","XCometPageBrowserControllerRouteBuilder","cometRouteMatcher","fbicon","recoverableViolation","stylex","PageCometLaunchpointLeftNavPagesLayout_viewer.graphql"],function(a,b,c,d,e,f,g,h){"use strict";var i;b("CometRelay").graphql;var j=b("CometRelay").useFragment,k=b("React");c=b("React");var l=c.useCallback,m=c.useState,n=b("cometRouteMatcher").useRouteUrlMatcher,o=4,p=b("XCometPageBrowserControllerRouteBuilder").buildURL({category:"your_pages",ref:"bookmarks"});function a(a){var c,d=n(),e=m(!1),f=e[0],q=e[1];e=m(!0);var r=e[0],s=e[1];e=d(p).selected;d=l(function(){s(!r),q(!1)},[r]);var t=l(function(){q(!0)},[q]);a=j(i!==void 0?i:i=b("PageCometLaunchpointLeftNavPagesLayout_viewer.graphql"),a.data);a=a.admined_pages;c=(c=a==null?void 0:a.nodes)!=null?c:null;if(a==null||c==null)return null;a=h._("Suas P\u00e1ginas");var u=c.length;u>1&&(a=h._({"*":"Suas {number} P\u00e1ginas","_1":"Sua P\u00e1gina"},[h._plural(u,"number")]));u=h._("Ver todas as P\u00e1ginas");c=c.map(function(a){var c;c=a==null?void 0:(c=a.profile_picture)==null?void 0:c.uri;var d=a==null?void 0:a.id,e=a==null?void 0:a.url;if(c==null){b("recoverableViolation")("Exception: can not get Page profile picture","core_biz_growth");return null}if(d==null){b("recoverableViolation")("Exception: can not get Page id","core_biz_growth");return null}if(e==null){b("recoverableViolation")("Exception: can not get Page url","core_biz_growth");return null}var f=function(a){b("PagesLaunchpointPagesYouManageClickFalcoEvent").log(function(){return{event_data:{click_item:a},event_location:"launchpoint_lhc",page_id:d}})};return k.jsx(b("TetraAccessoryListCell.react"),{addOnPrimary:{shape:"circle",size:24,source:{uri:c},type:"profile-photo"},addOnPrimaryVerticalAlign:"center",body:a.new_activity_count===0?null:k.jsxs(k.Fragment,{children:[k.jsx("span",{style:{marginRight:4},children:k.jsx(b("CometBadge.react"),{isProfileBadge:!0,size:8})}),h._({"*":"{number} novos","4":"{number} novo","_1":"1 novo"},[h._plural(a.new_activity_count,"number")])]}),headline:a.name,level:4,linkProps:{url:e},onPress:function(){f("leftRail")}},d)});var v=c.length>o,w=c.slice(0,o);!f&&v&&w.push(k.jsx(b("TetraAccessoryListCell.react"),{addOnPrimary:{icon:b("fbicon")._(g("484387"),20),type:"icon"},addOnPrimaryVerticalAlign:"center",headline:u,level:4,onPress:t},"see_all_pages"));return k.jsx(b("TetraAccessoryListCell.react"),{addOnPrimary:{color:e?"blue":"gray",icon:b("fbicon")._(g("490492"),20),size:36,type:"contained-icon"},addOnSecondary:{"aria-label":h._("Clique para expandir"),children:k.jsx("div",{className:"dhix69tm oygrvhab cxmmr5t8 kvgmc6g5",children:r?f?c:w:null}),onPress:d,open:r,type:"expander"},headline:a,linkProps:{url:p},selected:e},"Pages You Manage")}e.exports=a},null);
__d("PageCometLaunchpointLeftNavPlinksLayout.react",["ix","fbt","React","TetraAccessoryListCell.react","XCometPageBrowserControllerRouteBuilder","cometRouteMatcher","fbicon"],function(a,b,c,d,e,f,g,h){"use strict";var i=b("React"),j=b("cometRouteMatcher").useRouteUrlMatcher,k=b("XCometPageBrowserControllerRouteBuilder").buildURL({category:"top",ref:"bookmarks"}),l=b("XCometPageBrowserControllerRouteBuilder").buildURL({category:"liked",ref:"bookmarks"}),m=b("XCometPageBrowserControllerRouteBuilder").buildURL({category:"invites",ref:"bookmarks"});function a(){var a=j(),c=h._("Descobrir"),d=h._("P\u00e1ginas curtidas"),e=h._("Convites"),f=a(k).selected,n=a(l).selected;a=a(m).selected;return i.jsxs("div",{children:[i.jsx(b("TetraAccessoryListCell.react"),{addOnPrimary:{color:f?"blue":"gray",icon:b("fbicon")._(g("891137"),20),size:36,type:"contained-icon"},headline:c,linkProps:{url:k},selected:f},"Discover"),i.jsx(b("TetraAccessoryListCell.react"),{addOnPrimary:{color:n?"blue":"gray",icon:b("fbicon")._(g("509923"),20),size:36,type:"contained-icon"},headline:d,linkProps:{url:l},selected:n},"Liked Pages"),i.jsx(b("TetraAccessoryListCell.react"),{addOnPrimary:{color:a?"blue":"gray",icon:b("fbicon")._(g("497885"),20),size:36,type:"contained-icon"},headline:e,linkProps:{url:m},selected:a},"Invites")]})}e.exports=a},null);
__d("PagesCometPagesYouManageLeftNavPageItem.react",["ix","CometRelay","PagesLaunchpointPagesYouManageClickFalcoEvent","React","TetraAccessoryListCell.react","TetraIcon.react","fbicon","useNullthrowsViolation","PagesCometPagesYouManageLeftNavPageItem_page.graphql"],function(a,b,c,d,e,f,g){"use strict";var h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("React");function a(a){var c,d=a.page$key,e=a.pageID;a=i(h!==void 0?h:h=b("PagesCometPagesYouManageLeftNavPageItem_page.graphql"),d);d=a.name;var f=a.url;c=b("useNullthrowsViolation")((c=a.profile_picture)==null?void 0:c.uri);var k=function(a){b("PagesLaunchpointPagesYouManageClickFalcoEvent").log(function(){return{event_data:{click_item:a},event_location:"launchpoint_lhc",page_id:e}})};return j.jsx(b("TetraAccessoryListCell.react"),{addOnPrimary:{shape:"circle",size:24,source:{uri:c},type:"profile-photo"},headline:d,headlineAddOn:a.is_page_pinned_to_shortcuts===!0?j.jsx(b("TetraIcon.react"),{color:"secondary",icon:b("fbicon")._(g("511755"),16)}):null,headlineLineLimit:2,level:4,linkProps:{url:f},onPress:function(){k("leftRail")}})}e.exports=a},null);
__d("PagesCometPagesYouManageLeftNavPagesLayout.react",["ix","fbt","CometRelay","PagesCometPagesYouManageLeftNavPageItem.react","React","TetraAccessoryListCell.react","XCometPageBrowserControllerRouteBuilder","cometRouteMatcher","fbicon","recoverableViolation","stylex","PagesCometPagesYouManageLeftNavPagesLayout_viewer.graphql"],function(a,b,c,d,e,f,g,h){"use strict";var i;b("CometRelay").graphql;var j=b("CometRelay").useFragment,k=b("React");c=b("React");var l=c.useCallback,m=c.useState,n=b("cometRouteMatcher").useRouteUrlMatcher,o=4,p=b("XCometPageBrowserControllerRouteBuilder").buildURL({category:"your_pages",ref:"bookmarks"});function a(a){var c=m(!1),d=c[0],e=c[1];c=m(!0);var f=c[0],q=c[1];c=l(function(){q(!f),e(!1)},[f]);var r=n();r=r(p).selected;a=j(i!==void 0?i:i=b("PagesCometPagesYouManageLeftNavPagesLayout_viewer.graphql"),a.data);a=(a=a==null?void 0:(a=a.adminedPages)==null?void 0:a.edges)!=null?a:[];if(a.length===0)return null;a=a.map(function(a){a=a.node;if(a==null||a.id==null){b("recoverableViolation")("node, node.id should not be null","core_biz_growth");return}return k.jsx(b("PagesCometPagesYouManageLeftNavPageItem.react"),{page$key:a,pageID:a.id},a.id)});var s=a.length>o,t=a.slice(0,o);!d&&s&&t.push(k.jsx(b("TetraAccessoryListCell.react"),{addOnPrimary:{icon:b("fbicon")._(g("484387"),20),type:"icon"},addOnPrimaryVerticalAlign:"center",headline:h._("Ver todas as P\u00e1ginas"),level:4,onPress:function(){e(!0)}},"see_all_pages"));return k.jsx(b("TetraAccessoryListCell.react"),{addOnPrimary:{color:r?"blue":"gray",icon:b("fbicon")._(g("490492"),20),size:36,type:"contained-icon"},addOnSecondary:{"aria-label":h._("Clique para expandir"),children:k.jsx("div",{className:"dhix69tm",children:f?d?a:t:null}),onPress:c,open:f,type:"expander"},headline:h._("Suas P\u00e1ginas"),linkProps:{url:p},selected:r},"Pages You Manage")}e.exports=a},null);
__d("PageCometLaunchpointLeftNavMenuRoot.react",["fbt","CometLeftRailComponent.react","CometLeftRailHeader.react","CometRelay","PageCometLaunchpointLeftNavCreatePageLayout.react","PageCometLaunchpointLeftNavPagesLayout.react","PageCometLaunchpointLeftNavPlinksLayout.react","PagesCometPagesYouManageLeftNavPagesLayout.react","React","recoverableViolation","PageCometLaunchpointLeftNavMenuRootQuery.graphql"],function(a,b,c,d,e,f,g){"use strict";var h,i=b("CometRelay").usePreloadedQuery;b("CometRelay").graphql;var j=b("React"),k=h!==void 0?h:h=b("PageCometLaunchpointLeftNavMenuRootQuery.graphql");function a(a){var c;a=a.leftNavContainerQueryReference;var d=a.variables.useNewPagesYouManage;a=i(k,a);a=a.viewer;if(a==null){b("recoverableViolation")("Viewer can not be null","core_biz_growth");return null}c=(c=a.can_create_page)!=null?c:!1;return j.jsx(b("CometLeftRailComponent.react"),{header:j.jsx(b("CometLeftRailHeader.react"),{title:g._("P\u00e1ginas")}),primaryNav:c&&j.jsxs(j.Fragment,{children:[d?j.jsx(b("PagesCometPagesYouManageLeftNavPagesLayout.react"),{data:a}):j.jsx(b("PageCometLaunchpointLeftNavPagesLayout.react"),{data:a}),j.jsx(b("PageCometLaunchpointLeftNavCreatePageLayout.react"),{})]}),secondaryNav:j.jsx(b("PageCometLaunchpointLeftNavPlinksLayout.react"),{})})}e.exports=a},null);
__d("PageCometLaunchpointEntryPointRoot.react",["fbt","CometLeftRailAndMainContentContainer.react","CometPagesLaunchpointUpdateLastVisitTimeMutation","CometPlaceholder.react","CometRelay","PageCometLaunchpointLeftNavMenuRoot.react","React"],function(a,b,c,d,e,f,g){"use strict";var h=b("CometPagesLaunchpointUpdateLastVisitTimeMutation").pagesLaunchpointUpdateLastVisitTime,i=b("CometRelay").EntryPointContainer,j=b("CometRelay").useRelayEnvironment,k=b("React");c=b("React");var l=c.useEffect,m={};function a(a){var c=a.entryPoints;a.props;a=a.queries;var d=j();l(function(){h(d)},[d]);c=k.jsx(b("CometPlaceholder.react"),{fallback:k.jsx("div",{}),children:k.jsx(i,{entryPointReference:c.contentEntryPoint,props:m})});a=k.jsx(b("CometLeftRailAndMainContentContainer.react"),{leftRailContent:k.jsx(b("PageCometLaunchpointLeftNavMenuRoot.react"),{leftNavContainerQueryReference:a.leftNavContainerQueryReference}),leftRailHeading:g._("Cabe\u00e7alho da P\u00e1gina"),mainContent:c,mainContentHeading:g._("Conte\u00fado inicial da P\u00e1gina")});return a}e.exports=a},null);