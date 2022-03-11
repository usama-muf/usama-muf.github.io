"use strict";

const account1 = {
  owner: "Mohammed Usama",
  password: 1111,
  username: "mu",
};
const account2 = {
  owner: "Usama",
  password: 2222,
  username: "usa",
};

const accounts = [account1, account2];

const openPage = document.querySelector(".open_page");
const mainContent = document.querySelector(".main__content");
const inputLoginUser = document.querySelector(".login_input--user");
const inputLoginPassword = document.querySelector(".login_input--password");

const buttonLogin = document.querySelector(".login_button");
const buttonRegister = document.querySelector(".register-button");

const name1 = document.getElementById("pname").value;
const street = document.getElementById("street").value;
const area = document.getElementById("area").value;
const city = document.getElementById("city").value;
const pincode = document.getElementById("pincode").value;
const mobile = document.getElementById("mobile").value;
let lat = 0;
let lng = 0;
//let coords = [latitude, longitude];

let currentAccount;
//Login button working: when clicked a new webpage will open for future database addition
buttonLogin.addEventListener("click", function (e) {
  e.preventDefault();
  let html = "";
  currentAccount = accounts.find(
    (account) => account.username === inputLoginUser.value
  );
  if (currentAccount?.password === Number(inputLoginPassword.value)) {
    window.open("admin.html", "_parent");
    inputLoginUser.value = "";
    inputLoginPassword.value = "";
  } else {
    html = `
        <div>
            <p style="font-size: 2rem; text-align: center; color: rgba(235, 11, 11, 0.719);">Either Your Username or Password is Wrong</p>
        </div>`;
    buttonLogin.insertAdjacentHTML("afterend", html);
    inputLoginUser.value = "";
    inputLoginPassword.value = "";

    //alert("❌ Either Username or Password is Incorrect ❌");
  }
});

//REgister button working:   when click registor page opens
buttonRegister.addEventListener("click", function (event) {
  event.preventDefault();
  openPage.classList.add("hidden");
  mainContent.classList.remove("hidden");
  //map.invalidateSize();
  window.dispatchEvent(new Event("resize")); // Resize window when register button is clicked
});
//
//Leaflet library starts
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      lat = latitude;
      lng = longitude;
      const coords = [latitude, longitude];

      const map = L.map("map", {
        maxZoom: 18,
        minZoom: 8,
        closePopupOnClick: false,
        zoomAnimation: true,
      }).setView(coords, 16);

      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.circle(coords, {
        color: "#2b282883",
        fillColor: "##d16882",
        fillOpacity: 0.3,
        radius: 100,
      }).addTo(map);

      map.on("click", function (mapEvent) {
        console.log(mapEvent);
        L.marker([lat, lng], { opacity: 0 });
        lat = mapEvent.latlng.lat;
        lng = mapEvent.latlng.lng;

        console.log(mapEvent.latlng);
        var popup = L.popup({
          maxWidth: 200,
          autoClose: false,
          closeButton: false,
          closeOnClick: false,
        });
        L.marker([lat, lng], { riseOnHower: true })

          .bindPopup(popup)
          /*L.popup({
              maxWidth: 200,
              autoClose: false,
              closeButton: false,
              closeOnClick: true,
            })*/

          .setPopupContent("You have selected this location")
          .addTo(map)

          .openPopup();
      });
    },
    function () {
      alert("cannot fetch location");
    }
  );
///////////////////////////////////////////////////////////////////////////
//AWS related Function
async function submitMessage() {
  var name = document.getElementById("pname").value;
  var street = document.getElementById("street").value;
  var area = document.getElementById("area").value;
  var city = document.getElementById("city").value;
  var pincode = document.getElementById("pincode").value;
  var mobile = document.getElementById("mobile").value;
  fetch(
    "https://wqvg69mlyf.execute-api.ap-south-1.amazonaws.com/production/message", // API name : water-leakage-api
    {
      method: "POST",
      body: JSON.stringify({
        name: name,
        street: street,
        area: area,
        city: city,
        pincode: pincode,
        mobile: mobile,
        latitude: lat,
        longitude: lng,
      }),
    }
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      //document.getElementById("messages").innerHTML += "<p>" + message + "</p>"; // Add new message to message list
    });
  thankYou();
}

function thankYou() {
  alert("ThankYou, Your form is submitted. We will get back to you soon");
  cleanValues();
}
function cleanValues() {
  document.querySelector("#pname").value = "";
  document.querySelector("#street").value = "";
  document.querySelector("#area").value = "";
  document.querySelector("#city").value = "";
  document.querySelector("#pincode").value = "";
  document.querySelector("#mobile").value = "";
}
