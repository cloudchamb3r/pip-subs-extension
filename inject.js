navigator.mediaDevices.getDisplayMedia().then(stream => {
    const presenter = document.createElement('video');
    presenter.style.cssText = 'display:none;';
    presenter.autoplay = true;
    document.getElementsByTagName('body')[0].appendChild(presenter);
    
    presenter.addEventListener('loadedmetadata', () => {
        presenter.requestPictureInPicture();
    });
    presenter.srcObject = stream;
})

// async function injectMain() {
//     const stream = navigator.mediaDevices.getDisplayMedia();

//     presenter = document.createElementNS('video');
//     presenter.style.cssText = 'display:none';
//     presenter.autoplay = true;
//     document.getElementsByTagName('body')[0].appendChild(presenter);
//     presenter.addEventListener('loadmetadata', () => {
//         presenter.requestPictureInPicture();
//     });
    
//     presenter.srcObject = stream;
// }

// injectMain(); 