Delay = (ms) => new Promise(res => setTimeout(res, ms));

let isAdmin = true;

RegisterCommand('goto', async (source, args, raw) => {
	if (!isAdmin) {
		emit('chat:addMessage', {
			args: ['Ezt a parancsot csak admin használhatja!'],
			color: [255, 0, 0]
		});
		return;
	}

	if (args.length > 0) {
		//Játékoshoz megy
		//console.log(PlayerId());
		let p = GetPlayerFromServerId(1);

	}else{
		let WaypointHandle = GetFirstBlipInfoId(8);
		if (!DoesBlipExist(WaypointHandle)) {
			emit('chat:addMessage', {
				args: ['Elsőnek jelölj ki egy pontot.' ],
				color: [255, 0, 0]
			});
			return;
		}


		let waypointCoords = GetBlipInfoIdCoord(WaypointHandle);
		for(let i = 5; i < 1000; i++) {
			SetPedCoordsKeepVehicle(PlayerPedId(), waypointCoords[0], waypointCoords[1], i + 0.0);
			
			[foundGround, zPos] = GetGroundZFor_3dCoord(waypointCoords[0], waypointCoords[1], i + 0.0);
			if (foundGround) {
				SetPedCoordsKeepVehicle(PlayerPedId(), waypointCoords[0], waypointCoords[1], i + 0.0);
				break;
			}
			await Delay(5);
		}
	}

}, false);