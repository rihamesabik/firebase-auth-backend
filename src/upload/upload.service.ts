import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

@Injectable()
export class UploadService {
  async uploadToCloudinary(file: any): Promise<any> {
    // Convertir le buffer en base64
    const base64String = file.buffer.toString('base64');

    // Créer un Data URI compatible avec Cloudinary
    const dataURI = `data:${file.mimetype};base64,${base64String}`;

    // Envoyer vers Cloudinary
    return await cloudinary.uploader.upload(dataURI, {
      resource_type: 'auto',
    });
  }
}
