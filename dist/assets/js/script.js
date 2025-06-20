function carousel() {
  return {
    active: 0,

    slides: [
      {
        image:
          "https://res.cloudinary.com/temmarie/image/upload/v1750421065/Investment_hocfhn.webp",
        title: "Investment Facilitation",
        subtitle:
          "Navigate UK business entry with expert guidance on location, staffing, compliance, and more.",
        description:
          "At WeRep, we help you assess and launch your UK operations with personalized support—covering market entry, legal structures, staffing strategies, and regulatory compliance.",
      },
      {
        image:
          "https://res.cloudinary.com/temmarie/image/upload/v1750421065/delivery_bvuyhc.webp",
        title: "Operations & Logistics",
        subtitle:
          "We act as your local team—handling logistics, vendors, deliveries, and in-country oversight.",
        description:
          "At WeRep, we from coordinating supply chains to managing deliveries and local vendors, we ensure smooth day-to-day operations across the UK.",
      },
      {
        image:
          "https://res.cloudinary.com/temmarie/image/upload/v1750423996/training_ms5omb.webp",
        title: "Training & Development",
        subtitle:
          "We handle every training detail—from airport pickup to course coordination—for your team’s development.",
        description:
          "At WeRep, we organize custom training programs and logistics for your staff, including accommodation, transportation, and local coordination.",
      },
      {
        image:
          "https://res.cloudinary.com/temmarie/image/upload/v1750423996/seminar_qinrzl.webp",
        title: "Event Representation",
        subtitle:
          "We attend events, seminars, and meetings on your behalf—ensuring your business is visible.",
        description:
          "At WeRep, we no need to travel—our team represents your brand at strategic events, collects insights, and ensures your presence is felt where it matters.",
      },
      {
        image:
          "https://res.cloudinary.com/temmarie/image/upload/v1750421066/meetng_ofdczv.webp",
        title: "Meetings & Conferences",
        subtitle:
          "We attend, report, and advocate on your behalf at key UK meetings or conferences.",
        description:
          "At WeRep, we join meetings with potential partners, clients, or institutions on your behalf, providing detailed reports and live feedback as needed.",
      },
      {
        image:
          "https://res.cloudinary.com/temmarie/image/upload/v1750421065/product_vswur3.webp",
        title: "Product Inspection",
        subtitle:
          "We perform detailed visual inspections (live or recorded) to ensure your satisfaction before approval or shipping.",
        description:
          "At WeRep, we verify product quality, packaging, and specifications—offering peace of mind before payments, approvals, or shipment dispatch.",
      },
      {
        image:
          "https://res.cloudinary.com/temmarie/image/upload/v1750421065/warehouse_mic43d.webp",
        title: "Warehousing & Storage",
        subtitle:
          "We provide secure, scalable storage across the UK tailored to your distribution and budget needs.",
        description:
          "At WeRep, we offer flexible storage solutions cater to various inventory sizes, ensuring safe and convenient access to your goods anytime.",
      },
      {
        image:
          "https://res.cloudinary.com/temmarie/image/upload/v1750421065/delivery_bvuyhc.webp",
        title: "Cargo Clearance & Delivery",
        subtitle:
          "Full-service customs clearance, delivery or forwarding—compliant, timely, and stress-free.",
        description:
          "At WeRep we, manage the complexities of customs, taxes, and UK border regulations, ensuring prompt delivery or forwarding of your goods.",
      },
      {
        image:
          "https://res.cloudinary.com/temmarie/image/upload/v1750421065/shopping_zvbj0b.webp",
        title: "Personal Shopper",
        subtitle:
          "Whether luxury or essentials, we purchase as instructed and deliver internationally, discreetly and securely.",
        description:
          "At WeRep we, act on your behalf to buy specified items in the UK and deliver them with confidentiality, efficiency, and accuracy.",
      },
      {
        image:
          "https://res.cloudinary.com/temmarie/image/upload/v1750423996/airport_bu37bm.webp",
        title: "Airport Pickups & Accommodation",
        subtitle: "Travel and lodging support for you or your team in the UK",
        description:
          "At WeRep we, offer smooth airport pickups and book suitable accommodations for business or personal visits—ensuring safety, comfort, and convenience.",
      },
    ],

    start() {
      this.timer = setInterval(() => {
        this.next();
      }, 15000);
    },
    next() {
      this.active = (this.active + 1) % this.slides.length;
    },
    prev() {
      this.active = (this.active - 1 + this.slides.length) % this.slides.length;
    },
  };
}

const form = document.getElementById("contactForm");
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const fullNameError = document.getElementById("fullNameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", (e) => {
  let isValid = true;

  if (!fullNameInput.validity.valid) {
    fullNameError.classList.remove("hidden");
    isValid = false;
  } else {
    fullNameError.classList.add("hidden");
  }

  if (!emailInput.validity.valid) {
    emailError.classList.remove("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }

  if (!messageInput.value.trim()) {
    messageError.classList.remove("hidden");
    isValid = false;
  } else {
    messageError.classList.add("hidden");
  }

  if (!isValid) {
    e.preventDefault();
  }
});
