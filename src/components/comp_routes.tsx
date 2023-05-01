import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import PageStyleBasic from './page_style_basic/index';
import PageStyleMui from './page_style_mui/index';

const RoutesComp = () => (
  <Box sx={{ px: '10px' }}>
    <Routes>
      <Route path="/" element={<PageStyleBasic />} />
      <Route path="/style_basic" element={<PageStyleBasic />} />
      <Route path="/style_mui" element={<PageStyleMui />} />
    </Routes>
  </Box>
);

export default RoutesComp;
