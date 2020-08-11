# lil-link
A URL shortener made with TypeScript

This URL shortener is just an API that creates an ID for the requested URL and returns it to the user. As far as I know for the redirection itself, 
a client must implement this feature manually, which will be done in the near future. 

## "Database"

For the "database", I'm using a simple `.txt` file that stores a part of an `uuid` and saves it as "key value" in the file (e.g. `uuid url`), separating each "key value" by "\n" characters. For the worst case in a search (for
a recently registered URL, which will be the last record in the file), the complexity of a search will be `O(N)`, "N" being the number of records in the file (I'll make it better). 

I might try using MongoDB for this, since it's a pretty straight forward implementation and usage. I also tried as much as I could to make all of the logic of persisting the 
`uuid` and URL data separated from the classes that should only be an interface between the database and the controllers and from the routes and other configurations, so when it comes to changing
how the implementation of a database should be made, it won't affect any other class.


## API Routes

There are three routes in the API. 
- `/url` | POST | Will save the requested URL that was sent in a JSON body. The URL will be validated and return the `HTTP Status 400` if not valid.
- `/urlId` | GET | This route will receive a route parameter (the `urlId` that was returned when you requested to create an ID) and return a response that should be either a valid URL or only a message if the URL was not found.
- `/version` | GET | Returns the current version of the API. 

Except for the version route, both subsequent routes have the same response format: A JSON including a message and either an URL if requested with an Id or vice-versa.

## Running locally

Just run `npm install` and configure it as you want (might want to create a database.txt file for this version as well, I had problems with the node `fs` module when trying to write to a file that didn't exist
even though the docs say it should create a file if it doesn't find one).

As always, if you have any suggestions you can contact me or pull request/fork as you like.
