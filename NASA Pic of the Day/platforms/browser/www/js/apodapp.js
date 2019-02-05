var xmlhttp;
var key = "aPC7H51uLXeWxkYcSNHD3NpuR0lnGwHcX5miD4PR" /* replace with your own */
var apodURL = "https://api.nasa.gov/planetary/apod?api_key=" + key;

// get yesterdays date in YYYY-MM-DD format
var d = new Date();
d.setDate(d.getDate() - 1);
var yesterday = new Date(d.getTime() - (d.getTimezoneOffset() * 60000)).toISOString().split("T")[0];
yesterday = apodURL + "&date=" + yesterday;

window.onload = function () {
  document.addEventListener("deviceready", init, false);
  init(); // comment out when running on device
};

function init() {
  request(apodURL, getApod1);
}

function request(url, response) {
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = response;
}

function getApod1() { // when readystate changes

  //check to see if the client -4 and server -200 is ready
  if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {

    populate(JSON.parse(xmlhttp.responseText), "td");
    console.log("all info received from server");

    //make 2nd request
    request(yesterday, getApod2);

  } else {
    console.log("no dice");
  }
}

function getApod2() { // when readystate changes

  //check to see if the client -4 and server -200 is ready
  if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {

    populate(JSON.parse(xmlhttp.responseText), "yd");
    console.log("all info received from server");

  } else {
    console.log("no dice");
  }
}


function populate(data, date) {
  console.log(data.media_type);
  switch (data.media_type) {
    case "video":
      var el = document.createElement("iframe");
      el.id = date + "-image";
      el.className = "nasaPic";
      document.getElementById(date + "-block").appendChild(el);
      break;
    default:
      var el = document.createElement("img");
      el.id = date + "-image";
      el.className = "nasaPic";
      document.getElementById(date + "-block").appendChild(el);
      break;
  }

  document.getElementById(date + "-loadingIcon").style.display = "none";
  document.getElementById(date + "-imgCredit").style.display = "block";
  document.getElementById(date + "-image").src = data.url;
  document.getElementById(date + "-title").innerHTML = data.title;
  document.getElementById(date + "-copyright").innerHTML = data.copyright;
  document.getElementById(date + "-explanation").innerHTML = data.explanation;
}