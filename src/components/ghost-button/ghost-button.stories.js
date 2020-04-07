import { withKnobs, text } from "@storybook/addon-knobs";
import "./ghost-button.scss"

export default {
  title: 'Ghost Button',
  decorators: [withKnobs]
};

export const small = () => `<button class="ghost-button ghost-button--small">${text("Label", "Primary")}</button>`;
export const smallDisabled = () => `<button class="ghost-button ghost-button--small" disabled>${text("Label", "Disabled")}</button>`;
export const large = () => `<button class="ghost-button ghost-button--large">${text("Label", "Primary")}</button>`;
export const largeDisabled = () => `<button class="ghost-button ghost-button--large" disabled>${text("Label", "Disabled")}</button>`;
