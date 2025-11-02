const apiEndPoint = "https://dummyjson.com/users";

let currentPage = 1;
const limit = 8;

document.addEventListener("DOMContentLoaded", () => {
  fetchUsers(currentPage);
});

async function fetchUsers(page) {

  // page will represent the page count, which was reference to action skip

  // Async can be called like below or above

  // const fetchUsers = async () => {
  try {

    const loader = document.getElementById("loader");
    // const teamContainer = document.getElementById('teamContainer');
    const errorBox = document.getElementById('error');

    loader.style.display = 'block';
    errorBox.style.display = 'null';

    const skip = (page - 1) * limit;
    // skip fn will the skip the first set of users as per above formula, 
    // based on skip fn only pagination will work
    // If we don't include skip fn, then first set of users only will be displayed
    const url = `${apiEndPoint}?limit=${limit}&skip=${skip}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new console.error(`Server Error :${response.status}`);
    }

    const data = await response.json();
    renderTeamMembers(data.users);
    updatePaginationButtons(data.total);

  } catch (error) {
    console.error("Error fetching team data:", error);
    errorBox.textContent = "Failed to load team members. Please try again later.";
    errorBox.style.display = "block";
  } finally {
    loader.style.display = 'none';
  }
}

// Pagination function started

const prevbtn = document.getElementById('prevbtn');
const nextbtn = document.getElementById('nextbtn');
const pageinfo = document.getElementById('pageinfo');

prevbtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    fetchUsers(currentPage);
  }
});

nextbtn.addEventListener('click', () => {
  currentPage++;
  fetchUsers(currentPage);
});

function updatePaginationButtons(total) {
  const totalPages = Math.ceil(total / limit);
  pageinfo.textContent = `Page ${currentPage} of ${totalPages}`;

  // Disabling buttons at first and last boundaries
  prevbtn.disabled = currentPage === 1;
  nextbtn.disabled = currentPage === totalPages;
}

// Rendering function started

function renderTeamMembers(users = []) {
  const teamContainer = document.getElementById('teamContainer');
  teamContainer.innerHTML = "";

  if (users.length === 0) {
    teamContainer.innerHTML = '<p> No team member found </p>'
    return;
  }

  users.forEach((user) => {
    const { firstName, lastName, image, company } = user;
    const card = document.createElement('div');
    card.innerHTML = `
      <img src ="${image}" alt="${firstName}"/>
      <h3>${firstName} ${lastName} </h3>
      <p><strong>Role:</strong> ${company?.title || "Not Avaialble"}</p>
      <p><strong>Company:</strong> ${company?.name || "Unknown"}</p>
      `;

    teamContainer.appendChild(card);
  });
}

// const btn = document.getElementById('btn');
// btn.addEventListener('click', fetchUsers);