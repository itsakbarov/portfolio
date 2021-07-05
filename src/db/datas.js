import {
    Html5,
    Css3,
    SasS,
    Javascript,
    React,
    BootStrap,
    Git,
    Figma,
    ReduxLogo,
    TypeScript,
    NextJs,
    RussianFlag,
    Uzbekistan,
    MailIcon,
    GitHubLogo,
    LinkedInLogo,
    AntDesign,
    GraphQL,
    Jquery,
    WordPress,
    Pubg,
    NodeJs,
    Angular
} from "../assets/icons/base_icons";

import UnitedKingdom from '../assets/icons/tobias-Flag-of-the-United-Kingdom.svg'
import Alladin from '../assets/images/cinemagic.png'
import Kids from '../assets/images/kids-entertaintment.png'
import AralSea from '../assets/images/green-aral-sea.png'
import Asaxiy from '../assets/images/asaxiy.png'
import Bolalar from '../assets/images/bolalar.png'
import FoodPos from '../assets/images/foodPos.png'
import Namanganliklar24 from '../assets/images/namanganliklar.png'
import Veterinar from '../assets/images/veter.png'
import Game from '../assets/images/game.png'
import KiwiShop from '../assets/images/Screenshot from 2021-05-03 12-49-25.png';
import Consulting from '../assets/images/Consulting.png';
import Todo from '../assets/images/todo.png';


export const UsingNow = [
    {
        title: 'HTML5',
        logo: <Html5 />
    },
    {
        title: 'CSS3',
        logo: <Css3 />
    },
    {
        title: 'SASS',
        logo: <SasS />
    },
    {
        title: 'JAVASCRIPT',
        logo: <Javascript />
    },
    {
        title: 'REACT',
        logo: <React />
    },
        {
        title: 'TypeScript',
        logo: <TypeScript />
    },
    {
        title: 'Jquery',
        logo: <Jquery />
    },
    {
        title: 'Wordpress',
        logo: <WordPress />
    },
    {
        title: 'BOOTSTRAP',
        logo: <BootStrap />
    },
    {
        title: 'FIGMA',
        logo: <Git />
    },
    {
        title: 'Ant Design',
        logo: <AntDesign />
    },
    {
        title: 'GIT ',
        logo: <Figma />
    },
]
export const LearingNow = [
    {
        title: 'Redux',
        logo: <ReduxLogo /> 
    },
    {
        title: 'Angular',
        logo: <Angular/>
    },
    {
        title: 'GraphQL',
        logo: <GraphQL />
    },
    {
        title: 'Node.js',
        logo: <NodeJs/>
    },
]
export const OItherSkills = [
    {
        title: 'Uzbek',
        logo: <Uzbekistan/>
    },
    {
        title: 'English',
        logo: <img style={{width: "101px", height: '101px', borderRadius: '50%',objectFit: 'cover'}} src={UnitedKingdom} alt=""/>
    },
    {
        title: 'Russian',
        logo: <RussianFlag/>
    },
    {
        title: ' Gaming',
        logo: <Pubg />
    }
]
export const ProjectDatas = [
    {
        title: 'Alladin',
        url: 'https://cinemagic-io.netlify.app',
        backdrop_path: Alladin,
        category: 'designed',
        repo: 'https://github.com/theAkbarov/Game-landingPage'
    },
    {
        title: 'Asaxiy.uz',
        url: 'https://asaxiy-web.netlify.app',
        backdrop_path: Asaxiy,
            category: 'designed',
            repo: 'https://github.com/theAkbarov/asaxiy.uz'
        },
        {
            title: 'Kids Entertaining Service',
            url: 'https: //kids-entertaintment.netlify.app',
            backdrop_path: Kids,
            category: 'designed',
            repo: 'https://github.com/theAkbarov/Kids-entertaining-service'
        },
        {
            title: 'Kiwi shop',
            url: 'https://davomini-keyin-bitkazib-qoyaman.netlify.app',
            backdrop_path: KiwiShop,
                category: 'coded',
                repo: 'https://github.com/theAkbarov/the-kiwi-shop'
        },
        {
            title: 'Consulting',
            url: 'https://consulting-test.netlify.app/',
            backdrop_path: Consulting,
            category: 'coded',
            repo: 'https://github.com/theAkbarov/cunsulting-verstka.git'
        },
        {
            title: 'Veterinar Clinic',
            url: 'https://veterinary-clinic-app.netlify.app ',
            backdrop_path: Veterinar,
                category: 'designed',
                repo: 'https://github.com/theAkbarov/Veterinariya'
        },
        {
            title: 'Todo App',
            url: 'https://the-task-app.netlify.app',
            backdrop_path: Todo,
                category: 'Coded',
                repo: 'https://github.com/theAkbarov/todo-app-react'
        },
        {
        title: 'Green Aral Sea',
        url: 'https://aral-sea.netlify.app/',
        backdrop_path: AralSea,
            category: 'coded',
            repo: 'https://github.com/theAkbarov/Green-aral-sea'
    },
        {
        title: 'Game',
        url: 'https://game-preview.netlify.app/',
        backdrop_path: Game,
            category: 'designed',
            repo: 'https://github.com/theAkbarov/Game-landingPage'
    },
        {
        title: 'Namanganliklar24',
        url: 'https://the-namanganliklar24.netlify.app',
        backdrop_path: Namanganliklar24,
            category: 'coded',
            repo: 'https://github.com/theAkbarov/the-namanganliklar24-react'
    },
    {
        title: 'Sport bolalar nigohida dasturi',
        url: 'https://uzsport.netlify.app/',
        backdrop_path: Bolalar,
            category: 'designed',
            repo: 'https://github.com/theAkbarov/Bolalar-sporti'
    },
    {
        title: 'FOOD POS service',
        url: 'http://akbaroff.uz/',
        backdrop_path: FoodPos,
            category: 'coded',
            repo: 'https://github.com/theAkbarov/food-pos_final'
    },
] 
export const HomeLinks = [
    {
        logo: <MailIcon />,
        path: 'mailto:sardor@akbarov.uk'
    },
    {
        logo: <GitHubLogo />,
        path: 'https://github.com/theAkbarov'
    },
    {
        logo: <LinkedInLogo />,
        path: 'https://www.linkedin.com/in/sardor-akbarov/'
    }
]