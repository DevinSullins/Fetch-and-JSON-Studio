// TODO: add code here
fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( (res) => {
    res.json().then((json) => {
        let container = document.getElementById("container")
        const astronautArr = json
        for (let i = 0; i < astronautArr.length; i++){
        const currentAstronaut = astronautArr[i]
        let skillList = currentAstronaut.skills.join(', ')
        // for(skill in json[i].skills){

        // }
        container.innerHTML += `
        <div class="astronaut">
            <div class="bio">
                <h3>${astronautArr[i].firstName} ${astronautArr[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronautArr[i].hoursInSpace}</li>
                        <li>Active: ${astronautArr[i].active}</li>
                        <li>Skills: ${skillList}</li>
                    </ul>
            </div>
        <img class="avatar" src="${astronautArr[i].picture}">
        </div>
        `
        console.log(astronautArr[i])

        }
    })
});