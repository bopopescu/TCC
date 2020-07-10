if (self.CavalryLogger) { CavalryLogger.start_js(["Erxsh"]); }

__d("PagesCometNotificationsReceiveSubscription.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"count"},b={defaultValue:null,kind:"LocalArgument",name:"environment"},c={defaultValue:null,kind:"LocalArgument",name:"input"},d={defaultValue:null,kind:"LocalArgument",name:"scale"},e={defaultValue:null,kind:"LocalArgument",name:"thinClientEnabled"},f=[{kind:"Variable",name:"data",variableName:"input"}],g={kind:"Variable",name:"environment",variableName:"environment"},h={alias:null,args:[g],kind:"ScalarField",name:"notifications_unseen_count",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"last_update_timestamp",storageKey:null},j={alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},k={alias:null,args:null,kind:"ScalarField",name:"seen_state",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"eligible_buckets",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"sort_keys",storageKey:null},n={alias:null,args:null,concreteType:"NotifBucketConfig",kind:"LinkedField",name:"bucket_config",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"bucket_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sec_to_evict_read",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sec_to_evict_seen",storageKey:null}],storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"first_read_time",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"first_seen_time",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},r={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"renderer_data",plural:!1,selections:[q,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"video_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"bucket_data",storageKey:null}],type:"LiveVideoNotificationRendererData",abstractKey:null}],storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};g=[g,{kind:"Variable",name:"first",variableName:"count"},{kind:"Literal",name:"notif_query_flags",value:["IS_COMET"]},{kind:"Literal",name:"source",value:"unknown"}];var t={alias:null,args:null,kind:"ScalarField",name:"notif_id",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"notif_type",storageKey:null},v={alias:null,args:[{kind:"Literal",name:"notif_option_set_context",value:{client_action_types:["HIDE","UNSUB","TOGGLE_ACTIVE","OPEN_IN_INSPECTOR","REPORT_BUG"],environment:"MAIN_SURFACE",is_comet:!0,supported_display_styles:[{option_display_styles:["CHEVRON_MENU_OPTION"],option_set_display_style:"CHEVRON_MENU"}]}}],concreteType:"NotificationOptionSetsConnection",kind:"LinkedField",name:"notif_option_sets",plural:!1,selections:[{alias:null,args:null,concreteType:"NotificationOptionSetsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"NotifOptionSet",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"NotifOptionSetOptionsConnection",kind:"LinkedField",name:"notif_options",plural:!1,selections:[{alias:null,args:null,concreteType:"NotifOptionSetOptionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"NotifOption",kind:"LinkedField",name:"node",plural:!1,selections:[s,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"notif_option_renderer",plural:!1,selections:[q,{kind:"InlineFragment",selections:[{documentName:"CometNotificationsDropdownMenu_notification",fragmentName:"CometNotificationsDropdownHideMenuItem_notifOptionRenderer",fragmentPropName:"notifOptionRenderer",kind:"ModuleImport"}],type:"NotifOptionHideRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometNotificationsDropdownMenu_notification",fragmentName:"CometNotificationsDropdownDefaultMenuItem_notifOptionRenderer",fragmentPropName:"notifOptionRenderer",kind:"ModuleImport"}],type:"NotifOptionDefaultRenderer",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},s],storageKey:null}],storageKey:null}],storageKey:'notif_option_sets(notif_option_set_context:{"client_action_types":["HIDE","UNSUB","TOGGLE_ACTIVE","OPEN_IN_INSPECTOR","REPORT_BUG"],"environment":"MAIN_SURFACE","is_comet":true,"supported_display_styles":[{"option_display_styles":["CHEVRON_MENU_OPTION"],"option_set_display_style":"CHEVRON_MENU"}]})'},w={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"notif_attachments",plural:!0,selections:[q,{kind:"InlineFragment",selections:[{documentName:"CometNotificationsListItemAttachment_notification",fragmentName:"CometNotificationsListItemFriendRequestAttachment_notifAttachments",fragmentPropName:"notifAttachments",kind:"ModuleImport"}],type:"FriendRequestNotifAttachment",abstractKey:null}],storageKey:null},x={alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},y={alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null},z={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},A={kind:"InlineFragment",selections:[s],type:"Node",abstractKey:"__isNode"},B={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null};B={alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"body",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{alias:null,args:null,concreteType:"ImageAtRange",kind:"LinkedField",name:"image_ranges",plural:!0,selections:[x,y,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity_with_image",plural:!1,selections:[q,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},z,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},A],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InlineStyleAtRange",kind:"LinkedField",name:"inline_style_ranges",plural:!0,selections:[x,y,{alias:null,args:null,kind:"ScalarField",name:"inline_style",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[x,y,{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[q,{kind:"InlineFragment",selections:[s,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],type:"User",abstractKey:null},A],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[q,{kind:"TypeDiscriminator",abstractKey:"__isEntity"},j,{kind:"InlineFragment",selections:[s,{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"Actor",abstractKey:"__isActor"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null},s,{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[B,{alias:null,args:null,concreteType:"WorkUserInfo",kind:"LinkedField",name:"work_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active_account",storageKey:null}],storageKey:null}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[B,{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group",abstractKey:null},A],storageKey:null},x,y],storageKey:null}],storageKey:null};A={kind:"Literal",name:"height",value:56};x={kind:"Variable",name:"scale",variableName:"scale"};y={kind:"Literal",name:"width",value:56};z=[z];var C={alias:null,args:[A,x,y],concreteType:"Image",kind:"LinkedField",name:"notif_image",plural:!1,selections:z,storageKey:null},D={alias:null,args:null,kind:"ScalarField",name:"www_url_should_open_in_blank_target",storageKey:null};A={alias:null,args:[{kind:"Literal",name:"first",value:1},A,x,y],concreteType:"Image",kind:"LinkedField",name:"preview_images",plural:!0,selections:z,storageKey:null};x={alias:"creation_time",args:null,concreteType:"CreationTimeWithRelativeText",kind:"LinkedField",name:"creation_time_with_relative_text",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"timestamp",storageKey:null}],storageKey:null};y={alias:null,args:null,concreteType:"GlyphIconData",kind:"LinkedField",name:"icon_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"glyph_name",storageKey:null}],storageKey:null};z={alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null};var E={kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_hidden",storageKey:null}]};return{fragment:{argumentDefinitions:[a,b,c,d,e],kind:"Fragment",metadata:null,name:"PagesCometNotificationsReceiveSubscription",selections:[{alias:null,args:f,concreteType:"CometNotificationReceiveSubscribeResponsePayload",kind:"LinkedField",name:"comet_notification_receive_subscribe",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometToastNotification_actor"}],storageKey:null},h,i,{args:null,kind:"FragmentSpread",name:"PagesCometNotificationsList_viewer"},{condition:"thinClientEnabled",kind:"Condition",passingValue:!0,selections:[{args:[{kind:"Variable",name:"count",variableName:"count"}],kind:"FragmentSpread",name:"PagesCometNotificationsList_viewerConnection"}]}],storageKey:null},{alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"aggregated_notification",plural:!1,selections:[j],storageKey:null},{alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"notification",plural:!1,selections:[k,l,m,n,o,p,r,{args:null,kind:"FragmentSpread",name:"CometNotificationsListItem_notification"}],storageKey:null}],storageKey:null}],type:"Subscription",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[b,c,d,e,a],kind:"Operation",name:"PagesCometNotificationsReceiveSubscription",selections:[{alias:null,args:f,concreteType:"CometNotificationReceiveSubscribeResponsePayload",kind:"LinkedField",name:"comet_notification_receive_subscribe",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[q,{kind:"TypeDiscriminator",abstractKey:"__isActor"},s],storageKey:null},h,i,{condition:"thinClientEnabled",kind:"Condition",passingValue:!0,selections:[{alias:null,args:g,concreteType:"NotificationsConnection",kind:"LinkedField",name:"notifications",plural:!1,selections:[{alias:null,args:null,concreteType:"NotificationsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"node",plural:!1,selections:[s,t,u,k,v,w,B,C,j,D,A,x,y,z,m,l,n,o,p,q,E],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:g,filters:[],handle:"connection",key:"PagesCometNotificationsList_notifications",kind:"LinkedHandle",name:"notifications"}]}],storageKey:null},{alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"aggregated_notification",plural:!1,selections:[j,s],storageKey:null},{alias:null,args:null,concreteType:"Notification",kind:"LinkedField",name:"notification",plural:!1,selections:[k,l,m,n,o,p,s,t,u,v,w,B,C,j,D,A,x,y,z,r,E],storageKey:null}],storageKey:null}]},params:{id:"2880466515385302",metadata:{subscriptionName:"comet_notification_receive_subscribe"},name:"PagesCometNotificationsReceiveSubscription",operationKind:"subscription",text:null}}}();e.exports=a},null);
__d("PageCometAdminNotificationsActionsMenu.react",["ix","fbt","CometMenu.react","CometMenuItem.react","React","fbicon"],function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");function a(a){var c=a.notificationsListRef;a=function(){c.current!=null&&c.current.markAllNotificationsAsRead!=null&&c.current.markAllNotificationsAsRead()};return i.jsx(b("CometMenu.react"),{withArrow:!0,children:i.jsx(b("CometMenuItem.react"),{icon:b("fbicon")._(g("477820"),20),onClick:a,primaryText:h._("Marcar todas como lidas")})})}e.exports=a},null);
__d("PagesCometNotificationsReceiveSubscription",["CometRelay","CurrentUser","JSScheduler","RelayRTIGraphQLSubscriptionTopicProvider","relay-runtime","PagesCometNotificationsReceiveSubscription.graphql"],function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").requestSubscription,i=b("JSScheduler").scheduleSpeculativeCallback,j=b("relay-runtime").ConnectionHandler,k=b("relay-runtime").VIEWER_ID,l=b("relay-runtime").getRequest,m=g!==void 0?g:g=b("PagesCometNotificationsReceiveSubscription.graphql"),n={};function a(a,c,d,e){var f=l(m);f=f.params.id;f!==null&&!n[f]&&(n[f]=!0,b("RelayRTIGraphQLSubscriptionTopicProvider").registerProvider(f,function(a){return"gqls/comet_notification_receive_subscribe/actor_id_"+b("CurrentUser").getID()+"_environment_"+a.input.environment}));var g=function(a){var b=a.getRootField("comet_notification_receive_subscribe");if(b==null)return;b=b.getLinkedRecord("notification");if(b==null)return;var c=a.get(k);if(c==null)return;c.setLinkedRecord(b,"new_notification");c=j.getConnection(c,"PagesCometNotificationsList_notifications");if(c==null)return;j.deleteNode(c,b.getDataID());a=j.createEdge(a,c,b,"NotificationsEdge");a.setValue(null,"cursor");j.insertEdgeBefore(c,a)},o=null,p=!1;i(function(){p||(o=h(a,{onCompleted:d,onError:e,subscription:m,updater:g,variables:c}))});return{dispose:function(){o!=null&&(o.dispose(),o=null),p=!0}}}e.exports={PagesNotificationsReceiveSubscription:m,subscribeToNotificationUpdates:a}},null);
__d("composerAlbumCreateAudienceTransform",["unrecoverableViolation"],function(a,b,c,d,e,f){"use strict";function a(a,c,d){a=(a=a.audience)==null?void 0:a.privacy;if(a==null)throw b("unrecoverableViolation")("Trying to render composer with no privacy scope","comet_composer");d(babelHelpers["extends"]({},c,{privacy:a}))}e.exports=a},null);