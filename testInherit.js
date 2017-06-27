/*
 * test inherit
 */

/**
 * extend child from parent
 * @param {*} p parent 
 * @param {*} c child
 */
function deepCopy(p, c) {
    var c = c || {};
    for (var i in p) {
        if (typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i]);
        } else {
            c[i] = p[i];
        }
    }
    return c;
}

var parent = {
    property1: "property1",
    property2: "property2",
    property3: "property3"
}

var child = deepCopy(parent,{
    property_child1: "property_child1",
    property_child2: "property_child2"
});

(function(obj){
    for (var i in obj ) {
        console.log(obj[i]); // should be:property_child1, property_child1, property1, property2, property3, 
    }
})(child);