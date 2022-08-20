const inputFile = document.querySelector('#picture-input');
const pictureImage = document.querySelector('#picture-image');
const pictureImageTXT = 'choose an image';
// pictureImage.innerHTML = pictureImageTXT;

//escuta o evento de mudança no input
inputFile.addEventListener('change', function(event) {
    //captura o evento
    const inputTarget = event.target;

    //files contém um array com os arquivos
    const imageFile = inputTarget.files[0];

    if (imageFile) {
        //instância de FileReader
        const readerImage = new FileReader();

        //adiciona a propriedade result do objeto FileReader os dados da imagem
        readerImage.readAsDataURL(imageFile);

        readerImage.addEventListener('load', function(event) {
            const readerTarget = event.target;
            
            pictureImage.appendChild(createElementImg({
                atributeName: 'src',
                                //resulta contém os dados da imagem
                atributeValue: readerTarget.result,
                className: 'picture-img'
            }));
        });

    } else {
        pictureImage.innerHTML = pictureImageTXT;
    }
});

function createElementImg(objatributes)
{
    const img = document.createElement('img');
    img.setAttribute(objatributes.atributeName, objatributes.atributeValue);
    img.classList.add(objatributes.className);

    return img;
}