function delayedMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 1000);
    });
}


delayedMessage().then((message) => {
    document.getElementById("output").textContent = message;
});
