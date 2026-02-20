import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

export const navbarlinks = [
    {
        id: 1,
        title: "Início",
        href: "/",
    },
    {
        id: 2,
        title: "Celulares",
        href: "/celulares",
    },
    {
        id: 3,
        title: "Sobre Nós",
        href: "/sobre",
    },
];

export const socialLinks = [
    {
        id: 1,
        title: "Facebook",
        href: "https://www.facebook.com",
        icon: <FaFacebookF />,
    },
    {
        id: 2,
        title: "Twitter",
        href: "https://www.twitter.com",
        icon: <FaTwitter />,
    },
    {
        id: 3,
        title: "Instagram",
        href: "https://www.instagram.com",
        icon: <FaInstagram />,
    },
];
