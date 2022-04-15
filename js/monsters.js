//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  //   init();
  let choice = document.querySelector('input').value.toLowerCase();
  choice = choice.split(' ').join('-');
  const url = `https://www.dnd5eapi.co/api/monsters/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      // NAME
      document.querySelector('h2').innerText = `Name: ${data.name}`;
      // HIT POINTS
      document.querySelector(
        '#hitPoints'
      ).innerText = `Hit Points: ${data.hit_points}`;
      // Alignment
      document.querySelector(
        '#alignment'
      ).innerText = `Alignment: ${data.alignment}`;
      // Description
      document.querySelector(
        '#armorClass'
      ).innerText = `Armor Class: ${data.armor_class}`;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
