
/*
user types in team and selects from dropdown menu
team stats and a song linked to the team will appear

add eventListener to the form

capture the users search term
add search term to the request url
  - add api key
 

  set up our fetch call
  handle the response
    loop over data 
    render data to the page


user clicks reset button
song and team stats dissappear
*/
var searchInput = document.querySelector('#query-term')
var statsForm = document.querySelector('#giphy-form')
var imageContainer = document.querySelector('#giphy-images')

function displayStats(event) {
    event.preventDefault()
//     var searchTerm = searchInput.value
//     var apiKey = '4658ee7f44msh4e201b34602efeep1a45bcjsnb2ea38009195'
//     var nbaUrl = 'https://api-nba-v1.p.rapidapi.com/seasons'
//     var requestUrl = nbaUrl + '?api_key=' + apiKey + searchTerm

//     fetch(requestUrl)
//     .then(function(response){
//         return response.json()
//     }).then(function(stats){
//         console.log('here is data', stats.data)

//         for (var i = 0; i < stats.data.length; i++){
//             var title = stats.data[i].title
       
//            var imageTag = document.createElement('p')
//            statsForm.appendChild(imageTag)
//         }
//     })
// NBA API
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '4658ee7f44msh4e201b34602efeep1a45bcjsnb2ea38009195',
// 		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
// 	}
// };

// fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=25', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// }

// Music API

statsForm.addEventListener('submit', displayStats);
