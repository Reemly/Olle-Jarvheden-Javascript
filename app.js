let discussions = [
    {
        name: "a",
        link: "./discussion1.html"
    },
    {
        name: "b",
        link: "./discussion2.html"
    },
    {
        name: "c",
        link: "./discussion3.html"
    },
    {
        name: "d",
        link: "./discussion4.html"
    },
    {
        name: "e",
        link: "./discussion5.html"
    }
];

let element = document.querySelector("body");


function generateDiscussionLinks() {
    discussions.forEach( (discussion) => {
        let newLink = document.createElement("a");
        newLink.innerHTML = discussion.name;
        newLink.setAttribute("href", discussion.link);
        document.querySelector(".director").append(newLink);
    } );
}



generateDiscussionLinks();

