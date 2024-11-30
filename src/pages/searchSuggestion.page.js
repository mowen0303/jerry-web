import { useState } from 'react';
import GlobalConfig from '../global';

export default function SearchSuggestionPage() {

    const currentFile = import.meta.url;
    const currentFileName = currentFile.slice(currentFile.lastIndexOf("/")+1)


    /**
      * * * * * * * * * * * * * * * * * * * * 
      *          Core code start            * 
      * * * * * * * * * * * * * * * * * * * * 
    */

    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);

    const repository = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];

    function handelInputChange(event) {
        setQuery(event.target.value);
        const result = searchSuggestions(repository, event.target.value)
        setResult(result)
    }

    function searchSuggestions(repository, customerQuery) {
        if (customerQuery.length >= 2) {
            const filteredResult = repository.filter(x=>{
                return x.startsWith(customerQuery);
            })
            filteredResult.sort();
            filteredResult.splice(3);
            return filteredResult;
        } else {
            return [];
        }
    }

    /**
      * * * * * * * * * * * * * * * * * * * * 
      *          Core code end              * 
      * * * * * * * * * * * * * * * * * * * * 
    */


    return (
        <div className="pageContainer">
            <div className="questionBox">
                <h1>Amazon Customer Reviews Example</h1>
                <h2>Question Description</h2>
                <p>Amazon is building a way to help customers search reviews quicker by providing real-time suggestions to search terms when the customer starts typing. When given a minimum of two characters into the search field, the system will suggest at most three keywords from the review word repository. As the customer continues to type in the reviews search bar, the relevant keyword suggestions will update automatically.</p>
                <p>Write an algorithm that will output a maximum of three keyword suggestions after each character is typed by the customer in the search field.</p>
                <p>If there are more than three acceptable keywords, return the keywords that are first in alphabetical order.</p>
                <p>Only return keyword suggestions after the customer has entered two characters. Keyword suggestions must start with the characters already typed.</p>
                <p>Both the repository and the customerQuery should be compared in a case-insensitive way.</p>

                <h2>Input</h2>
                <ul>
                    <li><strong>repository</strong>: A list of unique strings representing the various keywords from the Amazon review comment section.</li>
                    <li><strong>customerQuery</strong>: A string representing the full search query of the customer.</li>
                </ul>

                <h2>Output</h2>
                <p>Return a list of lists of strings in lowercase, where each list represents the keyword suggestions made by the system as the customer types each character of the customerQuery. Assume the customer types characters in order without deleting or removing any characters. If an output is not possible, return an empty array ([]).</p>

                <h2>Example</h2>
                <p><strong>Input:</strong></p>
                <p>repository = ["mobile", "mouse", "moneypot", "monitor", "mousepad"]<br />
                    customerQuery = "mouse"</p>
                <p><strong>Output:</strong></p>
                <code>
                    {
                    `
                    [
                        ["mobile", "moneypot", "monitor"],
                        ["mouse", "mousepad"],
                        ["mouse", "mousepad"],
                        ["mouse", "mousepad"],
                        ["mouse", "mousepad"]
                    ]
                    `
                    }
                    
                </code>
                <h2>Explanation</h2>
                <p>The chain of words that will generate in the search box will be mo, mou, mous, mouse.</p>
                <p>And each line from the output shows the suggestion of "mo", "mou", "mous", "mouse" respectively in each line.</p>
                <p>For the keyword suggestions made by the system that are generated for "mo", the matches that will be generated are: ["mobile", "mouse", "moneypot", "monitor", "mousepad"]. Alphabetically, they will be reordered to ["mobile", "moneypot", "monitor", "mouse", "mousepad"]. Thus the keyword suggestions made by the system are ["mobile", "moneypot", "monitor"].</p>
            </div>
            <div className="answerContainer">
                <p>Try to type "mouse"</p>
                <p><a target='_blank' href={GlobalConfig.GITHUB_URL+currentFileName}>View Source Code</a></p>
                <input
                    value={query}
                    onChange={(e) => handelInputChange(e)}
                />
                <ul>
                    {
                        result.map(x => <li>{x}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}