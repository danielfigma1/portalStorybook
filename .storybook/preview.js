import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";

// setCompodocJson(docJson);

import { addons } from '@storybook/addons';

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  enableShortcuts: true,
  showToolbar: true,
  //theme: undefined,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
      showRoots: false,
      collapsedRoots: ['other'],
  },
  toolbar: {
      title: { hidden: false },
      zoom: { hidden: false },
      eject: { hidden: false },
      copy: { hidden: false },
      fullscreen: { hidden: false },
  },
});


setCompodocJson(docJson);

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    darkMode: {
        // Override the default dark theme
        dark: {...themes.dark,
            appBg: '#666',
        },
        // Override the default light theme
        light: {...themes.normal,
            appBg: '#047',
            brandTitle: 'My custom storybook',
            brandUrl: 'https://example.com',
            brandImage: 'data:image/png;base64,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',
            brandTarget: '_self',
            colorPrimary: '#047',
            colorSecondary: '#04365c',

            // UI
            appContentBg: '#fff',
            appBorderColor: 'grey',
            appBorderRadius: 0,

            // Typography
            fontBase: '"Roboto", sans-serif',
            //fontCode: 'monospace',

            // Text colors
            textColor: '#000',
            textInverseColor: '#000',

            // Toolbar default and active colors
            barTextColor: '#047',
            barSelectedColor: 'black',
            barBg: '#ccc',

            // Form colors
            inputBg: '#fff',
            inputBorder: '#ddd',
            inputTextColor: 'black',
            inputBorderRadius: 0,
        },
        classTarget: 'html',
        stylePreview: true,
        darkClass: 'lights-out',
        lightClass: 'lights-on'
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    docs: {
        inlineStories: false,
        //theme: themes.dark
    },
}