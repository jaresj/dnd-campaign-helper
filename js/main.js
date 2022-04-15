//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch);

function init() {
  document.querySelector('#spellClass').innerHTML = '';
  document.querySelector('#spellSubclass').innerHTML = '';
}

function getFetch() {
  init();
  let choice = document.querySelector('input').value.toLowerCase();
  choice = choice.split(' ').join('-');
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      // NAME
      document.querySelector('h2').innerText = `Name: ${data.name}`;
      // CLASS
      data.classes.forEach((obj) => {
        const li = document.createElement('li');
        li.textContent = obj.name;
        document.querySelector('#spellClass').appendChild(li);
      });
      // SUBCLASS
      data.subclasses.forEach((obj) => {
        // Create Li
        const li = document.createElement('li');
        // add text to li
        li.textContent = obj.name;
        // append the li to the ul
        document.querySelector('#spellSubclass').appendChild(li);
      });
      // DESCRIPTION
      document.querySelector('p').innerText = data.desc;
      // DURATION
      document.querySelector(
        '#duration'
      ).innerText = `Duration: ${data.duration}`;
      // RANGE
      document.querySelector('#range').innerText = `Range: ${data.range}`;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
