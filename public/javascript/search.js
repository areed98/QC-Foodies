const postInput = document.getElementsByClassName('post');
const searchBar = document.getElementById('searchBar');
let blogTitles = [];

console.log(searchBar);
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    const filteredTitles = blogTitles.filter( title => {
        return title.name.includes(searchString);
    });
    console.log(filteredTitles);
});


// const loadTitles = async () => {
//     try {
//     const res = await fetch(`/api/posts/${title}`);
//         blogTitles = await res.json();
//         displayTitles(blogTitles);
//         console.log(blogTitles);
//     } catch (err) {
//         console.error(err);
//     }
// };



// document.querySelector('.search-btn').addEventListener('click', searchClickHandler);