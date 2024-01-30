Z-Prefix App Requirements
Below you will find the necessary requirements for the CRUD app you will build, as well as user stories that provide you with the desired behavior for your app.

Requirements
Your code must be made available to instructors for grading via the submission link at the end of this section. Instructors should be able to see your front end and back end code.
Your application must be compatible with the Google Chrome browser
Your application must use a front-end, back-end, and database
The database should contain at least two entities, a User and a Item, in a one to many relationship, as shown in the ERD below
You should style your application in order to lay out components in a sensible way
You should use the following stories to build out the functionality of your app


Rubric
| Criteria                | Unacceptable                                 | Beginning                                      | Developing                                    | Acceptable                                    | Exceptional                                  |
|-------------------------|----------------------------------------------|------------------------------------------------|-----------------------------------------------|-----------------------------------------------|----------------------------------------------|
| User Interface          | There is no User Interface                   | Simple UI                                      | Matches layout specified                      | User can create and see their resource        | Fully matches specified functionality        |
| App-Server Communication | There is no API Call                         | Calls are made but does not fully communicate with API | Communicates w/API by responding to call       | Full communication is laid out at least partially correctly, not just the first GET request | Communicates w/API correctly                   |
| Server                  | There is no server                          | Server exists without a GET route               | Server exists and has GET route                | Has multiple GET routes, has POST route        | Has GET, PUT/PATCH, POST, DELETE routes        |
| DB Interaction (Read & write) | There is no DB                           | DB exists                                     | DB & server communicate at all, DB contains dummy data | DB can store posts, can add new posts           | DB can perform all CRUD operations              |
| Authentication          | There is no authentication                  | A user can create an account                   | A user can log in                             | A user can see information specific to them    | Fully matches specified functionality        |

Stories
As an inventory manager I want to be able to create an account so that I can track my inventory.

As an inventory manager I want to be able to log into my account so that I can see my inventory of items.

After logging in, the inventory manager should be redirected to their inventory of items.
As an inventory manager I want to be able to create a new item so that I can share my item details with the world.

After the item is created, the inventory manager should be redirected to their inventory of items.
An item displays name, description, and quantity.
As an inventory manager I want to be able to see a my entire inventory of items.

The inventory of items should display the first 100 characters of each item description, with “...” at the end if the description is longer than 100 characters.
As an inventory manager I want to be able to see any individual item I have added.

The full item information should be displayed.
As an inventory manager I want to be able to edit an item so that I can fix any mistakes I made creating it.

When the user toggles edit mode, the page remains the same and the fields become editable.
As an inventory manager I want to be able to delete an item so that I can remove any unwanted content.

When the user deletes the item they should be redirected to their inventory of items.
As a visitor, who is not logged in, I want to be able to view all items created by every inventory manager so that I can browse every item.

Unauthenticated users should be able to view all items, and any single item.
The items should only display the first 100 characters of its description with “...” at the end if it is longer than 100 characters.
As a visitor, who is not logged in, I want to be able to view a specific item created by any user so that I can see all of its details.

Unauthenticated users should be able to view all items, and any single item.
As an inventory manager I want to be able to view all items created by every inventory manager so that I can browse every item.

Unauthenticated users should be able to view all items, and any single item.
Entity Relationship Diagram

