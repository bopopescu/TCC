if (self.CavalryLogger) { CavalryLogger.start_js(["G1dQ6"]); }

__d("CometStoryAttachmentFooterFundraiserStrategy_attachmentFooter$normalization.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},f={kind:"InlineFragment",selections:[e],type:"Node",abstractKey:"__isNode"},g={alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},i={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null};i=[{alias:null,args:null,concreteType:"ImageAtRange",kind:"LinkedField",name:"image_ranges",plural:!0,selections:[a,b,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity_with_image",plural:!1,selections:[c,{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},d,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},f],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InlineStyleAtRange",kind:"LinkedField",name:"inline_style_ranges",plural:!0,selections:[a,b,{alias:null,args:null,kind:"ScalarField",name:"inline_style",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[a,b,g,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[c,{kind:"InlineFragment",selections:[e,h],type:"User",abstractKey:null},f],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[c,{kind:"TypeDiscriminator",abstractKey:"__isEntity"},{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'},{kind:"InlineFragment",selections:[e,{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"Actor",abstractKey:"__isActor"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null},e,{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[i,{alias:null,args:null,concreteType:"WorkUserInfo",kind:"LinkedField",name:"work_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active_account",storageKey:null}],storageKey:null}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[i,{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group",abstractKey:null},f],storageKey:null},a,b],storageKey:null},j];f=[{alias:null,args:null,kind:"ScalarField",name:"amount",storageKey:null}];a=[j];b={alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[d],storageKey:null};j=[{kind:"Literal",name:"first",value:5}];d={alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"nodes",plural:!0,selections:[h,b,e],storageKey:null};var k={kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"has_ended",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"donation_matching_text",plural:!1,selections:a,storageKey:null}],type:"FundraiserWithPresence",abstractKey:"__isFundraiserWithPresence"};return{kind:"SplitOperation",metadata:{},name:"CometStoryAttachmentFooterFundraiserStrategy_attachmentFooter$normalization",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title_with_entities",plural:!1,selections:i,storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[c,e,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"amount_raised",plural:!1,selections:f,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"fundraiser_progress_text",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"fundraiser_subtitle_text",plural:!1,selections:i,storageKey:null},{alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"goal_amount",plural:!1,selections:f,storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[c,h,b,e],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"donors_social_context_text",plural:!1,selections:a,storageKey:null},{alias:null,args:j,concreteType:"FundraiserFriendDonorsConnection",kind:"LinkedField",name:"friend_donors",plural:!1,selections:[d,g],storageKey:"friend_donors(first:5)"},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"days_left_text",plural:!1,selections:a,storageKey:null},{alias:"facepile_donors",args:j,concreteType:"FundraiserFriendDonorsConnection",kind:"LinkedField",name:"friend_donors",plural:!1,selections:[d],storageKey:"friend_donors(first:5)"},k],type:"Fundraiser",abstractKey:"__isFundraiser"},k],storageKey:null},{alias:null,args:[{kind:"Literal",name:"supported",value:["StoryAttachmentBlueOnCometModalCallToActionRenderer","StoryAttachmentLikePageCallToActionRenderer","StoryAttachmentLinkOpenCallToActionRenderer","StoryAttachmentLeadGenCallToActionRenderer","StoryAttachmentGetOfferCallToActionRenderer","StoryAttachmentSaveCallToActionRenderer","StoryAttachmentLinkOpenCallToMessengerRenderer","StoryAttachmentEventRSVPCallToActionRenderer","StoryAttachmentFollowUserCallToActionRenderer","StoryAttachmentFundraiserDonateCallToActionRenderer","StoryAttachmentJoinGroupCallToActionRenderer","StoryAttachmentInterestedInMessengerRoomsCallToActionRenderer","StoryAttachmentBookNowFirstPartyCallToActionRenderer"]}],concreteType:null,kind:"LinkedField",name:"call_to_action_renderer",plural:!1,selections:[c,{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryCallToAction_attachment",fragmentName:"CometFeedAttachmentBlueOnCometModalCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentBlueOnCometModalCallToActionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryCallToAction_attachment",fragmentName:"CometFeedAttachmentLikePageCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentLikePageCallToActionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryCallToAction_attachment",fragmentName:"CometFeedAttachmentLinkOpenCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentLinkOpenCallToActionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryCallToAction_attachment",fragmentName:"CometFeedAttachmentLeadGenCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentLeadGenCallToActionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryCallToAction_attachment",fragmentName:"CometFeedAttachmentGetOfferCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentGetOfferCallToActionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryCallToAction_attachment",fragmentName:"CometFeedAttachmentSaveCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentSaveCallToActionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryCallToAction_attachment",fragmentName:"CometFeedAttachmentLinkOpenCallToMessenger_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentLinkOpenCallToMessengerRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryCallToAction_attachment",fragmentName:"CometFeedAttachmentEventRSVPCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentEventRSVPCallToActionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryCallToAction_attachment",fragmentName:"CometFeedAttachmentFollowUserCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentFollowUserCallToActionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryCallToAction_attachment",fragmentName:"CometFeedAttachmentFundraiserDonateCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentFundraiserDonateCallToActionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryCallToAction_attachment",fragmentName:"CometFeedAttachmentJoinGroupCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentJoinGroupCallToActionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryCallToAction_attachment",fragmentName:"CometFeedAttachmentInterestedInMessengerRoomsCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentInterestedInMessengerRoomsCallToActionRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryCallToAction_attachment",fragmentName:"CometFeedAttachmentBookNowFirstPartyCallToAction_actionLink",fragmentPropName:"actionLink",kind:"ModuleImport"}],type:"StoryAttachmentBookNowFirstPartyCallToActionRenderer",abstractKey:null}],storageKey:'call_to_action_renderer(supported:["StoryAttachmentBlueOnCometModalCallToActionRenderer","StoryAttachmentLikePageCallToActionRenderer","StoryAttachmentLinkOpenCallToActionRenderer","StoryAttachmentLeadGenCallToActionRenderer","StoryAttachmentGetOfferCallToActionRenderer","StoryAttachmentSaveCallToActionRenderer","StoryAttachmentLinkOpenCallToMessengerRenderer","StoryAttachmentEventRSVPCallToActionRenderer","StoryAttachmentFollowUserCallToActionRenderer","StoryAttachmentFundraiserDonateCallToActionRenderer","StoryAttachmentJoinGroupCallToActionRenderer","StoryAttachmentInterestedInMessengerRoomsCallToActionRenderer","StoryAttachmentBookNowFirstPartyCallToActionRenderer"])'},{alias:null,args:[{kind:"Literal",name:"supported",value:["StoryAttachmentLeadGenLinkRenderer","StoryAttachmentGenericLinkRenderer","StoryAttachmentBlueOnCometModalLinkRenderer","StoryAttachmentClickToMessengerRenderer","StoryAttachmentFundraiserLinkRenderer","StoryAttachmentClickToGetOfferRenderer"]}],concreteType:null,kind:"LinkedField",name:"story_attachment_link_renderer",plural:!1,selections:[c,{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryLink_attachment",fragmentName:"CometFeedStoryLeadGenLink_story",fragmentPropName:"story",kind:"ModuleImport"}],type:"StoryAttachmentLeadGenLinkRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryLink_attachment",fragmentName:"CometFeedStoryGenericLink_story",fragmentPropName:"story",kind:"ModuleImport"}],type:"StoryAttachmentGenericLinkRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryLink_attachment",fragmentName:"CometFeedStoryBlueOnCometModalLink_story",fragmentPropName:"story",kind:"ModuleImport"}],type:"StoryAttachmentBlueOnCometModalLinkRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryLink_attachment",fragmentName:"CometFeedStoryClickToMessenger_story",fragmentPropName:"story",kind:"ModuleImport"}],type:"StoryAttachmentClickToMessengerRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryLink_attachment",fragmentName:"CometFeedStoryFundraiserLink_story",fragmentPropName:"story",kind:"ModuleImport"}],type:"StoryAttachmentFundraiserLinkRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometFeedStoryLink_attachment",fragmentName:"CometFeedStoryClickToGetOffer_story",fragmentPropName:"story",kind:"ModuleImport"}],type:"StoryAttachmentClickToGetOfferRenderer",abstractKey:null}],storageKey:'story_attachment_link_renderer(supported:["StoryAttachmentLeadGenLinkRenderer","StoryAttachmentGenericLinkRenderer","StoryAttachmentBlueOnCometModalLinkRenderer","StoryAttachmentClickToMessengerRenderer","StoryAttachmentFundraiserLinkRenderer","StoryAttachmentClickToGetOfferRenderer"])'}],storageKey:null}]}}();e.exports=a},null);
__d("CometStoryAttachmentFooterFundraiserStrategy_attachmentFooter.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],b=[{alias:null,args:null,kind:"ScalarField",name:"amount",storageKey:null}],c=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],d=[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometStoryAttachmentFooterFundraiserStrategy_attachmentFooter",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title_with_entities",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"target",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"amount_raised",plural:!1,selections:b,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"fundraiser_progress_text",plural:!1,selections:c,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"fundraiser_subtitle_text",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"goal_amount",plural:!1,selections:b,storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:d,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"donors_social_context_text",plural:!1,selections:c,storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:5}],concreteType:"FundraiserFriendDonorsConnection",kind:"LinkedField",name:"friend_donors",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"nodes",plural:!0,selections:d,storageKey:null}],storageKey:"friend_donors(first:5)"},{args:null,kind:"FragmentSpread",name:"FundraiserAttachmentProgressBar_fundraiser"},{args:null,kind:"FragmentSpread",name:"FundraiserAttachmentSocialContext_fundraiser"}],type:"Fundraiser",abstractKey:"__isFundraiser"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"has_ended",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"donation_matching_text",plural:!1,selections:c,storageKey:null}],type:"FundraiserWithPresence",abstractKey:"__isFundraiserWithPresence"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometFeedStoryCallToAction_attachment"},{args:null,kind:"FragmentSpread",name:"CometFeedStoryLink_attachment"}],storageKey:null}],type:"CometStoryAttachmentFooterFundraiserStrategy",abstractKey:null}}();e.exports=a},null);
__d("CometFeedStoryFundraiserLink_story$normalization.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'};return{kind:"SplitOperation",metadata:{},name:"CometFeedStoryFundraiserLink_story$normalization",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_links",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},a,{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null}],storageKey:null},a],storageKey:null}]}}();e.exports=a},null);
__d("CometFeedStoryFundraiserLink_story.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryFundraiserLink_story",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachment",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_links",plural:!0,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null}],storageKey:null},a],storageKey:null}],type:"StoryAttachmentFundraiserLinkRenderer",abstractKey:null}}();e.exports=a},null);
__d("CometFeedAttachmentFundraiserDonateCallToAction_actionLink$normalization.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometFeedAttachmentFundraiserDonateCallToAction_actionLink$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_link",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"fundraiser",plural:!1,selections:[a,{kind:"TypeDiscriminator",abstractKey:"__isFundraiser"},b,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"beneficiary",plural:!1,selections:[a,b,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"payment_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"receiver_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_donate",storageKey:null},{alias:null,args:[{kind:"Literal",name:"donate_ref",value:"SHARED_STORY"},{kind:"Literal",name:"source",value:"SHARED_STORY"}],kind:"ScalarField",name:"mobile_donate_url",storageKey:'mobile_donate_url(donate_ref:"SHARED_STORY",source:"SHARED_STORY")'}],storageKey:null}],type:"DonateFundraiserActionLink",abstractKey:null}],storageKey:null}]}}();e.exports=a},null);
__d("CometFeedAttachmentFundraiserDonateCallToAction_actionLink.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedAttachmentFundraiserDonateCallToAction_actionLink",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_link",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"fundraiser",plural:!1,selections:[{args:[{kind:"Literal",name:"donateRef",value:"SHARED_STORY"},{kind:"Literal",name:"source",value:"SHARED_STORY"}],kind:"FragmentSpread",name:"useFundraiserDonateCometCheckout_fundraiser"}],storageKey:null}],type:"DonateFundraiserActionLink",abstractKey:null}],storageKey:null}],type:"StoryAttachmentFundraiserDonateCallToActionRenderer",abstractKey:null};e.exports=a},null);
__d("FundraiserAttachmentSocialContext_fundraiser.graphql",["FundraiserAttachmentSocialContextRefetchQuery.graphql"],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:{refetch:{connection:null,fragmentPathInResult:["node"],operation:b("FundraiserAttachmentSocialContextRefetchQuery.graphql"),identifierField:"id"}},name:"FundraiserAttachmentSocialContext_fundraiser",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:5}],concreteType:"FundraiserFriendDonorsConnection",kind:"LinkedField",name:"friend_donors",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:"friend_donors(first:5)"},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"donors_social_context_text",plural:!1,selections:a,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"donation_matching_text",plural:!1,selections:a,storageKey:null}],type:"FundraiserWithPresence",abstractKey:"__isFundraiserWithPresence"},{args:null,kind:"FragmentSpread",name:"FundraiserDonorsFacepile_fundraiser"}],type:"Fundraiser",abstractKey:"__isFundraiser"}}();e.exports=a},null);
__d("FundraiserDonorsFacepile_fundraiser.graphql",[],function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FundraiserDonorsFacepile_fundraiser",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"donors_social_context_text",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:"facepile_donors",args:[{kind:"Literal",name:"first",value:5}],concreteType:"FundraiserFriendDonorsConnection",kind:"LinkedField",name:"friend_donors",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"friend_donors(first:5)"}],type:"Fundraiser",abstractKey:"__isFundraiser"};e.exports=a},null);
__d("FundraiserDonorsFacepile.react",["fbt","CometRelay","React","TetraOverlappingFacepile.react","emptyFunction","stylex","FundraiserDonorsFacepile_fundraiser.graphql"],function(a,b,c,d,e,f,g){"use strict";var h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("React"),k=h!==void 0?h:h=b("FundraiserDonorsFacepile_fundraiser.graphql");function a(a){a=a.fundraiser;a=i(k,a);var c=a.donors_social_context_text;a=a.facepile_donors;a=a==null?void 0:a.nodes;a=a==null?[]:a.map(function(a){return{alt:g._("{user name}",[g._param("user name",a.name)]),onPress:b("emptyFunction"),source:{uri:((a=a.profile_picture)==null?void 0:a.uri)||""}}});if(a.length===0)return null;c=c==null?void 0:c.text;return j.jsx("div",{className:"rtmu0sqt ocgrx2df",children:j.jsx(b("TetraOverlappingFacepile.react"),{align:"start",isTextInline:!0,items:a,onPress:b("emptyFunction"),size:24,text:c})})}e.exports=a},null);
__d("FundraiserAttachmentSocialContext.react",["CometRelay","FundraiserDonorsFacepile.react","React","TetraText.react","FundraiserAttachmentSocialContext_fundraiser.graphql"],function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React"),j=g!==void 0?g:g=b("FundraiserAttachmentSocialContext_fundraiser.graphql");function a(a){a=h(j,a.fundraiser);var c=a.donation_matching_text,d=a.donors_social_context_text,e=a.friend_donors;e=e==null?void 0:e.count;c=c==null?void 0:c.text;d=d==null?void 0:d.text;if(Boolean(c)){c=i.jsx(b("TetraText.react"),{color:"highlight",type:"body3",children:c});return Boolean(d)?i.jsxs(b("TetraText.react"),{color:"secondary",type:"body3",children:[c," ",d]}):c}else if(e!=null&&e>0)return i.jsx(b("FundraiserDonorsFacepile.react"),{fundraiser:a});else if(Boolean(d))return i.jsx(b("TetraText.react"),{color:"secondary",type:"body3",children:d});return null}e.exports=a},null);
__d("CometStoryAttachmentFooterFundraiserStrategy.react",["fbt","CometEmojiTransform","CometEmoticonTransform","CometFeedStoryCallToAction.react","CometFeedStoryLink.react","CometRelay","CometRow.react","CometRowItem.react","CometTextWithEntitiesRelay.react","FundraiserAttachmentProgressBar.react","FundraiserAttachmentSocialContext.react","FundraiserProgressBar.react","React","TetraOverlappingFacepile.react","TetraProfilePhoto.react","TetraText.react","TetraTextPairing.react","emptyFunction","gkx","stylex","unrecoverableViolation","useCometAriaID","CometStoryAttachmentFooterFundraiserStrategy_attachmentFooter.graphql"],function(a,b,c,d,e,f,g){"use strict";var h,i;b("CometRelay").graphql;var j=b("CometRelay").useFragment,k=b("React"),l={attachmentFooterLink:{height:"datstx6m",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",width:"k4urcfbm",zIndex:"du4w35lb"},ctaContainer:{marginStart:"f9o22wc5"},facepileContainer:{marginStart:"ocgrx2df",marginTop:"rtmu0sqt"},progressBarContainer:{paddingTop:"pybr56ya"},root:{alignItems:"bp9cbjyn",backgroundColor:"b3i9ofy5",borderBottom:"linmgsc8",borderEnd:"bn081pho",borderStart:"izx4hr6d",display:"j83agx80",flexDirection:"btwxx1t3",justifyContent:"i1fnvgqd",paddingTop:"pybr56ya",paddingEnd:"hv4rvrfc",paddingBottom:"f10w8fjw",paddingStart:"dati1w0a",position:"l9j0dhe7"},socialContextContainer:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"btwxx1t3",justifyContent:"i1fnvgqd",paddingTop:"pybr56ya"},textContent:{flexGrow:"buofh1pr",minWidth:"hpfvmrgz"}},m=[b("CometEmoticonTransform")({size:18}),b("CometEmojiTransform")({size:18})],n=[b("CometEmoticonTransform")(),b("CometEmojiTransform")()];function a(a){var c,d,e,f,m=a.adClientToken,n=a.adID;a=a.attachmentFooter;a=j(h!==void 0?h:h=b("CometStoryAttachmentFooterFundraiserStrategy_attachmentFooter.graphql"),a);var q=b("useCometAriaID")("aria-labelledby"),r=q[0],s=r[0];r=r[1];q=q[1];var t=q[0];q=q[1];a=a.attachment;var u=a==null?void 0:a.target;if(a==null)throw b("unrecoverableViolation")("attachment cannot be null in CometStoryAttachmentFooterFundraiserStrategy","comet_feed");if(u==null)throw b("unrecoverableViolation")("target cannot be null in CometStoryAttachmentFooterFundraiserStrategy","comet_feed");c=((c=u.donation_matching_text)==null?void 0:c.text)?k.jsx(b("TetraText.react"),{color:"highlight",type:"body3",children:(c=u.donation_matching_text)==null?void 0:c.text}):null;d=(d=u.friend_donors)==null?void 0:d.nodes;d=d==null||d.length===0?[]:d.map(function(a){return{alt:g._("{user name}",[g._param("user name",a.name)]),onPress:b("emptyFunction"),source:{uri:((a=a.profile_picture)==null?void 0:a.uri)||""}}});e=Number((e=u.amount_raised)==null?void 0:e.amount);f=Number((f=u.goal_amount)==null?void 0:f.amount);f=isNaN(Number(e))||isNaN(Number(f))?null:k.jsx(b("FundraiserProgressBar.react"),{amountRaised:e,goalAmount:f,hasEnded:u.has_ended||!1,primaryLabel:((e=u.fundraiser_progress_text)==null?void 0:e.text)||""});return k.jsxs("div",{className:(i||(i=b("stylex")))(l.root),children:[k.jsxs("div",{className:i(l.textContent),children:[k.jsxs(b("CometRow.react"),{align:"start",paddingHorizontal:0,paddingTop:0,spacing:12,verticalAlign:"center",children:[k.jsx(b("CometRowItem.react"),{children:k.jsx(b("TetraProfilePhoto.react"),{shape:"circle",size:60,source:{uri:((e=u.owner)==null?void 0:(e=e.profile_picture)==null?void 0:e.uri)||""}})}),k.jsx(b("CometRowItem.react"),{children:k.jsx(b("TetraTextPairing.react"),{body:k.jsx(p,{target:u}),bodyColor:"secondary",bodyLineLimit:2,headline:k.jsx(o,{ariaTargetProps:s,ariaTargetRef:r,attachment:a}),headlineLineLimit:2,level:3})})]}),k.jsx("div",{className:i(l.progressBarContainer),children:b("gkx")("1221772")?k.jsx(b("FundraiserAttachmentProgressBar.react"),{fundraiser:u}):f}),k.jsxs("div",{className:i(l.socialContextContainer),children:[b("gkx")("1221772")?k.jsx(b("FundraiserAttachmentSocialContext.react"),{fundraiser:u}):d.length>0&&c===null?k.jsx("div",{className:(i||(i=b("stylex")))(l.facepileContainer),children:k.jsx(b("TetraOverlappingFacepile.react"),{align:"start",isTextInline:!0,items:d,onPress:b("emptyFunction"),size:24,text:(e=u.donors_social_context_text)==null?void 0:e.text})}):((s=u.donors_social_context_text)==null?void 0:s.text)?k.jsx("div",{children:k.jsxs(b("TetraText.react"),{color:"secondary",type:"body3",children:[c,c?" ":null,(r=u.donors_social_context_text)==null?void 0:r.text]})}):k.jsx("div",{children:c}),k.jsx("div",{className:i(l.ctaContainer),children:k.jsx(b("CometFeedStoryCallToAction.react"),{adClientToken:m,adID:n,attachment:a})})]})]}),k.jsx(b("CometFeedStoryLink.react"),babelHelpers["extends"]({},t,{adClientToken:m,adID:n,attachment:a,ref:q,xstyle:l.attachmentFooterLink}))]})}function o(a){var c=a.ariaTargetProps,d=a.ariaTargetRef;a=a.attachment;a=a.title_with_entities;return a!=null?k.jsx("div",babelHelpers["extends"]({},c,{ref:d,children:k.jsx(b("CometTextWithEntitiesRelay.react"),{textWithEntities:a,transforms:m})})):null}function p(a){a=a.target;var c=null;a.fundraiser_subtitle_text!=null&&(c=k.jsx(b("CometTextWithEntitiesRelay.react"),{textWithEntities:a.fundraiser_subtitle_text,transforms:n}));return k.jsx(k.Fragment,{children:c})}e.exports=a},null);
__d("CometFeedStoryFundraiserLink.react",["CometLink.react","CometRelay","React","unrecoverableViolation","CometFeedStoryFundraiserLink_story.graphql"],function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React"),j=g!==void 0?g:g=b("CometFeedStoryFundraiserLink_story.graphql");function a(a,c){var d=a.children,e=a.story,f=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","story","xstyle"]);e=h(j,e);e=e.attachment;if(e==null)throw b("unrecoverableViolation")("Attachment Footer cannot be null in CometFeedStoryFundraiserLink","comet_feed");var g=k(e);e=(e=(e=e.action_links[0])==null?void 0:e.title)!=null?e:"";return i.jsx(b("CometLink.react"),babelHelpers["extends"]({},a,{"aria-label":e,href:g,label:e,ref:c,role:"link",xstyle:f,children:d}))}function k(a){return(a==null?void 0:a.url)||(a==null?void 0:(a=a.action_links)==null?void 0:(a=a[0])==null?void 0:a.url)}e.exports=i.forwardRef(a)},null);
__d("CometFeedAttachmentFundraiserDonateCallToAction.react",["fbt","CometErrorBoundary.react","CometRelay","React","TetraButton.react","emptyFunction","useFundraiserDonateCometCheckout","CometFeedAttachmentFundraiserDonateCallToAction_actionLink.graphql"],function(a,b,c,d,e,f,g){"use strict";var h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("React"),k="shared_story";function l(a){a=a.actionLink;a=i(h!==void 0?h:h=b("CometFeedAttachmentFundraiserDonateCallToAction_actionLink.graphql"),a);a=a.action_link;a=a==null?void 0:a.fundraiser;a=b("useFundraiserDonateCometCheckout")({extraData:{sourceData:{donate_ref:k,source_name:k}},fundraiser:a});return j.jsx(b("TetraButton.react"),{disabled:a==null,label:g._("Doar"),onPress:(a=a)!=null?a:b("emptyFunction"),type:"secondary"})}function a(a){return j.jsx(b("CometErrorBoundary.react"),{fallback:null,children:j.jsx(l,babelHelpers["extends"]({},a))})}e.exports=a},null);