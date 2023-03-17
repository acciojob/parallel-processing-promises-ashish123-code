//your JS code here. If required.
const images = [
    { url: "https://picsum.photos/id/238/200/300" },
    { url: "https://picsum.photos/id/237/200/300" },
    { url: "https://picsum.photos/id/237/200/300" }
  ];

  const downloadImages = async () => {
    const promises = images.map(image => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.url;
        img.onload = () => {
          resolve(img);
        };
        img.onerror = () => {
          reject(`Failed to load image's URL: ${image.url}`);
        };
      });
    });

    try {
      const result = await Promise.all(promises);
      result.forEach(img => {
        const output = document.getElementById("output");
        output.appendChild(img);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const button = document.getElementById("download-images-button");
  button.addEventListener("click", downloadImages);
