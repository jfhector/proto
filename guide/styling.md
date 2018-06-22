# Styling

## Using the css modules

Define a separate CSS file for each component. 

Import the css file into the component. Each component has:
```
import * as s from './App.css'
```

?? s refers to .. .. ..


## Defining a prototyping colour palette using CSS properties in index.css

```
:root {
/* COLOR REFERENCES */
--color_shark: #25272c;

/* BOOTSTRAP PALETTE */
--color_azureRadiance: #007bff;
--color_greenHaze: #01a368;
--color_cinnabar: #e34234;
--color_easternBlueLight: #1e9ab0;
--color_outerSpace: #2d383a;
--color_paleSky: #6e7783;
--color_iron: #d4d5d9;
--color_athensGray: #eef0f3;
--color_fbfbfc: #fbfbfc;

/* DUNNHUMBY PALETTE */
--color_tuatara: #363534;

/* TEXT COLOR PALETTE */
--textColor_default: var(--color_shark);
--textColor_grey: var(--color_paleSky);
--textColor_links_active: var(--color_azureRadiance);
--textColor_links_disabled: var(--color_paleSky);
--textColor_alert_primary: #004085;

...
}
```

Here's how to use these colour references in a component's css file:
```
color: var(--textColor_default);
```


## Reseting some default styles in index.css

```
html {
font-size: 10px;
font-family: system-ui, sans-serif;
color: var(--textColor_default);
}

body {
margin: 0;
background-color: var(--backgroundColor_backgrounds_athensGray);
}

* {
box-sizing: border-box;
}

p {
margin: 0;
}

div {
user-select: none;
}
```
