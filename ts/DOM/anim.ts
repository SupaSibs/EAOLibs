export function addcss(css: string){
  var head = document.getElementsByTagName('head')[0];
  var s = document.createElement('style');
  s.setAttribute('type', 'text/css');
     s.appendChild(document.createTextNode(css));
 head.appendChild(s);
 }

export const animations: object = {
fadeIn: (animName: string, selector: string, iterations: number, duration: number,) => {
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
	`
addcss(css);
},


slideIn: (animName: string, selector: string, iterations: number, direction: number, duration: number) => {
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
` 
}
}
