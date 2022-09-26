import { useEffect } from 'react';

const useScript = (url, text) => {
    useEffect(() => {

        for (let i = 0; i < url.length; i++){
            const script = document.createElement('script');
            script.async = false;
            if (text[i] !== "") {
                script.text = text[i];
            }
            if (url[i] !== ""){
                script.src = url[i];
            }
            document.body.appendChild(script);
            document.body.removeChild(script);

        }
        return () => {
            // document.body.removeChild(script);
        }
    }, [url, text]);
};

export default useScript;