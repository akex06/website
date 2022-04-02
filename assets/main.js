function sendCommand(command) {

	command = command.toLowerCase()



	const h4 = document.createElement("h4")
	const cmdData = document.createElement("h4")
	const cmdText = document.createElement("h4")
		
	if (command in commands) {
		h4.innerHTML = commands[command]

	} else {
		h4.innerHTML = '<br>This command was not found, use "help" for a list of commands.<br><br>'
	}
		
	cmdData.innerHTML = "akex@akex:~$ "
	cmdData.className = "command"
		
	cmdText.className = "command"
	cmdText.setAttribute("id", "inputcommand")

	h4.className = "responseCommand"
	document.body.append(h4)

	if (command == "clear") {
		var elements = document.getElementsByClassName("command")
		while (elements.length > 0) {
			elements[0].parentNode.removeChild(elements[0])
		}

		var elements = document.getElementsByClassName("responseCommand")
		while (elements.length > 0) {
			elements[0].parentNode.removeChild(elements[0])
		}

	} else {
		document.getElementById("inputcommand").id = "donecommand"
	}
	document.body.append(cmdData)
	document.body.append(cmdText)


	window.scrollTo(0, document.body.scrollHeight)
}

window.addEventListener("keydown", keyPress);

function keyPress(e) {
	if (!(notKeys.includes(e.key))) {
		if (!(document.getElementById("inputcommand").innerHTML.length > 30)) {
			document.getElementById('inputcommand').innerHTML = document.getElementById('inputcommand').innerHTML + e.key
		}
	} else if (e.key == "Enter") {
		var command = document.getElementById("inputcommand").innerHTML;
		sendCommand(command)
	} else if (e.key == "Backspace") {
		document.getElementById("inputcommand").innerHTML = document = document.getElementById("inputcommand").innerHTML.slice(0, -1)
	}
}

const notKeys = ["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight", "Backspace", "Alt", "Control", "Tab", "CapsLock", "Enter", "Dead", "AltGraph", "ContextMenu", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Delete", "Pause", "Shift", "OS"]

const commands = {
	"help": "List of commands:<br>Help - Display this menu<br>GitHub - Get a link to my github<br>Spigot - Get a link to my Spigot page<br>Discord - Add me on Discord!<br>Projects - Get a list of my projects<br>Clear - Cleans the terminal",
	"spigot": "<a href = 'https://www.spigotmc.org/members/akex06.1030018/' target = '_blank' class = 'underline'>https://akex.dev/spigot</a>",
	"discord": "My Discord #: Akex06#9139",
	"projects": "My projects:\nPoopBot - <a href = 'https://poopbot.ml' target = '_blank' class = 'underline'>https://poopbot.ml</a>",
	"github": "<a href = 'https://github.com/akex06' target = '_blank' class = 'underline'>https://akex.dev/github</a>",
	"clear": "Clears the terminal"
}