// TODO: add code here
//sort function
function compare( a, b, ) {
    if ( a.hoursInSpace < b.hoursInSpace ){
      return -1;
    }
    if ( a.hoursInSpace > b.hoursInSpace ){
      return 1;
    }
    return 0;
  }



fetch("https://handlers.education.launchcode.org/static/astronauts.json")
.then((res) => {
    res.json().then((json) => {
        let container = document.getElementById("container");
        let count = document.getElementById("count")
        const astronautArr = json;
        //sort array by hours in space
        astronautArr.sort(compare)
        count.innerText = `${astronautArr.length} Astronauts`
        // astronautArr.sort()
        for (let i = 0; i < astronautArr.length; i++){
            const currentAstronaut = astronautArr[i];
            let skillList = currentAstronaut.skills.join(', ');
        
            container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${currentAstronaut.firstName} ${currentAstronaut.lastName}</h3>
                        <ul>
                        <li>Hours in space: ${currentAstronaut.hoursInSpace}</li>
                        <li id="active${i}">Active: ${currentAstronaut.active}</li>
                        <li>Skills: ${skillList}</li>
                        </ul>
                </div>
            <img class="avatar" src="${currentAstronaut.picture}">
            </div>
            `
            if (currentAstronaut.active === true){
                const active = document.getElementById(`active${i}`)
                active.style.color = "green"
            }
        };
    });
});


