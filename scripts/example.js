
const data_container = document.getElementById("data");
const API_URL = "https://ghibliapi.herokuapp.com/films/";
let appendString = "";

window.onload = function () {
  fetchData();
};

function fetchData() {
  let request = new XMLHttpRequest();
  request.open("GET", API_URL);
  request.send();
  request.onload = () => {
    console.log("REQUEST: ", request);

    if (request.status == 200) {
      console.log("RAW JSON: ", JSON.parse(request.response));
      let json = JSON.parse(request.response);

      for (let i = 0; i < json.length; i++) {
        let obj = json[i];
        console.log("ID: ", obj.id);

        appendString = `<div class="card">
                    <div class="text">
                      <h2>
                        <b>${obj.title}</b>
                      </h2>
                      <p>${obj.description}</p>

                      <h4>
                        <b>Director:</b>
                      </h4>
                      <p>${obj.director}</p>

                      <h4>
                        <b>Producer:</b>
                      </h4>
                      <p>${obj.producer}</p>

                      <h4>
                        <b>Release Date:</b>
                      </h4>
                      <p>${obj.release_date}</p>
                    </div>
                    </div>`;

        data_container.innerHTML += appendString;
      }
    } else {
      console.log("ERROR: ${request.status} ${request.statusText}");
    }
  };
}

