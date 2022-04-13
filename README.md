# Google-Places-API-Test

## Quick Overview of the google API

we can get multiple type of information from the google place api based on the request that we use such as:

1. ### Place Search

the most import request that we can use from this section are : 

- ### *Find place*
    **Input**
    ```
    {
        input : This must be a place name, address, or category of establishments.
        inputtype : textquery or phonenumber
        fields :formatted_address,name,geometry 
    }
    ```
    **Response**
    ```
    {
    {
    "candidates":
    [
        {             
        "formatted_address": "140 George St, The Rocks  NSW 2000, Australia",
        
        "geometry":
          {
            "location":
             { "lat": -33.8599358, "lng": 151.2090295 },
            "viewport":
              {
                "northeast":
                  { "lat": -33.85824377010728, "lng": 151.2104386798927 },
                "southwest":
                  { "lat": -33.86094342989272, "lng": 151.2077390201073 },
              },
          },
        "name": "Museum of Contemporary Art Australia",
        "rating": 4.4,
      },
    ],
         "status": "OK",
    }
    ``` 
- ### *Text Search*
    **Input**
    ```
    {
       location : This must be specified as latitude,longitude. 

       keyword : The text string on which to search, for example: "restaurant" or "123 Main Street". This must be a place name, address, or category of establishments. 

       pagetoken : 
       
       radius : radius of the search
    }
    ```
    **Response**

    [_check response here_](https://developers.google.com/maps/documentation/places/web-service/search-text#text-search-responses)
- ### *Place Details*
    **Input**
    ```
    {
      placeid : A textual identifier that uniquely identifies a place, returned from Place Search, explained above.
    }
    ```
    **Response**

    [_check response here_](https://developers.google.com/maps/documentation/places/web-service/details#PlaceDetailsResponses)
    
- ### *Place Autocomplete*
    **Input**
    ```
    {
    input: The text string on which to search. The Place Autocomplete service will return candidate matches based on this string and order results based on their perceived relevance. 

     region

     location
    }
    ```
    **Response**

    [_check response here_](https://developers.google.com/maps/documentation/places/web-service/autocomplete#place_autocomplete_responses)
    