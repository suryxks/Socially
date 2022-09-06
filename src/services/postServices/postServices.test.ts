import { post } from './../../app/types';
import axios from "axios";
import { posts,user1,postsAfterLike ,postsAfterDislike} from '../mockData';
import {
    getPostsService,
    likePostService,
    dislikePostService,
    addCommentService,
    deleteCommentService,
    deletePostService,
    createPostService,
} from './postActionServices';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const userId = "1";
const postId = "1";
const token = "abacdefg";
describe('Post services', () => {
    test('get posts API call', async () => {
        mockedAxios.get.mockResolvedValue({data:posts,status:200});
        const response = await getPostsService();
        expect(response).toHaveProperty('data');
        expect(response).toHaveProperty('status');
        await (expect(getPostsService())).resolves.toEqual({data:posts,status:200})
    })

    describe('Like post service API Call', () => {
        describe('Positive test', () => {
            beforeEach(() => {
                mockedAxios.post.mockResolvedValue({data:postsAfterLike,status:200})
            })
            test('Like post called with correct endpoint and inputs',async()=> {
                await likePostService({ token, postId })
                expect(mockedAxios.post).toBeCalledWith(`/api/posts/like/${postId}`,{}, {"headers": {"authorization": "abacdefg"}})
            })
            test('should reutrn object with keys:data and status',async () => {
                const response = await likePostService({ token, postId })
                expect(response).toHaveProperty('data');
                expect(response).toHaveProperty('status');
                await expect(likePostService({token,postId})).resolves.toEqual({data:postsAfterLike,status:200})
            })
        })
        describe('Negative test', () => {
            beforeAll(() => {
                mockedAxios.post.mockRejectedValue({message:'post already liked'})
            })
            test('Should return error with message if post already liked', async () => {
                await expect(likePostService({token,postId})).rejects.toEqual({message:'post already liked'})
            })
        })
        
    })

    describe('Dislike post API Call', () => {
         
        describe('Positive test', () => {
            beforeEach(() => {
                mockedAxios.post.mockResolvedValue({data:postsAfterDislike,status:200})
            })
            test('Like post called with correct endpoint and inputs',async()=> {
                await dislikePostService({ token, postId })
                expect(mockedAxios.post).toBeCalledWith(`/api/posts/dislike/${postId}`,{}, {"headers": {"authorization": "abacdefg"}})
            })
            test('should reutrn object with keys:data and status',async () => {
                const response = await dislikePostService({ token, postId})
                expect(response).toHaveProperty('data');
                expect(response).toHaveProperty('status');
                await expect(likePostService({token,postId})).resolves.toEqual({data:postsAfterDislike,status:200})
            })
        })
        describe('Negative test', () => {
            beforeAll(() => {
                mockedAxios.post.mockRejectedValue({message:'post already disliked'})
            })
            test('Should return error with message if post already liked', async () => {
                await expect(dislikePostService({token,postId})).rejects.toEqual({message:'post already disliked'})
            })
        })
    })

})