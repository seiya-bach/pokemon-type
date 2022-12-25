/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TypeDisplay from './index';
import Types from '../../data/PokemonType.json';

// eslint-disable-next-line storybook/story-exports
export default { title: 'TypeDisplay' } as ComponentMeta<typeof TypeDisplay>;

const displayTypes = Types.types.map((type, index) => ({
    name: type.name,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    color: type.color,
    multiplier: 'x2',
}));

export const Primary: ComponentStory<typeof TypeDisplay> = () => <TypeDisplay types={displayTypes} />;
