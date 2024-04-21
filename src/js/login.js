export const initLogin = async (app) => {
    try{
        const response = await fetch('src/views/login.html');
        const html = await response.text();
        app.innerHTML = html;
    }catch(error){
        console.error('Error loading HTML file:', error);
        app.innerHTML = '<p>Error loading content.</p>';
    }
    //LOGICA DE LA VISTA
    
};