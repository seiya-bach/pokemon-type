import { FC } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import Types from '../../data/PokemonType.json';

interface Props {
    types: Array<{ name: string; color: string; multiplier: string }>;
}

const TypeDisplay: FC<Props> = (props) => {
    const types = props.types;

    return (
        <Grid item xs={3}>
            <Box sx={{ p: 3, display: 'grid', gridTemplateColumns: { md: '1fr 1fr' }, gap: 2 }}>
                {types.map((type, index) => (
                    <Paper
                        key={index}
                        sx={{
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            backgroundColor: type.color,
                            lineHeight: '3em',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography sx={{ marginLeft: 5 }}>{type.name}</Typography>
                        <Typography sx={{ marginRight: 5 }}>x2</Typography>
                    </Paper>
                ))}
            </Box>
        </Grid>
    );
};

export default TypeDisplay;
