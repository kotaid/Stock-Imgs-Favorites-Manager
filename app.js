/* let key = "563492ad6f91700001000001ee3a6c866d7241d4aa893d151007750c";
axios
  .get("https://api.pexels.com/v1/search?query=people", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "563492ad6f91700001000001ee3a6c866d7241d4aa893d151007750c",
    },
  })

  .then((response) => {
    console.log(response);
  });
 */
let accessKey = "CnRTgfaQdnTBBv46BBrzQT1X-uKvFEXA5FfK6njKRiY";
let key = "1Nt3X1N4Pf480OLaUe-e1GEHQmybDPrZ3rvRJ2dPgVU";
axios
  .get("https://api.unsplash.com/search/photos?page=1&query=office", {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
  })
  .then((response) => {
    console.log(response);
  });
/* let key = "AIzaSyAEhLGiiML_2N1Y6jsUpUHeyM2ouEWtdWQ";
axios
  .get(
    "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyAEhLGiiML_2N1Y6jsUpUHeyM2ouEWtdWQ&part=snippet,contentDetails,statistics,status"
  )
  .then((response) => console.log(response.data)); */
