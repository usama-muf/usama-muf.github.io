"use strict";
/*
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
alert("This Application will try to access your location \n Please give permission ")

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//making form appear and disappear when clicking on the map

const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const close_sidebar_btn = document.querySelector(".close-sidebar");

function openSidebarFunction() {
  console.log("You clicked on the map");
  sidebar.classList.remove("hidden");
  overlay.classList.remove("hidden");
  close_sidebar_btn.addEventListener("click", function () {
    sidebar.classList.add("hidden");
    overlay.classList.add("hidden");
    document.getElementById("myForm").reset();
  });
}
*/

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

// const name1 = document.getElementById("pname").value;
// const street = document.getElementById("street").value;
// const area = document.getElementById("area").value;
// const city = document.getElementById("city").value;
// const pincode = document.getElementById("pincode").value;
// const mobile = document.getElementById("mobile").value;
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
  window.dispatchEvent(new Event("resize")); // Resize window when register button is clicked helps in map sizing
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
        //console.log(mapEvent);
        L.marker([lat, lng], { opacity: 0 });
        lat = mapEvent.latlng.lat;
        lng = mapEvent.latlng.lng;

        //console.log(mapEvent.latlng);
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
        openSidebarFunction();
      });
    },
    function () {
      alert("cannot fetch location");
    }
  );
///////////////////////////////////////////////////////////////////////////
//AWS related Function

var name;
var street;
var area;
var city;
var pincode;
var mobile;
var str;

async function submitMessage() {
  var returnVal = true;
  name = document.forms["myForm"]["pname"].value;
  str = name.trim().split(/\s+/);
  street = document.forms["myForm"]["street"].value;
  area = document.forms["myForm"]["area"].value;
  city = document.forms["myForm"]["city"].value;
  pincode = document.forms["myForm"]["pincode"].value;
  mobile = document.forms["myForm"]["mobile"].value;

  // gets form whose name is myForm and data of that input whose id is pname etc

  // perform validation if validation fails set returnVal to 'false'

  if (name.length < 5 || name.indexOf("/") != -1) {
    returnVal = false;
    setError("pname", "Name is too short");
  } else if (street.length < 5) {
    returnVal = false;
    setError("street", "Name is too short");
    freeError("pname");
  } else if (area.length < 3) {
    returnVal = false;
    setError("area", "Name is too short");
    freeError("pname");
    freeError("street");
  } else if (pincode.length != 6) {
    returnVal = false;
    setError("pincode", "Must be of 6 digits");
    freeError("pname");
    freeError("street");
    freeError("area");
  } else if (mobile.length != 10) {
    returnVal = false;
    setError("mobile", "Must be 10 digits");
    freeError("pname");
    freeError("street");
    freeError("area");
    freeError("pincode");
  }

  console.log(name);
  if (returnVal) {
    freeError("pname");
    freeError("street");
    freeError("area");
    freeError("pincode");
    freeError("mobile");

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
    // console.log(
    //   `Name:${name} Street:${street} Area:${area} City:${city} Pincode:${pincode} Mobile:${mobile}`
    // );
    addPhotosForm();
    thankYou();
    cleanValues("myForm");
  }
}

function setError(id, error) {
  //sets error inside tag id
  document
    .getElementById(id)
    .getElementsByClassName("formError")[0].innerHTML = error;
}

function thankYou() {
  alert("ThankYou, Your form is submitted. We will get back to you soon");
}

function freeError(id) {
  document.getElementById(id).getElementsByClassName("formError")[0].innerHTML =
    "";
}

function cleanValues(id) {
  document.getElementById(id).reset();
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//making form appear and disappear when clicking on the map

const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const close_sidebar_btn = document.querySelector(".close-sidebar");

function openSidebarFunction() {
  console.log("You clicked on the map");
  sidebar.classList.remove("hidden");
  overlay.classList.remove("hidden");
  close_sidebar_btn.addEventListener("click", function () {
    sidebar.classList.add("hidden");
    overlay.classList.add("hidden");
    document.getElementById("myForm").reset();
    location.reload();
  });
}

////////////////////////////////////////////////////////////////////
//                                                                //
//  fucntionality to add photos when clicked on add photos.       //
//                                                                //
////////////////////////////////////////////////////////////////////

var albumBucketName = "water-leakage-management-app";
var bucketRegion = "ap-south-1";
var IdentityPoolId = "ap-south-1:41cc0a91-77dd-4659-8b0f-2df75464642c";

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId,
  }),
});

var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: albumBucketName },
});

function addPhotosForm() {
  const bucketName = `${str[0]}-${mobile}-${pincode}`;
  createAlbum(bucketName);
}

// this function creates a seperate folder for each user in s3

function createAlbum(albumName) {
  albumName = albumName.trim();
  if (!albumName) {
    return console.log(
      "Album names must contain at least one non-space character."
    );
  }
  if (albumName.indexOf("/") !== -1) {
    return console.log("Album names cannot contain slashes.");
  }
  var albumKey = encodeURIComponent(albumName);
  s3.headObject({ Key: albumKey }, function (err, data) {
    if (!err) {
      return console.log("Album already exists.");
    }
    if (err.code !== "NotFound") {
      return alert("There was an error creating your album: " + err.message);
    }
    s3.putObject({ Key: albumKey }, function (err, data) {
      if (err) {
        return alert("There was an error creating your album: " + err.message);
      }
      console.log("Successfully created album.");
    });
  });
  addPhoto(albumName);
}

// this function add multiple photos to above folder

function addPhoto(albumName) {
  var files = document.getElementById("photoupload").files;
  //console.log(files);
  //console.log(albumName);
  if (!files.length) {
    return alert("Please choose a file to upload first.");
  }

  var fileArr = new Array();
  for (var i = 0; i < files.length; i++) {
    fileArr[i] = files[i];
  }

  fileArr.forEach((element) => {
    console.log(element);
  });

  console.log(fileArr);

  //var file = files[0];
  var promise;
  i = 0;
  fileArr.forEach((element) => {
    var file = element;
    var fileName = i;
    i = i + 1;
    var albumPhotosKey = encodeURIComponent(albumName) + "/";
    var photoKey = albumPhotosKey + fileName;
    var upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: albumBucketName,
        Key: photoKey,
        Body: file,
      },
    });
    promise = upload.promise();
  });
  // Use S3 ManagedUpload class as it supports multipart uploads

  promise.then(
    function (data) {
      console.log("Successfully uploaded photo.");
      //viewAlbum(albumName);
    },
    function (err) {
      return alert("There was an error uploading your photo: ", err.message);
    }
  );
}
