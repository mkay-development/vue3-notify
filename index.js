const Vue3Notify = {
    install: (app, options) => {
        app.provide('notify', {
            add: function (title, message, icon) {
                Notification.requestPermission().then((result) => {
                    if (result == "granted") {
                        const notification = new Notification(title, {
                            body: message,
                            icon: icon
                        });

                        notification.addEventListener('click', () => {
                            console.log('test');
                          });
                    }
                });
            }
        });
    }
};

export default Vue3Notify;