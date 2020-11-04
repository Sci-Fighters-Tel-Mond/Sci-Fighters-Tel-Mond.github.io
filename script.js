const team_data_element = document.getElementById("team_data");


const getAndDisplayTeamData = async() => {
    while (team_data_element.firstChild) {
        team_data_element.removeChild(team_data_element.lastChild);
    }

    console.log("getting");
    const response = await fetch("https://ftc-scouting-server.herokuapp.com/get_team_data");
    const data = (await response.json())["data"];

    const lines = data.split("\n");
    const headerLine = lines[0];


    


    const headers = headerLine.split(/, |,/);
    const headers_element = document.createElement("tr");
    for (const header of headers) {
        const elt = document.createElement("th");
        elt.textContent = header;
        headers_element.appendChild(elt);
    }
    team_data_element.appendChild(headers_element);



    const dataLines = lines.slice(1);

    for (const line of dataLines) {
        const row = line.split(/, |,/);
        // console.log("row", row);
        const row_element = document.createElement("tr");
        for (const entrie of row) {
            const elt = document.createElement("td");
            elt.textContent = entrie;
            row_element.appendChild(elt);
        }
        team_data_element.appendChild(row_element);
    }
};
getAndDisplayTeamData();
setInterval(getAndDisplayTeamData, 10000);