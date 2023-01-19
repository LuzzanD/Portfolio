import ecom from "../public/ecomm.png"
import ical from "../public/quizical.png"
import semac from "../public/sema.png"
import restaurant from "../public/cart.png"
import port from "../public/portf.png"
import { HtmlIcon, CssIcon, JavaScriptIcon, TypeScriptIcon, ReactIcon, TailwindIcon, NextIcon, SanityIcon, RapidApiIcon, ReduxIcon, AiFillGithubIcon, AiFillPhoneIcon, AiFillLinkedinIcon, HiMailIcon } from '../Utils/icons'


export const projectsData = [
    {name: 'Spotify Clone', image:'', techs:[<TailwindIcon />, <ReactIcon />, <RapidApiIcon />, < ReduxIcon/>], site: '/', github:''},
    {name: 'Portfolio', image: port, techs:[<TailwindIcon />, <ReactIcon />, <NextIcon />], site: '', github:''},
    {name: 'E-commerce', image: ecom, techs:[ <CssIcon />, <SanityIcon />, <ReactIcon />, <NextIcon />], site: 'https://ecommerce-project-tawny.vercel.app', github:'https://github.com/LuzzanD/ecommerce-project'},
    {name: 'Quiz', image: ical, techs:[<HtmlIcon />, <CssIcon />, <ReactIcon />], site: 'https://andrijasquizical.netlify.app', github:'https://github.com/LuzzanD/Quiz'},
    {name: 'Colour Scheme', image: semac, techs:[<HtmlIcon />, <CssIcon />, <JavaScriptIcon />], site: 'https://andrijascolorscheme.netlify.app', github:'https://github.com/LuzzanD/Color-scheme-generator'},
    {name: 'Shopping Cart', image: restaurant, techs:[<HtmlIcon />, <CssIcon />, <JavaScriptIcon />], site: 'https://restaurantordering.netlify.app', github:'https://github.com/LuzzanD/Restaurant-Ordering'}
]

export const technologiesData = [
    <HtmlIcon />, 
    <CssIcon />, 
    <JavaScriptIcon />,
    <TypeScriptIcon />,
    <ReactIcon />, 
    <TailwindIcon />, 
    <NextIcon />
]

export const contactData = [
    {link: 'www.github.com/LuzzanD', href:'https://www.github.com/LuzzanD', icon: <AiFillGithubIcon/>},
    {link: 'andrija0stojanovic@gmail.com', href:'https://www.github.com/LuzzanD', icon: <HiMailIcon/>},
    {link: 'www.linkedin.com/in/andrija-stojanović-1512411a6', href:'https://www.github.com/LuzzanD', icon: <AiFillLinkedinIcon/>},
    {link: '+381645696513', href:'https://www.github.com/LuzzanD', icon: <AiFillPhoneIcon/>},
]
