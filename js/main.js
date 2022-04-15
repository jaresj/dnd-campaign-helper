//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  const choice = document.querySelector('input').value.toLowerCase();
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      // NAME
      document.querySelector('h2').innerText = `Name: ${data.name}`;
      // CLASS
      data.classes.forEach((obj) => {
        console.log(obj.name);
        const li = document.createElement('li');
        li.textContent = obj.name;
        document.querySelector('#spellClass').appendChild(li);
      });
      // SUBCLASS
      data.subclasses.forEach((obj) => {
        console.log(obj.name);
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
