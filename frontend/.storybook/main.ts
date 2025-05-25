// fichier de configuration 
import type { StorybookConfig } from '@storybook/react-webpack5';
//les paramètres de chargement des stories
const config: StorybookConfig = {
  "stories": [ // état composant 
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [// ajoutent des fonctionnalités supplémentaires
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "staticDirs": [
    "..\\public"
  ]
};
export default config;