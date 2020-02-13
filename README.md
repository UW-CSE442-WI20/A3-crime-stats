

# A3 Write Up
We created an interactive choropleth of Chicago which displays the [occurrences of a selected crime type in a selected year](https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-present-Dashboard/5cd6-ry5g) in each [police district](https://catalog.data.gov/dataset/boundaries-police-districts-current/resource/26ee8153-631d-423d-acd1-3d262dc9309a?inner_span=True). Darker shades of blue correspond to higher counts of crime in a district. For additional detail, we provide a legend to map the ranges of crime occurrences to particular shades of blue. This is also a useful tool to determine the range of total crimes as well as the minimum and maximum occurrences in Chicago. Users can also get details-on-demand by clicking a district to determine it’s district number and the count of crime occurrences in that district during the year. We preferred the map representation as it incorporates the spatial aspect of the data. We chose to make this process explorative by allowing a user to select year and crime type to subset the data. To select year and crime type, we provide standard dropdowns with each type of crime documented. 


We initially considered creating a similar map visualization in which clicking on a district would reveal additional charts and graphs about that region. We ultimately decided against this approach to better utilize the interactivity in the map as well as the data’s spatial qualities. We believe the choropleth increases efficiency in interpreting the distribution of crimes within a year. In addition, we also considered displaying the year selections in a sliding timeline. We decided against this design because it was more work than anticipated to create a clean, usable slider. We also noticed that the slider would be too wide to display the range of years in the dataset. Similarly, we were unsure the sliding design would be suitable for a large dataset which takes some time to load. Instead, we used a standardized dropdown to display the years. We felt this approach also made the user interface more cohesive and uniform. 


Work was split by user interface components. We met initially and decided to explore the Chicago crime dataset, share design ideas, and assign components of work. We then worked remotely and checked in on the status of the project through messenger and after lectures. Aeron’s main contributions were creating the base map of Chicago police districts and the legend which updates on user input. She also contributed to styling, testing, debugging, and the writeup. Zoe’s main contributions were cleansing, formatting, updating, and loading data from the API. As well as creating user input fields to update the data and map based on the legend provided by Aeron. She also contributed to designing, styling, testing, and debugging. Khai created the tooltip for the map, suggestion ideas, and styling for dropdown list and for links. Peggy’s main contributions were participating in discussion, creating and styling the timeline step slider. Our calculated total of people hours put into the project was around 70. The features that took the longest amount of time were creating the base map and cleansing and loading data from the API. The legend created the most unexpected complexities as the amount of crime varied largely between crime types. 


## Getting Started

This repo is set up to use the [Parcel](https://parceljs.org/) bundler. If you don't
like the way we've set things up, feel free to change it however you like!

The only restriction is that __your final HTML/CSS/JS output must be stored in the "docs" folder__ so that
GitHub knows how to serve it as a static site.

### Install

#### Required software

You must have Node.js installed. I prefer to install it using [nvm](https://github.com/nvm-sh/nvm)
because it doesn't require sudo and makes upgrades easier, but you can also just get it directly from
https://nodejs.org/en/.

#### Install dependecies

Once you've got `node`, run the command `npm install` in this project folder
and it will install all of the project-specific dependencies (if you're curious open up `package.json` to see where these are listed).

npm is the _node package manager_.

### Running the local dev server

To run the project locally, run `npm start` and it will be available at http://localhost:1234/.

### Building the final output

Run `npm run build` and all of your assets will be compiled and placed into the `docs/` folder. Note
that this command will overwrite the existing docs folder.

Once pushed to GitHub, the output should be available at UW-CSE442-WI20.github.io/your-repo-name/


## Other notes

### Using 3rd party libraries

You are more than welcome to use open source packages such as D3.js, just make sure to cite these.

To add a new one run `npm install --save <library-name>`, e.g. `npm install --save d3`. This will
add the library locally so it is available for use in your JS files. It will also add `d3` to the
list of dependencies in `package.json`.

_Note that if you install a library your teammates will need to install it too. Once the dep is added
to `package.json` simply running `npm install` in this directory will download the new dependency._
