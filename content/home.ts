import team from "./team.json";
import partners from "./partners.json";

export type AboutBlock = {
  title: string;
  body: string;
  image: string;
  imageRight?: boolean;
};

export type ProjectItem = {
  title: string;
  description: string;
  stats?: string;
  links: { label: string; href: string }[];
};

export const homeContent = {
  hero: {
    title: "Digital Volunteers",
    subtitle:
      "is a union of people and organizations that coordinate and offer digital solutions to support volunteers´ efforts to help those in need.",
    backgroundImage: "/images/2022/05/header.jpg",
  },
  about: [
    {
      title: "Our aim",
      body: "is to help people affected by war and to facilitate the work of volunteers. All decisions and progress of projects should be judged against the purpose of DV, not personal interests.",
      image: "/images/2022/05/help.jpg",
      imageRight: false,
    },
    {
      title: "Taboo",
      body: "we do not incite national hatred, we do not engage in political actions, and we do not supply arms or dual-use goods.",
      image: "/images/2022/05/taboo.jpg",
      imageRight: true,
    },
    {
      title: "Hierarchy vs. Agility",
      body: "we operate according to the principle of equality and self-organisation, for administrative matters and official partnerships Digitalista e.V. was established.",
      image: "/images/2022/05/equal.jpg",
      imageRight: false,
    },
    {
      title: "Openness and transparency",
      body: "internally and externally: we work according to the open-source principle to share information, IT solutions, and developments with as many people as possible; internally, we strive for transparency and maximum feedback.",
      image: "/images/2022/05/open.jpg",
      imageRight: true,
    },
  ] as AboutBlock[],
  projectsIntro: {
    title: "Our Projects",
    description:
      "We have several projects run by our members and partner teams, mainly focused on information aggregation, Telegram solutions, visualizing data, and facilitating networking. We also gather information on other significant projects in fields like matching solutions, apps, offline help, etc. so that we could better see and fulfil the potential for synergy.",
  },
  projects: [
    {
      title: "Tools for volunteers",
      description:
        "How-to guides for Telegram group management and ready-made customizable templates for information hand-outs.",
      links: [
        { label: "Best practices", href: "https://uahelp.wiki/tools" },
        { label: "Forms and templates", href: "/templates" },
      ],
    },
    {
      title: "Knowledge base (Wiki)",
      description:
        "Community-created knowledge base for Ukrainian refugees. The base also contains chapters for volunteers.",
      stats: "5.000.000 views, 470.000 users",
      links: [{ label: "UAhelp.Wiki", href: "https://uahelp.wiki/" }],
    },
    {
      title: "Maps",
      description:
        "Easy location-based visualized access to the most important things a refugee may urgently need before getting settled.",
      stats: "Over 2.000.000 views",
      links: [
        { label: "Humanitarian aid", href: "/maps/humanitarian-aid" },
        { label: "Local chats and info pages", href: "/maps/chats-and-pages" },
        { label: "Veterinarians", href: "/maps/veterinarians" },
        {
          label: "Everything for Ukraine (hotlines, BAMF offices, doctors etc.)",
          href: "/maps/everything-for-ukraine",
        },
      ],
    },
    {
      title: "Chatbots",
      description:
        "A family of city-adjustable chatbots, which can answer users' questions in Telegram groups based on prepared sets of keywords and answers, reducing the burden on administrators.",
      stats: "17 cities launched",
      links: [{ label: "Regionally adapted chatbots", href: "/chatbots-regional" }],
    },
    {
      title: "Networking",
      description:
        "Creating horizontal connections for active experience exchange between the local chats admins and information flow between the regions receiving refugees.",
      stats: "40 Local chats admins with a total audience of >70.000 members, 31 Regional arrival volunteers in 14 cities",
      links: [],
    },
    {
      title: "Video",
      description:
        "YouTube and TikTok channels with videos covering the most relevant topics for Ukrainian refugees in Germany.",
      stats: "YouTube: 9.160 subscribers, 344.561 views, 120 videos. TikTok: 41.200 subscribers, 154.300 likes, 11.000.000 views",
      links: [
        { label: "UAhelp.YouTube", href: "https://youtube.com/UAhelp" },
        { label: "TikTok", href: "https://www.tiktok.com/@uahelp_germany" },
      ],
    },
  ] as ProjectItem[],
  teamIntro: {
    title: "Our team",
    description:
      "Most of the work done by digital volunteers remains unnamed, but behind every product, there is a particular person who worked hard in their free time to get the project further. Our projects have brought together a huge number of people of different nationalities from different countries, both representatives of various NGOs and individual volunteers. THANK YOU! ❤️",
    stats: "58 Wiki editors, 487 link collectors, 50 local coordinators, 20 IT and design professionals",
  },
  team: team as { name: string; city: string; image: string }[],
  partnersIntro: {
    title: "Our partners",
    description:
      "All of the projects we participate in are aimed at connecting people, sharing information, and helping each other. We share ideas, resources, and support. We are very grateful to all of our partners, without whom none of our projects would exist.",
  },
  partners: partners as { name: string; url: string; image: string }[],
  donate: {
    title: "DONATE",
    description: "Help us to continue our efforts with humanitarian projects",
    betterplaceProjectId: 118066,
  },
  contact: {
    title: "Contact Us",
    description:
      "Have questions or need help? Use the form to reach out and we will be in touch with you as quickly as possible.",
    disclaimer:
      "Unfortunately, we cannot answer on personal requests for help 🙁 К сожалению мы не можем отвечать на персональные запросы о помощи.",
    socialLinks: [
      { service: "youtube", url: "https://www.youtube.com/channel/UC2JPDhnMtNHedB2fUrBGHdQ" },
      { service: "facebook", url: "https://www.facebook.com/digitalvolunteers.de" },
      { service: "telegram", url: "https://t.me/Digital_volunteers" },
    ],
  },
};
