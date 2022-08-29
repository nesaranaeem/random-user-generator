const loadUser = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => displayUser(data.results[0]));
};

const displayUser = (user) => {
  const getElement = document.getElementById("random-user");
  getElement.innerHTML = ``;
  const createELement = document.createElement("div");
  createELement.innerHTML = `
  <div class="card d-flex align-items-center border border-0" style="background-image:
  linear-gradient(to right bottom, black, transparent),
  url('https://source.unsplash.com/random');
  );">
        <img src="${
          user.picture.large
        }" class="card-img-top img-thumbnail rounded-circle w-50" alt="${
    user.name.first
  }" />
        <div class="card-body bg-info text-dark">
        <h5 class="card-title py-3"><i class="fa-solid fa-user"></i> ${
          user.name.first
        } ${user.name.last}</h5>
          <p class="card-text">
          <i class="fa-solid fa-calendar-check"></i> ${user.dob.date.slice(
            0,
            10
          )}
          </p>
          <p class="card-text"><i class="fa-solid fa-location-dot"></i> ${
            user.location.street.number
          }, ${user.location.street.name}, ${user.location.city}, ${
    user.location.state
  }</p>
          <p class="card-text"><i class="fa-solid fa-globe"></i> ${
            user.location.country
          }</p>
          <div class="d-flex justify-content-center">
          <button onclick="loadUser()" class="btn btn-warning"><i class="fa-solid fa-user-plus"></i> Generate New</button></div>
          
        </div>
      </div>
  `;
  getElement.appendChild(createELement);
};
loadUser();
