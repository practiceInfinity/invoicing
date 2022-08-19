from locale import currency
from unicodedata import name
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

class Client(db.Model):
    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
    id=db.Column(db.String(200),primary_key=True)
    name=db.Column(db.String(50), nullable=True)
    vat_number=db.Column(db.String(50), nullable=True)
    currency=db.Column(db.String(10), nullable=True)
    currency_name=db.Column(db.String(100), nullable=True)
    credit_limit=db.Column(db.String(50), nullable=True)
    address=db.Column(db.String(255), nullable=True)
    address2=db.Column(db.String(255), nullable=True)
    address3=db.Column(db.String(255), nullable=True)
    address4=db.Column(db.String(255), nullable=True)
    postcode=db.Column(db.String(50), nullable=True)
    contact_name=db.Column(db.String(50), nullable=True)
    contact_email=db.Column(db.String(150), nullable=True)
    contact_number=db.Column(db.String(50), nullable=True)
    contact_mobile=db.Column(db.String(50), nullable=True)
    payment_due=db.Column(db.String(50), nullable=True)
    payment_due_unit_time=db.Column(db.String(20), nullable=True)
    opening_balance=db.Column(db.String(50), nullable=True)
    opening_balance_at=db.Column(db.DateTime, nullable=True)
    created_at=db.Column(db.DateTime)
    updated_at=db.Column(db.DateTime)
