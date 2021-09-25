class TrieNode{
    constructor(letter){
        this.letter = letter;
        this.word = null;
        this.nextLetter = [];
    }
}
class TrieSet{
    constructor(){
        this.head = new TrieNode(null);
    }

    insert(word){
        function _rInsert(curNode, insertWord, index){
            if (index == insertWord.length){
                if (insertWord == curNode.word){
                    return false;
                }
                else{
                    curNode.word = insertWord;
                    return true;
                }
            }

            var i;
            for (i in curNode.nextLetter){
                if (curNode.nextLetter[i].letter == insertWord[index]){
                    // Next letter found. Recur into that node.
                    return _rInsert(curNode.nextLetter[i], insertWord, index+1);
                }
                else if (curNode.nextLetter[i].letter > insertWord[index]){
                    // Next letter not found, but letters come after. Insert new node in the array immediately before and recur into it.
                    curNode.nextLetter.splice(i, 0, new TrieNode(insertWord[index]));
                    return _rInsert(curNode.nextLetter[i], insertWord, index+1);
                }
            }
            // Letter not found and we are at the end. Insert new node at the end of the array and recur into it.
            curNode.nextLetter.push(new TrieNode(insertWord[index]));
            return _rInsert(curNode.nextLetter[curNode.nextLetter.length-1], insertWord, index+1);
            
        }

        return _rInsert(this.head, word.toLowerCase(), 0);
    }

    contains(word){
        function _rContains(curNode, searchWord, index){
            if (index == searchWord.length){
                // At the end. Final check.
                return searchWord == curNode.word;
            }

            for (var i in curNode.nextLetter){
                if (curNode.nextLetter[i].letter == searchWord[index]){
                    return _rContains(curNode.nextLetter[i], searchWord, index+1);
                }
                else if (curNode.nextLetter[i].letter > searchWord[index]){
                    // Next letter not found, return false. For efficiency.
                    return false;
                }
            }
            // If we get here, next letter not found.
            return false;
        }

        return _rContains(this.head, word.toLowerCase(), 0);
    }

    first(){
        // Empty trie check.
        if (this.head.nextLetter.length == 0){
            return null;
        }

        function _rFirst(curNode){
            if (curNode.nextLetter[0].word !== null){
                // We are at the absolute first word alphabetically.
                return curNode.nextLetter[0].word;
            }
            else{
                // We should have at least one branch if the word is null. Go to the first.
                return _rFirst(curNode.nextLetter[0]);
            }
        }

        return _rFirst(this.head);
    }

    last(){
        // Empty trie check.
        if (this.head.nextLetter.length == 0){
            return null;
        }

        function _rLast(curNode){
            if (curNode.nextLetter.length == 0){
                // We are at the absolute last word alphabetically.
                return curNode.word;
            }
            else{
                // Go to the node with the last letter alphabetically.
                return _rLast(curNode.nextLetter[curNode.nextLetter.length-1]);
            }
        }

        return _rLast(curNode.nextLetter[curNode.nextLetter.length-1]);
    }

    remove(word){
        function _rRemove(curNode, searchWord, index){
            if (index >= searchWord.length){
                // We're past the word's length.
                return false;
            }
            for (var i in curNode.nextLetter){
                if (curNode.nextLetter[i].letter == searchWord[index]){
                    // See if we have a match.
                    if (curNode.nextLetter[i].word == searchWord){
                        // Check if the found node has branches. If not, remove the node.
                        if (curNode.nextLetter[i].nextLetter.length > 0){
                            curNode.nextLetter[i].word = null;
                        }
                        else{
                            curNode.nextLetter.splice(i, 1);
                        }
                        return true;
                    }
                    else{
                        // Recur into the next node if the word isn't there.
                        return _rRemove(curNode.nextLetter[i], searchWord, index+1);
                    }
                }
            }
            // If we get here, word not found.
            return false;
        }

        return _rRemove(this.head, word, 0);
    }

    size(){
        function _rSize(curNode){
            var total = 0;
            if (curNode.word !== null){
                total++;
            }
            for (i in curNode.nextLetter){
                total += _rSize(curNode.nextLetter[i]);
            }
            return total;
        }
        return _rSize(this.head);
    }

    next(word){
        function _rNext(curNode, searchWord, index){
            // End condition.
            if (index == searchWord.length){
                if (curNode.word != searchWord && curNode.word !== null){
                    // We have the next sequential word.
                    return curNode.word;
                }
                
                if (curNode.nextLetter.length > 0){
                    var traverse = curNode.nextLetter[0];
                    while (traverse.word === null){
                        traverse = traverse.nextLetter[0];
                    }
                    return traverse.word;
                }
                else{
                    return null;
                }
            }
            else{
                var nextWord;
                for (i in curNode.nextLetter){
                    if (curNode.nextLetter[i].letter == searchWord[index]){
                        nextWord = _rNext(curNode.nextLetter[i], searchWord, index+1);
                        if (nextWord !== null){
                            return nextWord;
                        }
                    }
                    else if (curNode.nextLetter[i].letter > searchWord[index]){
                        nextWord = curNode.nextLetter[i];
                        while (nextWord.word === null){
                            nextWord = nextWord.nextLetter[0];
                        }
                        return nextWord.word;
                    }
                }
            }
            // If we get here, word not found.
            return null;
        }

        return _rNext(this.head, word, 0);
    }

    autoComplete(searchWord, maxResults=-1){
        var traverse = this.head;
        for (var i = 0; i < searchWord.length; i++){
            var letterFound = false;
            for (var j in traverse.nextLetter){
                if(searchWord[i] == traverse.nextLetter[j]){
                    letterFound = true;
                    traverse = traverse.nextLetter[j];
                    break;
                }
            }
            if (!letterFound){
                // No results found.
                return [];
            }
        }
        
        function _rAutoComplete(curNode){
            var resultArray = [];
            if (curNode.word !== null){
                resultArray.push(curNode.word);
            }
            for (i in curNode.nextLetter){
                resultArray = resultArray.concat(_rAutoComplete(curNode.nextLetter[i]));
            }
            return resultArray;
        }

        var searchResult = _rAutoComplete(this.head);
        // Note: This is the easy way to do it. Hard, more efficient way involves checking length in the recursion itself.
        if (maxResults > 0 && maxResults < searchResult.length){
            searchResult.length = maxResults;
        }
        return searchResult;
    }
}