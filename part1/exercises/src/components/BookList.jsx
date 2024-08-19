export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://prodimage.images-bn.com/pimages/9781250899569_p0_v10_s600x595.jpg";
   let book2 = "https://prodimage.images-bn.com/pimages/9781649374073_p0_v3_s600x595.jpg";
   let book3 = "https://prodimage.images-bn.com/pimages/9781368104807_p0_v17_s600x595.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Wedding People" />
         <img src={book2} alt="The Wren in the Holly Library (Deluxe Limited Edition)" />
         <img src={book3} alt="The Book of Bill (B&N Exclusive Edition)" />
      </div>      
   );
}