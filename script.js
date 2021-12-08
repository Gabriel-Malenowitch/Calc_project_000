var res = ''
var list = []
var listOperators = []
var showr = "0"
var final = 0
const operators = ['x', '/', '-', '+']
var equal = 0

String.prototype.replaceAt = function(index){
    return this.substr(0, index) + this.substr((index+1))
}
function removeFinal(arrayStr){
    let strrr = ''
    let splits = arrayStr.split("")
    console.log(splits)
    for(let i = 0; i < arrayStr.length - 1; i++){
        strrr += String(splits[i])
    }
    return strrr
}

const Buttons = {
    zero()   {App.resetShow(); res+='0'; App.reload()},
    one()    {App.resetShow(); res+='1'; App.reload()},
    two()    {App.resetShow(); res+='2'; App.reload()},
    four()   {App.resetShow(); res+='4'; App.reload()},
    tree()   {App.resetShow(); res+='3'; App.reload()},
    five()   {App.resetShow(); res+='5'; App.reload()},
    six()    {App.resetShow(); res+='6'; App.reload()},
    seven()  {App.resetShow(); res+='7'; App.reload()},
    eight()  {App.resetShow(); res+='8'; App.reload()},
    nine()   {App.resetShow(); res+='9'; App.reload()},

    sum()    {res+='+'; App.show(); Op.add("+"); App.reload()},
    minus()  {res+='-'; App.show(); Op.add("-"); App.reload()},
    x()      {res+='x'; App.show(); Op.add("x"); App.reload()},
    divisor(){res+='/'; App.show(); Op.add("/"); App.reload()},
    point()  {res+='.'; App.reload()},
    
    equals() {
        list.push(Number(res.replaceAt(res.length)))
        App.show()
        Op.operation() 
        equal = 1
        res = ' '; 
        list = []
        listOperators = []
        final = 0
        App.reload()
    },
    clear(){
        res = ' '; 
        list = []
        listOperators = []
        final = 0
        showr = "0"
        App.reload()
    },
    back(){
        res = res.replaceAt(res.length-1)
        showr = showr.replaceAt(showr.length-1)
        App.reload(1);
    }
    
}

const Op = {
    operation(){
        final = list[0]
        for(let i = 0; i < list.length; i++){
            try{
                switch (listOperators[i]) {
                    case "x":
                        final = final * list[i+1]
                        console.log("x")
                        break;
                    case '/':
                        final = final / list[i+1]
                        console.log("/")
                        break;
                    case "+":
                        final = final + list[i+1]
                        console.log("+")
                        break;
                    case "-":
                        final = final - list[i+1]
                        console.log("-")
                        break;
                }
                final = Number(final).toFixed(2)
            }
            catch{
                logMyErrors(e);
            }
        }
        showr = final
    },

    add(signal){
        list.push(Number(res.replaceAt(res.length-1)))
        listOperators.push(signal)
        res = ''
    }
}

const App = {
    editHTML(){
        document.getElementById('resSpan').textContent = showr
    },

    reload(n){
        if(n == undefined){this.show()}
        this.editHTML()
        App.print()
    },

    resetShow(){
        if(equal == 1){
            showr = '0'
            equal = 0
        }
    },

    show(){
        if(showr == "0"){
            if(res[res.length-1] > 0){
                showr = ""
                showr += res[res.length-1]
            }
        }else{
            if(res != ''){
                if(showr != "0"){
                    showr += res[res.length-1]
                }
            }
        }
    },

    print(){
        console.log("========================\n\n")
        console.log("res = " + res)
        console.log("list = " + list)
        console.log("listOperators = " + listOperators)
        console.log("show = " + showr)
        console.log("final = " + final)
        console.log("equal = "+ equal)
        console.log("\n========================")
    }
}

App.reload()
