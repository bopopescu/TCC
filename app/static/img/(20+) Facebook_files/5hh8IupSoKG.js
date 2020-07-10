if (self.CavalryLogger) { CavalryLogger.start_js(["tV\/C5"]); }

__d("CometToastNotification_actor.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometToastNotification_actor",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometNotificationsListItem_actor"}],type:"Actor",abstractKey:"__isActor"};e.exports=a},null);
__d("CometToastNotification_notification.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometToastNotification_notification",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"body",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"notif_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"seen_state",storageKey:null},{args:[{kind:"Literal",name:"isToast",value:!0}],kind:"FragmentSpread",name:"CometNotificationsListItem_notification"}],type:"Notification",abstractKey:null};e.exports=a},null);
__d("CometNotificationsUpdateSeenStateMutation.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"environment"},b={defaultValue:null,kind:"LocalArgument",name:"input"},c=[{kind:"Variable",name:"data",variableName:"input"}],d={alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"notifications",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"seen_state",storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[a,b],kind:"Fragment",metadata:null,name:"CometNotificationsUpdateSeenStateMutation",selections:[{alias:null,args:c,concreteType:"NotificationsUpdateSeenOrReadResponsePayload",kind:"LinkedField",name:"notifications_update_seen_or_read",plural:!1,selections:[d,{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometNotificationsBadgeCountFragment_viewer"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[b,a],kind:"Operation",name:"CometNotificationsUpdateSeenStateMutation",selections:[{alias:null,args:c,concreteType:"NotificationsUpdateSeenOrReadResponsePayload",kind:"LinkedField",name:"notifications_update_seen_or_read",plural:!1,selections:[d,{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:[{kind:"Variable",name:"environment",variableName:"environment"}],kind:"ScalarField",name:"notifications_unseen_count",storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"3454182731283099",metadata:{},name:"CometNotificationsUpdateSeenStateMutation",operationKind:"mutation",text:null}}}();e.exports=a},null);
__d("CometAccessibilityAnnouncement.react",["requireCond","React","stylex","cr:1465733"],function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.assertive;c=c===void 0?!1:c;a=a.children;a=a===void 0?null:a;b("cr:1465733")({assertive:c,message:a});return g.jsx("div",{"aria-atomic":!0,"aria-live":c?"assertive":"polite",className:"pmk7jnqg g0aa4cga q45zohi1",role:"alert",children:a})}e.exports=a},null);
__d("CometNotificationsUpdateSeenStateMutation",["CometNotificationsMutationLogger","CometNotificationsThinClientConnectionHandler","CometRelay","relay-runtime","CometNotificationsUpdateSeenStateMutation.graphql"],function(a,b,c,d,e,f){"use strict";var g,h=b("CometRelay").commitMutation;b("CometRelay").graphql;var i=b("relay-runtime").VIEWER_ID,j=g!==void 0?g:g=b("CometNotificationsUpdateSeenStateMutation.graphql");function k(a,c){var d=c[0];if(d==null)return;c=a.get(i);if(c==null)return;a=b("CometNotificationsThinClientConnectionHandler");a=a.getConnection(c,"CometNotificationsList_notifications_page");if(a==null)return;a=a.getLinkedRecords("edges");if(a==null||a.length===0)return;var e=[];a.forEach(function(a){if(a==null)return;a=a.getLinkedRecord("node");if(a==null)return;var b=a.getType();if(b!=="NotifPageNotificationRow"&&b!=="NotifPageCachedNotificationRow")return;b=a.getLinkedRecord("notif");if(b==null)return;e.push(b)});a=e.findIndex(function(a){return a.getValue("id")===d});if(a<0)return;e[a]!=null&&e[a].setValue("SEEN_BUT_UNREAD","seen_state");a=c.getValue("notifications_unseen_count",{environment:"MAIN_SURFACE"});if(a==null)return;a=+a-1;c.setValue(Math.max(0,a),"notifications_unseen_count",{environment:"MAIN_SURFACE"})}function a(a,c,d){var e=function(a){var b=c.input;if(b==null)return;b=b.notif_ids;if(b==null)return;k(a,b)},f=b("CometNotificationsMutationLogger").notificationMarkAsSeenStart(),g=f.logOnError,i=f.logOnSuccess;return h(a,{mutation:j,onCompleted:function(){i(),d&&d.onSuccess()},onError:function(a){g(a),d&&d.onError(a)},optimisticUpdater:e,variables:c})}e.exports={CometNotificationsUpdateSeenStateMutation:a,mutation:j}},null);
__d("CometToastNotification.react",["ix","fbt","requireDeferred","CometAccessibilityAnnouncement.react","CometCard.react","CometNotificationsListItem.react","CometNotificationsUpdateSeenStateMutation","CometPressable.react","CometRelay","React","TetraIcon.react","TetraTextPairing.react","fbicon","qex","recoverableViolation","stylex","CometToastNotification_actor.graphql","CometToastNotification_notification.graphql"],function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=b("requireDeferred")("Banzai"),l=b("CometNotificationsUpdateSeenStateMutation").CometNotificationsUpdateSeenStateMutation;b("CometRelay").graphql;var m=b("CometRelay").useFragment,n=b("CometRelay").useRelayEnvironment,o=b("React");c=b("React");var p=c.useCallback,q="notif_beeper_dismiss",r="comet_toast",s="beeper",t="MAIN_SURFACE",u="MARK_SEEN",v=function(a,c,d){if(a==null||c!=="UNSEEN_AND_UNREAD")return;l(d,{environment:t,input:{environment:t,is_comet:!0,last_notif_sync_time:0,notif_ids:[a],source:r,update_type:u}},{onError:function(a){b("recoverableViolation")("Mark as seen mutation failed with an error: ","Notifications",{error:a})},onSuccess:function(){}})};function a(a){var c,d=n(),e=m(i!==void 0?i:i=b("CometToastNotification_actor.graphql"),a.actor),f=m(j!==void 0?j:j=b("CometToastNotification_notification.graphql"),a.notification),l=f==null?void 0:f.id,r=f==null?void 0:f.seen_state,t=p(function(){var a=b("qex")._("1506045");a!==!0&&v(l,r,d)},[l,d,r]);if(f==null){b("recoverableViolation")("Comet Toast should have non-null notification","Notifications");return null}var u=a.onCloseClick;a=h._("Nova notifica\u00e7\u00e3o");var w=e==null?void 0:e.id,x=f.notif_id;c=(c=f.body)==null?void 0:c.text;return o.jsxs(b("CometCard.react"),{background:"white",dropShadow:2,children:[o.jsxs("div",{className:"jbcpqwzg jq4qci2q cbu4d94t j83agx80 rq0escxv bi1v6m2q l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",onMouseEnter:t,children:[o.jsx("div",{className:"n1l5q3vz",children:o.jsxs("div",{className:"dati1w0a qt6c0cv9 hv4rvrfc jb3vyjys i1fnvgqd j83agx80 bp9cbjyn",children:[o.jsx(b("TetraTextPairing.react"),{headline:a,level:4}),o.jsx(b("CometPressable.react"),{display:"inline",label:h._("Fechar"),onPress:function(){u(),x!=null&&w!=null&&k.onReady(function(a){a.post(q,{notification_data:{alert_id:x,logger_context:s,user_id:w},ref:"www_tab"})})},overlayDisabled:!0,children:o.jsx("span",{className:"b73ngqbp taijpn5t rgmg9uty j83agx80 owxd89k7 n3ddgdk9 h2jyy9rg br7hx15l tdjehn4e bp9cbjyn",children:o.jsx(b("TetraIcon.react"),{color:"primary",icon:b("fbicon")._(g("478231"),12),size:12})})})]})}),o.jsx("div",{className:"ecm0bbzt sj5x9vvc ezxwwwxp",role:"grid",children:o.jsx(b("CometNotificationsListItem.react"),{actor:e,loggerContext:s,notification:f,onClick:u})})]}),c!=null&&o.jsx(b("CometAccessibilityAnnouncement.react"),{children:c},x)]})}e.exports=a},null);