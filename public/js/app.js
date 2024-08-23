let map;
let polygon;

document.addEventListener("DOMContentLoaded", () => {
  map = L.map("map").setView([51.505, -0.09], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    subdomains: ["a", "b", "c"],
  }).addTo(map);

  polygon = L.polygon([], { color: "blue" }).addTo(map);

  document.getElementById("drawButton").addEventListener("click", () => {
    map.on("click", (e) => {
      polygon.addLatLng([e.latlng.lat, e.latlng.lng]);
    });
  });

  document.getElementById("submitButton").addEventListener("click", () => {
    const polygonBoundary = polygon.getLatLngs();
    sendFlightRequest(polygonBoundary);
  });
});

function sendFlightRequest(polygonBoundary) {
  const xlabel = "Polygon Boundary";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/flight-requests", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      console.log(`Received response: ${response}`);
      showResponse(response);
    } else {
      console.error(`Error: ${xhr.status}`);
    }
  };
  xhr.send(JSON.stringify({ [xlabel]: polygonBoundary }));
}

function showResponse(response) {
  const responseElement = document.getElementById("response");
  responseElement.innerHTML = "";
  const ul = document.createElement("ul");
  response.forEach((result) => {
    const li = document.createElement("li");
    li.textContent = `Flight Request Result: ${result}`;
    ul.appendChild(li);
  });
  responseElement.appendChild(ul);
}