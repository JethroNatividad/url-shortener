import React, { useEffect } from 'react'
import { collection, where, query, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from '../firebase';

const UrlRedirect = () => {
    useEffect(() => {
        async function main() {
            // find data which has short_url equal to the current url
            const urlsRef = collection(db, "urls");
            const q = query(urlsRef, where("short_url", "==", window.location.pathname.slice(1)));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(async (d) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(d.id, " => ", d.data());
                const currentRef = doc(urlsRef, d.id);
                await updateDoc(currentRef, { clicks: d.data().clicks + 1 });

                // redirect to the main url
                window.location.href = d.data().main_url;
            });
        }
        main()
    }, [])
    return (
        <div>
            Redirecting ...
        </div>
    )
}

export default UrlRedirect
