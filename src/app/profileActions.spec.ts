import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import fetch, { mock } from 'mock-fetch';
import { url, login, resource } from './profileActions';



describe('profile actions', () => {

  it('resource should be a resource', (done) => {
    const username = 'pg23'
    mock(`${url}/login`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}})
    login('pg23')
    .then(r => {
      return r.body
    })
    .then(body=>{
      expect(body.username).toEqual(username)
    })
    .then(done)
    .catch(done)

  })

  it('resource should give me the http error', (done)=> {
    login('pg23')
    .catch(err => expect(err).not.toEqual(null))
    .then(done)
  })

  it('resource should be POSTable', (done) => {
    mock(`${url}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        json: {
          userName: 'pg23',
          password: 'key'
        }
    })
    login('pg23')
    .then(r => {
      return JSON.parse(r.body)
    })
    .then( b => {
      expect(b.username).toEqual('pg23')
    })
    .then(done)
    .catch(done)
  })

  it('should update error message', (done) => {
    mock(`${url}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
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

  it('should update success message', (done) => {
    mock(`${url}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        json: {
          userName: 'pg23',
          password: 'key'
        }
    })
    login('pg23')
    .then(r => {
      expect(r.msg).toEqual('You logged in as pg23!')
    })
    .then(done)
    .catch(done)
  })

  it('should navigate', (done) => {
    mock(`${url}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        json: {
          userName: 'pg23',
          password: 'key'
        }
    })
    login('pg23')
    .then(r => {
      expect(r.url).toEqual('mainpage')
    })
    .then(done)
    .catch(done)
  })
})
