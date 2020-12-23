Wait = (ms) => new Promise(res => setTimeout(res, ms));

RegisterCommand('die', async (source, args, raw) => {
	let playerPed = GetPlayerPed(-1);

	if (!HasAnimDictLoaded('mp_suicide')) {
		RequestAnimDict('mp_suicide');
		
		while (!HasAnimDictLoaded('mp_suicide')){
			await Wait(10);
		}
	}

	//SetCurrentPedWeapon(playerPed, foundWeapon, true)

	TaskPlayAnim(playerPed, "mp_suicide", "pistol", 8.0, 1.0, -1, 2, 0, 0, 0, 0 );

	await Wait(750);

	SetPedShootsAtCoord(playerPed, 0.0, 0.0, 0.0, 0);
	SetEntityHealth(playerPed, 0);
}, false);