class TrieNode{
    constructor(){
        this.child = new Array(26).fill(0);
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    add(s) {
        let current = this.root;
        for(let i=0;i<s.length;i++){
            let key  = s[i].charCodeAt(0)-97;
            if(!current.child[key]){
                current.child[key] = new TrieNode();
            }
            current = current.child[key];
        }
        current.isEnd = true;
    }

    exists(word) {
        let current = this.root;
        for(let i=0;i<word.length;i++){
            let key = word[i].charCodeAt(0)-97;
            if(!current.child[key]){
                return false;
            }
            current = current.child[key];
        }
        return current.isEnd;
    }

    startswith(p) {
        let current = this.root;
        for(let i=0;i<p.length;i++){
            let key = p[i].charCodeAt(0)-97;
            if(current.child[key]===0){
                  return false;
            }
            current = current.child[key];
        }
        return true;
    }
}