const inputFile = document.querySelector("#picture-input");
const pictureImage = document.querySelector("#picture-image");
const pictureImageTXT = "choose an image";

inputFile.addEventListener("change", (event) => {
  if (pictureImage.childElementCount === 2) {
      inputFile.disabled = true;
  }
  
  const imageFile = event.target.files[0];

  if (imageFile) {
    const readerImage = new FileReader();

    readerImage.readAsDataURL(imageFile);

    readerImage.addEventListener("load", function (event) {
      const readerTarget = event.target;

      pictureImage.appendChild(
        createElementImg({
          atributeName: "src",
          atributeValue: readerTarget.result,
          className: "picture-img",
        })
      );
    });
  } else {
    pictureImage.innerHTML = pictureImageTXT;
  }
});

function createElementImg(objatributesTag) {
  const img = document.createElement("img");
  img.setAttribute(objatributesTag.atributeName, objatributesTag.atributeValue);
  img.classList.add(objatributesTag.className);

  return img;
}
