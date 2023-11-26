import { useMutation } from 'react-query';
import { uploadFileToService } from '../services/fileStorage';

const uploadFile = ({ onSuccess, onError }) => {
  const { mutate: uploadFileToStorage, isLoading: isUploadFileToStorageLoading } = useMutation({
    mutationFn: (payload) => uploadFileToService(payload),
    onSuccess,
    onError
  });
  return {
    uploadFileToStorage,
    isUploadFileToStorageLoading
  };
};

export default uploadFile;
