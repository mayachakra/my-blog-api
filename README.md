# 04 Web APIs Challenge: Personal Blog

## User Story
```
AS A marketing student
I WANT a personal blog
SO THAT I can showcase my thoughts and experiences
```
## Acceptance Criteria
This website follows the acceptance criteria of:
```
GIVEN a personal blog
WHEN I load the app,
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
WHEN I submit the form,
THEN blog post data is stored to localStorage.
WHEN the form submits,
THEN I am redirected to the posts page.
WHEN I enter try to submit a form without a username, title, or content,
THEN I am presented with a message that prompts me to complete the form.
WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection.
WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries.
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage.
WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
WHEN I take a closer look at a single blog entry in the list,
THEN I can see the title, the content, and the author of the post.
WHEN I view the footer,
THEN I am presented with a link to the developer's portfolio.
```

## Description
For this assignment I created two html pages, a landing page and the blog feed page. The landing page allows a user to add their username, title, and blog post content
and once posted is saved to localStorage which is pulled in the now redirected blog feed page. Both pages have a dark/light mode switch as well. On the blog feed site
there is a footer with a link to my github on click.

## Deployment

The following link leads to the website:
https://mayachakravarty.com/my-blog-api/index.html

## Screenshots

Here are screenshots of the website:
<img width="1431" alt="Screenshot 2024-03-12 at 5 08 27 PM" src="https://github.com/mayachakra/my-blog-api/assets/100816867/3ad4377f-be6b-40d6-aeee-563d56b0fe04">
<img width="1431" alt="Screenshot 2024-03-12 at 5 08 44 PM" src="https://github.com/mayachakra/my-blog-api/assets/100816867/11327f71-b165-4133-85f8-84d57b3b6c58">


