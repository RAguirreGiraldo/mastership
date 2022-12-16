'use strict';

const isValidUser = localStorage.getItem('validUser');

if (isValidUser === 'false') {
  window.location.href = './index.html';
}

document.addEventListener("DOMContentLoaded", function() {
  const url = 'https://randomuser.me/api/?nat=CA&results=10&seed=same';

  const options = {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json; charset=UTF-8'
  },
  mode: 'cors'
  };

  let people = document.getElementsByClassName('people')[0];
  let html = '<h3 class="people__title">People you may know</h3>';

  fetch(url, options)
      .then(response => response.json())
      .then(json => {
        json.results.forEach(user => {
          html += `
            <div>
              <img class="people__picture" src=${user.picture.thumbnail} />
              <div>
                <h4 class="people__name">${user.name.first} ${user.name.last}</h4>
                <small>${user.location.city}</small>
              </div>
            </div>
          `
        });
        people.innerHTML = html;
      })
      .catch(console.error);
});
