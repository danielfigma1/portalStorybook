// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { withDesign } from 'storybook-addon-designs';
import Button from './button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
// export default {
//   title: 'Example/Button',
//   component: Button,
//   decorators: [withDesign],
//   // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as Meta;


export default {
  title: "Figma Components",
  component: Button,
  declarations:[withDesign],
  parameters:{
    design: {
      type: "figma",
      url: "https://www.figma.com/file/D6rC4uJFxCOETXulEAWMLm/Portal-V2?node-id=371%3A37954",
    },
  }
};




// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const TableDark = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
// TableDark.args = {
//   // primary: true,
//   label: 'View Table',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
