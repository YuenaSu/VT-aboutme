import { Request, Response } from 'express';
import pool from '../database/db';

class BooksController {
  async getAllBooks({ query: { sort } }: Request, res: Response) {
    try {
      switch (sort) {
        case 'price_desc':
          res.json(await pool.query('SELECT * FROM book ORDER BY price DESC').then(({ rows }) => rows));
          break;
        case 'price_asc':
          res.json(await pool.query('SELECT * FROM book ORDER BY price ASC').then(({ rows }) => rows));
          break;
      }
      res.json(await pool.query('SELECT * FROM book').then(({ rows }) => rows));
    } catch (e) {
      throw new Error(`${e.message}`);
    }
  }

  async addOneBook({ body }: Request, res: Response) {
    try {
      const {link, cover, title, subtitle, authors, description, price} = body;
      const authorArray = authors.split(',');
      res.json(await pool.query('INSERT INTO book (link, cover, title, subtitle, authors, description, price) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
       [link, cover, title, subtitle, authorArray, description, price]).then(({ rows }) => rows[0]));
      
      // const { link, cover, title, subtitle, authors, description, price } = body;
    
      // const result = await pool.query(
      //   'INSERT INTO book (link, cover, title, subtitle, authors, description, price) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      //   [link, cover, title, subtitle, authors, description, price]
      // );
      
      // const insertedBook = result.rows[0];
      
      // res.json(insertedBook);
    } catch (e) {
      throw new Error(`${e.message}`);
    }
  }

  async getOneBookById({ params: { id } }: Request, res: Response) {
    res.json(
      await pool.query('SELECT * FROM book where id = $1', [id]).then(({ rows }) => rows[0]),
    );
  }

  async deleteOneBookById({ params: { id } }: Request, res: Response) {
    res.json(await pool.query('DELETE FROM book where id = $1', [id]).then(({ rows }) => rows[0]));
  }
}

export default new BooksController();
