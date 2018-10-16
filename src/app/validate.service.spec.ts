import { TestBed, inject } from '@angular/core/testing';
import fetch, { mock } from 'mock-fetch';
import { url, login, resource, logout, fetchUser, update } from './profileActions';
import { ValidateService } from './validate.service';

describe('ValidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateService]
    });
  });

  // it('should be created', inject([ValidateService], (service: ValidateService) => {
  //   expect(service).toBeTruthy();
  // }));
  it('should log in a user', (done) => {
    const username = 'pg23'
    mock(`${url}/login`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    login('pg23')
      .then(r => {
        return r.body
      })
      .then(body => {
        expect(body.username).toEqual(username)
      })
      .then(done)
      .catch(done)
  })

  it('should not log in an invalid user', (done) => {
    mock(`${url}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      json: {
        userName: 'wrongUser',
        password: 'key'
      }
    })
    login('wrongUser')
      .then(r => {
        expect(r.msg).toEqual('User does not exist!')
      })
      .then(done)
      .catch(done)
  })

  it('should log out a user', (done) => {
    mock(`${url}/login`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    logout()
      .then(r => {
        expect(r.msg).toEqual('You have logged out!')
      })
      .then(done)
      .catch(done)
  })

  it("should fetch the user's profile information", (done) => {
    mock(`${url}/profile`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    fetchUser()
      .then(r => {
        expect(r.userName).toEqual('pg23')
      })
      .then(done)
      .catch(done)
  })

  it("should update headline", (done) => {
    mock(`${url}/mainpage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
    fetchUser()
      .then(r => {
        expect(r.headline).toEqual('New headline')
      })
      .then(done)
      .catch(done)
  })
});
