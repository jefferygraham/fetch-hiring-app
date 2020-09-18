# Fetch Rewards Coding Exercise - Software Engineering - Front End

This web app retrieves data from [https://fetch-hiring.s3.amazonaws.com/hiring.json](https://fetch-hiring.s3.amazonaws.com/hiring.json).

The data is display as a list of items to the user based on the following requirements:

- All the items grouped by "listId"
- Results sorted first by "listId" then by "name" when displaying.
- Any items where "name" is blank or null are filtered out.

The final result is displayed to the user in an easy-to-read list.

## Installation

To install this project:

1.  Clone into repo:
    - `$ https://github.com/jefferygraham/fetch-hiring-app`
2.  Go to the root of the project
    - `$ cd fetch-hiring-app/`
3.  Install the dependencies
    - `$ npm install`

## Running the project

- `$ yarn start`

## Project Resources

The project uses:

- [React](https://reactjs.org/)
