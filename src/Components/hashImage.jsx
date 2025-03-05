import pica from 'pica';

export const hashImage = (imagePath) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imagePath;
    img.crossOrigin = 'Anonymous';

    img.onload = async () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const resizedCanvas = document.createElement('canvas');
      resizedCanvas.width = 16;
      resizedCanvas.height = 16;

      await pica().resize(canvas, resizedCanvas);
      const imageData = resizedCanvas.getContext('2d').getImageData(0, 0, 16, 16).data;

      let hash = '';
      for (let i = 0; i < imageData.length; i += 4) {
        hash += (imageData[i] + imageData[i + 1] + imageData[i + 2]) > 382 ? '1' : '0';
      }

      resolve(hash);
    };

    img.onerror = (error) => {
      reject(error);
    };
  });
};