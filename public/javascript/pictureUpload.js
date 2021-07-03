
const widget = uploadcare.SingleWidget("[role=uploadcare-uploader]");
widget.onUploadComplete(fileInfo => {
  // get a CDN URL from the file info
  let img = document.querySelector("img");
  console.log(img);
  const pic_url = fileInfo.cdnUrl;
  console.log(pic_url);
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  console.log(id);
  const body = {
      picture_url: pic_url,
      user_id: id
  }
  console.log(body);
  //update the url link in the database
 const postPicture = (body,img) => fetch('/api/userPicture', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      img.src = body.picture_url;
      return response.json();
    }
    console.log('Error: ' + response.statusText);
  })
  .then(postResponse => {
    console.log(postResponse);
    console.log(`Picture added with success`);
  });

  postPicture(body,img);

});