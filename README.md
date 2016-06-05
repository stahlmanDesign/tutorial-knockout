# Learning Knockout.js

- Install Knockout.js in new folder with npm `npm install knockout --save`
	- Didn't work? Requires presence **package.json** file. `npm init` will create one
- create html file that loads knockout script
	`<script type="text/javascript" src="node_modules/knockout/build/output/knockout-latest.js"></script>
`
- Example based on [tutorial][1]:
[1]:http://learn.knockoutjs.com/#/?tutorial=intro
- `index.html`

	```	<html>
<head>
    <script type="text/javascript" src="http://livejs.com/live.js"></script>
</head>
<body>
    <!-- This is a *view* - HTML markup that defines the appearance of your UI -->
    <p>First name: <strong data-bind="text: firstName">todo</strong></p>
    <p>Last name: <strong data-bind="text: lastName">todo</strong></p>
    <p>Full name: <strong data-bind="text: fullName"></strong></p>

    <!-- This is a *view* - HTML markup that defines the appearance of your UI -->
<hr>
<label>Name</label>
    <p>First: <input data-bind="value: firstName" /></p>
    <p>Last: <input data-bind="value: lastName" /></p>
    <button data-bind="click: capitalizeLastName">Toggle caps</button>
    <script type="text/javascript" src="node_modules/knockout/build/output/knockout-latest.js"></script>
    <script type="text/javascript" src="main.js"></script>
</body>
</html>

- `main.js`:
	<pre>
// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {

    // observable - values that can change
    this.firstName = ko.observable("Johnny");
    this.lastName = ko.observable("Cash");

    // computed
    this.fullName = ko.computed(function () {
        return this.firstName() + " " + this.lastName();
    }, this);

    //general helper function
    this.capitalizeLastName = function () {
        var currentVal = this.lastName();        // Read the current value
        if (!this.isCapitalized)
            this.lastName(currentVal.toUpperCase()); // Write back a modified value
        else {
            var low = currentVal.toLowerCase();
            var cap = low.charAt(0).toUpperCase() + low.slice(1)
            this.lastName(cap);
        }
        this.isCapitalized = !this.isCapitalized; // toggle
    };
    this.isCapitalized = false;
}

	// Activates knockout.js
	ko.applyBindings(new AppViewModel());


</pre>

- you have bound data to the DOM elements and they update upon change:


    <!-- This is a *view* - HTML markup that defines the appearance of your UI -->
    <p>First name: <strong data-bind="text: firstName">Johnny</strong></p>
    <p>Last name: <strong data-bind="text: lastName">CASH</strong></p>
    <p>Full name: <strong data-bind="text: fullName">Johnny CASH</strong></p>

    <!-- This is a *view* - HTML markup that defines the appearance of your UI -->
<hr>
<label>Name</label>
<br/>
    <p>First: <input data-bind="value: firstName"></p>
    <p>Last: <input data-bind="value: lastName"></p>
    <button data-bind="click: capitalizeLastName">Toggle caps</button>
    

    <script type="text/javascript" src="node_modules/knockout/build/output/knockout-latest.js"></script>
    <script type="text/javascript" src="main.js"></script>




</body>
