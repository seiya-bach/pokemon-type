/** @jsxImportSource @emotion/react */
import { Typography } from '@mui/material';
import { css, SerializedStyles } from '@emotion/react';

const header: SerializedStyles = css`
    background-color: white;
`;

const headerInner: SerializedStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    padding: 0 2em;
`;

const headerTitleSx = {
    color: 'gray',
    fontSize: 32,
};

const Header = (): JSX.Element => {
    return (
        <header css={header}>
            <div css={headerInner}>
                <Typography variant="h1" sx={headerTitleSx}>
                    ポケモンの名前が一生覚えられない.com
                </Typography>
            </div>
        </header>
    );
};

export default Header;
