// partners.js
import tamstore from "../assets/partners/tamstore.jpg";
import apus from "../assets/partners/aplus.jpg";
import araz from "../assets/partners/araz.jpg";
import oba from "../assets/partners/oba.jpg";
import milla from "../assets/partners/milla.jpg";
import rahat from "../assets/partners/rahat.jpg";
import bazarstore from "../assets/partners/bazarstore.jpg";
import almarket from "../assets/partners/almarket.jpg";
import neptun from "../assets/partners/neptun.jpg";
import bravo from "../assets/partners/bravo.jpg";
import millennium from "../assets/partners/millennium.jpg";
import iceland from "../assets/partners/iceland.jpg";
import azersun from "../assets/partners/azersun.jpg";
import merano from "../assets/partners/merano.jpg";
import allbuy from "../assets/partners/allbuy.jpg";
import haciTurqay from "../assets/partners/haci-turqay.jpg";
import qayali from "../assets/partners/qayali.jpg";

// B2C Partners Images
import dehgah from "./../assets/partners-products/dehgah.jpg";
import venek from "./../assets/partners-products/venek.jpg";
import zanossi from "./../assets/partners-products/zanossi.jpg";
import tedai from "./../assets/partners-products/tedai.jpg";
import caygah from "./../assets/partners-products/caygah.jpg";
import qemze from "./../assets/partners-products/qemze.jpg";

export const partners = [
    // B2C Partners
    {
        name: "Araz",
        imgUrl: araz,
        type: "b2c",
        descKey: "partners.araz-desc",
        productsImg: [dehgah, zanossi, tedai, caygah],
    },
    {
        name: "Bravo",
        imgUrl: bravo,
        type: "b2c",
        descKey: "partners.bravo-desc",
        productsImg: [dehgah, venek, qemze],
    },
    {
        name: "Bazarstore",
        imgUrl: bazarstore,
        type: "b2c",
        descKey: "partners.bazar-store--desc",
        productsImg: [dehgah, venek],
    },
    {
        name: "Tamstore",
        imgUrl: tamstore,
        type: "b2c",
        descKey: "partners.tamstore-desc",
        productsImg: [dehgah],
    },
    {
        name: "Rahat Supermarket",
        imgUrl: rahat,
        type: "b2c",
        descKey: "partners.rahat-desc",
        productsImg: [dehgah],
    },
    {
        name: "A Plus",
        imgUrl: apus,
        type: "b2c",
        descKey: "partners.a-plus-desc",
        productsImg: [dehgah, venek],
    },
    {
        name: "Neptun",
        imgUrl: neptun,
        type: "b2c",
        descKey: "partners.neptun-desc",
        productsImg: [dehgah, venek],
    },
    {
        name: "OBA",
        imgUrl: oba,
        type: "b2c",
        descKey: "partners.oba-desc",
        productsImg: [zanossi],
    },
    {
        name: "AL Market",
        imgUrl: almarket,
        type: "b2c",
        descKey: "partners.al-market-desc",
        productsImg: [venek],
    },
    {
        name: "Qayalı",
        imgUrl: qayali,
        type: "b2c",
        descKey: "partners.qayali-desc",
        productsImg: [dehgah, venek],
    },

    // B2B Partners
    {
        name: "Azersun",
        imgUrl: azersun,
        type: "b2b",
        descKey: "partners.azersun-desc",
    },
    {
        name: "Milla",
        imgUrl: milla,
        type: "b2b",
        descKey: "partners.milla-desc",
    },
    {
        name: "Iceland",
        imgUrl: iceland,
        type: "b2b",
        descKey: "partners.iceland-desc",
    },
    {
        name: "Millennium",
        imgUrl: millennium,
        type: "b2b",
        descKey: "partners.millennium-desc",
    },
    {
        name: "Merano",
        imgUrl: merano,
        type: "b2b",
        descKey: "partners.merano-desc",
    },
    {
        name: "Allbuy",
        imgUrl: allbuy,
        type: "b2b",
        descKey: "partners.allbuy-desc",
    },
    {
        name: "Haci Turqay",
        imgUrl: haciTurqay,
        type: "b2b",
        descKey: "partners.haci-turqay-desc",
    },
];
