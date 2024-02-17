
interface TokenObject {
    id: number;
    token: string;
}
export const Utils = {
    GetTokenUser: async (accessToken: string) => {
        sessionStorage.setItem("token", accessToken);
        const indexedDB = window.indexedDB 

        // Open (or create) the database
        const open = indexedDB.open("CoinPouch", 1);
        
        // Create the schema
        open.onupgradeneeded = function() {
            const db = open.result;
            const store = db.createObjectStore("ObjectStorage", {keyPath: "id"});
            store.createIndex("Indexdb", ["token"]);
        };
        
        open.onsuccess = function() {
            // Start a new transaction
            const db = open.result;
            const tx = db.transaction("ObjectStorage", "readwrite");
            const store = tx.objectStore("ObjectStorage");
             store.index("Indexdb");
        
            // Add some data
            store.put({id: 4343434, token: accessToken});

            const getToken = store.get(12345);
            getToken.onsuccess = function() {
                return getToken.result;
            };
            
            // Close the db when the transaction is done
            tx.oncomplete = function() {
                db.close();
            };
        }
    },
    readToken: (): Promise<TokenObject> => {
        return new Promise((resolve, reject) => {
            let tokenperson = "";
            const indexedDB = window.indexedDB;
            const open = indexedDB.open("CoinPouch", 1);
    
            open.onupgradeneeded = function() {
                const db = open.result;
                const store = db.createObjectStore("ObjectStorage", {keyPath: "id"});
                store.createIndex("Indexdb", ["token"]);
            };
    
            open.onsuccess = function() {
                const db = open.result;
                const tx = db.transaction("ObjectStorage", "readwrite");
                const store = tx.objectStore("ObjectStorage");
                store.index("Indexdb");
    
                store.put({id: 4343434, token: "accessToken"});
    
                const getToken = store.get(12345);
                console.log("🚀 ~ returnnewPromise ~ getToken:", getToken)
                getToken.onsuccess = function() {
                    tokenperson = getToken.result
                    console.log("🚀 ~ returnnewPromise ~ tokenperson:", tokenperson)
                    resolve({id: 1, token: tokenperson});
                };
    
                tx.oncomplete = function() {
                    db.close();
                };
            };
    
            open.onerror = function() {
                reject(new Error("Failed to open database"));
            };
        });
    },
     getTokenAuth: async (action:string) =>{

         return Utils.readToken().then((token) => {
             console.log("🚀 ~ returnUtils.readToken ~ token:", token)
             const  headers = {
                 Authorization: `${token.token == undefined ? sessionStorage.getItem("token") : token.token}`,
                 Action: "$BNDsjds5438594",
                 Ip: window.location.hostname,
                 "Content-Type": "application/json",
                 action: action,
         
             };
             console.log(headers, "headers");
             return headers;
           
            });
        


    },

    closeAccount:() => {
        localStorage.clear();
        indexedDB.deleteDatabase("CoinPouch");
        
    }
}

