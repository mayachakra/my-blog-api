document.addEventListener('DOMContentLoaded', function(){
const backButton = document.getElementById('back');
backButton.addEventListener('click',function(){
    window.location.href='index.html';
});
const blogPostsContainer = document.getElementById('blog-posts-feed');
const blogEntries = JSON.parse(localStorage.getItem('blogPost')) || [];
//blogPostsContainer.innerHTML='';
blogEntries.forEach(post=>{
    const postEl = document.createElement('div');
    postEl.innerHTML = `
    <div class="container">
    <div class="blog-post">
    <div class="post-title">${post.title}</div>
    <div class="post-content">${post.content}</div>
    <div class="post-author">${post.username}</div>
    </div>
    </div>`
    blogPostsContainer.appendChild(postEl);
});
});
