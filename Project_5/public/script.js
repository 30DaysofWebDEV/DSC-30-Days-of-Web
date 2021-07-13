class Book{
    constructor(name, email, message){
        this.name=name;
        this.email=email;
        this.message=message;
    }
}
class UI{
    static displayBooks(){
        const StoredBooks=[{name:'Your name',
        email:'Your email',
        message:
        'your message'}];
        const books=StoredBooks;
        books.forEach((book)=>UI.addBookToList(book));
    }
    static addBookToList(book){
        const list=document.querySelector('#book-list');
        const row=document.createElement('tr');
        row.innerHTML=`
        <td>${book.name}</td>
        <td>${book.email}</td>
        <td>${book.message}</td>
        `;
        list.appendChild(row);
    }
 /*   static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }*/
    static showAlert(message, className){
        const div=document.createElement('div');
        div.className=`alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container=document.querySelector('.container');
        const form= document.querySelector('#book-form');
        container.insertBefore(div,form);
        //vanish in 3 seconds
        setTimeout(()=>document.querySelector('.alert').remove(),3000);
    }
    static clearfields(){
    document.querySelector('#name').value='';
    document.querySelector('#email').value='';
    document.querySelector('#message').value='';  
        
    }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);
document.querySelector('#book-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=document.querySelector('#name').value;
    const email=document.querySelector('#email').value;
    const message=document.querySelector('#message').value;  
    //validate
    if(name===''||email===''||message===''){
        UI.showAlert('please fill in all the fields','success');
    }else{
    
    const book=new Book(name,email,message);

    UI.addBookToList(book);
    //clear fields
UI.clearfields();
 }
});
/*document.querySelector('#book-list').addEventListener('click',(e)=>{
    UI.deleteBook(e.target)
});*/