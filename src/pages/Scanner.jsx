import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from "html5-qrcode";
import { useEffect } from 'react';
import { checkItem, incrementItemAmount } from '../components/scripts';

function Scanner() {
    useEffect(() => {
        let cancelled = false;
        let html5QrcodeScanner;

        function onScanSuccess(decodedText, decodedResult) {
            // Handle on success condition with the decoded text or result.
            console.log(`Scan result: ${decodedText}`, decodedResult);
            checkItem(decodedText).then((itemData) => {
                if (itemData) {
                    console.log("Item found: ", itemData);
                    // Increment the amount of the item in inventory
                    // Create notification to user that item was found and amount was incremented
                    incrementItemAmount(itemData.id).then(() => {
                        console.log("Item amount incremented in inventory");
                    });
                } else {
                    console.log("No item found with the provided code.");
                    // Ask to add item to inventory

                }
            });
        }

        // Deferred to a microtask so that React StrictMode's synchronous
        // setup->cleanup->setup dev-mode double-invoke can cancel the
        // throwaway first run before a scanner is ever constructed.
        // Otherwise its async camera-permission callbacks land in the DOM
        // after the real instance has rendered, producing two scanner UIs.
        Promise.resolve().then(() => {
            if (cancelled) return;

            html5QrcodeScanner = new Html5QrcodeScanner(
                "reader",
                {
                    fps: 10,
                    qrbox: 250,
                    formatsToSupport: [
                        Html5QrcodeSupportedFormats.QR_CODE,
                        Html5QrcodeSupportedFormats.EAN_13,
                        Html5QrcodeSupportedFormats.EAN_8,
                        Html5QrcodeSupportedFormats.UPC_A,
                        Html5QrcodeSupportedFormats.UPC_E,
                        Html5QrcodeSupportedFormats.CODE_128,
                        Html5QrcodeSupportedFormats.CODE_39,
                        Html5QrcodeSupportedFormats.CODABAR,
                        Html5QrcodeSupportedFormats.ITF,
                    ],
                },
                false
            );
            html5QrcodeScanner.render(onScanSuccess);
        });

        return () => {
            cancelled = true;
            if (html5QrcodeScanner) {
                html5QrcodeScanner.clear().catch((error) => {
                    console.error("Failed to clear html5QrcodeScanner.", error);
                });
            }
        };
    }, []);

    return (
        <div id="reader" style={{ width: "600px" }}></div>
    );
}

export default Scanner;