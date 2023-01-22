import ecomm from "../public/ecomm.png"
import quiz from "../public/quizical.png"
import scheme from "../public/scheme.png"
import cart from "../public/cart.png"
import port from "../public/portf.png"
import { HtmlIcon, CssIcon, JavaScriptIcon, TypeScriptIcon, ReactIcon, TailwindIcon, NextIcon, SanityIcon, RapidApiIcon, ReduxIcon, AiFillGithubIcon, AiFillPhoneIcon, AiFillLinkedinIcon, HiMailIcon } from '../Utils/icons'

export const navbarData = [
    {href: '/', section: 'About'}, 
    {href: '#technologies', section: 'Technologies'}, 
    {href: '#projects', section: 'Projects'}, 
    {href: '#contact', section: 'Contact'}
]

export const projectsData = [
    {name: 'E-commerce', image: ecomm, techs:[ <CssIcon />, <SanityIcon />, <ReactIcon />, <NextIcon />], site: 'https://ecommerce-project-tawny.vercel.app', github:'https://github.com/LuzzanD/ecommerce-project'},
    {name: 'Portfolio', image: port, techs:[<TailwindIcon />, <ReactIcon />, <NextIcon />], site: '', github:'https://github.com/LuzzanD/Portfolio'},
    {name: 'Quiz', image: quiz, techs:[<HtmlIcon />, <CssIcon />, <ReactIcon />], site: 'https://andrijasquizical.netlify.app', github:'https://github.com/LuzzanD/Quiz'},
    {name: 'Colour Scheme', image: scheme, techs:[<HtmlIcon />, <CssIcon />, <JavaScriptIcon />], site: 'https://andrijascolorscheme.netlify.app', github:'https://github.com/LuzzanD/Color-scheme-generator'},
    {name: 'Shopping Cart', image: cart, techs:[<HtmlIcon />, <CssIcon />, <JavaScriptIcon />], site: 'https://restaurantordering.netlify.app', github:'https://github.com/LuzzanD/Restaurant-Ordering'},
    {name: 'Spotify Clone', image:'', techs:[<TailwindIcon />, <ReactIcon />, <RapidApiIcon />, < ReduxIcon/>], site: '/', github:''}
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
    {link: 'andrija0stojanovic@gmail.com', href:'mailto:andrija0stojanovic@gmail.com', icon: <HiMailIcon/>},
    {link: 'www.linkedin.com/in/andrija-stojanović-1512411a6', href:'https://www.linkedin.com/in/andrija-stojanović-1512411a6', icon: <AiFillLinkedinIcon/>},
    {link: '+381645696513', href:'tel:+381645696513', icon: <AiFillPhoneIcon/>},
]
