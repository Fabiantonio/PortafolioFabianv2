
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
import AstroIcon from "../components/icons/icons/AstroIcon.astro";
import TailwindIcon from "../components/icons/icons/TailwindIcon.astro";


export const TAGS = {
    HTML: {
        name: "Html",
        class: "bg-[#ffdccd] text-black",
        icon: HtmlIcon,
    },
    TAILWIND: {
        name: "Tailwind",
        class: "bg-[#091538] text-white",
        icon: TailwindIcon,
    },
    ASTRO: {
        name: "Astro",
        class: "bg-[#23262f] text-white",
        icon: AstroIcon,
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

export const SKILLS = [
{
        name: "Html",
        class: "bg-[#ffdccd] text-black",
        icon: HtmlIcon,
    },
{
        name: "Css",
        class: "bg-[#bdd3dc] text-black",
        icon: CssIcon,
    },
 {
        name: "Javascript",
        class: "bg-[#f0e9bc] text-black",
        icon: JavascriptIcon,
    },
    {
        name: "Astro",
        class: "bg-[#f0e9bc] text-black",
        icon: JavascriptIcon,
    },
{
        name: "Django",
        class: "bg-[#123226] text-white",
        icon: DjangoIcon,
    },
 {
        name: "Typescript",
        class: "bg-[#bdd3dc] text-black",
        icon: TypeScriptIcon,
    },
 {
        name: "Angular",
        class: "bg-[#e5d8f1] text-black",
        icon: AngularIcon,
    },
 {
        name: "Ionic",
        class: "bg-[#0b1933] text-white",
        icon: IonicIcon,
    },
{
        name: "Firebase",
        class: "bg-[#f6ede4] text-black",
        icon: FireBase,
    },
]

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
        title: "Pokedex",
        description:
            "Buscador de pokémon utilizando la pokeapi",
        link: "https://datapoke.netlify.app/",
        github: "https://github.com/Fabiantonio/Pokedex",
        images: [
            "/pokedex_1.jpg",
            "/pokedex_2.jpg",
            "/pokedex_3.jpg",
        ],
        tags: [TAGS.ASTRO, TAGS.TAILWIND],
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
        title: "Fundamentos de Programación y BBDD",
        description: "Primer semestre enfocado en lógica de programación y modelamiento de datos:",
        link: "1er Semestre",
        technologies: ["PSeInt", "Python", "SQL", "Diagramas ER"]
    },
    {
        date: "Agosto 2022",
        title: "Desarrollo de Software y Consultas Avanzadas",
        description: "Segundo semestre trabajando con aplicaciones de escritorio y consultas complejas:",
        link: "2do Semestre",
        technologies: ["Java", "NetBeans", "CRUD", "SQL Queries"]
    },
    {
        date: "Marzo 2023",
        title: "Desarrollo Web y Programación en BBDD",
        description: "Tercer semestre construyendo aplicaciones web y optimización de bases de datos:",
        link: "3er Semestre",
        technologies: ["HTML/CSS", "JavaScript", "Django", "SQL"]
    },
    {
        date: "Agosto 2023",
        title: "Apps Móviles y Calidad de Software",
        description: "Cuarto semestre desarrollando aplicaciones móviles y testing:",
        link: "4to Semestre",
        technologies: ["Ionic", "Angular", "Firebase", "QA"]
    },
];