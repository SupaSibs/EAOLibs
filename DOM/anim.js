"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animations = exports.addcss = void 0;
function addcss(css) {
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.appendChild(document.createTextNode(css));
    head.appendChild(s);
}
exports.addcss = addcss;
exports.animations = {
    fadeIn: (animName, selector, iterations, duration) => {
        const css = `
${selector} {
animation-duration: ${duration};
animation-name: ${animName};
animation-iterations: ${iterations};
}

@keyframes ${animName} {
from {
opacity: 0;
}

to {
opacity: 1.0;
}
}
	`;
        addcss(css);
    },
    slideIn: (animName, selector, iterations, direction, duration) => {
        const css = `
${selector} {
  animation-duration: ${duration};
  animation-name: ${animName};
  animation-iterations: ${iterations};
}

@keyframes ${animName} {
  from {
    margin-${direction}: 100%;
    width: 300%;
  }

  to {
    margin-${direction}: 0%;
    width: 100%;
  }
}
`;
    }
};
