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
This code is being authored using execution from node, but may need to be refactored as the ultimate goal is to make this script's functionality available through a Chrome Extension.