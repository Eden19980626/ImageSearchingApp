import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID sDJmW-YAEk_BDWBFss3x8qbmwzTmRFdwWlxPuOr8XYo',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
