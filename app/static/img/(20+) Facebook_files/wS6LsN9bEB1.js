if (self.CavalryLogger) { CavalryLogger.start_js(["\/h+Yq"]); }

__d("VideoPlayerQualitiesArray",[],function(a,b,c,d,e,f){"use strict";var g=720,h=2160;function a(a){return a}function i(a){a=a.length>0?a[a.length-1]:void 0;return a}function j(a){a=a.length>0?a[0]:void 0;return a}function b(a){return a.length>1}function k(a,b){a=i(a);return a!=null&&b!=null&&b===a}function c(a){return a!=null&&(a==="HD"||parseInt(a,10)>=g)}function d(a){return a!=null&&parseInt(a,10)>=h}function f(a,b){var c=j(a),d=i(a);if(k(a,b)){if(c!=null)return c}else if(d!=null)return d;return void 0}e.exports={ensureVideoPlayerQualitiesArray:a,getHighestVideoQuality:i,getLowestVideoQuality:j,getPreferredVideoQualityForToggleHD:f,hasHDVideoQuality:b,isHDSelectedVideoQuality:k,isVideoQualityTypicallyConsideredHD:c,isVideoQualityTypicallyConsideredHD4K:d}},null);
__d("BaseVideoPlayer.react",["React","SubscriptionsHandler","VideoPlayerQualitiesArray","emptyFunction","once","stylex"],function(a,b,c,d,e,f){"use strict";var g=b("React"),h=b("VideoPlayerQualitiesArray").ensureVideoPlayerQualitiesArray;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),h=0;h<e;h++)f[h]=arguments[h];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={muted:Boolean(d.props.startMuted)},d.$1=g.createRef(),d.$3=null,d.$4=g.createRef(),d.$2=new(b("SubscriptionsHandler"))(),d.$5=function(a){d.props.onUpdate&&d.props.onUpdate(babelHelpers.assertThisInitialized(d)),d.$3!=null&&(d.play(d.$3),d.$3=null)},d.$6=function(a){d.props.onUpdate&&d.props.onUpdate(babelHelpers.assertThisInitialized(d))},d.$7=function(a){a=a.currentTarget;d.state.muted!==a.muted&&d.setState({muted:a.muted})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){var a=this.$1.current;a&&a.load()};d.componentWillUnmount=function(){this.$2.release();var a=this.$1.current;a&&a.pause()};d.getAvailableVideoQualities=function(){return h([])};d.setPreferredVideoQuality=function(a){};d.getContainerNode=function(){return this.$4.current};d.getController=function(){return this};d.play=function(a){var b=this.$1.current;b?b.play():this.$3=a};d.pause=function(a){a=this.$1.current;a&&a.pause()};d.mute=function(){this.setState({muted:!0})};d.unmute=function(){this.setState({muted:!1})};d.getPlaybackDuration=function(){var a;return((a=this.$1.current)==null?void 0:a.duration)||0};d.getCurrentTimePosition=function(){var a;return((a=this.$1.current)==null?void 0:a.currentTime)||0};d.addListener=function(){for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];var e=this.$1.current;if(e!=null){e.addEventListener.apply(e,c);var f={remove:b("once")(function(){e.removeEventListener.apply(e,c)})};this.$2.addSubscriptions(f);return f}return{remove:b("emptyFunction")}};d.render=function(){var a=this.props,b=a.autoplay,c=a.controls,d=a.loop;a=a.playableUrl;return g.jsx("div",{className:"k4urcfbm l9j0dhe7 qowsmv63 datstx6m j83agx80",ref:this.$4,children:g.jsx("video",{autoPlay:b,className:"k4urcfbm qowsmv63 datstx6m",controls:c,controlsList:"nodownload",loop:d,muted:this.state.muted,onLoadedData:this.$5,onLoadedMetadata:this.$6,onVolumeChange:this.$7,ref:this.$1,src:a})})};return c}(g.PureComponent);a.defaultProps={autoplay:!1,controls:!0,loop:!1,startMuted:!1};e.exports=a},null);
__d("CometStarRatingSingleStar.react",["ix","CometTintedIcon.react","React","fbicon"],function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(a){var c=i(a.size);return h.jsx(b("CometTintedIcon.react"),{color:a.color,icon:c})}function i(a){switch(a){case 12:return b("fbicon")._(g("479321"),12);case 16:return b("fbicon")._(g("479324"),16);case 20:return b("fbicon")._(g("479327"),20);case 24:return b("fbicon")._(g("479330"),24);case 32:return b("fbicon")._(g("660688"),32);default:return b("fbicon")._(g("479327"),20)}}e.exports=a},null);
__d("CometMarketplaceHiddenItemOverlay.react",["ix","CometImage.react","React","TetraText.react","asset","stylex"],function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(a){return h.jsxs("div",{className:"k4urcfbm oqcyycmt pmk7jnqg dati1w0a ihqw7lf3 hv4rvrfc discj3wi kgtf8isp pdlg2rys taijpn5t datstx6m cbu4d94t j83agx80 s8bbyrx9 bp9cbjyn",children:[h.jsx(b("CometImage.react"),{src:g("566725")}),h.jsx("div",{className:"discj3wi",children:h.jsx(b("TetraText.react"),{color:"white",type:"bodyLink3",children:a.label})})]})}e.exports=a},null);
__d("CometMarketplacePhotoCarousel.react",["fbt","BaseVideoPlayer.react","CometBlurredBackgroundImage.react","CometImage.react","CometKeys","CometMarketplaceHiddenItemOverlay.react","CometTheme.react","MarketplacePDPMediaViewerSetImageContext","React","stylex","useLayerKeyCommands","useResizeObserver"],function(a,b,c,d,e,f,g){"use strict";var h=b("MarketplacePDPMediaViewerSetImageContext").SetImageContext,i=b("React");c=b("React");var j=c.useCallback,k=c.useContext,l=c.useMemo,m=c.useState,n=g._("Foto anterior"),o=g._("Pr\u00f3xima foto"),p=.75;function q(a,b){var c=b[0];b=b[1];var d=a.width,e=a.height;if(a.mediaType!=="video"&&Boolean(a.isUseImageResizing)){a=c/d;var f=b/e;f=Math.min(f,a);return[d*f*p,e*f*p]}if(e<1||d<1)return[1,1];a=Math.min(d,c)/d;f=Math.min(e,b)/e;c=Math.min(f,a);return[d*c,e*c]}function a(a){var c=k(h),d=c.imageIndex,e=c.setImageIndex;(d>=a.images.length||d<0)&&e(0);c=m(null);var f=c[0],p=c[1];c=m(null);var r=c[0],s=c[1],t=(c=a.images[d])!=null?c:a.images[0];c=b("useResizeObserver")(function(a){if(t==null||t.width<1)return;a=[a.width,a.height];var b=q(t,a);p(a);s(b)});var u=j(function(){var b=(d+1)%a.images.length;e(b);f!=null&&s(q(a.images[b],f))},[d,f,a.images,e]),v=j(function(){var b=a.images.length;b=(d-1+b)%b;e(b);f!=null&&s(q(a.images[b],f))},[d,f,a.images,e]),w=j(function(b){if(b<0||b>a.images.length-1)return;e(b);f!=null&&s(q(a.images[b],f))},[f,a.images,e]),x=l(function(){return[{command:{key:b("CometKeys").LEFT},description:n,handler:v},{command:{key:b("CometKeys").RIGHT},description:o,handler:u}]},[v,u]),y=a.arrowFactory(v,u),z=y[0];y=y[1];var A=r?r[0]:null;r=r?r[1]:null;var B=t.backgroundColor!=null?{backgroundColor:t.backgroundColor}:null;b("useLayerKeyCommands")(x);if(t==null||t.width<1||t.height<1)return null;x=null;switch(t.mediaType){case"video":x=i.jsx(b("BaseVideoPlayer.react"),{autoplay:!0,playableUrl:t.uri,subOrigin:"media_viewer"});break;case"image":default:r!=null&&A!=null&&t!=null&&Boolean(t.uri)&&(x=i.jsx(b("CometImage.react"),{alt:t.alt,height:r,src:t.uri,width:A}));break}return i.jsxs("div",{className:"k4urcfbm abiwlrkh l9j0dhe7 taijpn5t datstx6m buofh1pr cbu4d94t j83agx80 tqsryivl bp9cbjyn",style:B,children:[t.mediaType!=="video"&&(Boolean(t.isUseImageResizing)||!Boolean(t.uri))?null:i.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg kgtf8isp n7fi1qx3 i09qtzwb",children:t!=null&&t.uri!==""&&i.jsx(b("CometBlurredBackgroundImage.react"),{src:t.uri})}),i.jsx("div",{className:"du4w35lb k4urcfbm stjgntxs ni8dbmo4 taijpn5t buofh1pr j83agx80 bp9cbjyn",ref:c,children:x}),i.jsx("div",{className:"du4w35lb giggcyz0",children:a.footerFactory(d,w)}),a.images.length>1&&i.jsxs(i.Fragment,{children:[i.jsx(b("CometTheme.react"),{className:"du4w35lb hoqoy4am pmk7jnqg ax37mqq2",element:"div",theme:"light",children:z}),i.jsx(b("CometTheme.react"),{className:"du4w35lb hoqoy4am pmk7jnqg oqnctjl6",element:"div",theme:"light",children:y})]}),a.isHidden===!0?i.jsx(b("CometMarketplaceHiddenItemOverlay.react"),{label:g._("Voc\u00ea n\u00e3o ver\u00e1 este item no Marketplace.")}):null]})}e.exports=a},null);
__d("CometMediaViewerFilmstrip.react",["ix","fbt","CometBackgroundImage.react","CometImage.react","CometPressable.react","CometThrottle","Locale","React","TetraIcon.react","fbicon","stylex"],function(a,b,c,d,e,f,g,h){"use strict";var i,j=b("React");c=b("React");var k=c.useEffect,l=c.useRef,m=c.useState;d=36;f=6;var n=d+f*2,o={imageInner:{height:"datstx6m",objectFit:"r0294ipz",overflowX:"ni8dbmo4",overflowY:"stjgntxs",width:"k4urcfbm"},root:{alignItems:"bp9cbjyn",display:"j83agx80",height:"tv7at329",paddingTop:"cxgpxx05",paddingBottom:"sj5x9vvc",transitionDuration:"pc15xi3s",transitionProperty:"flx89l3n",transitionTimingFunction:"eloblzlw",whiteSpace:"g0qnabr5"},thumbnail:{cursor:"nhd2j8a9",height:"tv7at329",width:"thwo4zme"},thumbnailContainer:{borderTopStartRadius:"beltcj47",borderTopEndRadius:"p86d2i9g",borderBottomEndRadius:"aot14ch1",borderBottomStartRadius:"kzx2olss",display:"q9uorilb",flexShrink:"pfnyh3mw",height:"tv7at329",marginEnd:"fv0vnmcu",marginStart:"ggphbty4",overflowX:"ni8dbmo4",overflowY:"stjgntxs",width:"thwo4zme"},thumbnailNonActive:{opacity:"ggwglk7f",":hover":{opacity:"oecfc0l4"}},videoIcon:{alignItems:"bp9cbjyn",display:"j83agx80",height:"bipmatt0",justifyContent:"taijpn5t",position:"pmk7jnqg",width:"iyyx5f41"}};function p(a){var c=a.image.mediaType!=="video"&&Boolean(a.image.isUseImageResizing)?{backgroundColor:a.image.backgroundColor}:{},d=a.image.mediaType!=="video"?a.image.uri:a.image.thumbnailUri;return j.jsx("div",{className:(i||(i=b("stylex")))(o.thumbnailContainer),children:j.jsx(b("CometPressable.react"),{display:"inline",label:h._("Miniatura {index}",[h._param("index",a.index)]),onPress:a.onClick,overlayDisabled:!0,children:j.jsxs("div",{className:i(o.thumbnail,a.active!==!0?o.thumbnailNonActive:null),style:c,children:[a.image.mediaType==="video"?j.jsx("div",{className:(i||(i=b("stylex")))(o.videoIcon),children:j.jsx(b("TetraIcon.react"),{color:"white",icon:b("fbicon")._(g("507224"),12)})}):null,a.image.mediaType!=="video"&&Boolean(a.image.isUseImageResizing)?j.jsx(b("CometImage.react"),{src:d,xstyle:o.imageInner}):j.jsx(b("CometBackgroundImage.react"),{src:d})]})})})}function a(a){var c=m(0),d=c[0],e=c[1],f=l(null),g=l(null),h=l(null);k(function(){function c(){if(f.current!=null){var b=f.current,c=b.offsetWidth;b=b.scrollWidth;var g=h.current;if(b===c)return;b=-d/n;var i=Math.floor((c+-d)/n),j=b+Math.floor((i-b)/2);if(g!=null){if(a.activeIndex>g&&(a.activeIndex<j||i===a.images.length)){h.current=a.activeIndex;return}if(a.activeIndex<g&&(a.activeIndex>j||b===0)){h.current=a.activeIndex;return}}j=d-(a.activeIndex-((i=g)!=null?i:0))*n;j=Math.min(0,j);j=Math.max(Math.floor(c-a.images.length*n),j);h.current=a.activeIndex;e(j)}}c();g.current!=null&&window.removeEventListener("resize",g.current);c=b("CometThrottle")(c,100);g.current=c;window.addEventListener("resize",c);return function(){g.current!=null&&window.removeEventListener("resize",g.current)}},[a.images,a.activeIndex,d]);return a.images.length<2?null:j.jsx("div",{className:(i||(i=b("stylex")))(o.root),ref:f,style:{transform:"translate3d("+(b("Locale").isRTL()?-d:d)+"px, 0, 0)"},children:a.images.map(function(b,c){return j.jsx(p,{active:a.activeIndex===c,image:b,index:c,onClick:function(b){a.onSetImage(c)}},"thumbnail_"+c)})})}e.exports=a},null);
__d("MarketplacePDPBaseMediaViewer.react",["ix","fbt","CometMarketplacePhotoCarousel.react","CometMediaViewerFilmstrip.react","Locale","React","TetraCircleButton.react","fbicon","useMatchDesktopLayout"],function(a,b,c,d,e,f,g,h){"use strict";var i=b("Locale").isRTL,j=b("React");function a(a){var c=a.images,d=b("useMatchDesktopLayout")(),e=i();if(c.length===0)return null;function f(a,d){return j.jsx(b("CometMediaViewerFilmstrip.react"),{activeIndex:a,images:c,onSetImage:d})}function k(a,c){return d?[j.jsx(b("TetraCircleButton.react"),{color:"secondary",icon:e?b("fbicon")._(g("492539"),24):b("fbicon")._(g("492491"),24),label:h._("Veja a imagem anterior"),onPress:a,size:48,type:"overlay"}),j.jsx(b("TetraCircleButton.react"),{color:"secondary",icon:e?b("fbicon")._(g("492491"),24):b("fbicon")._(g("492539"),24),label:h._("Ver pr\u00f3xima imagem"),onPress:c,size:48,type:"overlay"})]:[null,null]}return j.jsx(b("CometMarketplacePhotoCarousel.react"),{arrowFactory:k,footerFactory:f,images:c,isHidden:a.isHidden})}e.exports=a},null);
__d("MarketplacePDPC2CAttributesComponent.react",["CometPlaceholder.react","CometRelay","MarketplaceComposerAttributesSectionQuery.graphql","MarketplacePDPContext","MarketplacePDPPreviewDisabledWrapper.react","React","TetraText.react","TetraTextPairing.react","cometMarketplacePDPUtils","marketplaceComposerDispatchers","stylex"],function(a,b,c,d,e,f){"use strict";var g=b("CometRelay").useLazyLoadQuery,h=b("MarketplacePDPContext").usePDPContext,i=b("React"),j=b("cometMarketplacePDPUtils").getPreviewTextColor,k=b("marketplaceComposerDispatchers").useMarketplaceComposerC2CViewState,l=b("marketplaceComposerDispatchers").usePDPPreviewConfig;function m(a){var c=a.index,d=a.label;a=a.name;var e=k();e=e.attributes;e=l(e);var f=e.isGrayedOut;e=e.isHovered;return i.jsx(b("MarketplacePDPPreviewDisabledWrapper.react"),{element:"li",shouldGrayOut:f&&!e,children:i.jsxs("div",{className:"a8nywdso f10w8fjw rz4wbd8a pybr56ya i1fnvgqd j83agx80 ll8tlv6m"+(c!==0?" kjdn3f0s":""),justify:"all",children:[i.jsx("span",{className:"n99xedck ph5uu5jm",children:i.jsx(b("TetraTextPairing.react"),{body:i.jsx(b("TetraText.react"),{color:j(e),type:"bodyLink3",children:a}),level:3})}),i.jsx("span",{className:"n99xedck ftzlm3b6 b3onmgus",children:i.jsx(b("TetraTextPairing.react"),{body:i.jsx(b("TetraText.react"),{color:j(e),type:"body3",children:d}),level:3})})]},a)})}function n(a){var c=k();c=c.selectedCategory;c=c.value;c=g(b("MarketplaceComposerAttributesSectionQuery.graphql"),{categoryID:c},{fetchPolicy:"store-only"});var d=[];c=(c=c==null?void 0:(c=c.viewer)==null?void 0:c.marketplace_composer_attribute_definitions)!=null?c:a.attributes;c!=null&&(d=c.map(function(b){var c=a.attributes.find(function(a){a=a.attribute_name;return a===b.attribute_name});return(c=c)!=null?c:{attribute_name:b.attribute_name,label:"\u2014",value:b.attribute_name}}));return a.children(d)}function o(a){return a.children(a.attributes)}function p(a){var b=h();b=b.isPreview;b=b===void 0?!1:b;b=b?n:o;return i.jsx(b,{attributes:a.attributes,children:function(a){return i.jsx("ul",{children:a.map(function(a,b){var c=a==null?void 0:a.attribute_name;a=a==null?void 0:a.label;return c==null||a==null?null:i.jsx(m,{index:b,label:a,name:c},c)})})}})}e.exports=function(a){return i.jsx(b("CometPlaceholder.react"),{fallback:i.jsx("span",{}),children:i.jsx(p,babelHelpers["extends"]({},a))})}},null);
__d("MarketplacePDPLocationTextComponent.react",["fbt","MarketplacePDPPreviewDisabledWrapper.react","React","TetraText.react","TetraTextPairing.react","cometMarketplacePDPUtils","marketplaceComposerDispatchers","stylex"],function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=b("cometMarketplacePDPUtils").getPreviewBodyColor,j=b("cometMarketplacePDPUtils").getPreviewMetaColor,k=b("marketplaceComposerDispatchers").useMarketplaceComposerCommonViewState,l=b("marketplaceComposerDispatchers").usePDPPreviewConfig;function a(a){var c=k();c=c.location;c=l(c);var d=c.isGrayedOut;c=c.isHovered;return h.jsx("div",{className:"hcukyx3x n851cfcs cxmmr5t8 n1l5q3vz",children:h.jsx(b("MarketplacePDPPreviewDisabledWrapper.react"),{shouldGrayOut:d&&!c,children:h.jsx(b("TetraTextPairing.react"),{body:h.jsx(b("TetraText.react"),{color:i(c,"primary"),type:"bodyLink3",children:d?g._("Localiza\u00e7\u00e3o"):a.location}),level:3,meta:h.jsx(b("TetraText.react"),{color:j(c),type:"meta3",children:g._("A localiza\u00e7\u00e3o \u00e9 aproximada")})})})})}e.exports=a},null);
__d("MWChatMessageId.re",["bs_curry","MWChatMessageId.bs"],function(a,b,c,d,e,f){a=b("MWChatMessageId.bs").getMessageId;f.getMessageId=a;c=b("MWChatMessageId.bs").getThreadId;f.getThreadId=c;d=function(a,c,d){a=b("bs_curry")._3(b("MWChatMessageId.bs").makeSent,a,c,d);return a};f.makeSent=d},null);