# 📚 Mi Lista de Libros Favoritos

Aplicación educativa full stack para gestionar tus libros favoritos.

## 🚀 Tecnologías

- Frontend: React + Vite + Bootstrap
- Backend: Node.js + Express
- Base de datos: MongoDB (Atlas recomendado)
- Despliegue: Vercel (frontend) + Railway (backend)

## 🛠️ Instalación local

### 1. Clonar el repositorio
```bash
git clone <repositorio>
cd booklist-project
```

### 2. Instalar dependencias
```bash
cd server
npm install
cd ../client
npm install
```

### 3. Configurar entorno
En `server/.env`:
```
MONGO_URI=tu_mongo_uri
PORT=5000
```

### 4. Ejecutar ambos servidores
```bash
# Backend
cd server
node server.js

# Frontend
cd ../client
npm run dev
```

## 🖼️ Capturas

*(Agrega capturas aquí del frontend en acción)*

## 🌐 Despliegue

- **Frontend:** Sube `client/` a Vercel.
- **Backend:** Sube `server/` a Railway.
