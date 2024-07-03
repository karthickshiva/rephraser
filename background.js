browser.contextMenus.create({
    id: "rephrase-text",
    title: "Rephrase Text",
    contexts: ["selection"]
});


browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "rephrase-text" && info.selectionText) {
        browser.tabs.sendMessage(tab.id, {
            action: "rephraseText",
            text: info.selectionText
        });
    }
});
