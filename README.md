Intervention App [Angularjs](https://angularjs.org/) & [Djnango](https://www.djangoproject.com/)
==================================================================================
#### Make sure you have these installed on your OS: 
#### [python2.7](https://www.python.org/)
#### [Postgesql](https://www.postgresql.org/)

---------------------------------------------------
Follow these steps to setup this application 
---------------------------------------------------
#### Create a directory with the name workspace and navigate into it 
#### `mkdir workspace`
#### `cd workspace`
#### Create a virtual environment in your current directory (workspace) for a project and activate it:
#### `virtualenv -p /usr/bin/python2.7 intervention_app`
#### `source intervention_app/bin/activate`
##### Then, clone the repository inside the current directory 'workspace':
`git clone https://github.com/mounasagar94/interventionApp.git`

##### Change your directory to the cloned project:
`cd interventionApp`

##### Then, install the project prerequisites located in base.txt file ( if you are not in the switable directody, you should navigate to /requirements/ ):
`pip install -r base.txt`

##### Also you need to create a new postgres database, and then change the database variables in the settings.py file:
follow the steps in this link  [Create Database](https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e)

#### To run the application : 
`djando-admin runserver`