import { getUsersService, followUserService,unfollowUserService } from "./userServices";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const user1 = {
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
const userId = "1";
const token = "abacdefg";
const user2 = {
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
const users = [user1, user2];

const followResponse = {
  data: {
    user: { ...user1, following: [user2] },
    followUser: { ...user2, followers: [user1] },
  },
  status: 200,
};
const unfollowResponse = {
    data: {
      user: { ...user1, following: [] },
      followUser: { ...user2, followers: [] },
    },
    status: 200,
  };


describe("Tests user service", () => {
  describe("get user service api call", () => {
    beforeEach(() => {
      mockedAxios.get.mockResolvedValue({ data: users, status: 200 });
    });
    test("get users should be called with the correct end point", async () => {
      await getUsersService();
      expect(mockedAxios.get).toBeCalledWith("/api/users");
    });
    test(" should return object with keys: data and status", async () => {
      const response = await getUsersService();
      expect(response).toHaveProperty("data");
      expect(response.data).toEqual(users);
      expect(response).toHaveProperty("status");
      expect(response.status).toEqual(200);
    });
  });
  describe("Follow user API call", () => {
    beforeEach(() => {
      mockedAxios.post.mockResolvedValue(followResponse);
    });
    test("followuser should be called with the correct end point and arguments", async () => {
      await followUserService({ userId, token });
      expect(mockedAxios.post).toBeCalledWith(
        `/api/users/follow/${userId}`,
        {},
        { headers: { authorization: token } }
      );
    });
    test(" should return object with keys: data and status", async () => {
      const response = await followUserService({ userId, token });
      expect(response).toHaveProperty("data");
      expect(response).toHaveProperty("status");
      await expect(followUserService({ userId, token })).resolves.toEqual(followResponse);
    });
      test('Failing test', async () => {
          mockedAxios.post.mockRejectedValue({ message: 'user already following', status: 400 })
          expect(followUserService({userId,token})).rejects.toEqual({ message: 'user already following', status: 400 })
    })
  });
    
    describe('unfollowUser API call', () => {
        beforeEach(() =>{
            mockedAxios.post.mockResolvedValue(unfollowResponse)
        })
        test('Should be called with correct end point and arguments', async () => {
            await unfollowUserService({ userId, token })
            expect(mockedAxios.post).toBeCalledWith(`/api/users/unfollow/${userId}`, {},{ headers: { authorization: token } })
        })
        test('should return object with keys :data and status', async() =>{
            const response = await unfollowUserService({ userId, token });
            expect(response).toHaveProperty('data');
            expect(response).toHaveProperty('status');
            await expect(unfollowUserService({ userId, token })).resolves.toEqual(unfollowResponse);
        })
        test('Failing test', async () => {
            mockedAxios.post.mockRejectedValue({ message: 'user already  not following', status: 400 })
            expect(unfollowUserService({userId,token})).rejects.toEqual({ message: 'user already  not following', status: 400 })
      })
    })
});

