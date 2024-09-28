import { useEffect, useState } from "react";

export default function useNetworkCheck() {
    const [useNetworkAvailable, setNetworkAvailable] = useState(window.navigator.onLine);

    //Effect hook to update network status

    useEffect(() => {
        function updateOnlineStatus() {
            setNetworkAvailable(window.navigator.onLine);
        }
        window.addEventListener("online", updateOnlineStatus);
        window.addEventListener("offline", updateOnlineStatus);

        return () => {
            window.removeEventListener("online", updateOnlineStatus);
            window.removeEventListener("offline", updateOnlineStatus);
        }
    },[])
    return useNetworkAvailable;
}