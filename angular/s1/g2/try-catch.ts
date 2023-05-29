function dividi ( a: number, b: number):number { 
    try{
        if (b === 0) {
            throw new Error("0 non è divisibile")
        }
        return a / b // ritornerà infinity...
    } catch (err){
        console.error(err)
        return 0
    }
    finally{
        console.log('divisione effettuata con successo');
    }
}

console.log(dividi(0,2))