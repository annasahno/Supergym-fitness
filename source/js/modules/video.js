const videos = document.querySelectorAll('.video');

const findVideos = () => {
  videos.forEach((video) => setupVideo(video));
};

function setupVideo(video) {
  let linkElement = video.querySelector('.video__link');
  let buttonElement = video.querySelector('.video__button');

  if (linkElement && buttonElement) {
    let link = linkElement.href;

    linkElement.removeAttribute('href');

    buttonElement.addEventListener('click', () => {
      let iframe = createIframe(link);

      linkElement.remove();
      buttonElement.remove();
      video.appendChild(iframe);
    });
  }
}

function createIframe(link) {
  let iframe = document.createElement('iframe');
  iframe.setAttribute('src', link + '?&autoplay=1');
  iframe.classList.add('video__media');

  return iframe;
}

export {findVideos};
