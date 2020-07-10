if (self.CavalryLogger) { CavalryLogger.start_js(["Bagfr"]); }

__d("CometMediaViewerPhotoActionsAddProductTagsMutation.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"serialized_frtp_identifiers",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"debug_info",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},i=[h],j=[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null}],k=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],l=[{kind:"Literal",name:"height",value:120},{kind:"Literal",name:"width",value:120}],m=[d];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometMediaViewerPhotoActionsAddProductTagsMutation",selections:[{alias:null,args:b,concreteType:"CreateProductTagResponsePayload",kind:"LinkedField",name:"create_product_tag",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometPhotoTagWrapper_photo"},{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"CometPhotoViewerTaggedProductsSection_photo"}],type:"Photo",abstractKey:null}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometMediaViewerPhotoActionsAddProductTagsMutation",selections:[{alias:null,args:b,concreteType:"CreateProductTagResponsePayload",kind:"LinkedField",name:"create_product_tag",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[c,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"creation_story",plural:!1,selections:[{alias:null,args:null,concreteType:"SponsoredData",kind:"LinkedField",name:"sponsored_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ad_id",storageKey:null}],storageKey:null},d,e,f],storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},d,{alias:null,args:null,concreteType:"PhotoTagsConnection",kind:"LinkedField",name:"tags",plural:!1,selections:[{alias:null,args:null,concreteType:"PhotoTagsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,d,g,{kind:"InlineFragment",selections:i,type:"User",abstractKey:null},{kind:"InlineFragment",selections:i,type:"Page",abstractKey:null},{kind:"InlineFragment",selections:i,type:"Group",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[c,d,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"creation_story",plural:!1,selections:[e,f,d],storageKey:null}],type:"Photo",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PhotoTag",kind:"LinkedField",name:"tag",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_text_tag",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_product_tag",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_remove_tag",storageKey:null},{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"location",plural:!1,selections:j,storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"tagging_actor",plural:!1,selections:[c,d,g],storageKey:null},{alias:null,args:null,concreteType:"ProductTag",kind:"LinkedField",name:"photo_product_tags",plural:!0,selections:[d,{alias:null,args:null,concreteType:"ProductItem",kind:"LinkedField",name:"product_item",plural:!1,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"is_viewer_seller",storageKey:null},g,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"formatted_price",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:60},{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:k,storageKey:"profile_picture(height:60,width:60)"},h,{alias:"picture",args:l,concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:k,storageKey:"profile_picture(height:120,width:120)"}],storageKey:null},{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"xy_location",plural:!1,selections:j,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[c,d,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"full_name",storageKey:null},{alias:null,args:l,concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:k,storageKey:"profile_picture(height:120,width:120)"},h],type:"Page",abstractKey:null}],storageKey:null}],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:m,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:m,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:m,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:m,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null}]},params:{id:"2801538646608957",metadata:{},name:"CometMediaViewerPhotoActionsAddProductTagsMutation",operationKind:"mutation",text:null}}}();e.exports=a},null);
__d("CometMediaViewerPhotoActionsCropPhotoMutation.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometMediaViewerPhotoActionsCropPhotoMutation",selections:[{alias:null,args:b,concreteType:"PhotoCropResponsePayload",kind:"LinkedField",name:"photo_crop",plural:!1,selections:[{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"photo",plural:!1,selections:[c,{args:null,kind:"FragmentSpread",name:"CometPhotoViewer_photo"},{args:null,kind:"FragmentSpread",name:"CometPhotoEditorEditedPhoto_photo"},{args:null,kind:"FragmentSpread",name:"EntPhotoCollageItem_media"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometMediaViewerPhotoActionsCropPhotoMutation",selections:[{alias:null,args:b,concreteType:"PhotoCropResponsePayload",kind:"LinkedField",name:"photo_crop",plural:!1,selections:[{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"photo",plural:!1,selections:[c,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"tagging_actor",plural:!1,selections:[d,c],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[d,c,{kind:"InlineFragment",selections:[{alias:"page_id",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_admin",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_taggable_products",storageKey:null}],type:"Page",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"created_time",storageKey:null},{alias:null,args:[{kind:"Literal",name:"context",value:"comet_media_viewer"},{kind:"Literal",name:"height",value:1e6},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:1e6}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[e,e,{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PhotoTagsConnection",kind:"LinkedField",name:"tags",plural:!1,selections:[{alias:null,args:null,concreteType:"PhotoTagsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PhotoTag",kind:"LinkedField",name:"tag",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_product_tag",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},c],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"container_story",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"post_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_tracking",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewability_config",storageKey:null},{alias:null,args:null,concreteType:"CometClientViewConfig",kind:"LinkedField",name:"client_view_config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"can_delay_log_impression",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_banzai_signal_imp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_banzai_vital_imp",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"framework",value:"WARNING_SCREENS"},{kind:"Literal",name:"location",value:"photo_viewer"}],concreteType:"CIXScreen",kind:"LinkedField",name:"cix_screen",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"view_model",plural:!1,selections:[d,{kind:"InlineFragment",selections:[{documentName:"CometPhotoViewer_photo",fragmentName:"CometWarningScreenOverlay_data",fragmentPropName:"data",kind:"ModuleImport"}],type:"OverlayWarningScreenViewModel",abstractKey:null},{kind:"InlineFragment",selections:[c],type:"Node",abstractKey:"__isNode"}],storageKey:null}],storageKey:'cix_screen(framework:"WARNING_SCREENS",location:"photo_viewer")'}],storageKey:null}],storageKey:null}]},params:{id:"3052526261507808",metadata:{},name:"CometMediaViewerPhotoActionsCropPhotoMutation",operationKind:"mutation",text:null}}}();e.exports=a},null);
__d("CometMediaViewerPhotoActionsDeleteProductTagMutation.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"serialized_frtp_identifiers",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"debug_info",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},i=[h],j=[{alias:null,args:null,kind:"ScalarField",name:"x",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"y",storageKey:null}],k=[d];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometMediaViewerPhotoActionsDeleteProductTagMutation",selections:[{alias:null,args:b,concreteType:"DeleteProductTagResponsePayload",kind:"LinkedField",name:"delete_product_tag",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometPhotoTagWrapper_photo"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometMediaViewerPhotoActionsDeleteProductTagMutation",selections:[{alias:null,args:b,concreteType:"DeleteProductTagResponsePayload",kind:"LinkedField",name:"delete_product_tag",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[c,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"creation_story",plural:!1,selections:[{alias:null,args:null,concreteType:"SponsoredData",kind:"LinkedField",name:"sponsored_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ad_id",storageKey:null}],storageKey:null},d,e,f],storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},d,{alias:null,args:null,concreteType:"PhotoTagsConnection",kind:"LinkedField",name:"tags",plural:!1,selections:[{alias:null,args:null,concreteType:"PhotoTagsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,d,g,{kind:"InlineFragment",selections:i,type:"User",abstractKey:null},{kind:"InlineFragment",selections:i,type:"Page",abstractKey:null},{kind:"InlineFragment",selections:i,type:"Group",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[c,d,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"creation_story",plural:!1,selections:[e,f,d],storageKey:null}],type:"Photo",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PhotoTag",kind:"LinkedField",name:"tag",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_text_tag",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_product_tag",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_remove_tag",storageKey:null},{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"location",plural:!1,selections:j,storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"tagging_actor",plural:!1,selections:[c,d,g],storageKey:null},{alias:null,args:null,concreteType:"ProductTag",kind:"LinkedField",name:"photo_product_tags",plural:!0,selections:[d,{alias:null,args:null,concreteType:"ProductItem",kind:"LinkedField",name:"product_item",plural:!1,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"is_viewer_seller",storageKey:null},g,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"formatted_price",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:60},{kind:"Literal",name:"width",value:60}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:"profile_picture(height:60,width:60)"},h],storageKey:null},{alias:null,args:null,concreteType:"Vect2",kind:"LinkedField",name:"xy_location",plural:!1,selections:j,storageKey:null}],storageKey:null}],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:k,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:k,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:k,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:k,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null}]},params:{id:"2568653043239633",metadata:{},name:"CometMediaViewerPhotoActionsDeleteProductTagMutation",operationKind:"mutation",text:null}}}();e.exports=a},null);
__d("CometMediaViewerPhotoActionsEditMessageMutation.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometMediaViewerPhotoActionsEditMessageMutation",selections:[{alias:null,args:b,concreteType:"PhotoEditMessageResponsePayload",kind:"LinkedField",name:"photo_edit_message",plural:!1,selections:[{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"photo",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"message",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelayDEPRECATED_textWithEntities"}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometMediaViewerPhotoActionsEditMessageMutation",selections:[{alias:null,args:b,concreteType:"PhotoEditMessageResponsePayload",kind:"LinkedField",name:"photo_edit_message",plural:!1,selections:[{alias:null,args:null,concreteType:"Photo",kind:"LinkedField",name:"photo",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"message",plural:!1,selections:[{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"TypeDiscriminator",abstractKey:"__isEntity"},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},{kind:"InlineFragment",selections:[c,{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"Actor",abstractKey:"__isActor"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl",abstractKey:null},{kind:"InlineFragment",selections:[c],type:"Node",abstractKey:"__isNode"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},c],storageKey:null}],storageKey:null}]},params:{id:"4039938509380664",metadata:{},name:"CometMediaViewerPhotoActionsEditMessageMutation",operationKind:"mutation",text:null}}}();e.exports=a},null);
__d("CometMediaViewerStage.react",["ix","fbt","CometBlurredBackgroundImage.react","CometFullScreen","CometKeys","CometProductTagFunnelIDContext","CometTrackingNodeProvider.react","Locale","React","TetraCircleButton.react","cometGetKeyCommandConfig","fbicon","gkx","stylex","useCometRouterDispatcher","useLayerKeyCommands"],function(a,b,c,d,e,f,g,h){"use strict";var i=b("CometFullScreen").exitFullScreen,j=b("CometFullScreen").getFullScreenElement,k=b("CometFullScreen").requestFullScreen,l=b("React");c=b("React");var m=c.useCallback,n=c.useContext,o=c.useMemo,p=b("gkx")("1451824");function a(a){var c=a.backgroundSrc,d=a.initialTracePolicy,e=a.nextMediaURI,f=a.onNavigatePhoto,q=a.prevMediaURI,r=a.storyRenderLocation,s=a.subOrigin,t=a.useKeyCommands,u=t===void 0?!0:t,v=n(b("CometProductTagFunnelIDContext")),w=b("useCometRouterDispatcher")();t=m(function(){w!=null&&w.popPushView()},[w]);var x=m(function(){e!=null&&w!=null&&(f&&f(),w.go(e,{passthroughProps:{initialTracePolicy:d,productTagFunnelID:v,storyRenderLocation:r,subOrigin:s},target:"self",traceParams:{navigation_source:"CometMediaViewer_next"}}))},[e,w,f,d,v,s,r]),y=m(function(){q!=null&&w!=null&&(f&&f(),w.go(q,{passthroughProps:{initialTracePolicy:d,productTagFunnelID:v,storyRenderLocation:r,subOrigin:s},target:"self",traceParams:{navigation_source:"CometMediaViewer_prev"}}))},[q,w,f,d,v,r,s]),z=h._("Foto anterior"),A=h._("Pr\u00f3xima foto"),B=m(function(){var a=j();if(a==null){a=document.documentElement;a!=null&&k(a)}else i()},[]),C=o(function(){if(!u)return[];var a=e!=null&&e!=="",c=q!=null&&q!=="",d=[];c&&(d.push({command:{key:b("CometKeys").LEFT},description:z,handler:y}),d.push(b("cometGetKeyCommandConfig")("photoViewer","viewPrevious",y)));a&&(d.push({command:{key:b("CometKeys").RIGHT},description:A,handler:x}),d.push(b("cometGetKeyCommandConfig")("photoViewer","viewNext",x)));d.push(b("cometGetKeyCommandConfig")("photoViewer","fullscreen",B));return d},[x,y,A,e,z,q,B]);b("useLayerKeyCommands")(C);return l.jsxs("div",{className:"iqfcb0g7 l9j0dhe7 p01isnhg datstx6m buofh1pr cbu4d94t j83agx80 tqsryivl",ref:function(a){a&&a.focus()},tabIndex:"0",children:[l.jsx("div",{className:"iqfcb0g7 kr520xx4 j9ispegn pmk7jnqg akz8cqyu n7fi1qx3 i09qtzwb",children:c!=null?l.jsx(b("CometBlurredBackgroundImage.react"),{src:c}):null}),l.jsxs("div",{className:"iqfcb0g7 l9j0dhe7 j0qtgc86 e9n865no taijpn5t datstx6m buofh1pr j83agx80",children:[l.jsxs("div",{className:"kr520xx4 j9ispegn pmk7jnqg i1fnvgqd n7fi1qx3 j83agx80 i09qtzwb bp9cbjyn","data-name":"media-viewer-nav-container",children:[p?l.jsx("div",{"aria-hidden":!0,className:"kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",onClick:t}):null,l.jsx("div",{className:"l9j0dhe7 dhix69tm sjgh65i0 wkznzc2l tr9rh885"+(q==null||q===""?" kr9hpln1":""),"data-testid":void 0,children:l.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:143,children:l.jsx(b("TetraCircleButton.react"),{color:"secondary",icon:b("Locale").isRTL()?b("fbicon")._(g("492539"),24):b("fbicon")._(g("492491"),24),label:z,onPress:y,size:48,testid:void 0,type:"overlay"})})}),l.jsx("div",{className:"l9j0dhe7 dhix69tm sjgh65i0 wkznzc2l tr9rh885"+(e==null||e===""?" kr9hpln1":""),"data-testid":void 0,children:l.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:142,children:l.jsx(b("TetraCircleButton.react"),{color:"secondary",icon:b("Locale").isRTL()?b("fbicon")._(g("492491"),24):b("fbicon")._(g("492539"),24),label:A,onPress:x,size:48,testid:void 0,type:"overlay"})})})]}),a.children]})]})}e.exports=a},null);
__d("CometMediaViewerPhotoActions",["fbt","CometRelay","WebPixelRatio","cometPushToast","recoverableViolation","CometMediaViewerPhotoActionsEditMessageMutation.graphql","CometMediaViewerPhotoActionsAddProductTagsMutation.graphql","CometMediaViewerPhotoActionsDeleteProductTagMutation.graphql","CometMediaViewerPhotoActionsCropPhotoMutation.graphql"],function(a,b,c,d,e,f,g){"use strict";var h,i,j,k,l=b("CometRelay").commitMutation;b("CometRelay").graphql;var m=b("cometPushToast").cometPushErrorToast,n=b("cometPushToast").cometPushSimpleToast,o=h!==void 0?h:h=b("CometMediaViewerPhotoActionsEditMessageMutation.graphql");function a(a){var c=a.environment,d=a.input,e=a.onCompleted,f=a.onError;a=d.id;d=d.message;a={message:d,photo_id:a};d={photo:{message:d}};l(c,{mutation:o,onCompleted:e,onError:function(a){f();m({message:g._("N\u00e3o foi poss\u00edvel editar a foto")},4e3);b("recoverableViolation")(a.message,"comet_ui");return},optimisticResponse:d,variables:{input:a}})}var p=i!==void 0?i:i=b("CometMediaViewerPhotoActionsAddProductTagsMutation.graphql");function c(a){var b=a.environment;a=a.input;l(b,{mutation:p,onCompleted:function(){n(g._("Tag de produto enviada com sucesso"),4e3)},onError:function(a){m({message:g._("N\u00e3o foi poss\u00edvel marcar o produto na foto")},4e3)},variables:{input:a}})}var q=j!==void 0?j:j=b("CometMediaViewerPhotoActionsDeleteProductTagMutation.graphql");function d(a){var b=a.environment,c=a.input,d=a.onError;l(b,{mutation:q,onCompleted:function(){n(g._("Etiqueta de produto removida"),4e3)},onError:function(a){m({message:g._("N\u00e3o foi poss\u00edvel excluir a marca\u00e7\u00e3o")},4e3),d()},variables:{input:c}})}var r=k!==void 0?k:k=b("CometMediaViewerPhotoActionsCropPhotoMutation.graphql");function f(a){var c=a.environment,d=a.input,e=a.onCompleted,f=a.onError;l(c,{mutation:r,onCompleted:e,onError:function(a){m({message:g._("N\u00e3o \u00e9 poss\u00edvel cortar a foto")},4e3),f&&f()},variables:{input:d,scale:b("WebPixelRatio").get()}})}c={addProductTags:c,cropPhoto:f,deleteProductTag:d,edit:a};e.exports=c},null);