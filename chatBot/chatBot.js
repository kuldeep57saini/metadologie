//start spinner js for chat-bot
function updateElementPresence() {
    let helpButton = document.querySelector('.helpButtonEnabled');
    let chatBox = document.querySelector('#sidebarDialogAssistiveText');

    if (helpButton) {
        helpButton.addEventListener('click', () => {
            helpButton.classList.add('loading');
        })
    }

    if (chatBox) {
        setTimeout(() => {
            helpButton.classList.remove('loading');
        }, 4000);
    }
}

// Add event listeners to track changes in DOM
document.addEventListener('DOMContentLoaded', updateElementPresence);
document.addEventListener('DOMNodeInserted', updateElementPresence);
document.addEventListener('DOMNodeRemoved', updateElementPresence);

//end spinner js for chat-bot



    
 



	var initESW = function(gslbBaseURL) {
		embedded_svc.settings.displayHelpButton = true; //Or false
		embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'

		//embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)
		//embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)

		//embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
		//embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

		// Settings for Chat
		//embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
			// Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
			// Returns a valid button ID.
		//};
		//embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
		//embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
		//embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)

        embedded_svc.settings.avatarImgURL = "https://lightningcx.my.site.com/contactus/resource/NF_ccare_bot/chatbotImages/bot-avatar.png"
        embedded_svc.settings.chatbotAvatarImgURL = 'https://lightningcx.my.site.com/contactus/resource/NF_ccare_bot/chatbotImages/bot-avatar.png'


		embedded_svc.settings.enabledFeatures = ['LiveAgent'];
		embedded_svc.settings.entryFeature = 'LiveAgent';

		embedded_svc.init(
			'https://metadologie-operations-dev-ed.my.salesforce.com',
			'https://metadologie-operations-dev-ed.my.site.com/empcommunity',
			gslbBaseURL,
			'00D8b0000014j4D',
			'Support_Channel',
			{
				baseLiveAgentContentURL: 'https://c.la5-c2-ia4.salesforceliveagent.com/content',
				deploymentId: '5728b00000116qc',
				buttonId: '5738b00000116xA',
				baseLiveAgentURL: 'https://d.la5-c2-ia4.salesforceliveagent.com/chat',
				eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I8b000000wnuHEAQ_18aae8e7ccc',
				isOfflineSupportEnabled: false
			}
		);
	};

	if (!window.embedded_svc) {
		var s = document.createElement('script');
		s.setAttribute('src', 'https://metadologie-operations-dev-ed.my.salesforce.com/embeddedservice/5.0/esw.min.js');
		s.onload = function() {
			initESW(null);
		};
		document.body.appendChild(s);
	} else {
		initESW('https://service.force.com');
	}
