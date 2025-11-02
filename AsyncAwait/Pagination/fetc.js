
const apiEndPoint = "https://dummyjson.com/users";

fetch(apiEndPoint)
.then((response) => response.json())
.then((data) => {

const teamContainer = document.getElementById("teamContainer");
const loader = document.getElementById("loader");
data.users.forEach(user => {
  const { firstName, lastName, image, company } = user;
  let card = document.createElement('div');
  card.classList.add('useCard');
  card.innerHTML = `
  <img src="${image} alt="${firstName}"/>
  <h3>${firstName} ${lastName}</h3>
  <p>Role: ${company?.title || 'Not Available'}</p>
  <p>Company: ${company?.name || 'Unkown'}</p>
  `;

  teamContainer.appendChild(card);
  
});
})

.catch((error) => {console.log(error)})