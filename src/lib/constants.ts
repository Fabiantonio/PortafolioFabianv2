
import HtmlIcon from "../components/icons/icons/HtmlIcon.astro";
import CssIcon from "../components/icons/icons/CssIcon.astro";
import JavascriptIcon from "../components/icons/icons/JavascriptIcon.astro";
import PythonIcon from "../components/icons/icons/PythonIcon.astro";
import DjangoIcon from "../components/icons/icons/DjangoIcon.astro";
import TypeScriptIcon from "../components/icons/icons/TypeScriptIcon.astro";
import AngularIcon from "../components/icons/icons/AngularIcon.astro";
import IonicIcon from "../components/icons/icons/IonicIcon.astro";
import FireBase from "../components/icons/icons/FireBase.astro";
import BoostrapIcon from "../components/icons/icons/boostrapIcon.astro";


export const TAGS = {
    HTML: {
        name: "Html",
        class: "bg-[#ffdccd] text-black",
        icon: HtmlIcon,
    },
    CSS: {
        name: "Css",
        class: "bg-[#bdd3dc] text-black",
        icon: CssIcon,
    },
    JAVASCRIPT: {
        name: "Javascript",
        class: "bg-[#f0e9bc] text-black",
        icon: JavascriptIcon,
    },
    PYTHON: {
        name: "Python",
        class: "bg-[#515641] text-white",
        icon: PythonIcon,
    },
    DJANGO: {
        name: "Django",
        class: "bg-[#123226] text-white",
        icon: DjangoIcon,
    },
    TYPESCRIPT: {
        name: "Typescript",
        class: "bg-[#bdd3dc] text-black",
        icon: TypeScriptIcon,
    },
    ANGULAR: {
        name: "Angular",
        class: "bg-[#e5d8f1] text-black",
        icon: AngularIcon,
    },
    IONIC: {
        name: "Ionic",
        class: "bg-[#0b1933] text-white",
        icon: IonicIcon,
    },
    FIREBASE: {
        name: "Firebase",
        class: "bg-[#f6ede4] text-black",
        icon: FireBase,
    },
    BOOSTRAP: {
        name: "Bootstrap ",
        class: "bg-[#e0cbf8] text-black",
        icon: BoostrapIcon,
    },
};

export const PROJECTS = [
    {
        title: "LittleShop",
        description:
            "E-Commerce enfocado en accesorios y alimentos para mascotas",
        link: "https://little-shop-six.vercel.app/",
        github: "https://github.com/Fabiantonio/LittleShop",
        images: [
            "/622shots_so.webp",
            "/LittleShop_Product.webp",
            "/LittleShop_Crud.webp",
        ],
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.BOOSTRAP, TAGS.PYTHON, TAGS.DJANGO],
    },
    {
        title: "TareApp",
        description:
            "Aplicación enfocada en poder crear tareas por hacer en el día a día y tener un sierto control sobre ellas",
        link: "/",
        github: "https://github.com/Fabiantonio/TareApp",
        images: [
            "/TareApp_Login.webp",
            "/TareApp_Main.webp",
            "/TareApp_Perfil.webp",
        ],
        tags: [TAGS.IONIC, TAGS.ANGULAR, TAGS.TYPESCRIPT, TAGS.FIREBASE, TAGS.HTML, TAGS.CSS],
    },
    {
        title: "CletApp",
        description:
            "Aplicación dirigida a la comunidad ciclista, la principal función es poder visualizar y publicar estacionamientos de bicicletas en un mapa",
        link: "https://mapa-prueba-2-783e3.web.app/",
        github: "https://github.com/Fabiantonio/Portafolio-cletapp",
        images: [
            "/Cletapp_login.png",
            "/Cletapp_mapa.webp",
            "/Cletapp_profile.webp",
        ],
        tags: [TAGS.IONIC, TAGS.ANGULAR, TAGS.TYPESCRIPT, TAGS.FIREBASE, TAGS.HTML, TAGS.CSS],
    },
    {
        title: "Chat Bot Local",
        description:
            "Mini chat gpt utilizando un modelo de IA",
        link: "https://chat-bot-local.netlify.app",
        github: "https://github.com/Fabiantonio/Local-GPT-Chat",
        images: [
            "/chat_bot_1.webp",
            "/chat_bot_2.webp",
            "/chat_bot_3.webp",
        ],
        tags: [TAGS.HTML, TAGS.JAVASCRIPT],
    },
    {
        title: "Calculadora JS",
        description:
            "Calculadora inspirada en Iphone",
        link: "https://iphonecalculadora.netlify.app/",
        github: "https://github.com/Fabiantonio/CalculadoraJS",
        images: [
            "/calculadora_1.png",
            "/calculadora_2.png",
            "/calculadora_3.png",
        ],
        tags: [TAGS.HTML, TAGS.JAVASCRIPT],
    },
    {
        title: "Pokedex",
        description:
            "Buscador de pokémon utilizando la pokeapi",
        link: "https://pokedexlocal.netlify.app/",
        github: "https://github.com/Fabiantonio/Pokedex",
        images: [
            "/pokedex_1.webp",
            "/pokedex_2.webp",
            "/pokedex_3.webp",
        ],
        tags: [TAGS.HTML, TAGS.JAVASCRIPT],
    },
];

export const LINKS = {
    github: 'https://github.com/Fabiantonio/',
    linkedin: 'https://www.linkedin.com/in/fabian-casas-266691324/',
    instagram: 'https://www.instagram.com/vntoniojr/',
}

// Education Page
export const EDUCATION = [
    {
        name: 'Duoc UC',
        location: 'Santiago, Maipú',
        position: 'Analista Programador',
        start: '2022',
        link: 'https://www.duoc.cl/',
        end: 'Presente',
        tasks: [
        ],

    },
    {
        name: 'Duoc UC',
        location: 'Santiago, Maipú',
        position: 'Analista Programador 2do Semestre',
        start: '2022',
        link: 'https://www.duoc.cl/',
        end: 'Presente',
        tasks: [
        ],

    },
    {
        name: 'Duoc UC',
        location: 'Santiago, Maipú',
        position: 'Analista Programador 3er Semestre',
        start: '2023',
        link: 'https://www.duoc.cl/',
        end: 'Presente',
        tasks: [
        ],

    },
    {
        name: 'Duoc UC',
        location: 'Santiago, Maipú',
        position: 'Analista Programador 4to Semestre',
        start: '2023',
        link: 'https://www.duoc.cl/',
        end: 'Presente',
        tasks: [
        ],

    },
]

export const EXPERIENCE = [
    {
        date: "Marzo 2022",
        title: "Programación de Algoritmos / Modelamiento de Base de Datos",
        description:
            "El 1er semestre aprendí el flujo de datos al programar diferentes algoritmos, primero en PSeInt y luego en Python, También aprendí a modelar bbdd, crear entidades y relacionarlas entre sí.",
        link: "",
    },
    {
        date: "Agosto 2022",
        title: "Desarrollo de Software de Escritorio / Consulta de Base de Datos",
        description: "El 2do semestre aprendí a desarrollar un software de escritorio con Java y MySQL en NetBeans que consistía en un CRUD, Tambien aprendí a consultar bbdd con Queries y filtros de búsqueda.",
        link: "",
    },
    {
        date: "Marzo 2023",
        title: "Programación Web / Programación de Base de Datos",
        description: "El 3er Semestre aprendí a desarrollar páginas web con Html, Css, Javascript y Django (Python) Construí un E-Commerce enfocado a una tienda para mascotas. Tambien aprendí a Programar en bbdd ya no solo hacer consultas básicas sino que tener bloques de código dentro de las Queries para optimizar las búsquedas y automatizar diferentes acciones",
        link: "",
    },
    {
        date: "Agosto 2023",
        title: "Programación de Aplicaciones Móviles / Cálidad de Software",
        description: "El 4to semestre aprendí a desarrollar aplicaciones para celulares con Ionic, Angular y FireBase, Construí una aplicacion para Agilizar la toma de asistencia de los profesores en Duoc UC",
        link: "",
    },
];