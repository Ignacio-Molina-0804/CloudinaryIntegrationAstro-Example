# 🌤️ Astro + Cloudinary - Proyecto de Galería de Imágenes

Este proyecto es una galería de imágenes creada con [Astro](https://astro.build/) que se integra con [Cloudinary](https://cloudinary.com/) para subir, previsualizar y mostrar imágenes desde una carpeta específica.


## 📸 Funcionalidades

- ✅ **Subida de imágenes** a Cloudinary mediante un formulario con drag & drop.
- ✅ **Previsualización en vivo** antes de subir.
- ✅ **Galería dinámica**, cargando imágenes desde una carpeta en Cloudinary.
- ✅ **Componente reutilizable** para mostrar imágenes optimizadas con ancho configurable.
- ✅ Código tipado con TypeScript y organización limpia del proyecto.


## 🧱 Estructura del proyecto

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── CloudinaryImage.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── api/
│   │   │   └── upload.ts
│   │   ├── galeria.astro
│   │   ├── index.astro
│   │   └── upload.astro
│   ├── types/
│   │   └── cloudinary.d.ts
│   └── util/
│       └── cloudinary.ts
├── .env
├── astro.config.mjs
├── package.json
└── README.md
```


## ⚙️ Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` en la raíz con tus credenciales de Cloudinary:

```env
CLOUDINARY_CLOUD_NAME=tu_nombre
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
```

> Podés obtener estos datos desde tu [Cloudinary Console](https://cloudinary.com/console).


## 🚀 Ejecutar el proyecto

```bash
npm run dev
```

- Visita `http://localhost:4321/upload` para subir imágenes.
- Visita `http://localhost:4321/galeria` para ver la galería dinámica.
- Visita `http://localhost:4321/` para probar el componente de imagen con un ID fijo.


## 🧠 Detalles técnicos

- Las imágenes se suben al folder: `astro-uploads` en Cloudinary.
- Se usa `cloudinary.uploader.upload_stream` para manejar el archivo como buffer.
- El formulario de subida permite **arrastrar** archivos o seleccionarlos desde el explorador.
- La galería usa el API de Cloudinary para listar las últimas imágenes.


## 📦 Dependencias principales

- [`astro`](https://astro.build/)
- [`cloudinary`](https://www.npmjs.com/package/cloudinary)
- [`dotenv`](https://www.npmjs.com/package/dotenv)
- [`TypeScript`](https://www.typescriptlang.org/)


## 📬 Autor

Ignacio Ezequiel Molina Granda

## 📝 Licencia

MIT License - libre para usar, modificar y compartir.
