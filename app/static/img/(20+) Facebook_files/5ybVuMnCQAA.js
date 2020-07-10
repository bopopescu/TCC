if (self.CavalryLogger) { CavalryLogger.start_js(["\/Yd7V"]); }

__d("usePagesCometCoverPhotoUpdateMutation.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"scale"}],b=[{kind:"Variable",name:"data",variableName:"input"}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"usePagesCometCoverPhotoUpdateMutation",selections:[{alias:null,args:b,concreteType:"PageUpdateCoverPhotoResponsePayload",kind:"LinkedField",name:"page_update_cover_photo",plural:!1,selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometPageCoverRenderer_page"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"usePagesCometCoverPhotoUpdateMutation",selections:[{alias:null,args:b,concreteType:"PageUpdateCoverPhotoResponsePayload",kind:"LinkedField",name:"page_update_cover_photo",plural:!1,selections:[{alias:null,args:null,concreteType:"Page",kind:"LinkedField",name:"page",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:[{kind:"Literal",name:"supported",value:["CometPageCoverPhotoRenderer","CometPageCoverVideoRenderer","CometPageCoverSlideshowRenderer","PagesCometAdminCoverPhotoRenderer","PagesCometAdminCoverSlideshowRenderer","PagesCometAdminCoverVideoRenderer"]}],concreteType:null,kind:"LinkedField",name:"comet_page_cover_renderer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{documentName:"CometPageCoverRenderer_page",fragmentName:"CometPageCoverPhotoRenderer_coverRenderer",fragmentPropName:"coverRenderer",kind:"ModuleImport"}],type:"CometPageCoverPhotoRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometPageCoverRenderer_page",fragmentName:"CometPageCoverVideoRenderer_coverRenderer",fragmentPropName:"coverRenderer",kind:"ModuleImport"}],type:"CometPageCoverVideoRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometPageCoverRenderer_page",fragmentName:"CometPageCoverSlideshowRenderer_coverRenderer",fragmentPropName:"coverRenderer",kind:"ModuleImport"}],type:"CometPageCoverSlideshowRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometPageCoverRenderer_page",fragmentName:"PagesCometAdminCoverPhotoRenderer_coverRenderer",fragmentPropName:"coverRenderer",kind:"ModuleImport"}],type:"PagesCometAdminCoverPhotoRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometPageCoverRenderer_page",fragmentName:"PagesCometAdminCoverSlideshowRenderer_coverRenderer",fragmentPropName:"coverRenderer",kind:"ModuleImport"}],type:"PagesCometAdminCoverSlideshowRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometPageCoverRenderer_page",fragmentName:"PagesCometAdminCoverVideoRenderer_coverRenderer",fragmentPropName:"coverRenderer",kind:"ModuleImport"}],type:"PagesCometAdminCoverVideoRenderer",abstractKey:null}],storageKey:'comet_page_cover_renderer(supported:["CometPageCoverPhotoRenderer","CometPageCoverVideoRenderer","CometPageCoverSlideshowRenderer","PagesCometAdminCoverPhotoRenderer","PagesCometAdminCoverSlideshowRenderer","PagesCometAdminCoverVideoRenderer"])'}],storageKey:null}],storageKey:null}]},params:{id:"3137092456312141",metadata:{},name:"usePagesCometCoverPhotoUpdateMutation",operationKind:"mutation",text:null}}}();e.exports=a},null);
__d("CometPageCoverVideoPlayer.react",["React","VideoPlayerDefaultControls.react","VideoPlayerPlaybackControl.react","VideoPlayerRelay.react","VideoPlayerSurface.react"],function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.displayEditButton,d=a.displayPlaybackControl,e=a.shouldLoop;a=a.video;return g.jsx(b("VideoPlayerRelay.react"),{initialForceHD:!0,loopCount:e===!0?-1:0,portalingEnabled:!1,subOrigin:"pages_cover",video:a,children:g.jsx(b("VideoPlayerSurface.react"),{children:c===!0||d===!0?g.jsx(b("VideoPlayerPlaybackControl.react"),{}):g.jsx(b("VideoPlayerDefaultControls.react"),{})})})}e.exports=a},null);
__d("usePagesCometCoverPhotoUpdateMutation",["CometRelay","WebPixelRatio","usePagesCometCoverPhotoUpdateMutation.graphql"],function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useMutation;function a(){var a=h(g!==void 0?g:g=b("usePagesCometCoverPhotoUpdateMutation.graphql")),c=a[0];return function(a,d,e,f,g,h){c({onCompleted:a,onError:d,variables:{input:{cover_photo_id:h,focus:{x:e,y:f},page_id:g},scale:b("WebPixelRatio").get()}})}}e.exports=a},null);