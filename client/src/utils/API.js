import axios from "axios";

export default {
  // Gets all Documents
  getDocuments: function() {
    return axios.get("/api/collectionName");
  },
  // Gets the Document with the given id
  getDocument: function(id) {
    return axios.get("/api/collectionName/" + id);
  },
  // Deletes the Document with the given id
  deleteDocument: function(id) {
    return axios.delete("/api/collectionName/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/collectionName", bookData);
  }
};
