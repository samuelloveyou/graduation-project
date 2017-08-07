shareBike.controller("mainCtrl", function ($scope) {
    myFunction = function () {
        document.getElementById("demo").innerHTML = 'welcome to: "share a bike"';
    }

    yourFunction = function () {
        var x = document.getElementById('myDIV');
        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
    }

    ourFunction = function () {
        var x = document.getElementById('my');
        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
    }

});