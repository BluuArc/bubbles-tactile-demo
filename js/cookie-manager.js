//code for individual functions from https://www.w3schools.com/js/js_cookies.asp
var cookieManager = cookieManager || {
    set: (name,value,lifetimeInDays) => {
        let d = new Date();
        d.setTime(d.getTime() + (lifetimeInDays * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${d.toUTCString()};`;
    },
    get: (name) => {
        let values = document.cookie.split(';');
        let key = `${name}=`;
        for(let i = 0; i < values.length; ++i){
            let c = values[i];
            while(c.charAt(0) === ' '){
                c = c.substring(1);
            }

            if(c.indexOf(key) === 0){
                return c.substring(key.length,c.length);
            }
        }
        return "";
    }
};