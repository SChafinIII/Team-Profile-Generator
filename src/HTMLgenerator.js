// create Intern card
function generateInternCard(intern) {
    return `
      <div class="col-4 mt-4">
        <div class="card h-100">
          <div class="card-header">
            <h3>${intern.name}</h3>
            <h4>Intern</h4>
            <i class="material-icons">assignment_ind</i>
          </div>
          <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
          </div>
        </div>
      </div>
    `;
  }

  //create Engineer card
  function generateEngineerCard(engineer) {
    return `
      <div class="col-4 mt-4">
        <div class="card h-100">
          <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4>
            <i class="material-icons">laptop_mac</i>
          </div>
          <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
          </div>
        </div>
      </div>
    `;
  }

  // create manager card
  function generateManagerCard(manager) {
    return `
      <div class="col-4 mt-4">
        <div class="card h-100">
          <div class="card-header">
            <h3>${manager.name}</h3>
            <h4>Manager</h4>
            <i class="material-icons">content_paste</i>
          </div>
          <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
          </div>
        </div>
      </div>
    `;
  }

  // move array to page
    function generateTeamPage(teamArray) { 

        //array for cards
        const cardArray = [];

        //loop through array
        for (let i = 0; i < teamArray.length; i++) {
            const employee = data[i];
            const role = employee.getRole();

            //call intern function
            if (role === 'Intern') {
                const internCard = generateInternCard(employee);

                cardArray.push(internCard);
            }

            //call engineer function
            if (role === 'Engineer') {
                const engineerCard = generateEngineerCard(employee);

                cardArray.push(engineerCard);
            }

            //call manager function
            if (role === 'Manager') {
                const managerCard = generateManagerCard(employee);

                cardArray.push(managerCard);
            }
        }

        //join cards

        const teamCards = cardArray.join('')
        const generateTeam = generateTeamPage(teamCards);
        return generateTeam;
    }

    //export to index.html
    module.exports = generateTeamPage;