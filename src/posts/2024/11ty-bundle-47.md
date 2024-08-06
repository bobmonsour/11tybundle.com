---
bundleIssue: 47
eleventyComputed:
  title: "Issue {{ bundleIssue }} - v3.0.0-alpha.11 is here!, Typescript & JSX in the docs, An updated dev server, More posts 'From the Source', A new bundle item layout here...And 3 releases, 5 posts, and 9 sites to see"
  description: "11ty Bundle Issue {{ bundleIssue }}"
date: 2024-06-11
tags:
  - 11ty Bundle
---

An email version of this blog is available. **[Subscribe here](#newsletter-subscribe)**.

**v3.0.0-alpha.11 is here!** The [latest release of Eleventy canary](https://github.com/11ty/eleventy/releases/tag/v3.0.0-alpha.11) is out.

**Typescript & JSX in the docs.** Also coming with alpha.11 are Typescript and JSX support as real live template languages. It's all described in the docs, [here for Typescript](https://www.11ty.dev/docs/languages/typescript/), and [here for JSX](https://www.11ty.dev/docs/languages/jsx/).

**An updated dev server.** The Eleventy Dev Server has been updated to v2.01 and will arrive in Eleventy core with the release of v3.0.0-alpha.11 (not quite yet). Check out the [release notes](https://github.com/11ty/eleventy-dev-server/releases/tag/v2.0.1).

**More posts 'From the Source'.** I did some backfilling of selected posts from Zach's blog and added them the ['From the Source'](/categories/from-the-source/) category. I chose the highlights over the last couple of years, including all the "n millions" download milestones, for n = 2 to 8.

**A new 'bundle' item layout here.** In case you didn't already notice, I've made some small design changes to the layouts of the bundle posts that make up the site. In short: (1) moved the post date to just below the description, (2) added the number of posts by the author, (3) added a link to the website that is the source of the post (most often, this is the author's website), and (4) added a link to the RSS feed found on that source. You'll see that some of the posts lack the RSS feed link. If yours is one of them, I'd urge you to follow [Jim Nielsen's great advice](https://blog.jim-nielsen.com/2021/automatically-discoverable-rss-feeds/) on how to make your RSS feed discoverable. By adding a link to the head of your site, I'll be able to find your feed. If your site has more than one feed, I link to the first one that I find. Here's what the new bundle layout looks like.

{% image "src/assets/img/sample-bundle-item.jpg", "sample bundle item", "(min-width: 1000px) 1000px, 100vw" %}

If you're wondering how I built this, I wrote about it [over on my site](https://bobmonsour.com/posts/got-rss-feeds/).

**One more thing...** In the [last issue](/blog/11ty-bundle-46/), I described some work that I had done to make the workflow for creating content for this site easier. [Gory details are described here](https://www.bobmonsour.com/posts/node-cli-of-my-dreams/).

Until next time...

## Recent releases

{% set itemType = "release" %}
{%- include 'partials/bundleitems.njk' -%}

## Posts from around the web since the last Bundle issue

{% set itemType = "blog post" %}
{% include 'partials/bundleitems.njk' %}

## Built with Eleventy

Here are the new sites to see. If you want to see more sites, check out the [Eleventy Leaderboards](https://www.11ty.dev/speedlify/).

{% set itemType = "site" %}
{% include 'partials/bundleitems.njk' %}
