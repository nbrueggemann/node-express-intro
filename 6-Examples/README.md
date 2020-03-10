# Real World Examples

Now that we have a basic understanding of NodeJS and Express what are some real world things we can use this for?

## Build Systems

NodeJS can be used as a task runner for build automation with either the gulp (https://gulpjs.com/) or grunt (https://gruntjs.com/) packages.  This will help you automate all sorts of aspect of an application including minimizing web application code, running unt tests, linting, etc.

## Proxies

If you need to query data from some service but want to manipulate the data before it is returned to your client you can use node and express as a proxy.  The way this would work is that you'd sent the request to your node/express server which would then turn around and send the request to the other services.  Your node/express server would get the response and then could do what it wanted with the payload before returning it to your client.  This is similar to what koop (https://koopjs.github.io/) is doing.

## Data Scrapers

Sometimes there's data that you want to bring into your GIS that you may need to keep updating every day and that's in a format that's not easy to decipher.  For example, the MO Highway Partol maintains this crash reporting site: https://www.mshp.dps.missouri.gov/HP68/search.jsp

If I want to run something every 6 hours to parse the latest traffic crash data I could write a data scraper in NodeJS to do this.  

There's an npm package called node-schedule (https://www.npmjs.com/package/node-schedule) that you can use to set up a cron job on  periodic basis. Your app would then query this page and parse the html to extrack the lastest data.

A helpful package for parsing html is cheerio (https://www.npmjs.com/package/cheerio).

Once you extracted the data from the page you could write the features to one of your feature services using the applyEdits endpoint.

This would give you continiously up-to-date traffic crash data that can be used in common GIS workflows.
