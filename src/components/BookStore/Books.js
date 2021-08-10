import React, { Component } from 'react'
import BooksList from './BooksList/BooksList'
import classes from './Books.module.css'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'

class Books extends Component {
    state = {
        booksData: [
            { id: 1, author: 'Robert Greene', title: 'Mastery' },
            { id: 2, author: 'Brian Tracy', title: 'Eat that frog' },
            { id: 3, author: 'Angela Duckworth', title: 'Grit' },
            { id: 4, author: 'Ray Papasan', title: 'The one thing' },
        ],
        showBooks: false
    }
    toggleBooks = () => {
        const show = this.state.showBooks
        this.setState({
            showBooks: !show
        })
    }
    bookRemoveHandler = (bookIndex) => {
        const books = [...this.state.booksData]
        books.splice(bookIndex, 1)
        this.setState({
            booksData: books
        })
    }
    nameChangeHandler = (event, index) => {
        const bookIndex = this.state.booksData.findIndex(book => {
            return book.id === index
        });
        const book = { ...this.state.booksData[bookIndex] }
        book.title = event.target.value;

        const books = [...this.state.booksData]
        books[bookIndex] = book

        this.setState({
            booksData: books
        })
    }
    render() {
        const books = this.state.booksData.map((book, index) => <BooksList
            key={book.id}
            {...book}
            remove={() => this.bookRemoveHandler(index)}
            change={(event) => this.nameChangeHandler(event, book.id)} />)

        let allbooks = null
        if (this.state.showBooks) {
            allbooks = books;
        }
        const assignedClasses = [];
        if (this.state.booksData.length <= 2) {
            assignedClasses.push(classes.Red)
        }
        if (this.state.booksData.length <= 1) {
            assignedClasses.push(classes.Blue)
        }
        return (
            <div className={classes.button}>
                <h1 className={assignedClasses.join(' ')}>Books to Read!</h1>
                {allbooks}
                <button onClick={this.toggleBooks}>Show Books</button>
                <NavigationItems />
            </div>
        )
    }
}

export default Books