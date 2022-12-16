var firebaseConfig = {
    apiKey: "##",
    authDomain: "##",
    projectId: "##",
    storageBucket: "##",
    messagingSenderId: "##",
    appId: "##",
    measurementId: "##"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var storage = firebase.storage();

const createPost = (caption, image, username) => {
    storage.ref(`images/${image.name}`).put(image)
        .then(snapshot => {
            snapshot.ref.getDownloadURL().then(
                (imageUrl)=>{
                    db.collection("posts").add({
                        caption,
                        imageURL: imageUrl,
                        username,                    
                    })
                    .catch((error)=>{
                        console.error("Error posting image", error);
                    })
                }
            )
        })
}

var fileUploadTag = document.querySelector("#fileUpload");
var captionTag = document.querySelector("#caption");
var usernameTag = document.querySelector("#username");

const getPosts = () => {
    var posts;
    db.collection("posts")
        .onSnapshot((snapshot) => {
            posts = snapshot.docs.map((doc) => ({
                id: doc.id,
                post: doc.data()
            }))
            console.log(posts);
            renderPosts(posts);
        })
}

const renderPosts = (posts) =>{
    var postsTag = document.querySelector(".posts");
    posts.map((post)=>{
        postsTag.innerHTML += `
            <b>${post.post.username}</b>
            <img src=${post.post.imageURL} width="500" />
            <p>${post.post.caption}</p>
        `
    })
}

getPosts();

var uploadButton = document.querySelector("#uploadButton");

uploadButton.addEventListener("click", function(){
    createPost(captionTag.value, fileUploadTag.files[0], usernameTag.value);
})