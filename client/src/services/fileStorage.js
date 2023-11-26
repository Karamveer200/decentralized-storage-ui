import { NODE_BE_API as axios } from './axiosInstance';

export const uploadFileToService = (payload) => {
  return axios
    .post(`/fileService/upload`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((res) => res.data);
};
