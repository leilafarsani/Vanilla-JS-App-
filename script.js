window.addEventListener("load", () => {
  let long;
  let lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      let = position.coords.latitude;
    });
  } else {
    h1.textContent = "Hey, this is not working because ...";
  }
});
