if (self.CavalryLogger) { CavalryLogger.start_js(["p3MK4"]); }

__d("useMaybeNUX_nux.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useMaybeNUX_nux",selections:[{alias:null,args:null,kind:"ScalarField",name:"nux_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_show",storageKey:null}],type:"DefaultNUX",abstractKey:null};e.exports=a},null);
__d("RoomsJoinDialogGroupDisclaimer_fbts.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoomsJoinDialogGroupDisclaimer_fbts",selections:[{alias:"link_access_meta_for_group_member_and_people_with_link",args:[{kind:"Literal",name:"type",value:"LINK_ACCESS_META_FOR_GROUP_MEMBER_AND_PEOPLE_WITH_LINK"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:'joinable_video_chats_string(type:"LINK_ACCESS_META_FOR_GROUP_MEMBER_AND_PEOPLE_WITH_LINK")'}],type:"JoinableVideoChatsViewerFields",abstractKey:null};e.exports=a},null);
__d("RoomsJoinDialogGroupDisclaimer_room.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoomsJoinDialogGroupDisclaimer_room",selections:[{alias:null,args:null,kind:"ScalarField",name:"should_allow_guests",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"lock_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"link_surface",storageKey:null}],type:"MessengerCallInviteLink",abstractKey:null};e.exports=a},null);
__d("RoomsJoinInterestedListItem_user.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"RoomsJoinInterestedListItem_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:160},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:160}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],type:"User",abstractKey:null};e.exports=a},null);
__d("RoomsJoinInterestedList_fbts.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoomsJoinInterestedList_fbts",selections:[{alias:"interested_header",args:[{kind:"Literal",name:"type",value:"INTERESTED_LIST_HEADER"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:a,storageKey:'joinable_video_chats_string(type:"INTERESTED_LIST_HEADER")'},{alias:"non_friends_hint_text",args:[{kind:"Literal",name:"type",value:"INTERESTED_NON_FRIENDS_HINT_TEXT"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:a,storageKey:'joinable_video_chats_string(type:"INTERESTED_NON_FRIENDS_HINT_TEXT")'}],type:"JoinableVideoChatsViewerFields",abstractKey:null}}();e.exports=a},null);
__d("RoomsJoinInterestedList_room.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoomsJoinInterestedList_room",selections:[{alias:null,args:[{kind:"Literal",name:"query_type",value:"FRIEND_INCLUDING_SELF"}],concreteType:"MessengerCallInviteLinkInterestedParticipantsConnection",kind:"LinkedField",name:"interested_participants",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"RoomsJoinInterestedListItem_user"}],type:"User",abstractKey:null}],storageKey:null}],storageKey:'interested_participants(query_type:"FRIEND_INCLUDING_SELF")'},{alias:null,args:null,kind:"ScalarField",name:"interested_participants_non_friend_count",storageKey:null}],type:"MessengerCallInviteLink",abstractKey:null};e.exports=a},null);
__d("RoomsJoinParticipantsListItem_actor.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"RoomsJoinParticipantsListItem_actor",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:160},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:160}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],type:"Actor",abstractKey:"__isActor"};e.exports=a},null);
__d("RoomsJoinParticipantsListItem_fbts.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoomsJoinParticipantsListItem_fbts",selections:[{alias:"member_label",args:[{kind:"Literal",name:"type",value:"MEMBER_LABEL"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:a,storageKey:'joinable_video_chats_string(type:"MEMBER_LABEL")'},{alias:"guest_label",args:[{kind:"Literal",name:"type",value:"GUEST_LABEL"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:a,storageKey:'joinable_video_chats_string(type:"GUEST_LABEL")'}],type:"JoinableVideoChatsViewerFields",abstractKey:null}}();e.exports=a},null);
__d("RoomsJoinParticipantsListItem_group.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoomsJoinParticipantsListItem_group",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_group_member",storageKey:null}],type:"MessengerCallToCallParticipantsEdge",abstractKey:null};e.exports=a},null);
__d("RoomsJoinParticipantsListItem_room.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoomsJoinParticipantsListItem_room",selections:[{alias:null,args:null,kind:"ScalarField",name:"link_surface",storageKey:null}],type:"MessengerCallInviteLink",abstractKey:null};e.exports=a},null);
__d("RoomsJoinParticipantsList_fbts.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoomsJoinParticipantsList_fbts",selections:[{alias:"anonymous_label",args:[{kind:"Literal",name:"type",value:"ANONYMOUS_LABEL"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:a,storageKey:'joinable_video_chats_string(type:"ANONYMOUS_LABEL")'},{alias:"room_participants_header",args:[{kind:"Literal",name:"type",value:"ROOM_PARTICIPANTS_HEADER"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:a,storageKey:'joinable_video_chats_string(type:"ROOM_PARTICIPANTS_HEADER")'},{alias:"room_participants_group_only_header",args:[{kind:"Literal",name:"type",value:"ROOM_PARTICIPANTS_GROUP_ONLY_HEADER"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:a,storageKey:'joinable_video_chats_string(type:"ROOM_PARTICIPANTS_GROUP_ONLY_HEADER")'},{args:null,kind:"FragmentSpread",name:"RoomsJoinParticipantsListItem_fbts"}],type:"JoinableVideoChatsViewerFields",abstractKey:null}}();e.exports=a},null);
__d("RoomsJoinParticipantsList_room.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"RoomsJoinParticipantsListItem_actor"}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RoomsJoinParticipantsList_room",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"link_owner",plural:!1,selections:[{kind:"InlineFragment",selections:a,type:"User",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:"MessengerCallRoom",kind:"LinkedField",name:"messenger_call_room",plural:!1,selections:[{alias:null,args:null,concreteType:"MessengerCall",kind:"LinkedField",name:"maybe_stale_active_call",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"should_fetch_only_in_call_participants",value:!0}],concreteType:"MessengerCallToCallParticipantsConnection",kind:"LinkedField",name:"call_participants",plural:!1,selections:[{alias:null,args:null,concreteType:"MessengerCallToCallParticipantsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:a,storageKey:null},{args:null,kind:"FragmentSpread",name:"RoomsJoinParticipantsListItem_group"}],storageKey:null}],storageKey:"call_participants(should_fetch_only_in_call_participants:true)"}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_owner_in_call",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"active_call_participant_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"link_surface",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_allow_guests",storageKey:null},{args:null,kind:"FragmentSpread",name:"RoomsJoinParticipantsListItem_room"},{args:null,kind:"FragmentSpread",name:"useRoomsIsViewerOwner_room"}],type:"MessengerCallInviteLink",abstractKey:null}}();e.exports=a},null);
__d("useRoomsJoinDialogDisclaimers_fbts.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useRoomsJoinDialogDisclaimers_fbts",selections:[{alias:"joiner_first_time_disclaimer",args:[{kind:"Literal",name:"type",value:"JOINER_FIRST_TIME_DISCLAIMER"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:a,storageKey:'joinable_video_chats_string(type:"JOINER_FIRST_TIME_DISCLAIMER")'},{alias:"joiner_self_first_time_disclaimer",args:[{kind:"Literal",name:"type",value:"JOINER_SELF_FIRST_TIME_DISCLAIMER"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:a,storageKey:'joinable_video_chats_string(type:"JOINER_SELF_FIRST_TIME_DISCLAIMER")'},{alias:"groups_room_first_time_disclaimer",args:[{kind:"Literal",name:"type",value:"GROUPS_ROOM_FIRST_TIME_DISCLAIMER"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:a,storageKey:'joinable_video_chats_string(type:"GROUPS_ROOM_FIRST_TIME_DISCLAIMER")'},{alias:"join_room_above_button_help_text",args:[{kind:"Literal",name:"type",value:"HELP_TEXT_ABOVE_JOIN_BUTTON"}],concreteType:"TextWithEntities",kind:"LinkedField",name:"joinable_video_chats_string",plural:!1,selections:a,storageKey:'joinable_video_chats_string(type:"HELP_TEXT_ABOVE_JOIN_BUTTON")'}],type:"JoinableVideoChatsViewerFields",abstractKey:null}}();e.exports=a},null);
__d("useRoomsJoinDialogDisclaimers_room.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useRoomsJoinDialogDisclaimers_room",selections:[{alias:null,args:null,kind:"ScalarField",name:"should_allow_guests",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"expected_call_start_time",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"link_owner",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"short_name",storageKey:null}],type:"User",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"link_surface",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"lock_status",storageKey:null},{args:null,kind:"FragmentSpread",name:"useRoomsIsViewerOwner_room"}],type:"MessengerCallInviteLink",abstractKey:null};e.exports=a},null);
__d("useRoomsJoinDialogDisclaimers_root.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useRoomsJoinDialogDisclaimers_root",selections:[{alias:null,args:[{kind:"Literal",name:"nux_id",value:7896}],concreteType:null,kind:"LinkedField",name:"nux",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useMaybeNUX_nux"}],storageKey:"nux(nux_id:7896)"},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"account_user",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useRoomsIsViewerOwner_user"}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null};e.exports=a},null);
__d("useMaybeNUX",["CometDismissFBNuxMutation","CometLogImpressionFBNuxMutation","CometRelay","React","RelayHooks","emptyFunction","useMaybeNUX_nux.graphql"],function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;c=b("React");var h=c.useCallback,i=c.useEffect,j=b("RelayHooks").useFragment,k=b("RelayHooks").useRelayEnvironment;function a(a){var c=k();a=j(g!==void 0?g:g=b("useMaybeNUX_nux.graphql"),a);var d=a==null?void 0:a.nux_id,e=(a==null?void 0:a.should_show)===!0&&d!=null;i(function(){d!=null&&e&&b("CometLogImpressionFBNuxMutation").commit(c,d)},[c,d,e]);var f=h(function(){d!=null&&b("CometDismissFBNuxMutation").commit(c,d)},[c,d]);return a!=null?[e,f]:[null,b("emptyFunction")]}e.exports=a},null);
__d("RoomsNotAvailableErrorStateContent.react",["NullStateGeneral","React","TetraNullState.react"],function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.body;a=a.title;return g.jsx(b("TetraNullState.react"),{body:(c=c)!=null?c:"This may be because of a technical error we're working to fix.",headline:(c=a)!=null?c:"Rooms Isn't Available Right Now",icon:b("NullStateGeneral")})}e.exports=a},null);
__d("RoomsNotAvailableErrorStateDialog.react",["CometCardedDialog.react","React","RoomsNotAvailableErrorStateContent.react"],function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.onClose;a=babelHelpers.objectWithoutPropertiesLoose(a,["onClose"]);return g.jsx(b("CometCardedDialog.react"),{onClose:c,withCloseButton:!0,children:g.jsx(b("RoomsNotAvailableErrorStateContent.react"),babelHelpers["extends"]({},a))})}e.exports=a},null);
__d("RoomsDialogSeparator.react",["React","stylex"],function(a,b,c,d,e,f){"use strict";var g=b("React");function a(){return g.jsx("div",{className:"aov4n071 ozuftl9m tvfksri0 bi6gxh9e s1tcr66n",role:"separator"})}e.exports=a},null);
__d("MessengerCallInviteLinkLockStatus",[],function(a,b,c,d,e,f){e.exports=Object.freeze({OPEN:"open",LOCKED_BY_OWNER:"locked_by_owner",LOCKED_BY_OWNER_DISCONNECT:"locked_by_owner_disconnect"})},null);
__d("RoomsJoinDialogGroupDisclaimer.react",["CometRelay","CometRow.react","CometRowItem.react","MessengerCallInviteLinkLockStatus","MessengerCallLinkSurface","React","TetraText.react","getJSEnumSafe","RoomsJoinDialogGroupDisclaimer_room.graphql","RoomsJoinDialogGroupDisclaimer_fbts.graphql"],function(a,b,c,d,e,f){"use strict";var g,h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("React");function a(a){var c=a.fbtsRef;a=a.roomRef;a=i(g!==void 0?g:g=b("RoomsJoinDialogGroupDisclaimer_room.graphql"),a);c=i(h!==void 0?h:h=b("RoomsJoinDialogGroupDisclaimer_fbts.graphql"),c);var d=b("getJSEnumSafe")(b("MessengerCallLinkSurface"),a==null?void 0:a.link_surface);d=d===3;var e=b("getJSEnumSafe")(b("MessengerCallInviteLinkLockStatus"),a.lock_status)==="locked_by_owner";a=a.should_allow_guests;return!d||a!==!0||e?null:j.jsx(b("CometRow.react"),{paddingTop:8,children:j.jsx(b("CometRowItem.react"),{expanding:!0,children:j.jsx(b("TetraText.react"),{align:"center",color:"secondary",type:"body4",children:c==null?void 0:(d=c.link_access_meta_for_group_member_and_people_with_link)==null?void 0:d.text})})})}e.exports=a},null);
__d("RoomsJoinInterestedListItem.react",["CometRelay","React","TetraListCell.react","recoverableViolation","RoomsJoinInterestedListItem_user.graphql"],function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");function a(a){a=a.userRef;a=h(g!==void 0?g:g=b("RoomsJoinInterestedListItem_user.graphql"),a);var c=a.name;a=(a=a.profile_picture)==null?void 0:a.uri;return c==null||a==null?b("recoverableViolation")("RoomsJoinInterestedListItem name and profile picture URI should not be null","comet_rooms"):i.jsx(b("TetraListCell.react"),{addOnPrimary:{alt:c,shape:"circle",size:40,source:{uri:a},type:"profile-photo"},headline:c,headlineLineLimit:1,level:4,paddingHorizontal:0})}e.exports=a},null);
__d("RoomsJoinInterestedList.react",["ix","fbt","CometFlexibleGrid.react","CometRelay","CometRow.react","CometRowItem.react","React","RoomsCreateConsts","RoomsJoinInterestedListItem.react","TetraListCell.react","TetraText.react","fbicon","stylex","RoomsJoinInterestedList_room.graphql","RoomsJoinInterestedList_fbts.graphql"],function(a,b,c,d,e,f,g,h){"use strict";var i,j;b("CometRelay").graphql;var k=b("CometRelay").useFragment,l=b("React"),m=b("RoomsCreateConsts").WIDTH;function a(a){var c,d,e=a.fbtsRef;a=a.roomRef;a=k(i!==void 0?i:i=b("RoomsJoinInterestedList_room.graphql"),a);e=k(j!==void 0?j:j=b("RoomsJoinInterestedList_fbts.graphql"),e);c=[].concat((c=(c=a.interested_participants)==null?void 0:c.nodes)!=null?c:[]);a=(a=a.interested_participants_non_friend_count)!=null?a:0;if(c.length===0&&a===0)return null;d=(d=(d=e.interested_header)==null?void 0:d.text)!=null?d:"Interested";var f=h._({"*":"{numPeople} outras pessoas","_1":"{numPeople} outra pessoa"},[h._param("numPeople",a),h._plural(a)]),n=h._({"*":"{number} pessoas","_1":"1 pessoa"},[h._plural(a,"number")]);e=(e=(e=e.non_friends_hint_text)==null?void 0:e.text)!=null?e:"People you're not friends with can also discover this room.";return l.jsxs(l.Fragment,{children:[l.jsx(b("CometRow.react"),{paddingTop:8,children:l.jsx(b("CometRowItem.react"),{children:l.jsx(b("TetraText.react"),{align:"auto",type:"headlineEmphasized3",children:d})})}),l.jsx(b("CometRow.react"),{paddingTop:8,children:l.jsx(b("CometRowItem.react"),{children:l.jsx("div",{className:"fop5sh7t o22cckgh",children:l.jsxs(b("CometFlexibleGrid.react"),{columnMaxWidth:m,columnMinWidth:m/2-8,justify:"start",minItems:c.length+(a>0?1:0),children:[c.map(function(a){return l.jsx(b("RoomsJoinInterestedListItem.react"),{userRef:a},a.id)}),a>0&&l.jsx(b("TetraListCell.react"),{addOnPrimary:{icon:b("fbicon")._(g("487558"),20),size:40,type:"contained-icon"},headline:c.length>0?f:n,headlineLineLimit:2,level:4,meta:c.length>0?e:null,paddingHorizontal:0})]})})})})]})}e.exports=a},null);
__d("RoomsJoinParticipantsListItem.react",["CometRelay","React","TetraListCell.react","unrecoverableViolation","RoomsJoinParticipantsListItem_actor.graphql","RoomsJoinParticipantsListItem_fbts.graphql","RoomsJoinParticipantsListItem_room.graphql","RoomsJoinParticipantsListItem_group.graphql"],function(a,b,c,d,e,f){"use strict";var g,h,i,j;b("CometRelay").graphql;var k=b("CometRelay").useFragment,l=b("React");function a(a){var c,d=a.fbtsRef,e=a.group,f=a.participant;a=a.room;f=k(g!==void 0?g:g=b("RoomsJoinParticipantsListItem_actor.graphql"),f);d=k(h!==void 0?h:h=b("RoomsJoinParticipantsListItem_fbts.graphql"),d);a=k(i!==void 0?i:i=b("RoomsJoinParticipantsListItem_room.graphql"),a);e=k(j!==void 0?j:j=b("RoomsJoinParticipantsListItem_group.graphql"),e);var m=f.name;c=(c=f.profile_picture)==null?void 0:c.uri;if(m==null||c==null)throw b("unrecoverableViolation")("name and data.profile_picture.uri should not be null","comet_qp");var n=null;if(a.link_surface==="GROUP"){n=(e==null?void 0:e.is_group_member)===!0?(a=d.member_label)==null?void 0:a.text:(e=d.guest_label)==null?void 0:e.text}else if(f.__typename==="MessengerCallGuestUser"){n=(a=d.guest_label)==null?void 0:a.text}return l.jsx(b("TetraListCell.react"),{addOnPrimary:{alt:m,shape:"circle",size:40,source:{uri:c},type:"profile-photo"},body:n,headline:m,headlineLineLimit:1,level:4,paddingHorizontal:0})}e.exports=a},null);
__d("RoomsJoinParticipantsList.react",["ix","fbt","CometFlexibleGrid.react","CometRelay","CometRow.react","CometRowItem.react","MessengerCallLinkSurface","React","RoomsCreateConsts","RoomsJoinParticipantsListItem.react","TetraListCell.react","TetraText.react","fbicon","getJSEnumSafe","stylex","RoomsJoinParticipantsList_fbts.graphql","RoomsJoinParticipantsList_room.graphql"],function(a,b,c,d,e,f,g,h){"use strict";var i,j;b("CometRelay").graphql;var k=b("CometRelay").useFragment,l=b("React"),m=b("RoomsCreateConsts").WIDTH,n=h._("Membros nesta sala"),o=h._("Pessoas nesta sala"),p=i!==void 0?i:i=b("RoomsJoinParticipantsList_fbts.graphql");function a(a){var c=a.fbtsRef;a=a.roomRef;var d=k(j!==void 0?j:j=b("RoomsJoinParticipantsList_room.graphql"),a),e=k(p,c);a=(c=(a=d.messenger_call_room)==null?void 0:(c=a.maybe_stale_active_call)==null?void 0:(a=c.call_participants)==null?void 0:a.edges)!=null?c:[];c=a.map(function(a){return{edge:a,node:a.node}});a=(a=d.active_call_participant_count)!=null?a:c.length;var f=d.link_owner,g=f==null?void 0:f.id,h=b("getJSEnumSafe")(b("MessengerCallLinkSurface"),d.link_surface);h=h===3;var i=d.should_allow_guests===!0;h=h&&!i?(i=(h=e.room_participants_group_only_header)==null?void 0:h.text)!=null?i:n:(i=(h=e.room_participants_header)==null?void 0:h.text)!=null?i:o;i=c.find(function(a){return((a=a.node)==null?void 0:a.id)===g})==null;var r=d.is_owner_in_call===!0;f!=null&&i&&r&&c.unshift({edge:void 0,node:f});i=c.map(function(a){return a.node&&l.jsx(b("RoomsJoinParticipantsListItem.react"),{fbtsRef:e,group:a.edge,participant:a.node,room:d},(a=a.node)==null?void 0:a.id)}).filter(Boolean);q(i,a-c.length,(f=(r=e.anonymous_label)==null?void 0:r.text)!=null?f:"Unknown");return i.length===0?null:l.jsxs(l.Fragment,{children:[l.jsx(b("CometRow.react"),{paddingTop:8,children:l.jsx(b("CometRowItem.react"),{children:l.jsx(b("TetraText.react"),{align:"auto",type:"headlineEmphasized3",children:h})})}),l.jsx(b("CometRow.react"),{paddingTop:8,children:l.jsx(b("CometRowItem.react"),{children:l.jsx("div",{className:"fop5sh7t o22cckgh",children:l.jsx(b("CometFlexibleGrid.react"),{columnMaxWidth:m,columnMinWidth:m/2-8,justify:"start",minItems:i.length,children:i})})})})]})}function q(a,c,d){if(c<=0)return;for(var e=0;e<c;e++)a.push(l.jsx(b("TetraListCell.react"),{addOnPrimary:{icon:b("fbicon")._(g("514772"),20),size:40,type:"contained-icon"},headline:d,headlineLineLimit:1,level:4,paddingHorizontal:0},"anon"+e))}e.exports=a},null);
__d("useRoomsJoinDialogDisclaimers.react",["ix","fbt","CometRelay","CometRow.react","CometRowItem.react","DateConsts","MessengerCallInviteLinkLockStatus","MessengerCallLinkSurface","React","RoomsDialogSeparator.react","RoomsEnumType","RoomsGating","TetraIcon.react","TetraText.react","fbicon","getJSEnumSafe","gkx","stylex","useMaybeNUX","useRoomsIsViewerOwner","useServerTime","useRoomsJoinDialogDisclaimers_root.graphql","useRoomsJoinDialogDisclaimers_room.graphql","useRoomsJoinDialogDisclaimers_fbts.graphql"],function(a,b,c,d,e,f,g,h){"use strict";var i,j,k;b("CometRelay").graphql;var l=b("CometRelay").useFragment,m=b("React"),n=b("RoomsEnumType").DialogSource;function o(a,c,d,e){d===void 0&&(d="secondary");e===void 0&&(e=!1);return e?m.jsx(b("CometRow.react"),{paddingTop:8,children:m.jsx(b("CometRowItem.react"),{expanding:!0,children:m.jsx(b("TetraText.react"),{align:"center",color:d,type:"bodyLink4",children:a})})},c):m.jsx(b("CometRow.react"),{paddingTop:8,children:m.jsx(b("CometRowItem.react"),{expanding:!0,children:m.jsx(b("TetraText.react"),{align:"center",color:d,type:"body4",children:a})})},c)}function a(a,c,d,e){var f,p;d=l(i!==void 0?i:i=b("useRoomsJoinDialogDisclaimers_root.graphql"),d);c=l(j!==void 0?j:j=b("useRoomsJoinDialogDisclaimers_room.graphql"),c);a=l(k!==void 0?k:k=b("useRoomsJoinDialogDisclaimers_fbts.graphql"),a);f=b("useRoomsIsViewerOwner")(c,(f=d.viewer)==null?void 0:f.account_user);var q=b("useServerTime")();p=(p=c==null?void 0:c.expected_call_start_time)!=null?p:0;p=new Date(p*1e3);p=p.getTime();q=q.getTime();p=p>q+b("DateConsts").MS_PER_MIN;q=null;var r=b("getJSEnumSafe")(b("MessengerCallInviteLinkLockStatus"),c.lock_status)==="locked_by_owner",s=c.should_allow_guests,t=b("getJSEnumSafe")(b("MessengerCallLinkSurface"),c.link_surface);t=t===3;var u=!f&&!t;c=(c=c.link_owner)==null?void 0:c.short_name;var v=b("gkx")("1479716"),w=b("gkx")("1478854");t=t&&v&&w;t=f&&s!==!0?a==null?void 0:(v=a.joiner_self_first_time_disclaimer)==null?void 0:v.text:t?a==null?void 0:(w=a.groups_room_first_time_disclaimer)==null?void 0:w.text:a==null?void 0:(v=a.joiner_first_time_disclaimer)==null?void 0:v.text;v=f&&s!==!0?a==null?void 0:(w=a.join_room_above_button_help_text)==null?void 0:w.text:null;f=f&&s!==!0?a==null?void 0:(w=a.join_room_above_button_help_text)==null?void 0:w.text:null;s=b("useMaybeNUX")(d.nux);a=s!=null?s:[!1,null];w=a[0];d=a[1];w===!0&&!r&&t!=null?q=m.jsxs(m.Fragment,{children:[m.jsx(b("RoomsDialogSeparator.react"),{}),o(t,"disclaimerAboveCTA")]}):b("RoomsGating").isArrowDownInLobbyEnabled()&&w!==!0&&!r&&f!=null&&e===n.CREATION&&!p&&(q=m.jsxs(m.Fragment,{children:[m.jsx(b("RoomsDialogSeparator.react"),{}),m.jsx(b("CometRow.react"),{align:"center",paddingTop:8,children:m.jsx(b("CometRowItem.react"),{expanding:!0,children:m.jsx("div",{className:"b73ngqbp pcp91wgn iuny7tx3 p8fzw8mz ipjc6fyt f9o22wc5 myj7ivm5 ad2k81qe km676qkl taijpn5t rgmg9uty qmr60zad inkptoze qlfml3jp e72ty7fz oo1teu6h bp9cbjyn",children:m.jsx(b("TetraIcon.react"),{color:"highlight",icon:b("fbicon")._(g("552144"),24)})})})},"help_text_above_join_button"),o(f,"disclaimerAboveCTA","highlight",!0)]}));s=null;u&&!r?s=o(h._("Enviaremos uma notifica\u00e7\u00e3o para {name} quando voc\u00ea entrar.",[h._param("name",c)]),"disclaimerUnderCTAForFriends"):w===!0&&!r&&v!=null&&(s=o(v,"disclaimerUnderCTAForSelf"));return[q,s,d]}e.exports=a},null);
__d("RoomsRTWebMercuryPreCallProvider.react",["requireCond","React","cr:1374862"],function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){a=a.children;return b("cr:1374862")==null?a:g.jsx(b("cr:1374862"),{children:a})}e.exports=a},null);