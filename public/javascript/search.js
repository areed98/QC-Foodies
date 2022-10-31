// const title = document.querySelector('input[name="post-title"]').value;

$(function() {
    $("#searchBar").on("keyup", function(event) {
        event.preventDefault();
        const title = $('input[name="post-title"]').value;

        $.ajax("/api/posts", {
            type: "POST",
            body: JSON.stringify({
                title
            }),
            headers: {
                'Content-Type': 'applicatiton/json'
            }
            .then(function() {
                document.location.replace('/dashboard');
            })
            .catch(function() {
                console.log(err);
            })
        })
    })
})


// const postInput = document.getElementsByClassName('post');
// const searchBar = document.getElementById('searchBar');
// let postTitles = [];

// const title = document.querySelector('input[name="post-title"]').value;

// console.log(searchBar);
// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value;
//     const filteredTitles = postTitles.filter( title => {
//         title.name.contain(searchString)
//     });
//     console.log(filteredTitles);
// });


// const loadTitles = async () => {
//     try {
//         const response = await fetch(`/api/posts`, {
//                   method: 'POST',
//                   body: JSON.stringify({
//                     title
//                   }),
//                   headers: {
//                     'Content-Type': 'application/json'
//                   }
//                 });
//     }

    //  if (response.ok) {
    //       document.location.replace('/dashboard');
    //     } else {
    //       alert(response.statusText);
    //     }

// async function searchHandler(event) {
//     event.preventDefault();
  
//     const title = document.querySelector('input[name="post-title"]').value;
  
//     const response = await fetch(`/api/posts`, {
//       method: 'POST',
//       body: JSON.stringify({
//         title
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
  
//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
//   }
  



// async function searchHandler(event) {
//     event.preventDefault();
  
//     const title = document.querySelector('input[name="post-title"]').value;
  
//     const response = await fetch(`/api/posts`, {
//       method: 'POST',
//       body: JSON.stringify({
//         title
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
  
//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
//   }
  
// document.querySelector('#searchBar').addEventListener('keyup', searchHandler);