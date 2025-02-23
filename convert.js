/*------------------------------------ WEBP + 30 %----------------------------------- */
/*------------------------------------ WEBP + 30 %----------------------------------- */
/*------------------------------------ WEBP + 30 %----------------------------------- */
/*------------------------------------ WEBP + 30 %----------------------------------- */
/*------------------------------------ WEBP + 30 %----------------------------------- */
/*------------------------------------ WEBP + 30 %----------------------------------- */
/*------------------------------------ WEBP + 30 %----------------------------------- */
/*------------------------------------ WEBP + 30 %----------------------------------- */

/* const imageInput = document.getElementById('imageInput');
const resizeBtn = document.createElement('button');
resizeBtn.textContent = 'Redimensionează la 30%';
resizeBtn.style.display = 'none';
document.body.appendChild(resizeBtn);
const downloadBtn = document.getElementById('downloadBtn');
let convertedImages = [];

imageInput.addEventListener('change', function (event) {
  const files = event.target.files;
  if (!files.length) return;

  convertedImages = []; // Resetăm lista la fiecare nouă selecție
  resizeBtn.style.display = 'block';

  for (let file of files) {
    if (!file.type.startsWith('image/jpeg')) {
      alert('Te rog să încarci doar imagini JPG.');
      continue;
    }

    const img = new Image();
    const reader = new FileReader();

    reader.onload = function (e) {
      img.src = e.target.result;
    };

    img.onload = function () {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width * 0.3;
      canvas.height = img.height * 0.3;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(
        (blob) => {
          const url = URL.createObjectURL(blob);
          convertedImages.push({
            name: file.name.replace(/\.jpe?g$/, '.webp'),
            url,
          });

          // Afișăm butonul doar dacă avem imagini convertite
          if (convertedImages.length > 0) {
            downloadBtn.style.display = 'block';
          }
        },
        'image/webp',
        0.8
      );
    };

    reader.readAsDataURL(file);
  }
});

resizeBtn.addEventListener('click', function () {
  if (convertedImages.length === 0) return;
  downloadBtn.style.display = 'block';
});

// Descărcăm toate imaginile când utilizatorul apasă butonul
downloadBtn.addEventListener('click', function () {
  if (convertedImages.length === 0) return;

  convertedImages.forEach((image) => {
    const a = document.createElement('a');
    a.href = image.url;
    a.download = image.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });

  // Ascundem butonul după descărcare
  downloadBtn.style.display = 'none';
});
 */
/*------------------------------------ JUST WEBP----------------------------------- */
/*------------------------------------ JUST WEBP----------------------------------- */
/*------------------------------------ JUST WEBP----------------------------------- */
/*------------------------------------ JUST WEBP----------------------------------- */
/*------------------------------------ JUST WEBP----------------------------------- */

const imageInput = document.getElementById('imageInput');
const downloadBtn = document.getElementById('downloadBtn');
let convertedImages = [];

imageInput.addEventListener('change', function (event) {
  const files = event.target.files;
  if (!files.length) return;

  convertedImages = []; // Resetăm lista la fiecare nouă selecție

  for (let file of files) {
    if (!file.type.startsWith('image/jpeg')) {
      alert('Te rog să încarci doar imagini JPG.');
      continue;
    }

    const img = new Image();
    const reader = new FileReader();

    reader.onload = function (e) {
      img.src = e.target.result;
    };

    img.onload = function () {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          const url = URL.createObjectURL(blob);
          convertedImages.push({
            name: file.name.replace(/\.jpe?g$/, '.webp'),
            url,
          });

          // Afișăm butonul doar dacă avem imagini convertite
          if (convertedImages.length > 0) {
            downloadBtn.style.display = 'block';
          }
        },
        'image/webp',
        0.8
      );
    };

    reader.readAsDataURL(file);
  }
});

// Descărcăm toate imaginile când utilizatorul apasă butonul
downloadBtn.addEventListener('click', function () {
  if (convertedImages.length === 0) return;

  convertedImages.forEach((image) => {
    const a = document.createElement('a');
    a.href = image.url;
    a.download = image.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });

  // Ascundem butonul după descărcare
  downloadBtn.style.display = 'none';
});
