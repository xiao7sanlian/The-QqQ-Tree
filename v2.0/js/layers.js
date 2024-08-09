addLayer("Q", {
    name: "QqQeInfinity", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Q", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#18e308",
    requires: new Decimal(1.79e308), // Can be a function that takes requirement increases into account
    resource: "QqQeInfinity", // Name of prestige currency
    baseResource: "QqQe308", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "q", description: "Q: 进行QqQeInfinity重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    passiveGeneration()
    {
        mult = 0
        if (hasUpgrade('Q', 23)) mult = 1
        if (hasUpgrade('F', 12)) mult = 1
        return mult
    },
    autoUpgrade() {upg=false
        if(hasUpgrade('F', 12))upg=true
           return upg},
    upgrades: {
        11: {
            name: "作者的留言",
            description: "作者留言：1.79e308秒内能通关我让你随便超",
            cost: new Decimal (-1),
        },
        12: {
            name: "开始游戏",
            description: "开始生产QqQe308，速度为1.79e308/s",
            cost: new Decimal (1),
        },
        13: {
            name: "通货膨胀",
            description: "生产QqQe308的速度x(当前QqQe308的数量+1)^0.5",
            cost: new Decimal (2),
            effect() {
                return player.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        14: {
            name: "继续膨胀",
            description: "上个升级的效果为原来的平方",
            cost: new Decimal (1.33e154),
            effect() {
                return player.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        15: {
            name: "恭喜通关",
            description: "生产QqQe308的速度x(当前QqQe308的数量+1)^308",
            cost: new Decimal ("1e2085"),
            effect() {
                return player.points.add(1).pow(308)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        21: {
            name: "没想到吧还有一堆升级",
            description: "生产QqQe308的速度x(当前QqQeInfinity的数量+1)^1.79e308",
            cost: new Decimal ("e1.79e308"),
            effect() {
                return player[this.layer].points.add(1).pow(1.79e308)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked() {return player.Q.points.gte(new Decimal ("e1.79e308"))}
        },
        22: {
            name: "",
            description: "生产QqQe308的速度^(当前QqQeInfinity的数量+1)^1e2085",
            cost: new Decimal ("e1e50000"),
            effect() {
                return player[this.layer].points.add(1).pow(new Decimal ("1e2085"))
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"^" },
            unlocked() {return player.Q.points.gte(new Decimal ("e1.79e308"))}
        },
        23: {
            name: "无尽挂机",
            description: "自动获得QqQeInfinity",
            cost: new Decimal ("(e^308)1.79"),
            unlocked() {return player.Q.points.gte(new Decimal ("e1.79e308"))}
        },
        24: {
            name: "",
            description: "解锁下一个层级",
            cost: new Decimal ("(e^616)1"),
            unlocked() {return player.Q.points.gte(new Decimal ("e1.79e308"))}
        },
    },
})

addLayer("F", {
    name: "QqQF308", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#18f308",
    requires: new Decimal("(e^616)1"), // Can be a function that takes requirement increases into account
    resource: "QqQF308", // Name of prestige currency
    baseResource: "QqQeInfinity", // Name of resource prestige is based on
    baseAmount() {return player.Q.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "f", description: "F: 进行QqQF308重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade('Q', 24)||player.F.points.gte(new Decimal(1))},
    passiveGeneration()
    {
        mult = 0
        if (hasUpgrade('F', 13)) mult = new Decimal('1.79e308')
        return mult
    },
    upgrades: {
        11: {
            name: "F308",
            description: "获得QqQe308数量x1.79F308",
            cost: new Decimal (1),
        },
        12: {
            name: "全自动",
            description: "自动购买QqQeInfinity升级，且可以自动获取QqQeInfinity，使QqQe308数量x1.79F616",
            cost: new Decimal (2),
            unlocked() {return hasUpgrade('F', 11)}
        },
        13: {
            name: "无尽挂机2",
            description: "每秒获得1.79e308个QqQF308",
            cost: new Decimal (5),
            unlocked() {return hasUpgrade('F', 12)}
        },
        14: {
            name: "恭喜通关",
            description: "到达真正的Endgame",
            tooltip:"只需要在获得上一个升级后挂1.79e308秒即可",
            cost: new Decimal ("3.2041e616"),
            unlocked() {return hasUpgrade('F', 13)}
        },
    },
})