---
title: Grafana 2.1 Released
author: Torkel Ödegaard
published_on: July 20, 2015
---

<img class="no-shadow" src="/assets/img/blog/new-in-grafana-v2-1.png" alt="what's new in Grafana 2.1"/>

We've been working to implement many of the features you've requested since the release of 2.0, and are
excited to announce the release of Grafana 2.1 today. We recommend that all Grafana users upgrade to this release.
Grafana 2.1 brings improvements in three core areas: dashboarding, authentication, and data sources.
As with every Grafana release, there is a whole slew of new features, enhancements, and bug fixes. To see everyting
that's been added to Grafana 2.1 head over to the <a href="https://github.com/grafana/grafana/issues?page=4&q=milestone%3A2.1+is%3Aclosed" target="_blank">2.1 milestone issues section</a>.

<a href="http://grafana.org/download/" target="_blank">Download Grafana 2.1 now</a>

We're excited about this release, and want to share some of the highlights:

- - -

## More Dynamic Dashboards
The Templating system is one of the most powerful and well-used features of Grafana.
The 2.1 release brings numerous improvements that make dashboards more dynamic than ever before.

### Multi-Value Template Variables
A template variable with Multi-Value enabled allows for the selection of multiple values selected at the
same time. These variables can then be used in any Panel to make them more dynamic, and to give you the perfect view of
your data. Multi-Value variables is also enabling the new Row repeat and Panel repeat feature described below.

![Multi-Value Select](/assets/img/blog/multi-select.gif "Multi-Value Select")
<br/><br/>

### Repeating Rows and Panels
It’s now possible to create a Dashboard that automatically adds (or removes) both Rows and Panels based
on selected variable values. Any row or any panel can be configured to repeat (duplicate itself) based
on a multi-value template variable.</p>

![Repeating Rows and Panels](/assets/img/blog/panel-row-repeat.gif "Repeating Rows and Panels")
<br/><br/>

### Dashboard Links & Navigation
To support better navigation between Dashboarads, it's now possible to create custom and dynamic links from individual
Panels to appropriate Dashboards. You also have the ability to create flexible top-level links on any
given Dashboard thanks to the new Dashboard navigation bar feature.

![Dashboard Links](/assets/img/blog/panel-link.png "Dashboard Links")
<br/><br/>

### Better local Dashboard support
Grafana can now index Dashboards saved locally as JSON from a given directory.

> ***Note:*** Saving local dashboards back the folder is not supported; this feature is meant for statically generated JSON dashboards.

- - -

## New Authentication Options
New authentication methods add numerous options to manage users, roles and organizations.
Grafana 2.1 also includes a "Read-only Editor" role.

### LDAP support
This highly requested feature now allows your Grafana users to login with their LDAP credentials.
You can also specify mappings between LDAP group memberships and Grafana Organization user roles.

### Basic Auth Support
You can now authenticate against the Grafana API utilizing a simple username and password with basic HTTP authentication.

> ***Note:*** This can be useful for provisioning and config management systems that need
> to utilize the API without having to create an API key.


### Auth Proxy Support
You can now authenticate utilizing a header (eg. X-Authenticated-User, or X-WEBAUTH-USER)

> ***Note:*** this can be useful in situations with reverse proxies.


### New “Read-only Editor” User Role
There is a new User role available in this version of Grafana: “Read-only Editor”. This role behaves just
like the Viewer role does in Grafana 2.0.  That is you can edit graphs and queries but no save dashboards.
The Viewer role has been modified in Grafana 2.1 so that users assigned this role can no longer edit panels.

- - -

## Data source Improvements

### InfluxDB 0.9 Support
Grafana 2.1 now comes with full support for InfluxDB 0.9. There is a new query editor designed from the start
for the new features InfluxDB 0.9 enables.

![InfluxDB Support](/assets/img/blog/influx-query.gif "InfluxDB Support")
<br/><br/>


### OpenTSDB Data Source improvements
Grafana OpenTSDB data source now supports template variable values queries. This means you can create
template variables that fetches the values from OpenTSDB (for example metric names, tag names, or tag values).
The query editor is also enhanced to limiting tags by metric.

> ***Note:*** OpenTSDB config option tsd.core.meta.enable_realtime_ts must enabled for OpenTSDB lookup api)

### New Data Source: KairosDB
The Cassandra backed time series database KairosDB is now supported in Grafana out of the box. Thank you to
<a href="https://github.com/masaori335" target="_blank">masaori335</a> for his hard work in getting it to this point.

- - -

## Panel Improvements

Grafana 2.1 gives you even more flexibility customizing how individual panels render.
Overriding the colors of specific series using regular expressions, changing how series stack,
and allowing string values will help you better understand your data at a glance.

### Graph Panel
Define series color using regex rule
![Define series color using regex rule  ](/assets/img/blog/regex_color.gif "Define series color using regex rule  ")

New series style override, negative-y transform and stack groups
![Negative-y Transform](/assets/img/blog/negative-y.png "Negative-y Transform")

![Negative-y Transform](/assets/img/blog/negative-y-form.png "Negative-y Transform")

### Singlestat Panel
Now support string values - read more about [Singlestat Panels](../reference/singlestat.md)- - -

### <a href="http://grafana.org/download">Download Grafana 2.1 now</a>

- - -
<br/>

## Thanks to project sponsors
* [Squarespace](http://www.squarespace.com)
* [Dreamhost](http://www.dreamhost.com)
* [Demonware](http://www.demonware.net)
* [Mediamath](https://developer.mediamath.com/OpenSource)

## Subscribe to project updates
<section class="newsletter">
  <form action="http://grafana.us8.list-manage.com/subscribe/post?u=2aeb5711db2aececc990be536&amp;id=5585d37ecc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
    <row class="collapse">
      <div class="medium-10 columns">
        <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address">
      </div>
      <div class="medium-2 columns">
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button postfix">
      </div>
    </row>
  </form>
</section>