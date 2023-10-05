import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -40,
    top: -5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const styleRoot = {
  padding: 15,
  backgroundColor: '#eeeeee',
};

interface TypDataset {
  partNum: string,
  lotId: string,
  description: string,
  createdAt: string,
  updatedAt: string,
}

const datasets: TypDataset[] = [
  {
    partNum: 'PN000P01',
    lotId: 'LOT00L01',
    description: '收集了150張圖片',
    createdAt: '2023/10/01-14:01:20',
    updatedAt: '2023/10/06-09:31:15',
  },
  {
    partNum: 'PN000P03',
    lotId: 'LOT00L0C',
    description: '收集了32張圖片',
    createdAt: '2023/10/02-14:01:20',
    updatedAt: '2023/10/07-09:31:15',
  },
  {
    partNum: 'PN000P01',
    lotId: 'LOT00L02',
    description: '收集了72張圖片',
    createdAt: '2023/10/05-14:01:20',
    updatedAt: '2023/10/08-09:31:15',
  },
  {
    partNum: 'PN000P01',
    lotId: 'LOT00L03',
    description: '收集了20張圖片',
    createdAt: '2023/09/15-14:01:20',
    updatedAt: '2023/09/21-09:31:15',
  },
];

const labelBtns = () => (
  <Stack spacing={2} direction="row" justifyContent="flex-end">
    <Button variant="contained" endIcon={<AutoFixHighIcon />}>
      <StyledBadge badgeContent={999} color="secondary">
        標記
      </StyledBadge>
    </Button>
    <Button variant="contained" endIcon={<SpellcheckIcon />}>
      <StyledBadge badgeContent={999} color="secondary">
        審核
      </StyledBadge>
    </Button>
  </Stack>
);

const opBtns = () => (
  <Stack spacing={2} direction="row" justifyContent="flex-end">
    <Button variant="contained" size="small">增加</Button>
  </Stack>
);

const RowComp = () => (
  <TableBody>
    {
      datasets.map((row) => (
        <TableRow
          key={row.updatedAt}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="right">{row.partNum}</TableCell>
          <TableCell align="right">{row.lotId}</TableCell>
          <TableCell align="right">{row.description}</TableCell>
          <TableCell align="right">{row.updatedAt}</TableCell>
          <TableCell align="right">
            { labelBtns() }
          </TableCell>
          <TableCell align="right">
            { opBtns() }
          </TableCell>
        </TableRow>
      ))
    }
  </TableBody>
);

const TableComp = () => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="right">Part Num</TableCell>
          <TableCell align="right">Lot ID</TableCell>
          <TableCell align="right">描述</TableCell>
          <TableCell align="right">更新日期</TableCell>
          <TableCell align="right">標記</TableCell>
          <TableCell align="right">操作</TableCell>
        </TableRow>
      </TableHead>
      <RowComp />
    </Table>
  </TableContainer>
);

const PageDataset = () => (
  <div style={styleRoot}>
    <TableComp />
  </div>
);

export default PageDataset;
