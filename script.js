//cherryPi linking needed to: get list of images and their info, settings, delete/download photos

//settings
var HDRInputPreference="true";
var resolution="1080p";
var imageFileType="JPG";
var time="11:59";
var photoFrequency="Minute";
//lists for images in gallery
var imagedescriptions= [" 12PM January 12, 2022"," 12PM January 13, 2022"," 12PM January 14, 2022"," 12PM January 15, 2022"," 12PM January 16, 2022"," 12PM January 17, 2022"," 12PM January 18, 2022"," 12PM January 19, 2022"," 12PM January 19, 2022"]
var imageList = ["https://www.w3schools.com/css/img_forest.jpg","https://www.w3schools.com/css/img_5terre.jpg","https://www.w3schools.com/css/img_mountains.jpg","https://www.w3schools.com/css/img_lights.jpg","http://cdn.cnn.com/cnnnext/dam/assets/180626120721-05-spectacular-coastlines---malabar-coast.jpg","https://media.istockphoto.com/photos/pacific-ocean-at-big-sur-picture-id1038412058?k=20&m=1038412058&s=612x612&w=0&h=jlVS4glEGZ8Lt1d57z-Z51kGbFprP6tu3_d2oY_Ph3Y=","https://images.unsplash.com/photo-1433567212640-211efabc03e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29hc3R8ZW58MHx8MHx8&w=1000&q=80","http://cdn.cnn.com/cnnnext/dam/assets/180626120726-08-spectacular-coastlines---great-ocean-road.jpg","https://www.w3schools.com/css/img_mountains.jpg"]

var pageIndex=0;
function goToPage(destination){
  if (destination=="download"){
    location.assign('/download.html');
  }
  else if(destination=="gallery"){
    location.assign('/imageGallery.html');
  }
  else if(destination=="preview"){
    location.assign('/liveView.html');
  }
  else if(destination=="settings"){
    location.assign('/settings.html');
  }
  else{
    location.assign('https://sites.google.com/view/camerastationhelp/home');
  }
}

function showCurrentImages(){
  for (i=1;i<5;i++){
    if (imagedescriptions[(4*pageIndex)+i-1]!=undefined){
      document.getElementById("desc"+i.toString()).innerHTML = "Taken On:"+imagedescriptions[i-1];
      document.getElementById("galleryimg"+i.toString()).src = imageList[i-1];
    }
    else{
      document.getElementById("gallery"+i.toString()).style.display = "none";
    }
  }
}
function showNextImgs(){
  var numPages=Math.ceil(imageList.length/4);
  if (numPages>pageIndex+1){//more images, can go to next page
    pageIndex++;
    console.log("currently at:"+pageIndex)
    for (i=1;i<5;i++){
      console.log("desc"+i.toString())
      console.log(imagedescriptions[i-1])
      console.log(imageList[i-1])
      if (imagedescriptions[(4*pageIndex)+i-1]!=undefined){
      document.getElementById("desc"+i.toString()).innerHTML = "Taken On:"+imagedescriptions[(4*pageIndex)+i-1];
      document.getElementById("galleryimg"+i.toString()).src = imageList[(4*pageIndex)+i-1];
      }
      else{
        console.log("foundundef")
        //document.getElementById("desc"+i.toString()).style.display = "none";
        //document.getElementById("galleryimg"+i.toString()).style.display = "none";
        document.getElementById("gallery"+i.toString()).style.display = "none";
      }
      console.log("finished with image")
    }
    /*if(numPages==pageIndex+1){
      document.getElementById("nextButton").style.backgroundColor = 'grey';
    }
    else{
      document.getElementById("previousButton").style.backgroundColor = 'green';
    }*/
  }
}
function showPreviousImgs(){
  console.log(pageIndex)
  var numPages=Math.ceil(imageList.length/4);
  if (pageIndex-1>=0){//there are images before, can go back to last page
    pageIndex--;
    console.log("currently at:"+pageIndex)
    for (i=1;i<5;i++){
      console.log("desc"+i.toString())
      console.log(imagedescriptions[i-1])
      console.log(imageList[i-1])
      document.getElementById("desc"+i.toString()).innerHTML = "Taken On:"+imagedescriptions[(4*pageIndex)+i-1];
      document.getElementById("galleryimg"+i.toString()).src = imageList[(4*pageIndex)+i-1];
      //document.getElementById("desc"+i.toString()).style.display = "block";
      //document.getElementById("galleryimg"+i.toString()).style.display = "block";
      document.getElementById("gallery"+i.toString()).style.display = "block";
      console.log("finished with image")
    }
    /*if(pageIndex==0){
      document.getElementById("previousButton").style.backgroundColor = 'grey';
    }
    else{
      document.getElementById("nextButton").style.backgroundColor = 'green';
    }*/
  }
}

function setDefaultSettings(){
  frequencyButton.innerText = photoFrequency;
  resolutionButton.innerText = resolution;
  timeInput.value = time;
  fileTypeButton.innerText = imageFileType;
  if (HDRInputPreference=="true"){
    HDRInput.checked=true;
  }
  else{
    HDRInput.checked=false;
  }
}

function setHDR(which, checked_status){
  if (which=="HDRInput"){
    HDRInputPreference=checked_status;
  console.log(which, " checked status ", checked_status);
  }
  else if (which=="HDRInput"){
    HDRInputPreference=checked_status;
  console.log(which, " checked status ", checked_status);
  }
}

function setPhotoFrequency(frequencyInput){
  frequencyButton.innerText = frequencyInput;
  console.log(frequencyInput)
  photoFrequency=frequencyInput;
  
}

function setFileType(fileTypeInput){
  fileTypeButton.innerText = fileTypeInput;
  console.log(fileTypeInput);
  imageFileType=fileTypeInput;
}
function setResolution(resolutionText){
  //var myElement = document.getElementById('resolutionButton');
  resolutionButton.innerText = resolutionText;
  resolution=resolutionText;
  console.log(resolutionText)
}

function setTime(){
  time=timeInput.value;
  console.log(timeInput.value);
}

function hideShowMoreInfo(infoID,buttonID) {
  var moreText = document.getElementById(infoID);
  var btnText = document.getElementById(buttonID);
  console.log(moreText.style.display)
  if (moreText.style.display === "inline") {
    btnText.innerHTML = "?"; 
    moreText.style.display = "none";
  }
  else {
    btnText.innerHTML = "Hide"; 
    moreText.style.display = "inline";
  }
  console.log(moreText.style.display)
}

function confirmAction(photosToDelete) {
  if (photosToDelete=="all"){
    let confirmAction = confirm("Are you sure you want to delete ALL your photos?\nThese photos will be permanently deleted.");
    if (confirmAction) {
      deletePhotos("all")
      alert("Photos Successfully Deleted!");
    } else {
      alert("Action canceled, photos still here!");
    }
  }
  else{
    let confirmAction = confirm("Are you sure to delete all downloaded photos?\nThese photos will be permanently deleted.");
    if (confirmAction) {
      deletePhotos("downloaded")
      alert("Photos Successfully Deleted!");
    } else {
      alert("Action canceled, photos still here!");
    }
  }
}

function deletePhotos(photosToDelete){
  if (photosToDelete=="all"){
    console.log("deleted all photos!")
  }
  else{
    console.log("deleted all downloaded photos!")
  }
}


function downloadPhotos(photosToDownload){
  if (photosToDownload=='all'){
    console.log("downloaded All photos!")
  }
  else if (photosToDownload=='new'){
    console.log("downloaded new photos!")
  }
  else{
    console.log("error downloading photos")
  }
}

function saveSettings(){
  console.log("settings saved!")
}