
function getData() {
    return new Promise((res, rej) => {

        setTimeout(function () {
            console.log('data fetched');

        }, 1000)
    })
}



async function ab() {
    try {
        let d = await getData();

    } catch (err) {
        console.log(err);

    }
}

ab()


//----------------------------------------------------


function checkSystemStatus(isOnline) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isOnline) {
                resolve("System check passed.");
            } else {
                reject(new Error("NETWORK TIMEOUT: Server is unresponsive."));
            }
        }, 1000);
    });
}

async function runCheck() {
    try {
        const result = await checkSystemStatus(true);
        console.log("Result:", result); 

    } catch (error) {
        console.error("Error caught:", error.message);
    }
}

runCheck();

// err -  stack | message | name 