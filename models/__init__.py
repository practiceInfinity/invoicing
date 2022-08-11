from app import db

class User(db.Model):
    id=db.Column(db.String(200),primary_key=True)
    first_name=db.Column(db.String(50),nullable=False)
    last_name=db.Column(db.String(50),nullable=True)
    email=db.Column(db.String(150),nullable=False, unique=True)
    password=db.Column(db.String(150),nullable=False)
    company_name=db.Column(db.String(50),nullable=False)
    phone=db.Column(db.String(12),nullable=False)
    referral_code=db.Column(db.String(200),nullable=False)
    created_on=db.Column(db.DateTime,nullable=False)