# 🍽️ Recetas CRUD con React y Backend Node.js

Aplicación web que permite **crear, listar, editar y eliminar recetas**, con **autenticación de administrador** mediante login y registro.  
Se utiliza un **backend en Node.js con Express y MongoDB** y un frontend en **React**.

---

## 🚀 Funcionalidades

- ✅ **Registro de usuarios administradores** con validación de nombre, email y contraseña.  
- ✅ **Login de administradores** con generación de token JWT y control de sesión mediante **sessionStorage**.  
- ✅ **Crear nuevas recetas** enviando datos al backend.  
- ✅ **Editar recetas existentes** consumiendo los endpoints correspondientes.  
- ✅ **Eliminar recetas** con confirmación visual usando **SweetAlert2**.  
- ✅ **Visualizar detalles de cada receta** mediante una vista "Ver más".  
- ✅ **Carrusel de imágenes** en la página de inicio.  
- ✅ **Persistencia de datos** en **localStorage** para las recetas y **sessionStorage** para el usuario logueado.  
- ✅ **Diseño responsive** totalmente adaptativo con **React Bootstrap** y **Bootstrap 5**.

---

## 🛠️ Tecnologías utilizadas

### Frontend

- **React 19** – Librería principal para la construcción de la interfaz.  
- **React Router DOM 7** – Gestión de rutas y navegación.  
- **React Bootstrap 2** – Componentes pre-estilizados y responsive.  
- **Bootstrap 5** – Estilos globales y utilidades CSS.  
- **SweetAlert2** – Alertas visuales y confirmaciones.  

### Backend

- **Node.js + Express** – Servidor y rutas REST.  
- **MongoDB + Mongoose** – Base de datos NoSQL para usuarios y recetas.  
- **bcrypt** – Hash de contraseñas.  
- **JWT** – Autenticación mediante tokens.  

---
## **🛠 Instalación y Ejecución**  

1. **Clona el repositorio**  
   ```bash
   git clone https://github.com/hernanortiz1/ejercicio14React.git
   cd ejercicio14
   ```

2. **Instala las dependencias**  
   ```bash
   npm install
   ```

3. **Ejecuta el proyecto**  
   ```bash
   npm run dev
   ```
   Abre tu navegador en: [http://localhost:5173](http://localhost:5173)  

---

## **📂 Estructura del Proyecto**  
```
src/
├── assets/
│   └── imgCarrouselInicio/    # Imágenes del carrusel
├── components/
│   ├── pages/
│   │   ├── Inicio.jsx
│   │   ├── Login.jsx
│   │   ├── Administrador.jsx
│   │   ├── DetalleReceta.jsx
│   │   ├── Error404.jsx
│   │   └── recetas/
│   │       ├── CardReceta.jsx
│   │       ├── FormularioReceta.jsx
│   │       |── ItemReceta.jsx
|   |       └── DetalleReceta.jsx
│   ├── routes/
│   │   └── ProtectorAdmin.jsx
│   └── shared/
│       ├── Footer.jsx
│       └── Menu.jsx
│   └── helpers/
│       ├── quieres.js
└── App.jsx
```

---

## 👤 Autor

- **Hernán Ortiz**  
  [GitHub](https://github.com/hernanortiz1) | [LinkedIn](https://www.linkedin.com/in/hern%C3%A1n-ortiz/)  
  *Desarrollador*

