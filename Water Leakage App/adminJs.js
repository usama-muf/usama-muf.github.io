"use strict";
const showTable = document.querySelector(".tableResult");
const request = new XMLHttpRequest();
request.open(
  "GET",
  "https://wqvg69mlyf.execute-api.ap-south-1.amazonaws.com/production/message"
);
request.send();

request.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  var html = `<div class="tableResult">
        <table class="center">
          <tr>
            <th>Name</th>
            <th>Street</th>
            <th>Area</th>
            <th>City</th>
            <th>Pincode</th>
            <th>Mobile No</th>
            <th colspan= "2">Latitude & Longitude</th>
            <th>Map</td>
            <th>View Photos</td>
            <th>Done</td>
          </tr>
          `;

  console.log(data.body);
  data.body.forEach((body) => {
    var strName = body.name.trim().split(/\s+/);
    var albumName = `${strName[0]}-${body.mobile}-${body.pincode}`;
    html += `
   
          <tr class="newLine" style="font-size:20px; color:black; ">
          <td>${body.name}</td>
          <td>${body.street}</td>
          <td>${body.area}</td>
          <td>${body.city}</td>
          <td>${body.pincode}</td>
          <td>${body.mobile}</td>
          <td>${body.latitude}</td>
          <td>${body.longitude}</td>
          <td><a href="https://www.google.com/maps/place/@${body.latitude},${body.longitude},17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x710ced68171fff79!8m2!3d27.4493844!4d80.6496649"> link</td>
          <td><button onclick = viewPhotos('${albumName}') target = "_blank"> Get Photos</button></td>
          <td><button onclick =deleteEntryFromTable('${body.uniqueId}')>Delete</button></td>`;
  });
  showTable.insertAdjacentHTML("beforeend", html);
});

/////////////////////////////////////////////////////////////////////////
//                                                                     //
//    View photos which are present in s3 bucket for selected user     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////

// bucket credentials
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

function getHtml(template) {
  return template.join();
}

function viewPhotos(albumName) {
  console.log(albumName);
  var albumPhotosKey = encodeURIComponent(albumName) + "/";
  s3.listObjects({ Prefix: albumPhotosKey }, function (err, data) {
    if (err) {
      return alert("There was an error viewing your album: " + err.message);
    }
    // 'this' references the AWS.Response instance that represents the response
    var href = this.request.httpRequest.endpoint.href;
    var bucketUrl = href + albumBucketName + "/";

    var photos = data.Contents.map(function (photo) {
      var photoKey = photo.Key;
      var photoUrl = bucketUrl + encodeURIComponent(photoKey);
      showPhotoModal();
      console.log(photoUrl);
      return getHtml([
        "<span>",
        "<div>",
        '<img style="width:200px;height:200px;" src="' + photoUrl + '"/>',
        "</div>",
        "</span>",
      ]);
    });
    var htmlTemplate = ["<div>", getHtml(photos), "</div>"];
    document.getElementById("photosPreview_modal").innerHTML;
    document.getElementById("photosPreview").innerHTML = getHtml(htmlTemplate);
  });
}

// modal window which will display the photos.

const form_preview = document.querySelector(".form_preview");
const photo_preview_modal = document.querySelector(".photo_preview_modal");
const overlay = document.querySelector(".overlay");
const close_photoPreview_btn = document.querySelector("close_photoPreview_btn");

function showPhotoModal() {
  photo_preview_modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  var check = document.getElementById("close_btn_id_photoPreview");
  if (check)
    check.addEventListener("click", function () {
      console.log("Close btn");
      photo_preview_modal.classList.add("hidden");
      overlay.classList.add("hidden");
    });
}
//////////////////////////////////////////////////////////////////////////////////////

// delete entry form  table which will also delete all the photos and data.

/////////////////////////////////////////////////////////////////////////////////////

async function deleteEntryFromTable(deleteId) {
  console.log(deleteId);

  const id = {
    uniqueId: "${deleteId}",
  };

  fetch(
    "https://wqvg69mlyf.execute-api.ap-south-1.amazonaws.com/production/message",
    {
      method: "DELETE",
      body: JSON.stringify({
        uniqueId: deleteId,
      }),
    }
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
  alert("deleted successfully");
  document.location.reload();
}

/////////////////////////////////////////////////////////////////////////////////////
