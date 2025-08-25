import { useState } from "react";
//import "lib-utils-ts/src/globalUtils";
import Card from '../stuff/card';

const Skills = [

    // Programming
    { name: "HTML/CSS/JavaScript", type: "Software" },
    { name: "React.js", type: "Software"},
    { name: "Python", type: "Software" },
    { name: "Matplotlib, Numpy, Pandas", type: "Software" },
    { name: "Astropy", type: "Software" },
    { name: "Qiskit", type: "Software" },
    { name: "Secure Shell", type: "Software" },
    { name: "QMK Firmware", type: "Software" },

    // Hardware
    { name: "EasyEDA/KiCad", type: "Hardware" },
    { name: "Autodesk Fusion", type: "Hardware" },
    { name: "Raspberry Pi", type: "Hardware" },
    { name: "Arduino", type: "Hardware" },

    // Research
    { name: "LaTeX", type: "Research" },
    { name: "Stellarium", type: "Research" },
    { name: "Siril", type: "Research" },
    { name: "AstroImageJ", type: "Research" },

    // Certifications
    { name: "Private Pilot Certificate", type: "Certifications"},
    { name: "Part 107 Remote Pilot Certificate", type: "Certifications"}

];

const Types = ["Software", "Hardware", "Research", "Certifications"];


export const Skillset = () => {

}