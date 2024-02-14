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
    home:
    {
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
    },
    footer: {
        title: "Bandage",
        content: "Made With Love By Finland All Right Reserved",
        buttonTitle: "Get In Touch",
        buttonContext: "Your Email",
        buttonText: "Subscribe",
        inputSubText: "Lore imp sum dolor Amit",
        Sections: [
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
            links: [ "Business Marketing", "User Analytic", "Live Chat", "Unlimited Support" ],
          },
          {
            title: "Resources",
            links: [ "IOS & Android", "Watch a Demo", "Customers", "API" ],
          },
        ],
    }
}