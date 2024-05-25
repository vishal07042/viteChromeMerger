async function getttiem() {
	try {
		let total = 0;
		const lendpoint =
			"https://api.wakatime.com/api/v1/users/current/durations?date=2024-05-19&api_key=waka_1cf3e027-8d81-4cb6-9e44-fd4bc705bc31";
		let today = new Date().toISOString().split("T")[0];

		const apiData = await fetch(lendpoint);
		const { data } = await apiData.json();

		data.map((e) => {
			total += e.duration;
		});

		console.log(total / 60 / 60);

		// data.map((e) => {
		// 	const total = 0;

		// 	total+=data[e].duration;
		// 	console.log(total)
		// })
	} catch (error) {
		console.log(error);
	}
}



//  async function togGetGoalStatus() {

// 	const goalendpoint =
// 		"https://api.wakatime.com/api/v1/users/current/goals/018df0dd-5237-4bf0-92ab-384a5e138ee7?api_key=waka_1cf3e027-8d81-4cb6-9e44-fd4bc705bc31";
// 	const goaldata = await fetch(goalendpoint);

// 	const {data} = await goaldata.json()

// 	 console.log(data.chart_data[4].actual_seconds);
// 	//4 ki jageh 6 kar dena
// 	 const hours = (data.chart_data[4].actual_seconds/60)/60
// 	 console.log(hours)

// 	 if(hours <1 && location.hostname == "codesandbox.io") {
// 		 const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
		 
// 		await chrome.tabs.remove(tab.id)
// 	 }

// 	}

// togGetGoalStatus()





async function togGetGoalStatus() {
	const goalendpoint =
		"https://api.wakatime.com/api/v1/users/current/goals/018df0dd-5237-4bf0-92ab-384a5e138ee7?api_key=waka_1cf3e027-8d81-4cb6-9e44-fd4bc705bc31";

	try {
		const goaldata = await fetch(goalendpoint);
		if (!goaldata.ok) {
			throw new Error(`HTTP error! status: ${goaldata.status}`);
		}
		const { data } = await goaldata.json();

		console.log(data.chart_data[6].actual_seconds); // Changed from 4 to 6
		const hours = data.chart_data[6].actual_seconds / 60 / 60;
		console.log(hours);

		if (hours < 1 && location.hostname == "chatgpt.com") {
			const [tab] = await chrome.tabs.query({
				active: true,
				currentWindow: true,
			});
			chrome.scripting.executeScript({
				target: { tabId: tab.id },
				function: () => {
					window.document.body=''
				},
			});
		}
	} catch (error) {
		console.error("Failed to get goal status or close tab", error);
	}
}

togGetGoalStatus();


















