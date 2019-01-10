
//checking if the user write something in the email field
export const validate = (element,formdata=[]) => {
    let error = [true,''];

    //checking if the email is valid
    if(element.validation.email){
        const valid = /\S+@\S+\.\S+/.test(element.value)
        const message = `${!valid ? 'Must Be Valid Email' : ''}`;
        error = !valid ? [valid,message] : error;
    }

    //checking if the user type something in the confirm password field
    if(element.validation.confirm){
        const valid = element.value.trim() === formdata[element.validation.confirm].value;
        const message = `${!valid ? 'Password Do Not Match' : ''}`;
        error = !valid ? [valid,message] : error;
    }

    //checking if the user write something in the form
    if(element.validation.required){
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'This Field Is Required' : ''}`;
        error = !valid ? [valid,message] : error;
    }
    return error
}

export const update = (element, formdata, formName) => {
    const newFormdata = {
        ...formdata
    }
    //element copy
    const newElement = {
        //passing the email
        ...newFormdata[element.id]
    }

    newElement.value = element.event.target.value;

    if(element.blur){
        let validData = validate(newElement,formdata);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];
    }

    newElement.touched = element.blur;
    //passing the data from the copy element to original
    newFormdata[element.id] = newElement;
    return newFormdata;
}

export const generateData = (formdata, formName) =>{
    let dataToSubmit = {};

    //checks the data and passing the value
    for(let key in formdata){
        if(key !== 'confirmPassword'){
            dataToSubmit[key] = formdata[key].value;
        }
    }
    return dataToSubmit;
}

//checking if the user typing is valid before sending the data to db
export const isFormValid = (formdata, formName) =>{
    let formIsValid = true;

    for(let key in formdata){
        formIsValid = formdata[key].valid && formIsValid;
    }
    return formIsValid;
}

export const populateOptionFields = (formdata,arrayData=[],field) =>{
    const newArray = [];
    const newFormdata = {...formdata};

    arrayData.forEach(item=>{
        newArray.push({key:item._id, value:item.name});
    });
    newFormdata[field].config.options = newArray;
    return newFormdata;
}

export const resetFields = (formdata,formName) => {
    const newFormdata = {...formdata};

    for(let key in newFormdata){
        if( key === 'images' ){
            newFormdata[key].value = [];
        }else{
            newFormdata[key].value = '';
        }
        newFormdata[key].valid = false;
        newFormdata[key].touched = false;
        newFormdata[key].validationMessage = '';
    }
    return newFormdata;
}

export const populateFields = (formData, fields) => {
    for(let key in formData){
        formData[key].value = fields[key];
        formData[key].valid = true;
        formData[key].touched = true;
        formData[key].validationMessage = '';
    }

    return formData;
}