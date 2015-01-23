# HTML Invoice Generator

This Invoice Generator will easily transform your HTML invoice template in fully functional invoice editor. To create your own invoice template and use it with this generator see the [Create your own invoice template](#create-your-own-invoice-template) section.

## Setup

To make changes to the generator you'll need Node.js with npm so make sure it is installed on your machine. After this install grunt command line tool globally with:

`npm install -g grunt-cli`

And from the project's root install the dependencies with:

`npm install`

### Development
For easier development you can watch all files for changes and use auto livereload with the default task `grunt`.

### Build

To build the generator just run `grunt dev` or `grunt prod` on the command line. Those will produce fully functional template and generator files in the `dist` folder. The production version will produce minimized JavaScript and CSS files unlike the development version which is meant for easier debugging.

## Supported browsers

The generator script is tested and confirmed that is fully functional in:

* Chrome
* Firefox
* Safari 6+
* Opera 15+
* Internet Explorer 10+

## Create your own invoice template

The major rule we have for this is **never start from scratch** so we encourage you to download the default Invoicebus [template](http://cdn.invoicebus.com/generator/template.zip) and use it as starting point for creating your custom invoice template. Refer to our [official guide](https://invoicebus.com/how-to-create-invoice-template/) on how to further customize your template.

## Issues and feedback

If you found bugs please submit them [here](https://github.com/Invoicebus/html-invoice-generator/issues). For general questions and feedback use our [support forum](https://groups.google.com/d/forum/html-invoice-generator).

## License

The Invoice Generator is under MIT license. See the [LICENSE](https://github.com/Invoicebus/html-invoice-generator/blob/master/LICENSE).
