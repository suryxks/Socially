import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */
export const users = [
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1452",
    firstName: "Michelle",
    lastName: "Gore",
    username: "michellegore",
    email: "michellegore@gmail.com",
    password: "michellegore123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145558/Socially/63_ncg2cv_ln8sul.jpg",
    following: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
        firstName: "Ryan",
        lastName: "Florence",
        username: "ryanflorence",
        avatarURL:
          "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145616/Socially/ryan-florence_zapcpf_d6ijww.jpg",
      },
    ],
    followers: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
        firstName: "Segun",
        lastName: "Adebayo",
        username: "segunadebayo",
        avatarURL:
          "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145642/Socially/yPCbNKr8_400x400_xdc1e6_ozig9s.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
        firstName: "Ryan",
        lastName: "Florence",
        username: "ryanflorence",
        avatarURL:
          "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145616/Socially/ryan-florence_zapcpf_d6ijww.jpg",
      },
    ],
    bookmarks: [],
    bio: "Proud food advocate. Gamer. Certified music specialist. Beer fanatic. Lifelong tv expert.",
    website: "https://michellegore.com",
  },
  /*****************************************2*******************************************/
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1457",
    firstName: "Segun",
    lastName: "Adebayo",
    username: "segunadebayo",
    password: "segunadebayo123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    email: "teju@gmail.com",
    avatarURL:
      "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145642/Socially/yPCbNKr8_400x400_xdc1e6_ozig9s.jpg",
    following: [
      {
        firstName: "Michelle",
        lastName: "Gore",
        username: "michellegore",
        avatarURL:
          "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145558/Socially/63_ncg2cv_ln8sul.jpg",
      },
      {
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        avatarURL:
          "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145944/Socially/53_yiuaqs_b0a7tt.jpg",
      },
    ],
    followers: [
      {
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        avatarURL:
          "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145944/Socially/53_yiuaqs_b0a7tt.jpg",
      },
    ],
    bookmarks: [],
    bio: "Chakra UI is my favorite i use it a lot",
    website: "https://github.com/segunadebayo",
  },
  /*******************************3*********************************/
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1458",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "johndoe123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    email: "johndoe@gmail.com",
    avatarURL:
      "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145944/Socially/53_yiuaqs_b0a7tt.jpg",
    followers: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1459",
        firstName: "Ryan",
        lastName: "Florence",
        username: "ryanflorence",
        avatarURL:
          "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145616/Socially/ryan-florence_zapcpf_d6ijww.jpg",
      },
    ],
    following: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1460",
        firstName: "Segun",
        lastName: "Adebayo",
        username: "segunadebayo",
        avatarURL:
          "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145642/Socially/yPCbNKr8_400x400_xdc1e6_ozig9s.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1461",
        firstName: "Kola",
        lastName: "Tioluwani",
        username: "kolatioluwani",
        avatarURL:
          "https://res.cloudinary.com/dxdefqayz/image/upload/v1659146031/Socially/code-beast_j4gbq1_ot5pkx.jpg",
      },
    ],
    bookmarks: [],
    bio: "An American singer, songwriter, actor, poet, guitarist and bass player",
    website: "https://john-doe.netlify.app/",
  },
  /**********************************************4*************************************************/
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1462",
    firstName: "Ryan",
    lastName: "Florence",
    username: "ryanflorence",
    password: "ryanflorence123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145616/Socially/ryan-florence_zapcpf_d6ijww.jpg",
    email: "ryanflorence@gmail.com",
    followers: [
      {
        firstName: "Dan",
        lastName: "Abramov",
        username: "danabramov",
        avatarURL:
          "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145991/Socially/dan-abramov_t3hlxr_gg9awc.jpg",
      },
    ],
    following: [
      {
        firstName: "Michelle",
        lastName: "Gore",
        username: "michellegore",
        avatarURL:
          "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145558/Socially/63_ncg2cv_ln8sul.jpg",
      },
      {
        firstName: "Dan",
        lastName: "Abramov",
        username: "danabramov",
        avatarURL:
          "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145991/Socially/dan-abramov_t3hlxr_gg9awc.jpg",
      },
      {
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        avatarURL:
          "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145944/Socially/53_yiuaqs_b0a7tt.jpg",
      },
    ],
    bookmarks: [],
    bio: "Remix - Build Better Websites | React Training | React Router",
    website: "https://ryanflorence.com/",
  },
  /**************************************************5**************************************************/
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1463",
    firstName: "Dan",
    lastName: "Abramov",
    username: "danabramov",
    password: "danabramov123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145991/Socially/dan-abramov_t3hlxr_gg9awc.jpg",
    email: "danabramov@gmail.com",
    following: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1464",
        firstName: "Ryan",
        lastName: "Florence",
        username: "ryanflorence",
        avatarURL:
          "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145616/Socially/ryan-florence_zapcpf_d6ijww.jpg",
      },
    ],
    followers: [],
    bookmarks: [],
    bio: "Software engineer at Facebook | Creator of Redux.",
    website: "https://overreacted.io/",
  },
  /*********************************************7*****************************************/
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f14565",
    firstName: "Kola",
    lastName: "Tioluwani",
    username: "kolatioluwani",
    password: "kolatioluwani123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    email: "kolatioluwani@gmail.com",
    avatarURL:
      "https://res.cloudinary.com/dxdefqayz/image/upload/v1659146031/Socially/code-beast_j4gbq1_ot5pkx.jpg",
    followers: [
      {
        firstName: "John",
        lastName: "Doe",
        username: "johndoe",
        avatarURL:
          "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145944/Socially/53_yiuaqs_b0a7tt.jpg",
      },
    ],
    following: [],
    bookmarks: [],
    bio: `UI Engineer + Designer 🦄. Creator of 
    @chakra_ui
     and 
    @zag_js
    .`,
    website: "https://twitter.com/TioluwaniK",
  },
];