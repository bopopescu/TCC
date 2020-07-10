if (self.CavalryLogger) { CavalryLogger.start_js(["9IeSg"]); }

__d("CometWarningScreenOverlayBackground_data.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometWarningScreenOverlayBackground_data",selections:[{alias:null,args:null,kind:"ScalarField",name:"cover_style",storageKey:null}],type:"OverlayWarningScreenViewModel",abstractKey:null};e.exports=a},null);
__d("CometWarningScreenOverlayBottomButton_data.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometWarningScreenOverlayBottomButton_data",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"label",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],storageKey:null}],type:"WarningScreenAction",abstractKey:null};e.exports=a},null);
__d("CometWarningScreenOverlayCenterButton_data.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometWarningScreenOverlayCenterButton_data",selections:[{alias:null,args:null,kind:"ScalarField",name:"context",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"label",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],type:"WarningScreenAction",abstractKey:null};e.exports=a},null);
__d("CometWarningScreenOverlayContent_data.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometWarningScreenOverlayContent_data",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"subtitle",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"WarningScreenAction",kind:"LinkedField",name:"center_actions",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayCenterButton_data"}],storageKey:null},{alias:null,args:null,concreteType:"WarningScreenAction",kind:"LinkedField",name:"bottom_actions",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayBottomButton_data"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayIcon_data"}],type:"OverlayWarningScreenViewModel",abstractKey:null}}();e.exports=a},null);
__d("CometWarningScreenOverlayCovered_data.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometWarningScreenOverlayCovered_data",selections:[{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayBackground_data"},{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayContent_data"}],type:"OverlayWarningScreenViewModel",abstractKey:null};e.exports=a},null);
__d("CometWarningScreenOverlayIcon_data.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometWarningScreenOverlayIcon_data",selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"icon",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null}],type:"OverlayWarningScreenViewModel",abstractKey:null};e.exports=a},null);
__d("CometWarningScreenOverlay_data.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometWarningScreenOverlay_data",selections:[{alias:null,args:null,kind:"ScalarField",name:"top_objectionable_category",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometWarningScreenOverlayCovered_data"}],type:"OverlayWarningScreenViewModel",abstractKey:null};e.exports=a},null);
__d("CometWarningScreenMisinformationDialogQuery$Parameters",[],function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3309543662391157",metadata:{relayPreloadable:!0},name:"CometWarningScreenMisinformationDialogQuery",operationKind:"query",text:null}};e.exports=a},null);
__d("CixWarningScreensFalcoEvent",["FalcoLoggerInternal","getSamplingPolicyConfig_DO_NOT_USE"],function(a,b,c,d,e,f){"use strict";a=b("getSamplingPolicyConfig_DO_NOT_USE")("falco","cix_warning_screens");c=b("FalcoLoggerInternal").create(a);e.exports=c},null);
__d("WarningScreenType",[],function(a,b,c,d,e,f){e.exports=Object.freeze({GRAPHIC:"Violence and Gore",OBJECTIONABLE:"Sexual",HATE:"Hate",PROFANITY:"Profanity",POLITICAL:"Politically Charged",CHILD_ABUSE_NON_SEXUAL:"Child Abuse (non-sexual)",SENSITIVE:"Sensitive",CRUEL:"Cruel",MATURE_ONLY_14_AND_OVER:"Mature Only 14 And Over",ANIMAL_VIOLENCE:"Animal Violence",SENSITIVE_TEXT:"Sensitive Text",FALSE_NEWS:"False News",FALSE_HEADLINE_NEWS:"False Headline News",MISLEADING_NEWS:"Misleading News",GOVERNMENT_CORRECTION:"Government Correction",CENSUS_MISINFO:"Census Misinfo",CENSUS_BORDERLINE:"Census Borderline",COVID_ELECTION_BORDERLINE:"Covd Election Borderline",WIDELY_DEBUNKED_HOAX_COVID:"Widely Debunked Hoax Covid",GENERIC_INFORM_TREATMENT:"Generic Inform Treatment"})},null);
__d("CometWarningScreenClientLogger",["CixWarningScreensFalcoEvent","WarningScreenType"],function(a,b,c,d,e,f){"use strict";function a(a,c,d,e,f,h,i,j,k){var l=c==null?void 0:c.split(":").filter(function(a){return a!==""}).pop();b("CixWarningScreensFalcoEvent").log(function(){return{action:a,content_id_raw:l,endpoint:d,event:e,generic_inform_treatment_case:k,story_ent_identifier_graphql_id:f,story_render_location:h,surface:i,top_warning_screen_category:g(j)}})}function g(a){if(a==null)return null;a=a;return b("WarningScreenType")[a]}f.logWarningScreenEvent=a},null);
__d("CometWarningScreenOverlayBackground.react",["CometBlurredBackgroundImage.react","CometRelay","React","stylex","CometWarningScreenOverlayBackground_data.graphql"],function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");function a(a){var c=h(g!==void 0?g:g=b("CometWarningScreenOverlayBackground_data.graphql"),a.data);c=c.cover_style;a=a.mediaUri;switch(c){case"PLAIN":return i.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb d6rk862h"});case"GRADIENT":return i.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb njqljl3s"});case"REVERSE_GRADIENT":return i.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb qpkeyiwh"});case"BLUR":return i.jsxs("div",{className:"j102wcjv kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb",children:[i.jsx(b("CometBlurredBackgroundImage.react"),{src:a}),i.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb d6rk862h"})]});case"NONE":default:return i.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg hzruof5a n7fi1qx3 i09qtzwb"})}}e.exports=a},null);
__d("CometWarningScreenOverlayBottomButton.react",["CometPressable.react","CometRelay","CometTextWithEntitiesRelay.react","React","TetraText.react","stylex","useCometUFIVideoPlayerStateAndController","CometWarningScreenOverlayBottomButton_data.graphql"],function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");function a(a){var c=b("useCometUFIVideoPlayerStateAndController")(),d=h(g!==void 0?g:g=b("CometWarningScreenOverlayBottomButton_data.graphql"),a.data);d=d.label;return d==null?null:i.jsxs(b("CometPressable.react"),{display:"inline",onPress:function(){c&&c.controller.play("warning_screen_cover"),a.logAction(),a.action()},testid:void 0,children:[i.jsx("div",{className:"sjgh65i0 ay7djpcl pwoa4pd7"}),i.jsx(b("TetraText.react"),{color:"white",type:"bodyLink3",children:i.jsx(b("CometTextWithEntitiesRelay.react"),{textWithEntities:d})})]})}e.exports=a},null);
__d("CometWarningScreenMisinformationDialogEntryPoint.entrypoint",["CometWarningScreenMisinformationDialogQuery$Parameters","JSResource"],function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){a=a.storyID;return{queries:{queryReference:{parameters:b("CometWarningScreenMisinformationDialogQuery$Parameters"),variables:{misinfoTreatmentType:"OVERLAY",storyID:a}}}}},root:b("JSResource")("CometWarningScreenMisinformationDialog.react").__setRef("CometWarningScreenMisinformationDialogEntryPoint.entrypoint")};e.exports=a},null);
__d("CometWarningScreenOverlayCenterButton.react",["CometRelay","CometTextWithEntitiesRelay.react","CometWarningScreenMisinformationDialogEntryPoint.entrypoint","React","TetraButton.react","recoverableViolation","stylex","useCometEntryPointDialog","CometWarningScreenOverlayCenterButton_data.graphql"],function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");function a(a){var c=h(g!==void 0?g:g=b("CometWarningScreenOverlayCenterButton_data.graphql"),a.data),d=b("useCometEntryPointDialog")(b("CometWarningScreenMisinformationDialogEntryPoint.entrypoint"),{storyID:a.storyID||""}),e=d[0];d=d[1];var f=c.label,j=c.type;if(f==null||j==null){b("recoverableViolation")("Empty data passed","comet_warning_screens");return null}if(j==="OPEN_MISINFO_SEE_WHY_DIALOG"&&a.storyID==null){b("recoverableViolation")("No story ID for misinfo","comet_warning_screens");return null}d={onPress:function(){a.logAction("OPEN_MISINFO_SEE_WHY_DIALOG"),e({})},ref:d};c={linkProps:{target:"_blank",url:c.context},onPress:function(){a.logAction("HELP_CENTER_REDIRECT")}};return i.jsx("div",{className:"oqcyycmt mrt03zmi discj3wi b3onmgus ph5uu5jm q9uorilb",children:i.jsx(b("TetraButton.react"),babelHelpers["extends"]({label:i.jsx(b("CometTextWithEntitiesRelay.react"),{textWithEntities:f}),size:"medium",type:"overlay"},j==="OPEN_MISINFO_SEE_WHY_DIALOG"?d:c))})}e.exports=a},null);
__d("CometWarningScreenOverlayIcon.react",["CometRelay","IconSource","React","TetraIcon.react","coerceRelayImage","unrecoverableViolation","CometWarningScreenOverlayIcon_data.graphql"],function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");function a(a){a=h(g!==void 0?g:g=b("CometWarningScreenOverlayIcon_data.graphql"),a.data);if(a.icon==null)throw b("unrecoverableViolation")("Icon missing for Warning Screen","comet_frx");a=new(b("IconSource"))("FB",b("coerceRelayImage")(a.icon),24);return i.jsx(b("TetraIcon.react"),{color:"white",icon:a,size:24})}e.exports=a},null);
__d("useWarningScreenLayout",["React"],function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useLayoutEffect,h=c.useRef,i=c.useState;function a(){var a=i("DEFAULT"),b=a[0],c=a[1],d=h(null),e=h(null),f=h(null);g(function(){if(d.current==null||e.current==null||f.current==null)return;d.current!=null&&e.current!=null&&f.current!=null&&(d.current.clientHeight-e.current.clientHeight-f.current.clientHeight<=0&&c("SMALL"))},[d,e,f]);return[b,{bottomContainerRef:f,contentContainerRef:e,overlayContainerRef:d}]}e.exports=a},null);
__d("CometWarningScreenOverlayContent.react",["fbt","CometFeedAttachmentOverlayContext","CometPressable.react","CometRelay","CometTextWithEntitiesRelay.react","CometWarningScreenOverlayBottomButton.react","CometWarningScreenOverlayCenterButton.react","CometWarningScreenOverlayIcon.react","React","TetraText.react","TetraTextPairing.react","stylex","useCometRouterDispatcher","useWarningScreenLayout","CometWarningScreenOverlayContent_data.graphql"],function(a,b,c,d,e,f,g){"use strict";var h,i,j=b("CometFeedAttachmentOverlayContext").useShowOverlay;b("CometRelay").graphql;var k=b("CometRelay").useFragment,l=b("React"),m={bottomContainer:{flexGrow:"kb5gq1qc",paddingTop:"discj3wi",textAlign:"oqcyycmt",width:"k4urcfbm"},content:{alignItems:"bp9cbjyn",display:"j83agx80",flexGrow:"buofh1pr",justifyContent:"taijpn5t"},intercepter:{bottom:"i09qtzwb",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",":active":{transform:"tm8avpzi"}},overlayContainer:{bottom:"i09qtzwb",display:"j83agx80",end:"n7fi1qx3",flexDirection:"cbu4d94t",overflowX:"hihg3u9x",overflowY:"ggxiycxj",paddingTop:"discj3wi",paddingEnd:"hv4rvrfc",paddingBottom:"ihqw7lf3",paddingStart:"dati1w0a",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",zIndex:"j102wcjv"},overlayContainerSmall:{paddingTop:"jb3vyjys",paddingEnd:"rz4wbd8a",paddingBottom:"qt6c0cv9",paddingStart:"a8nywdso",pointerEvents:"hzruof5a"}};function a(a){var c=k(h!==void 0?h:h=b("CometWarningScreenOverlayContent_data.graphql"),a.data),d=a.storyID,e=a.logAction,f=c.title,n=c.subtitle,o=j(),p=a.alwaysShowDetails===!0,q=a.alwaysUseSmallLayout===!0,r=b("useCometRouterDispatcher")(),s=a.url,t=b("useWarningScreenLayout")(),u=t[0];t=t[1];var v=t.bottomContainerRef,w=t.contentContainerRef;t=t.overlayContainerRef;if(q||u==="SMALL"&&!p){q=s!=null?l.jsx(b("CometPressable.react"),{"aria-label":g._("Cover,sensitive content in album"),display:"block",hideHoverOverlay:!0,onPress:function(a){r!=null&&(e("OPEN_CONTENT_VIEWER"),r.go(s,{}),a.preventDefault())},xstyle:m.intercepter}):null;return l.jsxs("div",{children:[l.jsx("div",{className:(i||(i=b("stylex")))(m.overlayContainer,m.overlayContainerSmall),ref:t,children:l.jsx("div",{className:i(m.content),ref:w,children:l.jsx(b("CometWarningScreenOverlayIcon.react"),{data:c})})}),q]})}return l.jsxs("div",{className:(i||(i=b("stylex")))(m.overlayContainer),ref:t,children:[l.jsx("div",{className:i(m.content),ref:w,children:l.jsx(b("TetraTextPairing.react"),{body:l.jsxs(l.Fragment,{children:[n!=null?l.jsx(b("TetraText.react"),{color:"white",type:"body3",children:l.jsx(b("CometTextWithEntitiesRelay.react"),{textWithEntities:n})}):null,c.center_actions[0]!=null?l.jsx("div",{children:l.jsx(b("CometWarningScreenOverlayCenterButton.react"),{data:c.center_actions[0],logAction:a.logAction,storyID:d})}):null]}),bodyColor:"white",headline:f!=null?l.jsx(b("CometTextWithEntitiesRelay.react"),{textWithEntities:f}):null,headlineColor:"white",level:3,meta:l.jsx(b("CometWarningScreenOverlayIcon.react"),{data:c}),metaLocation:"above",textAlign:"center"})}),c.bottom_actions[0]!=null?l.jsx("div",{className:(i||(i=b("stylex")))(m.bottomContainer),ref:v,children:l.jsx(b("CometWarningScreenOverlayBottomButton.react"),{action:function(){return o(!1)},data:c.bottom_actions[0],logAction:function(){return e("SHOW_CONTENT")}})}):null]})}e.exports=a},null);
__d("CometWarningScreenOverlayCovered.react",["CometRelay","CometWarningScreenOverlayBackground.react","CometWarningScreenOverlayContent.react","React","CometWarningScreenOverlayCovered_data.graphql"],function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");function a(a){var c=h(g!==void 0?g:g=b("CometWarningScreenOverlayCovered_data.graphql"),a.data);return i.jsxs(i.Fragment,{children:[i.jsx(b("CometWarningScreenOverlayBackground.react"),{data:c,mediaUri:a.mediaUri}),i.jsx(b("CometWarningScreenOverlayContent.react"),{alwaysShowDetails:a.alwaysShowDetails,alwaysUseSmallLayout:a.alwaysUseSmallLayout,data:c,logAction:a.logAction,storyID:a.storyID,url:a.url})]})}e.exports=a},null);
__d("CometWarningScreenOverlayUncovered.react",["ix","fbt","CometFeedAttachmentOverlayContext","CometRouteRenderType","React","TetraCircleButton.react","fbicon","stylex","unrecoverableViolation","useCometRouterState","useCometUFIVideoPlayerStateAndController"],function(a,b,c,d,e,f,g,h){"use strict";var i,j=b("CometFeedAttachmentOverlayContext").useShowOverlay,k=b("CometRouteRenderType").useIsPushView,l=b("React"),m={showOverlayButton:{end:"cypi58rs",position:"pmk7jnqg",top:"dn56xbwz"}};function a(a){var c=b("useCometUFIVideoPlayerStateAndController")(),d=j(),e=b("useCometRouterState")();if(e==null)throw b("unrecoverableViolation")("Cannot render comet app with no route provider","comet_infra");e=k();e=e&&a.xstyle!=null?a.xstyle:m.showOverlayButton;return l.jsx("div",{className:(i||(i=b("stylex")))(e),children:l.jsx(b("TetraCircleButton.react"),{icon:b("fbicon")._(g("511436"),24),label:h._("Show overlay"),onPress:function(){c&&c.controller.pause("warning_screen_cover"),d(!0),a.logAction("HIDE_CONTENT")},size:40,testid:void 0,type:"dark-overlay"})})}e.exports=a},null);
__d("CometWarningScreenOverlay.react",["CometFeedAttachmentOverlayContext","CometRelay","CometStoryRenderLocationContext.react","CometTimeSpentNavigation","CometWarningScreenClientLogger","CometWarningScreenOverlayCovered.react","CometWarningScreenOverlayUncovered.react","React","CometWarningScreenOverlay_data.graphql"],function(a,b,c,d,e,f){"use strict";var g,h=b("CometFeedAttachmentOverlayContext").useIsOverlayShown;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("CometWarningScreenClientLogger").logWarningScreenEvent,k=b("React");c=b("React");var l=c.useContext,m=c.useLayoutEffect;function a(a){var c=i(g!==void 0?g:g=b("CometWarningScreenOverlay_data.graphql"),a.data),d=a.storyID,e=a.contentID,f=a.mediaUri,n=a.surface,o=a.url,p=c.top_objectionable_category,q=h(),r=l(b("CometStoryRenderLocationContext.react")),s=b("CometTimeSpentNavigation").getPathInfo(),t=s?s.name:"";m(function(){j(null,e,t,"mounted",d,r,n,p)},[e,t,d,r,n,p]);s=function(a){j(a,e,t,"action",d,r,n,p)};if(p==null)return null;if(q||(a==null?void 0:a.alwaysShowCoverComponent)===!0)return k.jsx(b("CometWarningScreenOverlayCovered.react"),{alwaysShowDetails:a.alwaysShowDetails,alwaysUseSmallLayout:a.alwaysUseSmallLayout,data:c,logAction:s,mediaUri:f,storyID:d,url:o});else return k.jsx(b("CometWarningScreenOverlayUncovered.react"),{logAction:s,xstyle:a.xstyle})}e.exports=a},null);
__d("StoryRenderLocation",[],function(a,b,c,d,e,f){e.exports=Object.freeze({ACCOUNT_STATUS:"account_status",ACELA:"acela",ACTION_EXPERIENCE:"action_experience",ACTIVITY_LOG:"activity_log",ACTOR_EXPERIENCE_APPEALS:"actor_experience_appeals",ACTOR_GATEWAY:"actor_gateway",ADMIN_FEED:"admin_feed",ADS_PREVIEW:"ads_preview",ADS_TRANSPARENCY_SHOW_ADS:"ads_transparency_show_ads",AGGREGATED_NOTIFICATIONS_PERMALINK:"aggregated_notifications_permalink",AGORA_BREAKING_NEWS:"agora_breaking_news",AGORA_DEEP_DIVE:"agora_deep_dive",AGORA_FEED:"agora_feed",AGORA_FUNDRAISERS_FEED:"agora_fundraisers_feed",AGORA_NEIGHBORHOOD_HELP_MY_POSTS_FEED:"agora_neighborhood_help_my_posts_feed",AGORA_NEIGHRBORHOOD_HELP_FEED:"agora_neighrborhood_help_feed",AGORA_PAGES_FEED:"agora_pages_feed",AGORA_SCHOOL_FEED:"agora_school_feed",AGORA_WEATHER_FEED:"agora_weather_feed",AGORA_YOUTH_HIGH_SCHOOL_DIGEST:"agora_youth_high_school_digest",ALBUM_FEED:"album_feed",APP_FEED:"app_feed",APPENDABLE_PROMPT:"appendable_prompt",ARTICLE_CONTEXT:"article_context",ASSET3D_PHOTO_FULLSCREEN:"asset3d_photo_fullscreen",ATHENS_FEED:"athens_feed",B2C_BOOKMARK:"b2c_bookmark",BLENDED_SEARCH_RESULTS:"blended_search",BREAKING_NEWS_COMPOSER:"breaking_news_composer",BREAKUP_VIEW_POSTS_FEED:"breakup_view_posts_feed",BRIEF_ACTIVITY_LOG:"brief_activity_log",BUSINESS_FEED:"business_feed",BUY_AND_SELL:"buy_and_sell",CANDIDATE_PACKET_REVIEW:"candidate_packet_review",CENTRA_INVESTIGATION_FEED:"centra_investigation_feed",CM_FEED_VIEW:"cm_feed_view",CM_ORGANIC_CONTENT_PREVIEW_UFI:"cm_organic_content_preview_ufi",COLLEGE_HOMEPAGE:"college_community_homepage",COMET_MEDIA_VIEWER:"comet_media_viewer",COMMERCE_BOOKMARK:"commerce_bookmark",COMMUNITY_VIEW:"community_view",COMPOSER_PREVIEW:"composer_preview",COMPOUNDEYE_PII_STRIPPED:"compoundeye_pii_stripped",CONTEXTUAL_PROFILE_FEED:"contextual_profile_feed",CONVERSATION_NUB:"conversation_nub",CORONAVIRUS_COMMUNITY_HELP_FEED:"coronavirus_community_help_feed",CORONAVIRUS_HUB_FEED:"coronavirus_hub_feed",COVER_FEED:"cover_feed",COVER_IMMERSIVE:"cover_immersive",CREATOR_APP_INSPIRATION_FEED:"inspiration_feed",CRISIS_FEED:"crisis_feed",CROWDSOURCING_CARD:"crowdsourcing_card",CRS_FEED:"crs_feed",CURATED_COLLECTION_PAGE:"curated_collection_page",CUSTOM_FEED_TEST:"custom_feed_test",DISABLE_WARNING_SCREEN_CHECK:"disable_warning_screen_check",EDIT_HISTORY:"edit_history",END_OF_FEED_UNIT_OVERLAY:"end_of_feed_unit_overlay",EVENT:"event",EVENT_PENDING_QUEUE:"event_pending_queue",EXPLORE_FEED:"explore_feed",EXPLORE_FEED_DEEP_DIVE:"explore_feed_deep_dive",FACEBOOK_360:"facebook_360",FAN_SUBMISSION_TOPIC:"fan_submission_topic",FB_SHOPPING_MALL:"fb_shopping_mall",FB_SHORTS_NOTIFICATION:"fb_shorts_notification",FB_SHORTS_PROFILE:"fb_shorts_profile",FB_SHORTS_VIDEO_DEEP_DIVE:"fb_shorts_video_deep_dive",FB_STORIES:"fb_stories",FBR:"fbr",FEED_IMMERSIVE:"feed_immersive",FEED_MOBILE:"feed_mobile",FILE_VIEWER:"file_viewer",FOX_FEED:"fox_feed",FOX_PERMALINK:"fox_permalink",FOX_RECOMMENDATIONS_FEED:"fox_recommendation_feed",FUNDRAISER_FOR_STORY_MORE_INFO_PAGE:"fundraiser_for_story_more_info_page",FUNDRAISER_PAGE:"fundraiser_page",GAME_HUB_FEED:"game_hub_feed",GAMEROOM_FEED:"gameroom_feed",GAMES_FEED:"games_feed",GAMETIME_HIGHLIGHTS:"gametime_highlights",GAMING_FEED:"gaming_feed",GAMING_STATIC_UNIT:"gaming_static_unit",GAMING_VIDEO_STREAMER_HUB:"gaming_video_streamer_hub",GOV_DIGEST:"gov_digest",GRAMMAR_SEARCH:"grammar_search",GROUP:"group",GROUP_ACTIVITY_LOG:"group_activity_log",GROUP_ADMIN_TO_MEMBER_FEEDBACK:"group_admin_to_member_feedback",GROUP_ALERTED_QUEUE:"group_alerted_queue",GROUP_BIO:"group_bio",GROUP_COMMUNITY_HELP_FEED:"group_community_help_feed",GROUP_DRAFT_QUEUE:"group_draft_queue",GROUP_FLAGGED_QUEUE:"group_flagged_queue",GROUP_GRID_ISLAND:"group_grid_island",GROUP_HOISTED:"group_hoisted",GROUP_IMMERSIVE:"group_immersive",GROUP_MALL:"group_mall",GROUP_PENDING_QUEUE:"group_pending_queue",GROUP_PERMALINK:"group_permalink",GROUP_QUALITY:"group_quality",GROUP_REPORT_QUEUE:"group_report_queue",GROUP_SCHEDULED_PENDING_QUEUE:"group_scheduled_pending_queue",GROUP_SCHEDULED_QUEUE:"group_scheduled_queue",GROUP_UNITS:"group_units",GROUP_UNITS_PREVIEW:"group_units_preview",GROUPS_GSYM_SEE_MORE:"groups_gsym_see_more",GROUPS_LANDING:"groups_landing",GROUPS_MY_POSTS:"groups_my_posts",GROUPS_SAVED_POSTS:"groups_saved_posts",GROUPS_TAB:"groups_tab",HIGHLIGHTS_UNIT:"highlights_unit",HIRING_METRICS_DASHBOARD:"hiring_metrics_dashboard",HOME_BUBBLE:"home_bubble",HOMEPAGE_STREAM:"homepage_stream",IFR_DEEP_DIVE:"ifr_deep_dive",INSANT_ARTICLE:"instant_article",INTEGRITY_CONTEXT:"integrity_context",JOBS_MULTI_GROUP_BROWSER:"jobs_multi_group_browser",JOBS_SINGLE_GROUP_BROWSER:"jobs_single_group_browser",JOBS_TAB:"jobs_tab",LINEAR_CHANNEL:"linear_channel",LIVE_PRODUCER:"live_producer",LIVING_ROOM_REPLAY:"living_room_replay",LOCAL_ALERTS_DIGEST:"local_alerts_digest",LOCAL_COMMUNITY_FEED:"local_community_feed",LOCAL_COMMUNITY_PROFILE:"local_community_profile",LOCAL_COMMUNITY_PROMPTS_FEED:"local_community_prompts_feed",LOCAL_SEARCH_RESULTS_PAGE:"local_search_results_page",LOCAL_SERP:"local_serp",LOCAL_SURFACE:"local_surface",LOGGED_OUT_FEED:"logged_out_feed",LUMOS:"lumos",MARKETPLACE:"marketplace",MARKETPLACE_B2C_REVIEW:"marketplace_b2c_review",MARKETPLACE_B2C_REVIEW_RESPONSE:"marketplace_b2c_review_response",MARKETPLACE_BSG_PROFILE:"marketplace_bsg_profile",MARKETPLACE_LOCAL_SHOP_PAGE_POSTS:"marketplace_local_shop_page_posts",MARKETPLACE_MEGAMALL:"marketplace_megamall",MARKETPLACE_MESSENGER_REPORT_BUYER:"marketplace_messenger_report_buyer",MARKETPLACE_MESSENGER_REPORT_SELLER:"marketplace_messenger_report_seller",MARKETPLACE_PDP:"marketplace_pdp",MARKETPLACE_PDP_SELLER:"marketplace_pdp_seller",MARKETPLACE_PROFILE:"marketplace_profile",MARKETPLACE_PROFILE_BUYER:"marketplace_profile_buyer",MARKETPLACE_PROFILE_SELLER:"marketplace_profile_seller",MARKETPLACE_RATING_CONFIRMATION:"marketplace_rating_confirmation",MARKETPLACE_RATING_CONFIRMATION_BUYER:"marketplace_rating_confirmation_buyer",MARKETPLACE_RATING_CONFIRMATION_SELLER:"marketplace_rating_confirmation_seller",MARKETPLACE_RATING_FLOW:"marketplace_rating_flow",MARKETPLACE_RATING_FLOW_BUYER:"marketplace_rating_flow_buyer",MARKETPLACE_RATING_FLOW_SELLER:"marketplace_rating_flow_seller",MARKETPLACE_SHOP_PDP:"marketplace_shop_pdp",MARKETPLACE_SHOP_PDP_SELLER:"marketplace_shop_pdp_seller",MARKETPLACE_THREAD:"marketplace_thread",MARKETPLACE_THREAD_BUYER:"marketplace_thread_buyer",MARKETPLACE_THREAD_SELLER:"marketplace_thread_seller",MARKETPLACE_VEHICLE_ENTITY_PAGE_QUESTION_AND_ANSWER:"marketplace_vehicle_entity_page_question_and_answer",MARKETPLACE_VEHICLE_ENTITY_PAGE_REVIEW:"marketplace_vehicle_entity_page_review",MARKETPLACE_YOU_FEED:"marketplace_you_feed",MEDIA_MANAGER_HOME:"media_manager_home",MEDIA_MANAGER_POST_INSIGHTS:"media_manager_post_insights",MESSAGE_THREAD:"message_thread",MESSENGER_AD:"messenger_ad",MISINFORMATION_FACT_CHECKER_APP:"misinformation_fact_checker_app",MONTHLY_ACTIVITY_DIGEST_FEED:"monthly_activity_digest_feed",MUSIC_HOME:"music_home",NATIVE_TEMPLATES:"native_templates",NEWS_FEED_DEEP_DIVE:"news_feed_deep_dive",NEWS_OCT_DRAFT_POST_PREVIEW:"news_oct_draft_post_preview",NEWS_STORYLINE_FEED:"news_storyline_feed",NEWS_STORYLINE_NEWSFEED_QP:"news_storyline_newsfeed_qp",NEWS_TAB:"news_tab",NEWSSTAND:"newsstand",NEWSSTAND_PERMALINK:"newsstand_permalink",NEXT_TOOL:"next_tool",OCULUS_HUB_FEED:"oculus_hub_feed",OFFERS_TAB:"offers_tab",OPENGRAPH_DIALOG:"opengraph_dialog",ORGANIC_CONTENT_PREVIEW:"organic_content_preview",ORION_VIDEO_PLAYER:"orion_video_player",PAGE_INBOX:"page_inbox",PAGE_INBOX_POST_VIEW:"page_inbox_post_view",PAGE_LIVE_VIDEO_MODULE:"page_live_video_module",PAGE_QUALITY:"page_quality",PAGE_RECOMMENDATIONS_TAB_FEED:"page_recommendation_tab_feed",PAGE_RECOMMENDATIONS_TOOL:"page_recommendations_tool",PAGE_SURFACE_RECOMMENDATIONS:"page_surface_recommendations",PAGES_COMMUNITY_TAB:"pages_community_tab",PAGES_FEED:"pages_feed",PAGES_LIVE_TAB:"pages_live_tab",PARTNER_ASSESSMENT:"partner_assessment",PAYCHECK_PROTECTION_PROGRAM:"paycheck_protection_program",PERMALINK:"permalink",PERMALINK_CHAINING:"permalink_chaining",PERMALINK_IMMERSIVE:"permalink_immersive",PLACE_FEED:"place_feed",POLITICAL_POST_FEED:"political_post_feed",PRESENCE_FEED:"presence_feed",PROCUREMENT_REQUEST:"procurement_request",PRODUCT_DETAILS:"product_details",PRODUCT_QUESTION:"product_question",PROFESSIONAL_BUYER_PROGRAM:"professional_buyer_program",PROFILE_FEATURED:"profile_featured",PROFILE_FRAME_DISCOVERY:"profile_frame_discovery",PROJECT_NEO:"project_neo",PUBLIC_CONVERSATION_PROFILE:"public_conversation_profile",PYI:"pyi",RACIAL_JUSTICE_HUB_FEED:"racial_justice_hub_feed",RAINBOW_EXPLORE:"rainbow_explore",REACTION_OVERLAY:"reaction_overlay",RECOMMENDATIONS_DASHBOARD:"recommendations_dashboard",RESHARES_DIALOG:"reshares_dialog",REVIEWS_FEED:"reviews_feed",SAVE_DISCOVERY_COLLECTIONS_EMBEDDED_VIEW:"save_discovery_collections_embedded_view",SAVE_DISCOVERY_IN_COLLECTIONS:"save_discovery_in_collections",SAVE_DISCOVERY_INTEREST_BASED:"save_discovery_interest_based",SAVE_DISCOVERY_PIVOTS:"save_discovery_pivot",SAVE_DISCOVERY_TAB:"save_discovery_tab",SEARCH:"search",SEARCH_RESULTS_PAGE:"search_results_page",SEARCH_VOYAGER:"search_voyager",SEEN_CONTENT:"seen_content",SERVICES_LOCAL_BUSINESS_DISCOVERY:"services_local_business_discovery",SHARING_SPACES:"sharing_spaces",SHORT_FORM_VIDEO_CHAINING:"short_form_video_chaining",SIDE_FEED:"side_feed",SIGNAL_APP:"signal_app",SNAPTU_FEED:"snaptu_feed",SNAPTU_GROUPS_FEED:"snaptu_groups_feed",SNAPTU_TIMELINE:"snaptu_timeline",SNAPTU_VIDEO_HOME:"snaptu_video_home",SOCIAL_BALLOT:"social_ballot",SONG_OBJECT:"song_object",SRT:"srt",SRT_PROCUREMENT:"srt_procurement",STONEHENGE_CONSUMPTION:"stonehenge_consumption",SUMMARY:"summary",SUPPLIER_CONNECT:"supplier_connect",SUPPORT_INBOX:"support_inbox",SURVEY_GALLERY:"survey_gallery",THROWBACK_COMPOSER:"throwback_composer",TIMELINE:"timeline",TIMELINE_CONTEXT:"timeline_context",TIMELINE_ENTSTREAM:"timeline_entstream",TIMELINE_IMMERSIVE:"timeline_immersive",TOP_GROUP_POSTS_TOOL:"top_group_posts_tool",TOP_LIVE_VIDEOS:"top_live_videos",TOPIC_ENTITY_PAGE:"topic_entity_page",TOPIC_FEED:"topic_feed",TOWN_HALL:"town_hall",TRENDING_HOVERCARD:"trending_hovercard",TRENDING_ISSUES:"trending_issues",UNSPECIFIED:"unspecified",UX_RESEARCH_FEEDS_TOOL:"ux_research_feeds_tool",VIDEO_CHANNEL:"video_channel",VIDEO_HOME:"video_home",VIDEO_HOME_CHANNEL:"video_home_channel",VIDEO_HOME_FEED:"video_home_feed",VIDEO_INSTREAM:"video_instream",WOODHENGE_EXCLUSIVE_FEED:"woodhenge_exclusive_feed",WORK_CHAT_STORY_PREVIEW:"work_chat_story_preview",WORKPLACE_ADMIN_REPORTED_CONTENT:"workplace_admin_reported_content",WORKPLACE_APPROVALS:"workplace_approvals",WORKPLACE_DRAFTED_FOR_OTHERS:"workplace_drafted_for_others",WORKPLACE_DRAFTED_FOR_YOU:"workplace_drafted_for_you",WORKPLACE_EMAIL_CAMPAIGN:"workplace_email_campaign",WORKPLACE_ESM:"workplace_esm",WORKPLACE_FOLLOWEES_FEED:"workplace_followees_feed",WORKPLACE_HELPDESK:"workplace_helpdesk",WORKPLACE_HOVERCARD:"workplace_hovercard",WORKPLACE_KNOWLEDGE:"workplace_knowledge",WORKPLACE_LEARNING_UNIT:"workplace_learning_unit",WORKPLACE_NEWSFEED_PROMOTED_POST:"workplace_newsfeed_promoted_post",WORKPLACE_PLUGIN:"workplace_plugin",WORKPLACE_SHORTCUTS_FEED:"workplace_shortcuts_feed",WORKPLACE_TEAM_FEED:"workplace_team_feed"})},null);