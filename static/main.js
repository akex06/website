// Commands
createCommandWrapper()
document.getElementById("input").focus();

const commands = {
    "help": {
        "description": "List of all commands",
        "response": ""
    },
    "github": {
        "description": "Check my GitHub <3",
        "response": "https://akex.dev/github"
    },
    "spigot": {
        "description": "Check my Spigot posts and star them :3",
        "response": "https://akex.dev/spigot"
    },
    "website": {
        "description": "This website",
        "response": "https://akex.dev"
    },
    "discord": {
        "description": "My super active (dead) Discord",
        "response": "https://akex.dev/discord"
    },
    "info": {
        "description": "Some info about me",
        "response": "My information:\n\tName: Alessandro\n\tAge: 16\n\tCountry: Spain\n\tProgramming languages:\n\t\tPython\n\t\tJava\n\t\tJavascript\n\t\tSQL\n\t\t(HTML and CSS)"
    },
    "email": {
        "description": "My email",
        "response": "akex@akex.dev"
    },
    "ls": {
        "description": "List of files",
        "response": "Desktop Documents Downloads Music Pictures Public Templates Videos"
    },
    "ping": {
        "description": "ping",
        "response": "Pong!"
    },
    "contact": {
        "description": "Check my contacts",
        "response": "You can contact be via:\n\tEmail: akex@akex.dev\n\tDiscord: Akex06#9139</a>"
    },
    "clear": {
        "description": "Clears the terminal",
        "response": ""
    }
}

function createCommandWrapper() {
    const divCommand = document.createElement("div");
    divCommand.className = "command";
    divCommand.id = "command";

    const divInput = document.createElement("div");
    
    const promt = document.createElement("p");
    promt.innerHTML = "akex@akex:~$ ";
    
    const input = document.createElement("input");
    input.className = "input";
    input.id = "input";
    input.type = "text";
    input.autocomplete = "off";
    
    divInput.append(promt);
    divInput.append(input);

    divCommand.append(divInput);

    document.body.append(divCommand);
    document.getElementById("input").focus()
}

function getOutput(command) {
    if (command == "help") {
        output = "List of all commands:"
        for (const [key, value] of Object.entries(commands)) {
            output += "\n\t" + key + " - " + value["description"]
        }
    } else {
        if (command in commands) output = commands[command]["response"];
        else output = "That command was not found, please use the command `help` for a list of commands";

        output = output.split(" ");
        for (let i = 0; i < output.length; i++) {
            if (!output[i].startsWith("https")) continue;
            
            output[i] = "<a href='" + output[i] + "'target='_blank'>" + output[i] + "</a>"
        }
        output = output.join(" ")
    }

    return output;
}

function processCommand(command) {
    command = command.replace("sudo ", "")
    if (command == "clear") {
        document.querySelectorAll(".command").forEach(element => {element.remove()});
        createCommandWrapper();
        return;
    }

    output = getOutput(command)

    const p = document.createElement("p");
    p.className = "output";
    p.innerHTML = output;
    
    const divCommand = document.getElementById("command");
    divCommand.append(p);
    divCommand.removeAttribute("id");

    createCommandWrapper();
}

// Key event
window.addEventListener("keydown", keyPress)
function keyPress(e) {
    if (e.which != 13) {
        document.getElementById("input").focus();
        return;
    }

    const input = document.getElementById("input");
    input.removeAttribute("id")
    input.disabled = true

    processCommand(input.value)
}

// Time
var proccess = window.setInterval(updateTime, 1000)

var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

login = document.getElementById("login").innerHTML
function updateTime() {
	var today = new Date();
    document.getElementById("login").innerHTML = login.replace("{time}", "System information as of " + week[today.getDay()].substring(0, 3) + " " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " GMT+2");
}
