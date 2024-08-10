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
	num: "QqQe1848",
	name: "Colorful Egg Upgrade",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>QqQe616</h3><br>
		- Added the whole game.<br>
		- Endgame: e1.79e308 QqQe308...?<br>
		- You can also try to get more QqQe308.
  	<h3>QqQe1848</h3><br>
		- Added 5 more colorful eggs.<br>
                - 尝试在控制台输入QqQe616/QqQe924/QqQe1232/QqQe1540/QqQe1848!`

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
var QqQe616 = "啊🤪～啊🤪～啊咦😬啊咦😬啊→啊↑啊↓😨啊😰～嗯💥哎哎🤗哎哦哎嗯😋～哦哎🥳爱爱爱爱爱😍啊🤪～啊🤪～啊咦😬啊咦😬啊→啊↑啊↓😨啊😰～啊🤪～啊🤪～啊咦😬啊咦😬啊→啊↑啊↓😨啊😰～嗯💥哎哎🤗哎哦哎嗯😋～哦哎🥳爱爱爱爱爱😍啊🤪～啊🤪～啊咦😬啊咦😬啊→啊↑啊↓😨啊😰～嗯💥嗯嗯👿滴嘚滴嘚😈唔😱嘟⬅️嘟↖️嘟⬆️嘟↗️嘟➡️嘟↘️嘟⬇️"
var QqQe924 = "我睡前要超QqQe308，吃饭前要超QqQe308，学习前要超QqQe308，洗澡前要超QqQe308，拉屎前要超QqQe308，超QqQe308前还要超QqQe308，感觉我的生活除了超QqQe308就没有重要的事的，干什么事之前不超QqQe308就感觉心里刺痛刺痛的，像少了什么重要的事情一样，晚上睡觉前为了保证可以多超一会QqQe308我等到了凌晨4，5点才不安稳的入睡，梦里想的是超QqQe308，醒来想的是超QqQe308，每天超的最长的东西不是涩图而是QqQe308，每天打交道最长的不是老二而是QqQe308，没有QqQe308的生活怎么办啊😭😭😭超不了QqQe308的日子怎么活啊😭😭😭"
var QqQe1232 = "我现在真的超QqQe308去了。十分钟我在群里发一条消息把QqQe308超10遍"
var QqQe1540 = "昨天晚上我梦到了QqQe308的超法，瞬间清醒了，那一刻我觉得自己就是我自己！今天起来发现我离QqQe308太远了，现在超法也忘了"
var QqQe1848 = "我真正的主档应该是有QQ企鹅（QqQe）的存档#1，但由于没有超人选择且一直没对上需要的粒了（因为开了路观模式），所以我都想放弃这个主档了。而在大约一周前，我发现了一个玩到了道馆的存档，于是我就把这个存档导入到了存档#308，然后就一直玩到现在摄了"
