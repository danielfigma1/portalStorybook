// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import AccordionComponent from './accordion.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Bauer/accordion',
  component: AccordionComponent,
  parameters:{
    design: {
      type: "figma",
      url: "https://www.figma.com/file/D6rC4uJFxCOETXulEAWMLm/Portal-V2?node-id=568%3A53667",
    },
  }
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<AccordionComponent> = (args: AccordionComponent) => ({
  props: args,
});

export const Open = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
//Default
Open.args = {
  panelOpenState: true,
  label: 'Open Accordion',
};

export const Close = Template.bind({});
Close.args = {
  panelOpenState: false,
  label: 'Close Accordion',
}

// export const Dark = Template.bind({});
// Dark.args = {
//   theme: 'dark',
//   label: 'Dark Accordion'
// }

// export const Light = Template.bind({});
// Light.args = {
//   theme: 'light',
//   label: 'Light Accordion'
// }