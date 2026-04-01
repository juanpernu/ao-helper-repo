# 🧙 AO Web Helper

Extensión de Chrome con guía interactiva para **Argentum Online Web** ([aoweb.app](https://aoweb.app)).

Se muestra como un sidebar dentro del juego (ruta `/play`) con información en tiempo real según tu clase y nivel.

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?logo=googlechrome&logoColor=white)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-green)
![License](https://img.shields.io/badge/License-MIT-blue)

## Features

- **📍 Guía de Leveo** — Zonas recomendadas por nivel, criaturas, exp aproximada, y cómo llegar a cada dungeon (número de mapa de entrada)
- **✨ Hechizos** — Progresión de hechizos por clase, costos de maná reales, daño, precios y en qué NPC comprarlos (con ciudad y mapa)
- **🛡️ Equipamiento** — Items recomendados por clase y nivel, con stats, precios y dónde conseguirlos (NPC, crafteo, drops)
- **🗺️ Mapa** — Ciudades, dungeons, zonas de farmeo y POIs con niveles recomendados

## Clases soportadas

Mago, Clérigo, Guerrero, Asesino, Ladrón, Bardo, Druida, Paladín, Cazador, Trabajador, Pirata (las 11 clases del juego).

## Instalación

### Desde archivos (modo desarrollador)

1. Descargá o cloná este repositorio
2. Abrí Chrome y andá a `chrome://extensions/`
3. Activá **Modo desarrollador** (arriba a la derecha)
4. Clickeá **Cargar extensión sin empaquetar**
5. Seleccioná la carpeta del repositorio
6. Andá a [aoweb.app](https://aoweb.app), logueate y entrá a jugar — el sidebar aparece automáticamente

### Atajos

- **Alt + H** — Mostrar/ocultar el panel
- El sidebar es **redimensionable** arrastrando el borde derecho

## Configuración del formulario de sugerencias

El formulario de feedback usa [Web3Forms](https://web3forms.com) para enviar emails. Para activarlo:

1. Entrá a [web3forms.com](https://web3forms.com)
2. Ingresá tu email y obtendrás un **access key**
3. En `content.js`, buscá `'TU_ACCESS_KEY_ACA'` y reemplazalo por tu key

## Estructura del proyecto

```
ao-helper-extension/
├── manifest.json    # Chrome Extension Manifest V3
├── data.js          # Datos del juego (leveling, spells, equipment, POIs)
├── content.js       # Script principal que inyecta el sidebar
├── overlay.css      # Estilos del sidebar
├── popup.html       # Popup de la extensión
└── icons/           # Íconos de la extensión (16, 48, 128px)
```

## Datos del juego

Los datos de hechizos, NPCs y mapas fueron extraídos directamente de los repositorios del servidor y cliente de AO Web:

- [argentumonlineweb-servidor](https://github.com/dcatanzaro/argentumonlineweb-servidor) — `spells.json`, `npcs.json`, `npcsInMap.json`, `mapas/`
- [argentumonlineweb-cliente](https://github.com/dcatanzaro/argentumonlineweb-cliente) — Estructura del juego, estados del jugador

## Contribuir

¿Tenés ideas o encontraste un error? Usá el botón **💡 Sugerencias** dentro de la extensión, o abrí un [Issue](../../issues) en este repo.

## Autor

hecho con 💜 por [Juanpernu](https://www.juanpernumian.com.ar)

## License

MIT
