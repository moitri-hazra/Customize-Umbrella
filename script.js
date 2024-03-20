const uploadImage = (event) => {
    const imageFiles = event.target.files;
    const fileName = imageFiles[0].name;
    
    updateUIOnUpload(fileName);
    
    const imageFilesLength = imageFiles.length;
    if (imageFilesLength > 0) {
        const imageSrc = URL.createObjectURL(imageFiles[0]);
        displayImagePreview(imageSrc);
    }
};

const updateUIOnUpload = (fileName) => {
    document.getElementById('uploadButtonTextId').innerText = fileName;
    document.getElementById('removeButtonId').style.display = 'block';
    document.getElementById('uploadButtonDivId').style.width= '90%';
};

const displayImagePreview = (imageSrc) => {
    const imagePreviewElement = document.querySelector("#uploadImageId");
    imagePreviewElement.src = imageSrc;
    imagePreviewElement.style.display = "block";
};

const changeImageColor = (color) => {
    const executeChange = () => {
        updateUIOnColorChange(color);
        displayUmbrellaImage(color);
    };

    updateUIOnColorChangeInProgress(color);

    document.body.style.transition = 'background-color 1s ease-out';
    document.body.style.backgroundColor = color;

    const myTimeout = setTimeout(executeChange, 1000);    
};

const updateUIOnColorChange = (color) => {
    document.getElementById('previewLoaderId').style.display = 'none';
    document.getElementById('umbrellaImageId').style.display = 'block';
    document.getElementById('previewLoaderButtonId').style.display = 'none';
    document.getElementById('uploadImageButtonId').style.display = 'block';
    document.getElementById('uploadImageId').style.display = 'block';

    document.body.style.backgroundColor = getBackgroundColor(color);
    document.getElementById('uploadButtonDivId').style.backgroundColor = getColorSpecificBackground(color);
    document.getElementById('removeButtonId').style.backgroundColor = getColorSpecificBackground(color);
    document.getElementById('umbrellaImageId').src = getUmbrellaImagePath(color);
};

const updateUIOnColorChangeInProgress = (color) => {
    document.getElementById('umbrellaImageId').style.display = 'none';
    document.getElementById('uploadImageButtonId').style.display = 'none';
    document.getElementById('uploadImageId').style.display = 'none';
    document.getElementById('previewLoaderButtonId').style.display = 'block';
    document.getElementById('previewLoaderId').style.display = 'block';
    document.getElementById('previewLoaderId').style.color = color;
};

const getBackgroundColor = (color) => {
    return color === 'yellow' ? 'rgb(254, 255, 173)' :
           color === 'pink' ? 'rgb(255, 194, 249)' :
           'rgb(215, 244, 252)';
};

const getColorSpecificBackground = (color) => {
    return color === 'yellow' ? 'gold' :
           color === 'pink' ? 'mediumvioletred' :
           'lightskyblue';
};

const getUmbrellaImagePath = (color) => {
    const imagePaths = {
        'yellow': 'assets/Yellow umbrella.png',
        'pink': 'assets/Pink umbrella.png',
        'blue': 'assets/Blue umbrella.png'
    };
    return imagePaths[color];
};

const removeUploadImage = () => {
    document.getElementById('uploadButtonTextId').innerText = 'Upload Logo';
    document.getElementById('removeButtonId').style.display = 'none';
    document.getElementById('uploadButtonDivId').style.width= '100%';
    document.getElementById('uploadImageId').src= '';
};
