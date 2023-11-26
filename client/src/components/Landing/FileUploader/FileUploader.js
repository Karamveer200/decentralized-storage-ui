import React, { useRef } from 'react';
import BodyContainer from '../../Common/BodyContainer/BodyContainer';
import { useNavigate } from 'react-router-dom';
import uploadFile from '../../../hooks/uploadFile';
import { toast } from 'react-toastify';

const FileUploader = () => {
  const { uploadFileToStorage, isUploadFileToStorageLoading } = uploadFile({
    onSuccess: () => {
      toast.success('File uploaded successfully');
    },
    onError: () => {
      toast.error('Error uploading file');
    }
  });

  const inputFileRef = useRef(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files?.[0];

    const formData = new FormData();
    formData.append('file', file);

    uploadFileToStorage(formData);
  };

  return (
    <BodyContainer className="h-screen">
      <section className="flex flex-col lg:flex-row pb-24 sm:pb-32 pt-8 lg:pt-0">
        <button
          onClick={() => inputFileRef?.current?.click()}
          className="bg-indigo-600 cursor-pointer text-white font-bold px-8 py-4 text-xl transition-all duration-200 ease-in rounded-md hover:bg-indigo-400">
          Upload File
        </button>
        <input type="file" hidden ref={inputFileRef} onChange={handleFileUpload} />
      </section>
    </BodyContainer>
  );
};

export default FileUploader;
