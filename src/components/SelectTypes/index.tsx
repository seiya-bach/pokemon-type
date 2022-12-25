import { Select, FormControl, InputLabel, SelectChangeEvent, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react';

interface Props {
    selectId: number;
    labelTitle: string;
    option: Array<{ name: string }>;
}

const SelectTypes: FC<Props> = (props): JSX.Element => {
    const [type, setType] = React.useState('');

    const handleChange = (e: SelectChangeEvent): void => {
        setType(e.target.value);
    };

    const inputLabelId = `type${props.selectId}1-select-label`;

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id={inputLabelId} shrink>
                    {props.labelTitle}
                </InputLabel>
                <Select
                    notched
                    labelId={inputLabelId}
                    id={`type${props.selectId}-select`}
                    value={type}
                    label="タイプ"
                    onChange={handleChange}
                >
                    {props.option.map((option, index) => (
                        <MenuItem key={index} value={option.name}>
                            {option.name}
                        </MenuItem>
                    ))}
                    ;
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectTypes;
