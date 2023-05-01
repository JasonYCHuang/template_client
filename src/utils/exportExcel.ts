/* eslint-disable import/prefer-default-export */

export const exportExcel = (fileName: string, base64Excel: string) => {
  const link = `data:${MimeType};base64,${base64Excel}`;
  const a = document.createElement('a');
  a.download = fileName;
  a.href = link;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
