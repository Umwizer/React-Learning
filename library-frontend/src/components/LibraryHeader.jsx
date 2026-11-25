
function LibraryHeader(){
    const LibraryHeader = "LIBRARY MANAGEMENT SYSTEM"
    const books =[
        {
            code:"SOD1001",
            name:"SOFT Eng",
            price:109
        },
        {
            code:"SENG101",
            name:"Software development",
            price:200
        },{
            code:"FIN001",
            name:"Master accointing",
            price:300
        },{
            code:"ERO1",
            name:"Entrepreneurship",
            price:400
        }
    ]
    return(
    <div>
        <div><h1>{LibraryHeader}</h1></div>
        <div><h2>List of available books</h2></div>
        <div>
            <ul>
                {books.map(book=> <ol key={book.code}> The book name is {book.name} and this is the price {book.price}</ol>)}
                
            </ul>
            <div>The total price for {books.length} {books.length > 1 ? 'books':'book'} is  {books.reduce((total, book) => total+book.price, 0)} </div>
        </div>
        <div>This is the library management for students books</div>
    </div>
    )
}
export default LibraryHeader;