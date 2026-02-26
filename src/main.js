import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const formEl = document.querySelector('.form');

iziToast.settings({
  position: 'topRight',
  timeout: 2500,
});

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({ message: 'Please enter a search query.' });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      const images = data.hits;

      if (!images || images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(images);
    })
    .catch(() => {
      iziToast.error({ message: 'Something went wrong. Please try again later.' });
    })
    .finally(() => {
      hideLoader();
    });

  event.currentTarget.reset();
}