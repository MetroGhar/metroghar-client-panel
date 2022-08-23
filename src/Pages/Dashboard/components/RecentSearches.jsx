import { Chip, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import { Wrapper } from './styles';

const StyledChip = styled(Chip)({
    height: "43px",
    padding: "5px 15px"
})

const RecentSearches = () => {
    return(
        <Wrapper>
            <Typography>17 April 2022 | 07:00 PM</Typography>
            <Stack direction="row" spacing={3} my={4}>
                <StyledChip label="2bhk flat in bangalore" variant='outlined' />
                <StyledChip label="2bhk flat in bangalore" variant='outlined' />
                <StyledChip label="2bhk flat in bangalore" variant='outlined' />
                <StyledChip label="2bhk flat in bangalore" variant='outlined' />
            </Stack>
            <Typography>17 April 2022 | 07:00 PM</Typography>
            <Stack direction="row" spacing={3} my={4}>
                <Chip label="2bhk flat in bangalore" variant='outlined' />
                <Chip label="2bhk flat in bangalore" variant='outlined' />
                <Chip label="2bhk flat in bangalore" variant='outlined' />
                <Chip label="2bhk flat in bangalore" variant='outlined' />
            </Stack>
        </Wrapper>
    )
};

export default RecentSearches;