## Using Git alongside VSC
(ensure to run git as admin to ensure no other issues arise)
(don't actually copy the $ as it comes with every line of git automatically)

What you will need - 

A local repository (can clone this one and save locally)
A copy of your url that you use to access this repository (e.g. https://github.com/1tzyyy/improved-chatbot)

Run your localy repository file, see below example of what you will need to type in your code 
(note, use " if you have special characters like a space, otherwise you don't require a " symbol).
$ cd "C:\Users\blehh\Desktop\Tim\Coding\github pulls\improved-chatbot"

Run this next to ensure that your local code is connected to the online repository, included below is what I would use in this scenario.
$ git remote add origin https://github.com/1tzyyy/improved-chatbot

In order to test if it connected, use this next line of code on git:

$ git remote -v

If you are successfully connected, the output should look like the below:
origin  https://github.com/1tzyyy/improved-chatbot.git (fetch)
origin  https://github.com/1tzyyy/improved-chatbot.git (push)

## Using Git to display the website

Run this to esure that all dependencies are installed
$ npm install

Following this, paste this code to run the website
npm run dev

The following should initialise if done correctly:

> improved-chatbot@0.1.0 dev
> next dev --turbopack

   ▲ Next.js 15.4.6 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://xxx.xxx.x.xx:xxxx

 ✓ Starting...
 ✓ Ready in 2.6s

Open (http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
