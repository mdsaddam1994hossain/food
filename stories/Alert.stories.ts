import type { Meta, StoryObj } from '@storybook/react';
import Alert from './Alert';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Alert> = {
  title: 'Example/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    message: String,
    value: Number,
    style:String
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;


export const Error : Story ={
     args:{
        message : "Error message",
        value:5,
        style:"text-red-500 text-xl"
     }
}
export const Success : Story ={
     args:{
        message : "Error message",
        value:4,
        style:"text-green-500 text-xl"
     }
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };