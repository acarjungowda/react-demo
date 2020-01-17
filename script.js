function insertBefore(newElement, referenceNode) {
    referenceNode.parentNode.insertBefore(newElement, referenceNode);
}

function insertAfter(newElement, referenceNode) {
    referenceNode.parentNode.insertBefore(newElement, referenceNode.nextSibling);
}

function $(selector) {
    console.log(selector);
    if (!selector || selector === undefined || selector.length == 0) {
        return undefined;
    } else if (selector.startsWith(".")) {
        return document.getElementsByClassName(selector.substring(1, selector.length));
    } else if (selector.startsWith("#")) {
        return document.getElementById(selector.substring(1, selector.length));
    } else {
        return undefined;
    }
}