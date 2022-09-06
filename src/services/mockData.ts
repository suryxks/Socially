export const posts = [
  {
    _id: "1",
    content: `In India, everyone is a self taught developer. Fact. Not kidding. The education part of college failed all of us.`,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstName: "Michelle",
          lastName: "Gore",
          username: "michellegore",
          avatarURL:
            "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145558/Socially/63_ncg2cv_ln8sul.jpg",
        },
        {
          firstName: "Kola",
          lastName: "Tioluwani",
          username: "itskola",
          avatarURL:
            "https://res.cloudinary.com/dxdefqayz/image/upload/v1659146031/Socially/code-beast_j4gbq1_ot5pkx.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Segun",
    lastName: "Adebayo",
    username: "segunadebayo",
    createdAt: "04/09/2022",
    updatedAt: "04/09/2022",
    avatarURL:
      "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145642/Socially/yPCbNKr8_400x400_xdc1e6_ozig9s.jpg",
    comments: [],
  },
  {
    _id: "2",
    content: `Sometimes, all the therapy you need is talking to friends.`,
    likes: {
      likeCount: 5,
      likedBy: [
        {
          firstName: "Segun",
          lastName: "Adebayo",
          username: "segunadebayo",
          avatarURL:
            "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145642/Socially/yPCbNKr8_400x400_xdc1e6_ozig9s.jpg",
        },
        {
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarURL:
            "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145944/Socially/53_yiuaqs_b0a7tt.jpg",
        },
        {
          firstName: "Dan",
          lastName: "Abramov",
          username: "danabramov",
          avatarURL:
            "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145991/Socially/dan-abramov_t3hlxr_gg9awc.jpg",
        },

        {
          firstName: "Ryan",
          lastName: "Florence",
          username: "ryanflorence",
          avatarURL:
            "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145616/Socially/ryan-florence_zapcpf_d6ijww.jpg",
        },
        {
          firstName: "jonh",
          lastName: "Doe",
          username: "johndoe",
          avatarURL: "avatarUrl",
        },
      ],
      dislikedBy: [],
    },
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    createdAt: "04/09/2022",
    updatedAt: "04/09/2022",
    avatarURL:
      "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145944/Socially/53_yiuaqs_b0a7tt.jpg",
    comments: [],
  },
];

export const user1 = {
  _id: "1",
  firstName: "jonh",
  lastName: "Doe",
  username: "johndoe",
  password: "john1234doe",
  createdAt: "04/09/2022",
  updatedAt: "04/09/2022",
  email: "jonhdoe@gmail.com",
  avatarURL: "avatarUrl",
  followers: [],
  following: [],
  bookmarks: [],
  bio: "bio",
  website: "https://johndoe.com",
  id: "1",
};

export const user2 = {
  _id: "2",
  firstName: "adarsh",
  lastName: "balika",
  username: "adarshbalika",
  password: "adarsh1234balika",
  createdAt: "04/09/2022",
  updatedAt: "04/09/2022",
  email: "adarshbalika@gmail.com",
  avatarURL: "avatarUrl",
  followers: [],
  following: [],
  bookmarks: [],
  bio: "bio",
  website: "https://adarshbalika.com",
  id: "2",
};

export const postsAfterLike = [
  {
    _id: "1",
    content: `In India, everyone is a self taught developer. Fact. Not kidding. The education part of college failed all of us.`,
    likes: {
      likeCount: 3,
      likedBy: [
        {
          firstName: "Michelle",
          lastName: "Gore",
          username: "michellegore",
          avatarURL:
            "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145558/Socially/63_ncg2cv_ln8sul.jpg",
        },
        {
          firstName: "Kola",
          lastName: "Tioluwani",
          username: "itskola",
          avatarURL:
            "https://res.cloudinary.com/dxdefqayz/image/upload/v1659146031/Socially/code-beast_j4gbq1_ot5pkx.jpg",
        },
        {
          firstName: "jonh",
          lastName: "Doe",
          username: "johndoe",
          avatarURL: "avatarUrl",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Segun",
    lastName: "Adebayo",
    username: "segunadebayo",
    createdAt: "04/09/2022",
    updatedAt: "04/09/2022",
    avatarURL:
      "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145642/Socially/yPCbNKr8_400x400_xdc1e6_ozig9s.jpg",
    comments: [],
  },
  {
    _id: "2",
    content: `Sometimes, all the therapy you need is talking to friends.`,
    likes: {
      likeCount: 5,
      likedBy: [
        {
          firstName: "Segun",
          lastName: "Adebayo",
          username: "segunadebayo",
          avatarURL:
            "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145642/Socially/yPCbNKr8_400x400_xdc1e6_ozig9s.jpg",
        },
        {
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarURL:
            "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145944/Socially/53_yiuaqs_b0a7tt.jpg",
        },
        {
          firstName: "Dan",
          lastName: "Abramov",
          username: "danabramov",
          avatarURL:
            "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145991/Socially/dan-abramov_t3hlxr_gg9awc.jpg",
        },

        {
          firstName: "Ryan",
          lastName: "Florence",
          username: "ryanflorence",
          avatarURL:
            "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145616/Socially/ryan-florence_zapcpf_d6ijww.jpg",
        },
        {
          firstName: "jonh",
          lastName: "Doe",
          username: "johndoe",
          avatarURL: "avatarUrl",
        },
      ],
      dislikedBy: [],
    },
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    createdAt: "04/09/2022",
    updatedAt: "04/09/2022",
    avatarURL:
      "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145944/Socially/53_yiuaqs_b0a7tt.jpg",
    comments: [],
  },
];
export const postsAfterDislike = [
  {
    _id: "1",
    content: `In India, everyone is a self taught developer. Fact. Not kidding. The education part of college failed all of us.`,
    likes: {
      likeCount: 3,
      likedBy: [
        {
          firstName: "Michelle",
          lastName: "Gore",
          username: "michellegore",
          avatarURL:
            "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145558/Socially/63_ncg2cv_ln8sul.jpg",
        },
        {
          firstName: "Kola",
          lastName: "Tioluwani",
          username: "itskola",
          avatarURL:
            "https://res.cloudinary.com/dxdefqayz/image/upload/v1659146031/Socially/code-beast_j4gbq1_ot5pkx.jpg",
        },
        {
          firstName: "jonh",
          lastName: "Doe",
          username: "johndoe",
          avatarURL: "avatarUrl",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Segun",
    lastName: "Adebayo",
    username: "segunadebayo",
    createdAt: "04/09/2022",
    updatedAt: "04/09/2022",
    avatarURL:
      "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145642/Socially/yPCbNKr8_400x400_xdc1e6_ozig9s.jpg",
    comments: [],
  },
  {
    _id: "2",
    content: `Sometimes, all the therapy you need is talking to friends.`,
    likes: {
      likeCount: 5,
      likedBy: [
        {
          firstName: "Segun",
          lastName: "Adebayo",
          username: "segunadebayo",
          avatarURL:
            "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145642/Socially/yPCbNKr8_400x400_xdc1e6_ozig9s.jpg",
        },
        {
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          avatarURL:
            "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145944/Socially/53_yiuaqs_b0a7tt.jpg",
        },
        {
          firstName: "Dan",
          lastName: "Abramov",
          username: "danabramov",
          avatarURL:
            "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145991/Socially/dan-abramov_t3hlxr_gg9awc.jpg",
        },

        {
          firstName: "Ryan",
          lastName: "Florence",
          username: "ryanflorence",
          avatarURL:
            "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145616/Socially/ryan-florence_zapcpf_d6ijww.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    createdAt: "04/09/2022",
    updatedAt: "04/09/2022",
    avatarURL:
      "https://res.cloudinary.com/dxdefqayz/image/upload/v1659145944/Socially/53_yiuaqs_b0a7tt.jpg",
    comments: [],
  },
];