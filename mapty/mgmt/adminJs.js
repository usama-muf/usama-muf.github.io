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
        <table>
          <tr>
            <th>Name</th>
            <th>Street</th>
            <th>Area</th>
            <th>City</th>
            <th>Pincode</th>
            <th>Mobile No</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Position on Map</td>
            <th>Done</td>
          </tr>
          `;

  console.log(data.body);
  data.body.forEach((body) => {
    html += `
   
          <tr style="font-size:20px; ">
          <td>${body.name}&nbsp;&nbsp;</td>
          <td>${body.street}&nbsp;&nbsp;</td>
          <td>${body.area}&nbsp;&nbsp;</td>
          <td>${body.city}&nbsp;&nbsp;</td>
          <td>${body.pincode}&nbsp;&nbsp;</td>
          <td>${body.mobile}</td>
          <td>${body.latitude}</td>
          <td>${body.longitude}</td>
          <td><a href="https://www.google.com/maps/place/@${body.latitude},${body.longitude},17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x710ced68171fff79!8m2!3d27.4493844!4d80.6496649"> link</td>
          <td><button onclick =deleteEntryFromTable('${body.uniqueId}')>Delete</button></td>
          
          
              `;
  });
  showTable.insertAdjacentHTML("beforeend", html);
});

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
}
