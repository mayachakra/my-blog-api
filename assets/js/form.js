document.addEventListener('DOMContentLoaded', function(){
    const blogForm = document.getElementById('blog-form');
    const blogArray = JSON.parse(localStorage.getItem('blogPost')) || [];

    function submitBlog(event){
        event.preventDefault();
        const newUsername = document.getElementById('username');
        const newTitle = document.getElementById('title');
        const newContent = document.getElementById('content');
        //getting form values
        //data object
        const blogPost = {
            username: newUsername.value.trim(),
            title: newTitle.value.trim(),
            content:newContent.value.trim()
        };
        blogArray.push(blogPost);
        localStorage.setItem('blogPost',JSON.stringify(blogArray));
        renderSite();
    }
    blogForm.addEventListener('submit', submitBlog);
    //blogForm.addEventListener('click', submitBlog);
    //renderSite();
});
//localStorage.getItem
function renderSite(){
    window.location.href='blog.html';
}