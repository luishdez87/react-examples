import axios from 'axios';

export const Method = {
  GET: 'GET',
  POST: 'POST',

}

export const request = async (
  url,
  method = Method.GET,
  query,
  page
) => {
  const response = await axios({
    method,
    url,
    params: { q: query, page }
  })

  return response.data;
}