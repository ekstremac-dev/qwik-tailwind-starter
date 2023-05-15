import { StorybookConfig } from "storybook-framework-qwik";
const config: StorybookConfig & {
  viteFinal: any;
} = {
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "storybook-framework-qwik"
  },
  core: {
    renderer: "storybook-framework-qwik"
  },
  stories: [
  // ...rootMain.stories,
  "../src/components/**/*.stories.mdx", "../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  viteFinal: async (config: any) => {
    const {
      qwikVite
    } = await import("@builder.io/qwik/optimizer");
    config.plugins?.unshift(qwikVite());
    const tsconfigPaths = await require("vite-tsconfig-paths");
    config.plugins?.push(tsconfigPaths.default());
    return config;
  },
  docs: {
    autodocs: true
  }
};
export default config;