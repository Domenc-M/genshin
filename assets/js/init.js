var characterArray = [];
var fiveStarArray = [];
var fourStarArray = [];

class character {
    constructor (name, rarity, devName) {
        this.name = name;
        this.rarity = rarity;
        this.devName = devName;
    }

    getRarity() {
        return(this.rarity);
    }

    getName() {
        return(this.name);
    }

    getDevName() {
        return(this.devName);
    }
}

window.onload = function() {
    initCharacters();
}


function initCharacters()
{

    /////////////////////////////////////////////INIT 5 STARS

    var hutao = new character("Hu Tao", 5, "Hu-Tao");
    characterArray.push(hutao);
    fiveStarArray.push(hutao);
    var tartaglia = new character("Tartaglia", 5, "Tartaglia");
    characterArray.push(tartaglia);
    fiveStarArray.push(tartaglia);
    var shogun = new character("Raiden Shogun", 5, "Shogun");
    characterArray.push(shogun);
    fiveStarArray.push(shogun);
    var eula = new character("Eula", 5, "Eula");
    characterArray.push(eula);
    fiveStarArray.push(eula);
    var ayaka = new character("Ayaka", 5, "Ayaka");
    characterArray.push(ayaka);
    fiveStarArray.push(ayaka);
    var albedo = new character("Albedo", 5, "Albedo");
    characterArray.push(albedo);
    fiveStarArray.push(albedo);
    var diluc = new character("Diluc", 5, "Diluc");
    characterArray.push(diluc);
    fiveStarArray.push(diluc);
    var ganyu = new character("Ganyu", 5, "Ganyu");
    characterArray.push(ganyu);
    fiveStarArray.push(ganyu);
    var jean = new character("Jean", 5, "Jean");
    characterArray.push(jean);
    fiveStarArray.push(jean);
    var kazuha = new character("Kazuha", 5, "Kazuha");
    characterArray.push(kazuha);
    fiveStarArray.push(kazuha);
    var keqing = new character("Keqing", 5, "Keqing");
    characterArray.push(keqing);
    fiveStarArray.push(keqing);
    var klee = new character("Klee", 5, "Klee");
    characterArray.push(klee);
    fiveStarArray.push(klee);
    var kokomi = new character("Kokomi", 5, "Kokomi");
    characterArray.push(kokomi);
    fiveStarArray.push(kokomi);
    var mona = new character("Mona", 5, "Mona");
    characterArray.push(mona);
    fiveStarArray.push(mona);
    var qiqi = new character("Qiqi", 5, "Qiqi");
    characterArray.push(qiqi);
    fiveStarArray.push(qiqi);
    var venti = new character("Venti", 5, "Venti");
    characterArray.push(venti);
    fiveStarArray.push(venti);
    var xiao = new character("Xiao", 5, "Xiao");
    characterArray.push(xiao);
    fiveStarArray.push(xiao);
    var yoimiya = new character("Yoimiya", 5, "Yoimiya");
    characterArray.push(yoimiya);
    fiveStarArray.push(yoimiya);
    var zhongli = new character("Zhongli", 5, "Zhongli");
    characterArray.push(zhongli);
    fiveStarArray.push(zhongli);

    ////////////////////////////////////////////////////// INIT 4 STARS

    var amber = new character("Amber", 4, "Amber");
    characterArray.push(amber);
    fourStarArray.push(amber);
    var barbara = new character("Barbara", 4, "Barbara");
    characterArray.push(barbara);
    fourStarArray.push(barbara);
    var beidou = new character("Beidou", 4, "Beidou");
    characterArray.push(beidou);
    fourStarArray.push(beidou);
    var bennett = new character("Bennett", 4, "Bennett");
    characterArray.push(bennett);
    fourStarArray.push(bennett);
    var chongyun = new character("Chongyun", 4, "Chongyun");
    characterArray.push(chongyun);
    fourStarArray.push(chongyun);
    var diona = new character("Diona", 4, "Diona");
    characterArray.push(diona);
    fourStarArray.push(diona);
    var fischl = new character("Fischl", 4, "Fischl");
    characterArray.push(fischl);
    fourStarArray.push(fischl);
    var kaeya = new character("Kaeya", 4, "Kaeya");
    characterArray.push(kaeya);
    fourStarArray.push(kaeya);
    var lisa = new character("Lisa", 4, "Lisa");
    characterArray.push(lisa);
    fourStarArray.push(lisa);
    var ningguang = new character("Ningguang", 4, "Ningguang");
    characterArray.push(ningguang);
    fourStarArray.push(ningguang);
    var noelle = new character("Noelle", 4, "Noelle");
    characterArray.push(noelle);
    fourStarArray.push(noelle);
    var razor = new character("Razor", 4, "Razor");
    characterArray.push(razor);
    fourStarArray.push(razor);
    var rosaria = new character("Rosaria", 4, "Rosaria");
    characterArray.push(rosaria);
    fourStarArray.push(rosaria);
    var sara = new character("Sara", 4, "Sara");
    characterArray.push(sara);
    fourStarArray.push(sara);
    var sayu = new character("Sayu", 4, "Sayu");
    characterArray.push(sayu);
    fourStarArray.push(sayu);
    var sucrose = new character("Sucrose", 4, "Sucrose");
    characterArray.push(sucrose);
    fourStarArray.push(sucrose);
    var xiangling = new character("Xiangling", 4, "Xiangling");
    characterArray.push(xiangling);
    fourStarArray.push(xiangling);
    var xingqiu = new character("Xingqiu", 4, "Xingqiu");
    characterArray.push(xingqiu);
    fourStarArray.push(xingqiu);
    var xinyan = new character("Xinyan", 4, "Xinyan");
    characterArray.push(xinyan);
    fourStarArray.push(xinyan);
    var yanfei = new character("Yanfei", 4, "Yanfei");
    characterArray.push(yanfei);
    fourStarArray.push(yanfei);
}