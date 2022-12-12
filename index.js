const Vue3Notify = {
    install: (app, options) => {
        console.log('Hallo Welt');

        app.config.globalProperties.$notify = {
            add: () => {
                console.log('Hello World');
            }
        }
    }
};

export default Vue3Notify;