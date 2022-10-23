## Introduction to the codebase

The file which when executed from the command line, prints the values based on the arguments passed. The values are printed from the following API.

API Endpoint: https://api.publicapis.org/entries

## Running the code

The codebase is written in node.js. Hence, for this particular file to run,

1. Download or clone this repository
2. From the command line, type `node index.js <Category> <limit>`

Possible values of `category` passed as an argument

1. Animals
2. Anime
3. Blockchain
4. Books
5. Business
6. Calendar
7. Weather
8. Transportation
9. Health
10. Jobs
11. Music

## Introduction to the sql file

We are selecting BrokerName, Broker ID and the COUNT of the customers that have the same ID as the BrokerID column in the customer table as the broker table and we are trying to group it by the BrokerID so that if there are 3 records for the same one, we are displaying it as one GROUP and ordering it alphabetically by the broker name.
