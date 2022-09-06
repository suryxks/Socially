import axios from "axios";
import { posts,postsAfterLike ,postsAfterDislike} from '../mockData';
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
const commentId='1'
const commentData = {
    text:'this is a test comment'
}
const postContent='this is a test post'
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

    describe('Comment services', () => {
        describe('Add Comment API Call', () => {
            beforeEach(() => {
                mockedAxios.post.mockResolvedValue({data:posts,status:200})
            })
            test('Should call the correct end point for comments', async () => {
                await addCommentService({ commentData, token, postId })
                expect(mockedAxios.post).toBeCalledWith(`/api/comments/add/${postId}`,{commentData},{ headers: { authorization: token } })
            })
        })
        describe('delete Comment API Call', () => {
            describe('Positive test', () => {
                beforeEach(() => {
                    mockedAxios.delete.mockResolvedValue({data:posts,status:200})
                })
                test('Should call the correct end point for comments', async () => {
                    await deleteCommentService({ token, postId,commentId })
                    expect(mockedAxios.delete).toBeCalledWith(`/api/comments/delete/${postId}/${commentId}`,{ headers: { authorization: token } })
                })
            })
            describe('Negative test', () => {
                beforeEach(() => {
                    mockedAxios.delete.mockRejectedValue({message:'comment not found'})
                })
                test('Should give error with message comment not found ', async () => {
                    await expect(deleteCommentService({token,postId,commentId})).rejects.toEqual({message:'comment not found'})
                })
            })
            
        })
        describe('Create and delete posts', () => {
            describe('create post API call', () => {
                beforeEach(() => {
                    mockedAxios.post.mockResolvedValue({data:posts,status:200})
                })
                test('should call create post with the correct end point and arguments', async () => {
                    await createPostService({ token, postContent });
                    expect(mockedAxios.post).toBeCalledWith('/api/posts',{ postData: postContent },
                    { headers: { authorization: token } })
                })
                test('should return object with keys: data and status', async () => {
                    const response = await createPostService({ token, postContent });
                    expect(response).toHaveProperty('data')
                    expect(response).toHaveProperty('status')
                    await expect(createPostService({token,postContent})).resolves.toEqual({data:posts,status:200})
                })
            })
            describe('delete post API call', () => {
                beforeEach(() => {
                    mockedAxios.delete.mockResolvedValue({data:posts,status:200})
                })
                test('should call delete post with the correct end point and arguments', async () => {
                    await deletePostService({ token, postId });
                    expect(mockedAxios.delete).toBeCalledWith(`/api/posts/${postId}`,{ headers: { authorization: token } })
                })
                test('should return object with keys: data and status', async () => {
                    const response = await deletePostService({ token, postId });
                    expect(response).toHaveProperty('data')
                    expect(response).toHaveProperty('status')
                    await expect(deletePostService({ token, postId })).resolves.toEqual({data:posts,status:200})
                })
                test('Failing case for delete post request', async () => {
                    mockedAxios.delete.mockRejectedValue({ message: 'post not found' })
                    await  expect(deletePostService({token,postId})).rejects.toEqual({ message: 'post not found' })
                })
            })
        })
        
    })

})