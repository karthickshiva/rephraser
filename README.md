# Rephraser Firefox Extension

Text Rephraser is a Firefox extension that allows users to rephrase selected text using OpenAI's GPT-3.5-turbo API. The rephrased text is copied to the clipboard, making it easy to use in any application. Users can input their OpenAI API key in the extension's settings.

## Features

- Rephrase selected text using the OpenAI API.
- Copy the rephrased text to the clipboard.
- Easy-to-use settings page to input and save the OpenAI API key.
- Error notifications for better user experience.

## Installation

1. Clone or download the repository to your local machine.
2. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
3. Click on "Load Temporary Add-on" and select any file in the extension's directory (e.g., `manifest.json`).

## Usage

1. **Set Up the API Key:**
    - Click on the extension icon in the toolbar to open the settings popup.
    - Enter your OpenAI API key and click "Save".

2. **Rephrase Text:**
    - Select the text you want to rephrase.
    - Right-click to open the context menu and select "Rephrase Text".
    - The rephrased text will be copied to the clipboard, and a notification will appear confirming the action.

## Files

- `manifest.json`: Defines the extension's manifest, including permissions and background scripts.
- `background.js`: Handles context menu creation and messaging between the background script and content script.
- `content.js`: Manages text selection, API requests, clipboard operations, and displaying notifications.
- `popup.html`: The settings page for users to input their OpenAI API key.
- `popup.js`: Handles the logic for saving and loading the API key in the settings page.
- `styles.css`: Contains the CSS styles for notifications.
- `icons/`: Contains icons for the extension.

## Permissions

- `activeTab`: Allows the extension to interact with the currently active tab.
- `contextMenus`: Enables the extension to add items to the context menu.
- `clipboardWrite`: Allows the extension to copy text to the clipboard.
- `storage`: Allows the extension to save and retrieve the API key.
- `https://api.openai.com/`: Allows the extension to send requests to the OpenAI API.

## Error Handling

- If there is an issue with loading or saving the API key, an error message will be displayed in the settings popup.
- If the rephrase operation or clipboard copy fails, a temporary notification will appear on the webpage.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. We welcome all contributions!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenAI](https://www.openai.com/) for providing the GPT-3.5-turbo API.
- Mozilla for creating Firefox and providing excellent developer tools.