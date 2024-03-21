document.addEventListener("DOMContentLoaded", () => {
    new Blog();
});


// the blog class is responsible for initializing the blog, adding new posts (i.e. via new instances of the blogpost, and rendering the data into the HTML)
class Blog {
    constructor() {
        this.posts = [];
    }
    initialize() {
        const addbutton = document.getElementById("addpostbtn");
        addbutton.addEventListener("click", () => {
            console.log("button was clicked");
        });
    }
}