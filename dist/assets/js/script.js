function carousel() {
  return {
    active: 0,
    slides: [
      {
        image:
          "https://res.cloudinary.com/temmarie/image/upload/v1748248419/young-family-buying-car-dealer_f84fz0.webp",
        title: "Expert UK Business Support",
        subtitle: "Navigating the complexities of UK business operations",
        description:
          "At WeRep, we provide expert guidance and support to help businesses thrive in the UK market. From logistics to investment facilitation, we've got you covered.",
      },
      {
        image:
          "https://res.cloudinary.com/temmarie/image/upload/v1748248419/young-african-businessman-businessman-shaking-hand-front-glass-window_bwrmlf.webp",
        title: "Streamlined Logistics Solutions",
        subtitle: "Efficient and reliable logistics services for your business",
        description:
          "Our team of experts ensures that your goods are delivered on time and in perfect condition. We handle everything from customs clearance to last-mile delivery.",
      },
      {
        image:
          "https://res.cloudinary.com/temmarie/image/upload/v1748248419/african-man-black-suit_tu3raq.webp",
        title: "UK Business Representation",
        subtitle: "Expert representation for your business in the UK",
        description:
          "We provide expert representation services for businesses operating in the UK. Our team of experts will handle all aspects of your business operations, allowing you to focus on what matters most.",
      },
    ],
    start() {
      setInterval(() => {
        this.active = (this.active + 1) % this.slides.length;
      }, 8000);
    },
  };
}
