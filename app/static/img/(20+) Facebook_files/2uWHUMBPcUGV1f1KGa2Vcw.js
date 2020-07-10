if (self.CavalryLogger) { CavalryLogger.start_js(["mxJkj"]); }

__d("FriendingCometMutualFriendsSocialContext_user.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{defaultValue:16,kind:"LocalArgument",name:"iconSize"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"FriendingCometMutualFriendsSocialContext_user",selections:[a,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"social_context_top_mutual_friends",plural:!0,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:null,args:[{kind:"Variable",name:"height",variableName:"iconSize"},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Variable",name:"width",variableName:"iconSize"}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null}],type:"User",abstractKey:null}}();e.exports=a},null);
__d("FriendingCometFriendRequestCancelMutation.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null},e=[{kind:"Literal",name:"action_type",value:"FRIEND"},{kind:"Literal",name:"render_location",value:"WWW_COMET_PROFILE"}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometFriendRequestCancelMutation",selections:[{alias:null,args:b,concreteType:"FriendRequestCancelResponsePayload",kind:"LinkedField",name:"friend_request_cancel",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"cancelled_friend_requestee",plural:!1,selections:[c,d,{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileActionMutationUtils_action"}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometFriendRequestCancelMutation",selections:[{alias:null,args:b,concreteType:"FriendRequestCancelResponsePayload",kind:"LinkedField",name:"friend_request_cancel",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"cancelled_friend_requestee",plural:!1,selections:[c,d,{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"TypeDiscriminator",abstractKey:"__isProfileAction"},{alias:null,args:[{kind:"Literal",name:"icon_color",value:"fds-black"},{kind:"Literal",name:"icon_size",value:"16"},{kind:"Literal",name:"icon_variant",value:"filled"},{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},c,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_optimistic_update",storageKey:null}]}],storageKey:'profile_action(action_type:"FRIEND",render_location:"WWW_COMET_PROFILE")'}],storageKey:null}],storageKey:null}]},params:{id:"3226051994092510",metadata:{},name:"FriendingCometFriendRequestCancelMutation",operationKind:"mutation",text:null}}}();e.exports=a},null);
__d("FriendingCometPYMKBlacklistSuggestionMutation.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"PymkSuggestionBlacklistResponsePayload",kind:"LinkedField",name:"pymk_suggestion_blacklist",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"blacklisted_user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FriendingCometPYMKBlacklistSuggestionMutation",selections:b,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FriendingCometPYMKBlacklistSuggestionMutation",selections:b},params:{id:"2882558265094181",metadata:{},name:"FriendingCometPYMKBlacklistSuggestionMutation",operationKind:"mutation",text:null}}}();e.exports=a},null);
__d("FriendingCometMutualFriendsSocialContext.react",["CometRelay","FriendingCometMutualFriendsText.react","React","TetraOverlappingFacepileUnstyled.react","actorHovercardContainer","stylex","FriendingCometMutualFriendsSocialContext_user.graphql"],function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");function a(a){var c=h(g!==void 0?g:g=b("FriendingCometMutualFriendsSocialContext_user.graphql"),a.user),d=a.iconSize,e=a.socialContextText,f=c.id;c=c.social_context_top_mutual_friends;if(f==null)return null;c=c.map(function(a){var c=a.id,d=a.name,e=a.url;a=(a=a.profile_picture)==null?void 0:a.uri;return c!=null&&d!=null&&e!=null&&a!=null?{alt:d,containerComponent:b("actorHovercardContainer")(c),linkProps:{url:e},source:{uri:a}}:null}).filter(Boolean);var j=c&&c.length>0;return e!==""?i.jsx("div",{className:"k4urcfbm ggysqto6 j83agx80",children:j?i.jsx("div",{className:"ph5uu5jm",children:i.jsx(b("TetraOverlappingFacepileUnstyled.react"),{isTextInline:!0,items:c,size:d,text:i.jsx(b("FriendingCometMutualFriendsText.react"),{id:f,shouldAlignToFacepile:j,socialContextText:e,textType:a.textType,truncateContextText:a.truncateContextText})})}):i.jsx(b("FriendingCometMutualFriendsText.react"),{id:f,shouldAlignToFacepile:j,socialContextText:e,textType:a.textType,truncateContextText:a.truncateContextText})}):null}e.exports=a},null);
__d("FriendingCometFriendRequestCancelMutation",["CometRelay","ProfileActionMutationUtils","WebPixelRatio","FriendingCometFriendRequestCancelMutation.graphql"],function(a,b,c,d,e,f){"use strict";var g,h=b("CometRelay").commitMutation;b("CometRelay").graphql;var i=g!==void 0?g:g=b("FriendingCometFriendRequestCancelMutation.graphql");function a(a,c,d,e){var f=b("ProfileActionMutationUtils").getOptimisticActionForFriendshipStatus("CAN_REQUEST");return h(a,{mutation:i,onError:e,optimisticResponse:{friend_request_cancel:{cancelled_friend_requestee:{friendship_status:"CAN_REQUEST",id:c,profile_action:babelHelpers["extends"]({},f,{id:b("ProfileActionMutationUtils").getFakeProfileActionID(c,1)})}}},variables:{input:{cancelled_friend_requestee_id:c,source:d},scale:b("WebPixelRatio").get()}})}e.exports={commit:a}},null);
__d("FriendingCometPYMKBlacklistSuggestionMutation",["CometRelay","FriendingCometPYMKBlacklistSuggestionMutation.graphql"],function(a,b,c,d,e,f){"use strict";var g,h=b("CometRelay").ConnectionHandler,i=b("CometRelay").commitMutation;b("CometRelay").graphql;var j=g!==void 0?g:g=b("FriendingCometPYMKBlacklistSuggestionMutation.graphql");function a(a,b,c,d,e,f,g){var k=function(a,e){e===void 0&&(e=d);a=c!=null?a.get(c):null;if(!a)return;var g=f!=null?{location:f}:null;a=h.getConnection(a,b,g);if(!a)return;h.deleteNode(a,e)};return i(a,{mutation:j,onError:g,optimisticUpdater:k,updater:function(a){var b=a.getRootField("pymk_suggestion_blacklist");if(!b)return;b=b.getLinkedRecord("blacklisted_user");if(!b)return;b=b.getValue("id");b=typeof b==="string"?""+b:null;b!=null&&k(a,b)},variables:{input:{people_you_may_know_id:d,people_you_may_know_location:e}}})}e.exports={commit:a}},null);
__d("useFriendingCometFriendshipStatus_user.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useFriendingCometFriendshipStatus_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"friendship_status",storageKey:null}],type:"User",abstractKey:null};e.exports=a},null);
__d("CometDialogCloseCallbackContext.react",["React","gkx"],function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");d=c.createContext;var h=c.useCallback,i=c.useContext,j=d(null),k=function(){return i(j)};function a(a){var c=a.children,d=a.onClose,e=k();a=h(function(){d!=null&&d(),!b("gkx")("1545497")&&e!=null&&e()},[d,e]);return g.jsx(j.Provider,{value:a,children:c})}e.exports={CometDialogCloseCallbackContext:j,CometDialogCloseCallbackContextProvider:a,useCometDialogCloseCallbackContext:k}},null);
__d("useFriendingCometFriendshipStatus",["CometDialogCloseCallbackContext.react","CometRelay","FriendingCometFriendRequestCancelMutation","FriendingCometFriendRequestConfirmMutation","FriendingCometFriendRequestSendMutation","React","emptyFunction","recoverableViolation","unrecoverableViolation","useMWChatOpenTabForUser","useShouldShowMessagingEntrypoint","useFriendingCometFriendshipStatus_user.graphql"],function(a,b,c,d,e,f){"use strict";var g,h=b("CometDialogCloseCallbackContext.react").useCometDialogCloseCallbackContext;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("CometRelay").useRelayEnvironment;c=b("React");var k=c.useCallback;function a(a,c){var d=j(),e=h(),f=b("useShouldShowMessagingEntrypoint")("CHAT"),l=b("useMWChatOpenTabForUser")(c.messengerWebEntryPoint),m=l[0];l[1];l=i(g!==void 0?g:g=b("useFriendingCometFriendshipStatus_user.graphql"),a);var n=l==null?void 0:l.id;a=l==null?void 0:l.friendship_status;if(n==null)throw b("unrecoverableViolation")("Unknown user","growth_friending");l=k(function(){b("FriendingCometFriendRequestSendMutation").commit(d,n,c.makeSource,b("emptyFunction"))},[d,n,c.makeSource]);var o=k(function(){b("FriendingCometFriendRequestCancelMutation").commit(d,n,c.cancelSource,b("emptyFunction"))},[c.cancelSource,d,n]),p=k(function(){b("FriendingCometFriendRequestConfirmMutation").commit(d,n,c.responseSource,void 0,b("emptyFunction"))},[d,n,c.responseSource]),q=k(function(){n!=null&&(m(n),e&&e())},[n,e,m]);if(a==null)return[b("recoverableViolation")("Unknown friendship status","growth_friending"),null];switch(a){case"ARE_FRIENDS":return[a,f?q:null];case"CAN_REQUEST":return[a,l];case"INCOMING_REQUEST":return[a,p];case"OUTGOING_REQUEST":return[a,o];case"CANNOT_REQUEST":default:return["CANNOT_REQUEST",null]}}e.exports=a},null);
__d("FriendingCometFriendshipInteractionButtonsConfig",["ix","fbt","fbicon"],function(a,b,c,d,e,f,g,h){"use strict";a={getButtonProps:function(a,c){if(c==null)return null;switch(a){case"ARE_FRIENDS":return{icon:b("fbicon")._(g("505616"),16),label:h._("Enviar mensagem"),onPress:c,testid:"friends_button"};case"CAN_REQUEST":return{icon:b("fbicon")._(g("497883"),16),label:h._("Adicionar"),onPress:c,testid:"add_button"};case"INCOMING_REQUEST":return{icon:b("fbicon")._(g("497883"),16),label:h._("Confirmar solicita\u00e7\u00e3o de amizade"),onPress:c,testid:"confirm_button"};case"OUTGOING_REQUEST":return{icon:b("fbicon")._(g("664704"),16),label:h._("Cancelar solicita\u00e7\u00e3o"),onPress:c,testid:"cancel_request_button"};case"CANNOT_REQUEST":default:return null}}};e.exports=a},null);
__d("GroupsCometMembersPageSectionSeeAllButtonFooter.react",["fbt","CometRow.react","CometRowItem.react","React","TetraButton.react","stylex"],function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(a){a=a.url;return h.jsx("div",{className:"kkf49tns cgat1ltu",children:h.jsx(b("CometRow.react"),{children:h.jsx(b("CometRowItem.react"),{expanding:!0,children:h.jsx(b("TetraButton.react"),{label:g._("Ver tudo"),linkProps:{url:a},type:"secondary"})})})})}e.exports=a},null);
__d("useCometPageComposerDialog",["fbt","CometCardedDialog.react","FeedComposerCometGlimmer.react","JSResourceForInteraction","React","emptyFunction","useCometLazyDialog"],function(a,b,c,d,e,f,g){"use strict";var h=b("React");c=b("React");var i=c.useCallback,j=b("JSResourceForInteraction")("PagesCometComposerDialog.react",{"class":"responsive",name:"Page Composer Dialog Open",oncall:"pages_consumer_experience_www"}).__setRef("useCometPageComposerDialog"),k={withCloseButton:!0};function l(a){return h.jsx("div",{children:h.jsx(b("CometCardedDialog.react"),babelHelpers["extends"]({size:"content",title:a.title},a,{children:h.jsx(b("FeedComposerCometGlimmer.react"),{})}))})}function a(a){var c=a.actorID,d=a.composerEntryPointRef,e=a.composerType,f=a.onBeforeClose,m=a.onSave,n=a.pageID,o=a.title,p=o===void 0?g._("Criar publica\u00e7\u00e3o"):o,q=(o=a.onClose)!=null?o:b("emptyFunction");a=b("useCometLazyDialog")(j,function(){return h.jsx(l,babelHelpers["extends"]({title:p},k))});var r=a[0];o=a[1];a=a[2];return[i(function(a){a=a||{};var b=a.beginningViewState,g=a.feelingTaggerVisibleOnLoad,h=a.friendTaggerVisibleOnLoad,i=a.localAlertTaggerVisibleOnLoad;a=a.locationTaggerVisibleOnLoad;r(babelHelpers["extends"]({actorID:c,beginningViewState:b,composerEntryPointRef:d,composerType:e,feelingTaggerVisibleOnLoad:g,friendTaggerVisibleOnLoad:h,localAlertTaggerVisibleOnLoad:i,locationTaggerVisibleOnLoad:a,onBeforeClose:f,onClose:q,onSave:m,pageID:n,title:p},k),q)},[c,d,e,f,q,m,n,r,p]),o,a]}e.exports=a},null);