import * as React from 'react';
import { ColorPaletteProp } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import IconButton, { iconButtonClasses } from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import SearchIcon from '@mui/icons-material/Search';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import BlockIcon from '@mui/icons-material/Block';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from 'react-router';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

const rows = [
    {
        id: 'INV-1234',
        date: 'Feb 3, 2023',
        status: 'Refunded',
        customer: {
            initial: 'O',
            name: 'Olivia Ryhe',
            email: 'olivia@email.com',
        },
    },
    {
        id: 'INV-1233',
        date: 'Feb 3, 2023',
        status: 'Paid',
        customer: {
            initial: 'S',
            name: 'Steve Hampton',
            email: 'steve.hamp@email.com',
        },
    },
    {
        id: 'INV-1232',
        date: 'Feb 3, 2023',
        status: 'Refunded',
        customer: {
            initial: 'C',
            name: 'Ciaran Murray',
            email: 'ciaran.murray@email.com',
        },
    },
    {
        id: 'INV-1231',
        date: 'Feb 3, 2023',
        status: 'Refunded',
        customer: {
            initial: 'M',
            name: 'Maria Macdonald',
            email: 'maria.mc@email.com',
        },
    },
    {
        id: 'INV-1230',
        date: 'Feb 3, 2023',
        status: 'Cancelled',
        customer: {
            initial: 'C',
            name: 'Charles Fulton',
            email: 'fulton@email.com',
        },
    },
    {
        id: 'INV-1229',
        date: 'Feb 3, 2023',
        status: 'Cancelled',
        customer: {
            initial: 'J',
            name: 'Jay Hooper',
            email: 'hooper@email.com',
        },
    },
    {
        id: 'INV-1228',
        date: 'Feb 3, 2023',
        status: 'Refunded',
        customer: {
            initial: 'K',
            name: 'Krystal Stevens',
            email: 'k.stevens@email.com',
        },
    },
    {
        id: 'INV-1227',
        date: 'Feb 3, 2023',
        status: 'Paid',
        customer: {
            initial: 'S',
            name: 'Sachin Flynn',
            email: 's.flyn@email.com',
        },
    },
    {
        id: 'INV-1226',
        date: 'Feb 3, 2023',
        status: 'Cancelled',
        customer: {
            initial: 'B',
            name: 'Bradley Rosales',
            email: 'brad123@email.com',
        },
    },
    {
        id: 'INV-1225',
        date: 'Feb 3, 2023',
        status: 'Paid',
        customer: {
            initial: 'O',
            name: 'Olivia Ryhe',
            email: 'olivia@email.com',
        },
    },
    {
        id: 'INV-1224',
        date: 'Feb 3, 2023',
        status: 'Cancelled',
        customer: {
            initial: 'S',
            name: 'Steve Hampton',
            email: 'steve.hamp@email.com',
        },
    },
    {
        id: 'INV-1223',
        date: 'Feb 3, 2023',
        status: 'Paid',
        customer: {
            initial: 'C',
            name: 'Ciaran Murray',
            email: 'ciaran.murray@email.com',
        },
    },
    {
        id: 'INV-1221',
        date: 'Feb 3, 2023',
        status: 'Refunded',
        customer: {
            initial: 'M',
            name: 'Maria Macdonald',
            email: 'maria.mc@email.com',
        },
    },
    {
        id: 'INV-1220',
        date: 'Feb 3, 2023',
        status: 'Paid',
        customer: {
            initial: 'C',
            name: 'Charles Fulton',
            email: 'fulton@email.com',
        },
    },
    {
        id: 'INV-1219',
        date: 'Feb 3, 2023',
        status: 'Cancelled',
        customer: {
            initial: 'J',
            name: 'Jay Hooper',
            email: 'hooper@email.com',
        },
    },
    {
        id: 'INV-1218',
        date: 'Feb 3, 2023',
        status: 'Cancelled',
        customer: {
            initial: 'K',
            name: 'Krystal Stevens',
            email: 'k.stevens@email.com',
        },
    },
    {
        id: 'INV-1217',
        date: 'Feb 3, 2023',
        status: 'Paid',
        customer: {
            initial: 'S',
            name: 'Sachin Flynn',
            email: 's.flyn@email.com',
        },
    },
    {
        id: 'INV-1216',
        date: 'Feb 3, 2023',
        status: 'Cancelled',
        customer: {
            initial: 'B',
            name: 'Bradley Rosales',
            email: 'brad123@email.com',
        },
    },
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}
type Order = 'asc' | 'desc';
function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}
export default function OrderTable() {
    const x = useNavigate()
    const [order, setOrder] = React.useState<Order>('desc');
    const [open, setOpen] = React.useState<boolean>(false);
    const renderFilters = () => (
        <React.Fragment>
            <FormControl size="sm">
                <FormLabel>Status</FormLabel>
                <Select
                    size="sm"
                    placeholder="Filter by status"
                    slotProps={{ button: { sx: { whiteSpace: 'nowrap' } } }}
                >
                    <Option value="paid">Paid</Option>
                    <Option value="pending">Pending</Option>
                    <Option value="refunded">Refunded</Option>
                    <Option value="cancelled">Cancelled</Option>
                </Select>
            </FormControl>
            <FormControl size="sm">
                <FormLabel>Customer</FormLabel>
                <Input placeholder="customer" />
            </FormControl>
        </React.Fragment>
    );
    return (
        <React.Fragment>
            <Box
                className="SearchAndFilters-tabletUp"
                sx={{
                    borderRadius: 'sm',
                    py: 2,
                    display: "flex",
                    flexWrap: 'wrap',
                    gap: 1.5,
                    '& > *': {
                        minWidth: { xs: '120px', md: '160px' },
                    },
                }}
            >
                <FormControl size="sm">
                    <FormLabel>Search for order</FormLabel>
                    <Input size="sm" placeholder="Search" endDecorator={<SearchIcon />} />
                </FormControl>
                {renderFilters()}
            </Box>
            <Sheet
                className="OrderTableContainer"
                variant="outlined"
                sx={{
                    display: { xs: 'none', sm: 'initial' },
                    width: '100%',
                    borderRadius: 'sm',
                    flexShrink: 1,
                    overflow: 'auto',
                    minHeight: 0,
                }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    stickyHeader
                    hoverRow
                    sx={{
                        '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
                        '--Table-headerUnderlineThickness': '1px',
                        '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
                        '--TableCell-paddingY': '4px',
                        '--TableCell-paddingX': '8px',
                    }}
                >
                    <thead style={{ width: "100%" }}>
                        <tr>
                            <th style={{ width: "13%", padding: '12px 6px' }}>
                                <div
                                    color="primary"
                                    onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}
                                >
                                    Invoice
                                </div>
                            </th>
                            <th style={{ width: "15%", padding: '12px 6px' }}>Date</th>
                            <th style={{ width: "20%", padding: '12px 6px' }}>Status</th>
                            <th style={{ width: "35%", padding: '12px 6px' }}>Customer</th>
                            <th style={{ width: "50%", padding: '12px 6px' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stableSort(rows, getComparator(order, 'id')).map((row) => (
                            <tr key={row.id}>
                                <td>
                                    <Typography level="body-xs">{row.id}</Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">{row.date}</Typography>
                                </td>
                                <td>
                                    <Chip
                                        variant="soft"
                                        size="sm"
                                        startDecorator={
                                            {
                                                Paid: <CheckRoundedIcon />,
                                                Refunded: <AutorenewRoundedIcon />,
                                                Cancelled: <BlockIcon />,
                                            }[row.status]
                                        }
                                        color={
                                            {
                                                Paid: 'success',
                                                Refunded: 'neutral',
                                                Cancelled: 'danger',
                                            }[row.status] as ColorPaletteProp
                                        }
                                    >
                                        {row.status}
                                    </Chip>
                                </td>
                                <td>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <div>
                                            <Typography level="body-xs">{row.customer.name}</Typography>
                                        </div>
                                    </Box>
                                </td>
                                <td>
                                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                        <Button style={{ backgroundColor: "green" }} onClick={() => x("/orders/updateorder")} startDecorator={<EditRoundedIcon />}>update</Button>
                                        <Button style={{ backgroundColor: "red" }} onClick={() => setOpen(true)} startDecorator={<DeleteForeverRoundedIcon />}>delete</Button>
                                    </Box>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Sheet>
            <Box
                className="Pagination-laptopUp"
                sx={{
                    pt: 2,
                    gap: 1,
                    [`& .${iconButtonClasses.root}`]: { borderRadius: '50%' },
                    display: {
                        xs: 'none',
                        md: 'flex',
                    },
                }}
            >
                <Button
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    startDecorator={<KeyboardArrowLeftIcon />}
                >
                    Previous
                </Button>
                <Box sx={{ flex: 1 }} />
                {['1', '2', '3', '…', '8', '9', '10'].map((page) => (
                    <IconButton
                        key={page}
                        size="sm"
                        variant={Number(page) ? 'outlined' : 'plain'}
                        color="neutral"
                    >
                        {page}
                    </IconButton>
                ))}
                <Box sx={{ flex: 1 }} />
                <Button
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    endDecorator={<KeyboardArrowRightIcon />}
                >
                    Next
                </Button>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <ModalDialog variant="outlined" role="alertdialog">
                        <DialogTitle>
                            <WarningRoundedIcon />
                            caution
                        </DialogTitle>
                        <Divider />
                        <DialogContent>
                            Are you sure you want to delete this order?
                        </DialogContent>
                        <DialogActions>
                            <Button variant="solid" color="danger" onClick={() => setOpen(false)}>
                                Delete                        </Button>
                            <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                        </DialogActions>
                    </ModalDialog>
                </Modal>
            </Box>
        </React.Fragment>
    );
}
