const CvUploadSchema = require('../models/cvUploadModel');

const CvUploadController = function () {

    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            let fileUpload = new CvUploadSchema(data);

            fileUpload.save().then((data) => {
                resolve({status: 200, message: 'File Added Successfully',data:data});
            }).catch(err => {
                reject({status: 500, message: 'Error : ' + err});
            })
        })
    };

    this.findAll = () => {
        return new Promise((resolve, reject) => {
            CvUploadSchema.find().then((data) => {
                resolve({status: 200, data:data});
            }).catch(err => {
                reject({status: 500, message: 'Error : ' + err});
            })
        })
    };

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            CvUploadSchema.deleteOne({_id:id}).then(() => {
                resolve({status: 200, message: 'User Request Deleted Successfully'});
            }).catch(err => {
                reject({status: 500, message: 'Error : ' + err});
            })
        })
    };
};

module.exports = new CvUploadController();