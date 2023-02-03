import axios from 'axios';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactCrop, { Crop } from 'react-image-crop';
import { toast } from 'react-toastify';

import 'react-image-crop/dist/ReactCrop.css';

import { API_URL } from '@/config/index';
import getCroppedImg from '@/helpers/getCroppedImg';
import {
  createObject,
  getObjectID,
  partialUpdateObject,
} from '@/pages/api/algolia/algolia';

interface IPageProps {
  user?: any;
  token?: string;
}

export default function ProfilePictureForm({ user, token }: IPageProps) {
  const router = useRouter();

  // cropper setup
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [image, setImage] = useState<any>();
  const [crop, setCrop] = useState<Partial<Crop>>({
    unit: '%',
    width: 100,
    aspect: 1,
  });
  const onCropChange = (c: Crop, percentageCrop: Crop) => setCrop(c);
  const onImageLoaded = (img: HTMLImageElement) => {
    imageRef.current = img;
  };

  //Algolia Update Client API
  const updateAlgoliaProfile = async (id: string, data: object) => {
    const objectID: string = await getObjectID(id);

    if (!objectID) {
      user.profile.connections = [];
      const newObjectID: string = await createObject(user.profile);
    } else {
      await partialUpdateObject(objectID, data);
    }
  };

  // dropzone setup
  const handleDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImage(reader.result);
      });
      // @ts-ignore
      reader.readAsDataURL(acceptedFiles[0]);
    }
  };
  const {
    open,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'image/*',
    onDrop: handleDrop,
    noClick: true,
    noKeyboard: true,
  });

  const [uploading, setUploading] = useState(false);
  const uploadProfilePicture = async () => {
    setUploading(true);
    try {
      if (imageRef.current && crop.width && crop.height) {
        const croppedImageUrl = await getCroppedImg(
          imageRef.current,
          crop as Crop
        );

        const body = new FormData();
        body.append('files', croppedImageUrl);
        body.append('refId', user?.profile?.id);
        body.append('ref', 'profile');
        body.append('field', 'profilePicture');

        await axios.post(`${API_URL}/upload`, body, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(body);
        //Getting ObjectID and Updating Data to Algolia
        // updateAlgoliaProfile(user.id, body);

        setUploading(false);
        router.reload();
        toast("That's a great looking photo!");
      } else {
        setUploading(false);
        throw new Error('Invalid image');
      }
    } catch (e: any) {
      setUploading(false);
      toast.error(e.message);
    }
  };

  const renderCrop = () => (
    <>
      <ReactCrop
        src={image}
        crop={crop}
        onChange={onCropChange}
        onImageLoaded={onImageLoaded}
        ruleOfThirds
      />
      <div className="mt-2 flex items-center">
        <button
          type="submit"
          onClick={uploadProfilePicture}
          disabled={uploading}
          className="mr-5 flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-6 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-default disabled:bg-gray-400"
        >
          Save
        </button>
        <button
          type="submit"
          onClick={open}
          disabled={uploading}
          className="flex justify-center rounded-md border border-transparent bg-gray-100 py-2 px-6 text-sm font-medium text-gray-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-default disabled:bg-gray-100"
        >
          Choose another photo
        </button>
      </div>
    </>
  );

  const renderDrop = () => (
    <div className="col-span-3">
      <div className="mt-1 flex items-center">
        <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
          {user?.profile?.profilePicture?.url ? (
            <img
              alt={`${user?.profile?.firstName} ${user?.profile?.lastName}`}
              src={user?.profile?.profilePicture?.url}
              className="h-12 w-12 rounded-full"
            />
          ) : (
            <svg
              className="h-full w-full text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </span>
        <button
          type="button"
          onClick={open}
          disabled={uploading}
          className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Change
        </button>
      </div>
    </div>
  );

  return (
    <form action="#" method="POST">
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Profile picture
              <button
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/settings/profile-preview');
                }}
                className="float-right ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Profile Preview
              </button>
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Share the best version of yourself
            </p>
          </div>

          <div className="w-full max-w-sm lg:w-96">
            <div {...getRootProps()}>
              {image ? renderCrop() : renderDrop()}
              <input {...getInputProps()} />
            </div>
          </div>
        </div>
        {/* <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div> */}
      </div>
    </form>
  );
}
