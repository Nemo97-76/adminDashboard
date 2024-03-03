import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListDivider from '@mui/joy/ListDivider';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const listItems = [
    {
        sectionName: "sec1",
        categoryName: "Cate1",
        tripName: "trip1",
        AddedBy: {
            name: 'Olivia Ryhe',
            email: 'olivia@email.com',
        },
    },
    {
        sectionName: "sec1",
        categoryName: "Cate1",
        tripName: "trip1",
        AddedBy: {
            name: 'Steve Hampton',
            email: 'steve.hamp@email.com',
        },
    },
    {
        sectionName: "sec1",
        categoryName: "Cate1",
        tripName: "trip1",
        AddedBy: {
            name: 'Ciaran Murray',
            email: 'ciaran.murray@email.com',
        },
    },
    {
        sectionName: "sec1",
        categoryName: "Cate1",
        tripName: "trip1",
        AddedBy: {
            name: 'Maria Macdonald',
            email: 'maria.mc@email.com',
        },
    },
    {
        sectionName: "sec1",
        categoryName: "Cate1",
        tripName: "trip1",
        AddedBy: {
            name: 'Charles Fulton',
            email: 'fulton@email.com',
        },
    },
    {
        sectionName: "sec1",
        categoryName: "Cate1",
        tripName: "trip1",
        AddedBy: {
            name: 'Jay Hooper',
            email: 'hooper@email.com',
        },
    },
];



export default function TripList() {
    return (
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            {listItems.map((listItem) => (
                <List
                    key={listItem.tripName}
                    size="sm"
                    sx={{
                        '--ListItem-paddingX': 0,
                    }}
                >
                    <ListItem
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'start',
                        }}
                    >
                        <ListItemContent sx={{ display: 'flex', gap: 2, alignItems: 'start' }}>
                            <div>
                                <Typography fontWeight={600} gutterBottom>
                                    {listItem.AddedBy.name}
                                </Typography>
                                <Typography level="body-xs" gutterBottom>
                                    {listItem.AddedBy.email}
                                </Typography>

                            </div>
                        </ListItemContent>
                    </ListItem>
                    <ListDivider />
                </List>
            ))}
            <Box
                className="Pagination-mobile"
                sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', py: 2 }}
            >
                <IconButton
                    aria-label="previous page"
                    variant="outlined"
                    color="neutral"
                    size="sm"
                >
                    <KeyboardArrowLeftIcon />
                </IconButton>
                <Typography level="body-sm" mx="auto">
                    Page 1 of 10
                </Typography>
                <IconButton
                    aria-label="next page"
                    variant="outlined"
                    color="neutral"
                    size="sm"
                >
                    <KeyboardArrowRightIcon />
                </IconButton>
            </Box>
        </Box>
    );
}