import { useEffect } from 'react';

const useLink = (url, page) => {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
        // Remove util css
        link.href= url

        if (document.getElementById("util") && page === "admin"){
            link.id = "app"
            document.getElementById("util").remove()
        }

        if (document.getElementById("app") && page === "app"){
            link.id = "util"
            document.getElementById("app").remove()
        }
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        }
    }, [url]);
};

export default useLink;