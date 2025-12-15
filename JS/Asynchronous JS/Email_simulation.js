users = [
    'archi@mail.com',
    'hina368@gmail.com',
    'priya@gmail.com',
    'siya@mail.com'
]

function sendMail(mail) {

    return new Promise((res, rej) => {
        let r = Math.floor(Math.random() * 5)

        setTimeout(function () {
            let r2 = Math.floor(Math.random() * 10)

            if (r2 < 5) {
                res('email send')
            }
            else rej('not send')
        }, r * 1000)

    })
}

async function sendMails(users) {

    let mailState = users.map(async (mail) => {
        try {
            return await sendMail(mail)
        }
        catch (err) {
            return err
        }
    })

    return await Promise.all(mailState)

}



(async () => {
    const finalResults = await sendMails(users);
    console.log(finalResults);

})();


// if promise rej but we handle it - that's why these all are resolve.
// Promise.all resolve only when all promise are resolved

// here we handle all rej promise and add into resolve , then promise.all() successfully resolve with ( success or err message )