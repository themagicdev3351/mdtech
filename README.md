# MDTech - Next.js Authentication Project

This project is a simple authentication system built with Next.js, Tailwind CSS, Supabase, and TypeScript. It includes features like user login, registration, profile management, password reset, and updating passwords. The project also uses `react-hot-toast` for showing success and error messages.

Live Demo: [MDTech](https://mdtech.vercel.app/signin)

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation Guide](#installation-guide)
4. [Environment Variables](#environment-variables)
5. [Available Pages](#available-pages)
6. [Running the Project](#running-the-project)
7. [Live Demo](#live-demo)

## Features

- User Registration and Login
- Profile Page
- Password Reset Page
- Update Password Functionality
- Authentication using Supabase
- Toast notifications for success/error messages

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Hot Toast](https://react-hot-toast.com/)

## Installation Guide

Follow these steps to install and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/mdtech.git
cd mdtech

npm install

```

## Environment Variables

Create a .env.local file in the root of the project and add the following environment variables:

NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
JWT_SECRET=<your-jwt-secret>
NEXT_PUBLIC_API_URL=<your-api-url>

### 1. Configure Supabase

To use Supabase for authentication, create a Supabase project by visiting Supabase Dashboard.

Obtain the NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY from the Supabase Dashboard.
Make sure to set up authentication in Supabase for email/password-based login.

### 2. Tailwind CSS Setup

Tailwind CSS is already configured in this project. You can find the configuration file in tailwind.config.js. To learn more about custom Tailwind configurations, visit the Tailwind CSS documentation.

### 3. Running the Project Locally

Once the environment variables are set and dependencies are installed, run the following command to start the development server:


## Available Pages

![Login Page](https://raw.githubusercontent.com/themagicdev3351/mdtech/main/public/login.png)

This is the login page.

![Sign Up Page](https://raw.githubusercontent.com/themagicdev3351/mdtech/main/public/signup.png)

This is the sign-up page.

![Forget Page](https://raw.githubusercontent.com/themagicdev3351/mdtech/main/public/forget.png)

This is the forget password page.

![Update Password Page](https://raw.githubusercontent.com/themagicdev3351/mdtech/main/public/updatepassword.png)

This is the update password page.

![Error Page](https://raw.githubusercontent.com/themagicdev3351/mdtech/main/public/error.png)

This is the error page.

![Profile Page](https://raw.githubusercontent.com/themagicdev3351/mdtech/main/public/profile.png)

This is the profile page.

When you are on the profile page, your profile email will be displayed at the top. Clicking on it opens a dropdown to log out of your account.


## Running the Project

### 1. Running the Project Locally

```bash
npm run dev 

```


### 2. Building for Production

```bash
npm run build

```

## Live Demo  

To run the project locally, use the following URL:

[http://localhost:3000](http://localhost:3000){:target="_blank"}
