import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx",
   "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options:{
    
    }
  },
  
  docs: {
    autodocs: "tag",
  },
};
export default config;


// module.exports = {
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/addon-interactions',
//     {
//       name: '@storybook/addon-styling',
//       options: {
//         // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
//         // For more details on this addon's options.
//         postCss: true,
//       },
//     },
//   ],
//   // snipped for brevity
// };