# Puppeteer Search Tool
This project serves as a sandbox for the 'search' future of another tool.
It will ultimately be used to search for a song's tempo in Google and use the information from the search results to return an approximate tempo.

## How To Use It
Make sure you've run `npm install` for dependencies.  
Open a terminal inside the repo and run
`node index.js <search term>`  
The "search term" should be a song name w/ artist. "Tempo" will automatically be added to the search.

## Next Steps
  - [ ] Create regex pattern to grab "BPM", "Beats Per Minute", "Tempo of" information
  - [ ] Write logic for returned BPMs that will identify mode/median, establish a baseline number, and use values w/in a close threshold of the baseline to make adjustments.


### Notes
This code has been authored using execution from node.
The ultimate goal is to run this script from inside of a Chrome Extension, so the final version will need to be refactored using puppeteer-web or puppeteer-core.
This will demand a change from `puppeteer.launch` to `puppeter-connect()` to connect to **an existing chrome instance**.  
Note that the Puppeteer team deprecated puppeteer-web but that a puppeteer-web bundle can be created used browserify.

Helpful Links:  
[Stack Overflow - Puppeteer Inside Chrome](https://stackoverflow.com/questions/55184255/can-i-use-puppeteer-inside-chrome-extension)  
[Puppeteer-web Bundle through Browserify GitHub](https://github.com/entrptaher/puppeteer-web)