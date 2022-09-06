import { useEffect } from 'react';

const useScript = (url, text) => {
    useEffect(() => {
        const script = document.createElement('script');
        if (text !== "") {
            script.text = text;
        }

        if (url !== ""){
            script.src = url;
        }
        script.async = false;

        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, [url, text]);
};

export default useScript;