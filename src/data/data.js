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
        firmName: "PiggyBank",
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
                        h4: "We know how large objects will act, We know how are objects will act, We know",
                        price: "$16.48",
                        altText: 'SUMMER 2020 Products',
                        caption: 'SUMMER 2020',
                        src: images.home.heroMan.heroman,
                        key: 1,
                    },
                    {
                        h5: "WINTER 2020",
                        h1: "Vita Classic Product",
                        h4: "We know how large objects will act, We know how are objects will act, We know",
                        price: "$16.48",
                        altText: 'SUMMER 2020 Products',
                        caption: 'SUMMER 2020',
                        src: images.home.heroMan.heroman,
                        key: 2,
                    },
                ]
        },
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
        featuredPostsText: {
            h6: "Practice Advice",
            h3: "Featured Posts",
            p: "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
        },
        featuredPosts: [
            {
                img: images.home.featuredPosts.imageFeaturedOne,
                h4: "Loudest à la Madison #1 (L'integral)",
                p: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
                date: "22 April 2021",
                text: "10 comments",
                learnMore: "Learn More",
                id: 1,
                links: ["Google", "Trending", "New"],
            },
            {
                img: images.home.featuredPosts.imageFeaturedTwo,
                h4: "Loudest à la Madison #1 (L'integral)",
                p: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
                date: "22 April 2021",
                text: "10 comments",
                learnMore: "Learn More",
                id: 2,
                links: ["Google", "Trending", "New"],
            },
            {
                img: images.home.featuredPosts.imageFeaturedThree,
                h4: "Loudest à la Madison #1 (L'integral)",
                p: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
                date: "22 April 2021",
                text: "10 comments",
                learnMore: "Learn More",
                id: 3,
                links: ["Google", "Trending", "New"],
            }
        ],
        footer: {
            title: "PinkyPiggy",
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
        },
    },
    about: {
        img: images.about.aboutImage,
        video: images.about.video,
        h5: "ABOUT COMPANY",
        h1: "ABOUT US",
        h4: "We know how large objects will act, but things on a small scale",
        btnText: "Get Quote Now",
        h2: "Problems trying",
        p: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.",
        text: "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
        clientsHeader: "Big Companies Are Here",
        clientsText: "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
        containerH5: "WORK WITH US",
        containerH2: "Now Let’s grow Yours",
        containerText: "The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th",
        containerBtn: "Button",
        containerImg: images.about.AboutWoman,
        metrics: {
            one: "15K",
            two: "150K",
            three: "15",
            four: "100+"
        },
        metricsTitle: {
            one: "Happy Customers",
            two: "Monthly Visitors",
            three: "Countries  Worldwide",
            four: "Top Partners"
        },
        teamContainerText: {
            h2: "Meet Our Team",
            text: "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
        },
    },
    team: {
        womanCategory: {
            womanImageOne: images.team.teamWomanOne,
            womanImageTwo: images.team.teamWomanTwo,
            womanImageThree: images.team.teamWomanThree,
            womanImageFour: images.team.teamWomanFour,
            womanImageFive: images.team.teamWomanFive,
        },
        socialFooter: {
            h2: "Start your 14 days free trial",
            h6: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.",
            btnText: "Try it free now",
        }

    },
    shop: {
        categories: [
            {
                title: "CLOTHS",
                amount: "5 Items",
                img: images.categoryCard.womanCategoryOne,
                id: 1,
            },
            {
                title: "CLOTHS",
                amount: "5",
                img: images.categoryCard.womanCategoryTwo,
                id: 2
            },
            {
                title: "CLOTHS",
                amount: "5",
                img: images.categoryCard.womanCategoryThree,
                id: 3
            },
            {
                title: "CLOTHS",
                amount: "5",
                img: images.categoryCard.womanCategoryFour,
                id: 4
            },
            {
                title: "CLOTHS",
                amount: "5",
                img: images.categoryCard.womanCategoryFive,
                id: 5
            },
        ],

    },
    productPage: {
        name: "Floating Phone",
        rate: 4,
        reviews: 10,
        price: "$1,139.33",
        availability: "In Stock",
        descriptionShort: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        color: ["blue", "green", "orange", "black"],
        slides: [
            images.productPageSlider.productSliderOne,
            images.productPageSlider.productSliderTwo,
        ],
        detailImage: images.productPageSlider.productDetail,
    },
    productPageCards: {
        productCards: [
            {
                img: images.productPageCard.productPageCardOne,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                id: 1,
            },
            {
                img: images.productPageCard.productPageCardTwo,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                id: 2,
            },
            {
                img: images.productPageCard.productPageCardThree,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                id: 3,
            },
            {
                img: images.productPageCard.productPageCardFour,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                id: 4,
            },
            {
                img: images.productPageCard.productPageCardFive,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                id: 5,
            },
            {
                img: images.productPageCard.productPageCardSix,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                id: 6,
            },
            {
                img: images.productPageCard.productPageCardSeven,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                id: 7,
            },
            {
                img: images.productPageCard.productPageCardEight,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                id: 8,
            },
        ]
    },
    contact: {
        img: images.contact.contactImageFamily,
        h5: "CONTACT US",
        h1: "Get in touch today!",
        h4: "We know how large objects will act, but things on a small scale just do not act that way.",
        phone: "Phone ; +451 215 215",
        fax: "Fax : +451 215 215"
    },
    global: {
        productCards: [
            {
                img: images.shop.imageone,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 1,
            },
            {
                img: images.shop.imagetwo,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 2,
            },
            {
                img: images.shop.imagethree,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 3,
            },
            {
                img: images.shop.imagefour,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 4,
            },
            {
                img: images.shop.imagefive,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 5,
            },
            {
                img: images.shop.imagesix,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 6,
            },
            {
                img: images.shop.imageseven,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 7,
            },
            {
                img: images.shop.imageeight,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 8,
            },
            {
                img: images.shop.productOne,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 9,
            },
            {
                img: images.shop.productTwo,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 10,
            },
            {
                img: images.shop.productThree,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 11,
            },
            {
                img: images.shop.productFour,
                category: "Graphic Design",
                product: "English Department",
                oldPrice: "$16.48",
                newPrice: "$6.48",
                colors: ["blue", "green", "orange", "purple"],
                id: 12,
            },
        ],
        teamCards: [
            {
                img: images.about.teamContainerOne,
                h5: "Username",
                h6: "Profession",
            },
            {
                img: images.about.teamContainerTwo,
                h5: "Username",
                h6: "Profession",
            },
            {
                img: images.about.teamContainerThree,
                h5: "Username",
                h6: "Profession",
            },
            {
                img: images.about.teamContainerNewOne,
                h5: "Username",
                h6: "Profession",
            },
            {
                img: images.about.teamContainerNewTwo,
                h5: "Username",
                h6: "Profession",
            },
            {
                img: images.about.teamContainerNewThree,
                h5: "Username",
                h6: "Profession",
            },
            {
                img: images.about.teamContainerNewFive,
                h5: "Username",
                h6: "Profession",
            },
            {
                img: images.about.teamContainerNewEight,
                h5: "Username",
                h6: "Profession",
            },
            {
                img: images.about.teamContainerNewNine,
                h5: "Username",
                h6: "Profession",
            }

        ],
    }

}