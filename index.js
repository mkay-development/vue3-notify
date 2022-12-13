const Vue3Notify = {
    install: (app, options) => {
        app.provide('notify',{
            add: function(title,message){
                Notification.requestPermission().then((result) => {
                    if (result == "granted") {
                      const icon = "assets/logo.png";
                
                      const notification = new Notification(title, {
                        body: message,
                        icon: icon
                      });
                    }
                  });
            }
        });
    }
};

export default Vue3Notify;