from flask import Flask, request
import flask
from sqlalchemy import func
from flask_cors import CORS
from werkzeug.security import check_password_hash, generate_password_hash
from flask_sqlalchemy import SQLAlchemy
import pymysql  

pymysql.install_as_MySQLdb()

app = Flask(__name__)

app.config.from_object('config.Config')

db = SQLAlchemy(app)

db.init_app(app)

cors = CORS(app, allow_headers=[
    "Content-Type", "Authorization", "Access-Control-Allow-Credentials", "withCredentials"],
            supports_credentials=True, resources={r"/*": {"origins": "*"}})


@app.route("/login", methods=["POST"])
def login():
    from models import User

    if flask.request.method == "POST" and "email" in flask.request.json["post_data"] and "password" in flask.request.json["post_data"]:
        users = db.session.query(User).filter(func.lower(flask.request.json["post_data"]["email"]) == func.lower(User.email)).all()
        if len(users) > 0:
            user = users[0]
            if check_password_hash(user.password, flask.request.json["post_data"]["password"]):

                flask.session["user_id"] = user.id
                flask.session["email"] = user.email
                flask.session["first_name"] = user.first_name
                flask.session["last_name"] = user.last_name
                flask.session["company_name"] = user.company_name
                flask.session["phone"] = user.phone
                flask.session["referral_code"] = user.referral_code

                temp_dict = dict()
                temp_dict["userId"] = user.id
                temp_dict["userEmail"] = user.email
                temp_dict["firstName"] = user.first_name
                temp_dict["lastName"] = user.last_name
                temp_dict["companyName"] = user.company_name
                temp_dict["phone"] = user.phone
                temp_dict["referralCode"] = user.referral_code

                db.session.add(user)
                db.session.commit()

                return flask.jsonify(ok=True, user_data=temp_dict)
            else:
                return flask.jsonify(ok=False, error="No such user or incorrect password")
        else:
            return flask.jsonify(ok=False, error="No such user or incorrect password")
            
    return flask.jsonify(ok=False, error='')


@app.route("/get_authenticated_user_information")
def get_authenticated_user_information():
    
    if "user_id" in flask.session and flask.session["user_id"]:
        from models import User

        user = db.session.query(User).get(flask.session["user_id"])

        temp_dict = dict()
        temp_dict["userId"] = user.id
        temp_dict["userEmail"] = user.email
        temp_dict["firstName"] = user.first_name
        temp_dict["lastName"] = user.last_name
        temp_dict["companyName"] = user.company_name
        temp_dict["phone"] = user.phone
        temp_dict["referralCode"] = user.referral_code

        flask.session["user_id"] = user.id
        flask.session["email"] = user.email
        flask.session["first_name"] = user.first_name
        flask.session["last_name"] = user.last_name
        flask.session["company_name"] = user.company_name
        flask.session["phone"] = user.phone
        flask.session["referral_code"] = user.referral_code

        return flask.jsonify(ok=True, user_data=temp_dict, is_logged_in=True)
    else:
        return flask.jsonify(ok=False,is_logged_in=False)

@app.route("/validate_email", methods=["POST"])
def validate_email():
    from models import User

    email = flask.request.json.get("email", "")

    user = db.session.query(User).filter(User.email == email).first()
    if user:
        return flask.jsonify(ok=True)
    else:
        return flask.jsonify(ok=False, error="No user exists with this email.")

@app.route("/forgot_password", methods=["POST"])
def forgot_password():
    from models import User

    post_data = flask.request.json.get("post_data", "")
    email = post_data["email"]
    password = post_data["password"]
    user = db.session.query(User).filter(User.email == email).first()
    user.password = generate_password_hash(password, salt_length=8)

    db.session.add(user)
    db.session.commit()

    return flask.jsonify(ok=True)

@app.route('/register', methods=['POST'])
def add_user():
    from app import db
    from models import User
    import uuid
    import datetime
    
    post_data = flask.request.json.get('post_data', '')
    validate_email = db.session.query(User).filter(User.email == post_data.get('workEmail', '')).all()
    if len(validate_email) > 0:
        return flask.jsonify(ok=False, error="Email already Exists, please try with a different email !")
    else:
        user = User()
        user.id = str(uuid.uuid4())
        user.password = generate_password_hash(post_data.get('password', ''), salt_length=8)
        user.created_on = datetime.datetime.now()
        user.first_name = post_data.get('firstName', '')
        user.last_name = post_data.get('lastName', '')
        user.email = post_data.get('workEmail', '')
        user.company_name = post_data.get('companyName', '')
        user.phone = post_data.get('phone', '')
        user.referral_code = post_data.get('referralCode', '')
        db.session.add(user)
        db.session.commit()
        return flask.jsonify(ok=True)


@app.route("/logout", methods= ["GET"])
def logout():
    from flask import session

    if "user_id" in flask.session:
        session.clear()
    return flask.jsonify(ok=True)

@app.route('/client-list', methods=['GET'])
def get_client_list():
    from models import Client

    client_list = db.session.query(Client).all()
    resp = [x.as_dict() for x in client_list]
    return {
        'data': resp
    }

@app.route('/client-add', methods=['POST'])
def post_client_add():
    from models import Client
    import uuid
    import datetime
    jsn = request.json
    
    client = Client()
    client.id = str(uuid.uuid4())
    client.name = jsn.get('name', '')
    client.vat_number = jsn.get('vatNumber', '')
    client.currency_name = jsn.get('currency', '')
    client.credit_limit = jsn.get('creditLimit', '')
    client.address = jsn.get('address1', '')
    client.address2 = jsn.get('address2', '')
    client.address3 = jsn.get('address3', '')
    client.address4 = jsn.get('address4', '')
    client.postcode = jsn.get('postcode', '')
    client.contact_name = jsn.get('contactName', '')
    client.contact_email = jsn.get('contactEmail', '')
    client.contact_number = jsn.get('contactNumber', '')
    client.contact_mobile = jsn.get('contactMobile', '')
    client.payment_due = jsn.get('paymentDue', '')
    client.payment_due_unit_time = jsn.get('paymentDueUnitTime', '')
    client.opening_balance = jsn.get('openingBalance', '')
    client.opening_balance_at = jsn.get('openingBalanceAt', '')
    client.created_at = datetime.datetime.now()
    client.updated_at = datetime.datetime.now()
    db.session.add(client)
    db.session.commit()
    return flask.jsonify(ok=True, message='Success Add Client')

if __name__ == '__main__':
    app.run()
