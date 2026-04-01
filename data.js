// ============================================================
// AO Web Helper - Game Data Module
// Datos del juego: leveo, hechizos, items, POIs
// ============================================================

const AO_DATA = {

  clases: {
    1:  { nombre: "Mago",       tipo: "mágica",  emoji: "🧙" },
    2:  { nombre: "Clérigo",    tipo: "híbrida",  emoji: "⛪" },
    3:  { nombre: "Guerrero",   tipo: "física",   emoji: "⚔️" },
    4:  { nombre: "Asesino",    tipo: "física",   emoji: "🗡️" },
    5:  { nombre: "Ladrón",     tipo: "física",   emoji: "🦹" },
    6:  { nombre: "Bardo",      tipo: "híbrida",  emoji: "🎵" },
    7:  { nombre: "Druida",     tipo: "híbrida",  emoji: "🌿" },
    8:  { nombre: "Paladín",    tipo: "híbrida",  emoji: "🛡️" },
    9:  { nombre: "Cazador",    tipo: "física",   emoji: "🏹" },
    10: { nombre: "Trabajador", tipo: "oficio",   emoji: "⛏️" },
    11: { nombre: "Pirata",     tipo: "física",   emoji: "🏴‍☠️" },
  },

  leveling: [
    {
      minLevel: 1, maxLevel: 13,
      zona: "Newbie Dungeon (Nemahuak)", mapas: "Dungeon inicial",
      acceso: "Spawn inicial al crear personaje",
      criaturas: "Ratas, murciélagos, serpientes", expAprox: "50-200 por criatura",
      tips: "Zona segura, no perdés items al morir. Hay 3 salidas según clase: Norte (magia), Este (melee), Oeste (rango).",
      claseTip: {
        1: "Usá Dardo Mágico para entrenar. Andá por la salida Norte para magos.",
        2: "Usá curación para mantenerte vivo y atacá con hechizos. Salida Norte.",
        3: "Andá por la salida Este, enfocate en melee directo.",
        4: "Salida Este, aprovechá el sigilo para atacar sin recibir daño.",
        5: "Salida Este, robá items de las criaturas.",
        6: "Podés usar hechizos o melee. Salida Este o Norte.",
        7: "Salida Norte, usá hechizos de naturaleza.",
        8: "Salida Este, sos híbrido así que podés melee + curación.",
        9: "Salida Oeste para rango, usá arco.",
        10: "Enfocate en oficios más que en combate.",
        11: "Salida Este, melee directo.",
      }
    },
    {
      minLevel: 13, maxLevel: 20,
      zona: "Desierto (cercanías de ciudades)", mapas: "Mapas 17, 20, 21",
      acceso: "Zona abierta al sur de Ullathorpe (Mapa 1). Caminá hacia el sur por los mapas 204-207",
      criaturas: "Serpientes, Escorpiones, Gusanos", expAprox: "300-800 por criatura",
      tips: "En hora pico hay 3 gusanos por mapa en 17/21/20. Fuera de hora pico, mapas 15 y 16 tienen 6 gusanos.",
      claseTip: {
        1: "Usá Flecha Eléctrica si ya la tenés. Mantené distancia y medita entre combates.",
        2: "Curate y atacá con hechizos. Podés quedarte mucho rato sin volver a ciudad.",
        3: "Farmeo directo, llevá pociones rojas.",
        8: "Melee + curación propia, muy eficiente acá.",
      }
    },
    {
      minLevel: 15, maxLevel: 25,
      zona: "Dungeon Marabel", mapas: "Mapas 115-116",
      acceso: "Entrás desde el overworld cerca de la zona de Marabel. El dungeon tiene 2 mapas conectados entre sí (115 ↔ 116)",
      criaturas: "Criaturas intermedias", expAprox: "500-1500 por criatura",
      tips: "Dungeon de 2 mapas. Buena opción si el desierto está lleno de gente.",
      claseTip: { 1: "Cuidado con el maná, llevá pociones azules de sobra." }
    },
    {
      minLevel: 18, maxLevel: 30,
      zona: "Cripta Olvidada (Desierto)", mapas: "Mapa 205",
      acceso: "En la zona del desierto. Se accede desde Mapa 204 (por el este) o Mapa 252 (por el oeste). Conecta también con Mapa 206 al sur",
      criaturas: "No-muertos (esqueletos, zombies)", expAprox: "1000-3000 por criatura",
      tips: "Sin nivel máximo, podés quedarte mucho. Acceso desde la zona del desierto, entre los mapas 204 y 252.",
      claseTip: {
        1: "Los no-muertos son débiles a hechizos. Buen lugar para magos.",
        2: "Clérigos son MUY efectivos contra no-muertos.",
      }
    },
    {
      minLevel: 20, maxLevel: 35,
      zona: "Catacumbas", mapas: "Mapas 40-45",
      acceso: "Entrada desde Ullathorpe (Mapa 1). La entrada está en las coordenadas ~(32,54) del mapa de Ullathorpe. La salida del dungeon te deja de vuelta en Mapa 1",
      criaturas: "Arañas gigantes, Orcos, Hormigas, Tarántulas", expAprox: "1500-4000 por criatura",
      tips: "Dungeon grande de ~5 mapas. Entrada en Ullathorpe (Mapa 1). Cuidado con PKs en niveles más profundos.",
      claseTip: { 1: "Usá AoE si tenés. Las arañas vienen en grupo." }
    },
    {
      minLevel: 25, maxLevel: 40,
      zona: "Bosque Élfico", mapas: "Mapa 239",
      acceso: "Se accede desde el Mapa 237 (Bosque) por el este. El Mapa 237 conecta con Mapa 240 al sur. Zona boscosa al este del mundo",
      criaturas: "Ciervo Ancestral (3000 HP)", expAprox: "4,500 por criatura",
      tips: "Excelente exp. Accedés por Mapa 237 → Mapa 239. Los ciervos tienen mucha vida pero dan buena experiencia.",
      claseTip: { 1: "Necesitás buenos hechizos de daño para matar ciervos eficientemente. Llevá muchas pociones azules." }
    },
    {
      minLevel: 25, maxLevel: 40,
      zona: "Cueva de Nagas", mapas: "Acceso desde Isla Pirata (Mapa 201) → Mapa 235",
      acceso: "Desde Isla Pirata (Mapa 201), caminá al este hacia Mapa 235 y buscá la entrada a la cueva. Necesitás barco para llegar a la isla",
      criaturas: "Kadrus (5850 HP)", expAprox: "9,200 por criatura",
      tips: "Necesitás traje de goma para entrar y barco para llegar a la Isla Pirata. NO podés usar invisibilidad ni esconderte acá.",
      claseTip: { 1: "MUY buena exp pero no podés hacerte invisible. Asegurate de tener buena defensa mágica." }
    },
    {
      minLevel: 25, maxLevel: 40,
      zona: "Dungeon Vespar", mapas: "Dungeon Vespar",
      acceso: "Buscá la entrada en la zona de Vespar. Requiere nivel 25 para entrar",
      criaturas: "Criaturas nivel 25+", expAprox: "3000-6000 por criatura",
      tips: "Requiere nivel 25 para entrar. Buena alternativa al Bosque Élfico.",
    },
    {
      minLevel: 30, maxLevel: 45,
      zona: "Isla del Averno", mapas: "Mapa 133",
      acceso: "Cadena de islas: llegás navegando por los Mapas 131 → 132 → 133. Se accede desde Mapa 132 (por el oeste). Necesitás barco",
      criaturas: "Banshee (9500 HP)", expAprox: "22,325 por criatura",
      tips: "Mejor exp del juego para este rango. Navegá por Mapas 131→132→133. Necesitás barco. Las Banshees dan una locura de exp.",
      claseTip: {
        1: "Necesitás hechizos potentes. Tormenta de Fuego mínimo. Si podés, conseguí Elementales.",
        2: "Curación propia te permite farmear indefinidamente.",
        3: "Necesitás buena armadura y arma. Llevá muchas pociones rojas.",
      }
    },
    {
      minLevel: 40, maxLevel: 50,
      zona: "Dungeon Speculum", mapas: "Dungeon Speculum",
      acceso: "Requiere nivel 40 para entrar. Buscá la entrada en la zona de Speculum",
      criaturas: "Criaturas nivel 40+", expAprox: "10,000+ por criatura",
      tips: "Requiere nivel 40. El dungeon más difícil accesible a este nivel.",
    },
    {
      minLevel: 40, maxLevel: 50,
      zona: "Dungeon del Dragón", mapas: "Mapa 166",
      acceso: "La salida del dungeon lleva al Mapa 7, que conecta con Mapas 53, 72 y 85. Se accede desde la zona sur del mundo a través de Mapa 7",
      criaturas: "Gran Dragón Rojo, Ogros, Beholder, Djinn de Viento", expAprox: "15,000-50,000 por criatura",
      tips: "Endgame dungeon. Entrada por Mapa 7 (zona sur). El Dragón Rojo es el boss más fuerte. Ir en grupo recomendado.",
      claseTip: { 1: "Usá Elementales y Apocalipsis si los tenés. El Dragón resiste mucho." }
    },
  ],

  // Datos REALES de hechizos extraídos de spells.json del servidor
  // Precios aproximados basados en la economía del juego
  spells: {
    ofensivos: [
      { nombre: "Dardo Mágico",        mana: 10,   dano: "3-5",     nivelReq: 1,  minSkill: 0,   clases: [1,2,6,7,4,8], precio: "~100 oro",    vendedor: "Ullathorpe, Arghal, Newbie",   desc: "Hechizo básico de daño. Tu primer ataque mágico." },
      { nombre: "Flecha Mágica",       mana: 20,   dano: "6-12",    nivelReq: 5,  minSkill: 15,  clases: [1,2,6,7,4,8], precio: "~300 oro",    vendedor: "Ullathorpe, Nix, Newbie",      desc: "Upgrade del dardo. Buen daño temprano." },
      { nombre: "Flecha Eléctrica",    mana: 40,   dano: "12-20",   nivelReq: 8,  minSkill: 40,  clases: [1,2,6,7],     precio: "~800 oro",    vendedor: "Nix, Banderbill",              desc: "Daño eléctrico. Clave para magos en el desierto." },
      { nombre: "Proyectil Mágico",    mana: 45,   dano: "30-35",   nivelReq: 12, minSkill: 50,  clases: [1,2,6,7],     precio: "~2,000 oro",  vendedor: "Banderbill",                   desc: "Daño sólido, tu hechizo principal de nivel medio." },
      { nombre: "Tormenta de Fuego",   mana: 250,  dano: "45-55",   nivelReq: 25, minSkill: 80,  clases: [1],           precio: "~30,000 oro", vendedor: "Arkhein, Mago Avanzado (Lindos)", desc: "Gran daño. Con báculo engarzado -26% maná. staffAffected.", staffAffected: true },
      { nombre: "Descarga Eléctrica",  mana: 460,  dano: "55-85",   nivelReq: 30, minSkill: 90,  clases: [1],           precio: "~80,000 oro", vendedor: "Mago Avanzado (Lindos, Mapa 62)", desc: "Daño muy alto. staffAffected. Requiere mucho maná.", staffAffected: true },
      { nombre: "Elemental de Agua",   mana: 750,  dano: "35-55",   nivelReq: 35, minSkill: 90,  clases: [1,7],         precio: "~120,000 oro", vendedor: "Mago Avanzado (Lindos, Mapa 62)", desc: "Invocación elemental. Con báculo -26% maná.", staffAffected: true },
      { nombre: "Elemental de Fuego",  mana: 850,  dano: "35-65",   nivelReq: 38, minSkill: 93,  clases: [1],           precio: "~180,000 oro", vendedor: "Mago Avanzado (Lindos, Mapa 62)", desc: "Invocación de fuego. Daño devastador.", staffAffected: true },
      { nombre: "Apocalipsis",         mana: 1000, dano: "85-100",  nivelReq: 45, minSkill: 100, clases: [1],           precio: "~500,000 oro", vendedor: "Mago Avanzado (Lindos, Mapa 62)", desc: "El hechizo más poderoso del juego. staffAffected.", staffAffected: true },
      { nombre: "Elemental de Tierra", mana: 1100, dano: "35-75",   nivelReq: 40, minSkill: 95,  clases: [1],           precio: "~250,000 oro", vendedor: "Mago Avanzado (Lindos, Mapa 62)", desc: "El elemental más fuerte. Enorme coste de maná.", staffAffected: true },
    ],
    curacion: [
      { nombre: "Curar Heridas Leves",  mana: 10,  cura: "1-5 HP",   nivelReq: 1,  minSkill: 0,   clases: [1,2,6,7,8], precio: "~100 oro",   vendedor: "Ullathorpe, Arghal, Newbie",   desc: "Curación básica. Tu primer hechizo de curación." },
      { nombre: "Curar Heridas Graves", mana: 55,  cura: "20-35 HP",  nivelReq: 10, minSkill: 40,  clases: [1,2,6,7,8], precio: "~3,000 oro", vendedor: "Banderbill, Arkhein",           desc: "Curación intermedia. Esencial para sobrevivir." },
      { nombre: "Curación Total",       mana: 350, cura: "50-80 HP",  nivelReq: 25, minSkill: 80,  clases: [2,8],       precio: "~50,000 oro", vendedor: "Arkhein, Mago Avanzado (Lindos)", desc: "Gran curación. Solo clérigos y paladines." },
    ],
    soporte: [
      { nombre: "Paralizar",           mana: 25,   nivelReq: 1,  minSkill: 0,   clases: [1,2,6,7],   precio: "~100 oro",    vendedor: "Ullathorpe, Arghal, Newbie",   desc: "Paraliza al enemigo brevemente." },
      { nombre: "Remover Parálisis",    mana: 30,   nivelReq: 3,  minSkill: 10,  clases: [1,2,6,7,8], precio: "~200 oro",    vendedor: "Ullathorpe, Nix, Arghal, Newbie", desc: "Quita la parálisis de un aliado." },
      { nombre: "Fuerza",              mana: 35,   nivelReq: 5,  minSkill: 20,  clases: [1,2,6,7,8], precio: "~300 oro",    vendedor: "Nix, Arghal, Newbie",          desc: "Aumenta la fuerza del objetivo temporalmente." },
      { nombre: "Torpeza",             mana: 45,   nivelReq: 5,  minSkill: 20,  clases: [1,2,6,7],   precio: "~300 oro",    vendedor: "Nix, Newbie",                   desc: "Reduce la agilidad del enemigo." },
      { nombre: "Inmovilizar",         mana: 80,   nivelReq: 10, minSkill: 50,  clases: [1,2,6,7],   precio: "~3,000 oro",  vendedor: "Banderbill",                    desc: "Parálisis mejorada. Más duración." },
      { nombre: "Petrificar",          mana: 200,  nivelReq: 15, minSkill: 65,  clases: [1,7],        precio: "~8,000 oro",  vendedor: "Banderbill",                    desc: "Paralización larga. Solo magos y druidas." },
      { nombre: "Invisibilidad",       mana: 700,  nivelReq: 20, minSkill: 75,  clases: [1,4,7],      precio: "~20,000 oro", vendedor: "Arkhein, Mago Avanzado (Lindos)", desc: "Te volvés invisible. Esencial en zonas PK." },
      { nombre: "Invocar Lobo",        mana: 200,  nivelReq: 20, minSkill: 60,  clases: [1,7],        precio: "~10,000 oro", vendedor: "Banderbill, Arkhein",            desc: "Invocá un lobo que pelea por vos." },
      { nombre: "Invocar Esqueleto",   mana: 250,  nivelReq: 22, minSkill: 70,  clases: [1,2],        precio: "~15,000 oro", vendedor: "Banderbill, Arkhein",            desc: "Esqueleto guerrero. Mejor tanque que el lobo." },
      { nombre: "Anti-Invisibilidad",  mana: 200,  nivelReq: 25, minSkill: 75,  clases: [1,2],        precio: "~25,000 oro", vendedor: "Mago Avanzado (Lindos, Mapa 62)", desc: "Revela jugadores invisibles." },
      { nombre: "Rem. Parálisis Grupal", mana: 150, nivelReq: 25, minSkill: 70, clases: [1,2],        precio: "~20,000 oro", vendedor: "Mago Avanzado (Lindos, Mapa 62)", desc: "Quita parálisis a todo el grupo." },
      { nombre: "Resurrección",        mana: 700,  nivelReq: 30, minSkill: 85,  clases: [2],          precio: "~80,000 oro", vendedor: "Mago Avanzado (Lindos, Mapa 62)", desc: "Revivir jugadores muertos. Solo clérigos." },
    ],
  },

  // NPCs vendedores de hechizos - datos REALES del servidor
  spellVendors: [
    { nombre: "Magia Newbie",         ciudad: "Newbie Zone",     mapa: null,  npcId: 157, nivel: "Básico",    desc: "Vende hechizos iniciales para todas las clases mágicas" },
    { nombre: "Mago de Ullathorpe",   ciudad: "Ullathorpe",      mapa: 1,     npcId: 46,  nivel: "Básico",    desc: "Hechizos básicos. El primer mago que encontrás" },
    { nombre: "Mago de Nix",          ciudad: "Nix",             mapa: 34,    npcId: 47,  nivel: "Intermedio", desc: "Hechizos de nivel bajo-medio. Fuerza, Torpeza, soporte" },
    { nombre: "Mago de Arghal",       ciudad: "Arghal",          mapa: 60,    npcId: 59,  nivel: "Básico",    desc: "Hechizos básicos similares a Ullathorpe" },
    { nombre: "Mago de Banderbill",   ciudad: "Banderbill",      mapa: 59,    npcId: 51,  nivel: "Alto",      desc: "Hechizos intermedios-altos. Proyectil, Inmovilizar, Curar Graves" },
    { nombre: "Mago de Arkhein",      ciudad: "Arkhein/Lindos",  mapa: 62,    npcId: 61,  nivel: "Alto",      desc: "Hechizos altos. Invisibilidad, invocaciones" },
    { nombre: "Mago Avanzado",        ciudad: "Lindos",          mapa: 62,    npcId: 69,  nivel: "Élite",     desc: "Los hechizos más poderosos: Elementales, Apocalipsis, Descarga" },
  ],

  spellProgression: {
    1: {
      nombre: "Mago",
      fases: [
        { nivel: "1-5",   hechizos: ["Dardo Mágico", "Curar Heridas Leves", "Paralizar"], tip: "Dardo (10 maná) para atacar, Curar para sobrevivir. Comprá en Ullathorpe o Newbie. Meditá siempre." },
        { nivel: "5-10",  hechizos: ["Flecha Mágica", "Flecha Eléctrica", "Fuerza"], tip: "Flecha Eléctrica (40 maná, 12-20 dmg) es tu mejor amiga en el desierto. Comprá en Nix." },
        { nivel: "10-15", hechizos: ["Proyectil Mágico", "Curar Heridas Graves", "Inmovilizar"], tip: "Proyectil (45 maná, 30-35 dmg) es tu nuevo hechizo principal. Viajá a Banderbill." },
        { nivel: "15-20", hechizos: ["Petrificar", "Invocar Lobo"], tip: "Petrificar (200 maná) para control. Comprá en Banderbill." },
        { nivel: "20-25", hechizos: ["Invisibilidad", "Invocar Esqueleto"], tip: "Invisibilidad (700 maná) esencial para PK. Comprá en Arkhein." },
        { nivel: "25-35", hechizos: ["Tormenta de Fuego", "Elemental de Agua"], tip: "Tormenta (250 maná, 45-55 dmg) con Báculo Engarzado. Mago Avanzado en Lindos." },
        { nivel: "35-45", hechizos: ["Descarga Eléctrica", "Elemental de Fuego", "Elemental de Tierra"], tip: "Descarga (460 maná, 55-85 dmg). Conseguí el Báculo Engarzado para -26% maná." },
        { nivel: "45+",   hechizos: ["Apocalipsis"], tip: "Apocalipsis (1000 maná, 85-100 dmg). El hechizo definitivo. Mago Avanzado en Lindos." },
      ]
    },
    2: {
      nombre: "Clérigo",
      fases: [
        { nivel: "1-10",  hechizos: ["Curar Heridas Leves", "Dardo Mágico", "Remover Parálisis"], tip: "Curación (10 maná) es tu prioridad. Comprá en Ullathorpe." },
        { nivel: "10-20", hechizos: ["Curar Heridas Graves", "Proyectil Mágico", "Inmovilizar"], tip: "Curar Graves (55 maná, 20-35 HP) te hace casi inmortal. Viajá a Banderbill." },
        { nivel: "20-30", hechizos: ["Curación Total", "Invocar Esqueleto", "Anti-Invisibilidad"], tip: "Curación Total (350 maná) + Esqueleto = farmeo infinito. Comprá en Arkhein." },
        { nivel: "30+",   hechizos: ["Resurrección", "Rem. Parálisis Grupal"], tip: "Resurrección (700 maná) en Mago Avanzado, Lindos. Ahora podés revivir gente." },
      ]
    },
    7: {
      nombre: "Druida",
      fases: [
        { nivel: "1-10",  hechizos: ["Curar Heridas Leves", "Dardo Mágico", "Flecha Eléctrica"], tip: "Mix de curación y daño. Comprá básicos en Ullathorpe, Flecha Eléctrica en Nix." },
        { nivel: "10-20", hechizos: ["Curar Heridas Graves", "Proyectil Mágico", "Inmovilizar", "Petrificar"], tip: "Control + daño. Viajá a Banderbill para comprar todo." },
        { nivel: "20-30", hechizos: ["Invisibilidad", "Invocar Lobo"], tip: "Invisibilidad (700 maná) + Lobo. Comprá en Arkhein." },
        { nivel: "30+",   hechizos: ["Elemental de Agua"], tip: "Elemental de Agua (750 maná, 35-55 dmg). Mago Avanzado en Lindos. Con Báculo -10% maná en TODO." },
      ]
    },
    8: {
      nombre: "Paladín",
      fases: [
        { nivel: "1-10",  hechizos: ["Curar Heridas Leves", "Dardo Mágico", "Fuerza"], tip: "Curación para sustain, Fuerza para boost melee. Comprá en Ullathorpe/Nix." },
        { nivel: "10-25", hechizos: ["Curar Heridas Graves", "Remover Parálisis"], tip: "Curar Graves (55 maná) + melee = tanque. Viajá a Banderbill." },
        { nivel: "25+",   hechizos: ["Curación Total"], tip: "Curación Total (350 maná, 50-80 HP) te hace prácticamente inmortal. Comprá en Arkhein." },
      ]
    },
    6: {
      nombre: "Bardo",
      fases: [
        { nivel: "1-10",  hechizos: ["Curar Heridas Leves", "Dardo Mágico", "Paralizar"], tip: "Hechizos básicos. Comprá en Ullathorpe." },
        { nivel: "10-20", hechizos: ["Curar Heridas Graves", "Proyectil Mágico", "Inmovilizar"], tip: "Mix de todo. Viajá a Banderbill. Bardo es muy versátil." },
        { nivel: "20+",   hechizos: ["Invisibilidad"], tip: "Invisibilidad (700 maná) para moverte seguro. Comprá en Arkhein." },
      ]
    },
    4: {
      nombre: "Asesino",
      fases: [
        { nivel: "1-10",  hechizos: ["Dardo Mágico", "Flecha Mágica"], tip: "Hechizos de apoyo al melee. Comprá en Ullathorpe." },
        { nivel: "20+",   hechizos: ["Invisibilidad"], tip: "Invisibilidad (700 maná) + backstab con daga = combo letal. Comprá en Arkhein." },
      ]
    },
  },

  equipment: {
    1: { // Mago
      nombre: "Mago",
      nota: "Los magos usan túnicas, sombreros, báculos/varas. NO pueden usar escudos ni armaduras pesadas.",
      fases: [
        { nivel: "1-12",
          items: [
            { slot: "⚔️ Arma", nombre: "Daga", stats: "1-4 daño", donde: "🛒 Herrero en Ullathorpe, Nix o Banderbill", precio: "~200 oro" },
            { slot: "⚔️ Arma alt", nombre: "Vara de Fresno", stats: "Reduce penalidad mágica", donde: "🛒 Herrero en ciudades principales", precio: "~1,000 oro" },
            { slot: "🛡️ Armadura", nombre: "Túnica de Aprendiz", stats: "Defensa básica mágica", donde: "🛒 Sastre en Ullathorpe o Nix", precio: "~500 oro" },
            { slot: "⛑️ Casco", nombre: "Sombrero de Aprendiz", stats: "Defensa mágica básica", donde: "🛒 Sastre en Ullathorpe o Nix", precio: "~300 oro" },
          ],
          extras: [
            { nombre: "Poción de Maná Azul", donde: "🛒 Cualquier ciudad (NPC pociones)", tip: "PRIORIDAD #1. Comprá al menos 50." },
            { nombre: "Poción Roja", donde: "🛒 Cualquier ciudad", tip: "Llevá 20-30 para emergencias." },
          ],
          tip: "Invertí tu oro en pociones azules primero. El arma importa poco porque tu daño principal son hechizos."
        },
        { nivel: "12-25",
          items: [
            { slot: "⚔️ Arma", nombre: "Bastón Nudoso", stats: "Reduce penalidad de daño mágico", donde: "🛒 Herrero en Banderbill o Ullathorpe", precio: "~3,000 oro", nivelReq: 15 },
            { slot: "🛡️ Armadura", nombre: "Túnica Mágica", stats: "Defensa + resistencia mágica", donde: "🛒 Sastre en Banderbill", precio: "~4,000 oro" },
            { slot: "⛑️ Casco", nombre: "Sombrero de Mago T2", stats: "8-10 def física, 5% res mágica", donde: "🛒 Sastre en Banderbill o Ullathorpe", precio: "~3,600 oro" },
            { slot: "💍 Anillo", nombre: "Anillo de Defensa Mágica", stats: "6% defensa mágica", donde: "⚒️ Crafteable (herrería) o drop de bosses", precio: "Crafteo o trade", nivelReq: 20 },
          ],
          extras: [
            { nombre: "Poción de Maná Azul (grandes)", donde: "🛒 NPC pociones en ciudades", tip: "Comprá las de mayor calidad disponible." },
            { nombre: "Poción Amarilla", donde: "🛒 NPC pociones", tip: "Boost temporal de stats. Útil para bosses." },
          ],
          tip: "El Bastón Nudoso es tu mejor upgrade. La penalidad de daño del mago baja mucho con él."
        },
        { nivel: "25-40",
          items: [
            { slot: "⚔️ Arma", nombre: "Báculo Engarzado", stats: "+daño mágico, -26% maná en Elementales", donde: "⚒️ Crafteable por herrero nivel alto o 🏪 trade con otros jugadores", precio: "~20,000+ oro", nivelReq: 29 },
            { slot: "🛡️ Armadura", nombre: "Túnica Legendaria", stats: "33/27/33 defensa", donde: "🐉 Drop de bosses de dungeon o 🏪 trade", precio: "~24,000 oro" },
            { slot: "⛑️ Casco", nombre: "Sombrero de Hechicero", stats: "Mejor def mágica para magos", donde: "🐉 Drop de bosses o 🏪 trade", precio: "Variable" },
            { slot: "💍 Anillo", nombre: "Anillo de Fortaleza Mágica", stats: "6% def mágica + bonus", donde: "⚒️ Crafteo: 110 lingotes hierro + 20 plata", precio: "Crafteo", nivelReq: 25 },
          ],
          extras: [
            { nombre: "Traje de Goma", donde: "🛒 NPC especial o trade", tip: "NECESARIO para Cueva de Nagas (Kadrus, 9200 exp)." },
            { nombre: "Pociones azules premium", donde: "🛒 NPC pociones", tip: "Con Báculo Engarzado gastás -26% maná en elementales." },
          ],
          tip: "El BÁCULO ENGARZADO es el item más importante del mago. -26% maná en Elementales de Agua/Fuego/Tierra. Conseguilo como sea."
        },
        { nivel: "40+",
          items: [
            { slot: "⚔️ Arma", nombre: "Báculo Engarzado (mejorado)", stats: "Mejor versión del báculo", donde: "⚒️ Crafteo endgame o 🐉 drop de Dragón", precio: "Muy caro" },
            { slot: "🛡️ Armadura", nombre: "Túnica Legendaria / Élfica", stats: "Mejor defensa disponible", donde: "🐉 Drop de bosses endgame (Dragón Rojo, Phylakterion)", precio: "Trade" },
            { slot: "⛑️ Casco", nombre: "Mejor disponible", stats: "Max def mágica", donde: "🐉 Bosses endgame", precio: "Trade" },
            { slot: "💍 Anillo", nombre: "Anillo de Disolución Mágica", stats: "Mejor anillo mágico del juego", donde: "⚒️ Crafteo: 100 hierro + 60 plata", precio: "Crafteo", nivelReq: 33 },
          ],
          extras: [
            { nombre: "Pociones de máxima calidad", donde: "🛒 NPC endgame", tip: "A este nivel tu maná y hechizos son todo." },
          ],
          tip: "Buscá items de bosses de Dungeon del Dragón y Phylakterion. El equipo perfecto viene del endgame."
        },
      ]
    },
    2: { // Clérigo
      nombre: "Clérigo",
      nota: "Los clérigos usan armaduras medianas/pesadas, escudos, y armas cuerpo a cuerpo. Excelente curación.",
      fases: [
        { nivel: "1-15",
          items: [
            { slot: "⚔️ Arma", nombre: "Espada Corta", stats: "3-6 daño", donde: "🛒 Herrero en cualquier ciudad", precio: "~500 oro" },
            { slot: "🛡️ Armadura", nombre: "Armadura de Cuero", stats: "Defensa básica", donde: "🛒 Herrero o Sastre en ciudades", precio: "~1,000 oro" },
            { slot: "⛑️ Casco", nombre: "Casco de Hierro", stats: "Def física básica", donde: "🛒 Herrero en ciudades", precio: "~800 oro" },
            { slot: "🔰 Escudo", nombre: "Escudo de Madera", stats: "1-1 defensa", donde: "🛒 Herrero en cualquier ciudad", precio: "~500 oro" },
          ],
          extras: [
            { nombre: "Poción Roja", donde: "🛒 Cualquier ciudad", tip: "Complemento a tu curación mágica." },
            { nombre: "Poción Azul", donde: "🛒 Cualquier ciudad", tip: "Para mantener maná de curación." },
          ],
          tip: "Tu curación propia te hace muy resistente. Invertí en armadura para reducir daño recibido."
        },
        { nivel: "15-30",
          items: [
            { slot: "⚔️ Arma", nombre: "Espada Larga / Espada Vikinga", stats: "8-12 / ~45 daño", donde: "🛒 Herrero en Banderbill o Ullathorpe", precio: "~3,000-8,000 oro" },
            { slot: "🛡️ Armadura", nombre: "Armadura de Hierro / Placas", stats: "Def media-alta", donde: "🛒 Herrero en Banderbill", precio: "~5,000-10,000 oro" },
            { slot: "⛑️ Casco", nombre: "Casco de Lobo", stats: "Buena def física", donde: "⚒️ Crafteo con Piel de Lobo (drop de Lobos)", precio: "Crafteo" },
            { slot: "🔰 Escudo", nombre: "Escudo de Hierro", stats: "7-7 defensa", donde: "🛒 Herrero en ciudades", precio: "~2,000 oro", nivelReq: 6 },
          ],
          extras: [
            { nombre: "Poción Azul (grandes)", donde: "🛒 NPC pociones", tip: "Con Curación Total no necesitás rojas." },
          ],
          tip: "Con Curación Total + buena armadura sos prácticamente inmortal en PvE. Farmeo infinito."
        },
        { nivel: "30+",
          items: [
            { slot: "⚔️ Arma", nombre: "Espada Vikinga / Hacha de Bárbaro", stats: "45 / 55 ataque", donde: "🛒 Herrero Banderbill o 🐉 drop bosses", precio: "~15,000+ oro" },
            { slot: "🛡️ Armadura", nombre: "Armadura Escarlata", stats: "33/34/38 defensa", donde: "🐉 Drop bosses o 🏪 trade", precio: "~20,000 oro" },
            { slot: "⛑️ Casco", nombre: "Casco de Oso", stats: "Alta def física", donde: "⚒️ Crafteo con Piel de Oso (drop de Osos Pardos)", precio: "Crafteo" },
            { slot: "🔰 Escudo", nombre: "Escudo del Bosque", stats: "Buena defensa", donde: "🐉 Drop especial o trade", precio: "Trade" },
          ],
          extras: [
            { nombre: "Anillo de Resistencia Mágica", donde: "⚒️ Crafteo o trade", tip: "6% def mágica extra." },
          ],
          tip: "Sos el mejor healer del juego. En grupo sos indispensable. Buscá equipo de bosses."
        },
      ]
    },
    3: { // Guerrero
      nombre: "Guerrero",
      nota: "Los guerreros usan armaduras pesadas, cascos, escudos y todas las armas cuerpo a cuerpo.",
      fases: [
        { nivel: "1-15",
          items: [
            { slot: "⚔️ Arma", nombre: "Espada Corta → Espada Larga", stats: "3-6 → 8-12 daño", donde: "🛒 Herrero en Ullathorpe, Nix o Banderbill", precio: "500 → 2,000 oro" },
            { slot: "🛡️ Armadura", nombre: "Armadura de Cuero → Cota de Malla", stats: "Def básica → media", donde: "🛒 Herrero en ciudades principales", precio: "1,000 → 4,000 oro" },
            { slot: "⛑️ Casco", nombre: "Casco de Hierro", stats: "Defensa física básica", donde: "🛒 Herrero en cualquier ciudad", precio: "~800 oro" },
            { slot: "🔰 Escudo", nombre: "Escudo de Madera → Escudo de Hierro", stats: "1-1 → 7-7 def", donde: "🛒 Herrero en ciudades", precio: "500 → 2,000 oro" },
          ],
          extras: [
            { nombre: "Poción Roja (muchas)", donde: "🛒 Cualquier ciudad", tip: "Tu recurso principal. Llevá 100+." },
          ],
          tip: "Priorizá armadura > arma > escudo. La defensa te permite farmear más tiempo sin volver."
        },
        { nivel: "15-30",
          items: [
            { slot: "⚔️ Arma", nombre: "Espada Vikinga", stats: "~45 ataque", donde: "🛒 Herrero en Banderbill", precio: "~8,000 oro" },
            { slot: "⚔️ Arma alt", nombre: "Hacha de Bárbaro", stats: "55 ataque, 35 defensa", donde: "🛒 Herrero Banderbill o ⚒️ crafteo", precio: "~12,000 oro" },
            { slot: "🛡️ Armadura", nombre: "Armadura de Placas", stats: "Alta defensa física", donde: "🛒 Herrero en Banderbill o Ullathorpe", precio: "~10,000 oro" },
            { slot: "⛑️ Casco", nombre: "Casco de Lobo", stats: "Buena def", donde: "⚒️ Crafteo con Piel de Lobo", precio: "Crafteo (Lobos dropean piel)" },
            { slot: "🔰 Escudo", nombre: "Escudo de Acero", stats: "Buena defensa", donde: "🛒 Herrero en Banderbill", precio: "~5,000 oro" },
          ],
          extras: [
            { nombre: "Poción Roja (grandes)", donde: "🛒 NPC pociones", tip: "Siempre llevá el inventario lleno de rojas." },
            { nombre: "Poción Amarilla", donde: "🛒 NPC pociones", tip: "Boost temporal de fuerza. Usala en bosses." },
          ],
          tip: "La Hacha de Bárbaro es la mejor relación daño/precio. Tiene 55 ataque Y 35 defensa."
        },
        { nivel: "30+",
          items: [
            { slot: "⚔️ Arma", nombre: "Hachas Orcas / Martillo de Guerra", stats: "Alto daño", donde: "🐉 Drop de bosses (Orcos, Dungeon)", precio: "Trade" },
            { slot: "🛡️ Armadura", nombre: "Armadura Escarlata", stats: "33/34/38 defensa", donde: "🐉 Drop de bosses o 🏪 trade", precio: "~20,000 oro" },
            { slot: "⛑️ Casco", nombre: "Casco de Oso / Cuerno de Alce", stats: "Alta defensa", donde: "⚒️ Crafteo (Piel de Oso de Osos Pardos)", precio: "Crafteo/Trade" },
            { slot: "🔰 Escudo", nombre: "Escudo de Tortuga", stats: "Mejor escudo del juego", donde: "🐢 Drop de Tortugas Gigantes", precio: "Drop (farmeable)" },
          ],
          extras: [
            { nombre: "Poción Roja máxima", donde: "🛒 NPC endgame", tip: "Inventario lleno siempre." },
            { nombre: "Poción de Fuerza", donde: "⚒️ Crafteo con Atún Salvaje", tip: "Boost de fuerza para raids." },
          ],
          tip: "El Escudo de Tortuga es el mejor del juego, dropeado por Tortugas Gigantes. Farmealo."
        },
      ]
    },
    4: { // Asesino
      nombre: "Asesino",
      nota: "Los asesinos usan dagas (140% daño extra por backstab), armaduras medianas y escudos medianos.",
      fases: [
        { nivel: "1-15",
          items: [
            { slot: "⚔️ Arma", nombre: "Daga → Daga +1", stats: "Daño base + 140% backstab", donde: "🛒 Herrero en cualquier ciudad", precio: "~200-800 oro" },
            { slot: "🛡️ Armadura", nombre: "Armadura de Cuero", stats: "Def liviana", donde: "🛒 Sastre o Herrero en ciudades", precio: "~1,000 oro" },
            { slot: "⛑️ Casco", nombre: "Casco básico", stats: "Defensa básica", donde: "🛒 Herrero en ciudades", precio: "~500 oro" },
            { slot: "🔰 Escudo", nombre: "Escudo mediano", stats: "Defensa media", donde: "🛒 Herrero en ciudades", precio: "~1,500 oro" },
          ],
          extras: [
            { nombre: "Poción Roja", donde: "🛒 Cualquier ciudad", tip: "Esencial, no tenés curación mágica fuerte." },
            { nombre: "Poción Verde", donde: "🛒 Cualquier ciudad", tip: "Cura estados negativos." },
          ],
          tip: "Siempre atacá por la espalda para el bonus de 140% daño extra. Posicionate bien."
        },
        { nivel: "15-30",
          items: [
            { slot: "⚔️ Arma", nombre: "Daga +2 → Daga +3", stats: "Buen daño + backstab", donde: "🛒 Herrero Banderbill o ⚒️ crafteo", precio: "~3,000-8,000 oro" },
            { slot: "🛡️ Armadura", nombre: "Armadura media", stats: "Balance def/movilidad", donde: "🛒 Herrero en Banderbill", precio: "~5,000 oro" },
            { slot: "⛑️ Casco", nombre: "Casco de Lobo", stats: "Buena def", donde: "⚒️ Crafteo con Piel de Lobo", precio: "Crafteo" },
            { slot: "🔰 Escudo", nombre: "Escudo Vikingo", stats: "Escudo medio para asesinos", donde: "🛒 Herrero Banderbill", precio: "~4,000 oro" },
          ],
          extras: [
            { nombre: "Poción Roja (grandes)", donde: "🛒 NPC pociones", tip: "Muchas, siempre." },
          ],
          tip: "Invisibilidad + backstab con daga es tu combo letal. Priorizá dagas de alta calidad."
        },
        { nivel: "30+",
          items: [
            { slot: "⚔️ Arma", nombre: "Daga +4 / Mejor daga", stats: "Máximo daño + backstab", donde: "🐉 Drop bosses o ⚒️ crafteo alto", precio: "Trade/Crafteo" },
            { slot: "🛡️ Armadura", nombre: "Mejor armadura media", stats: "Mejor balance disponible", donde: "🐉 Drop bosses o trade", precio: "Trade" },
            { slot: "💍 Anillo", nombre: "Anillo de Defensa Mágica", stats: "6% def mágica", donde: "⚒️ Crafteo o trade", precio: "Trade", nivelReq: 28 },
          ],
          extras: [
            { nombre: "Poción de Agilidad", donde: "⚒️ Crafteo con Cola de Zorro", tip: "+3-6 agilidad temporal." },
          ],
          tip: "Máxima agilidad + mejor daga + backstab = daño brutal."
        },
      ]
    },
    5: { // Ladrón
      nombre: "Ladrón",
      nota: "Los ladrones usan dagas y armas ligeras. 75% bonus de daño crítico, hasta 19% chance de crítico.",
      fases: [
        { nivel: "1-15",
          items: [
            { slot: "⚔️ Arma", nombre: "Daga / Espada Corta", stats: "Daño base + 75% crit", donde: "🛒 Herrero en cualquier ciudad", precio: "~200-500 oro" },
            { slot: "🛡️ Armadura", nombre: "Armadura de Cuero", stats: "Def liviana", donde: "🛒 Sastre en ciudades", precio: "~1,000 oro" },
          ],
          extras: [
            { nombre: "Poción Roja", donde: "🛒 Cualquier ciudad", tip: "Tu sustain principal." },
          ],
          tip: "Robá items de criaturas para ganar oro extra. Tu habilidad de robo es clave."
        },
        { nivel: "15+",
          items: [
            { slot: "⚔️ Arma", nombre: "Mejor daga/arma disponible", stats: "Maximizar crit", donde: "🛒 Herrero Banderbill o trade", precio: "Variable" },
            { slot: "🛡️ Armadura", nombre: "Mejor armadura liviana", stats: "Balance def/movilidad", donde: "🛒 o trade", precio: "Variable" },
          ],
          extras: [
            { nombre: "Poción de Agilidad", donde: "⚒️ Crafteo con Cola de Zorro", tip: "+3-6 agilidad = más evasión y crit." },
          ],
          tip: "Maximizá agilidad para más evasión y chance de crítico (hasta 19%)."
        },
      ]
    },
    6: { // Bardo
      nombre: "Bardo",
      nota: "Los bardos son versátiles: usan túnicas de colores, armaduras de cuero, escudo vikingo y tienen magia.",
      fases: [
        { nivel: "1-15",
          items: [
            { slot: "⚔️ Arma", nombre: "Espada Corta / Daga", stats: "Daño básico", donde: "🛒 Herrero en cualquier ciudad", precio: "~500 oro" },
            { slot: "🛡️ Armadura", nombre: "Túnica de Color", stats: "Defensa mágica", donde: "🛒 Sastre en Ullathorpe o Nix", precio: "~800 oro" },
            { slot: "🔰 Escudo", nombre: "Escudo Vikingo", stats: "Escudo para bardos", donde: "🛒 Herrero en ciudades", precio: "~2,000 oro" },
          ],
          extras: [
            { nombre: "Poción Roja + Azul", donde: "🛒 Cualquier ciudad", tip: "Necesitás las dos: vida y maná." },
          ],
          tip: "Sos jack of all trades. Mezcla de melee y magia según la situación."
        },
        { nivel: "15+",
          items: [
            { slot: "⚔️ Arma", nombre: "Espada Vikinga / Mejor disponible", stats: "~45 ataque", donde: "🛒 Herrero Banderbill", precio: "~8,000 oro" },
            { slot: "🛡️ Armadura", nombre: "Túnica Legendaria", stats: "33/27/33 defensa", donde: "🐉 Drop bosses o trade", precio: "~24,000 oro" },
            { slot: "🔰 Escudo", nombre: "Escudo Vikingo mejorado", stats: "Mejor escudo para bardo", donde: "🛒 Herrero o trade", precio: "Variable" },
          ],
          extras: [
            { nombre: "Anillo de Fortaleza Mágica", donde: "⚒️ Crafteo: 110 hierro + 20 plata", tip: "6% def mágica extra.", nivelReq: 25 },
          ],
          tip: "Túnica Legendaria es tu mejor armadura. Combiná melee + hechizos de soporte."
        },
      ]
    },
    7: { // Druida
      nombre: "Druida",
      nota: "Druidas usan túnicas, cascos pequeños, escudos medianos. El Báculo Engarzado les da -10% maná en TODO.",
      fases: [
        { nivel: "1-15",
          items: [
            { slot: "⚔️ Arma", nombre: "Arco Simple + Flechas", stats: "Daño a distancia", donde: "🛒 Herrero en Nix o Ullathorpe", precio: "~1,000 oro + flechas" },
            { slot: "⚔️ Arma alt", nombre: "Vara de Fresno", stats: "Reduce penalidad mágica", donde: "🛒 Herrero en ciudades", precio: "~1,000 oro" },
            { slot: "🛡️ Armadura", nombre: "Túnica básica", stats: "Defensa mágica", donde: "🛒 Sastre en ciudades", precio: "~500 oro" },
            { slot: "🔰 Escudo", nombre: "Escudo mediano", stats: "Defensa media", donde: "🛒 Herrero en ciudades", precio: "~1,500 oro" },
          ],
          extras: [
            { nombre: "Poción Azul", donde: "🛒 Cualquier ciudad", tip: "Prioridad para mantener maná de curación." },
            { nombre: "Flechas (muchas)", donde: "🛒 Herrero", tip: "Si usás arco, llevá flechas de sobra." },
          ],
          tip: "Podés usar arco a distancia + hechizos. Muy versátil en combate."
        },
        { nivel: "15-30",
          items: [
            { slot: "⚔️ Arma", nombre: "Bastón Nudoso / Arco Reforzado", stats: "Reduce penalidad / 3-7 daño rango", donde: "🛒 Herrero Banderbill", precio: "~3,000 oro" },
            { slot: "🛡️ Armadura", nombre: "Túnica Mágica", stats: "Def + res mágica", donde: "🛒 Sastre Banderbill", precio: "~4,000 oro" },
            { slot: "🔰 Escudo", nombre: "Escudo mediano mejorado", stats: "Defensa media-alta", donde: "🛒 Herrero Banderbill", precio: "~3,000 oro" },
          ],
          extras: [
            { nombre: "Poción Azul (grandes)", donde: "🛒 NPC pociones", tip: "Maná es tu recurso principal." },
          ],
          tip: "A nivel 20+ conseguí Invisibilidad e Invocar Lobo. Combo potente."
        },
        { nivel: "30+",
          items: [
            { slot: "⚔️ Arma", nombre: "Báculo Engarzado", stats: "-10% maná en TODOS los hechizos", donde: "⚒️ Crafteo alto o trade", precio: "~20,000+ oro", nivelReq: 29 },
            { slot: "🛡️ Armadura", nombre: "Túnica Legendaria", stats: "33/27/33 defensa", donde: "🐉 Drop bosses o trade", precio: "~24,000 oro" },
          ],
          extras: [
            { nombre: "Anillo de Resistencia Mágica", donde: "⚒️ Crafteo o trade", tip: "6% def mágica. Importante para druida.", nivelReq: 25 },
          ],
          tip: "El Báculo Engarzado en druida reduce -10% maná en TODOS los hechizos (no solo elementales como el mago)."
        },
      ]
    },
    8: { // Paladín
      nombre: "Paladín",
      nota: "Paladines usan armaduras pesadas, escudos, y todas las armas. Híbrido melee + curación.",
      fases: [
        { nivel: "1-15",
          items: [
            { slot: "⚔️ Arma", nombre: "Espada Corta → Espada Larga", stats: "3-6 → 8-12 daño", donde: "🛒 Herrero en ciudades", precio: "500 → 2,000 oro" },
            { slot: "🛡️ Armadura", nombre: "Armadura de Cuero → Hierro", stats: "Def media", donde: "🛒 Herrero en ciudades", precio: "1,000 → 3,000 oro" },
            { slot: "⛑️ Casco", nombre: "Casco de Hierro", stats: "Def básica", donde: "🛒 Herrero en ciudades", precio: "~800 oro" },
            { slot: "🔰 Escudo", nombre: "Escudo de Hierro", stats: "7-7 defensa", donde: "🛒 Herrero en ciudades", precio: "~2,000 oro" },
          ],
          extras: [
            { nombre: "Poción Roja + Azul", donde: "🛒 Cualquier ciudad", tip: "Rojas para sustain, azules para curación mágica." },
          ],
          tip: "Tu combo es melee + auto-curación. Con Curar Heridas sos muy tanky desde el inicio."
        },
        { nivel: "15-30",
          items: [
            { slot: "⚔️ Arma", nombre: "Espada Vikinga / Hacha de Bárbaro", stats: "45 / 55 ataque", donde: "🛒 Herrero Banderbill", precio: "~8,000-12,000 oro" },
            { slot: "🛡️ Armadura", nombre: "Armadura de Placas", stats: "Alta def física", donde: "🛒 Herrero Banderbill", precio: "~10,000 oro" },
            { slot: "⛑️ Casco", nombre: "Casco de Lobo", stats: "Buena def", donde: "⚒️ Crafteo con Piel de Lobo", precio: "Crafteo" },
            { slot: "🔰 Escudo", nombre: "Escudo de Acero", stats: "Alta defensa", donde: "🛒 Herrero Banderbill", precio: "~5,000 oro" },
          ],
          extras: [
            { nombre: "Poción Azul (grandes)", donde: "🛒 NPC pociones", tip: "Para Curación Total, tu hechizo clave." },
          ],
          tip: "Con Curar Heridas Graves + buena armadura, sos el tanque perfecto."
        },
        { nivel: "30+",
          items: [
            { slot: "⚔️ Arma", nombre: "Mejor arma melee disponible", stats: "Máximo daño", donde: "🐉 Drop bosses o trade", precio: "Trade" },
            { slot: "🛡️ Armadura", nombre: "Armadura Escarlata", stats: "33/34/38 defensa", donde: "🐉 Drop bosses o trade", precio: "~20,000 oro" },
            { slot: "🔰 Escudo", nombre: "Escudo de Tortuga", stats: "Mejor escudo", donde: "🐢 Drop Tortugas Gigantes", precio: "Farmeable" },
            { slot: "🔰 Escudo alt", nombre: "Escudo del Bosque", stats: "Escudo especial para Paladín", donde: "🐉 Drop especial o trade", precio: "Trade" },
          ],
          extras: [
            { nombre: "Anillo de Resistencia Mágica", donde: "⚒️ Crafteo", tip: "Complementa tu defensa mágica.", nivelReq: 25 },
          ],
          tip: "Curación Total te hace prácticamente inmortal. Buscá Escudo de Tortuga de Tortugas Gigantes."
        },
      ]
    },
    9: { // Cazador
      nombre: "Cazador",
      nota: "Los cazadores usan arcos como arma principal, armaduras medianas y escudo vikingo.",
      fases: [
        { nivel: "1-15",
          items: [
            { slot: "⚔️ Arma", nombre: "Arco Simple + Flechas", stats: "Daño a distancia", donde: "🛒 Herrero en Nix o Ullathorpe", precio: "~1,000 oro" },
            { slot: "🛡️ Armadura", nombre: "Armadura de Cuero", stats: "Def liviana", donde: "🛒 Sastre en ciudades", precio: "~1,000 oro" },
            { slot: "🔰 Escudo", nombre: "Escudo Vikingo", stats: "Escudo para cazadores", donde: "🛒 Herrero en ciudades", precio: "~2,000 oro" },
          ],
          extras: [
            { nombre: "Flechas (MUCHAS)", donde: "🛒 Herrero en cualquier ciudad", tip: "Sin flechas no hay daño. Llevá 200+." },
            { nombre: "Poción Roja", donde: "🛒 Cualquier ciudad", tip: "Sin magia, las pociones son tu curación." },
          ],
          tip: "Mantené distancia y usá el arco. Las flechas se gastan, siempre llevá de sobra."
        },
        { nivel: "15-30",
          items: [
            { slot: "⚔️ Arma", nombre: "Arco Reforzado", stats: "3-7 daño (mejorado de 2-6)", donde: "🛒 Herrero Banderbill", precio: "~5,000 oro" },
            { slot: "⚔️ Arma alt", nombre: "Arco Compuesto", stats: "Similar daño, sin bypass armadura", donde: "🛒 Herrero o crafteo", precio: "~4,000 oro" },
            { slot: "🛡️ Armadura", nombre: "Armadura media", stats: "Balance def/movilidad", donde: "🛒 Herrero Banderbill", precio: "~5,000 oro" },
            { slot: "🔰 Escudo", nombre: "Escudo Vikingo mejorado", stats: "Mejor escudo para cazador", donde: "🛒 Herrero Banderbill", precio: "~4,000 oro" },
          ],
          extras: [
            { nombre: "Flechas mejoradas", donde: "🛒 Herrero Banderbill", tip: "Mejor calidad = más daño." },
            { nombre: "Poción Roja (grandes)", donde: "🛒 NPC pociones", tip: "Siempre muchas." },
          ],
          tip: "El Arco Reforzado es tu mejor upgrade. Tiene más daño base que el Compuesto."
        },
        { nivel: "30+",
          items: [
            { slot: "⚔️ Arma", nombre: "Mejor arco disponible", stats: "Máximo daño rango", donde: "🐉 Drop bosses o ⚒️ crafteo alto", precio: "Trade" },
            { slot: "🛡️ Armadura", nombre: "Mejor armadura media", stats: "Mejor def disponible", donde: "🐉 Drop bosses o trade", precio: "Trade" },
          ],
          extras: [
            { nombre: "Poción de Agilidad", donde: "⚒️ Crafteo con Cola de Zorro", tip: "+3-6 agilidad = más precisión con arco." },
          ],
          tip: "Agilidad es tu stat más importante. Más agilidad = más hit rate con arco."
        },
      ]
    },
    10: { // Trabajador
      nombre: "Trabajador",
      nota: "Los trabajadores se enfocan en oficios: herrería, carpintería, sastrería, minería, pesca, tala.",
      fases: [
        { nivel: "1-15",
          items: [
            { slot: "⚔️ Arma", nombre: "Pico de Minero / Hacha de Leñador", stats: "Herramientas de oficio", donde: "🛒 Herrero en cualquier ciudad", precio: "~500-1,000 oro" },
            { slot: "⚔️ Arma alt", nombre: "Martillo de Herrero", stats: "Para craftear en yunque", donde: "🛒 Herrero en cualquier ciudad", precio: "~500 oro" },
            { slot: "🛡️ Armadura", nombre: "Armadura de Cuero", stats: "Defensa básica", donde: "🛒 Sastre en ciudades", precio: "~1,000 oro" },
          ],
          extras: [
            { nombre: "Caña de Pescar", donde: "🛒 NPC en ciudades con puerto (Nix, Banderbill)", tip: "Para pescar y subir habilidad." },
            { nombre: "Serrucho", donde: "🛒 Herrero", tip: "Para carpintería." },
          ],
          tip: "Tu foco es subir habilidades de oficio, no combate. Miná, talá y crafteá."
        },
        { nivel: "15+",
          items: [
            { slot: "⚔️ Herramienta", nombre: "Mejores herramientas de oficio", stats: "Mayor eficiencia", donde: "🛒 Herrero Banderbill", precio: "Variable" },
            { slot: "🛡️ Armadura", nombre: "Armadura media", stats: "Protección para zonas peligrosas", donde: "🛒 Herrero", precio: "Variable" },
          ],
          extras: [
            { nombre: "Lingotes y materiales", donde: "⛏️ Minería en cuevas de minerales", tip: "Los lingotes son la base de todo crafteo." },
          ],
          tip: "Vendé items crafteados a otros jugadores. Un trabajador con herrería alta es MUY valioso."
        },
      ]
    },
    11: { // Pirata
      nombre: "Pirata",
      nota: "Los piratas son melee con bonus en combate naval. Usan armas cuerpo a cuerpo y armaduras medianas.",
      fases: [
        { nivel: "1-15",
          items: [
            { slot: "⚔️ Arma", nombre: "Cimitarra / Sable", stats: "Armas de pirata", donde: "🛒 Herrero en ciudades", precio: "~1,000-2,000 oro" },
            { slot: "🛡️ Armadura", nombre: "Armadura de Cuero", stats: "Def liviana", donde: "🛒 Sastre en ciudades", precio: "~1,000 oro" },
          ],
          extras: [
            { nombre: "Poción Roja", donde: "🛒 Cualquier ciudad", tip: "Tu sustain principal." },
          ],
          tip: "Enfocate en subir nivel para acceder al barco y combate naval."
        },
        { nivel: "15+",
          items: [
            { slot: "⚔️ Arma", nombre: "Mejor cimitarra/sable disponible", stats: "Daño melee", donde: "🛒 Herrero Banderbill o trade", precio: "Variable" },
            { slot: "🛡️ Armadura", nombre: "Mejor armadura media", stats: "Defensa", donde: "🛒 o trade", precio: "Variable" },
          ],
          extras: [
            { nombre: "Barco", donde: "🛒 NPC puerto en Banderbill (puerto grande)", tip: "Necesitás barco para combate naval y acceder a islas." },
          ],
          tip: "Tu ventaja es en el mar. Conseguí un barco y andá a las islas para el mejor farmeo."
        },
      ]
    },
    default: {
      nombre: "General",
      nota: "Guía general de equipo para cualquier clase.",
      fases: [
        { nivel: "1-15",
          items: [
            { slot: "⚔️ Arma", nombre: "Mejor arma de tu tipo", stats: "Variable", donde: "🛒 Herrero en Ullathorpe, Nix o Banderbill", precio: "500-2,000 oro" },
            { slot: "🛡️ Armadura", nombre: "Mejor armadura equipable", stats: "Variable", donde: "🛒 Herrero o Sastre en ciudades", precio: "1,000-3,000 oro" },
          ],
          extras: [
            { nombre: "Pociones (tu tipo)", donde: "🛒 NPC pociones en cualquier ciudad", tip: "Rojas si sos físico, azules si sos mágico." },
          ],
          tip: "No gastes todo tu oro en equipo, guardá para pociones. Vas a necesitar muchas."
        },
        { nivel: "15-30",
          items: [
            { slot: "⚔️ Arma", nombre: "Upgrade en Banderbill", stats: "Variable", donde: "🛒 Herrero en Banderbill (mejor surtido)", precio: "5,000-12,000 oro" },
            { slot: "🛡️ Armadura", nombre: "Upgrade de armadura", stats: "Variable", donde: "🛒 Banderbill tiene todo", precio: "5,000-10,000 oro" },
          ],
          extras: [
            { nombre: "Pociones mejoradas + Anillos", donde: "🛒 NPC / ⚒️ Crafteo", tip: "Los anillos dan bonus de 6% defensa mágica." },
          ],
          tip: "Banderbill tiene las mejores tiendas. Viajá ahí para comprar equipo mid-game."
        },
        { nivel: "30+",
          items: [
            { slot: "⚔️ Arma", nombre: "Arma de boss/crafteo", stats: "Endgame", donde: "🐉 Drop de bosses en dungeons / ⚒️ Crafteo alto", precio: "Trade/Crafteo" },
            { slot: "🛡️ Armadura", nombre: "Armadura endgame", stats: "Mejor disponible", donde: "🐉 Drop de bosses (Dragón, Phylakterion)", precio: "Trade" },
          ],
          extras: [
            { nombre: "Anillo endgame", donde: "⚒️ Crafteo con lingotes", tip: "Anillo de Disolución Mágica (nv33+, 100 hierro + 60 plata)." },
          ],
          tip: "El equipo endgame viene de bosses de dungeon y crafteo de alto nivel. Grupear para bosses."
        },
      ]
    },
  },

  pois: {
    ciudades: [
      { nombre: "Ullathorpe", mapa: 1, desc: "Ciudad central, la más transitada", servicios: ["Banco", "Tiendas", "Iglesia", "Posada", "Entrenadores"], segura: true, icon: "🏰" },
      { nombre: "Nix", mapa: 34, desc: "Ciudad para principiantes", servicios: ["Banco", "Tiendas", "Iglesia", "Puerto", "Todas las tiendas básicas"], segura: true, icon: "🏘️" },
      { nombre: "Banderbill", mapa: 59, desc: "Ciudad más grande, Banco Goliath", servicios: ["Banco Goliath", "Palacio Real", "Trainer único", "Puerto grande", "Todas las tiendas"], segura: true, icon: "👑" },
      { nombre: "Lindos", mapa: 62, desc: "Pueblo pequeño", servicios: ["Tiendas básicas", "Casas"], segura: true, icon: "🏡" },
      { nombre: "Arghal", mapa: 196, desc: "Ciudad con servicios", servicios: ["Banco", "Tiendas", "Servicios"], segura: true, icon: "🏰" },
      { nombre: "Arkhein", mapa: 151, desc: "Ciudad con servicios completos", servicios: ["Banco", "Tiendas", "Servicios"], segura: true, icon: "🏰" },
      { nombre: "Esperanza", mapa: null, desc: "Ciudad en zona INSEGURA", servicios: ["Sacerdote", "Bóveda", "Pocas tiendas"], segura: false, icon: "⚠️" },
    ],
    dungeons: [
      { nombre: "Newbie Dungeon", mapa: null, nivelMin: 1, nivelMax: 13, icon: "🐀", desc: "Dungeon inicial seguro" },
      { nombre: "Dungeon Marabel", mapa: "115-116", nivelMin: 15, nivelMax: 25, icon: "🕸️", desc: "Dungeon de 2 mapas" },
      { nombre: "Catacumbas", mapa: "40-45", nivelMin: 20, nivelMax: 35, icon: "💀", desc: "Dungeon grande, arañas y orcos" },
      { nombre: "Cripta Olvidada", mapa: 205, nivelMin: 18, nivelMax: 99, icon: "⚰️", desc: "No-muertos en el desierto" },
      { nombre: "Dungeon Vespar", mapa: null, nivelMin: 25, nivelMax: 40, icon: "🦇", desc: "Nivel 25+ requerido" },
      { nombre: "Bosque Élfico", mapa: 239, nivelMin: 25, nivelMax: 40, icon: "🦌", desc: "Ciervos Ancestrales, 4500 exp" },
      { nombre: "Cueva de Nagas", mapa: 305, nivelMin: 25, nivelMax: 40, icon: "🐍", desc: "Kadrus, 9200 exp" },
      { nombre: "Isla del Averno", mapa: 133, nivelMin: 30, nivelMax: 45, icon: "👻", desc: "Banshees, 22325 exp" },
      { nombre: "Dungeon Speculum", mapa: null, nivelMin: 40, nivelMax: 50, icon: "🔮", desc: "Nivel 40+ requerido" },
      { nombre: "Dungeon del Dragón", mapa: 166, nivelMin: 40, nivelMax: 50, icon: "🐉", desc: "Boss: Gran Dragón Rojo" },
    ],
    zonasFarmeo: [
      { nombre: "Desierto (gusanos)", mapa: "17/20/21", nivelMin: 13, nivelMax: 25, icon: "🏜️" },
      { nombre: "Desierto (off-peak)", mapa: "15/16", nivelMin: 13, nivelMax: 25, icon: "🏜️" },
      { nombre: "Mar / Islas", mapa: "201+", nivelMin: 25, nivelMax: 50, icon: "⛵" },
    ],
  },

  getRecommendation(level, classId) {
    const clase = this.clases[classId] || { nombre: "Desconocida", tipo: "física" };
    const spots = this.leveling.filter(s => level >= s.minLevel && level <= s.maxLevel);
    const spellProg = this.spellProgression[classId] || null;
    let currentSpellPhase = null;
    if (spellProg) {
      currentSpellPhase = spellProg.fases.find(f => {
        const [min, max] = f.nivel.includes('+') ? [parseInt(f.nivel), 999] : f.nivel.split('-').map(Number);
        return level >= min && level <= max;
      });
    }
    const equipData = this.equipment[classId] || this.equipment.default;
    let currentEquipPhase = null;
    if (equipData) {
      currentEquipPhase = equipData.fases.find(f => {
        const [min, max] = f.nivel.includes('+') ? [parseInt(f.nivel), 999] : f.nivel.split('-').map(Number);
        return level >= min && level <= max;
      });
    }
    const relevantDungeons = this.pois.dungeons.filter(d => level >= d.nivelMin && level <= d.nivelMax);
    const relevantFarmeo = this.pois.zonasFarmeo.filter(z => level >= z.nivelMin && level <= z.nivelMax);
    return { clase, spots, spellProg, currentSpellPhase, equipData, currentEquipPhase, relevantDungeons, relevantFarmeo };
  }
};
