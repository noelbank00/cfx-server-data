RegisterCommand('duty', async (source, args, raw) => {
    let id = GetPlayerServerId();

    emitNet("admin:onDuty", id);
}, false);