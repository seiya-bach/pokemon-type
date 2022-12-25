import { ComponentStory, ComponentMeta } from '@storybook/react';
import SelectTypes from './index';
import Types from '../../data/PokemonType.json';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default { title: 'SelectTypes' } as ComponentMeta<typeof SelectTypes>;

export const Type1: ComponentStory<typeof SelectTypes> = () => (
    <SelectTypes selectId={1} labelTitle={'タイプ1'} option={Types.types} />
);

export const Type2: ComponentStory<typeof SelectTypes> = () => (
    <SelectTypes selectId={2} labelTitle={'タイプ2'} option={Types.types} />
);
