const league_id = 2014;
const token = 'f3aadaa219f84ed68a921e7fddafa1c5';
const base_url = "https://api.football-data.org/v2/";
const standing_url = `${base_url}competitions/${league_id}/standings`;
const team_url = `${base_url}teams/`;
const teams_url = `${base_url}competitions/${league_id}/teams`;


const fetchApi = url => {
  return fetch(url, {
    mode: 'cors',
    headers: {
      'X-Auth-Token': token
    }
  });
}


function status(response) {
  if (response.status !== 200) {
    console.log("Error : " + response.status);

    return Promise.reject(new Error(response.statusText));
  } else {
    return Promise.resolve(response);
  }
}


function json(response) {
  return response.json();
}


function error(error) {
  console.log("Error : " + error);
}


function getStandings() {

  if ("caches" in window) {
    caches.match(standing_url).then(function (response) {
      if (response) {
        response.json().then(function (data) {

          let standingsHome = `
              
              <table style="font-size:12px;" class="highlight">
                <thead>
                  <tr>
                    <th colspan="3">Club</th>
                    <th>MP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>Pts</th>
                  </tr>
                </thead>
                <tbody>
          `;
          data.standings["2"].table.forEach(function (item) {
            standingsHome += `
                  <tr>
                    <td>${item.position}</td>
                    <td><a href="./team.html?id=${item.team.id}"><img style="width:25px;" src="${item.team.crestUrl}"></a></td>
                    <td><a href="./team.html?id=${item.team.id}">${item.team.name}</a></td>
                    <td>${item.playedGames}</td>
                    <td>${item.won}</td>
                    <td>${item.draw}</td>
                    <td>${item.lost}</td>
                    <td>${item.points}</td>
                  </tr>
          `;
          });
          standingsHome += `</tbody>
              </table>`;
          document.getElementById("standings").innerHTML = standingsHome;

          let standingsAway = `
              
              <table style="font-size:12px;" class="highlight">
                <thead>
                  <tr>
                    <th colspan="3">Club</th>
                    <th>MP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>Pts</th>
                  </tr>
                </thead>
                <tbody>
          `;
          data.standings["1"].table.forEach(function (item) {
            standingsAway += `
                  <tr>
                    <td>${item.position}</td>
                    <td><a href="./team.html?id=${item.team.id}"><img style="width:25px;" src="${item.team.crestUrl}"></a></td>
                    <td><a href="./team.html?id=${item.team.id}">${item.team.name}</a></td>
                    <td>${item.playedGames}</td>
                    <td>${item.won}</td>
                    <td>${item.draw}</td>
                    <td>${item.lost}</td>
                    <td>${item.points}</td>
                  </tr>
          `;
          });
          standingsAway += `</tbody>
              </table>`;

          let standingsTotal = `
              
              <table style="font-size:12px;" class="highlight">
                <thead>
                  <tr>
                    <th colspan="3">Club</th>
                    <th>MP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>Pts</th>
                  </tr>
                </thead>
                <tbody>
          `;
          data.standings["0"].table.forEach(function (item) {
            standingsTotal += `
                  <tr>
                    <td>${item.position}</td>
                    <td><a href="./team.html?id=${item.team.id}"><img style="width:25px;" src="${item.team.crestUrl}"></a></td>
                    <td><a href="./team.html?id=${item.team.id}">${item.team.name}</a></td>
                    <td>${item.playedGames}</td>
                    <td>${item.won}</td>
                    <td>${item.draw}</td>
                    <td>${item.lost}</td>
                    <td>${item.points}</td>
                  </tr>
          `;
          });
          standingsTotal += `</tbody>
              </table>`;

          let sHome = document.querySelector('.sHome');
          sHome.addEventListener('click', function () {
            document.getElementById("standings").innerHTML = standingsHome;
          });

          let sAway = document.querySelector('.sAway');
          sAway.addEventListener('click', function () {
            document.getElementById("standings").innerHTML = standingsAway;
          });

          let sTotal = document.querySelector('.sTotal');
          sTotal.addEventListener('click', function () {
            document.getElementById("standings").innerHTML = standingsTotal;
          });

          resolve(data);
        });
      }
    });
  }

  fetchApi(standing_url)
    .then(status)
    .then(json)
    .then(function (data) {
      console.log(data);
      let standingsHome = `
              
              <table style="font-size:12px;" class="highlight">
                <thead>
                  <tr>
                    <th colspan="3">Club</th>
                    <th>MP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>Pts</th>
                  </tr>
                </thead>
                <tbody>
          `;
      data.standings["2"].table.forEach(function (item) {
        standingsHome += `
                  <tr>
                    <td>${item.position}</td>
                    <td><a href="./team.html?id=${item.team.id}"><img style="width:25px;" src="${item.team.crestUrl}"></a></td>
                    <td><a href="./team.html?id=${item.team.id}">${item.team.name}</a></td>
                    <td>${item.playedGames}</td>
                    <td>${item.won}</td>
                    <td>${item.draw}</td>
                    <td>${item.lost}</td>
                    <td>${item.points}</td>
                  </tr>
          `;
      });
      standingsHome += `</tbody>
              </table>`;
      document.getElementById("standings").innerHTML = standingsHome;

      let standingsAway = `
              
              <table style="font-size:12px;" class="highlight">
                <thead>
                  <tr>
                    <th colspan="3">Club</th>
                    <th>MP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>Pts</th>
                  </tr>
                </thead>
                <tbody>
          `;
      data.standings["1"].table.forEach(function (item) {
        standingsAway += `
                  <tr>
                    <td>${item.position}</td>
                    <td><a href="./team.html?id=${item.team.id}"><img style="width:25px;" src="${item.team.crestUrl}"></a></td>
                    <td><a href="./team.html?id=${item.team.id}">${item.team.name}</a></td>
                    <td>${item.playedGames}</td>
                    <td>${item.won}</td>
                    <td>${item.draw}</td>
                    <td>${item.lost}</td>
                    <td>${item.points}</td>
                  </tr>
          `;
      });
      standingsAway += `</tbody>
              </table>`;

      let standingsTotal = `
              
              <table style="font-size:12px;" class="highlight">
                <thead>
                  <tr>
                    <th colspan="3">Club</th>
                    <th>MP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>Pts</th>
                  </tr>
                </thead>
                <tbody>
          `;
      data.standings["0"].table.forEach(function (item) {
        standingsTotal += `
                  <tr>
                    <td>${item.position}</td>
                    <td><a href="./team.html?id=${item.team.id}"><img style="width:25px;" src="${item.team.crestUrl}"></a></td>
                    <td><a href="./team.html?id=${item.team.id}">${item.team.name}</a></td>
                    <td>${item.playedGames}</td>
                    <td>${item.won}</td>
                    <td>${item.draw}</td>
                    <td>${item.lost}</td>
                    <td>${item.points}</td>
                  </tr>
          `;
      });
      standingsTotal += `</tbody>
              </table>`;

      let sHome = document.querySelector('.sHome');
      sHome.addEventListener('click', function () {
        document.getElementById("standings").innerHTML = standingsHome;
      });

      let sAway = document.querySelector('.sAway');
      sAway.addEventListener('click', function () {
        document.getElementById("standings").innerHTML = standingsAway;
      });

      let sTotal = document.querySelector('.sTotal');
      sTotal.addEventListener('click', function () {
        document.getElementById("standings").innerHTML = standingsTotal;
      });
      resolve(data);

    })
    .catch(error);
}


function getTeamById() {
  return new Promise(function (resolve, reject) {

    var urlParams = new URLSearchParams(window.location.search);
    var idParam = urlParams.get("id");

    var team_id_url = `${base_url}teams/${idParam}`;

    if ("caches" in window) {
      caches.match(team_id_url).then(function (response) {
        if (response) {
          response.json().then(function (team) {

            let teamHTML =
              `
              <div class="row card-teams">
                <div class="col s12 m4 offset-m3">
                  <div class="card hoverable center-align">
                    <div class="card-image">
                      <img src="${team.crestUrl}">
                    </div>
                    <div class="card-content center-align">
                      <p class="team-name">${team.name}</p>
                      <p class="team-founded">${team.founded}</p>
                      <a class="waves-effect add btn" id="add"><i class="medium material-icons">favorite_border</i></a>
                      <br>
                      <br>
                      <a class="waves-effect waves-light #43a047 green darken-1 btn jadwal" href="./team.html?id=${team.id}/matches?status=SCHEDULED">Scheduled</a>
                    </div>
                  </div>
                </div>
              </div>
                    `;

            teamHTML += `
              <div class="row squad">
                <div class="col m6 s12 offset-m1 squad">
                <h3 align="center">SQUAD</h3>
                  <table style="font-size:12px;" class="highlight responsive-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Nationality</th>
                        <th>Role</th>
                        <th>Position</th>
                        <th>Shirt Number</th>
                        <th>Place of Birth</th>
                      </tr>
                    </thead>
                      <tbody>

                    `;
            team.squad.forEach(function (item) {
              teamHTML += `
                      <tr>
                        <td>${item.name}</td>
                        <td>${item.nationality}</td>
                        <td>${item.role}</td>
                        <td>${item.position}</td>
                        <td>${item.shirtNumber}</td>
                        <td>${item.countryOfBirth}, ${item.dateOfBirth}</td>
                      </tr>
                    `;
            });
            teamHTML += `          
                      </tbody>
                  </table>
                </div>
              </div>
          `;

            document.getElementById("body-content").innerHTML = teamHTML;
            resolve(team);
          });
        }
      });
    }

    fetchApi(team_id_url)
      .then(status)
      .then(json)
      .then(function (team) {

        console.log(team);

        let teamHTML = `
        <div class="row card-teams">
          <div class="col s12 m4 offset-m4">
            <div class="card hoverable center-align">
              <div class="card-image">
                <img src="${team.crestUrl}">
              </div>
              <div class="card-content center-align">
                <p class="team-name">${team.name}</p>
                <p class="team-founded">${team.founded}</p>
                <a class="waves-effect add btn" id="add"><i class="medium material-icons">favorite_border</i></a>
                <br>
                <br>
                <a class="waves-effect waves-light #43a047 green darken-1 btn jadwal" href="./team.html?id=${team.id}/matches?status=SCHEDULED">Scheduled</a>
              </div>
            </div>
          </div>
        </div>
        `;

        teamHTML += `
        <div class="row squad">
          <div class="col m10 s12 offset-m1">
          <h3 align="center">SQUAD</h3>
            <table style="font-size:12px;" class="highlight responsive-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Nationality</th>
                  <th>Role</th>
                  <th>Position</th>
                  <th>Shirt Number</th>
                  <th>Place of Birth</th>
                </tr>
              </thead>
                <tbody>

                    `;
        team.squad.forEach(function (item) {
          teamHTML += `
                <tr>
                  <td>${item.name}</td>
                  <td>${item.nationality}</td>
                  <td>${item.role}</td>
                  <td>${item.position}</td>
                  <td>${item.shirtNumber}</td>
                  <td>${item.countryOfBirth}, ${item.dateOfBirth}</td>
                </tr>
                    `;
        });
        teamHTML += `          
                </tbody>
            </table>
          </div>
        </div>
          `;
        document.getElementById("teams-card").innerHTML = teamHTML;

        resolve(team);
      })
      .catch(error);
  });

}

function getScheduledById() {
  return new Promise(function (resolve, reject) {

    let urlParams = new URLSearchParams(window.location.search);
    let idParam = urlParams.get("id");

    let jadwal_id_url = `${base_url}teams/${idParam}`;

    if ("caches" in window) {
      caches.match(jadwal_id_url).then(function (response) {
        if (response) {
          response.json().then(function (data) {
            console.log(data);
            let jadwalHTML = `
                <div class="row">
                  <div class="card">
                    <div class="card-content">
                      <ul class="tabs tabs-fixed-width tab-demo z-depth-1">
                          <li class="tab sHome">Home Team</li>
                          <li class="tab sAway">Away Team</li>
                      </ul>
                    </div>
                  </div>

                  <div class="col s12 m10 offset-m1">
                    <div class="card jadwal-card horizontal">
                      <div class="card-content home-team">
                        <h5>${data.matches['0'].homeTeam.name}<h5>                     
                      </div>
                        <div class="vs">VS</div>
                      <div class="card-content away-team">
                      <h5>${data.matches['0'].awayTeam.name}</h5>
                      </div>
                      <div class="card-detail">
                      <h5>${data.matches['0'].competition.name}</h5>
                      <p>Match Day ke- ${data.matches['0'].matchday}</p>
                      </div>
                    </div>
                  </div>

                  <div class="col s12 m10 offset-m1">
                    <div class="card jadwal-card horizontal">
                      <div class="card-content home-team">
                        <h5>${data.matches['1'].homeTeam.name}<h5>                     
                      </div>
                        <div class="vs">VS</div>
                      <div class="card-content away-team">
                      <h5>${data.matches['1'].awayTeam.name}</h5>
                      </div>
                      <div class="card-detail">
                      <h5>${data.matches['1'].competition.name}</h5>
                      <p>Match Day ke- ${data.matches['1'].matchday}</p>
                      </div>
                    </div>
                  </div>

                </div>
              `;

            document.querySelector(".jadwal-team").innerHTML = jadwalHTML;

            resolve(data);
          });
        }
      });
    }

    fetchApi(jadwal_id_url)
      .then(status)
      .then(json)
      .then(function (data) {
        console.log(data);
        let jadwalHTML = `
                <div class="row">
                  <div class="card">
                    <div class="card-content">
                      <ul class="tabs tabs-fixed-width tab-demo z-depth-1">
                          <li class="tab sHome">Home Team</li>
                          <li class="tab sAway">Away Team</li>
                      </ul>
                    </div>
                  </div>

                  <div class="col s12 m10 offset-m1">
                    <div class="card jadwal-card">
                      <div class="card-content home-team">
                        <h5>${data.matches['0'].homeTeam.name}<h5>                     
                      </div>
                        <div class="vs">VS</div>
                      <div class="card-content away-team">
                      <h5>${data.matches['0'].awayTeam.name}</h5>
                      </div>
                      <div class="card-detail">
                      <h5>${data.matches['0'].competition.name}</h5>
                      <p>Match Day ke- ${data.matches['0'].matchday}</p>
                      </div>
                    </div>
                  </div>

                  <div class="col s12 m10 offset-m1">
                    <div class="card jadwal-card">
                      <div class="card-content home-team">
                        <h5>${data.matches['1'].homeTeam.name}<h5>                     
                      </div>
                        <div class="vs">VS</div>
                      <div class="card-content away-team">
                      <h5>${data.matches['1'].awayTeam.name}</h5>
                      </div>
                      <div class="card-detail">
                      <h5>${data.matches['1'].competition.name}</h5>
                      <p>Match Day ke- ${data.matches['1'].matchday}</p>
                      </div>
                    </div>
                  </div>

                </div>
              `;

        document.querySelector(".jadwal-team").innerHTML = jadwalHTML;

        resolve(data);
      })
      .catch(error);
  });
}

function getSeason() {

  if ('caches' in window) {
    caches.match(standing_url).then(function (response) {
      if (response) {
        response.json()
          .then(function (data) {
            let headingText =
              `
      <h1>${data.competition.area.name} League</h1>
      <p class="name">${data.competition.name}</p>
      <p class="tier">${data.competition.plan}</p>
      
      `;

            let seasonHtml =
              `
      <div class="col s12 m5 center-align">
        <div class="card #33691e light-green darken-4">
          <div class="card-content white-text">
            <span class="card-title">Start Date</span>
            <p>
            ${data.season.startDate}</p>
          </div>
        </div>
      </div>

      <div class="col s12 m5 offset-m1 center-align">
        <div class="card #d50000 red accent-4">
          <div class="card-content white-text">
            <span class="card-title">End Date</span>
            <p>
            ${data.season.endDate}</p>
          </div>
        </div>
      </div>
      
      <div class="col s12 m11 center-align">
        <div class="card #000000 black">
          <div class="card-content white-text">
            <span class="card-title">Last Updated</span>
            <p>
            ${data.competition.lastUpdated}</p>
          </div>
        </div>
      </div>
      
      `;
            document.querySelector('.league-tier').innerHTML += headingText;
            document.querySelector('.season').innerHTML += seasonHtml;
            resolve(data);
          });
      }
    })
  }

  fetchApi(standing_url)
    .then(status)
    .then(json)
    .then(function (data) {
      let headingText =
        `
      <h1>${data.competition.area.name} League</h1>
      <p class="name">${data.competition.name}</p>
      <p class="tier">${data.competition.plan}</p>
      
      `;

      let seasonHtml =
        `
      <div class="col s12 m5 center-align">
        <div class="card #33691e light-green darken-4">
          <div class="card-content white-text">
            <span class="card-title">Start Date</span>
            <p>
            ${data.season.startDate}</p>
          </div>
        </div>
      </div>

      <div class="col s12 m5 offset-m1 center-align">
        <div class="card #d50000 red accent-4">
          <div class="card-content white-text">
            <span class="card-title">End Date</span>
            <p>
            ${data.season.endDate}</p>
          </div>
        </div>
      </div>
      
      <div class="col s12 m11 center-align">
        <div class="card #000000 black">
          <div class="card-content white-text">
            <span class="card-title">Last Updated</span>
            <p>
            ${data.competition.lastUpdated}</p>
          </div>
        </div>
      </div>
      
      `;

      document.querySelector('.league-tier').innerHTML += headingText;
      document.querySelector('.season').innerHTML += seasonHtml;
      resolve(data);
    })
    .catch(error);
}


function getSavedTeams() {
  getAll()
    .then(function (teams) {
      console.log(teams);

      let teamsHTML = '';
      teams.forEach(function (team) {
        teamsHTML += `

          <div class="col s12 m4 card-favorite">
            <div class="card hoverable center-align">
              <div class="card-image">
                <img src="${team.crestUrl}">
              </div>
              <div class="card-content center-align">
                <p class="team-name">${team.name}</p>
                <p class="team-founded">${team.founded}</p> 
                <p class="team-founded">${team.email}</p>            
              </div>
              <div class="card-action">
                <a class="waves-effect waves-light #43a047 green darken-1 btn jadwal" href="./team.html?id=${team.id}/matches?status=SCHEDULED">Scheduled</a>
                <a class="waves-effect waves-light #43a047 green darken-1 btn delete" onclick="deleteFavorite(${team.id})">Delete</a>
              </div>
            </div>
          </div>

      `;
      });
      document.querySelector("#favorite").innerHTML = teamsHTML;
    });
}

function deleteFavorite(id) {
  const teamsCard = document.querySelector('.card');

  let askForDelete = confirm('Are you sure to delete this team from favorite?');
  if (askForDelete) {
    deleteTeams(id);
    teamsCard.style.display = 'none';
    pushNotification('succsses delete');
    getSavedTeams();
  }
}

function pushNotification(msg) {
  let title = 'Notification';
  var options = {
    body: msg,
    icon: '../icon 192x192.png',
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.ready.then(reg => {
      reg.showNotification(title, options);
    });
  } else {
    console.error('fitur notifikasi tidak di ijinkan');
  }

}

function getSavedTeamsById() {
  let urlParams = new URLSearchParams(window.location.search);
  let idParam = urlParams.get("id");

  getById(idParam).then(function (team) {
    teamHTML = '';
    let teamHTML = `
    <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img src="${team.name}" />
      </div>
    </div>
  `;

    document.getElementById("body-content").innerHTML = teamHTML;
  });
}