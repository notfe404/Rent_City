-- ENUMS
CREATE TYPE user_role AS ENUM ('CUSTOMER','STAFF','ADMIN');
CREATE TYPE user_status AS ENUM ('ACTIVE','SUSPENDED');

CREATE TYPE vehicle_status AS ENUM ('AVAILABLE','RENTED','MAINTENANCE');
CREATE TYPE booking_status AS ENUM ('CONFIRMED','ACTIVE','COMPLETED','CANCELLED','NO_SHOW');
CREATE TYPE payment_status AS ENUM ('PENDING','PAID','FAILED','REFUNDED');

-- USERS
CREATE TABLE users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255),
    full_name VARCHAR(100),
    phone VARCHAR(20),
    role user_role,
    status user_status,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- REFRESH TOKENS
CREATE TABLE refresh_tokens (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    token_hash TEXT,
    expires_at TIMESTAMPTZ
);

-- USER DOCUMENTS
CREATE TABLE user_documents (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    doc_type VARCHAR(20),
    doc_number VARCHAR(50),
    verified BOOLEAN DEFAULT FALSE
);

-- VEHICLE CATEGORY
CREATE TABLE vehicle_categories (
    id UUID PRIMARY KEY,
    name VARCHAR(50)
);

-- VEHICLES
CREATE TABLE vehicles (
    id UUID PRIMARY KEY,
    category_id UUID REFERENCES vehicle_categories(id),
    license_plate VARCHAR(20),
    status vehicle_status
);

-- VEHICLE IMAGES
CREATE TABLE vehicle_images (
    id UUID PRIMARY KEY,
    vehicle_id UUID REFERENCES vehicles(id),
    url TEXT
);

-- LOCATIONS
CREATE TABLE locations (
    id UUID PRIMARY KEY,
    name VARCHAR(100)
);

-- BOOKINGS
CREATE TABLE bookings (
    id UUID PRIMARY KEY,
    customer_id UUID REFERENCES users(id),
    vehicle_id UUID REFERENCES vehicles(id),
    status booking_status
);

-- CHECKIN REPORT
CREATE TABLE checkin_reports (
    id UUID PRIMARY KEY,
    booking_id UUID REFERENCES bookings(id),
    report_type VARCHAR(10)
);

-- PAYMENTS
CREATE TABLE payments (
    id UUID PRIMARY KEY,
    booking_id UUID REFERENCES bookings(id),
    amount NUMERIC,
    status payment_status
);

-- PROMOTIONS
CREATE TABLE promotions (
    id UUID PRIMARY KEY,
    code VARCHAR(20)
);

-- COUPON USAGE
CREATE TABLE coupon_usages (
    id UUID PRIMARY KEY,
    promotion_id UUID REFERENCES promotions(id),
    user_id UUID REFERENCES users(id)
);

-- REVIEWS
CREATE TABLE reviews (
    id UUID PRIMARY KEY,
    booking_id UUID REFERENCES bookings(id),
    rating INT
);

-- NOTIFICATIONS
CREATE TABLE notifications (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    title VARCHAR(200)
);