import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useRef } from 'react';

function Scanner() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const script = document.createElement("script");
        script.src = "https://unpkg.com/html5-qrcode";
        script.async = true;
        containerRef.current.appendChild(script);

        console.log("Scanner component rendered");
        function onScanSuccess(decodedText, decodedResult) {
            // Handle on success condition with the decoded text or result.
            console.log(`Scan result: ${decodedText}`, decodedResult);
        }

        const html5QrcodeScanner = new Html5QrcodeScanner(
                "reader", { fps: 10, qrbox: 250 });
        html5QrcodeScanner.render(onScanSuccess);

            return () => {
                if (containerRef.current) {
                    containerRef.current.removeChild(script);
                }
            };
    }, []);

    return(
        <div ref={containerRef} id="reader" style={{ width: "600px" }} ></div>
    );
}

export default Scanner;