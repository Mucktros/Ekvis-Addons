# Ekvis Addons Chrome Extension

**Ekvis Addons** enhances your experience on **Ekvis** by adding extra features through a set of customizable buttons. This extension allows you to remove elements such as labels, backgrounds, and extra land, giving you more control over the display.

## Features
- **Remove Label:** Toggle the visibility of the cursor label.
- **Remove Background:** Hide or show background.
- **Remove Extra Land:** Toggle the visibility of extra land elements.
- **Remove Flags:** Toggle the visibillity of the flags.
- **Reset Hotkey:** Set a hotkey for the reset button (default on the website being ALT+R).

## Installation

To install the Ekvis Addons Chrome Extension, follow these steps:

### 1. Download the Extension
Go to the [Ekvis Addons Releases Page](https://github.com/Mucktros/Ekvis-Addons/releases) and download the latest ZIP file.


### 2. Unzip the Downloaded File
Extract the contents of the downloaded ZIP file to a convenient location on your computer.

### 3. Open Chrome Extensions
In your Chrome browser, navigate to:

`chrome://extensions/`

### 4. Enable Developer Mode
In the top right corner of the Extensions page, toggle **Developer mode** to **ON**.

### 5. Install the Extension
Drag and drop the unzipped folder directly into the Extensions page. Chrome will automatically install the extension.

### Troubleshooting
If you encounter the error:
**"Error: Manifest file is missing or unreadable"**  
This usually happens when the file path is incorrect, such as:

`Downloads\filename\filename`

To resolve this:
1. Open the duplicated folder.
2. Move the contents into the main folder (one level up).
3. Try dragging the extension into Chrome again.

Once completed, the extension should install successfully.

## Files Included

- **`content.js`**: Contains the JavaScript to handle button actions and manipulate the DOM on the Ekvis site.
- **`styles.css`**: Contains the styling for the floating panel and buttons.
- **`manifest.json`**: The manifest file required for the extension to load correctly in Chrome.

## License

This project is licensed under the Apache-2.0 license.
