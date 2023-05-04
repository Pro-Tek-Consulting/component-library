import React from 'react';

import Login from './Login';

export default {
  title: 'Components/Login',
  component: Login,
  args: {},
}

const Template = (args) => <Login {...args} />;

export const Story = Template.bind({});
Story.args = {};
