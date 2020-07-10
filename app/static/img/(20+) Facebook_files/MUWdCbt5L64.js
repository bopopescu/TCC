if (self.CavalryLogger) { CavalryLogger.start_js(["qScIu"]); }

__d("PagesCometAdminPublishBannerQuery.graphql",["relay-runtime"],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"pageID"}],b=[{kind:"Variable",name:"id",variableName:"pageID"}],c={alias:null,args:null,kind:"ScalarField",name:"is_published",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"PagesCometAdminPublishBannerQuery",selections:[{alias:null,args:b,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[c],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"PagesCometAdminPublishBannerQuery",selections:[{alias:null,args:b,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]},params:{id:"2873168276094372",metadata:{relayPreloadable:!0},name:"PagesCometAdminPublishBannerQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a},null);
__d("PagesCometPublicViewBarQuery.graphql",["relay-runtime"],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"pageID"}],b=[{kind:"Variable",name:"id",variableName:"pageID"}],c={alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"PagesCometPublicViewBarQuery",selections:[{alias:null,args:b,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[c],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"PagesCometPublicViewBarQuery",selections:[{alias:null,args:b,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]},params:{id:"3236609076431793",metadata:{relayPreloadable:!0},name:"PagesCometPublicViewBarQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a},null);
__d("PagesCometAdminPublishPageMutation.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"PageSetVisibilityResponsePayload",kind:"LinkedField",name:"page_set_visibility",plural:!1,selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_published",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"PagesCometAdminPublishPageMutation",selections:b,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"PagesCometAdminPublishPageMutation",selections:b},params:{id:"2652843611492727",metadata:{},name:"PagesCometAdminPublishPageMutation",operationKind:"mutation",text:null}}}();e.exports=a},null);
__d("CometMenuWithPagination.react",["fbt","CometInfiniteScrollTrigger.react","CometMenuBaseWithPopover.react","CometMenuItemBase.react","CometProgressIndicator.react","React","stylex"],function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(a,c){var d=a.children,e=a.hasMore,f=a.isLoading,i=a.loadMore,j=a.truncate;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","hasMore","isLoading","loadMore","truncate"]);return h.jsxs(b("CometMenuBaseWithPopover.react"),babelHelpers["extends"]({},a,{ref:c,truncate:j,children:[d,h.jsx(b("CometInfiniteScrollTrigger.react"),{hasMore:e,isLoading:f,onLoadMore:i,children:h.jsx("div",{className:"scb9dxdr sj5x9vvc dflh9lhu cxgpxx05 bp9cbjyn du4w35lb l9j0dhe7 hpfvmrgz tgvbjcpo kvgmc6g5 hcukyx3x cxmmr5t8 oygrvhab i1fnvgqd g5gj957u buofh1pr cbu4d94t j83agx80 rq0escxv auili1gw ow4ym5g4",children:h.jsx(b("CometProgressIndicator.react"),{})})},"CometInfiniteScrollTrigger"),!f&&e?h.jsx(b("CometMenuItemBase.react"),{onClick:i,primaryText:g._("Carregar mais")}):null]}))}e.exports=h.forwardRef(a)},null);
__d("PagesCometAdminPublishPageMutation",["ix","fbt","CometRelay","React","TetraIcon.react","cometPushToast","fbicon","PagesCometAdminPublishPageMutation.graphql"],function(a,b,c,d,e,f,g,h){"use strict";var i,j=b("CometRelay").commitMutation;b("CometRelay").graphql;var k=b("React"),l=b("cometPushToast").cometPushErrorToast,m=b("cometPushToast").cometPushToast,n=i!==void 0?i:i=b("PagesCometAdminPublishPageMutation.graphql");function a(a,c,d){j(a,{mutation:n,onCompleted:function(){var a=k.jsx(b("TetraIcon.react"),{color:"white",icon:b("fbicon")._(g("498147"),24)}),c=h._("Esta p\u00e1gina foi publicada. Agora voc\u00ea pode convidar seus amigos e compartilhar publica\u00e7\u00f5es publicamente.");m({icon:a,message:c})},onError:function(){var a=h._("N\u00e3o foi poss\u00edvel publicar esta P\u00e1gina. Tente novamente mais tarde.");l({message:a})},variables:{input:{page_id:c,publish_mode:d}}})}e.exports={pagesAdminPublishPageMutationAction:a}},null);
__d("PagesCometAdminPublishBanner.react",["ix","fbt","BaseRow.react","BaseRowItem.react","CometErrorBoundary.react","CometRelay","CometStickyHeader.react","CometTheme.react","PagesCometAdminPublishPageMutation","React","TetraButton.react","TetraIcon.react","TetraText.react","fbicon","gkx","stylex","PagesCometAdminPublishBannerQuery.graphql"],function(a,b,c,d,e,f,g,h){"use strict";var i,j;b("CometRelay").graphql;var k=b("CometRelay").useLazyLoadQuery,l=b("CometRelay").useRelayEnvironment,m=b("PagesCometAdminPublishPageMutation").pagesAdminPublishPageMutationAction,n=b("React"),o=i!==void 0?i:i=b("PagesCometAdminPublishBannerQuery.graphql"),p={description:{alignItems:"bp9cbjyn",display:"j83agx80"},icon:{marginEnd:"tvfksri0",marginStart:"h676nmdw"},root:{backgroundColor:"d6rk862h",end:"n7fi1qx3",paddingBottom:"f10w8fjw",paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a",paddingTop:"pybr56ya",position:"l9j0dhe7",start:"j9ispegn"},stickyHeader:{zIndex:"kavbgo14"}};function a(a){var c=a.variables;a=k(o,c);var d=l();a=(a=a.page)==null?void 0:a.is_published;if(a===!0)return null;var e=function(){m(d,c.pageID,"PUBLISHED")};return n.jsx(b("CometErrorBoundary.react"),{fallback:null,children:a===!1&&b("gkx")("1421670")&&n.jsx(b("CometStickyHeader.react"),{xstyle:p.stickyHeader,children:n.jsxs(b("BaseRow.react"),{xstyle:p.root,children:[n.jsx(b("BaseRowItem.react"),{expanding:!0,verticalAlign:"center",children:n.jsxs("div",{className:(j||(j=b("stylex")))(p.description),children:[n.jsx("div",{className:(j||(j=b("stylex")))(p.icon),children:n.jsx(b("TetraIcon.react"),{color:"white",icon:b("fbicon")._(g("511436"),24)})}),n.jsxs(b("TetraText.react"),{color:"white",type:"body3",children:[n.jsx(b("TetraText.react"),{color:"white",type:"bodyLink3",children:h._("Esta P\u00e1gina n\u00e3o est\u00e1 vis\u00edvel.")})," ",h._("Voc\u00ea poder\u00e1 public\u00e1-la quando estiver tudo pronto para as pessoas verem.")]})]})}),n.jsx(b("BaseRowItem.react"),{children:n.jsx(b("CometTheme.react"),{element:"div",theme:"invert",children:n.jsx(b("TetraButton.react"),{label:h._("Publicar P\u00e1gina"),onPress:e,padding:"wide",type:"primary"})})})]})})})}e.exports=a},null);
__d("PagesCometPublicViewBar.react",["ix","fbt","BaseRow.react","BaseRowItem.react","CometErrorBoundary.react","CometRelay","CometStickyHeader.react","React","TetraButton.react","TetraIcon.react","TetraText.react","fbicon","recoverableViolation","stylex","PagesCometPublicViewBarQuery.graphql"],function(a,b,c,d,e,f,g,h){"use strict";var i,j;b("CometRelay").graphql;var k=b("CometRelay").useLazyLoadQuery,l=b("React"),m=i!==void 0?i:i=b("PagesCometPublicViewBarQuery.graphql"),n={description:{alignItems:"bp9cbjyn",display:"j83agx80"},icon:{marginEnd:"tvfksri0",marginStart:"h676nmdw"},root:{backgroundColor:"d6rk862h",end:"n7fi1qx3",paddingBottom:"f10w8fjw",paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a",paddingTop:"pybr56ya",position:"pmk7jnqg",start:"j9ispegn"},stickyHeader:{zIndex:"kavbgo14"}};function a(a){a=a.variables;a=k(m,a);a=(a=a.page)==null?void 0:a.url;if(a==null){b("recoverableViolation")("Page url cannot be null","pages_consumer_experience_www");return null}return l.jsx(b("CometErrorBoundary.react"),{fallback:null,children:l.jsx(b("CometStickyHeader.react"),{xstyle:n.stickyHeader,children:l.jsxs(b("BaseRow.react"),{xstyle:n.root,children:[l.jsx(b("BaseRowItem.react"),{expanding:!0,verticalAlign:"center",children:l.jsxs("div",{className:(j||(j=b("stylex")))(n.description),children:[l.jsx("div",{className:j(n.icon),children:l.jsx(b("TetraIcon.react"),{color:"white",icon:b("fbicon")._(g("491228"),20)})}),l.jsx(b("TetraText.react"),{color:"white",type:"headline4",children:h._("\u00c9 assim que a sua P\u00e1gina aparece para um visitante.")})]})}),l.jsx(b("BaseRowItem.react"),{testid:void 0,children:l.jsx(b("TetraButton.react"),{label:h._("Sair de Ver como"),linkProps:{rel:["noopener","nofollow"],url:a},type:"secondary"})})]})})})}e.exports=a},null);