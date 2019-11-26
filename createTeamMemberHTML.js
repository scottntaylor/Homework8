// const index = require('./index');

function teamMemberHTML(team){
    team = team[1];
    console.log(team)
    return ` <div class="card m-2" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title" id="name">${team.name}</h5>
        ${team.role ? `<h6 class="card-subtitle mb-2 text-muted">Role: <span id="role">${team.role}</span></h6>` : ''}
        <p class="card-text">
            <ul class="list-group">
                <li class="list-group-item">ID #: <span id="id">${team.id}</span></li>
                <li class="list-group-item">Email:<span id="email">${team.email}</span> </li>
                <li class="list-group-item"><span id="misc">${team.misc}</span></li>
            </ul>
        </p>
    </div>
    </div>`
    }

    module.exports = teamMemberHTML;