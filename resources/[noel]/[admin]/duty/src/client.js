RegisterCommand('duty', async (source, args, raw) => {
    emitNet("admin:onDuty", source);

    emit("pNotify:SendNotification", {
        text = "Testing Notification",
        type = "error",
        timeout = 5000,
        layout = "centerLeft",
        queue = "left"
    });

}, false);