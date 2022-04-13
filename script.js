const dotenv = require("dotenv");
const fs = require("fs");
const sleep = require("util").promisify(setTimeout);
const { Client } = require("@googlemaps/google-maps-services-js");
let converter = require("json-2-csv");
//* Get Information About a Place from text
textSearchTest = async (client, pageToken) => {
  try {
    let textSearchTest;

    textSearchTest = await client.textSearch({
      params: {
        pageToken: pageToken,
        location: {
          latitude: 51.5072,
          longitude: -0.118092,
        },
        radius: 50000,
        type: "movie_theater",
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
      timeout: 2000, // milliseconds
    });

    return {
      results: textSearchTest.data.results,
      nextPageToken: textSearchTest.data.next_page_token,
    };
  } catch (e) {
    console.log(e.response);
  }
};

//* Predict the place based on a Text
placeAutoCompleteTest = async (client, place) => {
  try {
    let placeAutoCompleteTest = await client.placeQueryAutocomplete({
      params: {
        input: place,
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
      timeout: 2000, // milliseconds
    });
    return placeAutoCompleteTest.data.predictions;
  } catch (e) {
    console.log(e.response);
  }
};
//* Get More details About a place using place_id
placeDetailsTest = async (client, placeId) => {
  try {
    let placeDetailsTest = await client.placeDetails({
      params: {
        place_id: placeId,
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
      timeout: 2000, // milliseconds
    });
    return placeDetailsTest.data.result;
  } catch (e) {
    console.log(e.response);
  }
};
//* Get GeoCode of a location
geoCodeTest = async (client) => {
  try {
    let geoCodeTest = await client.geocode({
      params: {
        key: process.env.GOOGLE_MAPS_API_KEY,
        address: "Larache Rue Abi Ali El Youssi",
      },
      timeout: 2000, // milliseconds
    });
    console.log(geoCodeTest.data);
  } catch (e) {
    console.log(e.response);
  }
};
//* Get Places Nearby of a location
placeNearbyTest = async (client) => {
  try {
    let placeNearbyTest = await client.placesNearby({
      params: {
        key: process.env.GOOGLE_MAPS_API_KEY,
        location: [35.759465, -5.833954],
        radius: 5000,
      },
      timeout: 2000, // milliseconds
    });
    console.log(placeNearbyTest.data);
  } catch (e) {
    console.log(e.response);
  }
};
//* Find place From Text
findPlaceFromTextTest = async (client) => {
  try {
    let findPlaceFromTextTest = await client.findPlaceFromText({
      params: {
        key: process.env.GOOGLE_MAPS_API_KEY,
        input: "restaurant",
        radius: 60000,
        locationbias: "circle:50000@51.5072,0.1276",
        inputtype: "textquery",
        fields: ["name", "geometry"],
      },
      timeout: 2000, // milliseconds
    });
    console.log(findPlaceFromTextTest.data.candidates);
  } catch (e) {
    console.log(e.response);
  }
};

let main = async () => {
  //* Load Config
  dotenv.config({ path: "./config/config.env" });
  //* Instantiate The Client
  const client = new Client({});
  let data = [];
  let PageToken = "";
  let numberOfPages = 1;
  let place = "Billings United States NORTH AMERICA";
  const pred = await placeAutoCompleteTest(client, place);
  if (pred.length !== 0) {
    const details = await placeDetailsTest(client, pred[0].place_id);
    console.log(details);
  }
};

main();
