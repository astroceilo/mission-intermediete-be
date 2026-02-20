import conn from '../database/connection.js';

// get all users
export const getAllUsers = async () => {
    const [rows] = await conn.query(
        'SELECT id, full_name, email, gender, phone, role, status, created_at FROM users'
    );
    return rows;
};

// get user by id
export const getUserById = async (id) => {
    const [rows] = await conn.query(
        'SELECT id, full_name, email, gender, phone, role, status, created_at FROM users WHERE id = ?',
        [id]
    );
    return rows[0];
};

// get user by email
export const getUserByEmail = async (email) => {
    const [rows] = await conn.query(
        'SELECT id, full_name, email, gender, phone, role, status, created_at FROM users WHERE email = ?',
        [email]
    );
    return rows[0];
};

// create user
export const createUser = async (data) => {
    const {
        full_name,
        email,
        password,
        gender = null,
        phone = null,
        role = 'student',
        status = 'active',
    } = data;
    
    const [result] = await conn.query(
        `INSERT INTO users
        (full_name, email, password, gender, phone, role, status)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [full_name, email, password, gender, phone, role, status]
    );

    return {
        id: result.insertId,
        ...data,
    };
};

// update user
export const updateUser = async (id, data) => {
    const {
        full_name,
        email,
        password,
        gender,
        phone,
        role,
        status,
    } = data;

    await conn.query(
        `UPDATE users
        SET full_name = ?, email = ?, password = ?, gender = ?, phone = ?, role = ?, status = ?
        WHERE id = ?`,
        [full_name, email, password, gender, phone, role, status, id]
    );

    return getUserById(id);
};

// delete user
export const deleteUser = async (id) => {
    await conn.query(
        'DELETE FROM users WHERE id = ?',
        [id]
    );

    return { message: 'User deleted successfully' };
};
