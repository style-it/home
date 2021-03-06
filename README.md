<section id="playground" class="styleIt">

<div class="container" data-aos="fade-up">

<div class="section-title">

## Text Editor API concepts

</div>

<div class="row">

<div class="col-lg-10">

### Installation

Node package

Source from CDN(Coming Soon)

Local file from project

<div>

## Node module

a

###### Install the package via npm

<div class="code-wrapper">`npm i styleit-api --save`</div>

</div>

Include the module in your application

<div class="code-wrapper">`import StyelIt from 'styleit-api';`</div>

## Load from CDN

`coming soon!`  

## Initialization

In order to inizialize StyleIt, you need to pass the Element Object or Element Id to the StyleIt constracture. Note that StyleIt will be available only on this element and its child nodes.

<div>

<div class="code-wrapper">`import StyelIt from 'styleit-api';  
const styleIt = new StyleIt(*Element Object or Element Id*);`</div>

</div>

## StyleIt provides two working modes

<div class="code-wrapper">`import StyelIt from 'styleit-api';  
const styleIt = new StyleIt(*Element Object or Element Id*);  
cont MODES = StyleIt.Modes;`</div>

<table class="table  table-striped">

<tbody>

<tr>

<th scope="col">Mode</th>

<th scope="col">Type</th>

<th scope="col">Description</th>

</tr>

<tr>

<td>Toggle</td>

<td>String</td>

<td>Style elements with on/off functionality => like bold,underline,italic</td>

</tr>

<tr>

<td>Extend</td>

<td>String</td>

<td>Only extends the currect style => font-size, color, backgorund</td>

</tr>

</tbody>

</table>

<div>Note that the Extend mod will not cancel the style when selecting the same rule twice.</div>

## How to use

Modes.Toggle

<div class="code-wrapper">`import StyelIt from 'styleit-api';  
const styleIt = new StyleIt(*Element Object or Element Id*);  
const underline =()=> styleIt.execCmd('text-decoration', 'underline', Modes.Toggle);  
const bold =()=> styleIt.execCmd('font-weight', 'bold', Modes.Toggle);`</div>

Modes.Extend

<div class="code-wrapper">`import StyelIt from 'styleit-api';  
const styleIt = new StyleIt(*Element Object or Element Id*);  
const changeColor =(color)=> styleIt.execCmd('color', color, Modes.Extend);  
const changeSize =(size)=> styleIt.execCmd('font-size', size, Modes.Extend);`</div>

## With Options

<div class="code-wrapper">`import StyelIt from 'styleit-api';  
const styleIt = new StyleIt(*Element Object or Element Id*);  
const changeAlign =(align)=> styleIt.execCmd('text-align', align, Modes.Extend,{  
target:'block'  
});  
`</div>

<table class="table   table-striped">

<tbody>

<tr>

<th scope="col">Tool</th>

<th scope="col">Configuration</th>

<th scope="col">Description</th>

</tr>

<tr>

<td>Target</td>

<td>{target:'block'}</td>

<td>Will apply on the closest P or DIV tag element</td>

</tr>

<tr>

<td>as</td>

<td>{as:'inline'}</td>

<td>Will apply as inline inside P with block options</td>

</tr>

<tr>

<td>Selection</td>

<td>{selection:false}</td>

<td>selection false will prevent text to wrap with selection</td>

</tr>

</tbody>

</table>

## Css Class API

The Css Class API lets you create a Css class with your pre-made rules. You can pass this class to a StyleIt object and use it as a markup just like underline or bold.

### How to use

<div class="code-wrapper">`import StyelIt from 'styleit-api';  
const styleIt = new StyleIt(*Element Object or Element Id*);  
const toggleClass =(name)=> styleIt.ToggleClass(name);  
`</div>

## API Tools

<table class="table   table-striped">

<tbody>

<tr>

<th scope="col">Tool</th>

<th scope="col">Configuration</th>

<th scope="col">Description</th>

</tr>

<tr>

<td>Undo Redo</td>

<td>None</td>

<td>Coming soon!</td>

</tr>

<tr>

<td>Keyboard</td>

<td>const config = {  
onKeyPress:[  
["b",()=> StyleIt.ExecCmd("font-weight", "bold", StyleIt.Modes.Toggle)]  
],  
}  
const styleIt = new StyleIt(*Element Object or Element Id*,config);</td>

<td>The first item will be the key name and the second will be the function.</td>

</tr>

<tr>

<td>Copy Paste</td>

<td>None</td>

<td>Copies the text with it's style. (Works only when using Copy/Paste inside a StyleIt Holder)</td>

</tr>

<tr>

<td>Inspector</td>

<td>const config = {  
onInspect: (styles) => {  
// the styles on the element..  
},  
}  
const styleIt = new StyleIt(*Element Object or Element Id*,config); }</td>

<td>The inspector will trigger your function on every style change with the style in a key-value format.</td>

</tr>

</tbody>

</table>

## Inspector

<div class="code-wrapper">`const config = {  
onInspect: (styles) => {  
//grab the style  
},  
const styleIt = new StyleIt(*Element Object or Element Id*,config); }`</div>

### Save Function

<div class="code-wrapper">`const styleIt = new StyleIt(*Element Object or Element Id*,config);  
const savedContent = styleIt.Save();`</div>

###### Will create a clean JSON from your content. Note that this function will also filter every invalid tags and chars.

### Load Function

<div class="code-wrapper">`const styleIt = new StyleIt(*Element Object or Element Id*,config);  
styleIt.Load(savedJson);`</div>

###### Will create a html markup from your JOSN content and will append it into the end of the editor.

and will inject it into the container.

###### Load can use only json Data from the Save method.

### Destroy

###### Will remove all StyleIt functionality.

<div class="code-wrapper">`const styleIt = new StyleIt(*Element Object or Element Id*,config);  
styleIt.Destroy();`</div>

</div>

</div>

</div>

</section>