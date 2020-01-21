export class Grammar {
    //rex = new RegExp("regular expr", "flags");
    constructor(grammar: string) {
        let sequence: string = grammar;
        let symbol: Set<string> = new Set();
        let definitions: Set<string> = new Set();
        let trial: string[] = sequence.split("\n");
        for (let i = 0; i < trial.length; ++i) {
            let current: string[] = trial[i].split(" -> ");
            if (symbol.has(current[0])) {
                throw new Error("redefining a symbol");
            }
            else {
                symbol.add(current[0]);
                definitions.add(current[1]);
            }
        }
    }
}