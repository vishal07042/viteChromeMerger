





import './App.css'

function App() {

 


  function fn() {
		console.log("hello world");

		chrome.tabs.query(
			{ active: true, currentWindow: true },
			function (tabs) {
				let tab = tabs[0];
				console.log(tab);

				if (location.hostname == "chatgpt.com") {
					chrome.tabs.remove(tab.id);
				}
			}
		);
  }


  return (
    <>
      <button onClick={fn()}>click me</button>
    </>
  )
}

export default App
