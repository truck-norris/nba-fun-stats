// user types in team and selects from dropdown menu
// team stats and a song linked to the team will appear
// add eventListener to the form
// capture the users search term
// add search term to the request url
// add api key
// set up our fetch call
// handle the response
// loop over data 
// render data to the page
// user clicks reset button
// song and team stats dissappear

// Autocomplete widget
// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const teamBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
  let userData = e.target.value; //user entered data
  let emptyArray = [];
  if(userData){
    icon.onclick = ()=>{
      webLink = '';
      linkTag.setAttribute("href", webLink);
      linkTag.click();
    }
    emptyArray = teams.filter((data)=>{
      // filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data)=>{
      // passing return data inside li tag
      return data = `<li>${data}</li>`;
    });
    searchWrapper.classList.add("active"); //show autocomplete box
    showTeams(emptyArray);
    let allList = teamBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      allList[i].setAttribute("onclick", "select(this)");
    }
    }else{
      searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showTeams(list){
  let listData;
  if(!list.length){
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  }else{
    listData = list.join('');
  }
  teamBox.innerHTML = listData;
}

// // Clear Button
// var clearBtn = document.querySelector('#clear-btn')

// function clearScreen() {
//   location.reload();
// };

function displayStats(event) {
  event.preventDefault()
  var searchTerm = inputBox.value
  var apiKey = '4658ee7f44msh4e201b34602efeep1a45bcjsnb2ea38009195'
  var nbaUrl = 'https://api-nba-v1.p.rapidapi.com/seasons'
  var requestUrl = nbaUrl + '?api_key=' + apiKey + searchTerm

giphyForm.addEventListener('submit', displayGiphys)

  // NBA API
  const options = {
	  method: 'GET',
	  headers: {
		  'X-RapidAPI-Key': '4658ee7f44msh4e201b34602efeep1a45bcjsnb2ea38009195',
		  'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	  }
  };

  fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=25', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

  // YouTube API
  function videos() {
    console.log('it works')
    // YT generic URL "https://www.googleapis.com/youtube/v3/search?q=something&key=YOUR_API_KEY&fields=items(id,snippet(title,thumbnails(default))&part=snippet" 
    // Adrian's YT API key - AIzaSyD51ROkLO7Tj0gCUhdXzYzD-EmqGUCV1iI   
    var youtubeUrl = "https://www.googleapis.com/youtube/v3/search?q="
    var youtubeApi = "&limit=3&key=AIzaSyD51ROkLO7Tj0gCUhdXzYzD-EmqGUCV1iI"
    var youtubeVid = youtubeUrl+youtubeApi
  };


console.log('hi mom');
searchForm.addEventListener('submit', displayStats);
// clearBtn.addEventListener('click', clearScreen);
