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

![](https://github.com/themagicdev3351/mdtech/tree/main/public/login.png)

this is a login page

![](https://github.com/themagicdev3351/mdtech/tree/main/public/signup.png)

this is a signUp page

![](https://github.com/themagicdev3351/mdtech/tree/main/public/forget.png)

this is a forget page

![](https://github.com/themagicdev3351/mdtech/tree/main/public/updatepassword.png)

this is a updatepassword page

![](https://github.com/themagicdev3351/mdtech/tree/main/public/error.png)

this is a error page

![](https://github.com/themagicdev3351/mdtech/tree/main/public/profile.png)

this is a profile 

when you are in profile page show profile email at in top click to open downdawn to logout your account.


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

```bash

Live Demo: [MDTech](https://mdtech.vercel.app/signin)

```
