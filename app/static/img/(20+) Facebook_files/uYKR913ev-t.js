if (self.CavalryLogger) { CavalryLogger.start_js(["nBxdq"]); }

__d("XCometFundraiserWithPresenceControllerRouteBuilder",["cometRouteBuilder"],function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/donate/{?campaign_id}/{?post_id}/",Object.freeze({add_organizers:!1,apply_profile_frame:!1,composer:!1,create_outro:!1,edit:!1,invite:!1,match_confirm:!1,match_pledge:!1,payout_setup:!1,payout_verification:!1,share:!1,thank_you:!1}),new Set(["add_organizers","apply_profile_frame","composer","create_outro","edit","invite","match_confirm","match_pledge","payout_setup","payout_verification","share","thank_you"]));e.exports=a},null);
__d("FundraiserDonateButton_fundraiser.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Variable",name:"source",variableName:"source"};return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"donateRef"},{defaultValue:null,kind:"LocalArgument",name:"prevSource"},{defaultValue:null,kind:"LocalArgument",name:"source"}],kind:"Fragment",metadata:null,name:"FundraiserDonateButton_fundraiser",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_donate",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"donation_disabled_reason_message",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],storageKey:null},{alias:null,args:[{kind:"Variable",name:"donate_ref",variableName:"donateRef"},{kind:"Variable",name:"prev_source",variableName:"prevSource"},a],kind:"ScalarField",name:"mobile_donate_url",storageKey:null},{args:[{kind:"Variable",name:"donateRef",variableName:"donateRef"},{kind:"Variable",name:"prevSource",variableName:"prevSource"},a],kind:"FragmentSpread",name:"useFundraiserDonateCometCheckout_fundraiser"}],type:"Fundraiser",abstractKey:"__isFundraiser"}}();e.exports=a},null);
__d("FundraiserShareButton_fundraiser.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FundraiserShareButton_fundraiser",selections:[{alias:"fundraiserID",args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"useFundraiserShareAction_fundraiser"}],type:"Fundraiser",abstractKey:"__isFundraiser"};e.exports=a},null);
__d("FundraiserShareButton_viewer.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FundraiserShareButton_viewer",selections:[{args:null,kind:"FragmentSpread",name:"useFundraiserShareAction_viewer"}],type:"Viewer",abstractKey:null};e.exports=a},null);
__d("FundraiserAttachmentProgressBarRefetchQuery.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"id"}],b=[{kind:"Variable",name:"id",variableName:"id"}],c=[{alias:null,args:null,kind:"ScalarField",name:"amount",storageKey:null}],d=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FundraiserAttachmentProgressBarRefetchQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"FundraiserAttachmentProgressBar_fundraiser"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FundraiserAttachmentProgressBarRefetchQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"amount_raised",plural:!1,selections:c,storageKey:null},{alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"goal_amount",plural:!1,selections:c,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"fundraiser_progress_text",plural:!1,selections:d,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"days_left_text",plural:!1,selections:d,storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"has_ended",storageKey:null}],type:"FundraiserWithPresence",abstractKey:"__isFundraiserWithPresence"}],type:"Fundraiser",abstractKey:"__isFundraiser"}],storageKey:null}]},params:{id:"2860786700700438",metadata:{},name:"FundraiserAttachmentProgressBarRefetchQuery",operationKind:"query",text:null}}}();e.exports=a},null);
__d("FundraiserAttachmentProgressBar_fundraiser.graphql",["FundraiserAttachmentProgressBarRefetchQuery.graphql"],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"amount",storageKey:null}],c=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:{refetch:{connection:null,fragmentPathInResult:["node"],operation:b("FundraiserAttachmentProgressBarRefetchQuery.graphql"),identifierField:"id"}},name:"FundraiserAttachmentProgressBar_fundraiser",selections:[{alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"amount_raised",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"goal_amount",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"fundraiser_progress_text",plural:!1,selections:c,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"days_left_text",plural:!1,selections:c,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"has_ended",storageKey:null}],type:"FundraiserWithPresence",abstractKey:"__isFundraiserWithPresence"}],type:"Fundraiser",abstractKey:"__isFundraiser"}}();e.exports=a},null);
__d("FundraiserAttachmentSocialContextRefetchQuery.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"id"}],b=[{kind:"Variable",name:"id",variableName:"id"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d=[{kind:"Literal",name:"first",value:5}],e=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"FundraiserAttachmentSocialContextRefetchQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"FundraiserAttachmentSocialContext_fundraiser"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"FundraiserAttachmentSocialContextRefetchQuery",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c,{kind:"InlineFragment",selections:[{alias:null,args:d,concreteType:"FundraiserFriendDonorsConnection",kind:"LinkedField",name:"friend_donors",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:"friend_donors(first:5)"},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"donors_social_context_text",plural:!1,selections:e,storageKey:null},{alias:"facepile_donors",args:d,concreteType:"FundraiserFriendDonorsConnection",kind:"LinkedField",name:"friend_donors",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},c],storageKey:null}],storageKey:"friend_donors(first:5)"},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"donation_matching_text",plural:!1,selections:e,storageKey:null}],type:"FundraiserWithPresence",abstractKey:"__isFundraiserWithPresence"}],type:"Fundraiser",abstractKey:"__isFundraiser"}],storageKey:null}]},params:{id:"3111363455552103",metadata:{},name:"FundraiserAttachmentSocialContextRefetchQuery",operationKind:"query",text:null}}}();e.exports=a},null);
__d("useFundraiserBoCDonateDialog_fundraiser.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"donateRef"},{defaultValue:null,kind:"LocalArgument",name:"prevSource"},{defaultValue:null,kind:"LocalArgument",name:"source"}],kind:"Fragment",metadata:null,name:"useFundraiserBoCDonateDialog_fundraiser",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_donate",storageKey:null},{alias:null,args:[{kind:"Variable",name:"donate_ref",variableName:"donateRef"},{kind:"Variable",name:"prev_source",variableName:"prevSource"},{kind:"Variable",name:"source",variableName:"source"}],kind:"ScalarField",name:"mobile_donate_url",storageKey:null}],type:"Fundraiser",abstractKey:"__isFundraiser"};e.exports=a},null);
__d("useFundraiserDonateCometCheckout_fundraiser.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"donateRef"},{defaultValue:null,kind:"LocalArgument",name:"prevSource"},{defaultValue:null,kind:"LocalArgument",name:"source"}],kind:"Fragment",metadata:null,name:"useFundraiserDonateCometCheckout_fundraiser",selections:[a,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"beneficiary",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"payment_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"receiver_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_donate",storageKey:null},{args:[{kind:"Variable",name:"donateRef",variableName:"donateRef"},{kind:"Variable",name:"prevSource",variableName:"prevSource"},{kind:"Variable",name:"source",variableName:"source"}],kind:"FragmentSpread",name:"useFundraiserBoCDonateDialog_fundraiser"}],type:"Fundraiser",abstractKey:"__isFundraiser"}}();e.exports=a},null);
__d("useFundraiserShareAction_fundraiser.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useFundraiserShareAction_fundraiser",selections:[{alias:null,args:null,kind:"ScalarField",name:"fundraiser_campaign_type",storageKey:null},a,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},a],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_share_fundraiser",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_manage",storageKey:null},{alias:null,args:null,concreteType:"FundraiserCreatorManagement",kind:"LinkedField",name:"creator_management",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"fundraiser_management_share_placeholder_text",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],storageKey:null}],type:"FundraiserWithPresence",abstractKey:"__isFundraiserWithPresence"}],type:"Fundraiser",abstractKey:"__isFundraiser"}}();e.exports=a},null);
__d("useFundraiserShareAction_viewer.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useFundraiserShareAction_viewer",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a},null);
__d("FundraiserPageSupporterCardRefetchQuery.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"id"},b={defaultValue:null,kind:"LocalArgument",name:"scale"},c=[{kind:"Variable",name:"id",variableName:"id"}],d={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null},l={kind:"InlineFragment",selections:[e],type:"Node",abstractKey:"__isNode"},m={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[a,b],kind:"Fragment",metadata:null,name:"FundraiserPageSupporterCardRefetchQuery",selections:[{alias:null,args:c,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"FundraiserPageSupporterCard_fundraiser"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[b,a],kind:"Operation",name:"FundraiserPageSupporterCardRefetchQuery",selections:[{alias:null,args:c,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[d,e,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_donate",storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:10}],concreteType:"FundraiserFriendDonorsConnection",kind:"LinkedField",name:"friend_donors",plural:!1,selections:[f,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"nodes",plural:!0,selections:[g,{alias:null,args:[{kind:"Literal",name:"height",value:40},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[h],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},e],storageKey:null}],storageKey:"friend_donors(first:10)"},{alias:null,args:null,kind:"ScalarField",name:"has_viewer_donated",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"privacy_unaware_donor_count",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"FundraiserCreatorManagement",kind:"LinkedField",name:"creator_management",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"fundraiser_management_progress_header_text",plural:!1,selections:[i],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"privacy_unaware_invitee_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"privacy_unaware_sharer_count",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"supporter_card_social_context_text",plural:!1,selections:[{alias:null,args:null,concreteType:"ImageAtRange",kind:"LinkedField",name:"image_ranges",plural:!0,selections:[j,k,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity_with_image",plural:!1,selections:[d,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},h,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},l],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InlineStyleAtRange",kind:"LinkedField",name:"inline_style_ranges",plural:!0,selections:[j,k,{alias:null,args:null,kind:"ScalarField",name:"inline_style",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[j,k,f,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[d,{kind:"InlineFragment",selections:[e,g],type:"User",abstractKey:null},l],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[d,{kind:"TypeDiscriminator",abstractKey:"__isEntity"},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},{kind:"InlineFragment",selections:[e,{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"Actor",abstractKey:"__isActor"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null},e,{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[m,{alias:null,args:null,concreteType:"WorkUserInfo",kind:"LinkedField",name:"work_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active_account",storageKey:null}],storageKey:null}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[m,{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group",abstractKey:null},l],storageKey:null},j,k],storageKey:null},i],storageKey:null}],type:"FundraiserWithPresence",abstractKey:"__isFundraiserWithPresence"}],type:"Fundraiser",abstractKey:"__isFundraiser"}],storageKey:null}]},params:{id:"4130556846969524",metadata:{},name:"FundraiserPageSupporterCardRefetchQuery",operationKind:"query",text:null}}}();e.exports=a},null);
__d("useOpenPageShareComposer",["React","useCometPageComposerDialog","useResumableComposerViewState"],function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useCallback;function a(a,c,d){var e=b("useResumableComposerViewState")(),f=e.clearResumableViewState,h=e.saveResumableViewState;e=g(function(a){h(a)},[h]);var i=g(function(){f()},[f]);e=b("useCometPageComposerDialog")({actorID:a,composerEntryPointRef:"pages_posts",composerType:"page",onBeforeClose:e,onClose:d,onSave:i,pageID:a});var j=e[0];d=g(function(){j({beginningViewState:c})},[c,j]);return d}e.exports=a},null);
__d("useFundraiserBoCDonateDialog",["CometRelay","JSResource","absoluteToRelative","gkx","useCometLazyDialog","useFundraiserBoCDonateDialog_fundraiser.graphql"],function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("JSResource")("CometCompatModal.react").__setRef("useFundraiserBoCDonateDialog"),j=g!==void 0?g:g=b("useFundraiserBoCDonateDialog_fundraiser.graphql");function a(a){var c=a.fundraiser,d=a.onClose;a=b("gkx")("708253");c=h(j,c);var e=b("useCometLazyDialog")(i),f=e[0],g=c==null?void 0:c.mobile_donate_url;if(!a||g==null||c==null||(c==null?void 0:c.can_donate)!==!0)return null;e=function(){f({params:{rel:"dialog",uri:b("absoluteToRelative")(g)}},d)};return e}e.exports=a},null);
__d("useFundraiserDonateCometCheckout",["CometRelay","React","SocialGoodCharityActionsLoggingUtils","emptyFunction","gkx","useFundraiserBoCDonateDialog","useNullthrowsViolation","usePaymentsCometCheckout","useFundraiserDonateCometCheckout_fundraiser.graphql"],function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment;c=b("React");var i=c.useCallback,j=b("SocialGoodCharityActionsLoggingUtils").logFundraiserDonateEvent,k=g!==void 0?g:g=b("useFundraiserDonateCometCheckout_fundraiser.graphql");function a(a){var c=a.extraData,d=a.fundraiser,e=a.onClose,f=a.overrideAmountForMatching,g=a.overridePaymentTypeForMatching,l=h(k,d),m=b("useFundraiserBoCDonateDialog")({fundraiser:l,onClose:e});f=b("usePaymentsCometCheckout")({checkoutProps:{extraData:c,orderID:l==null?void 0:l.id,overrideAmount:f,paymentType:b("useNullthrowsViolation")((a=g)!=null?a:l==null?void 0:l.payment_type),receiverID:b("useNullthrowsViolation")(l==null?void 0:l.receiver_id),receiverName:l==null?void 0:(d=l.beneficiary)==null?void 0:d.name},onClose:e||b("emptyFunction")});var n=f[0];a=i(function(){if(g!=null||b("gkx")("1341566")){var a;j("initialization",(a=c==null?void 0:c.sourceData)!=null?a:{},l==null?void 0:l.id);n()}else m&&m()},[c,n,m,g]);return(l==null?void 0:l.can_donate)!==!0?null:a}e.exports=a},null);
__d("FundraiserDonateButton.react",["ix","fbt","CometErrorBoundary.react","CometLazyPopoverTrigger.react","CometRelay","JSResource","React","TetraButton.react","fbicon","gkx","useFundraiserDonateCometCheckout","FundraiserDonateButton_fundraiser.graphql"],function(a,b,c,d,e,f,g,h){"use strict";var i;b("CometRelay").graphql;var j=b("CometRelay").useFragment,k=b("React"),l=b("JSResource")("FundraiserTextWithEntitiesPopover.react").__setRef("FundraiserDonateButton.react"),m=i!==void 0?i:i=b("FundraiserDonateButton_fundraiser.graphql");function n(a){var c=a.disabled;c=c===void 0?!1:c;var d=a.donateRef,e=a.fundraiser,f=a.labelIsHidden;f=f===void 0?!1:f;var i=a.onClose,n=a.onPress,o=a.reduceEmphasis;o=o===void 0?!1:o;var p=a.showIcon,q=a.size;q=q===void 0?"medium":q;var r=a.source;a=a.type;a=a===void 0?"primary":a;e=j(m,e);var s=b("useFundraiserDonateCometCheckout")({extraData:{sourceData:{donate_ref:d,source_name:r}},fundraiser:e,onClose:i});if(e==null)return null;d=e.mobile_donate_url;var t;!b("gkx")("708253")&&d!=null&&s==null&&(t={preventLocalNavigation:!0,rel:"dialog",url:d});var u=k.jsx(b("TetraButton.react"),{disabled:c||s==null&&e.can_donate!==!0,icon:p===!0?b("fbicon")._(g("510953"),16):void 0,label:h._("Doar"),labelIsHidden:f,linkProps:t,onPress:function(){n&&n(),s&&s()},reduceEmphasis:o,size:q,testid:void 0,type:a});r=e.donation_disabled_reason_message;return r==null||r===""?u:k.jsx(b("CometLazyPopoverTrigger.react"),{popoverProps:{tooltipTextWithEntities:r},popoverResource:l,position:"above",children:function(a,b){return k.jsx("span",{onMouseEnter:b,ref:a,children:u})}})}function a(a){return k.jsx(b("CometErrorBoundary.react"),{fallback:null,children:k.jsx(n,babelHelpers["extends"]({},a))})}e.exports=a},null);
__d("useFundraiserPageShareCallback",["CometRelay","FundraiserPageSupporterCardRefetchQuery.graphql","WebPixelRatio","emptyFunction","recoverableViolation"],function(a,b,c,d,e,f){"use strict";var g=b("CometRelay").fetchQuery,h=b("CometRelay").useRelayEnvironment;function a(a){var c=a.fundraiserID,d=h();if(c==null){b("recoverableViolation")("FundraiserID cannot be null for fundraiser sharing","charitable_giving");return b("emptyFunction")}a=function(){var a=b("WebPixelRatio").get();g(d,b("FundraiserPageSupporterCardRefetchQuery.graphql"),{id:c,scale:a}).toPromise()};return a}e.exports=a},null);
__d("useFundraiserShareAction",["fbt","requireDeferred","CometRelay","React","createEmptyCometComposerViewState","useFeedComposerCometDialog","useOpenPageShareComposer","useFundraiserShareAction_fundraiser.graphql","useFundraiserShareAction_viewer.graphql"],function(a,b,c,d,e,f,g){"use strict";var h,i;b("CometRelay").graphql;var j=b("CometRelay").useFragment;c=b("React");var k=c.useCallback,l=b("requireDeferred")("SocialGoodCharityActionsLoggingUtils"),m=h!==void 0?h:h=b("useFundraiserShareAction_fundraiser.graphql"),n=i!==void 0?i:i=b("useFundraiserShareAction_viewer.graphql");function a(a){var c=a.fundraiser,d=a.onClose,e=a.onSave,f=a.sourceName;a=a.viewer;c=j(m,c);a=j(n,a);e=b("useFeedComposerCometDialog")({onClose:d,onSave:e,title:g._("Compartilhar na sua linha do tempo"),tracePolicy:"comet.composer.shareFundraiser"});var h=e[0],i=b("createEmptyCometComposerViewState")({attachmentArea:{activeAttachmentType:"SHARE"},linkAttachment:{url:(e=c==null?void 0:c.url)!=null?e:""},placeholderTextOverride:(e=c==null?void 0:(e=c.creator_management)==null?void 0:(e=e.fundraiser_management_share_placeholder_text)==null?void 0:e.text)!=null?e:g._("Diga algo sobre esta campanha de arrecada\u00e7\u00e3o de fundos..."),submitText:g._("Compartilhar")}),o=k(function(){h({beginningViewState:i})},[i,h]),p=b("useOpenPageShareComposer")((e=(e=c==null?void 0:(e=c.owner)==null?void 0:e.id)!=null?e:a==null?void 0:(e=a.actor)==null?void 0:e.id)!=null?e:"",i,d),q=c==null?void 0:c.id,r=c==null?void 0:c.fundraiser_campaign_type,s=(c==null?void 0:(e=c.owner)==null?void 0:e.__typename)==="Page"&&(c==null?void 0:c.can_viewer_manage)===!0||(a==null?void 0:(d=a.actor)==null?void 0:d.__typename)==="Page";e=k(function(){if(q==null||r==null)return;l.onReady(function(a){a=a.logFundraiserInteractEvent;a("share_click",q,f,null,r)});s?p():o()},[r,q,s,p,o,f]);return(c==null?void 0:c.can_share_fundraiser)!==!0||(c==null?void 0:c.url)==null?null:e}e.exports=a},null);
__d("FundraiserShareButton.react",["ix","fbt","CometRelay","React","TetraButton.react","fbicon","useFundraiserPageShareCallback","useFundraiserShareAction","FundraiserShareButton_fundraiser.graphql","FundraiserShareButton_viewer.graphql"],function(a,b,c,d,e,f,g,h){"use strict";var i,j;b("CometRelay").graphql;var k=b("CometRelay").useFragment,l=b("React"),m=i!==void 0?i:i=b("FundraiserShareButton_fundraiser.graphql"),n=j!==void 0?j:j=b("FundraiserShareButton_viewer.graphql");function a(a){var c=a.buttonType;c=c===void 0?"secondary":c;var d=a.disabled;d=d===void 0?!1:d;var e=a.fundraiser,f=a.labelIsHidden;f=f===void 0?!1:f;var i=a.onPress,j=a.showIcon;j=j===void 0?!0:j;var o=a.sourceName;a=a.viewer;e=k(m,e);a=k(n,a);var p=e.fundraiserID;p=b("useFundraiserPageShareCallback")({fundraiserID:p});var q=b("useFundraiserShareAction")({fundraiser:e,onSave:p,sourceName:o,viewer:a});return l.jsx(b("TetraButton.react"),{disabled:d||q==null,icon:j?b("fbicon")._(g("484394"),16):void 0,label:h._("Compartilhar"),labelIsHidden:f,onPress:function(){i&&i(),q&&q()},testid:void 0,type:c})}e.exports=a},null);
__d("FundraiserProgressBar.react",["fbt","React","TetraText.react","stylex"],function(a,b,c,d,e,f,g){"use strict";var h,i=b("React"),j=12,k=8;function a(a){var c=a.amountRaised,d=a.goalAmount,e=a.hasEnded,f=a.heightSize;f=f===void 0?"medium":f;var l=a.labelPosition;l=l===void 0?"below":l;var m=a.primaryLabel,n=a.primaryLabelBadge;a=a.secondaryLabel;var o=f==="small"?k:j,p=f==="small"?"body4":"body3",q=f==="small"?8:12;c=Math.min(Math.max(c/d*100,0),100);d=c<=1?o+"px":c+"%";o=c===100;q=i.jsxs("div",{className:"i1fnvgqd btwxx1t3 j83agx80",style:l==="above"?{paddingBottom:q}:{paddingTop:q},children:[i.jsxs(b("TetraText.react"),{color:o?"positive":"highlight",type:p,children:[m,n!=null&&i.jsx("span",{className:"l59n7fsa l9j0dhe7 kkf49tns",children:n})]}),e?i.jsx(b("TetraText.react"),{color:"secondary",type:p,children:g._("Encerrada")}):a!=null?i.jsx(b("TetraText.react"),{color:"secondary",type:p,children:a}):null]});return i.jsxs(i.Fragment,{children:[l==="above"?q:null,i.jsx("div",{"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":c,className:(h||(h=b("stylex"))).dedupe({"background-color-1":"ckkva4tx","width-1":"k4urcfbm"},f==="small"?{"border-top-start-radius-1":"jk6sbkaj","border-top-end-radius-1":"kdgqqoy6","border-bottom-end-radius-1":"ihh4hy1g","border-bottom-start-radius-1":"qttc61fc","height-1":"t6na6p9t"}:null,f==="medium"?{"border-top-start-radius-1":"beltcj47","border-top-end-radius-1":"p86d2i9g","border-bottom-end-radius-1":"aot14ch1","border-bottom-start-radius-1":"kzx2olss","height-1":"cyypbtt7"}:null),role:"progressbar",children:i.jsx("div",{className:h.dedupe({"background-color-1":"is6700om"},o?{"background-color-1":"jllm4f4h"}:null,f==="small"?{"border-top-start-radius-1":"jk6sbkaj","border-top-end-radius-1":"kdgqqoy6","border-bottom-end-radius-1":"ihh4hy1g","border-bottom-start-radius-1":"qttc61fc","height-1":"t6na6p9t"}:null,f==="medium"?{"border-top-start-radius-1":"beltcj47","border-top-end-radius-1":"p86d2i9g","border-bottom-end-radius-1":"aot14ch1","border-bottom-start-radius-1":"kzx2olss","height-1":"cyypbtt7"}:null),style:{width:d}})}),l==="below"?q:null]})}e.exports=a},null);
__d("FundraiserAttachmentProgressBar.react",["CometRelay","FundraiserProgressBar.react","React","recoverableViolation","FundraiserAttachmentProgressBar_fundraiser.graphql"],function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React"),j=g!==void 0?g:g=b("FundraiserAttachmentProgressBar_fundraiser.graphql");function a(a){var c=h(j,a.fundraiser),d=c.amount_raised,e=c.days_left_text,f=c.fundraiser_progress_text,g=c.goal_amount;c=c.has_ended;var k=a.heightSize,l=a.labelPosition;a=a.showTimeRemaining;a=a===void 0?!1:a;d=Number(d==null?void 0:d.amount);g=Number(g==null?void 0:g.amount);if(isNaN(d)||isNaN(g)){b("recoverableViolation")("Fundraiser progress bar requires both goal and amount raised.","charitable_giving");return null}var m="";if(a===!0){m=(a=e==null?void 0:e.text)!=null?a:""}return i.jsx(b("FundraiserProgressBar.react"),{amountRaised:d,goalAmount:g,hasEnded:(e=c)!=null?e:!1,heightSize:k,labelPosition:l,primaryLabel:(f==null?void 0:f.text)||"",secondaryLabel:m})}e.exports=a},null);