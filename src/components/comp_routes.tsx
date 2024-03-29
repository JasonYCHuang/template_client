import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import PageDataset from './page_avary_ai/dataset';
import PageStyleBasic from './page_style_basic/index';
import PageStyleMui from './page_style_mui/index';
import PageStyleMuiAdv from './page_style_mui_adv/index';
import PageDataReducer from './page_data_reducer/index';

const RoutesComp = () => (
  <Box sx={{ px: '10px' }}>
    <Routes>
      <Route path="/" element={<PageDataset />} />
      <Route path="/style_basic" element={<PageStyleBasic />} />
      <Route path="/style_mui" element={<PageStyleMui />} />
      <Route path="/style_mui_adv" element={<PageStyleMuiAdv />} />
      <Route path="/data_reducer" element={<PageDataReducer />} />
    </Routes>
  </Box>
);

export default RoutesComp;
