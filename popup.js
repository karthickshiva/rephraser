document.addEventListener('DOMContentLoaded', async () => {
    const apiKeyInput = document.getElementById('apiKey');
    const form = document.getElementById('settingsForm');

    const result = await browser.storage.local.get('apiKey');
    if (result.apiKey) {
        apiKeyInput.value = result.apiKey;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const apiKey = apiKeyInput.value;
        await browser.storage.local.set({ apiKey });
        alert('API key saved successfully!');
    });
});
