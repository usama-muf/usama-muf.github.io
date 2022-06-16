/*function submitMessage() {
  const photo = document.getElementById("photo").files;

  if (photo) {
    var file = photo[0];
    var fileName = file.name;

    fetch(
      "https://liaudgav23.execute-api.ap-south-1.amazonaws.com/deployS3Upload/example1.jpeg",
      {
        method: "POST",
        body: JSON.stringify({
          file: file,
        }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });

    console.log(photo);
    console.log(file);
    console.log("form submitted");
  }
}
*/

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
