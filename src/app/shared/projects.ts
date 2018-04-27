import { Project } from './project';

export const PROJECTS: Project[] = [
    {
        id: 0,
        address: "13979 SE 1st ST, Bellevue WA 98005",
        images: [
            '/assets/images/13979se1st/Entry.jpg'/*,
            '/assets/images/13979se1st/Photo-9.jpg',
            '/assets/images/13979se1st/Photo-16.jpg',
            '/assets/images/13979se1st/Photo-19.jpg',
            '/assets/images/13979se1st/Photo-28.jpg',
            '/assets/images/13979se1st/Photo-30.jpg',
            '/assets/images/13979se1st/Photo-50.jpg'*/
        ],
        price: "$2,500,000",
        featured: true,
        description: "The best house on the block!"
    },

    {
        id: 1,
        address: "13600 NE 85th ST, Bellevue WA 98008",
        images: [
            '/assets/images/house1.jpg'
        ],
        price: "$2,500,000",
        featured: true,
        description: "The best house on the block!"
    }
];