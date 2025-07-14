# 🍽️ Recetas CRUD con React

Aplicación web que permite **crear, listar, editar y eliminar recetas**, con autenticación de administrador, utilizando **React, React Router, React Bootstrap y localStorage**.

---

## 🚀 Funcionalidades

✅ Crear nuevas recetas con validaciones.  
✅ Editar recetas existentes.  
✅ Eliminar recetas con confirmación (SweetAlert2).  
✅ Visualizar detalles de cada receta (Ver más).  
✅ Carrusel de imágenes en la página de inicio.  
✅ Login de administrador con sessionStorage.  
✅ Persistencia de datos en localStorage.  
✅ Totalmente responsiva con React Bootstrap.

---

## 🛠️ Tecnologías utilizadas

- **React 19**
- **React Router DOM 7**
- **React Bootstrap 2**
- **Bootstrap 5**
- **SweetAlert2**
- **localStorage** y **sessionStorage**

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
└── App.jsx
```

---

## 👤 Autor

- **Hernán Ortiz**  
  [GitHub](https://github.com/hernanortiz1) | [LinkedIn](https://www.linkedin.com/in/hern%C3%A1n-ortiz/)  
  *Desarrollador*

