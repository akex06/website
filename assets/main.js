document.getElementById("inputcommand").focus()

function sendCommand(command) {

	command = command.toLowerCase().replace("sudo ", "")


	const h4 = document.createElement("h4")
	const cmdData = document.createElement("h4")
	const cmdText = document.createElement("input")
	
	if (command in commands) {
		h4.innerHTML = commands[command]

	} else {
		h4.innerHTML = 'This command was not found, use "help" for a list of commands.'
	}
		
	cmdData.innerHTML = "akex@akex:~$ "
	cmdData.className = "command"
		
	cmdText.className = "command"
	cmdText.setAttribute("id", "inputcommand")

	h4.className = "responseCommand"
	document.getElementById("inputcommand").disabled = true
	
	if (command != "") {
		document.body.append(h4)
	} else {
		const br = document.createElement("br")
		br.className = "break"
		document.body.append(br)
	}
	
	if (command == "clear") {
		var elements = document.getElementsByClassName("command")
		while (elements.length > 0) {
			elements[0].parentNode.removeChild(elements[0])
		}

		var elements = document.getElementsByClassName("responseCommand")
		while (elements.length > 0) {
			elements[0].parentNode.removeChild(elements[0])
		}

		var elements = document.getElementsByClassName("break")
		while (elements.length > 0) {
			elements[0].parentNode.removeChild(elements[0])
		}

	} else {
		document.getElementById("inputcommand").id = "donecommand"
	}
	document.body.append(cmdData)
	document.body.append(cmdText)
	cmdText.focus()


	window.scrollTo(0, document.body.scrollHeight)
}
console.log(navigator.userAgent)
window.addEventListener("keydown", keyPress);

function keyPress(e) {
	if (e.which == 8 || e.which == 46) {
		e.preventDefault()
	}
	if (!(notKeys.includes(e.key))) {
		if (!(document.getElementById("inputcommand").innerHTML.length > 30)) {
			document.getElementById('inputcommand').innerHTML = document.getElementById('inputcommand').innerHTML + e.key
		}
	} else if (e.key == "Enter") {
			var command = document.getElementById("inputcommand").value;
			sendCommand(command)
	} else if (e.key == "Backspace") {
			var command = document.getElementById("inputcommand").value = document.getElementById("inputcommand").value.slice(0, -1)
	}
	
}

window.addEventListener("click", function() {
	var input = document.getElementById("inputcommand")
	input.focus()
})

const notKeys = ["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight", "Backspace", "Alt", "Control", "Tab", "CapsLock", "Enter", "Dead", "AltGraph", "ContextMenu", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Delete", "Pause", "Shift", "OS"]

const commands = {
	"help": "List of commands:<br class = 'sep40'>Help - Display this menu<br class = 'sep40'>GitHub - Get a link to my github<br class = 'sep40'>Spigot - Get a link to my Spigot page<br class = 'sep40'>Discord - Add me on Discord!<br class = 'sep40'>Projects - Get a list of my projects<br class = 'sep40'>Clear - Cleans the terminal<br class = 'sep40'>Ping - Pong<br class = 'sep40'>Tabby - My Discord bot<br class = 'sep40'>Langs - My programming languages knowledge",
	"spigot": "<a href = 'https://www.spigotmc.org/members/akex06.1030018/' target = '_blank' class = 'underline'>https://akex.dev/spigot</a>",
	"discord": "My Discord: Akex06#9139<br>My server: <a href = 'https://discord.gg/CMyXkdRnUu' target='_blank' class='underline'>https://akex.dev/discord</a>",
	"projects": "My projects:<br>PoopBot - <a href = 'https://poopbot.ml' target = '_blank' class = 'underline'>https://akex.dev/poopbot</a><br>AquaticMC - <a href = 'https://discord.aquaticmc.club' class = 'underline' target = '_blank'>https://akex.dev/aquaticmc</a><br>Tabby - <a href = 'https://discord.tabbybot.xyz/' target='_blank'class='underline'>https://akex.dev/tabby</a><br>NeoMatrix - <a href='https://discord.neomatrix.ml/' target='_blank' class='underline'>https://akex.dev/neomatrix</a>",
	"github": "<a href = 'https://github.com/akex06' target = '_blank' class = 'underline'>https://akex.dev/github</a>",
	"info": "My information:<br>Name: Alex<br>Age: 15<br>Country: Spain<br>Programming Languages:<br><a class = 'sep40'>Python</a><br><a class = 'sep40'>Java</a><br><a class = 'sep40'>JavaScript</a><br><a class = 'sep40'>Html</a><br><a class = 'sep40'>CSS</a>",
	"clear": "Clears the terminal",
	"hello world": "Hello, World!",
	"ls": "Desktop Documents Downloads Music Pictures Public Templates Videos",
	"ping": "Pong!",
	"hello": "Hello!",
	"contact": "You can contact be via:<br><a class = 'underline sep40'>Email: akex@akex.dev</a><br><a class = 'underline sep40'>Discord: Akex06#9139</a>",
	"tabby": "My multifunction Discord Bot (Spanish & English) <a href = 'https://discord.tabbybot.xyz' target = '_blank'>https://akex.dev/akex",
	"langs": "HTML: 2017<br>CSS: 2017<br>Python: 2018<br>JavaScript: 2019<br>Java: 2020<br>Rust 2022"
}

var proccess = window.setInterval(updateTime, 1000)

var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function updateTime() {
	var today = new Date();
	str = "System information as of " + week[today.getDay()].substring(0, 3) + " " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " GMT+2"
	document.getElementById("time").innerHTML = str
}