/* importar estilos */
import {router} from './router.js';
function getPathnameFromHash() {
    const hashPath = window.location.hash;
    if (hashPath === '') {
        return '/';
    }else{
        return hashPath.slice(1);
    }
}


const init = () => {
    router(getPathnameFromHash());
    console.log(`Navigated to: ${window.location.hash}`);
    window.addEventListener('popstate', () =>{
        router(getPathnameFromHash());
        console.log(`Navigated to: ${window.location.hash}`);
    });
};

window.addEventListener('load', init);