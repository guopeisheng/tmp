//import fetch, { mock } from 'mock-fetch'
export const url = 'https://webdev-dummy.herokuapp.com'
let articles = [
  {
    "content": "Vivamus laoreet. Nullam tincidunt adipiscing enim. Phasellus tempus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Vivamus aliquet elit ac nisl. Fusce fermentum odio nec arcu. Vivamus euismod mauris. In ut quam vitae odio lacinia tincidunt. Praesent ut ligula non mi varius sagittis. Cras sagittis. Praesent ac sem eget est egestas volutpat. Vivamus consectetuer hendrerit lacus. Cras non dolor. Vivamus in erat ut urna cursus vestibulum. Fusce commodo aliquam arcu. Nam commodo suscipit quam. Quisque id odio. Praesent venenatis metus at tortor pulvinar varius.",
    "author": "pg23",
    "img": "/assets/2.jpg"
  },
  {
    "content": "Pellentesque dapibus hendrerit tortor. Praesent egestas tristique nibh. Sed a libero. Cras varius. Donec vitae orci sed dolor rutrum auctor. Fusce egestas elit eget lorem. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Nam at tortor in tellus interdum sagittis. Aliquam lobortis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum eu odio.",
    "author": "wl49",
    "img": "/assets/3.jpg"
  },
  {
    "content": "Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus. Ut id nisl quis enim dignissim sagittis. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Proin magna. Duis vel nibh at velit scelerisque suscipit. Curabitur turpis. Vestibulum suscipit nulla quis orci. Fusce ac felis sit amet ligula pharetra condimentum. Maecenas egestas arcu quis ligula mattis placerat. Duis lobortis massa imperdiet quam. Suspendisse potenti.",
    "author": "zl52",
    "img": "/assets/4.jpg"
  }]

export const resource = (method, endpoint, payload) => {
    const options: RequestInit = {
        method,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: ''
    }
    if (payload) {
      options.body = JSON.stringify(payload);
    }

    return fetch(`${url}/${endpoint}`, options)
        .then(r => {
            if (r.status === 200) {
                if (r.headers.get('Content-Type').indexOf('json') > 0) {
                    return r.json();
                } else {
                    return r.text();
                }
            }
            else {
                // useful for debugging, but remove in production
                console.error(`${method} ${endpoint} ${r.statusText}`);
                throw new Error(r.statusText);
            }
        })
}

export const login = (username) => {
  const user = 'pg23'
  let msg = ''
  if (username == user) msg = 'You logged in as pg23!'
  else msg = 'User does not exist!'
  return this.resource('POST', 'login', {
    username: username,
    password: 'key',
    msg: msg
  })
  .then(r=>{
    return r
  })
}

export const logout = () => {
  const user = 'pg23'
  let msg = 'You have logged out!'
  return this.resource('GET', 'login', {
    msg: msg
  })
  .then(r=>{
    return r
  })
}

export const fetchArticles = () => {
  return resource('GET', 'articles', {})
}

export const searchKey = (key) => {
  return articles.filter(article => {return article.author == key})

}

export const fetchUser = () => {
  return resource('GET', 'profile', {
    userName: 'pg23'
  })
}

export const update = () => {
  return resource('POST', 'mainpage', {
    headName: 'New headline'
  })
}
