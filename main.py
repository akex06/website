from flask import Flask, render_template, redirect

app = Flask(__name__)
socials = {
    "github": "https://github.com/akex06",
    "spigot": "https://www.spigotmc.org/members/akex06.1030018/",
    "website": "https://akex.dev",
    "discord": "https://discord.gg/urfHdtBwjT",
    "email": "akex@akex.dev"
}

@app.route("/")
def root():
    return render_template("index.html")

@app.route("/<string:social>")
def media(social: str):
    print(1)
    return redirect(socials.get(social, "https://akex.dev"))

if __name__ == "__main__":
    app.run(debug = True)