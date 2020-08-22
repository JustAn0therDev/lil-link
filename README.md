# lil-link
A URL shortener made with TypeScript

This URL shortener is just an API that creates an ID for the requested URL and returns it to the user. As far as I know for the redirection itself, 
a client must implement this feature manually, which will be done in the near future. 

## Database

For the database, I used to have a simple database.txt file that I would store the `uuid` and `url` as key-value-pairs. Not only for the _obvious_ impacts of it, the lookup for a url
since I had to look line by line in the file was `O(N)`. Needless to say that was not optimal so I decided to go with a database that could be quicker to lookup records in and pretty simple to implement, and that's when I decided to go with SQLite (friendly reminder that this is only a personal project, so if needed do NOT use a local database to store this type of information, since it will have stuff you'll want to have more control over).

The "database.db" file in the root path was created with the DB Browser (although you can use whatever you like), I created a `urls` table with the columns `urlId`, `uuid` and `url`. An index was created for the `uuid` to make the search even faster, since the default lookup method is a linear `O(N)` (so with an index the lookup space-time complexity with be `O(log(N))` with B-trees).

The database model/business rules class is separated from everything else with it's respective folder, so if you want, you can implement another database without impacting the rest of the API's implementation.

## API Routes

There are three routes in the API. 
- `/version` | GET | Returns the current version of the API inside a "version" key. 
- `/url` | POST | Will save the requested URL that was sent in a JSON body. The URL will be validated and return the `HTTP Status 400` if not valid.
- `/urlId` | GET | This route will receive a route parameter (the `urlId` that was returned when you requested to create an ID) and return a response that should be either a valid URL or only a message if the URL was not found.

Except for the version route, both subsequent routes have the same response format: A JSON including a message and either an URL if requested with an Id or vice-versa.

## Running locally

Just run `npm install` and configure it as you want. The project already has a "database.db" sample file so you can use it if you want, just make sure to clean up the table and you're good to go.

As always, if you have any suggestions you can contact me or pull request/fork as you like.
