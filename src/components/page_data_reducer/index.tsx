import Box from '@mui/material/Box';
import CalcByBtnComp from './comp_calc_by_btn';
import AddByInputComp from './comp_add_by_input';

const styleRoot = {
  border: '1px solid red',
};

const PageStyleMui = () => (
  <Box style={styleRoot}>
    <CalcByBtnComp />
    <br />
    <AddByInputComp />
  </Box>
);

export default PageStyleMui;
