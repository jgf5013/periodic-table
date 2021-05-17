import React from 'react';
import { Story, Meta } from '@storybook/react';

import QuizItem from '../components/quiz-item/QuizItem';

export default {
  title: 'Example/QuizItem',
  component: QuizItem,
} as Meta;

const Template: Story = (args) => <QuizItem {...args} />;

export const ExampleQuizItem = Template.bind({});
// ExampleQuizItem.args = {
//     atomicElement: elementJson.elements[Math.floor(Math.random() * elementJson.elements.length)],
//     promptCategory: 'symbol',
//     answerCategory: 'name'
// };