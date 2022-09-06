import axios from 'axios';
import { signupService } from './signUpService';
import { loginService } from './loginService'
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const userDetails = {
    username: 'johndoe',
    password: 'john1234doe'
}

const signUpData = {
    firstname: 'john',
    lastname: 'doe',
    username: 'johnDoe',
    password:'john123doe'
}
const user={
    _id: '1',
    firstName: 'jonh',
    lastName: 'Doe',
    username: 'johndoe',
    password: 'john1234doe',
    createdAt: '04/09/2022',
    updatedAt: '04/09/2022',
    email: 'jonhdoe@gmail.com',
    avatarURL: 'avatarUrl',
    followers: [],
    following: [],
    bookmarks: [],
    bio: 'bio',
    website: 'https://johndoe.com',
    id: '1',
}
const response = {
    data: { foundUser: user, encodedToken: 'abcdefg' },
    status:200
}
const signUpResponse = {
    data: { createdUser: user, encodedToken: 'abcdefg' },
    status: 201,
    statusText:'Created'
}

describe('Testing Login service', () => {


    describe('Login Service API call', () => {
        beforeEach(() => {
            mockedAxios.post.mockResolvedValue(
                response
            );
        })
            test('Should get response as an object with keys: data and status', async () => {
                const loginResponse = await loginService(userDetails);
                expect(loginResponse).toHaveProperty('data');
                expect(loginResponse).toHaveProperty('status')
            })
            test('Should call endpoint with given email & password', async () => {
                 await loginService(userDetails)
                expect(mockedAxios.post).toBeCalledWith('/api/auth/login',userDetails)
            })
    })
    
    describe('Login service failing', () =>{
        beforeEach(()=> {
            mockedAxios.post.mockRejectedValue({message:'Invalid credentials. Could not find and existing user'})
        })

        test('it should reject with message invalid credentials', async () => {
            await expect(loginService(userDetails)).rejects.toEqual({message:'Invalid credentials. Could not find and existing user'})
        })
    })
})

describe('Signup service API calls', () => {

    describe('Positive test', () => {
        beforeEach(() => {
            mockedAxios.post.mockResolvedValue(signUpResponse)
        })
        test('should call sign up endpoint with username,password,firstname,lanstname', async () => {
            await signupService(signUpData);
            expect(mockedAxios.post).toBeCalledWith('/api/auth/signup',signUpData)
        })
    
        test('should get response object with keys:data,status and stausText', async () => {
            const response = await signupService(signUpData);
            expect(response).toHaveProperty('data')
            expect(response.data).toEqual(signUpResponse.data);
            expect(response).toHaveProperty('status');
            expect(response.status).toEqual(201);
            expect(response).toHaveProperty('statusText');
            expect(response.statusText).toEqual('Created');
        })
    })
    describe('Negative test', () => {
        beforeEach(() => {
            mockedAxios.post.mockRejectedValue({message:'user already has an account'})
        })
        test('should reject with message user already has an account', async () => {
            await expect(signupService(signUpData)).rejects.toEqual({message:'user already has an account'})
        })
    })
    
})