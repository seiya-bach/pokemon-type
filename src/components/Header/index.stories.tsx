import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './index';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default { title: 'Header' } as ComponentMeta<typeof Header>;
export const Primary: ComponentStory<typeof Header> = () => <Header />;
