import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '34601890-0da8f577553a948963b9b5ea4';

export const getPhotos = async (search, page = 1) => {
  return await axios
    .get(
      `/?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(({ data }) => data);
};
