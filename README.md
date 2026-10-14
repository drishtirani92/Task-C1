# DEV@Deakin - Task C1 (New Post Page)

SIT313 Secure Frontend Applications, Credit Task C1.
Builds on Task P3 (home page) and Task P4 (login and sign up).

## What is in this task

- New `/post` page, opened with the Post button in the navigation bar
- Select Question or Article and the form changes (conditional rendering with `useState`)
  - Question: title, describe your problem, tags
  - Article: title, abstract, article text, tags
- Validation with Zod before a post counts as sent
- Pressing Post shows a popup (sweetalert2): "Post sent" or an error
- Saving posts is left for a later task

## Hooks used

- `useState` for the post type, form values and error messages
- `useEffect` to set the page title and to clear errors when the post type changes

## Run it

```bash
npm install
cp .env.example .env     # add your Firebase values (needed for login / sign up)
npm run dev
```

## Structure

```
public/images/   placeholder images for the home page
src/
  components/    Header, Footer, Articles, Tutorials, FormField, QuestionForm, ArticleForm
  pages/         Home, Login, Signup, Post
  services/      userService.js
  utils/         validation.js, postValidation.js
```
