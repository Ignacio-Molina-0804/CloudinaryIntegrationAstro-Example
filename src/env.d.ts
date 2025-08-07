// src/env.d.ts
interface ImportMetaEnv {
  CLOUDINARY_CLOUD_NAME: string;
  CLOUDINARY_API_KEY: string;
  CLOUDINARY_API_SECRET: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}