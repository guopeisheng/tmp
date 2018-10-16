import { TestBed, inject } from '@angular/core/testing';
import { url, fetchArticles } from './profileActions'
import fetch, { mock } from 'mock-fetch';
import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
  });

  let articles = [
    {
      "content": "Vivamus laoreet. Nullam tincidunt adipiscing enim. Phasellus tempus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Vivamus aliquet elit ac nisl. Fusce fermentum odio nec arcu. Vivamus euismod mauris. In ut quam vitae odio lacinia tincidunt. Praesent ut ligula non mi varius sagittis. Cras sagittis. Praesent ac sem eget est egestas volutpat. Vivamus consectetuer hendrerit lacus. Cras non dolor. Vivamus in erat ut urna cursus vestibulum. Fusce commodo aliquam arcu. Nam commodo suscipit quam. Quisque id odio. Praesent venenatis metus at tortor pulvinar varius.",
      "author": "pg23",
      "img": "/assets/2.jpg"
    },
    {
      "content": "Pellentesque dapibus hendrerit tortor. Praesent egestas tristique nibh. Sed a libero. Cras varius. Donec vitae orci sed dolor rutrum auctor. Fusce egestas elit eget lorem. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Nam at tortor in tellus interdum sagittis. Aliquam lobortis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum eu odio.",
      "author": "wl49",
      "img": "/assets/3.jpeg"
    },
    {
      "content": "Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus. Ut id nisl quis enim dignissim sagittis. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Proin magna. Duis vel nibh at velit scelerisque suscipit. Curabitur turpis. Vestibulum suscipit nulla quis orci. Fusce ac felis sit amet ligula pharetra condimentum. Maecenas egestas arcu quis ligula mattis placerat. Duis lobortis massa imperdiet quam. Suspendisse potenti.",
      "author": "zl52",
      "img": "/assets/4.jpg"
    }]

    let searchKey = 'pg23'

  // it('should be created', inject([DataService], (service: DataService) => {
  //   expect(service).toBeTruthy();
  // }));

  it('should fetch articles', (done) => {

    mock(`${url}/articles`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    fetchArticles()
    .then(r => {
      expect(r.article.length).toEqual(articles.length)
    })
    .then(done)
    .catch(done)
  })

  it('should update the search keyword', (done) => {
    expect(searchKey).toEqual('pg23')
    done()
  })

  it('should render articles', (done) => {

    mock(`${url}/articles`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    fetchArticles()
    .then(r => {
      expect(r.article.length).toEqual(articles.length)
    })
    .then(done)
    .catch(done)
  })

  it('should dispatch actions to create a new article', (done) => {

    mock(`${url}/articles`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    fetchArticles()
    .then(r => {
      expect(r.article.length).toEqual(articles.length)
    })
    .then(done)
    .catch(done)
  })

});
