'use strict';

module.exports = {
    isSet : function (theThing) {
        return this.not(
            this.isNull(theThing));
    },

    isNull : function (theThing) {
        return typeof theThing === 'undefined' || theThing === null;
    },

    isBlank : function (theThing) {
        return this.isNull(theThing) ||  theThing === '';
    },

    not : function (booleanValue) {
        return !booleanValue;
    }
};