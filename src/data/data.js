import { images } from '../assest/images'

export const data = {
    header: {
        phone: "(225) 555-0118",
        mail: "michelle.rivera@example.com",
        message: "Follow Us and get a chance to win 80% off",
        socialsURL: {
            instagram: "instagram.com",
            youtube: "youtube.com",
            facebook: "facebook.com",
            twitter: "twitter.com"
        },
        firmName: "BrandName",
    },
    home: {
        heroWomen: {
            slides:
                [
                    {
                        h5: "SUMMER 2020",
                        h1: "NEW COLLECTION",
                        h4: "We know how large objects will act,",
                        h6: " but things on a small scale.",
                        src: images.home.heroWomen.heroWomenOne,
                        key: 1,
                        altText: 'Summer 2020 Products',
                    },
                    {
                        h5: "WINTER 2020",
                        h1: "NEW COLLECTION",
                        h4: "We know how large objects will act,",
                        h6: " but things on a small scale.",
                        src: images.home.heroWomen.heroWomenTwo,
                        key: 2,
                        altText: 'Winter 2020 Products',
                    },
                ]
        },
        heroMan:
        {
            slides:
                [
                    {
                        h5: "SUMMER 2020",
                        h1: "Vita Classic Product",
                        h4: "We know how large objects will act, We know",
                        h6: "how are objects will act, We know",
                        price: "$16.48",
                        altText: 'SUMMER 2020 Products',
                        caption: 'SUMMER 2020',
                        src: images.home.heroMan.heroman,
                        key: 1,
                    },
                    {
                        h5: "WINTER 2020",
                        h1: "Vita Classic Product",
                        h4: "We know how large objects will act, We know",
                        h6: "how are objects will act, We know",
                        price: "$16.48",
                        altText: 'SUMMER 2020 Products',
                        caption: 'SUMMER 2020',
                        src: images.home.heroMan.heroman,
                        key: 2,
                    },
                ]
        },
        bestSellers: [

            {
                img: images.home.bestSellers.imageone,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 1,
            },
            {
                img: images.home.bestSellers.imagetwo,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 2,
            },
            {
                img: images.home.bestSellers.imagethree,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 3,
            },
            {
                img: images.home.bestSellers.imagefour,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 4,
            },
            {
                img: images.home.bestSellers.imagefive,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 5,
            },
            {
                img: images.home.bestSellers.imagesix,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 6,
            },
            {
                img: images.home.bestSellers.imageseven,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 7,
            },
            {
                img: images.home.bestSellers.imageeight,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 8,
            },

        ],
        bestSellersText: {
            h2: "Featured Products",
            h3: "BESTSELLER PRODUCTS",
            p: "Problems trying to resolve the conflict between "
        },
        categories: {
            h3: "EDITOR’S PICK",
            p: "Problems trying to resolve the conflict between",
            man: {
                name: "MEN",
                src: images.home.categories.man,
            },
            woman: {
                name: "WOMEN",
                src: images.home.categories.woman,
            },
            accessories: {
                name: "ACCESSORIES",
                src: images.home.categories.accessories,
            },
            kids: {
                name: "KİDS",
                src: images.home.categories.kids,
            },
        },
        containerFluid: {
            h5: "SUMMER 2020",
            h2: "Part of the Neural Universe",
            h4: "We know how large objects will act, but things on a small scale.",
            src: images.home.containerFluid.containerfluid,
            buttonTextOne: "BUY NOW",
            buttonTextTwo: "READ MORE",
        },
        footer: {
            title: "Bandage",
            content: "Made With Love By Finland All Right Reserved",
            buttonTitle: "Get In Touch",
            buttonContext: "Your Email",
            buttonText: "Subscribe",
            inputSubText: "Lore imp sum dolor Amit",
            sections: [
                {
                    title: "Company Info",
                    links: ["About Us", "Carrier", "We are hiring", "Blog"],
                },
                {
                    title: "Legal",
                    links: ["About Us", "Carrier", "We are hiring", "Blog"],
                },
                {
                    title: "Features",
                    links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"],
                },
                {
                    title: "Resources",
                    links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
                },
            ],
        }
    }
}