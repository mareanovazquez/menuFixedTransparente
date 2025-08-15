# Menu Fixed Transparente

Un sitio web responsive con menú fijo transparente que se activa al hacer scroll. Incluye navegación móvil con hamburger menu y botón de "volver arriba".

## Características

- **Header transparente**: Menu principal transparente que se vuelve fijo al hacer scroll
- **Diseño responsive**: Adaptable a dispositivos móviles y desktop
- **Menú hamburguesa**: Navegación móvil con animaciones suaves
- **Botón volver arriba**: Aparece automáticamente al hacer scroll
- **Smooth scrolling**: Navegación suave entre secciones

## Tecnologías

- HTML5
- CSS3 (Flexbox, Media Queries)
- JavaScript (Vanilla)
- Font Awesome (iconos)
- Google Fonts (Poppins)

## Estructura del proyecto

```
menuFixedTransparente/
├── index.html          # Página principal
├── css/
│   └── main.css        # Estilos principales
├── js/
│   ├── headerFijado.js    # Lógica del header fijo
│   ├── menuResponsivo.js  # Menú móvil hamburguesa
│   └── botonVolver.js     # Botón volver arriba
└── img/
    ├── favicon.png
    ├── logotipo.png
    └── logotipo11.png
```

## Funcionalidades

### Header Fijo
- Se activa cuando el usuario hace scroll hasta la sección "Proyectos"
- Transición suave de transparente a fondo blanco
- Optimizado con throttling para mejor performance

### Menú Responsive
- Menú hamburguesa en dispositivos móviles
- Se cierra automáticamente al:
  - Hacer clic en una opción del menú
  - Presionar la tecla Escape
  - Hacer clic fuera del menú
- Incluye enlaces a redes sociales

### Botón Volver Arriba
- Aparece automáticamente al hacer scroll
- Permite volver rápidamente al inicio de la página
- Animación suave de entrada y salida

## Instalación

1. Clona el repositorio:
```bash
git clone [URL-del-repositorio]
```

2. Abre `index.html` en tu navegador

No requiere instalación de dependencias adicionales ya que utiliza CDNs para las librerías externas.

## Personalización

### Colores principales
- Azul principal: `#0089E0`
- Texto: `#444444`
- Fondo alternativo: `#F3F4FA`

### Breakpoints responsive
- Desktop: > 900px
- Tablet: 550px - 900px  
- Mobile: < 550px

## Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaFuncionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/NuevaFuncionalidad`)
5. Abre un Pull Request


