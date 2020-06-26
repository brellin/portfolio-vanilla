// applies a callback function to each child of an element
const applyToEach = (el, cb) => { for (let i = 0; i < el.childElementCount; i++) cb(el.children[ i ]); };

// clears everything from within the given element
const clear = el => {
    const len = el.childElementCount;
    let i = 0;
    while (i < len) {
        el.removeChild(el.children[ 0 ]);
        i++;
    }
};

export { applyToEach, clear };
