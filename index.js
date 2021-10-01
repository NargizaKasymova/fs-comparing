const fs = require('fs')

function existInPatterns() {
    readInput =  fs.readFile('input.txt', 'utf8', (err, data) => {
        if(err) {
            throw err
        }
        inputArray = data.split('\r\n')
        // console.log(inputArray)
        readPatterns =  fs.readFile('patterns.txt', 'utf8', (err, content) => {
            if(err) {
                throw err
            }
            patternsArray = content.split('\r\n')
            // console.log(patternsArray)
            for(let i = 0; i<inputArray.length; i++) {
                if(patternsArray.includes(inputArray[i])) {
                    console.log(inputArray[i])
                }
            }
        
        })
    })
 
}

existInPatterns()

function existInThisLine() {
    readInput =  fs.readFile('input.txt', 'utf8', (err, data) => {
        if(err) {
            throw err
        }
        inputArray = data.split('\r\n')
        
        readPatterns =  fs.readFile('patterns.txt', 'utf8', (err, content) => {
            if(err) {
                throw err
            }
            patternsArray = content.split('\r\n')
            
            for(let i = 0; i < patternsArray.length; i++) {
                for(let j = 0; j < inputArray.length; j++) {
                                    
                    if(patternsArray[i]===inputArray[j]) {
                        if(i===j){
                            console.log(inputArray[j])
                        }
                    }
                }
            }
        
        })
    })
 
}

existInThisLine()


