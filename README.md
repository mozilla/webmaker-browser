## Webmaker for Browser

[![Build Status](https://travis-ci.org/mozilla/webmaker-browser.svg)](https://travis-ci.org/mozilla/webmaker-browser)

Mozilla Webmaker's mission is to help enable a new generation of digital creators and webmakers, giving people the tools and skills they need to move from using the Web to actively making the Web.

## Getting Started

#### Prerequisites
Before you jump into the code you'll want to download, install, and configure the following:

- [Node 0.12+](https://nodejs.org/) w/ ES6 ("harmony") features enabled
- [NPM 2.6+](https://www.npmjs.com/)

#### Clone & Install Dependencies
```bash
git clone https://github.com/mozilla/webmaker-browser
cd webmaker-browser
npm install
```

#### Starting the Server
```bash
npm start
```

## Deployment
Deployment to `staging` and `production` servers is automated via [Travis-CI](https://travis-ci.org/).

`develop` – Deploys to https://webmaker-desktop-staging.herokuapp.com

`master` – Deploys to https://webmaker-desktop-production.herokuapp.com

## Localization

In this project we're using [React-Intl](https://github.com/yahoo/react-intl) to localize our application and YAML for translation.

#### Localize a component or page

To localize a component or page you have to include `IntlMixin` in your class `mixins`, for example:

``` typescript
var React = require('react');

var Example = React.createClass({
  mixins: [require('react-intl').IntlMixin],
  render: function() {
    return (
      <div>
        <h1>{this.getIntlMessage('key_name_here')}
      </div>
    );
  }

});
```

If the strings include HTML, use the `FormattedHTMLMessage` element:

``` typescript
import { FormattedHTMLMessage, IntlMixin } from 'react-intl';

<FormattedHTMLMessage
  message={ this.getIntlMessage("key_name_here") }
/>
```

Once you add the mixin it will expose the `getIntlMessage` method to your component to get the localized message for the given key.

#### Adding locale
Because we are using YAML for our translation and React-Intl expects JSON, we need an extra build step to convert YAML to JSON.
We are using [yaml-intl-xml-json-converter](https://www.npmjs.com/package/yaml-intl-xml-json-converter) to convert from YAML to JSON.

##### config for for YAML to JSON conversion

`intl-config.json`
``` json
{
  "supportedLocales": ["en-US", "de", "fr", "pt-BR", "es"],
  "dest": "locales",
  "src": "locales",
  "type": "json"
}
```

##### YAML template

`en-US.yaml`
``` yaml
---
en-US:
  first: This is your first message
  second: This is your second message
```

You have to make sure you match your language code in your YAML file and the name of the file with what you include in your config file for the converting part otherwise it will fail.

### I18N Methods

`i18n.js` file exposes different methods to help with localization. These are the list of available methods when you required the module.

``` js
{
  intlData: {messages: {}, locales: {}},
  defaultLang: 'en-US',
  currentLanguage: locale,
  isSupportedLanguage: function(lang),
  intlDataFor: function(lang)
}
```

1. `intlData`
  This object consist of two properties. `locales` and `messages`. We use this object to pass it to React-Router in order for `getIntlMessage` to work properly.

2. `defaultLang`
  This will return default language of the application.

3. `currentLanguage`
  This will return current language of the client that visiting our site.

4. `isSupportedLanguage`
  This method expect a valid language code, and it's used to validate if we support that given language or not.
  The return value is boolean.

5. `intlDataFor`
  This method expect a valid language code, and it will return `intlData` for the given language.

## Post localization

To fully localized the app we need to make sure we update the resource file on Transifex.
This step requires that you have the required credential to upload the resource file on the Transifex's Webmaker project.

If you do not have the credential please speak @alicoding on IRC or any of the coordinator of the project for Webmaker on Transifex.

NOTE: There should be a weekly cycle where we upload the file on Transifex to avoid any problem that could occur.

## Contact Us
IRC: `#webmaker` on `irc.mozilla.org`

Forum: [https://groups.google.com/forum/#!forum/mozilla.webmaker](https://groups.google.com/forum/#!forum/mozilla.webmaker)
