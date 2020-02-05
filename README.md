# Marble
Marble is the Design System used by The Metropolitan Museum of Art

![marbling paper by MarbleJournals.com](https://ds62n8mqpnstb.cloudfront.net//full_Escanear-6r.jpg)

## Using Marble
You can import marble into your project using npm.

To continuously use the latest version: `npm install metmuseum/marble -S`

To lock in at a specific release: `npm install metmuseum/marble#vX.X.X -S`

To Include all Marble CSS through SCSS:
  `@include "marble/src/marble"`

To include a specific piece of marble:
`@include "marble/src/components/componentName"`


## For Development
Run `npm install` to fetch dependencies.

To run webpack with a watcher and local dev server: `npm run start`

To generate the dist files run `npm run build`
