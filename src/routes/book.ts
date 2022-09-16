import { Router } from "express";
import addBook from "../controller/Books/addBook";
import getAllBooks from "../controller/Books/getAllBooks";
import getABook from "../controller/Books/getABook";
import deleteBook from "../controller/Books/deleteABook";
import updateBook from "../controller/Books/updateBook";

const router=Router();

router.post("/addBook",addBook);

router.get("/getAllBooks",getAllBooks);

router.get("/:id",getABook);

router.delete("/:id",deleteBook);

router.put("/updateBook/:id",updateBook)

export default router;