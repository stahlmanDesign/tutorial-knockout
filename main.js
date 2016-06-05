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