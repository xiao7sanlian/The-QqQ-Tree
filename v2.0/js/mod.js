let modInfo = {
	name: "The QqQ Tree 2.0",
	id: "QqQ2.0",
	author: "QqQeInfinity",
	pointsName: "QqQe308",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (308), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "QqQe616",
	name: "Idle Upgrade",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>QqQe616</h3><br>
		- Added the whole game.<br>
		- Endgame: e1.79e308 QqQe308...?<br>
		- You can also try to get more QqQe308.`

let winText = `恭喜！你励了！控制台输入QqQe308有彩蛋！`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(0)
	if (hasUpgrade('Q', 12)) gain = new Decimal(1.79e308)
	if (hasUpgrade('Q', 13)) gain = gain.times(upgradeEffect('Q', 13))
	if (hasUpgrade('Q', 14)) gain = gain.times(upgradeEffect('Q', 14))
	if (hasUpgrade('Q', 15)) gain = gain.times(upgradeEffect('Q', 15))
	if (hasUpgrade('Q', 21)) gain = gain.times(upgradeEffect('Q', 21))
		if (hasUpgrade('F', 11)) gain = gain.times(new Decimal("(e^308)1.79"))
			if (hasUpgrade('F', 12)) gain = gain.times(new Decimal("(e^616)1.79"))
	if (hasUpgrade('Q', 22)) gain = gain.pow(upgradeEffect('Q', 22))
		return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	//return player.points.gte(new Decimal("e1.79e308"))
	return hasUpgrade('F', 14)
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}

var QqQe308 = "都立秋了，不要再讨论什么QqQe308、QqQe308、QqQe308了。你带你的QqQe308回到家并不能给你带来任何实质性作用，朋友们兜里掏出一大把钱吃喝玩乐，你默默的在家里摆弄你的QqQe308。亲戚朋友吃饭问你收获了什么，你说你获得了个QqQe308，亲戚们懵逼了，你还在心里默默嘲笑他们，笑他们不懂你的QqQe308，不懂你的QqQe308、QqQe308和QqQe308，也笑他们一年到底连QqQe308是什么都不知道。你父母的同事都在说自己的子女一年的收获，儿子买了个房，女儿买了个车，姑娘升职加薪。你的父母默默无言，说我的儿子整天对着QqQe308傻乐，一天到晚都在搞什么QqQe308、什么QqQe308的，说懂不懂QqQe308的含金量，什么懂不懂QqQe308。"
