$(function() {
    const categories = $("#mainCategories")

    categories.on("change", function(event){
        window.location.replace("/categories/" + event.target.value)
    })

    function chooseCategory(category){
        $.get(`/categories/${category}`)
        .then(foods => {
            console.log(foods);
            window.location.replace("/categories/" + category)
        })
        .catch(function(err) {
            console.log(err);
        });
    }
});