export const navigateTo = ({ path }) => {
    window.location.href = `${window.location.origin}${path}`;
};

export const openInNewTab = ({ path, absolute }) => {
    let url = absolute ? path : `${window.location.origin}${path}`;
    window.open(url, "_blank").focus();
};

export const is = (() => {
    function getType(obj) {
        return Object.prototype.toString.call(obj).slice(8, -1);
    }
    function is(type, obj) {
        var clas = getType(obj);
        return obj !== undefined && obj !== null && clas === type;
    }
    is.Email = function (obj) {
        return is.String(obj) && obj.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    };
    is.Function = function (obj) {
        return is("Function", obj);
    };
    is.Object = function (obj) {
        return is("Object", obj);
    };
    is.Array = function (obj) {
        return is("Array", obj);
    };
    is.Null = function (obj) {
        return is("Null", obj);
    };
    is.Undefined = function (obj) {
        return getType(obj) === "Undefined";
    };
    is.Number = function (obj) {
        return is("Number", obj);
    };
    is.String = function (obj) {
        return is("String", obj);
    };
    is.Value = function (obj) {
        var clas = getType(obj);
        return !(clas === "Undefined" || clas === "Null");
    };
    is.Empty = function (obj) {
        // Doesn't work for Date Objects
        var clas = getType(obj);
        switch (clas) {
            case "Undefined":
            case "Null":
                return true;
            case "Boolean":
                return obj;
            case "Number":
                return obj === 0;
            case "String":
            case "Array":
                return obj.length === 0;
            default:
                for (var key in obj) {
                    if (hasOwnProperty.call(obj, key)) return false;
                }
                return true;
        }
        return !(is.Undefined(obj) || is.Null(obj));
    };
    is.Valid = function (condition, message) {
        if (!condition && is.String(message)) {
            throw Error(message);
        }
        return !!condition;
    };
    return is;
})();

export function serializeParams(params) {
    var str = "";
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            if (str !== "") str += "&";
            str += key + "=" + params[key];
        }
    }
    return str;
}

export function debounce(fn, delay, fn2) {
    var timer = null;
    return function () {
        var context = this,
            args = arguments;
        if (typeof fn2 === "function") fn2.apply(context, args);
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}

export function throttle(fn, wait) {
    let inThrottle, lastFn, lastTime;
    return function () {
        const context = this,
            args = arguments;
        if (!inThrottle) {
            fn.apply(context, args);
            lastTime = Date.now();
            inThrottle = true;
        } else {
            clearTimeout(lastFn);
            lastFn = setTimeout(function () {
                if (Date.now() - lastTime >= wait) {
                    fn.apply(context, args);
                    lastTime = Date.now();
                }
            }, Math.max(wait - (Date.now() - lastTime), 0));
        }
    };
}

export function notify(title, msg) {
    let notification;
    let options = {};
    if (msg) options.body = msg;
    if (!("Notification" in window)) {
        console.error("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
        notification = new Notification(title, options);
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                notification = new Notification(title, options);
            }
        });
    }
    return notification;
}

export function exportToCSV(rows) {
    let csvContent = "data:text/csv;charset=utf-8,";
    rows.forEach(function (rowArray) {
        rowArray = rowArray.map(cell => `"${cell}"`);
        let row = rowArray.join(",");
        csvContent += row + "\r\n"; // add carriage return
    });
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "transaction_history.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
}

export function toTitleCase(str) {
    if (!str) return "";
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export function toSentenceCase(str) {
    if (!str) return "";
    return str.trim().charAt(0).toUpperCase() + str.trim().substr(1).toLowerCase();
}

export function toCapitalise(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function numberWithCommas(x) {
    if (isNaN(x) || x === null) return "";
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function round(number, precision) {
    if (precision === undefined) return number;
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
}

export function roundDown(number, precision) {
    if (precision === undefined) return number;
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = -Math.round(-tempNumber);
    return roundedTempNumber / factor;
}

export function roundedWithCommas(number, precision) {
    if (isNaN(number) || number === null) return "";
    return numberWithCommas(round(number, precision));
}

export function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export function createFormData(obj, form, namespace) {
    let fd = form || new FormData();
    let formKey;

    for (let property in obj) {
        if (obj.hasOwnProperty(property) && obj[property]) {
            if (namespace) {
                formKey = namespace + "[" + property + "]";
            } else {
                formKey = property;
            }

            // if the property is an object, but not a File, use recursivity.
            if (typeof obj[property] === "object" && !(obj[property] instanceof File)) {
                createFormData(obj[property], fd, formKey);
            } else {
                // if it's a string or a File object
                fd.append(formKey, obj[property]);
            }
        }
    }

    return fd;
}

export function flattenObject(obj) {
    let newObj = {};

    function dive(currentKey, into, target) {
        for (let i in into) {
            if (into.hasOwnProperty(i)) {
                let newKey = i;
                let newVal = into[i];

                if (currentKey.length > 0) {
                    newKey = currentKey + "." + i;
                }

                if (typeof newVal === "object") {
                    dive(newKey, newVal, target);
                } else {
                    target[newKey] = newVal;
                }
            }
        }
    }
    dive("", obj, newObj);
    return newObj;
}

export function clone(obj) {
    return is.Object(obj) || is.Array(obj) ? JSON.parse(JSON.stringify(obj)) : obj;
}

export function classnames(permanentClasses, conditionalClasses) {
    return Object.keys(conditionalClasses).reduce((finalClasses, nextClassName) => {
        return conditionalClasses[nextClassName] ? finalClasses.concat(" ", nextClassName) : finalClasses;
    }, permanentClasses);
}

export function isValidPAN(val) {
    let regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    return regpan.test(val.trim());
}

export function isValidAadhaar(val) {
    let regEx = /^\d{12}$/;
    return regEx.test(val.trim());
}

export function isValidGST(val) {
    let reggst = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return reggst.test(val.trim().toUpperCase());
}

export function removeEmoji(str) {
    //return str.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF]|[\uF600–\uF64F])/g, '');
    return str.replace(
        /[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF]/g,
        ""
    );
}
