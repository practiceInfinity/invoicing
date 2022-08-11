# invoicing

## Vue Js setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<br/>

## Flask and MYSQL setup

<br/>

### Create virtual env using the below command inside your root directory.

```
python3 -m venv <your_virtual_env_name>
```

### Activate the virtual environment using the below command.

```
source venv/bin/activate
```

### Install all the requirements for the backend from requirements.txt file.

```
pip install -r requirements.txt
```

### Create a database inside MySQL 

<br/>

### Create your .env file inside the root directory. The .env file should be as below:

```
SECRET_KEY="<your_secret_key>" 
SQLALCHEMY_DATABASE_URI="mysql://<username>:<password>@localhost/<dbname>"
SQLALCHEMY_TRACK_MODIFICATIONS=False
TEMPLATES_FOLDER='templates'
STATIC_FOLDER='static'
FLASK_ENV=development
DEBUG=True
```

### Run the file db_init.py to create all the tables in your MYSQL database.

```
python3 db_init.py
```
