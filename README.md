# About 

This very simple example shows how JSON:API and Site Studio can be leveraged to generate a static site with Next.js

The example is hooked up to a Drupal site that has a number of nodes each with a Site Studio layout canvas and the JSON:API enabled.

The example fetches the list of nodes and their Layout Canvas data and uses it to build a list of recipes and, for each recipe, renders some components based on the configuratin defined on the Layout Canvas in Drupal.

# Configuration

In next.config.js the hostname and pathname have been set to allow Next.js to download/resize images at build time.

# Getting started

## Next.js

Fork or clone this repo
In the top directory run `npm run dev`
The site should spin up on [http://localhost:3000/](http://localhost:3000/).

## Drupal

While the application is hardcoded to point to a live Drupal example site, you may wish to point it to your own so you can alter settings.

- You will need to create a **Drupal 10** site with **Site Studio 7.4.0** or later.
- You need the JSON:API module enabled

Create some components in Site Studio. Don't worry about adding elements to the Layout Canvas - you simply need to add fields to the Component Form Builder and ensure they have machine names set.

Now create a Node on your Drupal site with a Layout Canvas field and add your components to it.

## Access the Layout Canvas data via JSON:API

Inside `/lib/posts.js` you can find a (hard coded) example of how to access the JSON:API to pull out the list of Nodes (`getAllPostsData()`) and then the Layout canvas from a specific node (`getPostData(id)`).



Based on the Next.js starter template at [Learn Next.js](https://nextjs.org/learn).
