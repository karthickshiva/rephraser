browser.runtime.onMessage.addListener(async (message) => {
    if (message.action === "rephraseText" && message.text) {
        try {
            const apiKey = await getApiKey();
            const rephrasedText = await rephraseText(message.text, apiKey);
            copyToClipboard(rephrasedText);
        } catch (error) {
            console.error('Error rephrasing text:', error);
            showNotification(`Failed to rephrase text: ${error.message}`, true);
        }
    }
});

async function getApiKey() {
    const result = await browser.storage.local.get('apiKey');
    if (!result.apiKey) {
        throw new Error('API key is not set.');
    }
    return result.apiKey;
}

async function rephraseText(text, apiKey) {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo-0125',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a helpful assistant designed to rephrase the given text.'
                    },
                    {
                        role: 'user',
                        content: `Rephrase the following text:\n\n"${text}"`
                    }
                ]
            })
        });

        const data = await response.json();
        const rephrasedText = data.choices[0].message.content.trim();
        return rephrasedText;
    } catch (error) {
        throw new Error('Invalid API Key or OpenAI is down');
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function () {
        showNotification('Rephrased text copied to clipboard.', false);
    }, function (err) {
        console.error('Failed to copy text to clipboard:', err);
        showNotification('Failed to copy text to clipboard.', true);
    });
}

function showNotification(message, isError) {
    const notificationElement = document.createElement('div');
    notificationElement.className = isError ? 'notification-error' : 'notification-success';
    notificationElement.textContent = message;

    document.body.appendChild(notificationElement);

    setTimeout(() => {
        notificationElement.remove();
    }, 3000);
}
