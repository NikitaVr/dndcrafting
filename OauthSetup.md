Source https://cnly.github.io/2018/04/14/just-3-steps-adding-netlify-cms-to-existing-github-pages-site-within-10-minutes.html

## Creating an GitHub OAuth App

First, go to GitHub Dev Settings and click New OAuth App. Or just click here: https://github.com/settings/developers

Enter whatever you like for Application name and Homepage URL.

In Authorization callback URL, enter: https://api.netlify.com/auth/done.

Once finished, leave the page in the background. You will need the Client ID and Client Secret on this page later.

## Creating a Netlify Site

… Relax! We’re just creating one, without actually using it. In fact, if you want to deploy Jekyll site on Netlify, you will need to include Jekyll (generator) in your git repo.

Go to Netlify and create a new site from… any repo. We are not really using Netlify to host that, anyway.

After that, go to Settings, and copy your Site name. It should be something like octopus-cat-123456.

From the sidebar go to Domain Management and add your GitHub Pages domain (you.github.io) as a custom domain. Choose Yes when asked if you are github.io’s owner.

From the sidebar go to Access control, scroll down to OAuth and click Install provider.

Choose GitHub as provider, and enter the Client ID and Client Secret from GitHub OAuth app page mentioned above.

Then you can close the Netlify and GitHub webpages.
