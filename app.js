const { appendFile } = require('fs');
const mongoose = require('mongoose');
const multer = require('multer')

appendFile.listen(3000,()=>{
  console.log('Server is running')
});