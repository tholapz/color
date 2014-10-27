(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['underscore', 'exports'], function(_, exports) {
            root.Kamol = factory(root, exports, _);
        });
    } else if (typeof exports !== 'undefined') {
        var _ = require('underscore');
        factory(root, exports, _);
    } else {
        root.Kamol = factory(root, {}, root._);
    }
}(this, function(root, Kamol, _) {
    var otherKamol = root.Kamol;
    Kamol.noConflict = function() {
        root.Kamol = otherKamol;
        return this;
    };

    var Color = Kamol.Color = function(str) {
        var regex = /^#([0-9a-f]{3}){1,2}$/i;
        if (regex.exec(str) === null)
            return false;

        if(str.length > 4) {
            this.r = parseInt('0x' + str.substr(1,2));
            this.g = parseInt('0x' + str.substr(3,2));
            this.b = parseInt('0x' + str.substr(5,2));
        } else {
            this.r = parseInt('0x' + str[1]);
            this.g = parseInt('0x' + str[2]);
            this.b = parseInt('0x' + str[3]);
        }
        this.a = 1.0;
        return this;
    }

    _.extend(Color.prototype, {
        setAlpha: function(val) {
            this.a = val;
        }
        , toRGB: function() {
            return "rgb(" + this.r + "," + this.g + "," + this.b + ")"
        }
        , toRGBA: function() {
            return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a.toString(2f) + ")"
        }
        , toHex: function() {
            return "#" + this.r.toString(16).toUpperCase() + this.g.toString(16).toUpperCase() + this.b.toString(16).toUpperCase();
        }

    })

    return Kamol;
}));
