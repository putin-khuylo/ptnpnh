ПТН ПНХ - a denazification library
==================================

Vladimir Putin in his speech preceding the invasion on Ukraine said that Ukraine needs a "denazification",
falsely accusing Ukraine of genocide and calling the Russian operation a "protection" of the very same people
Russian soldiers are killing today. 

*Let's think for a moment what did the German nazism really look like:*

Before holocaust, before 1939 invasion of Poland, NSDAP has been for years creating ideological ground for the crimes
of German nation. They were dehumanising jews, portraying them as both inferior subhumans and overpowerful enemy at
the same time. Isn't it how Putin portrays Ukrainians nowadays? Before Hitler invaded Poland his propagandists had
created the myth of "Lebensraum" (living space) for German nation. Just like Putin's propagandists now are creating
myths legitimizing their aggressive invasion.

Yes, we need denazification today. But the country we need to "denazify" is Russia, and the Hitler we're fighting
against is Vladimir Adolfovich Putin.

----

When you start working on an open-source library, you wish to help world by letting other people use your code
for free, for common good. Then one day russian nazis come, attack your brother country, and you see they use
the software based on your own work. The time has come to end this.

Add this library to the dependencies list of your own library, to block russian sites from using it.
If this library is included in a dependency tree of a russian site, the site content will be replaced with the
infamous "PTN PNH" message. Message would not be displayed on domains that include 'localhost', 'dev' or 'test'
in domain name, so russian nazis will discover the message only after deploying their site to production.

If you use this library, consider also adding some anti-russian message to your README,
so nationals of the III Putinian Reich would know it's not a bug or a hack,
it's just that they are not welcome to use code written by enthusiasts from democratic countries.

If you can, take care to exclude russians also in your license and to add anti-russian clauses to your Code of Conduct.

Usage
-----

It's enough to add the library to your dependencies list (you may consider adding it via the repository URL however,
as I cannot guarantee the NPM will not censor it eventually) and include it anywhere in your app, so that side effects
of the import get executed. I.e. add to any of your always executed scripts the line:

```JavaScript
import ptnpnh;
```

or

```JavaScript
require("ptnpnh");
```

What is considered a nazi site
------------------------------

A nazi site is defined as a site using one of russian TLD (.ru, .su or .рф) or a webpage with russian specified
as the language either via `lang="ru"` attribute or via typical patterns used to specify language in the URL
(e.g.: http://example.com/ru/foobar.html, or http://example.com/?lang=rus).

Embargo time
------------

This feature (together with disabling the library on dev and test servers) is intended to make nazi (i.e. russian)
developers notice the "feature" only after it is already published to their production server.
By default, PTNPNH calculates embargo date at install time to be one and a half days into
the future (half is important - we want it to turn on outside working hours when nobody is able to fix it). 
You can however customize it by calling PTNPNH directly and providing the embargo date in the first argument: 

```JavaScript
import ptnpnh from "ptnpnh";
const tomorrow = new Date(+(new Date()) + 1000 * 60 * 60 * 24);
ptnpnh(tomorrow);
```

Passing `null` or `undefined` is equal to omitting the argument. Default behavior is then triggered via a short
timeout (to avoid starting it with a wrong configuration before `ptnpnh` function is explicitly called).

Message
-------

Default behaviour is the replacement of `document.body` content with the infamous "ПТН ПНХ" message.
If you want however, for whatever reason, to replace it with something else, you can pass HTML code to be put into
document.body.innerHTML in a 2nd argument:

```JavaScript
import ptnpnh from "ptnpnh";
const html = `<p>We do not allow using our software on Russian sites.</p>`;
ptnpnh(undefined, html);
```

or

```JavaScript
require("ptnpnh").default("2022-07-04", "<h1>С годовщиной!</h1><h2>1610-2022</h2>");
```
