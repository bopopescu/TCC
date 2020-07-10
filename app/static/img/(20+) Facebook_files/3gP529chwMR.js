if (self.CavalryLogger) { CavalryLogger.start_js(["eMv4X"]); }

__d("CometFeedStoryVideoCTAScreenCallToAction_attachment.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryVideoCTAScreenCallToAction_attachment",selections:[{alias:"cta_screen_renderer",args:[{kind:"Literal",name:"supported",value:["StoryAttachmentLinkOpenCallToActionRenderer","StoryAttachmentLeadGenCallToActionRenderer","StoryAttachmentGetOfferCallToActionRenderer"]}],concreteType:null,kind:"LinkedField",name:"call_to_action_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryVideoCTAScreenCallToAction_attachment",fragmentName:"CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentLinkOpenCallToActionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryVideoCTAScreenCallToAction_attachment",fragmentName:"CometFeedStoryVideoCTAScreenLeadGenCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentLeadGenCallToActionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryVideoCTAScreenCallToAction_attachment",fragmentName:"CometFeedStoryVideoCTAScreenGetOfferCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentGetOfferCallToActionRenderer",abstractKey:null}],storageKey:'call_to_action_renderer(supported:["StoryAttachmentLinkOpenCallToActionRenderer","StoryAttachmentLeadGenCallToActionRenderer","StoryAttachmentGetOfferCallToActionRenderer"])'}],type:"StoryAttachment",abstractKey:null};e.exports=a},null);
__d("CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink$normalization.graphql",[],function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_link",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"link_display",storageKey:null},{alias:null,args:[{kind:"Literal",name:"scale",value:2}],concreteType:"Image",kind:"LinkedField",name:"link_video_endscreen_icon",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:"link_video_endscreen_icon(scale:2)"},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"LinkOpenActionLink",abstractKey:null}],storageKey:null}]};e.exports=a},null);
__d("CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_link",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"link_display",storageKey:null},{alias:null,args:[{kind:"Literal",name:"scale",value:2}],concreteType:"Image",kind:"LinkedField",name:"link_video_endscreen_icon",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:"link_video_endscreen_icon(scale:2)"},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"LinkOpenActionLink",abstractKey:null}],storageKey:null}],type:"StoryAttachmentLinkOpenCallToActionRenderer",abstractKey:null};e.exports=a},null);
__d("CometFeedStoryVideoCTAScreenOverlay_attachment.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryVideoCTAScreenOverlay_attachment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_links",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"link_style",storageKey:null}],type:"LinkOpenActionLink",abstractKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometFeedStoryVideoCTAScreenCallToAction_attachment"}],type:"StoryAttachment",abstractKey:null};e.exports=a},null);
__d("useCometFeedStoryVideoCTAScreenOverlay_attachment.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometFeedStoryVideoCTAScreenOverlay_attachment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_links",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometFeedStoryVideoCTAScreenOverlay_attachment"}],type:"StoryAttachment",abstractKey:null};e.exports=a},null);
__d("VideoPlayerCometFeedThumbnail_video.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerCometFeedThumbnail_video",selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a},null);
__d("VideoPlayerWithLiveVideoEndscreenAndChainingQuery.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"caller"},{defaultValue:null,kind:"LocalArgument",name:"entryPoint"},{defaultValue:null,kind:"LocalArgument",name:"first"},{defaultValue:null,kind:"LocalArgument",name:"videoID"}],b=[{kind:"Variable",name:"id",variableName:"videoID"}],c=[{kind:"Variable",name:"entry_point",variableName:"entryPoint"}],d=[{kind:"Variable",name:"caller",variableName:"caller"},{kind:"Variable",name:"first",variableName:"first"}],e={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},f={alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},h=[g],i={kind:"InlineFragment",selections:h,type:"Node",abstractKey:"__isNode"};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"VideoPlayerWithLiveVideoEndscreenAndChainingQuery",selections:[{alias:null,args:b,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[{alias:"live_video_endscreen_channel",args:c,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[{alias:null,args:d,concreteType:"VideoChannelFeedConnection",kind:"LinkedField",name:"video_channel_feed",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoChannelFeedEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"CometGamingVideoThumbnail_video"}],type:"Video",abstractKey:null}],storageKey:null}],storageKey:null}],type:"Story",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"VideoPlayerWithLiveVideoEndscreenAndChainingQuery",selections:[{alias:null,args:b,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[{alias:"live_video_endscreen_channel",args:c,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[e,{alias:null,args:d,concreteType:"VideoChannelFeedConnection",kind:"LinkedField",name:"video_channel_feed",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoChannelFeedEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[e,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[e,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},f,{alias:null,args:null,kind:"ScalarField",name:"live_viewer_count_read_only",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[e,g],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"breaking_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_live_streaming",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_premiere",storageKey:null},{alias:null,args:null,concreteType:"VideoThumbnail",kind:"LinkedField",name:"preferred_thumbnail",plural:!1,selections:[f,{alias:null,args:null,kind:"ScalarField",name:"image_preview_payload",storageKey:null},g],storageKey:null}],type:"Video",abstractKey:null},i,{kind:"InlineFragment",selections:h,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:h,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:h,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null}],type:"Story",abstractKey:null},i],storageKey:null}],storageKey:null}],storageKey:null},g],storageKey:null},g],storageKey:null}]},params:{id:"2984451141621034",metadata:{},name:"VideoPlayerWithLiveVideoEndscreenAndChainingQuery",operationKind:"query",text:null}}}();e.exports=a},null);
__d("VideoPlayerWithLiveVideoEndscreenAndChaining_video.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWithLiveVideoEndscreenAndChaining_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"VideoPlayerWithLiveVideoEndscreen_video"}],type:"Video",abstractKey:null};e.exports=a},null);
__d("VideoPlayerWithLiveVideoEndscreen_video.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWithLiveVideoEndscreen_video",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"live_end_text",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a},null);
__d("CometFeedStoryVideoCTAScreenCallToAction.react",["CometRelay","CometTrackingNodeProvider.react","React","CometFeedStoryVideoCTAScreenCallToAction_attachment.graphql"],function(a,b,c,d,e,f){"use strict";var g,h=b("CometRelay").MatchContainer;c=b("CometRelay").createSuspenseFragmentContainer_DEPRECATED;b("CometRelay").graphql;var i=b("React");function a(a){var c=a.attachment;a=babelHelpers.objectWithoutPropertiesLoose(a,["attachment"]);return c.cta_screen_renderer==null?null:i.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:186,children:i.jsx(h,{match:c.cta_screen_renderer,props:a})})}e.exports=c(a,{attachment:g!==void 0?g:g=b("CometFeedStoryVideoCTAScreenCallToAction_attachment.graphql")})},null);
__d("CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react",["BaseButtonOrLink_DEPRECATED.react","CometImage.react","React","TetraText.react","stylex"],function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={image:{height:"qypqp5cg",width:"q676j6op"},interactiveArea:{height:"datstx6m",position:"pmk7jnqg",start:"j9ispegn",width:"k4urcfbm"},root:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"btwxx1t3",position:"l9j0dhe7",textAlign:"hzawbc8m"},text:{lineHeight:"jiuqdcnw",paddingStart:"tw6a2znq",position:"l9j0dhe7",whiteSpace:"g0qnabr5"},textLinkDisplay:{marginTop:"aahdfvyu",maxWidth:"nlp0uwpm"}};function a(a){var c=a.iconImageUri,d=a.label,e=a.linkDisplay,f=a.title,j=a.triggerRef;a=babelHelpers.objectWithoutPropertiesLoose(a,["iconImageUri","label","linkDisplay","title","triggerRef"]);return h.jsxs("div",{className:(g||(g=b("stylex")))(i.root),children:[h.jsx(b("CometImage.react"),{alt:d,src:c,xstyle:i.image}),h.jsxs("div",{className:g(i.text),children:[h.jsx(b("TetraText.react"),{color:"white",type:"headlineEmphasized3",children:f}),e!=null?h.jsx("div",{className:(g||(g=b("stylex")))(i.textLinkDisplay),children:h.jsx(b("TetraText.react"),{color:"white",numberOfLines:1,type:"headline3",children:e})}):null]}),h.jsx(b("BaseButtonOrLink_DEPRECATED.react"),babelHelpers["extends"]({},a,{label:d,ref:j,xstyle:i.interactiveArea}))]})}e.exports=a},null);
__d("CometFeedStoryVideoCTAScreenLinkOpenCallToAction.react",["CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react","CometRelay","React","CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink.graphql"],function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");function a(a){var c,d;a=a.actionLink;a=h(g!==void 0?g:g=b("CometFeedStoryVideoCTAScreenLinkOpenCallToAction_actionLink.graphql"),a);a=a.action_link;if(a==null||a.url==null||a.title==null)return null;var e=a.url;c=(c=a.title)!=null?c:"";d=(d=a.link_display)!=null?d:"";a=(a=(a=a.link_video_endscreen_icon)==null?void 0:a.uri)!=null?a:"/images/calltoaction/videoendscreen/learnmore_40dp-2x.png";return i.jsx(b("CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react"),{href:e,iconImageUri:a,label:c,linkDisplay:d,rel:"nofollow",target:"_blank",title:c})}e.exports=a},null);
__d("CometFeedStoryVideoCTAScreenOverlay.react",["fbt","BaseButtonOrLink_DEPRECATED.react","CometFeedStoryVideoCTAScreenCallToAction.react","CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react","CometImage.react","CometRelay","CometTrackingNodeProvider.react","React","TetraText.react","VideoPlayerHooks","VideoPlayerInteractionOverlay.react","stylex","CometFeedStoryVideoCTAScreenOverlay_attachment.graphql"],function(a,b,c,d,e,f,g){"use strict";var h,i;b("CometRelay").graphql;var j=b("CometRelay").useFragment,k=b("React");c=b("React");var l=c.useState,m=b("VideoPlayerHooks").useController,n=b("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay,o=["BUTTON_WITH_TEXT_ONLY","ATTACHMENT_AND_ENDSCREEN","VIDEO_DR_STYLE"],p={image:{height:"jnigpg78",width:"odw8uiq3"},interactiveArea:{height:"datstx6m",position:"pmk7jnqg",start:"j9ispegn",width:"k4urcfbm"},root:{alignItems:"bp9cbjyn",bottom:"i09qtzwb",display:"j83agx80",flexDirection:"btwxx1t3",paddingTop:"l29c1vbm",paddingEnd:"gvs12r03",paddingBottom:"j7796vcc",paddingStart:"up7ckamt",position:"pmk7jnqg",start:"j9ispegn"},title:{lineHeight:"jiuqdcnw",paddingStart:"b3onmgus",verticalAlign:"pzggbiyp"}};function q(a){var c=a.iconImageUri,d=a.label,e=a.onClick;a=a.title;var f=l(!1),g=f[0],h=f[1];return k.jsxs("div",{className:(i||(i=b("stylex")))(p.root),onMouseLeave:function(){h(!1)},onMouseOver:function(){h(!0)},children:[k.jsx(b("CometImage.react"),{src:c,xstyle:p.image}),g?k.jsx("div",{className:(i||(i=b("stylex")))(p.title),children:k.jsx(b("TetraText.react"),{color:"white",type:"headlineEmphasized4",children:a})}):null,k.jsx(b("BaseButtonOrLink_DEPRECATED.react"),{label:d,onClick:e,xstyle:p.interactiveArea})]})}var r={content:{display:"j83agx80",flexDirection:"cbu4d94t",justifyContent:"taijpn5t",position:"l9j0dhe7"},root:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",alignItems:"bp9cbjyn",backgroundColor:"a1rjevna",display:"j83agx80",flexDirection:"cbu4d94t",justifyContent:"taijpn5t",transition:"jnzl11fr"},verticalSpacingBetweenButtons:{height:"jnigpg78"}};function a(a){var c,d=a.adClientToken,e=a.adID,f=a.attachment;a=a.ctaScreenOverlayType;f=j(h!==void 0?h:h=b("CometFeedStoryVideoCTAScreenOverlay_attachment.graphql"),f);var l=m();if(f==null)return null;c=(c=f.action_links)!=null?c:[];c=c[0];if(c!=null&&c.__typename==="LinkOpenActionLink"&&(c.link_style!=null&&o.indexOf(c.link_style)===-1))return null;c=k.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:186,children:k.jsx(b("CometFeedStoryVideoCTAScreenCallToAction.react"),{adClientToken:d,adID:e,attachment:f})});d=a==="pausescreen"?k.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:206,children:k.jsx(b("CometFeedStoryVideoCTAScreenOverlayCenterButtonOrLink.react"),{iconImageUri:"/images/video/play_circle_40dp-2x.png",label:g._("reproduzir"),onClick:function(){l.play("user_initiated")},title:g._("Retomar v\u00eddeo")})}):null;e=a==="endscreen"?k.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:188,children:k.jsx(q,{iconImageUri:"/images/video/replay_20dp-2x.png",label:g._("reproduzir"),onClick:function(){l.play("user_initiated")},title:g._("Assistir novamente")})}):null;return k.jsx(n,{children:k.jsxs("div",{className:(i||(i=b("stylex")))(r.root),children:[k.jsxs("div",{className:i(r.content),children:[d,d!=null&&c!=null?k.jsx("div",{className:(i||(i=b("stylex")))(r.verticalSpacingBetweenButtons)}):null,c]}),e]})})}e.exports=a},null);
__d("CometObserveChildrenRenderedAnyDOM.react",["React","useLayoutEffect_SAFE_FOR_SSR","useStable"],function(a,b,c,d,e,f){"use strict";c=b("React");d=b("React");var g=d.useEffect,h=d.useRef,i={attributes:!1,characterData:!0,childList:!0,subtree:!1};function a(a){var c=a.children,d=a.onChanged,e=h(d);b("useLayoutEffect_SAFE_FOR_SSR")(function(){e.current=d;return function(){e.current=null}},[d]);var f=h(!1),j=h(null),k=h(null);a=b("useStable")(function(){function a(){var a=e.current;if(a){var b,c=f.current;b=((b=k.current)==null?void 0:b.firstChild)!=null;f.current=b;b!==c&&a(b)}}function b(b){if(b!==k.current){k.current=b;var c=j.current;c&&(c.disconnect(),j.current=null);if(b==null)a();else{c=new MutationObserver(function(b){a()});j.current=c;c.observe(b,i);a()}}}return b});g(function(){return function(){j.current&&(j.current.disconnect(),j.current=null)}},[]);return c({containerElementRefCallback:a})}e.exports=c.memo(a)},null);
__d("VideoPlayerObserveChildrenRenderedAnyDOM.react",["CometObserveChildrenRenderedAnyDOM.react","React","stylex"],function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useCallback;function a(a){var c=a.children;a=a.onChanged;var d=h(function(a){a=a.containerElementRefCallback;return g.jsx("div",{className:"ttbfdpzt hwddc3l5 ggxiycxj hihg3u9x do00u71z",ref:a,children:c})},[c]);return g.jsx(b("CometObserveChildrenRenderedAnyDOM.react"),{onChanged:a,children:d})}e.exports=g.memo(a)},null);
__d("useCometFeedStoryVideoCTAScreenOverlay",["CometFeedStoryVideoCTAScreenOverlay.react","CometRelay","React","VideoPlayerHooks","VideoPlayerObserveChildrenRenderedAnyDOM.react","useCometFeedStoryVideoCTAScreenOverlay_attachment.graphql"],function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");c=b("React");var j=c.useEffect,k=c.useState,l=b("VideoPlayerHooks").useEnded,m=b("VideoPlayerHooks").useIsFullscreen,n=b("VideoPlayerHooks").usePaused,o=["LinkOpenActionLink","LeadGenActionLink"];function a(a){var c=a.adClientToken,d=a.adID;a=a.attachment;a=h(g!==void 0?g:g=b("useCometFeedStoryVideoCTAScreenOverlay_attachment.graphql"),a);var e=k(!1),f=e[0];e=e[1];var p=l(),q=m(),r=n(),s=k(!1),t=s[0],u=s[1];s=a==null?void 0:a.action_links.some(function(a){return o.includes(a.__typename)});j(function(){r||u(!0)},[r]);q=!q&&s===!0;s=q&&p?"endscreen":q&&t&&r?"pausescreen":null;p=a!=null&&s!=null?i.jsx(b("VideoPlayerObserveChildrenRenderedAnyDOM.react"),{onChanged:e,children:i.jsx(b("CometFeedStoryVideoCTAScreenOverlay.react"),{adClientToken:c,adID:d,attachment:a,ctaScreenOverlayType:s})}):null;return{ctaScreenOverlayElement:p,ctaScreenOverlayType:s,isRenderedCTAScreenOverlay:f}}e.exports=a},null);
__d("VideoPlayerCometFeedThumbnail.react",["CometRelay","React","VideoPlayerWithThumbnail.react","VideoPlayerCometFeedThumbnail_video.graphql"],function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");function a(a){a=a.video;a=h(g!==void 0?g:g=b("VideoPlayerCometFeedThumbnail_video.graphql"),a);a=a==null?void 0:(a=a.image)==null?void 0:a.uri;return a==null?null:i.jsx(b("VideoPlayerWithThumbnail.react"),{src:a})}e.exports=a},null);
__d("VideoPlayerWithLiveVideoEndscreen.react",["fbt","CometRelay","React","TetraTextPairing.react","VideoPlayerHooks","VideoPlayerInteractionOverlay.react","stylex","VideoPlayerWithLiveVideoEndscreen_video.graphql"],function(a,b,c,d,e,f,g){"use strict";var h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("React"),k=b("VideoPlayerHooks").useEnded,l=b("VideoPlayerHooks").useIsLive,m=b("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay;function a(a){var c=k(),d=l(),e=i(h!==void 0?h:h=b("VideoPlayerWithLiveVideoEndscreen_video.graphql"),a.video);if(!c||!d)return null;c=g._("Este v\u00eddeo ao vivo terminou.");return j.jsx(m,{children:j.jsx("div",{className:"taijpn5t cbu4d94t j83agx80 s8bbyrx9 bp9cbjyn kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",children:j.jsxs("div",{className:"d46ut3hm",children:[j.jsx(b("TetraTextPairing.react"),{body:e==null?void 0:(d=e.live_end_text)==null?void 0:d.text,bodyColor:"white",headline:c,headlineColor:"white",level:2,textAlign:"center"}),a.children]})})})}e.exports=a},null);
__d("VideoPlayerWithLiveVideoEndscreenAndChaining.react",["BaseGlimmer.react","CometGamingVideoThumbnail.react","CometPlaceholder.react","CometRelay","CometRow.react","CometRowItem.react","React","VideoPlayerHooks","VideoPlayerWithLiveVideoEndscreen.react","gkx","recoverableViolation","stylex","VideoPlayerWithLiveVideoEndscreenAndChainingQuery.graphql","VideoPlayerWithLiveVideoEndscreenAndChaining_video.graphql"],function(a,b,c,d,e,f){"use strict";var g,h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("CometRelay").useLazyLoadQuery,k=b("React"),l=b("VideoPlayerHooks").useEnded,m=b("VideoPlayerHooks").useIsLive,n=g!==void 0?g:g=b("VideoPlayerWithLiveVideoEndscreenAndChainingQuery.graphql");function a(a){var c=a.routeTarget;a=a.video;var d=l(),e=m();a=i(h!==void 0?h:h=b("VideoPlayerWithLiveVideoEndscreenAndChaining_video.graphql"),a);var f=a==null?void 0:a.id;if(!d||!e||f==null)return null;f===""&&b("recoverableViolation")("Live Video Endscreen with Chaining has an empty string videoID","comet_live_video");return b("gkx")("1224637")?k.jsx(b("VideoPlayerWithLiveVideoEndscreen.react"),{video:a}):k.jsx(b("VideoPlayerWithLiveVideoEndscreen.react"),{video:a,children:k.jsx(b("CometPlaceholder.react"),{fallback:k.jsx(p,{}),children:k.jsx(o,{routeTarget:c,videoID:f})})})}function o(a){var c=j(n,{caller:"LIVE_CHAINING",entryPoint:"LIVE_VIDEO_ENDSCREEN",first:3,videoID:a.videoID}),d=c==null?void 0:c.video;if(d==null){b("recoverableViolation")("Live Video Endscreen with Chaining has null video","comet_live_video");return null}c=(c==null?void 0:(d=c.video)==null?void 0:(c=d.live_video_endscreen_channel)==null?void 0:(d=c.video_channel_feed)==null?void 0:d.edges)||[];d=c.map(function(c,d){c=c==null?void 0:(c=c.node)==null?void 0:(c=c.attachments)==null?void 0:c[0].media;return c==null?null:k.jsx(b("CometRowItem.react"),{children:k.jsx(b("CometGamingVideoThumbnail.react"),{playerOrigin:"live_video_end_screen",playerSubOrigin:"tahoe",routeTarget:a.routeTarget,video:c},d)},d)}).filter(Boolean);return k.jsx(b("CometRow.react"),{align:"center",columns:3,paddingTop:16,children:d})}function p(){return k.jsxs(b("CometRow.react"),{align:"center",columns:3,paddingTop:16,children:[k.jsx(b("CometRowItem.react"),{children:k.jsx(b("BaseGlimmer.react"),{className:"oghtd16d kzx2olss aot14ch1 p86d2i9g beltcj47",index:0})},0),k.jsx(b("CometRowItem.react"),{children:k.jsx(b("BaseGlimmer.react"),{className:"oghtd16d kzx2olss aot14ch1 p86d2i9g beltcj47",index:0})},1),k.jsx(b("CometRowItem.react"),{children:k.jsx(b("BaseGlimmer.react"),{className:"oghtd16d kzx2olss aot14ch1 p86d2i9g beltcj47",index:0})},2)]})}e.exports=a},null);