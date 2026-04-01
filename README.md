# 🧙 AO Web Helper

Extensión de Chrome con guía interactiva para **Argentum Online Web** ([aoweb.app](https://aoweb.app)).

Se muestra como un panel lateral dentro del juego con información personalizada según tu clase y nivel.

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?logo=googlechrome&logoColor=white)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-green)
![License](https://img.shields.io/badge/License-MIT-blue)

## ¿Qué hace esta extensión?

Cuando estás jugando en [aoweb.app](https://aoweb.app), te aparece un panel a la izquierda de la pantalla con 4 pestañas de información útil:

- **📍 Guía de Leveo** — Te dice a qué zonas ir para subir de nivel, qué criaturas hay, cuánta experiencia dan y cómo llegar a cada dungeon
- **✨ Hechizos** — Qué hechizos tenés disponibles según tu clase y nivel, cuánto cuestan, cuánto maná gastan y en qué NPC comprarlos
- **🛡️ Equipamiento** — Qué armas, armaduras y accesorios te conviene usar, con precios y dónde conseguirlos
- **🗺️ Mapa** — Todas las ciudades, dungeons y puntos de interés del juego

La info se adapta automáticamente a tu clase (Mago, Guerrero, Clérigo, etc.) y a tu nivel actual.

## Cómo instalar (paso a paso)

### Paso 1: Descargá la extensión

Andá a la [página de Releases](../../releases) de este repositorio y descargá el archivo `ao-helper-extension.zip`. Si no hay releases todavía, podés descargar el código directamente:

1. En esta misma página, hacé click en el botón verde **"<> Code"** (está arriba a la derecha de la lista de archivos)
2. Clickeá **"Download ZIP"**
3. Cuando se descargue, buscá el archivo en tu carpeta de Descargas y **descomprimilo** (click derecho > "Extraer todo" en Windows, o doble click en Mac)

### Paso 2: Abrí las extensiones de Chrome

1. Abrí **Google Chrome**
2. En la barra de direcciones (donde escribís las URLs), escribí `chrome://extensions` y presioná **Enter**
3. Se va a abrir una página con todas tus extensiones instaladas

### Paso 3: Activá el Modo desarrollador

1. En la esquina **superior derecha** de la página de extensiones, vas a ver un switch que dice **"Modo desarrollador"** (o "Developer mode" si tu Chrome está en inglés)
2. **Activalo** haciendo click en el switch. Se va a poner azul y van a aparecer unos botones nuevos arriba

### Paso 4: Cargá la extensión

1. Hacé click en el botón **"Cargar extensión sin empaquetar"** (o "Load unpacked" en inglés). Se va a abrir una ventana para elegir una carpeta
2. Buscá y seleccioná la **carpeta que descomprimiste** en el Paso 1 (la que tiene los archivos `manifest.json`, `content.js`, etc. adentro)
3. Hacé click en **"Seleccionar carpeta"**
4. ¡Listo! Vas a ver que AO Web Helper aparece en la lista de extensiones con su ícono

### Paso 5: ¡A jugar!

1. Andá a [aoweb.app](https://aoweb.app)
2. Iniciá sesión con tu cuenta y entrá a jugar
3. Una vez que estés en la pantalla del juego, el panel de AO Helper **aparece automáticamente** a la izquierda

## Cómo usar la extensión

### Configurar tu personaje

Cuando se abre el panel, arriba de todo vas a ver dos campos:

1. **Clase**: Elegí tu clase del menú desplegable (Mago, Guerrero, Clérigo, etc.)
2. **Nivel**: Poné tu nivel actual

La extensión se acuerda de tu configuración, así que no tenés que cargarla cada vez que entrás.

### Navegar las pestañas

Debajo de la configuración hay 4 pestañas. Hacé click en la que quieras ver:

- **📍 Leveo** — Zonas recomendadas para tu nivel
- **✨ Hechizos** — Hechizos disponibles para tu clase
- **🛡️ Equipo** — Equipamiento recomendado
- **🗺️ Mapa** — Mapa con ciudades y dungeons

### Cambiar el tamaño del panel

Si el panel te tapa mucho el juego, podés **achicarlo** arrastrando el borde derecho del panel hacia la izquierda. También podés agrandarlo de la misma forma.

### Ocultar y mostrar el panel

- Hacé click en el botón **◀** (arriba a la derecha del panel) para **minimizarlo**
- Hacé click en la **✕** para **cerrarlo** del todo. Aparece un botón flotante "🧙 AO Helper" para volver a abrirlo
- Podés usar el atajo de teclado **Alt + H** para ocultar/mostrar rápidamente

### Enviar sugerencias

Si encontraste un bug, querés pedir una feature o tenés una idea para mejorar la extensión:

1. Hacé click en el botón **💡 Sugerencias** que está al pie del panel
2. Elegí el tipo de feedback (sugerencia, bug, pedido de feature, etc.)
3. Escribí tu mensaje
4. Hacé click en **📨 Enviar sugerencia**

El mensaje me llega directamente a mí. Hay un límite de un envío por minuto para evitar spam.

## Preguntas frecuentes

**¿Es segura esta extensión?**
Sí. La extensión solo funciona en aoweb.app, no accede a ningún otro sitio web. No lee tus contraseñas, no accede a tus datos personales y no modifica el juego. Solo agrega un panel informativo al costado.

**¿Puedo usarla en otro navegador que no sea Chrome?**
Sí, funciona en cualquier navegador basado en Chromium: Google Chrome, Brave, Microsoft Edge, Opera, Vivaldi. El proceso de instalación es muy parecido en todos.

**¿La extensión se actualiza sola?**
No, porque se instala de forma manual. Cuando haya una versión nueva, va a aparecer en este repositorio y vas a tener que descargarla de nuevo.

**¿Afecta el rendimiento del juego?**
No. La extensión es muy liviana, solo muestra información estática y no interfiere con el funcionamiento del juego.

**¿Me pueden banear por usarla?**
No. La extensión no modifica el juego, no envía comandos, no automatiza nada. Es equivalente a tener una wiki abierta en otra pestaña, pero más cómoda.

## Clases soportadas

Las 11 clases del juego: Mago, Clérigo, Guerrero, Asesino, Ladrón, Bardo, Druida, Paladín, Cazador, Trabajador y Pirata.

## Datos del juego

Los datos de hechizos, NPCs y mapas fueron extraídos directamente de los repositorios oficiales del servidor y cliente de AO Web:

- [argentumonlineweb-servidor](https://github.com/dcatanzaro/argentumonlineweb-servidor) — `spells.json`, `npcs.json`, `npcsInMap.json`, `mapas/`
- [argentumonlineweb-cliente](https://github.com/dcatanzaro/argentumonlineweb-cliente) — Estructura del juego, estados del jugador

## Contribuir

¿Tenés ideas o encontraste un error? Usá el botón **💡 Sugerencias** dentro de la extensión, o abrí un [Issue](../../issues) en este repo.

## Autor

hecho con 💜 por [Juanpernu](https://www.juanpernumian.com.ar)

## License

MIT
