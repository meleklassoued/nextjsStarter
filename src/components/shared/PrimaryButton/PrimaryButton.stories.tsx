import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PrimaryButton } from '.';

export default {
  title: 'PrimaryButton',
  component: PrimaryButton
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => <PrimaryButton {...args} />;

export const Default = Template.bind({});
