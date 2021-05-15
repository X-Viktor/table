# Table

### App Configuration 
```.sh
$ nano config/.env
```

| Key            | Description               |
| :------------- | :------------------------ |
| `SECRET_KEY`   | Secret key from Django    |
| `DEBUG`        | Debug mode True or False  |
| `DATABASE_URL` | URL from database.        |

### Run the project
```.sh
$ pip install -r requirements.txt
$ cd table-ui/
$ npm run build
$ cd ../
$ ./manage.py collectstatic
$ ./manage.py runserver
```

