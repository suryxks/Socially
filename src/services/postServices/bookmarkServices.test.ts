import axios from "axios";
import { posts } from "../mockData";
import { getAllBookmarksService,addToBookmarkService, removeFromBookmarksService} from './bookmarkServices';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const token = 'abcdefg';
const postId = '1';
describe('Book mark Services', () => {
    test('gat all bookmarks API call', async () => {
        mockedAxios.get.mockResolvedValue({ data: posts, status: 200 })
        await getAllBookmarksService(token)
        expect(mockedAxios.get).toBeCalledWith('/api/users/bookmark', { headers: { authorization: token } })
        await expect(getAllBookmarksService(token)).resolves.toEqual({ data: posts, status: 200 })
    })
    describe('Add to bookmark API call', () => {
        describe('Passing case', () => {
            beforeEach(() => {
                mockedAxios.post.mockResolvedValue({ data: posts, status: 200 })
            })
            test('should call the correct endpoint with the correct arguments for add to bookmarks', async () => {
                await addToBookmarkService({ token, postId })
                expect(mockedAxios.post).toBeCalledWith(`/api/users/bookmark/${postId}`, {}, {
                    headers: { authorization: token }
                })
            })
            test('should return object with keys :data and status', async () => {
                await expect(addToBookmarkService({ token, postId })).resolves.toEqual({ data: posts, status: 200 })
            })
        })
        describe('Failing  case', () => {
            beforeEach(() => {
                mockedAxios.post.mockRejectedValue({message:'post already bookmarked'})
            })
            
            test('should return error with message post already bookmarked', async () => {
                await expect(addToBookmarkService({ token, postId })).rejects.toEqual({message:'post already bookmarked'})
            })
        })
    })
    describe('remove from  bookmark API call', () => {
        describe('Passing case', () => {
            beforeEach(() => {
                mockedAxios.post.mockResolvedValue({ data: posts, status: 200 })
            })
            test('should call the correct endpoint with the correct arguments for remove from bookmarks', async () => {
                await removeFromBookmarksService({ token, postId })
                expect(mockedAxios.post).toBeCalledWith(`/api/users/remove-bookmark/${postId}`, {}, {
                    headers: { authorization: token }
                })
            })
            test('should return object with keys :data and status', async () => {
                await expect(removeFromBookmarksService({ token, postId })).resolves.toEqual({ data: posts, status: 200 })
            })
        })
        describe('Failing  case', () => {
            beforeEach(() => {
                mockedAxios.post.mockRejectedValue({message:'post already removed from bookmarks'})
            })
            
            test('should return error with message post already bookmarked', async () => {
                await expect(removeFromBookmarksService({ token, postId })).rejects.toEqual({message:'post already removed from bookmarks'})
            })
        })
    })
})