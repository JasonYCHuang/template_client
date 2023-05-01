/* eslint-disable import/prefer-default-export */
// @ts-nocheck
const calculateimgSize = (url: any) => new Promise((resolve, reject) => {
  const img = document.createElement('img');
  img.addEventListener('load', (e: any) => {
    resolve({
      width: e.target.width,
      height: e.target.height,
    });
  });
  img.addEventListener('error', () => {
    reject();
  });
  img.src = url;
});

export const getImgSize = (file: any, setWidth: any, setHeight: any) => {
  if (!file) return;
  const imgReader = new FileReader();
  imgReader.readAsDataURL(file);
  imgReader.addEventListener('loadend', async (e: any) => {
    const imgSrc = e.target.result;
    const { width, height } = await calculateimgSize(imgSrc);
    setWidth(width);
    setHeight(height);
  });
};

const calculateCompressSize = (
  img: any,
  maxWidth: number,
  maxHeight: number,
) => {
  let { width } = img;
  let { height } = img;

  if (width > height) {
    if (width > maxWidth) {
      height = Math.round((height * maxWidth) / width);
      width = maxWidth;
    }
  } else if (height > maxHeight) {
    width = Math.round((width * maxHeight) / height);
    height = maxHeight;
  }
  return [width, height];
};

export const compressImg = (file: any, setImgBase64: any) => {
  if (!file) return;
  const MAX_WIDTH = 600;
  const MAX_HEIGHT = 415;
  const MIME_TYPE = 'image/png';
  const QUALITY = 1;

  const blobUrl = URL.createObjectURL(file);
  const img = new Image();
  img.src = blobUrl;
  img.onerror = () => {
    URL.revokeObjectURL(blobUrl);
    alert('加載圖片失敗');
  };
  img.onload = async () => {
    URL.revokeObjectURL(blobUrl);
    const [newWidth, newHeight] = calculateCompressSize(img, MAX_WIDTH, MAX_HEIGHT);
    const canvas = document.createElement('canvas');
    canvas.width = newWidth;
    canvas.height = newHeight;
    const ctx = canvas.getContext('2d');
    ctx?.drawImage(img, 0, 0, newWidth, newHeight);
    canvas.toBlob(
      (blob: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const imgBase64 = reader.result;
          setImgBase64(imgBase64);
        };
      },
      MIME_TYPE,
      QUALITY,
    );
  };
};
