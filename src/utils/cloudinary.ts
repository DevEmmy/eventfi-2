import axios from 'axios';

interface CloudinaryResponse {
  secure_url: string;
  public_id: string;
}

export const uploadToCloudinary = async (file: File): Promise<string> => {
  try {
    // Create form data
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || '');

    // Upload to Cloudinary
    const response = await axios.post<CloudinaryResponse>(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData
    );

    return response.data.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw new Error('Failed to upload file');
  }
}; 